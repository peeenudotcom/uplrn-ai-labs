import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import { LandingPageContent } from './landing-content';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: `${course.title} | TARAhut AI Labs`,
    description: course.shortDescription,
    openGraph: {
      title: course.title,
      description: course.shortDescription,
    },
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return <LandingPageContent course={course} />;
}
