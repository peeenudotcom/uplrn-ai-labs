export interface SchoolCourseModule {
  module: number;
  title: string;
  sessions: number;
  topics: string[];
  activity: string;
  outcome: string;
}

export interface SchoolCourse {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  originalPrice: number;
  discount: number;
  instructor: string;
  enrolled: string;
  modules: number;
  description: string;
  highlights: string[];
  tools: string[];
  syllabus: SchoolCourseModule[];
  whoIsThisFor: string[];
  prerequisites: string[];
  whatYouGet: string[];
}

export const schoolCourses: SchoolCourse[] = [
  // ==================== JUNIOR TRACK (Class 5-7) ====================
  {
    slug: "ai-explorer-school-kids-junior",
    title: "AI Explorer for School Kids — Junior",
    subtitle: "Class 5–7 | Age 10–12",
    category: "AI Tools",
    level: "Beginner",
    duration: "4 Weeks",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    instructor: "Parveen Sukhija",
    enrolled: "0+",
    modules: 12,
    description:
      "A fun, hands-on AI course for Class 5–7 students. Learn to use ChatGPT, Canva AI, and 10+ tools for school projects, creative storytelling, art, and everyday problem-solving.",

    highlights: [
      "Learn 10+ AI tools through fun, guided activities",
      "Use AI to understand school subjects — math, science, English",
      "Smart searching: research projects and fact-check WhatsApp forwards",
      "Improve English with AI — grammar, vocabulary, translation",
      "Create art, comics, stories and presentations with AI",
      "Build confidence with technology from an early age",
      "Showcase your final project to parents on Demo Day",
      "Small batch of 10 students for personalized attention",
    ],

    tools: [
      "ChatGPT",
      "Canva AI",
      "Google Gemini",
      "Microsoft Copilot",
      "Gamma",
      "Perplexity AI",
      "Wolfram Alpha",
      "Google Translate AI",
      "NotebookLM",
      "Google Assistant",
    ],

    syllabus: [
      {
        module: 1,
        title: "Meet Your AI Friend",
        sessions: 1,
        topics: [
          "What is AI? Simple explanation with real-life examples",
          "Fun demos: voice assistants, face filters, recommendation engines",
          "First conversation with ChatGPT — ask 10 fun questions about yourself, your city, and hobbies",
          "Understanding how AI 'thinks' vs how humans think",
        ],
        activity: "Write 5 creative questions to stump AI. Share answers with family.",
        outcome:
          "Students understand what AI is, where it already exists in their life, and can have a basic conversation with a chatbot.",
      },
      {
        module: 2,
        title: "AI as Your Study Buddy",
        sessions: 1,
        topics: [
          "Using AI to explain tough school topics in simple language — from fractions to photosynthesis",
          "The magic phrase: 'Explain like I am 10 years old'",
          "Solving math word problems step-by-step with AI as tutor (not answer machine)",
          "Visualising science concepts: solar system, water cycle, human body",
          "Comparing AI answers with your textbook — what matches, what doesn't",
          "Using AI for homework help the right way, not copy-paste",
        ],
        activity:
          "Pick 3 topics from current homework. Get AI explanations, compare with textbook, note what was different.",
        outcome:
          "Students can use AI as a personal tutor for any school subject while still thinking critically and verifying answers.",
      },
      {
        module: 3,
        title: "Prompt Power — Talk to AI Like a Pro",
        sessions: 1,
        topics: [
          "What is a prompt? Why HOW you ask matters more than WHAT you ask",
          "Good prompt vs bad prompt — live comparison with real examples",
          "Prompt building blocks: who, what, how, format, tone",
          "Prompt Challenge: write a poem about your city, describe a mango in 3 styles, explain gravity to a 5-year-old",
        ],
        activity:
          "Create a 'Prompt Recipe Book' — a personal collection of 10 best prompts that worked for you.",
        outcome:
          "Students learn the fundamentals of prompt engineering and can get better results from any AI tool.",
      },
      {
        module: 4,
        title: "AI Artist — Create Cool Images",
        sessions: 1,
        topics: [
          "How does AI generate images from text?",
          "Visual prompting: describing images with words",
          "Create: your dream school, a superhero version of yourself, a poster for a school event",
          "Understanding AI image styles: realistic, cartoon, watercolor, 3D",
          "What AI art can and cannot do — brief ethical discussion",
        ],
        activity:
          "Design an AI-generated birthday card for a friend or family member using Canva AI.",
        outcome:
          "Students can create AI-generated images for personal and school use with proper visual prompts.",
      },
      {
        module: 5,
        title: "AI Storyteller & Comic Maker",
        sessions: 1,
        topics: [
          "Co-writing a short story with AI — you provide the ideas, AI helps with words",
          "Story structure: beginning, middle, twist, ending",
          "Creating a 4-panel comic strip using AI images and text",
          "Character design and scene building with AI",
        ],
        activity:
          "Each student creates a 4-panel comic about a day in their life with a surprise twist ending.",
        outcome:
          "Students combine creative writing with AI tools to produce visual stories they are proud of.",
      },
      {
        module: 6,
        title: "Smart Searching with AI",
        sessions: 1,
        topics: [
          "Why Googling alone is not enough — how AI changes research",
          "Using Perplexity AI and ChatGPT to research school projects with sources",
          "How to fact-check WhatsApp forwards and viral news your parents share",
          "Using NotebookLM to summarise YouTube videos and long articles",
          "Building a research habit: ask AI, verify, then write in your own words",
        ],
        activity:
          "Pick a school project topic. Research it using AI tools, find 3 reliable sources, and write a 150-word summary.",
        outcome:
          "Students become smart, responsible researchers who use AI to find and verify information efficiently.",
      },
      {
        module: 7,
        title: "AI Video & Presentation Magic",
        sessions: 1,
        topics: [
          "Creating a short presentation about 'My Favourite Festival'",
          "Using AI for slide design, content ideas, and image generation",
          "Introduction to Gamma.app for instant presentations",
          "Tips for presenting: speak clearly, make eye contact, tell a story",
        ],
        activity:
          "Make a 5-slide presentation about your family, hobby, or favourite place using AI tools.",
        outcome:
          "Students can independently create polished presentations using AI for both content and design.",
      },
      {
        module: 8,
        title: "AI Safety & Digital Smarts",
        sessions: 1,
        topics: [
          "What AI gets wrong — hallucinations and confident mistakes",
          "How to fact-check AI answers using Google and common sense",
          "Online safety: strong passwords, not sharing personal info, cyberbullying awareness",
          "Spot the AI Lie: find 5 wrong answers AI gives and correct them",
        ],
        activity:
          "Make a poster: '5 Rules for Using AI Safely' to put up in your room at home.",
        outcome:
          "Students become critical thinkers who verify AI outputs and practice safe online behaviour.",
      },
      {
        module: 9,
        title: "AI for English & Languages",
        sessions: 1,
        topics: [
          "Using AI to improve English writing — grammar, punctuation, vocabulary",
          "Build your vocabulary: ask AI to explain new words in context and give examples",
          "AI translation between Punjabi, Hindi, and English — when it works and when it fails",
          "Writing better sentences: submit your own writing, ask AI to improve it, understand why",
          "Fun: write a short story in Punjabi, translate to English with AI, compare both",
        ],
        activity:
          "Take your last English homework or essay. Ask AI to improve it and explain every change it made. Rewrite it yourself.",
        outcome:
          "Students use AI to actively improve their English language skills — writing, vocabulary, grammar — while also appreciating their mother tongue.",
      },
      {
        module: 10,
        title: "Build Your AI Project — Part 1",
        sessions: 1,
        topics: [
          "Choose a final project: AI-powered school magazine page, AI travel guide for your city, My Dream Career poster with AI research, AI-generated short story book",
          "Project planning: what will you build, which tools will you use, what's your story",
          "Start building: gather content, create designs, write copy",
        ],
        activity:
          "Continue working on your project at home. Collect materials, images, and ideas.",
        outcome:
          "Students plan and begin executing an independent project that combines multiple AI skills learned in the course.",
      },
      {
        module: 11,
        title: "Build Your AI Project — Part 2",
        sessions: 1,
        topics: [
          "Complete and polish your project — fix content, improve designs",
          "Peer review: give and receive constructive feedback from classmates",
          "Presentation skills: how to explain your project in 2 minutes",
          "Rehearse your showcase presentation",
        ],
        activity:
          "Final rehearsal at home. Practice presenting your project to your family.",
        outcome:
          "Students complete a polished project and develop confidence in presenting their work publicly.",
      },
      {
        module: 12,
        title: "Showcase Day + Graduation",
        sessions: 1,
        topics: [
          "Student presentations to parents and invited guests (2–3 minutes each)",
          "Live Q&A from audience",
          "Certificate distribution ceremony",
          "Best Project Award announcement",
          "Photo session and celebration",
          "Introduction to next-level course: AI Creator",
        ],
        activity:
          "Take your certificate and project portfolio home. Share with friends and family!",
        outcome:
          "Students showcase their learning, receive recognition, and leave with a portfolio of AI-created work.",
      },
    ],

    whoIsThisFor: [
      "Students in Class 5, 6, or 7 (age 10–12)",
      "Kids curious about technology and AI",
      "Students who want to use AI for school projects and homework",
      "Young learners who love art, stories, and creative activities",
      "Parents who want their children to be future-ready",
    ],

    prerequisites: [
      "Basic computer or smartphone usage",
      "Ability to read and type in English",
      "No coding or AI experience needed",
      "A curious and creative mindset!",
    ],

    whatYouGet: [
      "24 hours of hands-on, in-person training (12 sessions × 2 hours)",
      "Access to 10+ AI tools with guided practice",
      "Personal 'Prompt Recipe Book' and project portfolio",
      "Certificate of Completion from TARAhut AI Labs",
      "Project showcase event with parents invited",
      "Small batch: only 10 students per batch for individual attention",
    ],
  },

  // ==================== SENIOR TRACK (Class 8-10) ====================
  {
    slug: "ai-explorer-school-kids-senior",
    title: "AI Explorer for School Kids — Senior",
    subtitle: "Class 8–10 | Age 13–15",
    category: "AI Tools",
    level: "Intermediate",
    duration: "4 Weeks",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    instructor: "Parveen Sukhija",
    enrolled: "0+",
    modules: 12,
    description:
      "A future-ready AI course for Class 8–10 students. Master prompt engineering, use AI for board exam and competitive exam prep, explore career paths, build your personal brand, and create professional content — all in 4 weeks.",

    highlights: [
      "Master prompt engineering — the #1 AI skill for the future",
      "AI for board exams, Olympiads, NTSE — smarter prep strategies",
      "Explore career paths with AI — find what suits you before Class 11",
      "Build a real personal brand on Instagram/YouTube with AI",
      "Write your first working Python chatbot with AI assistance",
      "Learn AI ethics, deepfake detection, and digital safety",
      "Capstone project presented to parents and teachers on Demo Day",
      "Small batch of 10 students for mentorship-style learning",
    ],

    tools: [
      "ChatGPT",
      "Claude",
      "Google Gemini",
      "Canva AI",
      "Perplexity AI",
      "Gamma",
      "Grammarly",
      "Wolfram Alpha",
      "Replit",
      "Python",
      "Notion AI",
      "Adobe Firefly",
      "ElevenLabs",
      "HeyGen",
    ],

    syllabus: [
      {
        module: 1,
        title: "AI Revolution — Where Are We?",
        sessions: 1,
        topics: [
          "History of AI: from calculators to ChatGPT — the journey in 10 minutes",
          "How AI works: simple neural network concept (no math, just logic)",
          "Live comparison: ChatGPT vs Claude vs Gemini — same question, different answers",
          "Discussion: which careers will AI change in the next 10 years?",
        ],
        activity:
          "Research and list 5 careers that didn't exist 10 years ago because of technology.",
        outcome:
          "Students understand the AI landscape, can compare different AI tools, and begin thinking about AI's impact on careers.",
      },
      {
        module: 2,
        title: "Prompt Engineering Masterclass",
        sessions: 1,
        topics: [
          "The art and science of prompting: role, context, format, constraints",
          "Advanced techniques: chain-of-thought reasoning, few-shot examples, system prompts",
          "Mega prompts: combining multiple instructions for complex outputs",
          "Prompt Battle: pairs compete to get the best AI output for a challenge",
        ],
        activity:
          "Create an 'Advanced Prompt Playbook' with 15+ techniques and real examples that worked.",
        outcome:
          "Students become skilled prompt engineers who can get professional-quality outputs from any AI tool.",
      },
      {
        module: 3,
        title: "AI for Board Exams & Competitive Prep",
        sessions: 1,
        topics: [
          "Creating study notes and chapter summaries for any subject using AI",
          "Generating practice questions and mock tests — board exams, Olympiads, NTSE",
          "Building flashcards and revision schedules with AI",
          "How AI can help with JEE/NEET concept understanding (not shortcuts — real comprehension)",
          "Using AI to explain difficult concepts in multiple ways until you understand",
        ],
        activity:
          "Build a full revision kit for one chapter of your upcoming exam — notes, practice questions, flashcards.",
        outcome:
          "Students have a practical, repeatable system for using AI to prepare for any exam — from unit tests to competitive exams.",
      },
      {
        module: 4,
        title: "AI Research & Essay Writing",
        sessions: 1,
        topics: [
          "How to use AI for research without plagiarism — the ethical approach",
          "Essay structure: brainstorm → outline → draft → refine with AI assistance",
          "Critical thinking: verify AI facts, cross-reference with reliable sources",
          "The difference between AI-assisted writing and AI-dependent writing",
        ],
        activity:
          "Write a 500-word essay on 'Should AI be allowed in schools?' using AI as a research assistant, not a ghostwriter.",
        outcome:
          "Students can use AI as a research and writing tool while maintaining academic integrity and original thinking.",
      },
      {
        module: 5,
        title: "AI Content Creation: Design, Video & Audio",
        sessions: 1,
        topics: [
          "Creating professional posters, infographics, and social media content with Canva AI and Adobe Firefly",
          "AI image generation: prompting for specific styles — realistic, cartoon, watercolor, 3D",
          "Script writing for videos using AI — structure, hooks, CTAs",
          "Text-to-speech and AI voice generation with ElevenLabs",
          "Creating short AI avatar videos with HeyGen — the future of content production",
        ],
        activity:
          "Create a full content package: a poster, a 60-second video script, and an AI voiceover for a school event or social cause.",
        outcome:
          "Students can produce professional-quality visual and video content end-to-end using AI tools.",
      },
      {
        module: 6,
        title: "AI + Coding: Your First Bot",
        sessions: 1,
        topics: [
          "Why coding still matters in the AI age — and how AI makes it easier to learn",
          "Python basics with AI: variables, loops, conditions, functions",
          "Building a simple quiz game or chatbot with AI-generated code",
          "Understanding, reading, and modifying code — not just copy-pasting",
        ],
        activity:
          "Build a quiz game about Indian states and capitals using Python. Add 10+ questions and a score tracker.",
        outcome:
          "Students write their first working program and understand the basics of coding with AI as a pair programmer.",
      },
      {
        module: 7,
        title: "AI for Career Exploration & Personal Branding",
        sessions: 1,
        topics: [
          "Use AI to discover which careers match your interests, strengths, and personality",
          "Research what skills are needed for careers in AI, design, medicine, law, business",
          "What to study after Class 10 — AI-powered guidance for stream selection",
          "Building a student profile: LinkedIn-style bio, skills summary, achievements",
          "Why personal branding starts at school — real examples of student creators",
        ],
        activity:
          "Create your student profile: a short bio, list of skills, interests, and one career you want to explore — designed with Canva AI.",
        outcome:
          "Students gain clarity on career direction and create a professional student identity they can build on.",
      },
      {
        module: 8,
        title: "Build Your Personal Brand with AI",
        sessions: 1,
        topics: [
          "What is a personal brand and why teens should start building one now",
          "Content strategy: finding your niche (study tips, AI, local issues, sports, art)",
          "Creating a 30-day content calendar with AI — topics, formats, posting schedule",
          "Designing Instagram posts, Reels thumbnails, and YouTube banners with AI",
          "Writing captions that get engagement — hooks, hashtags, calls to action",
          "Understanding algorithms: what makes content reach more people",
        ],
        activity:
          "Create a complete Week 1 content plan for your niche: 7 post ideas, 3 designed posts, captions, and hashtags — all with AI.",
        outcome:
          "Students leave with a real, actionable personal brand kit they can start publishing immediately.",
      },
      {
        module: 9,
        title: "AI Ethics, Safety & Deepfakes",
        sessions: 1,
        topics: [
          "AI bias: how training data affects outputs and why it matters",
          "Deepfakes: how to spot them and why they are dangerous",
          "Privacy and data: what AI companies know about you",
          "AI and misinformation: how fake news spreads faster with AI",
          "Debate: 'AI will do more harm than good in the next 10 years'",
        ],
        activity:
          "Write a 1-page opinion piece: 'What rules should exist for AI in India?'",
        outcome:
          "Students develop a strong ethical framework for AI use and can identify misinformation and deepfakes.",
      },
      {
        module: 10,
        title: "Capstone Project — Part 1: Ideate & Plan",
        sessions: 1,
        topics: [
          "Choose a capstone: AI-powered study guide for a subject, AI awareness campaign for your school, AI solutions for a local problem, personal portfolio website using AI, AI-generated magazine or newsletter",
          "Research phase: gather information, examples, and inspiration",
          "Project planning: timeline, tools needed, deliverables",
          "Start building your project",
        ],
        activity:
          "Continue project work at home. Prepare content, designs, and research materials.",
        outcome:
          "Students select an ambitious project and create a structured plan for execution.",
      },
      {
        module: 11,
        title: "Capstone Project — Part 2: Build & Refine",
        sessions: 1,
        topics: [
          "Complete the capstone project — content, design, and final touches",
          "Peer review: give and receive constructive feedback",
          "Presentation skills: storytelling, confidence, handling Q&A, time management",
          "Final polish and full rehearsal of 3–5 minute presentation",
        ],
        activity:
          "Full rehearsal at home. Prepare your 3–5 minute presentation. Dress code for showcase day.",
        outcome:
          "Students deliver a polished, portfolio-quality project and develop public speaking confidence.",
      },
      {
        module: 12,
        title: "Showcase Day + Graduation",
        sessions: 1,
        topics: [
          "Student presentations to parents, school teachers (invited), and guests (3–5 minutes each)",
          "Live Q&A from audience after each presentation",
          "Certificate distribution ceremony",
          "Best Project Award and special recognition",
          "Photo and video documentation",
          "Introduction to advanced courses: AI Creator, AI Builder",
          "Career paths in AI: what's possible for your future",
        ],
        activity:
          "Take your certificate and project portfolio home. Share your achievement and explore the next course!",
        outcome:
          "Students showcase their capstone to a real audience, receive recognition, and leave with a roadmap for continued AI learning.",
      },
    ],

    whoIsThisFor: [
      "Students in Class 8, 9, or 10 (age 13–15)",
      "Teens preparing for board exams or competitive exams who want smarter study methods",
      "Students interested in technology, coding, and AI careers",
      "Young creators who want to build content, a personal brand, and real projects with AI",
      "Parents who want their children to develop future-proof skills before choosing a stream",
    ],

    prerequisites: [
      "Comfortable using a computer or smartphone",
      "Can read and write in English",
      "No prior coding or AI experience required",
      "Curiosity and willingness to experiment!",
    ],

    whatYouGet: [
      "24 hours of hands-on, in-person training (12 sessions × 2 hours)",
      "Access to 14+ AI tools including Python coding and video creation",
      "Personal 'Prompt Engineering Playbook' and project portfolio",
      "Complete personal brand kit: bio, content calendar, designed posts",
      "Certificate of Completion from TARAhut AI Labs",
      "Capstone project showcase event with parents and teachers invited",
      "Best Project Award opportunity",
      "Small batch: only 10 students per batch for mentorship-style learning",
    ],
  },
];
