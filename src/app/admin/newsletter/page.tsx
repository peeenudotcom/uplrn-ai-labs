import { redirect } from 'next/navigation'
import { requireAdmin, AdminAuthError } from '@/lib/admin'
import { createServiceClient } from '@/lib/supabase'
import { NewsletterComposer } from './newsletter-composer'

export const metadata = {
  title: 'Admin — Newsletter',
  robots: { index: false },
}

export default async function AdminNewsletterPage() {
  try {
    await requireAdmin()
  } catch (err) {
    if (err instanceof AdminAuthError && err.status === 401) {
      redirect('/login?next=/admin/newsletter')
    }
    // 403 — logged in but not an admin
    redirect('/')
  }

  // Fetch stats
  const db = createServiceClient()
  const [{ count: activeSubs }, { data: recentIssues }] = await Promise.all([
    db.from('subscribers').select('*', { count: 'exact', head: true }).eq('active', true),
    db.from('newsletter_issues').select('id, subject, status, sent_at, sent_to_count').order('created_at', { ascending: false }).limit(5),
  ])

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Newsletter Admin</h1>
            <p className="text-sm text-slate-500 mt-0.5">
              {activeSubs ?? 0} active subscribers
            </p>
          </div>
          <a href="/dashboard" className="text-sm text-slate-600 hover:text-slate-900">
            ← Back to dashboard
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        <NewsletterComposer subscriberCount={activeSubs ?? 0} />

        {/* Recent issues */}
        {recentIssues && recentIssues.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Issues</h2>
            <div className="space-y-2">
              {recentIssues.map((issue) => (
                <div
                  key={issue.id as string}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{issue.subject as string}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {issue.status === 'sent'
                        ? `Sent to ${issue.sent_to_count} on ${issue.sent_at ? new Date(issue.sent_at as string).toLocaleDateString() : ''}`
                        : 'Draft'}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      issue.status === 'sent'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {issue.status as string}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
