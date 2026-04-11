import type { Metadata } from 'next'
import Link from 'next/link'
import { faqCategories, allFaqs } from '@/config/faqs'
import { siteConfig } from '@/config/site'
import { FaqPageClient } from './faq-page-client'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: `Answers to ${allFaqs.length}+ common questions about ${siteConfig.name} courses, pricing, certification, and more.`,
}

export default function FaqPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[130px]"
            style={{ background: 'rgba(16, 185, 129, 0.12)' }}
          />
          <div
            className="absolute bottom-[-20%] right-[-10%] w-[550px] h-[550px] rounded-full blur-[140px]"
            style={{ background: 'rgba(13, 148, 136, 0.10)' }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 backdrop-blur px-4 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#059669] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#059669]" />
            </span>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#059669]">
              Help Center
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#10b981] to-[#14b8a6] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#475569]">
            Everything you need to know about TARAhut AI Labs — courses, pricing, certification, placements, and more.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {allFaqs.length} questions across {faqCategories.length} categories
          </p>
        </div>
      </section>

      {/* FAQ content with category navigation */}
      <FaqPageClient categories={faqCategories} />

      {/* Still have questions? */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0F172A]">Still have questions?</h2>
          <p className="mt-3 text-[#475569]">
            Can&apos;t find what you&apos;re looking for? We&apos;re happy to help — reach out and we&apos;ll respond within 24 hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919200882008?text=Hi%2C+I+have+a+question+about+TARAhut+AI+Labs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1da851] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
