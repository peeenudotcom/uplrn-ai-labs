'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import type { Post } from '@/lib/supabase'
import { cn } from '@/lib/utils'

// ─── Constants ───────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  'AI Tools':         { bg: 'bg-blue-500/15',   text: 'text-blue-400',   border: 'border-blue-500/30',   dot: 'bg-blue-400' },
  'Industry News':    { bg: 'bg-orange-500/15', text: 'text-orange-400', border: 'border-orange-500/30', dot: 'bg-orange-400' },
  'Machine Learning': { bg: 'bg-purple-500/15', text: 'text-purple-400', border: 'border-purple-500/30', dot: 'bg-purple-400' },
  'AI Career':        { bg: 'bg-green-500/15',  text: 'text-green-400',  border: 'border-green-500/30',  dot: 'bg-green-400' },
  'Generative AI':    { bg: 'bg-pink-500/15',   text: 'text-pink-400',   border: 'border-pink-500/30',   dot: 'bg-pink-400' },
  'AI Business':      { bg: 'bg-amber-500/15',  text: 'text-amber-400',  border: 'border-amber-500/30',  dot: 'bg-amber-400' },
}

const POSTS_PER_PAGE = 12

type ReadFilter = 'all' | 'quick' | 'deep'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getRelativeDate(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 14) return 'Last week'
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 60) return 'Last month'
  return `${Math.floor(diffDays / 30)} months ago`
}

function getDateGroup(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays < 1) return 'Today'
  if (diffDays < 2) return 'Yesterday'
  if (diffDays < 7) return 'This Week'
  if (diffDays < 14) return 'Last Week'
  if (diffDays < 30) return 'This Month'
  if (diffDays < 60) return 'Last Month'

  // Group by month name
  return date.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
}

function getReadMinutes(readTime: string): number {
  const match = readTime.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 3
}

function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] || { bg: 'bg-gray-500/15', text: 'text-gray-400', border: 'border-gray-500/30', dot: 'bg-gray-400' }
}

// ─── Component ───────────────────────────────────────────────────────────────

