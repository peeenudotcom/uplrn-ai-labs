import { courses } from '@/config/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'Generative AI & Prompt Engineering — Master AI | TARAhut AI Labs',
  description: 'Learn advanced prompt engineering, CRISP framework, chain-of-thought, and generative AI techniques. The #1 skill of 2026.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'generative-ai-prompt-engineering');
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
      trustBadge="⚡ The #1 AI Skill of 2026"
      hook={{
        punjabi: 'Log bolte hain AI ne job kha li...',
        translation: '...par AI ko use karne wale kama rahe hain.',
      }}
      headlineWhite="Prompt Engineering"
      headlineGradient="The 10x AI Superpower"
      subtitle="Master What Separates Pros from Amateurs"
      subSubtitle="3 Weeks · CRISP Framework · Advanced Techniques"
      stats={[
        { value: 10, suffix: 'x', label: 'Better AI Output' },
        { value: 3, suffix: ' Weeks', label: 'To Mastery' },
        { value: 5, suffix: ' Models', label: 'ChatGPT, Claude, Gemini+' },
      ]}
      audience={[
        { emoji: '💼', title: 'Working Pros', subtitle: 'Level up your AI game' },
        { emoji: '🚀', title: 'Entrepreneurs', subtitle: 'Automate your business' },
        { emoji: '🎯', title: 'Tech Enthusiasts', subtitle: 'Go beyond basics' },
      ]}
      audienceLabel="Advanced Level"
      beforeAfter={[
        { before: '😐 "Write me something" prompts', after: '🎯 Precise, structured prompts' },
        { before: '🤷 AI gives generic answers', after: '💎 AI gives expert-level output' },
        { before: '⏰ Hours fixing AI mistakes', after: '⚡ Perfect output on first try' },
      ]}
      differentiators={[
        { icon: '🧠', text: 'CRISP Framework' },
        { icon: '🔗', text: 'Chain-of-thought' },
        { icon: '⚙️', text: 'Custom GPTs' },
      ]}
      learnCards={[
        { icon: '🧠', title: 'How LLMs Actually Work', desc: 'Tokens, context windows, temperature, and why it all matters' },
        { icon: '📐', title: 'CRISP Framework', desc: 'Context, Role, Instructions, Specifics, Parameters — structured prompting that works every time' },
        { icon: '🔗', title: 'Advanced Techniques', desc: 'Chain-of-thought, few-shot learning, prompt chaining, system prompts' },
        { icon: '⚙️', title: 'Custom GPTs & Projects', desc: 'Build your own specialized AI assistants for specific tasks' },
        { icon: '🎨', title: 'Multi-Modal AI', desc: 'Work with text, images, and generative AI tools together' },
        { icon: '💼', title: 'Real-World Applications', desc: 'Content pipelines, code generation, data analysis, creative workflows' },
      ]}
      learnTitle="Advanced Skills Most People Never Learn"
      learnSubtitle="Deep Dive"
      incomePaths={[]}
      valueItems={[
        { icon: '📚', item: '200+ Expert Prompts', desc: 'Battle-tested prompts for every professional use case' },
        { icon: '📐', item: 'CRISP Framework Guide', desc: 'Complete methodology with examples and templates' },
        { icon: '⚙️', item: 'Custom GPT Templates', desc: 'Pre-built GPTs you can clone and customize' },
        { icon: '🧪', item: 'Real A/B Test Results', desc: 'See why one prompt gets 10x better output than another' },
        { icon: '📜', item: 'Verified Certificate', desc: 'LinkedIn-shareable with unique verification' },
        { icon: '👥', item: 'Advanced Community', desc: 'Connect with serious AI practitioners' },
        { icon: '🎯', item: '3 Weeks Live Training', desc: 'Advanced techniques with real practice' },
      ]}
      totalValue="₹30,000+"
      finalCtaText="The AI Revolution Has"
      finalCtaGradient="Experts vs Amateurs."
    >
      <CourseToolSection
        toolId="prompt-score"
        badge="LIVE DEMO — Rate your prompt instantly"
        title="How Good Are"
        titleHighlight="Your Prompts?"
        subtitle="Paste any prompt you&apos;d normally give ChatGPT or Claude. AI rates it 1-10 and shows you exactly how to improve it."
        placeholder="e.g. 'Write me a marketing email for my shop'"
        examples={[
          'Write me an email to my boss',
          'Help me plan a marketing campaign',
          'Explain quantum physics simply',
          'Create a workout plan for me',
        ]}
        buttonText="📊 Score My Prompt"
        hookTitle="Your prompts are probably a"
        hookSubtitle="5/10. In 3 weeks, you'll write 10/10 prompts."
        hookCta="Level Up My Prompting"
        primaryColor="#8b5cf6"
        primaryColorRgb="139,92,246"
        gradientFrom="#a78bfa"
        gradientTo="#6366f1"
      />
    </CourseLandingShared>
  );
}
