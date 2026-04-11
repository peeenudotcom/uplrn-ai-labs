import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import { requireAdmin, AdminAuthError } from '@/lib/admin'

interface SubscriberRow {
  email: string
  name?: string | null
}

interface ImportRequest {
  rows: SubscriberRow[]
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    await requireAdmin()

    const body = (await req.json()) as ImportRequest
    if (!Array.isArray(body.rows) || body.rows.length === 0) {
      return NextResponse.json({ error: 'rows array is required' }, { status: 400 })
    }

    if (body.rows.length > 5000) {
      return NextResponse.json(
        { error: 'Maximum 5000 rows per import. Split your file.' },
        { status: 400 }
      )
    }

    const db = createServiceClient()

    // Normalize, validate, dedupe
    const seen = new Set<string>()
    const validRows: SubscriberRow[] = []
    const errors: { row: number; email: string; reason: string }[] = []

    body.rows.forEach((row, index) => {
      const email = (row.email || '').trim().toLowerCase()
      const name = (row.name || '').trim() || null

      if (!email) {
        errors.push({ row: index + 1, email: '', reason: 'empty email' })
        return
      }
      if (!EMAIL_REGEX.test(email)) {
        errors.push({ row: index + 1, email, reason: 'invalid format' })
        return
      }
      if (seen.has(email)) {
        errors.push({ row: index + 1, email, reason: 'duplicate in upload' })
        return
      }
      seen.add(email)
      validRows.push({ email, name })
    })

    if (validRows.length === 0) {
      return NextResponse.json({
        added: 0,
        updated: 0,
        skipped: 0,
        errored: errors.length,
        errors: errors.slice(0, 20),
      })
    }

    // Upsert in batches of 500
    let upserted = 0
    const batchSize = 500
    for (let i = 0; i < validRows.length; i += batchSize) {
      const batch = validRows.slice(i, i + batchSize)
      const { error, count } = await db
        .from('subscribers')
        .upsert(
          batch.map((r) => ({ email: r.email, name: r.name, active: true })),
          { onConflict: 'email', count: 'exact' }
        )

      if (error) {
        console.error('Batch upsert error:', error)
        errors.push({ row: i + 1, email: batch[0].email, reason: `batch failed: ${error.message}` })
        continue
      }
      upserted += count ?? batch.length
    }

    return NextResponse.json({
      ok: true,
      received: body.rows.length,
      valid: validRows.length,
      upserted,
      errored: errors.length,
      errors: errors.slice(0, 20),
    })
  } catch (error) {
    if (error instanceof AdminAuthError) {
      return NextResponse.json({ error: error.message }, { status: error.status })
    }
    console.error('Subscriber import error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Import failed' },
      { status: 500 }
    )
  }
}
