'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CourseToolSectionProps {
  toolId: string
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  placeholder: string
  examples: string[]
  buttonText: string
  hookTitle: string
  hookSubtitle: string
  hookCta: string
  primaryColor: string // e.g. '#10b981'
  primaryColorRgb: string // e.g. '16,185,129'
  gradientFrom: string
  gradientTo: string
}

export function CourseToolSection({
  toolId,
  badge,
  title,
  titleHighlight,
  subtitle,
  placeholder,
  examples,
  buttonText,
  hookTitle,
  hookSubtitle,
  hookCta,
  primaryColor,
  primaryColorRgb,
  gradientFrom,
  gradientTo,
}: CourseToolSectionProps) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleRun() {
    if (!input.trim() || input.trim().length < 3) return
    setLoading(true)
    setResult('')
    setError('')
    try {
      const res = await fetch('/api/course-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: toolId, input }),
      })
      const data = await res.json()
      if (res.ok) setResult(data.result)
      else setError(data.error || 'Something went wrong')
    } catch { setError('Network error') }
    setLoading(false)
  }

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0d1424] to-[#020617]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px]" style={{ background: `rgba(${primaryColorRgb},0.08)` }} />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              backgroundColor: `rgba(${primaryColorRgb},0.15)`,
              borderWidth: '1px',
              borderColor: `rgba(${primaryColorRgb},0.25)`,
              color: primaryColor,
            }}
          >
            ⚡ {badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {title}{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
            >
              {titleHighlight}
            </span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs text-gray-500">Try:</span>
            {examples.map((ex) => (
              <button
                key={ex}
                onClick={() => setInput(ex)}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white transition-colors"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(${primaryColorRgb},0.3)` }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                {ex}
              </button>
            ))}
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleRun() }}
            placeholder={placeholder}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white placeholder-gray-600 focus:outline-none resize-none text-sm"
            onFocus={(e) => { e.currentTarget.style.borderColor = primaryColor }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          />

          <button
            onClick={handleRun}
            disabled={loading || input.trim().length < 3}
            className="group w-full mt-3 py-3 rounded-xl font-semibold text-sm text-white relative overflow-hidden disabled:opacity-40"
          >
            <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }} />
            <span className="relative flex items-center justify-center gap-2">
              {loading ? '✨ AI is thinking...' : buttonText}
            </span>
          </button>

          {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5"
            >
              <div
                className="px-5 py-4 rounded-xl text-sm text-gray-200 whitespace-pre-wrap leading-relaxed"
                style={{
                  backgroundColor: `rgba(${primaryColorRgb},0.05)`,
                  borderWidth: '1px',
                  borderColor: `rgba(${primaryColorRgb},0.1)`,
                }}
              >
                {result}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 text-center"
              >
                <p className="text-white font-semibold text-sm">
                  {hookTitle}{' '}
                  <span style={{ color: primaryColor }}>{hookSubtitle}</span>
                </p>
                <a
                  href="#enroll"
                  onClick={(e) => { e.preventDefault(); document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-block mt-3 px-6 py-2 rounded-lg text-black font-bold text-sm hover:scale-105 transition-transform"
                  style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
                >
                  {hookCta} →
                </a>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
