'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const tools = [
  {
    name: 'ChatGPT',
    color: '#10A37F',
    bg: '#10A37F15',
    logo: '/images/tools/openai.svg',
    useCase: 'Writing, research, coding, analysis & automation',
    category: 'Writing',
  },
  {
    name: 'Claude',
    color: '#D97706',
    bg: '#D9770615',
    logo: '/images/tools/claude.svg',
    useCase: 'Long documents, complex reasoning & safe AI outputs',
    category: 'Writing',
  },
  {
    name: 'Canva AI',
    color: '#00C4CC',
    bg: '#00C4CC15',
    logo: '/images/tools/canva.svg',
    useCase: 'Social media graphics, presentations & brand kits',
    category: 'Design',
  },
  {
    name: 'Midjourney',
    color: '#4F46E5',
    bg: '#4F46E510',
    logo: '/images/tools/midjourney.svg',
    useCase: 'Hyper-realistic AI image generation for any project',
    category: 'Design',
  },
  {
    name: 'Python',
    color: '#3776AB',
    bg: '#3776AB15',
    logo: '/images/tools/python.svg',
    useCase: 'Build AI apps, automate tasks & analyse data',
    category: 'Code',
  },
  {
    name: 'Notion AI',
    color: '#94a3b8',
    bg: '#94a3b810',
    logo: '/images/tools/notion.svg',
    useCase: 'AI-powered docs, project management & wikis',
    category: 'Productivity',
  },
  {
    name: 'Perplexity',
    color: '#20808D',
    bg: '#20808D15',
    logo: '/images/tools/perplexity.svg',
    useCase: 'AI-powered search with cited sources in seconds',
    category: 'Research',
  },
  {
    name: 'ElevenLabs',
    color: '#e2e8f0',
    bg: '#e2e8f010',
    logo: '/images/tools/elevenlabs.svg',
    useCase: 'Clone voices & create studio-quality AI audio',
    category: 'Voice',
  },
  {
    name: 'HeyGen',
    color: '#7C3AED',
    bg: '#7C3AED15',
    logoText: 'H',
    useCase: 'Create AI avatar videos without a camera or studio',
    category: 'Video',
  },
  {
    name: 'Gamma',
    color: '#EC4899',
    bg: '#EC489915',
    logoText: 'γ',
    useCase: 'AI-generated presentations, one-pagers & docs',
    category: 'Design',
  },
]

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: 'easeOut', delay: index * 0.04 },
        },
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div
        className="relative flex flex-col items-center gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-6 transition-all duration-500 cursor-default overflow-hidden"
        style={{
          boxShadow: hovered
            ? `0 20px 50px -15px ${tool.color}35, 0 0 0 1px ${tool.color}40`
            : '0 1px 3px rgba(0,0,0,0.04)',
        }}
      >
        {/* Background glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${tool.color}10 0%, transparent 70%)`,
          }}
        />

        {/* Top accent bar */}
        <div
          className="absolute inset-x-4 top-0 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: tool.color }}
        />

        {/* Icon container with animation */}
        <motion.div
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-300"
          style={{ backgroundColor: tool.bg }}
          animate={hovered ? { rotate: [-2, 2, -2], scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {'logo' in tool && tool.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={tool.logo}
              alt={tool.name}
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
          ) : (
            <span className="text-3xl font-bold" style={{ color: tool.color }}>
              {tool.logoText}
            </span>
          )}
        </motion.div>

        {/* Name */}
        <span className="relative z-10 text-sm font-semibold text-white">
          {tool.name}
        </span>

        {/* Category chip */}
        <div
          className="relative z-10 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
          style={{ backgroundColor: tool.bg, color: tool.color }}
        >
          {tool.category}
        </div>
      </div>

      {/* Tooltip */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.15 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 w-56 rounded-xl bg-[#0F172A] px-3 py-2.5 text-center text-xs text-gray-300 shadow-2xl pointer-events-none"
          style={{ boxShadow: `0 20px 40px -10px ${tool.color}50` }}
        >
          {tool.useCase}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 rounded-sm bg-[#0F172A]" />
        </motion.div>
      )}
    </motion.div>
  )
}

export function ToolsShowcase() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[-5%] w-[450px] h-[450px] rounded-full blur-[120px]"
          style={{ background: 'rgba(99, 102, 241, 0.08)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[5%] left-[-10%] w-[550px] h-[550px] rounded-full blur-[130px]"
          style={{ background: 'rgba(236, 72, 153, 0.06)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute top-[45%] left-[45%] w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{ background: 'rgba(16, 185, 129, 0.05)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e53935] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e53935]" />
            </span>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#e53935]">
              Industry-Standard Tools
            </p>
          </div>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            AI Tools You&apos;ll{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Master</span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#e53935]/30 to-[#6366f1]/30 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            These are the exact tools used in freelancing, jobs, and modern businesses worldwide.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500">
            Hover any tool to see what it does. Click to learn more.
          </p>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {tools.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-8 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#e53935] to-[#f59e0b] flex items-center justify-center text-white text-sm font-bold">10+</div>
            <div>
              <p className="text-sm font-semibold text-white">Tools Covered</p>
              <p className="text-xs text-gray-500">Hands-on training</p>
            </div>
          </div>
          <div className="h-8 w-px bg-white/[0.08] hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1] flex items-center justify-center text-white text-sm font-bold">₹0</div>
            <div>
              <p className="text-sm font-semibold text-white">Free Tiers</p>
              <p className="text-xs text-gray-500">All tools usable free</p>
            </div>
          </div>
          <div className="h-8 w-px bg-white/[0.08] hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#10b981] to-[#14b8a6] flex items-center justify-center text-white text-sm font-bold">✓</div>
            <div>
              <p className="text-sm font-semibold text-white">No Code Needed</p>
              <p className="text-xs text-gray-500">For 9 of 10 tools</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
