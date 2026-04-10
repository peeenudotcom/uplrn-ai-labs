import { courses } from '@/config/courses';
import { schoolCourses } from '@/config/school-courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CourseLandingShared } from '@/components/landing/course-landing-shared';
import { CourseToolSection } from '@/components/landing/course-tool-section';

export const metadata: Metadata = {
  title: 'AI for Kids (Class 5-7) — Fun AI Learning | TARAhut AI Labs',
  description: 'A fun, hands-on AI course for Class 5-7 kids. Learn ChatGPT, Canva AI, and 10+ tools through creative projects and storytelling.',
};

export default function Page() {
  const course = courses.find((c) => c.slug === 'ai-explorer-school-kids-junior');
  const schoolCourse = schoolCourses.find((c) => c.slug === 'ai-explorer-school-kids-junior');
  if (!course) notFound();

  return (
    <CourseLandingShared
      course={course}
      theme={{
        primary: '#3b82f6',
        primaryRgb: '59,130,246',
        gradientFrom: '#60a5fa',
        gradientVia: '#3b82f6',
        gradientTo: '#0ea5e9',
      }}
      trustBadge="👨‍👩‍👧 Parents Love This Program"
      hook={{
        punjabi: 'Aapke bachche ke classmates AI seekh rahe hain...',
        translation: '...kya aapka bachcha peeche reh jayega?',
      }}
      headlineWhite="AI for Kids"
      headlineGradient="Class 5-7 · Ages 10-12"
      subtitle="The Skill Every Child Needs in 2026"
      subSubtitle="Fun projects · Creative learning · Zero stress"
      stats={[
        { value: 10, suffix: '+', label: 'Fun AI Tools' },
        { value: 4, suffix: ' Weeks', label: 'Of Learning' },
        { value: 12, suffix: ' Modules', label: 'Age-Appropriate' },
      ]}
      audience={[
        { emoji: '👦', title: 'Curious Kids', subtitle: 'Love exploring new things' },
        { emoji: '📚', title: 'School Students', subtitle: 'Ahead of the curriculum' },
        { emoji: '🎨', title: 'Creative Minds', subtitle: 'Art, stories, imagination' },
      ]}
      audienceLabel="Perfect For"
      beforeAfter={[
        { before: '📱 Just watching YouTube all day', after: '🎨 Creating AI art and stories' },
        { before: '🤷 "I don&apos;t know what to do with AI"', after: '🚀 Building real AI projects' },
        { before: '😴 Bored with school projects', after: '✨ Excited about every class' },
      ]}
      differentiators={[
        { icon: '🎮', text: 'Fun & interactive' },
        { icon: '🎨', text: 'Creative projects' },
        { icon: '👨‍👩‍👧', text: 'Parent updates' },
      ]}
      learnCards={[
        { icon: '📖', title: 'AI for Storytelling', desc: 'Create amazing stories, poems, and adventures with AI' },
        { icon: '🎨', title: 'AI Art Creation', desc: 'Make beautiful drawings, illustrations, and posters with AI' },
        { icon: '🎓', title: 'Homework Helper', desc: 'Use AI to understand tough subjects and complete projects' },
        { icon: '🎮', title: 'AI Games & Quizzes', desc: 'Build fun quizzes and interactive games with AI' },
        { icon: '📝', title: 'Creative Writing', desc: 'Write essays, stories, and diary entries with AI help' },
        { icon: '🔬', title: 'Science Projects', desc: 'Explore science concepts and build cool experiments with AI' },
      ]}
      learnTitle="Fun Skills Every Kid Should Know"
      learnSubtitle="Creative Learning"
      incomePaths={[]}
      valueItems={[
        { icon: '👨‍🏫', item: 'Small Batch (Max 10 kids)', desc: 'Personal attention in every session' },
        { icon: '🎨', item: 'Creative Project Kit', desc: 'Stories, art, games to build at home' },
        { icon: '📚', item: 'Illustrated Workbook', desc: 'Age-appropriate exercises and activities' },
        { icon: '👨‍👩‍👧', item: 'Weekly Parent Updates', desc: 'See your child&apos;s progress every week' },
        { icon: '🎉', item: 'Fun Reward System', desc: 'Badges, certificates, celebration' },
        { icon: '📜', item: 'Completion Certificate', desc: 'Frame-worthy certificate for the home' },
        { icon: '🎯', item: '4 Weeks Live Classes', desc: 'Fun, interactive, hands-on learning' },
      ]}
      totalValue="₹10,000+"
      finalCtaText="Give Your Child"
      finalCtaGradient="An Unfair Advantage."
    >
      <CourseToolSection
        toolId="kids-story"
        badge="LIVE DEMO — Watch AI write for kids"
        title="Watch AI Create a"
        titleHighlight="Story for Your Kid"
        subtitle="Type any topic. AI will write a fun, educational story for a 10-year-old in seconds."
        placeholder="e.g. 'A space adventure with a talking robot'"
        examples={[
          'A brave little mouse',
          'Magic paintbrush',
          'Space adventure',
          'A friendly dragon',
        ]}
        buttonText="📖 Generate Story"
        hookTitle="Your child can create stories like this"
        hookSubtitle="every single day."
        hookCta="Enroll My Child"
        primaryColor="#3b82f6"
        primaryColorRgb="59,130,246"
        gradientFrom="#60a5fa"
        gradientTo="#0ea5e9"
      />
    </CourseLandingShared>
  );
}
