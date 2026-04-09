import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const db = createServiceClient()

    // Upsert so duplicate emails don't error
    const { error } = await db
      .from('subscribers')
      .upsert({ email: email.toLowerCase().trim(), name: name?.trim() || null }, { onConflict: 'email' })

    if (error) throw new Error(error.message)

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Newsletter subscribe error:', message)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