export function BlogExplorer({ posts }: { posts: Post[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [readFilter, setReadFilter] = useState<ReadFilter>('all')
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE)

  // Derive categories with counts
  const categories = useMemo(() => {
    const counts: Record<string, number> = {}
    posts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }))
  }, [posts])

  // Filter posts
  const filteredPosts = useMemo(() => {
    let result = posts

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }

    if (readFilter === 'quick') {
      result = result.filter((p) => getReadMinutes(p.read_time) <= 3)
    } else if (readFilter === 'deep') {
      result = result.filter((p) => getReadMinutes(p.read_time) > 3)
    }

    return result
  }, [posts, selectedCategory, searchQuery, readFilter])

  // Group by date for display
  const groupedPosts = useMemo(() => {
    const visible = filteredPosts.slice(0, visibleCount)
    const groups: { label: string; posts: Post[] }[] = []

    visible.forEach((post) => {
      const group = getDateGroup(post.created_at)
      const existing = groups.find((g) => g.label === group)
      if (existing) {
        existing.posts.push(post)
      } else {
        groups.push({ label: group, posts: [post] })
      }
    })

    return groups
  }, [filteredPosts, visibleCount])

  const hasMore = visibleCount < filteredPosts.length

  // Stats
  const totalPosts = posts.length
  const totalCategories = categories.length
  const oldestPost = posts.length > 0 ? posts[posts.length - 1] : null

  function resetFilters() {
    setSelectedCategory('all')
    setSearchQuery('')
    setReadFilter('all')
    setVisibleCount(POSTS_PER_PAGE)
  }

  return (
    <div>
      {/* ── Stats Bar ── */}
      <div className="mb-8 flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-6 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3">
          <div className="text-center">
            <p className="text-lg font-bold text-emerald-400">{totalPosts}</p>
            <p className="text-[10px] text-gray-500 font-medium">Articles</p>
          </div>
          <div className="h-8 w-px bg-white/[0.08]" />
          <div className="text-center">
            <p className="text-lg font-bold text-white">{totalCategories}</p>
            <p className="text-[10px] text-gray-500 font-medium">Topics</p>
          </div>
          <div className="h-8 w-px bg-white/[0.08]" />
          <div className="text-center">
            <p className="text-lg font-bold text-white">Daily</p>
            <p className="text-[10px] text-gray-500 font-medium">New posts</p>
          </div>
        </div>
        {oldestPost && (
          <p className="text-xs text-gray-600">
            Archive since {formatDate(oldestPost.created_at)}
          </p>
        )}
      </div>

      {/* ── Search & Filters ── */}
      <div className="mb-6 space-y-4">
        {/* Search bar */}
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setVisibleCount(POSTS_PER_PAGE)
            }}
            placeholder="Search articles by title, topic, or keyword..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/10 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category pills + read time filter */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => { setSelectedCategory('all'); setVisibleCount(POSTS_PER_PAGE) }}
            className={cn(
              'rounded-full px-4 py-2 text-xs font-semibold transition-all',
              selectedCategory === 'all'
                ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/25'
                : 'bg-white/[0.04] border border-white/10 text-gray-400 hover:border-emerald-500/30 hover:text-emerald-400'
            )}
          >
            All ({totalPosts})
          </button>
          {categories.map((cat) => {
            const style = getCategoryStyle(cat.name)
            const isActive = selectedCategory === cat.name
            return (
              <button
                key={cat.name}
                onClick={() => { setSelectedCategory(cat.name); setVisibleCount(POSTS_PER_PAGE) }}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all',
                  isActive
                    ? `${style.bg} ${style.text} border ${style.border}`
                    : 'bg-white/[0.04] border border-white/10 text-gray-400 hover:border-emerald-500/30 hover:text-emerald-400'
                )}
              >
                <span className={cn('h-2 w-2 rounded-full', style.dot)} />
                {cat.name} ({cat.count})
              </button>
            )
          })}

          {/* Separator */}
          <div className="h-6 w-px bg-white/[0.08] mx-1 hidden sm:block" />

          {/* Read time filter */}
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-0.5">
            {([
              { id: 'all' as ReadFilter, label: 'All' },
              { id: 'quick' as ReadFilter, label: 'Quick reads' },
              { id: 'deep' as ReadFilter, label: 'Deep dives' },
            ]).map((rf) => (
              <button
                key={rf.id}
                onClick={() => { setReadFilter(rf.id); setVisibleCount(POSTS_PER_PAGE) }}
                className={cn(
                  'rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all',
                  readFilter === rf.id
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-500 hover:text-white'
                )}
              >
                {rf.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Active filters indicator ── */}
      {(selectedCategory !== 'all' || searchQuery || readFilter !== 'all') && (
        <div className="mb-6 flex items-center gap-2">
          <span className="text-xs text-gray-500">
            Showing {filteredPosts.length} of {totalPosts} articles
          </span>
          <button
            onClick={resetFilters}
            className="text-xs font-medium text-emerald-400 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* ── Posts by date group ── */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 rounded-2xl border border-dashed border-white/[0.08] bg-white/[0.02]">
          <p className="text-lg font-semibold text-white mb-2">No articles found</p>
          <p className="text-sm text-gray-500 mb-4">
            {searchQuery
              ? `No results for "${searchQuery}". Try a different search.`
              : 'No articles match the selected filters.'}
          </p>
          <button
            onClick={resetFilters}
            className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
          >
            Show all articles
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {groupedPosts.map((group) => (
            <div key={group.label}>
              {/* Date group header */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-sm font-bold text-white whitespace-nowrap">{group.label}</h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-[10px] text-gray-600 font-medium whitespace-nowrap">
                  {group.posts.length} article{group.posts.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Posts grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                  {group.posts.map((post, i) => {
                    const style = getCategoryStyle(post.category)
                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link href={`/blog/${post.slug}`} className="group block h-full">
                          <article className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 transition-all hover:shadow-md hover:shadow-emerald-500/10 hover:-translate-y-0.5 hover:border-emerald-500/30">
                            {/* Category + meta row */}
                            <div className="flex items-center justify-between mb-3">
                              <span className={cn(
                                'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold',
                                style.bg, style.text
                              )}>
                                <span className={cn('h-1.5 w-1.5 rounded-full', style.dot)} />
                                {post.category}
                              </span>
                              <span className="text-[10px] text-gray-600">{post.read_time}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors mb-2 line-clamp-2">
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                              {post.excerpt}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                              <span className="text-[10px] text-gray-600">
                                {getRelativeDate(post.created_at)}
                              </span>
                              <span className="text-xs font-medium text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                Read →
                              </span>
                            </div>
                          </article>
                        </Link>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Load More ── */}
      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((v) => v + POSTS_PER_PAGE)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-8 py-3 text-sm font-semibold text-white transition-all hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-white/[0.06]"
          >
            Load More Articles
            <span className="text-xs text-gray-500">
              ({filteredPosts.length - visibleCount} remaining)
            </span>
          </button>
        </div>
      )}

      {/* ── End of archive ── */}
      {!hasMore && filteredPosts.length > 0 && (
        <div className="mt-10 text-center py-6 rounded-xl border border-dashed border-white/[0.08]">
          <p className="text-xs text-gray-600">
            You&apos;ve reached the end — {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} total
          </p>
        </div>
      )}

      {/* ── Daily digest CTA ── */}
      <motion.div
        className="mt-12 rounded-2xl bg-[#0F172A] px-6 py-10 text-center sm:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Stay updated</p>
        <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
          New AI insights published daily
        </h3>
        <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
          Our AI scans the latest industry news and delivers fresh, India-focused insights every single day.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/919200882008?text=Hi%2C+I+want+to+receive+daily+AI+updates+from+TARAhut+AI+Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1eba57]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Daily AI Updates on WhatsApp
          </a>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Explore AI Courses →
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
