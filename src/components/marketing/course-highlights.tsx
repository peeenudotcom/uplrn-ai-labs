'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { courses } from '@/config/courses'

const featuredCourses = courses.filter((c) => c.isFeatured)

const courseBadges: Record<string, { text: string; classes: string }> = {
  '1': { text: '🔥 Most Popular', classes: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' },
  '5': { text: '⚡ Limited Seats', classes: 'bg-amber-500/10 text-amber-700 border-amber-500/20' },
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/20',
  Intermediate: 'bg-amber-500/15 text-amber-600 border-amber-500/20',
  Advanced: 'bg-rose-500/15 text-rose-600 border-rose-500/20',
}

const categoryColors: Record<string, string> = {
  'AI Tools': '#059669',
  Marketing: '#10B981',
  Development: '#F59E0B',
  Business: '#EF4444',
  'Content Creation': '#0D9488',
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

function getDiscountPercent(original: number, current: number) {
  return Math.round(((original - current) / original) * 100)
}

export function CourseHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium tracking-widest uppercase text-[#059669]">
          Learn from the best
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
          Popular Courses
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#475569]">
          Industry-relevant AI programs designed to get you job-ready with hands-on projects and real-world skills.
        </p>
      </motion.div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4">
        {featuredCourses.map((course, i) => {
          const catColor = categoryColors[course.category] || '#059669'
          const discount =
            course.originalPrice
              ? getDiscountPercent(course.originalPrice, course.price)
              : null

          return (
            <motion.div
              key={course.id}
              className="group relative min-w-[300px] snap-start rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#059669]/5 hover:-translate-y-1 md:min-w-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Gradient top border - thicker on hover */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#059669] to-[#0D9488] transition-all duration-300 group-hover:h-1.5" />

              {/* Course badge */}
              {courseBadges[course.id] && (
                <div className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${courseBadges[course.id].classes}`}>
                  {courseBadges[course.id].text}
                </div>
              )}

              <div className="p-6">
                {/* Category icon + discount badge row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: catColor }}
                    >
                      {course.category.charAt(0)}
                    </div>
                    <span className="text-xs font-medium text-[#64748B]">
                      {course.category}
                    </span>
                  </div>
                  {discount && (
                    <span className="inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-semibold text-red-600 border border-red-500/20">
                      -{discount}%
                    </span>
                  )}
                </div>

                {/* Level + Duration */}
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelColors[course.level]}`}
                  >
                    {course.level}
                  </span>
                  <span className="text-xs text-[#64748B]">{course.duration}</span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#0F172A] leading-snug">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#475569] line-clamp-3">
                  {course.shortDescription}
                </p>

                {/* Rating + students */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold text-[#0F172A]">{course.rating}</span>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    {course.studentsEnrolled} students enrolled
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#0F172A]">
                    {formatPrice(course.price)}
                  </span>
                  {course.originalPrice && (
                    <span className="text-sm text-[#94A3B8] line-through">
                      {formatPrice(course.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[#059669] transition-colors hover:text-[#10B981]"
                  >
                    View Curriculum
                    <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* View All Courses link */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 rounded-full border-2 border-[#059669] px-8 py-3 text-sm font-semibold text-[#059669] transition-all hover:bg-[#059669] hover:text-white"
        >
          View All Courses
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </motion.div>
    </section>
  )
}
