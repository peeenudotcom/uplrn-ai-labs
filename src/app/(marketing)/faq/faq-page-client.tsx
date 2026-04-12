'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import type { FaqCategory } from '@/config/faqs'

interface FaqPageClientProps {
  categories: FaqCategory[]
}

export function FaqPageClient({ categories }: FaqPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = searchQuery.trim()
    ? categories
        .map((cat) => ({
          ...cat,
          faqs: cat.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.faqs.length > 0)
    : categories

  const displayedCategory = searchQuery.trim()
    ? null
    : categories.find((c) => c.id === activeCategory) || categories[0]

  const totalFilteredCount = filteredCategories.reduce(
    (acc, cat) => acc + cat.faqs.length,
    0
  )

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
      {/* Search bar */}
      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur pl-12 pr-4 py-4 text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="mt-3 text-center text-sm text-gray-500">
            {totalFilteredCount} question{totalFilteredCount !== 1 ? 's' : ''} match &ldquo;{searchQuery}&rdquo;
          </p>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Category sidebar */}
        {!searchQuery && (
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3 px-3">
              Categories
            </h3>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all whitespace-nowrap lg:w-full text-left ${
                    activeCategory === cat.id
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'text-gray-400 hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  <span className="text-lg">{cat.emoji}</span>
                  <span>{cat.name}</span>
                  <span className="ml-auto text-xs text-gray-600">{cat.faqs.length}</span>
                </button>
              ))}
            </nav>
          </aside>
        )}

        {/* Main content */}
        <div className={searchQuery ? 'lg:col-span-2' : ''}>
          <AnimatePresence mode="wait">
            {searchQuery ? (
              <motion.div
                key="search-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {filteredCategories.length === 0 ? (
                  <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur p-12 text-center">
                    <p className="text-gray-500">
                      No questions found matching &ldquo;{searchQuery}&rdquo;.
                    </p>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="mt-4 text-sm font-semibold text-emerald-400 hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  <div className="space-y-8">
                    {filteredCategories.map((cat) => (
                      <div key={cat.id}>
                        <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                          <span>{cat.emoji}</span>
                          {cat.name}
                          <span className="text-xs font-normal text-gray-600">({cat.faqs.length})</span>
                        </h3>
                        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6">
                          <Accordion>
                            {cat.faqs.map((faq, i) => (
                              <AccordionItem key={i} value={`${cat.id}-${i}`}>
                                <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-emerald-400 transition-colors">
                                  {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ) : displayedCategory ? (
              <motion.div
                key={displayedCategory.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                  <span className="text-3xl">{displayedCategory.emoji}</span>
                  {displayedCategory.name}
                </h2>
                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-4 sm:p-6">
                  <Accordion>
                    {displayedCategory.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`${displayedCategory.id}-${i}`}>
                        <AccordionTrigger className="text-left text-base font-semibold text-white hover:text-emerald-400 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
