// Admin access control
// Checks if the currently authenticated user is on the admin allowlist.

import { createServerSupabase } from '@/lib/supabase-server'

function getAdminEmails(): string[] {
  const raw = process.env.ADMIN_EMAILS || ''
  return raw
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

export async function requireAdmin(): Promise<{ email: string }> {
  const supabase = await createServerSupabase()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user?.email) {
    throw new AdminAuthError('Not authenticated', 401)
  }

  const adminEmails = getAdminEmails()
  if (!adminEmails.includes(user.email.toLowerCase())) {
    throw new AdminAuthError('Not authorized', 403)
  }

  return { email: user.email }
}

export async function isCurrentUserAdmin(): Promise<boolean> {
  try {
    await requireAdmin()
    return true
  } catch {
    return false
  }
}

export class AdminAuthError extends Error {
  constructor(message: string, public status: number) {
    super(message)
    this.name = 'AdminAuthError'
  }
}
