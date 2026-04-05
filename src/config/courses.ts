export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  thumbnail: string;
  rating: number;
  studentsEnrolled: number;
  instructorName: string;
  instructorRole: string;
  isFeatured: boolean;
  syllabus: { module: string; topics: string[] }[];
  learningOutcomes: string[];
  tools: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'AI Tools Mastery for Beginners',
    slug: 'ai-tools-mastery-beginners',
    shortDescription: 'Master ChatGPT, Claude, Canva AI, and 10+ AI tools to 10x your productivity.',
    description: 'A comprehensive hands-on program that takes you from AI-curious to AI-proficient. Learn to use the most powerful AI tools in the market through real-world projects. No coding required.',
    price: 4999,
    originalPrice: 9999,
    duration: '4 Weeks',
    level: 'Beginner',
    category: 'AI Tools',
    thumbnail: '/images/course-ai-tools.jpg',
    rating: 4.8,
    studentsEnrolled: 234,
    instructorName: 'Parveen Sukhija',
    instructorRole: 'Founder, Uplrn AI Labs',
    isFeatured: true,
    syllabus: [
      { module: 'Introduction to AI', topics: ['What is AI?', 'AI vs ML vs DL', 'AI in daily life', 'Setting up accounts'] },
      { module: 'ChatGPT & Claude Mastery', topics: ['Prompt engineering', 'Advanced prompts', 'Content creation', 'Research & analysis'] },
      { module: 'Visual AI Tools', topics: ['Canva AI', 'Midjourney basics', 'HeyGen for videos', 'AI image editing'] },
      { module: 'AI for Business', topics: ['AI automation', 'Email & marketing AI', 'AI for social media', 'Building AI workflows'] },
    ],
    learningOutcomes: [
      'Use 10+ AI tools confidently for work and personal projects',
      'Write effective prompts that get the best AI outputs',
      'Create professional content using AI in minutes',
      'Automate repetitive tasks using AI workflows',
      'Build a portfolio of AI-powered projects',
    ],
    tools: ['ChatGPT', 'Claude', 'Canva AI', 'Midjourney', 'HeyGen', 'Notion AI', 'Gamma', 'Perplexity'],
  },
  {
    id: '2',
    title: 'AI for Digital Marketing',
    slug: 'ai-digital-marketing',
    shortDescription: 'Transform your marketing with AI. Learn to create campaigns, content, and analytics using AI.',
    description: 'Master the intersection of AI and digital marketing. From AI-powered content creation to automated campaigns and intelligent analytics — become the marketer every company wants to hire.',
    price: 7999,
    originalPrice: 14999,
    duration: '6 Weeks',
    level: 'Intermediate',
    category: 'Marketing',
    thumbnail: '/images/course-marketing.jpg',
    rating: 4.9,
    studentsEnrolled: 156,
    instructorName: 'Parveen Sukhija',
    instructorRole: 'Founder, Uplrn AI Labs',
    isFeatured: true,
    syllabus: [
      { module: 'AI Marketing Fundamentals', topics: ['AI in marketing landscape', 'Marketing automation basics', 'AI content strategy'] },
      { module: 'Content Creation with AI', topics: ['AI copywriting', 'Social media with AI', 'Video marketing with AI', 'SEO with AI tools'] },
      { module: 'AI-Powered Advertising', topics: ['AI ad copy generation', 'Audience targeting with AI', 'Performance optimization', 'A/B testing with AI'] },
      { module: 'Analytics & Automation', topics: ['AI analytics tools', 'Marketing automation', 'Chatbots & customer AI', 'Campaign optimization'] },
    ],
    learningOutcomes: [
      'Create marketing campaigns 5x faster using AI tools',
      'Generate SEO-optimized content that ranks',
      'Build AI-powered marketing automations',
      'Analyze marketing data with AI-powered insights',
    ],
    tools: ['ChatGPT', 'Jasper', 'Copy.ai', 'Canva AI', 'Surfer SEO', 'HubSpot AI', 'Meta AI Ads'],
  },
  {
    id: '3',
    title: 'Python & AI Development',
    slug: 'python-ai-development',
    shortDescription: 'Learn Python programming and build real AI applications from scratch.',
    description: 'Go from zero coding experience to building AI applications with Python. This intensive program covers Python fundamentals, data science basics, and hands-on AI/ML project development.',
    price: 14999,
    originalPrice: 24999,
    duration: '12 Weeks',
    level: 'Beginner',
    category: 'Development',
    thumbnail: '/images/course-python.jpg',
    rating: 4.7,
    studentsEnrolled: 98,
    instructorName: 'Parveen Sukhija',
    instructorRole: 'Founder, Uplrn AI Labs',
    isFeatured: true,
    syllabus: [
      { module: 'Python Fundamentals', topics: ['Variables & data types', 'Control flow', 'Functions', 'OOP basics'] },
      { module: 'Data Science with Python', topics: ['NumPy & Pandas', 'Data visualization', 'Data cleaning', 'Statistical analysis'] },
      { module: 'Machine Learning Basics', topics: ['Scikit-learn', 'Supervised learning', 'Unsupervised learning', 'Model evaluation'] },
      { module: 'AI Application Development', topics: ['OpenAI API', 'Building chatbots', 'Image recognition', 'Deploying AI apps'] },
    ],
    learningOutcomes: [
      'Write Python code confidently from scratch',
      'Analyze data using Pandas, NumPy, and visualization libraries',
      'Build and train machine learning models',
      'Deploy AI-powered web applications',
    ],
    tools: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'TensorFlow', 'OpenAI API', 'Streamlit'],
  },
  {
    id: '4',
    title: 'AI for Business Leaders',
    slug: 'ai-business-leaders',
    shortDescription: 'Strategic AI adoption for entrepreneurs and managers. No coding required.',
    description: 'Designed for business owners and managers who need to understand AI strategically. Learn how to identify AI opportunities, evaluate tools, manage AI projects, and lead AI transformation in your organization.',
    price: 9999,
    originalPrice: 19999,
    duration: '4 Weeks',
    level: 'Intermediate',
    category: 'Business',
    thumbnail: '/images/course-business.jpg',
    rating: 4.8,
    studentsEnrolled: 87,
    instructorName: 'Parveen Sukhija',
    instructorRole: 'Founder, Uplrn AI Labs',
    isFeatured: false,
    syllabus: [
      { module: 'AI Strategy', topics: ['AI landscape overview', 'Identifying AI opportunities', 'ROI of AI adoption', 'AI readiness assessment'] },
      { module: 'AI for Operations', topics: ['Process automation', 'AI in HR & recruitment', 'Customer service AI', 'Supply chain AI'] },
      { module: 'AI Implementation', topics: ['Evaluating AI vendors', 'Managing AI projects', 'Data strategy', 'Change management'] },
      { module: 'Future of AI', topics: ['Emerging AI trends', 'AI ethics & governance', 'Building AI-first culture', 'Case studies'] },
    ],
    learningOutcomes: [
      'Develop an AI strategy for your organization',
      'Evaluate and select the right AI tools for business needs',
      'Lead AI implementation projects effectively',
      'Make data-driven decisions about AI investments',
    ],
    tools: ['ChatGPT', 'Claude', 'Zapier AI', 'Power Automate', 'Notion AI', 'Otter.ai'],
  },
  {
    id: '5',
    title: 'Generative AI & Prompt Engineering',
    slug: 'generative-ai-prompt-engineering',
    shortDescription: 'Master the art of communicating with AI. Advanced prompt techniques for professionals.',
    description: 'Deep dive into generative AI models and advanced prompt engineering. Learn to get consistently excellent results from ChatGPT, Claude, Midjourney, and other generative AI tools through systematic prompt design.',
    price: 5999,
    originalPrice: 11999,
    duration: '3 Weeks',
    level: 'Advanced',
    category: 'AI Tools',
    thumbnail: '/images/course-prompts.jpg',
    rating: 4.9,
    studentsEnrolled: 312,
    instructorName: 'Parveen Sukhija',
    instructorRole: 'Founder, Uplrn AI Labs',
    isFeatured: true,
    syllabus: [
      { module: 'How LLMs Work', topics: ['Transformer architecture simplified', 'Tokens & context windows', 'Temperature & parameters', 'Model comparison'] },
      { module: 'Prompt Frameworks', topics: ['CRISP framework', 'Chain-of-thought', 'Few-shot prompting', 'System prompts'] },
      { module: 'Advanced Techniques', topics: ['Role-based prompting', 'Multi-step workflows', 'Prompt chaining', 'Custom GPTs & Claude Projects'] },
      { module: 'Real-World Applications', topics: ['Content production pipeline', 'Code generation', 'Data analysis prompts', 'Creative AI workflows'] },
    ],
    learningOutcomes: [
      'Understand how large language models work under the hood',
      'Design prompts that consistently produce high-quality outputs',
      'Build multi-step AI workflows for complex tasks',
      'Create custom AI assistants for specific use cases',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'DALL-E', 'Stable Diffusion'],
  },
  {
    id: '6',
    title: 'AI Video & Content Creation',
    slug: 'ai-video-content-creation',
    shortDescription: 'Create professional videos, graphics, and content at scale using AI tools.',
    description: 'Learn to produce studio-quality videos, graphics, presentations, and written content using the latest AI tools. Perfect for content creators, marketers, and entrepreneurs who want to scale their content production.',
    price: 6999,
    originalPrice: 12999,
    duration: '5 Weeks',
    level: 'Beginner',
    category: 'Content Creation',
    thumbnail: '/images/course-content.jpg',
    rating: 4.7,
    studentsEnrolled: 189,
    instructorName: 'Parveen Sukhija',
    instructorRole: 'Founder, Uplrn AI Labs',
    isFeatured: false,
    syllabus: [
      { module: 'AI Writing Tools', topics: ['Long-form content', 'Social media copy', 'Email marketing', 'Blog writing with AI'] },
      { module: 'AI Video Production', topics: ['HeyGen avatars', 'Runway ML editing', 'AI voiceovers', 'Automated video creation'] },
      { module: 'AI Graphics & Design', topics: ['Canva AI features', 'AI image generation', 'Brand kit automation', 'Presentation AI'] },
      { module: 'Content at Scale', topics: ['Content calendars with AI', 'Repurposing workflows', 'Multi-platform publishing', 'Analytics & optimization'] },
    ],
    learningOutcomes: [
      'Produce professional videos without a camera or studio',
      'Create weeks of social media content in hours',
      'Design graphics and presentations using AI tools',
      'Build a scalable content production workflow',
    ],
    tools: ['HeyGen', 'Runway ML', 'Canva AI', 'Descript', 'ElevenLabs', 'Gamma', 'Opus Clip'],
  },
];

export const categories = [...new Set(courses.map(c => c.category))];
