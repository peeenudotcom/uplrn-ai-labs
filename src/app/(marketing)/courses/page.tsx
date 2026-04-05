import type { Metadata } from 'next';
import { courses, categories } from '@/config/courses';
import { CoursesGrid } from './courses-grid';

export const metadata: Metadata = {
  title: 'Our Courses | Uplrn AI Labs',
  description:
    'Explore our hands-on AI courses — from beginner-friendly AI tools mastery to advanced prompt engineering and Python development. Learn AI skills that matter.',
};

export default function CoursesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Our Courses
          </h1>
          <p className="mt-4 text-lg text-[#475569]">
            Industry-ready AI programs designed to take you from curious to
            proficient. Hands-on training, real projects, and expert mentorship.
          </p>
        </div>

        {/* Courses Grid with Client-Side Filter */}
        <CoursesGrid courses={courses} categories={categories} />
      </div>
    </section>
  );
}
