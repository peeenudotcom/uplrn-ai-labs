import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'Unsubscribed',
  description: 'You have been unsubscribed from TARAhut AI Labs newsletter.',
  robots: { index: false },
}

export default async function UnsubscribedPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>
}) {
  const { email } = await searchParams

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          <svg
            className="h-8 w-8 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          You&apos;ve been unsubscribed
        </h1>

        <p className="text-slate-600 mb-2">
          {email ? (
            <>
              <span className="font-medium">{email}</span> has been removed from our weekly newsletter.
            </>
          ) : (
            <>You will no longer receive our weekly AI insights newsletter.</>
          )}
        </p>
        <p className="text-sm text-slate-500 mb-8">
          No hard feelings. We&apos;re sorry to see you go.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block px-5 py-2.5 rounded-lg bg-[#e53935] text-white font-semibold text-sm hover:bg-[#c62828] transition-colors"
          >
            Back to Homepage
          </Link>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          Unsubscribed by accident?{' '}
          <Link href="/#newsletter" className="text-[#e53935] hover:underline">
            Resubscribe here
          </Link>
        </p>
      </div>
    </div>
  )
}
