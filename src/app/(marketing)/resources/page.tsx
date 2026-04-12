'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const resources = [
  {
    id: 'prompt-guide',
    title: 'Top 50 AI Prompts for Indian Professionals',
    description: 'Ready-to-use prompts for marketing, HR, sales, customer service, and finance. Save hours every week.',
    icon: '⚡',
    color: 'from-amber-500 to-orange-500',
    badge: 'Most Downloaded',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    pages: '18 pages',
    format: 'PDF',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1E8FzYnrmB6bl39v5EdNuz8u7e-UYUiLu',
  },
  {
    id: 'career-roadmap',
    title: 'AI Career Roadmap 2025–2026',
    description: 'Step-by-step guide to building an AI career in India — roles, skills, salary ranges, and top companies hiring.',
    icon: '🗺️',
    color: 'from-blue-500 to-indigo-500',
    badge: 'New',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    pages: '24 pages',
    format: 'PDF',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1WJfjACMAkedxR3VdJxaV6oCKuatw6aMq',
  },
  {
    id: 'tools-cheatsheet',
    title: 'AI Tools Cheatsheet — 40+ Tools',
    description: 'Every major AI tool categorized by use case: writing, design, video, coding, business, and productivity.',
    icon: '🛠️',
    color: 'from-emerald-500 to-teal-500',
    badge: 'Free',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    pages: '8 pages',
    format: 'PDF',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1y6a7CLQcJ_er7QooooUvOeOIc6GUFurf',
  },
  {
    id: 'business-ai',
    title: 'AI for Small Business — Quick Wins Guide',
    description: '10 ways Indian SMEs are using AI right now to cut costs, automate tasks, and win more customers.',
    icon: '💼',
    color: 'from-purple-500 to-pink-500',
    badge: 'Popular',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    pages: '14 pages',
    format: 'PDF',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=1nflAOHOr8AHLeS2kJh30CUT7sGQ8Lf4n',
  },
]

function EmailGateModal({
  resource,
  onClose,
  onSuccess,
}: {
  resource: typeof resources[0]
  onClose: () => void
  onSuccess: (url: string) => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, resource: resource.id }),
      })
      if (res.ok) {
        // Trigger the download
        window.open(resource.downloadUrl, '_blank')
        onSuccess(resource.downloadUrl)
        setSuccess(true)
      } else {
        const d = await res.json()
        setError(d.error || 'Something went wrong')
      }
    } catch {
      setError('Network error, please try again')
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        className="w-full max-w-md rounded-2xl bg-[#0D1225] border border-white/[0.08] p-8 shadow-2xl shadow-black/50"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              {/* Success checkmark */}
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                <motion.svg
                  className="h-8 w-8 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </motion.svg>
              </div>

              <h3 className="text-xl font-bold text-white">Download Started!</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Your copy of <span className="text-white font-medium">{resource.title}</span> is downloading now.
              </p>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                <p className="text-xs text-gray-500 mb-3">While you wait, check these out:</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://wa.me/919200882008?text=Hi%2C+I+just+downloaded+your+AI+resources.+Can+you+tell+me+more+about+courses%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 px-4 py-2.5 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/15 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    Ask about our courses on WhatsApp
                  </a>
                  <a
                    href="/courses"
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Browse All Courses
                  </a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-5 text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                Close this window
              </button>
            </motion.div>
          ) : (
            <motion.div key="form" exit={{ opacity: 0 }}>
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${resource.color} text-2xl`}>
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-white">Get Your Free Resource</h3>
              <p className="mt-1 text-sm text-gray-400">{resource.title}</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/10"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/10"
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#059669] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#047857] disabled:opacity-60"
                >
                  {loading ? 'Preparing your download...' : 'Download Free PDF'}
                </button>
              </form>

              <p className="mt-3 text-center text-xs text-gray-600">
                We&apos;ll also send you weekly AI tips. Unsubscribe anytime.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function ResourcesPage() {
  const [activeResource, setActiveResource] = useState<typeof resources[0] | null>(null)
  const [downloaded, setDownloaded] = useState<Set<string>>(new Set())

  function handleDownload() {
    if (activeResource) {
      setDownloaded((prev) => new Set([...prev, activeResource.id]))
    }
  }

  return (
    <main className="min-h-screen pt-24" style={{ backgroundColor: '#020617' }}>
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-teal-500/8 blur-2xl" />
          <div className="absolute right-1/4 top-1/3 h-56 w-56 rounded-full bg-cyan-500/8 blur-3xl" />
        </div>
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full border border-emerald-400/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-emerald-300 mb-4">
            100% Free — No Credit Card
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Free AI Resources<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              for Indian Professionals
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Practical guides, cheatsheets, and roadmaps — crafted specifically for India&apos;s working professionals, students, and business owners.
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Enter your email once, download everything. No spam, ever.
          </p>
        </motion.div>
      </section>

      {/* Resources Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((r, i) => (
            <motion.div
              key={r.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-7 transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/[0.06] hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Gradient top border */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${r.color}`} />

              <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${r.color} text-2xl`}>
                  {r.icon}
                </div>
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${r.badgeColor}`}>
                  {r.badge}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-white leading-snug">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {r.description}
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {r.pages}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {r.format}
                </span>
              </div>

              <button
                onClick={() => setActiveResource(r)}
                className={`mt-5 w-full rounded-lg py-3 text-sm font-semibold transition-colors ${
                  downloaded.has(r.id)
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'bg-[#059669] text-white hover:bg-[#047857]'
                }`}
              >
                {downloaded.has(r.id) ? '✓ Downloaded — Download Again' : 'Download Free PDF →'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 rounded-2xl bg-[#0F172A] border border-white/[0.06] p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white">Want More Than PDFs?</h3>
          <p className="mt-2 text-slate-400">Join our AI course and get live training, mentorship, and a certificate.</p>
          <a
            href="https://wa.me/919200882008?text=Hi%2C+I+downloaded+your+AI+resources+and+want+to+know+more+about+courses"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#059669] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#047857]"
          >
            📅 Book a Free Demo Class
          </a>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeResource && (
          <EmailGateModal
            resource={activeResource}
            onClose={() => setActiveResource(null)}
            onSuccess={handleDownload}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
