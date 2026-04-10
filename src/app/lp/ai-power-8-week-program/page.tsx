import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'AI Power 8-Week Program — Earn ₹20K-50K/month | TARAhut AI Labs',
  description: 'Punjab\'s first practical AI program for non-tech students. 15+ AI tools, 4 portfolio projects, freelancing-ready in 8 weeks.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'ai-power-8-week-program');
  if (!course) notFound();

  return (
    <CourseLandingShared
      course={course}
      theme={{
        primary: '#f59e0b',
        primaryRgb: '245,158,11',
        gradientFrom: '#fbbf24',
        gradientVia: '#f59e0b',
        gradientTo: '#ea580c',
      }}
      trustBadge="🔥 Non-Tech Students Welcome"
      hook={{
        punjabi: 'BBA, BCom, BA ki degree... ab kya?',
        translation: '...AI skills se ₹50K/month kama sakte ho.',
      }}
      headlineWhite="AI Power Program"
      headlineGradient="Non-Tech → AI Pro in 8 Weeks"
      subtitle="15+ AI Tools · 4 Real Projects · Earning-Ready"
      subSubtitle="No coding needed · Built for BBA, BCom, BA students"
      stats={[
        { value: 15, suffix: '+', label: 'AI Tools Mastered' },
        { value: 4, suffix: ' Projects', label: 'Portfolio Ready' },
        { value: 50, suffix: 'K/mo', label: 'Earning Potential', prefix: '₹' },
      ]}
      audience={[
        { emoji: '🎓', title: 'Non-IT Students', subtitle: 'BBA, BCom, BA, MBA' },
        { emoji: '📚', title: 'IELTS Aspirants', subtitle: 'Side income while prep' },
        { emoji: '💼', title: 'Career Changers', subtitle: 'Want AI skills fast' },
      ]}
      audienceLabel="Perfect For"
      beforeAfter={[
        { before: '😔 "Non-IT background — no career"', after: '🚀 AI Pro with portfolio + income' },
        { before: '🔍 Job search with nothing to show', after: '💼 4 real projects, 2 clients' },
        { before: '💸 No earning power', after: '💰 ₹20K-50K/month freelancing' },
        { before: '📱 Just scrolling Instagram', after: '🎯 Running client projects' },
      ]}
      differentiators={[
        { icon: '🧑‍🏫', text: 'Daily practice' },
        { icon: '💼', text: 'Real clients' },
        { icon: '🏆', text: 'Portfolio by Week 8' },
      ]}
      learnCards={[
        { icon: '💬', title: 'AI Writing Pro', desc: 'ChatGPT, Claude, Gemini — write anything professionally in minutes' },
        { icon: '🎨', title: 'AI Design', desc: 'Canva AI, Leonardo, Midjourney — create ads, posters, graphics' },
        { icon: '🎬', title: 'AI Video', desc: 'CapCut AI, InVideo, HeyGen — produce videos without a camera' },
        { icon: '🤖', title: 'AI Automation', desc: 'Zapier, Make.com — automate business workflows without code' },
        { icon: '💼', title: 'Client Work', desc: 'Complete 4 real projects for local businesses' },
        { icon: '💰', title: 'Freelancing Setup', desc: 'Fiverr, Upwork, LinkedIn profiles ready to earn' },
      ]}
      learnTitle="From Zero to AI Pro"
      learnSubtitle="8-Week Transformation"
      incomePaths={[
        {
          emoji: '💼',
          title: 'Freelancing',
          amount: '₹20K–₹50K/mo',
          examples: ['Content writing with AI', 'Social media management', 'AI design services'],
        },
        {
          emoji: '📚',
          title: 'Part-time Work',
          amount: '₹10K–₹25K/mo',
          examples: ['Remote AI assistant jobs', 'Content creation gigs', 'Virtual assistant roles'],
        },
        {
          emoji: '🏢',
          title: 'Full-Time Roles',
          amount: '₹25K–₹60K/mo',
          examples: ['AI content specialist', 'Junior marketing AI', 'AI research assistant'],
        },
      ]}
      valueItems={[
        { icon: '📝', item: '15+ AI Tools Training', desc: 'Every major AI tool professionals use' },
        { icon: '💼', item: '4 Real Portfolio Projects', desc: 'Complete projects for real businesses' },
        { icon: '🌐', item: 'Portfolio Website', desc: 'Personal website showcasing your work' },
        { icon: '📱', item: 'Freelancing Profiles', desc: 'Fiverr, Upwork, LinkedIn ready to go' },
        { icon: '📚', item: '500+ Prompt Library', desc: 'Ready-to-use prompts for every project' },
        { icon: '💬', item: 'Client Templates', desc: 'Proposals, contracts, messages that close' },
        { icon: '📜', item: 'Verified Certificate', desc: 'LinkedIn-shareable credential' },
        { icon: '👥', item: 'Alumni Network', desc: 'Ongoing support and job leads' },
      ]}
      totalValue="₹40,000+"
      finalCtaText="Your Non-Tech Degree Just Got"
      finalCtaGradient="10x More Valuable."
    >
      <CourseToolSection
        toolId="career-roadmap"
        badge="LIVE DEMO — Get your personalized plan"
        title="Your 8-Week AI Career"
        titleHighlight="Roadmap"
        subtitle="Tell us about yourself. AI creates a personalized 8-week plan to your first AI income."
        placeholder="e.g. 'I'm a BCom final year student, good at writing, want to earn ₹30K/month'"
        examples={[
          'BBA student, love design, want freelancing',
          'Homemaker, good at English, need side income',
          'Recent BA graduate, no tech skills',
          'IELTS aspirant, need extra income',
        ]}
        buttonText="🗺️ Generate My Roadmap"
        hookTitle="This is YOUR personalized plan."
        hookSubtitle="Let's make it real in 8 weeks."
        hookCta="Start My Journey"
        primaryColor="#f59e0b"
        primaryColorRgb="245,158,11"
        gradientFrom="#fbbf24"
        gradientTo="#ea580c"
      />
    </CourseLandingShared>
  );
}
