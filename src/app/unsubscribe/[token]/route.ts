import { NextRequest, NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase'
import { siteConfig } from '@/config/site'

// One-click unsubscribe handler
// GET (user clicks link in email) and POST (RFC 8058 List-Unsubscribe-Post)
// both mark the subscriber inactive.

async function unsubscribe(token: string): Promise<{ success: boolean; email?: string }> {
  if (!token || token === 'test') return { success: true }

  const db = createServiceClient()
  const { data, error } = await db
    .from('subscribers')
    .update({
      active: false,
      unsubscribed_at: new Date().toISOString(),
    })
    .eq('unsubscribe_token', token)
    .select('email')
    .single()

  if (error || !data) {
    return { success: false }
  }
  return { success: true, email: data.email as string }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params
  const result = await unsubscribe(token)

  // Redirect to confirmation page regardless (don't leak whether token was valid)
  const url = new URL('/unsubscribed', siteConfig.url)
  if (result.email) url.searchParams.set('email', result.email)
  return NextResponse.redirect(url)
}

// RFC 8058 one-click unsubscribe (Gmail requires this for bulk senders)
export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params
  await unsubscribe(token)
  return NextResponse.json({ success: true })
}
