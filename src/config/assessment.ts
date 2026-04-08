export interface AssessmentQuestion {
  id: number;
  question: string;
  options: string[];
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    question: 'What industry is your business in?',
    options: [
      'Retail / E-commerce',
      'Manufacturing',
      'Services (Consulting, Agency, etc.)',
      'Healthcare',
      'Education',
      'Real Estate',
      'Food & Hospitality',
      'Transportation & Logistics',
      'Finance & Accounting',
      'Other',
    ],
  },
  {
    id: 2,
    question: 'How many people work in your business?',
    options: ['Just me', '2-5', '6-20', '21-50', '50+'],
  },
  {
    id: 3,
    question: 'Which department takes the most of your time?',
    options: [
      'Operations & Admin',
      'Marketing & Social Media',
      'Sales & Customer Follow-ups',
      'Customer Support',
      'Finance & Bookkeeping',
      'HR & Team Management',
    ],
  },
  {
    id: 4,
    question: "What's your biggest daily bottleneck?",
    options: [
      'Repetitive emails & messages',
      'Data entry & record keeping',
      'Content creation (posts, ads, copy)',
      'Customer queries & support',
      'Reports & analytics',
      'Scheduling & coordination',
    ],
  },
  {
    id: 5,
    question: 'Have you tried any AI tools before?',
    options: [
      'Yes, I use them regularly',
      'Tried once or twice',
      'No, never tried',
      "I've heard of them but don't know where to start",
    ],
  },
  {
    id: 6,
    question: 'How much time per week do you spend on tasks that feel repetitive?',
    options: ['Less than 5 hours', '5-10 hours', '10-20 hours', '20+ hours'],
  },
  {
    id: 7,
    question: 'What would you do with 10 extra hours per week?',
    options: [
      'Grow revenue & get more clients',
      'Reduce team stress & workload',
      'Start a new project or product line',
      'Spend more time with family',
    ],
  },
  {
    id: 8,
    question: 'What is your monthly budget for tools and training?',
    options: [
      'Less than ₹5,000',
      '₹5,000 - ₹15,000',
      '₹15,000 - ₹50,000',
      '₹50,000+',
    ],
  },
];

export interface AssessmentContactInfo {
  name: string;
  email: string;
  phone: string;
}

export interface AssessmentSubmission {
  contact: AssessmentContactInfo;
  responses: Record<number, string>;
}

export interface AssessmentReport {
  recommendations: {
    title: string;
    description: string;
    estimated_time_saved: string;
    tools: string[];
  }[];
  summary: string;
  hindi_summary: string;
  next_step: string;
}
