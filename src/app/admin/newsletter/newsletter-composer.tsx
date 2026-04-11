'use client'

import { useState } from 'react'

type Status = 'idle' | 'generating' | 'testing' | 'sending' | 'sent' | 'error'

export function NewsletterComposer({ subscriberCount }: { subscriberCount: number }) {
  const [theme, setTheme] = useState('')
  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState('')
  const [testEmail, setTestEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState<string>('')

  async function handleGenerate() {
    setStatus('generating')
    setMessage('')
    try {
      const res = await fetch('/api/admin/newsletter/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ theme: theme || undefined }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Generation failed')
      setSubject(data.subject)
      setHtml(data.html)
      setStatus('idle')
      setMessage('Draft generated. Review it, tweak, then test or send.')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Generation failed')
    }
  }

  async function handleTest() {
    if (!testEmail || !subject || !html) {
      setMessage('Need test email, subject, and content.')
      return
    }
    setStatus('testing')
    setMessage('')
    try {
      const res = await fetch('/api/admin/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, html, testEmail }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Test send failed')
      setStatus('idle')
      setMessage(`Test sent to ${testEmail}. Check the inbox.`)
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Test send failed')
    }
  }

  async function handleSendLive() {
    if (!subject || !html) {
      setMessage('Need subject and content before sending.')
      return
    }
    const confirmed = window.confirm(
      `Send this newsletter to ${subscriberCount} active subscribers?\n\nThis cannot be undone.`
    )
    if (!confirmed) return

    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('/api/admin/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, html }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Send failed')
      setStatus('sent')
      setMessage(`Sent to ${data.sent} subscribers${data.failed ? ` (${data.failed} failed)` : ''}.`)
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Send failed')
    }
  }

  const busy = status === 'generating' || status === 'testing' || status === 'sending'

  return (
    <div className="space-y-6">
      {/* Generate section */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-1">1. Generate Draft</h2>
        <p className="text-sm text-slate-500 mb-4">
          Claude will write a 3-section issue: AI tip, tool breakdown, real use case.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Optional theme or angle (e.g. 'ChatGPT for students')"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20"
          />
          <button
            onClick={handleGenerate}
            disabled={busy}
            className="rounded-lg bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-slate-800 disabled:opacity-50"
          >
            {status === 'generating' ? 'Generating...' : 'Generate Draft'}
          </button>
        </div>
      </div>

      {/* Editor section */}
      {(subject || html || status === 'generating') && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-1">2. Review & Edit</h2>
          <p className="text-sm text-slate-500 mb-4">Tweak the subject line and content as needed.</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Subject Line</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Your email subject"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Body HTML</label>
              <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                rows={16}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-mono focus:outline-none focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20"
                placeholder="<h1>...</h1><div class='section'>...</div>"
              />
              <p className="text-xs text-slate-400 mt-1">
                HTML fragment — no &lt;html&gt; or &lt;body&gt; tags. Our email template wraps this automatically.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Preview */}
      {html && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-1">3. Preview</h2>
          <p className="text-sm text-slate-500 mb-4">How it will look (approximately) in Gmail.</p>
          <div
            className="rounded-xl border border-slate-200 bg-slate-50 p-6 max-h-[500px] overflow-y-auto prose prose-sm"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      )}

      {/* Test + Send */}
      {subject && html && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-1">4. Test & Send</h2>
          <p className="text-sm text-slate-500 mb-4">
            Send a test to yourself first. Once it looks good, send to all {subscriberCount} subscribers.
          </p>

          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="Your email for test send"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#e53935] focus:ring-2 focus:ring-[#e53935]/20"
              />
              <button
                onClick={handleTest}
                disabled={busy || !testEmail}
                className="rounded-lg border border-slate-300 bg-white text-slate-700 px-5 py-2.5 text-sm font-semibold hover:bg-slate-50 disabled:opacity-50"
              >
                {status === 'testing' ? 'Sending test...' : 'Send Test'}
              </button>
            </div>

            <button
              onClick={handleSendLive}
              disabled={busy}
              className="w-full rounded-lg bg-[#e53935] text-white px-5 py-3 text-sm font-bold hover:bg-[#c62828] disabled:opacity-50"
            >
              {status === 'sending'
                ? `Sending to ${subscriberCount} subscribers...`
                : `Send to ${subscriberCount} Subscribers`}
            </button>
          </div>
        </div>
      )}

      {/* Status message */}
      {message && (
        <div
          className={`rounded-xl border p-4 text-sm ${
            status === 'error'
              ? 'border-red-200 bg-red-50 text-red-800'
              : status === 'sent'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
              : 'border-slate-200 bg-slate-50 text-slate-700'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  )
}
