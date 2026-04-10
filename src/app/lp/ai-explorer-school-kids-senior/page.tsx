import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'AI for Teens (Class 8-10) — Board Exam Ready | TARAhut AI Labs',
  description: 'Advanced AI course for Class 8-10 students. Master AI for studies, build chatbots, prep for board exams with AI.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'ai-explorer-school-kids-senior');
  if (!course) notFound();

  return (
    <CourseLandingShared
      course={course}
      theme={{
        primary: '#8b5cf6',
        primaryRgb: '139,92,246',
        gradientFrom: '#a78bfa',
        gradientVia: '#8b5cf6',
        gradientTo: '#6366f1',
      }}
      trustBadge="🎯 Board Exam Game-Changer"
      hook={{
        punjabi: 'Boards aa rahe hain, tension ho rahi hai?',
        translation: '...AI se padho, top karo.',
      }}
      headlineWhite="AI for Teens"
      headlineGradient="Class 8-10 · Board Exam Ready"
      subtitle="Study Smarter, Not Harder"
      subSubtitle="AI study plans · Chatbots · Board prep"
      stats={[
        { value: 10, suffix: '+', label: 'AI Study Tools' },
        { value: 4, suffix: ' Weeks', label: 'Intensive Program' },
        { value: 100, suffix: '%', label: 'Ready For 2026' },
      ]}
      audience={[
        { emoji: '📚', title: 'Class 8-10', subtitle: 'Building strong foundation' },
        { emoji: '🎯', title: 'Board Aspirants', subtitle: 'Want to top their class' },
        { emoji: '💻', title: 'Tech-Curious Teens', subtitle: 'Future engineers, designers' },
      ]}
      audienceLabel="Perfect For"
      beforeAfter={[
        { before: '📖 Struggling with tough subjects', after: '🧠 AI tutor explains everything' },
        { before: '⏰ Hours memorizing', after: '⚡ Smart revision with AI' },
        { before: '😰 Exam stress', after: '💪 Confident, well-prepared' },
        { before: '🤖 No tech skills', after: '🚀 Building own AI chatbots' },
      ]}
      differentiators={[
        { icon: '🧑‍🏫', text: 'Expert trainers' },
        { icon: '📚', text: 'Board syllabus aligned' },
        { icon: '🎯', text: 'Small batches' },
      ]}
      learnCards={[
        { icon: '📚', title: 'AI for Board Exams', desc: 'Study plans, note summaries, practice Q&A, revision — all AI-powered' },
        { icon: '🤖', title: 'Build Your Own Chatbot', desc: 'Create a custom GPT for your favorite subject' },
        { icon: '📝', title: 'AI Writing Skills', desc: 'Essays, projects, reports — write like a pro with AI help' },
        { icon: '🎓', title: 'Career Discovery', desc: 'Explore future careers in AI and find your interests' },
        { icon: '💼', title: 'LinkedIn & Resume', desc: 'Build a professional online presence early' },
        { icon: '🎬', title: 'AI Video Creation', desc: 'Make videos for school projects and presentations' },
      ]}
      learnTitle="Skills for School & Beyond"
      learnSubtitle="Smart Learning"
      incomePaths={[]}
      valueItems={[
        { icon: '👨‍🏫', item: 'Small Batch (Max 10 students)', desc: 'Personal attention, individual progress' },
        { icon: '📚', item: 'Board Exam Study Plans', desc: 'AI-powered plans aligned with CBSE/ICSE' },
        { icon: '🤖', item: 'Custom Chatbot Project', desc: 'Your own AI tutor you built yourself' },
        { icon: '📝', item: 'Subject-wise Prompt Library', desc: 'AI prompts for Math, Science, English, SST' },
        { icon: '📱', item: 'Early Portfolio Building', desc: 'Start building your digital identity' },
        { icon: '📜', item: 'Verified Certificate', desc: 'LinkedIn-shareable — early career boost' },
        { icon: '🎯', item: '4 Weeks Live Classes', desc: 'Interactive, hands-on learning' },
      ]}
      totalValue="₹12,000+"
      finalCtaText="Start Your Child's"
      finalCtaGradient="Tech Career Early."
    >
      <CourseToolSection
        toolId="homework-helper"
        badge="LIVE DEMO — Try the homework helper"
        title="Any Subject."
        titleHighlight="Any Question. AI Explains."
        subtitle="Ask any school question. AI explains it in simple words with examples a kid will actually understand."
        placeholder="e.g. 'Explain photosynthesis for a Class 9 student'"
        examples={[
          'Explain Newton&apos;s laws simply',
          'What is democracy?',
          'How to solve quadratic equations',
          'Why is the sky blue?',
        ]}
        buttonText="🎓 Get the Answer"
        hookTitle="Imagine having an AI tutor for"
        hookSubtitle="every subject, every day, forever."
        hookCta="Enroll My Child"
        primaryColor="#8b5cf6"
        primaryColorRgb="139,92,246"
        gradientFrom="#a78bfa"
        gradientTo="#6366f1"
      />
    </CourseLandingShared>
  );
}
