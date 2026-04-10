import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'Master AI Builder — 90 Day Program | TARAhut AI Labs',
  description: 'Punjab\'s most comprehensive 90-day AI program. 20+ tools, 50+ portfolio pieces, freelancing-ready. Zero to AI pro.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'master-ai-builder');
  if (!course) notFound();

  return (
    <CourseLandingShared
      course={course}
      theme={{
        primary: '#ef4444',
        primaryRgb: '239,68,68',
        gradientFrom: '#f87171',
        gradientVia: '#ef4444',
        gradientTo: '#dc2626',
      }}
      trustBadge="🚀 Punjab's Most Comprehensive Program"
      hook={{
        punjabi: 'Har koi kuch karna chahta hai...',
        translation: '...par 90 din mein transform kaun hota hai?',
      }}
      headlineWhite="Master AI Builder"
      headlineGradient="90 Days · Zero to Pro"
      subtitle="The Complete AI Transformation Program"
      subSubtitle="20+ tools · 50+ portfolio pieces · Earning-ready"
      stats={[
        { value: 20, suffix: '+', label: 'AI Tools' },
        { value: 50, suffix: '+', label: 'Portfolio Pieces' },
        { value: 90, suffix: ' Days', label: 'Full Transformation' },
      ]}
      audience={[
        { emoji: '🎓', title: 'Serious Learners', subtitle: 'Want full transformation' },
        { emoji: '💼', title: 'Career Changers', subtitle: 'Ready for a new path' },
        { emoji: '🚀', title: 'Ambitious Youth', subtitle: 'Aim for agency/business' },
      ]}
      audienceLabel="Elite Program For"
      beforeAfter={[
        { before: '🤷 "What should I even build with AI?"', after: '💡 Built 50+ real projects' },
        { before: '😵 Overwhelmed by choices', after: '🎯 Crystal clear career path' },
        { before: '💸 No income, no direction', after: '💰 ₹50K+/month earning' },
        { before: '📱 Consumer of content', after: '🏆 Creator of AI products' },
      ]}
      differentiators={[
        { icon: '🎯', text: '20-40-40 model' },
        { icon: '💪', text: '100% hands-on' },
        { icon: '🏆', text: 'Capstone project' },
      ]}
      learnCards={[
        { icon: '🧠', title: 'AI Foundations', desc: 'Deep understanding of how AI works, tokens, LLMs, landscape' },
        { icon: '📝', title: 'CRISP Prompting', desc: 'Master prompt engineering with TARAhut\'s methodology' },
        { icon: '🎨', title: 'AI Creation Suite', desc: 'Content, design, video, voice — all AI tools' },
        { icon: '🤖', title: 'Automation & Workflows', desc: 'Zapier, Make — connect AI tools into systems' },
        { icon: '💼', title: 'Real Client Work', desc: 'Actual projects for local businesses, real results' },
        { icon: '🚀', title: 'Launch & Monetize', desc: 'Freelancing profiles, personal brand, first income' },
      ]}
      learnTitle="Everything You Need to Succeed"
      learnSubtitle="Complete Curriculum"
      incomePaths={[
        {
          emoji: '💼',
          title: 'Freelancing',
          amount: '₹30K–₹1L/mo',
          examples: ['AI content services', 'Design & video work', 'Automation consulting'],
        },
        {
          emoji: '🏢',
          title: 'Build Agency',
          amount: '₹1L–₹5L/mo',
          examples: ['Local business marketing', 'AI-powered agency', 'Consulting services'],
        },
        {
          emoji: '🚀',
          title: 'AI Product',
          amount: '₹50K–₹10L/mo',
          examples: ['Launch SaaS product', 'AI-powered app', 'Own brand & business'],
        },
      ]}
      valueItems={[
        { icon: '🎯', item: '90 Days Daily Practice', desc: '20-40-40 model: instruction, guided, independent' },
        { icon: '📝', item: '50+ Portfolio Projects', desc: 'Real deliverables you can show clients' },
        { icon: '💼', item: 'Real Client Projects', desc: 'Work with actual local businesses' },
        { icon: '📚', item: '1000+ Prompt Library', desc: 'Every use case covered across 20+ tools' },
        { icon: '🎨', item: 'Complete Tool Access', desc: 'All 20+ AI tools with training' },
        { icon: '🌐', item: 'Portfolio Website', desc: 'Professional site showcasing your work' },
        { icon: '💬', item: 'Client Templates Library', desc: 'Proposals, contracts, messages' },
        { icon: '🏆', item: 'Capstone Project', desc: 'Complete solution for a real business' },
        { icon: '📜', item: 'Verified Certificate', desc: 'LinkedIn-shareable premium credential' },
        { icon: '👥', item: 'Elite Alumni Network', desc: 'Lifelong connections and opportunities' },
      ]}
      totalValue="₹80,000+"
      finalCtaText="90 Days From Now,"
      finalCtaGradient="You Won&apos;t Recognize Yourself."
    >
      <CourseToolSection
        toolId="business-ideas"
        badge="LIVE DEMO — AI suggests your business"
        title="What AI Business Should"
        titleHighlight="YOU Build?"
        subtitle="Tell us your interests, skills, or passions. AI suggests 3 AI-powered businesses you can build in 90 days."
        placeholder="e.g. 'I love food and photography, good with people'"
        examples={[
          'Love writing, hate tech',
          'Great at design, need income',
          'Business background, want automation',
          'Tech curious, no coding yet',
        ]}
        buttonText="💡 Suggest My Business"
        hookTitle="In 90 days, you can actually"
        hookSubtitle="BUILD this business."
        hookCta="Start Building"
        primaryColor="#ef4444"
        primaryColorRgb="239,68,68"
        gradientFrom="#f87171"
        gradientTo="#dc2626"
      />
    </CourseLandingShared>
  );
}
