import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'AI Hustler 45 — Zero to First Client in 45 Days | TARAhut AI Labs',
  description: 'The fastest path from AI beginner to paying clients. 45 days, 3 phases, real field work. Graduate with income.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'ai-hustler-45');
  if (!course) notFound();

  return (
    <CourseLandingShared
      course={course}
      theme={{
        primary: '#84cc16',
        primaryRgb: '132,204,22',
        gradientFrom: '#a3e635',
        gradientVia: '#84cc16',
        gradientTo: '#65a30d',
      }}
      trustBadge="💰 First Client by Day 30"
      hook={{
        punjabi: 'Course toh bahut kiye... earning nahi hui?',
        translation: '...yeh sirf 45 din ka hustler program hai.'
      }}
      headlineWhite="AI Hustler 45"
      headlineGradient="45 Days → First Paid Client"
      subtitle="Stop Learning. Start Earning."
      subSubtitle="3 phases · Real field work · First client guaranteed*"
      stats={[
        { value: 45, suffix: ' Days', label: 'Total Program' },
        { value: 25, suffix: '+', label: 'Businesses Approached' },
        { value: 1, suffix: '+', label: 'First Paying Client' },
      ]}
      audience={[
        { emoji: '💼', title: 'Serious Hustlers', subtitle: 'Want income fast' },
        { emoji: '🎓', title: 'Fresh Graduates', subtitle: 'Tired of job search' },
        { emoji: '🚀', title: 'Career Changers', subtitle: 'Ready for freelancing' },
      ]}
      audienceLabel="Hustle Mode ON"
      beforeAfter={[
        { before: '📚 Watching YouTube tutorials', after: '🎯 Closing real client deals' },
        { before: '🤷 "I don&apos;t know where to start"', after: '💪 Field-tested with 25+ businesses' },
        { before: '💸 Zero income', after: '💰 First paid client in hand' },
        { before: '😰 Scared of approaching clients', after: '🔥 Confident in any sales conversation' },
      ]}
      differentiators={[
        { icon: '🔥', text: '3 hours daily' },
        { icon: '🏃', text: 'Real field work' },
        { icon: '💼', text: 'First client guaranteed' },
      ]}
      learnCards={[
        { icon: '🧠', title: 'AI Foundations', desc: 'Understand AI, LLMs, and choose the right tool fast' },
        { icon: '🎨', title: 'Content & Design', desc: 'Create ads, videos, graphics for any business' },
        { icon: '💼', title: 'Service Packaging', desc: '3 service packages (₹5K, ₹10K, ₹25K/mo) ready to sell' },
        { icon: '📱', title: 'Client Marketing', desc: 'WhatsApp marketing, GMB, Meta ads for clients' },
        { icon: '🎯', title: 'Outreach & Closing', desc: 'Approach 25+ businesses, handle objections, close deals' },
        { icon: '💰', title: 'Deliver & Collect', desc: 'Actually do client work and get paid' },
      ]}
      learnTitle="The Hustler's Playbook"
      learnSubtitle="Action Over Theory"
      incomePaths={[
        {
          emoji: '🎯',
          title: 'First Client',
          amount: '₹5K–₹15K',
          examples: ['One local business', 'Monthly retainer', 'Your proof of work'],
        },
        {
          emoji: '📈',
          title: 'Month 2-3',
          amount: '₹25K–₹50K/mo',
          examples: ['3-5 clients', 'Recurring revenue', 'Building reputation'],
        },
        {
          emoji: '🏆',
          title: 'Month 6+',
          amount: '₹50K–₹1L+/mo',
          examples: ['10+ client agency', 'Team of 2-3', 'Full-time business'],
        },
      ]}
      valueItems={[
        { icon: '💼', item: 'Complete Service Packages', desc: '3 price tiers ready to pitch' },
        { icon: '📝', item: 'Proposals & Contracts', desc: 'Copy-paste templates that close' },
        { icon: '💬', item: 'Cold Outreach Scripts', desc: 'WhatsApp, Instagram, LinkedIn' },
        { icon: '🎨', item: 'Sample Work Portfolio', desc: 'Pre-made examples to show clients' },
        { icon: '🎯', item: 'Field Work Training', desc: 'Real business approaches, guided + solo' },
        { icon: '💰', item: 'Pricing & Invoicing', desc: 'Never undersell your services' },
        { icon: '📜', item: 'Verified Certificate', desc: 'LinkedIn-shareable hustler credential' },
        { icon: '👥', item: 'Hustler Community', desc: 'Ongoing deals and opportunities' },
      ]}
      totalValue="₹25,000+"
      finalCtaText="In 45 Days You'll"
      finalCtaGradient="Have Your First Client."
    >
      <CourseToolSection
        toolId="first-client-plan"
        badge="LIVE DEMO — Get your 45-day plan"
        title="Your Path to"
        titleHighlight="First Paying Client"
        subtitle="Tell us your skills and interests. AI creates a 45-day plan to your first paid client."
        placeholder="e.g. 'Good at writing, know Instagram, live in Ludhiana'"
        examples={[
          'Design skills, no clients yet',
          'Marketing background, need income',
          'Fresh graduate, any skill needed',
          'Working professional, side income',
        ]}
        buttonText="🎯 Generate My Plan"
        hookTitle="In 45 days, this becomes"
        hookSubtitle="REALITY, not just a plan."
        hookCta="Start Hustling"
        primaryColor="#84cc16"
        primaryColorRgb="132,204,22"
        gradientFrom="#a3e635"
        gradientTo="#65a30d"
      />
    </CourseLandingShared>
  );
}
