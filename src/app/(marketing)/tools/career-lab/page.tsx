import type { Metadata } from 'next'
import { CareerLab } from '@/components/career-lab/career-lab'

export const metadata: Metadata = {
  title: 'AI Career Lab – Find Your AI Career Path | Uplrn AI Labs',
  description:
    'Discover your ideal AI career path in 60 seconds. Get a personalized career DNA analysis, strength profile, salary projections, and 90-day roadmap.',
  openGraph: {
    title: 'AI Career Lab – Find Your AI Career Path',
    description:
      'Answer 7 quick questions and get your personalized AI career match, strength profile, and action plan. Free, no login required.',
    type: 'website',
  },
}

export default function CareerLabPage() {
  return <CareerLab />
}
