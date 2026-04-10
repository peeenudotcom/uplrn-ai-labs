import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import { DigitalMarketingLanding } from './digital-marketing-landing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI for Digital Marketing — Earn ₹50K/month | TARAhut AI Labs',
  description: 'Learn to run Meta ads, create viral content, and get paying clients using AI. Punjab\'s #1 digital marketing course with live projects.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'ai-digital-marketing');
  if (!course) notFound();
  return <DigitalMarketingLanding course={course} />;
}
