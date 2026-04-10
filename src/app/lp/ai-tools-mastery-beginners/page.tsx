import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'AI Tools Mastery for Beginners — 10x Your Productivity | TARAhut AI Labs',
  description: 'Master ChatGPT, Claude, Canva AI and 10+ AI tools in 4 weeks. No coding required. Punjab\'s #1 AI training center.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'ai-tools-mastery-beginners');
  if (!course) notFound();

  return (
    <CourseLandingShared
      course={course}
      theme={{
        primary: '#10b981',
        primaryRgb: '16,185,129',
        gradientFrom: '#34d399',
        gradientVia: '#10b981',
        gradientTo: '#14b8a6',
      }}
      trustBadge="🏆 Punjab's #1 AI Training Lab"
      hook={{
        punjabi: 'Sab log AI ki baat kar rahe hain...',
        translation: '...par tu abhi tak confused hai?',
      }}
      headlineWhite="AI Tools Mastery"
      headlineGradient="for Absolute Beginners"
      subtitle="Master 10+ AI Tools in 4 Weeks"
      subSubtitle="No coding · No experience · Just results"
      stats={[
        { value: 10, suffix: '+', label: 'AI Tools Covered' },
        { value: 4, suffix: ' Weeks', label: 'To Mastery' },
        { value: 234, suffix: '+', label: 'Students Trained' },
      ]}
      audience={[
        { emoji: '🎓', title: 'Students', subtitle: 'Get ahead of the curve' },
        { emoji: '👔', title: 'Professionals', subtitle: '10x your work output' },
        { emoji: '🏠', title: 'Homemakers', subtitle: 'Learn the future' },
      ]}
      audienceLabel="Perfect For"
      beforeAfter={[
        { before: '😵 100+ AI tools, no idea where to start', after: '🎯 Know exactly which tool for which task' },
        { before: '📝 Spending hours on simple tasks', after: '⚡ Done in minutes with AI' },
        { before: '🤔 AI seems scary and technical', after: '💪 Confident with any AI tool' },
      ]}
      differentiators={[
        { icon: '🧑‍🏫', text: 'Live classes' },
        { icon: '💪', text: 'Hands-on practice' },
        { icon: '🎯', text: 'Real-world tasks' },
      ]}
      learnCards={[
        { icon: '💬', title: 'ChatGPT & Claude', desc: 'Master the two most powerful AI assistants for writing, research, and problem-solving' },
        { icon: '🎨', title: 'Canva AI', desc: 'Create professional designs, social media posts, presentations in minutes' },
        { icon: '🎬', title: 'HeyGen & AI Video', desc: 'Generate videos with AI avatars, voiceovers, no camera needed' },
        { icon: '🖼️', title: 'Midjourney & DALL-E', desc: 'Create stunning AI art, product images, illustrations from text' },
        { icon: '📊', title: 'Notion AI & Gamma', desc: 'Build smart notes, documents, and presentations automatically' },
        { icon: '🔍', title: 'Perplexity AI', desc: 'Research anything 10x faster with AI-powered search' },
      ]}
      learnTitle="10+ AI Tools You'll Master"
      learnSubtitle="Your AI Toolkit"
      incomePaths={[]}
      valueItems={[
        { icon: '📝', item: '100+ Prompt Templates', desc: 'Ready-to-use prompts for every common task' },
        { icon: '🎨', item: 'Canva Template Library', desc: 'Professional designs you can customize' },
        { icon: '🎥', item: 'Tool Demo Videos', desc: 'Watch how to use every tool, step by step' },
        { icon: '📚', item: 'AI Quick Reference Guide', desc: 'Cheat sheets for every tool you learn' },
        { icon: '📜', item: 'Verified Certificate', desc: 'LinkedIn-shareable with unique verification' },
        { icon: '👥', item: 'Student Community', desc: 'WhatsApp group for ongoing support' },
        { icon: '🎯', item: '4 Weeks Live Training', desc: 'Real practice sessions with trainers' },
      ]}
      totalValue="₹20,000+"
      finalCtaText="Your AI Skills Start"
      finalCtaGradient="Right Now."
    >
      <CourseToolSection
        toolId="ai-tool-finder"
        badge="LIVE DEMO — Try it now, no signup"
        title="Overwhelmed by"
        titleHighlight="100+ AI Tools?"
        subtitle="Tell AI what you want to do. Get the perfect tool recommendation instantly."
        placeholder="e.g. 'Create Instagram posts for my shop' or 'Summarize a long PDF'"
        examples={[
          'Write a resume',
          'Make Instagram posts',
          'Summarize a YouTube video',
          'Design a poster for my business',
          'Create a study plan',
        ]}
        buttonText="🔍 Find My Perfect AI Tool"
        hookTitle="Now imagine knowing the RIGHT tool for"
        hookSubtitle="every single task in your life."
        hookCta="Master All 10+ Tools"
        primaryColor="#10b981"
        primaryColorRgb="16,185,129"
        gradientFrom="#34d399"
        gradientTo="#14b8a6"
      />
    </CourseLandingShared>
  );
}
