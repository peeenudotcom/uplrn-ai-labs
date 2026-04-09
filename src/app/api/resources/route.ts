import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { email, name, resource } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const db = createServiceClient()

    await db.from('resource_leads').insert({
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
      resource: resource || 'unknown',
    })

    // Also add to newsletter subscribers
    await db
      .from('subscribers')
      .upsert({ email: email.toLowerCase().trim(), name: name?.trim() || null }, { onConflict: 'email' })

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Resource lead error:', message)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
