import type { Metadata } from 'next';
import { courses, categories } from '@/config/courses';
import { CoursesGrid } from './courses-grid';
import { EnrollmentToast } from '@/components/landing/enrollment-toast';

export const metadata: Metadata = {
  title: 'Our Courses | TARAhut AI Labs',
  description:
    'Explore our hands-on AI courses — from beginner-friendly AI tools mastery to advanced prompt engineering and Python development. Learn AI skills that matter.',
};

export default function CoursesPage() {
  return (
    <>
      {/* Dark Hero */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ backgroundColor: '#020617' }}
      >
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-[-30%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px]"
            style={{ background: 'rgba(16,185,129,0.12)' }}
          />
          <div
            className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: 'rgba(13,148,136,0.08)' }}
          />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-emerald-400/20 backdrop-blur-md text-sm text-emerald-300">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            9 Courses · Beginner to Advanced
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            Find Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              AI Path
            </span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Hands-on programs designed to take you from curious to proficient.
            Real projects, expert mentorship, and skills that translate to income.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-400">No coding required</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-400">Offline in Kotkapura</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-gray-400">Starts at ₹2,499</span>
            </span>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="relative bg-[#0A0F1C] py-16 sm:py-20">
        {/* Subtle top glow bleed from hero */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CoursesGrid courses={courses} categories={categories} />
        </div>
      </section>

      <EnrollmentToast />
    </>
  );
}
