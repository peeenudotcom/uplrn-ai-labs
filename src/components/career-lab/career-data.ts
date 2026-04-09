// ─── Rich resource data per archetype ────────────────────────────────────────
// Separated from the main component for maintainability

export interface FreeResource {
  title: string
  url: string
  type: 'youtube' | 'course' | 'website' | 'tool' | 'book'
  desc: string
}

export interface ToolToLearn {
  name: string
  category: 'essential' | 'intermediate' | 'advanced'
  free: boolean
  url: string
}

export interface PortfolioProject {
  title: string
  desc: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  timeEstimate: string
}

export interface Certification {
  name: string
  provider: string
  cost: string
  url: string
  worth: string
}

export interface JobPlatform {
  name: string
  url: string
  bestFor: string
}

export interface WeeklyTask {
  week: string
  tasks: string[]
  milestone: string
}

export interface ArchetypeResources {
  freeResources: FreeResource[]
  toolsToLearn: ToolToLearn[]
  portfolioProjects: PortfolioProject[]
  certifications: Certification[]
  jobPlatforms: JobPlatform[]
  interviewQuestions: string[]
  weeklyPlan: Record<string, WeeklyTask[]>
  skillChecklist: string[]
}

// ─── Resources by archetype ID ──────────────────────────────────────────────

export const ARCHETYPE_RESOURCES: Record<string, ArchetypeResources> = {
  'ai-ml-engineer': {
    freeResources: [
      { title: 'Andrew Ng — Machine Learning Specialization', url: 'https://www.coursera.org/specializations/machine-learning-introduction', type: 'course', desc: 'The gold standard ML course. Free to audit.' },
      { title: 'fast.ai — Practical Deep Learning', url: 'https://course.fast.ai/', type: 'course', desc: 'Learn deep learning top-down with code-first approach. Completely free.' },
      { title: '3Blue1Brown — Neural Networks', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi', type: 'youtube', desc: 'Best visual explanation of how neural networks actually work.' },
      { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', type: 'course', desc: 'Free micro-courses on Python, ML, Deep Learning, SQL.' },
      { title: 'StatQuest with Josh Starmer', url: 'https://www.youtube.com/@statquest', type: 'youtube', desc: 'Statistics & ML concepts explained simply. Essential for interviews.' },
      { title: 'Papers With Code', url: 'https://paperswithcode.com/', type: 'website', desc: 'Find state-of-the-art ML papers with implementation code.' },
    ],
    toolsToLearn: [
      { name: 'Python', category: 'essential', free: true, url: 'https://python.org' },
      { name: 'Jupyter Notebooks', category: 'essential', free: true, url: 'https://jupyter.org' },
      { name: 'Pandas & NumPy', category: 'essential', free: true, url: 'https://pandas.pydata.org' },
      { name: 'Scikit-learn', category: 'essential', free: true, url: 'https://scikit-learn.org' },
      { name: 'TensorFlow / PyTorch', category: 'intermediate', free: true, url: 'https://pytorch.org' },
      { name: 'Hugging Face', category: 'intermediate', free: true, url: 'https://huggingface.co' },
      { name: 'MLflow', category: 'advanced', free: true, url: 'https://mlflow.org' },
      { name: 'Docker', category: 'advanced', free: true, url: 'https://docker.com' },
      { name: 'AWS SageMaker / GCP Vertex AI', category: 'advanced', free: false, url: 'https://aws.amazon.com/sagemaker/' },
    ],
    portfolioProjects: [
      { title: 'Sentiment Analysis Dashboard', desc: 'Build a web app that analyzes customer reviews sentiment using NLP. Scrape real Amazon/Flipkart reviews.', difficulty: 'beginner', timeEstimate: '1-2 weeks' },
      { title: 'Image Classification App', desc: 'Train a CNN to classify Indian food dishes or Indian currency notes. Deploy with a simple web interface.', difficulty: 'intermediate', timeEstimate: '2-3 weeks' },
      { title: 'Real-time Stock Price Predictor', desc: 'Build an LSTM model predicting NSE/BSE stock movements with live data pipeline.', difficulty: 'advanced', timeEstimate: '3-4 weeks' },
      { title: 'Resume Screening AI', desc: 'Create a system that ranks resumes against job descriptions using NLP similarity scoring.', difficulty: 'intermediate', timeEstimate: '2 weeks' },
      { title: 'Kaggle Competition Entry', desc: 'Enter any active Kaggle competition and document your full approach — even a top 50% finish is portfolio-worthy.', difficulty: 'intermediate', timeEstimate: '2-3 weeks' },
    ],
    certifications: [
      { name: 'Google Professional Machine Learning Engineer', provider: 'Google Cloud', cost: '$200 (exam)', url: 'https://cloud.google.com/learn/certification/machine-learning-engineer', worth: 'Highly respected. Opens doors at MNCs.' },
      { name: 'AWS Machine Learning Specialty', provider: 'Amazon', cost: '$300 (exam)', url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/', worth: 'Top cloud ML cert. Great for service companies.' },
      { name: 'TensorFlow Developer Certificate', provider: 'Google', cost: '$100 (exam)', url: 'https://www.tensorflow.org/certificate', worth: 'Proves hands-on deep learning skills. Good ROI.' },
      { name: 'IBM AI Engineering Professional', provider: 'IBM/Coursera', cost: 'Free to audit', url: 'https://www.coursera.org/professional-certificates/ai-engineer', worth: 'Good for beginners building a learning path.' },
    ],
    jobPlatforms: [
      { name: 'LinkedIn Jobs', url: 'https://linkedin.com/jobs', bestFor: 'Best for MNC & startup ML roles in India' },
      { name: 'Naukri.com', url: 'https://naukri.com', bestFor: 'Largest Indian job board — filter by "Machine Learning"' },
      { name: 'Kaggle Jobs', url: 'https://www.kaggle.com/jobs', bestFor: 'ML-specific roles from companies that value Kaggle' },
      { name: 'Instahyre', url: 'https://instahyre.com', bestFor: 'Curated tech roles — companies apply to you' },
      { name: 'Wellfound (AngelList)', url: 'https://wellfound.com', bestFor: 'AI startup roles, often with equity' },
      { name: 'Turing.com', url: 'https://turing.com', bestFor: 'Remote US-based AI jobs for Indian developers' },
    ],
    interviewQuestions: [
      'Explain the bias-variance tradeoff. How do you diagnose each?',
      'What is gradient descent? Explain batch, stochastic, and mini-batch variants.',
      'How would you handle a highly imbalanced dataset? Name at least 3 approaches.',
      'Explain the difference between L1 and L2 regularization. When would you use each?',
      'Walk me through how you would build an ML pipeline from data collection to production.',
      'What are transformers? Why did they replace RNNs for NLP tasks?',
      'How do you evaluate a classification model beyond accuracy?',
      'Explain cross-validation. Why is it better than a simple train-test split?',
      'What is overfitting? How do you detect and prevent it?',
      'Design a recommendation system for an e-commerce platform. Walk me through your approach.',
    ],
    weeklyPlan: {
      '2-5': [
        { week: 'Week 1-2', tasks: ['Complete Python basics on Kaggle Learn (2hrs)', 'Watch 3Blue1Brown neural networks playlist (1hr)', 'Set up Jupyter notebook environment'], milestone: 'Can write basic Python and understand what ML is' },
        { week: 'Week 3-4', tasks: ['Start Andrew Ng ML course — Week 1-2 (3hrs)', 'Practice with pandas on a small dataset'], milestone: 'Understand linear regression and data manipulation' },
        { week: 'Week 5-8', tasks: ['Continue Andrew Ng course (2hrs/week)', 'Start first Kaggle micro-project'], milestone: 'Built first ML model (even a simple one)' },
        { week: 'Week 9-12', tasks: ['Complete Kaggle intro to ML course', 'Build sentiment analysis project', 'Write a blog post about your project'], milestone: 'One portfolio project complete + blog post' },
      ],
      '5-10': [
        { week: 'Week 1-2', tasks: ['Python + NumPy + Pandas deep dive (5hrs)', 'Andrew Ng ML course — first 3 weeks (4hrs)', 'Statistics refresher on StatQuest'], milestone: 'Solid Python + math foundation' },
        { week: 'Week 3-4', tasks: ['Complete Andrew Ng course weeks 4-6', 'First Kaggle competition entry', 'Learn scikit-learn hands-on'], milestone: 'Can build and evaluate ML models independently' },
        { week: 'Week 5-8', tasks: ['Start fast.ai deep learning course', 'Build 2 portfolio projects', 'Learn basic MLOps (Docker, git)'], milestone: 'Deep learning basics + 2 projects done' },
        { week: 'Week 9-12', tasks: ['Advanced project (NLP or computer vision)', 'Polish GitHub portfolio', 'Start applying + networking on LinkedIn'], milestone: 'Portfolio-ready, actively applying' },
      ],
      '10-20': [
        { week: 'Week 1-2', tasks: ['Python mastery + data science libraries (8hrs)', 'Andrew Ng ML specialization (6hrs)', 'Set up full dev environment'], milestone: 'Strong programming + ML theory' },
        { week: 'Week 3-4', tasks: ['Deep learning with fast.ai or PyTorch', 'Complete 2 Kaggle competitions', 'Build project #1 and #2'], milestone: '2 projects + competition experience' },
        { week: 'Week 5-8', tasks: ['Specialize: NLP or Computer Vision deep dive', 'Build project #3 and #4', 'Learn cloud ML (AWS/GCP free tier)', 'Start mock interviews'], milestone: '4 projects + cloud skills' },
        { week: 'Week 9-12', tasks: ['Build capstone project', 'Get TensorFlow certification', 'Apply to 50+ roles', 'Contribute to open-source ML project'], milestone: 'Certified + 5 projects + actively interviewing' },
      ],
      'fulltime': [
        { week: 'Week 1-2', tasks: ['Python mastery (10hrs)', 'Math foundations: linear algebra + statistics (8hrs)', 'Andrew Ng ML specialization start (10hrs)', 'Set up GitHub + blog'], milestone: 'Strong foundations in math + code' },
        { week: 'Week 3-4', tasks: ['Complete ML specialization', 'Deep learning with PyTorch (15hrs)', 'Build projects #1 and #2', 'Enter first Kaggle competition'], milestone: '2 projects + Kaggle profile' },
        { week: 'Week 5-8', tasks: ['Advanced NLP or CV specialization', 'MLOps: Docker, CI/CD, model serving', 'Build projects #3, #4, #5', 'System design for ML study'], milestone: '5 portfolio projects + production skills' },
        { week: 'Week 9-12', tasks: ['Capstone production-grade project', 'Get 1-2 certifications', 'Apply to 100+ roles with tailored resumes', 'Mock interviews (3-4/week)', 'Open-source contribution'], milestone: 'Interview-ready with strong portfolio' },
      ],
    },
    skillChecklist: [
      'Python fundamentals (variables, loops, functions, OOP)',
      'NumPy and Pandas for data manipulation',
      'Data visualization with Matplotlib/Seaborn',
      'SQL for data querying',
      'Statistics: mean, median, standard deviation, distributions',
      'Linear regression and logistic regression',
      'Decision trees and random forests',
      'Model evaluation: accuracy, precision, recall, F1, AUC-ROC',
      'Cross-validation and hyperparameter tuning',
      'Neural network basics (forward pass, backpropagation)',
      'Deep learning framework (TensorFlow or PyTorch)',
      'NLP basics or Computer Vision basics',
      'Git and version control',
      'Basic cloud deployment (AWS/GCP/Azure)',
      'Can explain your projects clearly in an interview',
    ],
  },

  'ai-content-creator': {
    freeResources: [
      { title: 'Matt Wolfe — AI Tool Reviews', url: 'https://www.youtube.com/@maboroshi', type: 'youtube', desc: 'Weekly AI tool roundups. Stay on top of the latest tools.' },
      { title: 'Learn Prompting', url: 'https://learnprompting.org/', type: 'course', desc: 'Free comprehensive prompt engineering course.' },
      { title: 'Ali Abdaal — YouTube for Beginners', url: 'https://www.youtube.com/@aliabdaal', type: 'youtube', desc: 'Learn content creation strategy and productivity with AI.' },
      { title: 'Canva Design School', url: 'https://www.canva.com/designschool/', type: 'course', desc: 'Free design courses from Canva. Great for non-designers.' },
      { title: 'HubSpot Content Marketing', url: 'https://academy.hubspot.com/courses/content-marketing', type: 'course', desc: 'Free certification in content marketing fundamentals.' },
      { title: 'The Futur — Brand Strategy', url: 'https://www.youtube.com/@thefutur', type: 'youtube', desc: 'Learn positioning, pricing, and brand building.' },
    ],
    toolsToLearn: [
      { name: 'ChatGPT / Claude', category: 'essential', free: true, url: 'https://chat.openai.com' },
      { name: 'Canva AI', category: 'essential', free: true, url: 'https://canva.com' },
      { name: 'CapCut', category: 'essential', free: true, url: 'https://capcut.com' },
      { name: 'Midjourney / DALL-E', category: 'intermediate', free: false, url: 'https://midjourney.com' },
      { name: 'Eleven Labs (AI Voice)', category: 'intermediate', free: true, url: 'https://elevenlabs.io' },
      { name: 'Descript', category: 'intermediate', free: true, url: 'https://descript.com' },
      { name: 'Runway ML', category: 'advanced', free: false, url: 'https://runwayml.com' },
      { name: 'Buffer / Hootsuite', category: 'advanced', free: true, url: 'https://buffer.com' },
    ],
    portfolioProjects: [
      { title: '30-Day AI Content Challenge', desc: 'Post one AI-generated piece of content daily for 30 days on Instagram/LinkedIn. Document what works.', difficulty: 'beginner', timeEstimate: '30 days (15 min/day)' },
      { title: 'AI-Powered Newsletter', desc: 'Start a weekly newsletter on AI trends using ChatGPT for research and Canva for visuals. Aim for 100 subscribers.', difficulty: 'beginner', timeEstimate: '4 weeks' },
      { title: 'Brand Identity Package', desc: 'Create a complete brand identity (logo, colors, social templates) for a fictional company using only AI tools.', difficulty: 'intermediate', timeEstimate: '1-2 weeks' },
      { title: 'YouTube/Instagram Series', desc: 'Create a 10-episode educational series on any topic using AI for scripting, visuals, and editing.', difficulty: 'intermediate', timeEstimate: '3-4 weeks' },
      { title: 'Client Case Study', desc: 'Offer free AI content services to a local business. Document the before/after results as a case study.', difficulty: 'advanced', timeEstimate: '4-6 weeks' },
    ],
    certifications: [
      { name: 'HubSpot Content Marketing', provider: 'HubSpot Academy', cost: 'Free', url: 'https://academy.hubspot.com/courses/content-marketing', worth: 'Good credential for marketing roles. Recognized by agencies.' },
      { name: 'Google Digital Marketing', provider: 'Google', cost: 'Free', url: 'https://skillshop.withgoogle.com/', worth: 'Basic but recognized. Good starting point.' },
      { name: 'Meta Social Media Marketing', provider: 'Meta/Coursera', cost: 'Free to audit', url: 'https://www.coursera.org/professional-certificates/facebook-social-media-marketing', worth: 'Covers real-world social media strategy.' },
      { name: 'Canva Design Certification', provider: 'Canva', cost: 'Free', url: 'https://www.canva.com/designschool/', worth: 'Shows design competency with the most-used tool.' },
    ],
    jobPlatforms: [
      { name: 'Upwork', url: 'https://upwork.com', bestFor: 'Best for AI content freelancing — filter "AI", "content", "GPT"' },
      { name: 'Fiverr', url: 'https://fiverr.com', bestFor: 'Great for productized AI services (AI writing, AI design)' },
      { name: 'Contently', url: 'https://contently.com', bestFor: 'Premium content creation platform for established creators' },
      { name: 'LinkedIn', url: 'https://linkedin.com/jobs', bestFor: 'Search "AI Content", "AI Marketing" for full-time roles' },
      { name: 'PeoplePerHour', url: 'https://peopleperhour.com', bestFor: 'UK/Europe focused freelance marketplace' },
      { name: 'Toptal', url: 'https://toptal.com', bestFor: 'Premium clients, higher rates, but tough vetting' },
    ],
    interviewQuestions: [
      'How do you use AI tools in your content creation workflow? Walk me through a typical piece.',
      'Show us 3 pieces of content you created with AI. What was your process?',
      'How do you ensure AI-generated content maintains brand voice and accuracy?',
      'What AI tools do you use and why? What are their limitations?',
      'How would you create a content calendar for a SaaS company using AI?',
      'Describe a time AI-generated content failed. How did you fix it?',
      'How do you measure content performance? What metrics matter most?',
      'What is your approach to SEO when using AI for content?',
    ],
    weeklyPlan: {
      '2-5': [
        { week: 'Week 1-2', tasks: ['Master ChatGPT prompting basics (1hr)', 'Set up Canva account, complete 2 tutorials (1hr)', 'Create 5 social media posts with AI'], milestone: 'Can create basic AI content' },
        { week: 'Week 3-4', tasks: ['Learn CapCut basics for video editing', 'Start 30-day content challenge (15 min/day)', 'Study 5 viral posts and analyze why they worked'], milestone: '10+ posts published' },
        { week: 'Week 5-8', tasks: ['Explore Midjourney/DALL-E for visuals', 'Build a content system (templates, workflows)', 'Reach 50 posts published'], milestone: 'Content system in place' },
        { week: 'Week 9-12', tasks: ['Create portfolio of best work', 'Approach 3 local businesses for free project', 'Set up freelance profile on Upwork/Fiverr'], milestone: 'Portfolio + first client or pitch' },
      ],
      '5-10': [
        { week: 'Week 1-2', tasks: ['ChatGPT + Claude mastery (3hrs)', 'Canva AI deep dive (2hrs)', 'Create 10 social posts + 2 blog articles', 'Study content strategy basics'], milestone: 'Fast AI content production' },
        { week: 'Week 3-4', tasks: ['Video creation with CapCut + AI (4hrs)', 'Start newsletter or YouTube channel', 'Learn basic SEO', '30-day challenge in progress'], milestone: 'Multi-format content creator' },
        { week: 'Week 5-8', tasks: ['Advanced tools: Midjourney, ElevenLabs, Descript', 'Build 3 case studies', 'HubSpot certification', 'Approach 5 potential clients'], milestone: 'Certified + diverse portfolio' },
        { week: 'Week 9-12', tasks: ['Land first 2-3 paying clients', 'Create a productized service offering', 'Build personal brand presence'], milestone: 'Earning from AI content skills' },
      ],
      '10-20': [
        { week: 'Week 1-2', tasks: ['Master all major AI content tools (8hrs)', 'Content strategy frameworks (4hrs)', 'Create 15+ pieces across formats', 'Brand identity study'], milestone: 'Multi-tool AI content expert' },
        { week: 'Week 3-4', tasks: ['Launch YouTube/newsletter/blog', 'SEO + analytics deep dive', 'Build 2 client case studies', 'Networking on LinkedIn/Twitter'], milestone: 'Public presence + case studies' },
        { week: 'Week 5-8', tasks: ['Advanced video + audio production', 'Paid advertising basics', 'Certifications (HubSpot + Google)', 'Land 3-5 clients'], milestone: 'Multiple certifications + paying clients' },
        { week: 'Week 9-12', tasks: ['Scale: templates, SOPs, automation', 'Raise rates based on results', 'Build team or partner network', 'Aim for ₹50K/month income'], milestone: 'Sustainable AI content business' },
      ],
      'fulltime': [
        { week: 'Week 1-2', tasks: ['Master all AI tools intensively (15hrs)', 'Content marketing fundamentals (10hrs)', 'Create 30+ content pieces', 'Study top creators in your niche'], milestone: 'Tool mastery + content volume' },
        { week: 'Week 3-4', tasks: ['Launch on 2-3 platforms simultaneously', 'Complete HubSpot + Google certs', 'Build 3 case studies', 'Client outreach (20 pitches)'], milestone: 'Multi-platform presence + certified' },
        { week: 'Week 5-8', tasks: ['Deep dive: video, audio, AI design', 'Build content agency infrastructure', 'Land 5-8 clients', 'Revenue target: ₹30K/month'], milestone: 'Agency foundations + revenue' },
        { week: 'Week 9-12', tasks: ['Systematize everything (SOPs, templates)', 'Hire first assistant or partner', 'Revenue target: ₹80K/month', 'Personal brand with 1K+ followers'], milestone: 'Scalable content business' },
      ],
    },
    skillChecklist: [
      'Write effective prompts for ChatGPT/Claude',
      'Create social media graphics in Canva AI',
      'Edit short-form videos in CapCut',
      'Generate AI images (Midjourney/DALL-E)',
      'Write SEO-optimized blog posts with AI',
      'Create email newsletters with AI',
      'Basic copywriting principles (headlines, hooks, CTAs)',
      'Understand social media algorithms (Instagram, LinkedIn, YouTube)',
      'Measure content performance (reach, engagement, conversion)',
      'Repurpose content across platforms efficiently',
      'Build and maintain a content calendar',
      'Client communication and project management',
    ],
  },

  'ai-business-consultant': {
    freeResources: [
      { title: 'McKinsey AI Insights', url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights', type: 'website', desc: 'Strategic AI reports from the top consultancy. Essential reading.' },
      { title: 'Harvard Business Review — AI', url: 'https://hbr.org/topic/subject/ai-and-machine-learning', type: 'website', desc: 'Business-focused AI articles from HBR.' },
      { title: 'Google AI for Business', url: 'https://cloud.google.com/learn/training/machinelearning-ai', type: 'course', desc: 'Free courses on applying AI in business contexts.' },
      { title: 'MIT Sloan AI Resources', url: 'https://sloanreview.mit.edu/topic/artificial-intelligence-and-business-strategy/', type: 'website', desc: 'Academic yet practical AI strategy articles.' },
      { title: 'Simon Sinek — Leadership', url: 'https://www.youtube.com/@SimonSinek', type: 'youtube', desc: 'Build your leadership and consulting communication skills.' },
    ],
    toolsToLearn: [
      { name: 'ChatGPT / Claude', category: 'essential', free: true, url: 'https://chat.openai.com' },
      { name: 'Google Sheets + AI plugins', category: 'essential', free: true, url: 'https://sheets.google.com' },
      { name: 'Notion AI', category: 'essential', free: true, url: 'https://notion.so' },
      { name: 'Zapier / Make.com', category: 'intermediate', free: true, url: 'https://zapier.com' },
      { name: 'Power BI / Tableau', category: 'intermediate', free: true, url: 'https://powerbi.microsoft.com' },
      { name: 'Miro AI', category: 'intermediate', free: true, url: 'https://miro.com' },
      { name: 'Salesforce Einstein', category: 'advanced', free: false, url: 'https://salesforce.com/einstein' },
    ],
    portfolioProjects: [
      { title: 'AI Readiness Assessment Template', desc: 'Create a framework that assesses how ready a company is for AI adoption. Score across 10 dimensions.', difficulty: 'beginner', timeEstimate: '1 week' },
      { title: 'ROI Calculator for AI Automation', desc: 'Build a spreadsheet/tool that calculates time and money saved when a business automates a specific process with AI.', difficulty: 'intermediate', timeEstimate: '1-2 weeks' },
      { title: 'Industry Case Study', desc: 'Research how AI transformed a specific Indian company. Document the strategy, tools used, results, and lessons learned.', difficulty: 'intermediate', timeEstimate: '2 weeks' },
      { title: 'AI Transformation Roadmap', desc: 'Create a detailed 6-month AI adoption roadmap for a small business (real or fictional). Include tools, costs, training, and KPIs.', difficulty: 'advanced', timeEstimate: '2-3 weeks' },
    ],
    certifications: [
      { name: 'Google Project Management Certificate', provider: 'Google/Coursera', cost: 'Free to audit', url: 'https://www.coursera.org/professional-certificates/google-project-management', worth: 'Great foundation for managing AI transformation projects.' },
      { name: 'AI for Business (Wharton)', provider: 'Wharton/Coursera', cost: 'Free to audit', url: 'https://www.coursera.org/learn/ai-for-business-wharton', worth: 'Prestigious. Great for consulting credibility.' },
      { name: 'AWS Cloud Practitioner', provider: 'Amazon', cost: '$100', url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/', worth: 'Shows cloud literacy. Useful when advising on infrastructure.' },
    ],
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://linkedin.com/jobs', bestFor: 'Search "AI Strategy", "Digital Transformation", "AI Consultant"' },
      { name: 'Glassdoor', url: 'https://glassdoor.co.in', bestFor: 'Research company culture + salary benchmarks' },
      { name: 'Toptal', url: 'https://toptal.com', bestFor: 'Premium consulting gigs for experienced consultants' },
      { name: 'Upwork', url: 'https://upwork.com', bestFor: 'AI strategy consulting for SMBs' },
      { name: 'Naukri.com', url: 'https://naukri.com', bestFor: 'Indian consulting firm and MNC roles' },
    ],
    interviewQuestions: [
      'How would you approach an AI transformation for a company with no technical team?',
      'A client wants to use AI but doesn\'t know where. How would you identify the right use cases?',
      'How do you calculate the ROI of an AI implementation?',
      'What is your framework for AI readiness assessment?',
      'Describe a situation where AI is NOT the right solution. How would you advise the client?',
      'How do you handle resistance to AI adoption from senior management?',
      'What are the biggest risks in AI implementation and how do you mitigate them?',
      'How would you build an AI strategy for a 50-person manufacturing company in Punjab?',
    ],
    weeklyPlan: {
      '2-5': [
        { week: 'Week 1-2', tasks: ['Read 5 McKinsey AI reports (2hrs)', 'Learn ChatGPT for business analysis (1hr)'], milestone: 'Understand AI business landscape' },
        { week: 'Week 3-4', tasks: ['Study 3 AI case studies deeply', 'Build your AI readiness framework draft'], milestone: 'Have a consulting framework' },
        { week: 'Week 5-8', tasks: ['Learn automation tools (Zapier basics)', 'Build ROI calculator project', 'Network with 10 business owners'], milestone: 'One tool + business connections' },
        { week: 'Week 9-12', tasks: ['Offer free AI audit to 2 local businesses', 'Document results as case studies', 'Set up consulting profile'], milestone: 'Real case studies from real businesses' },
      ],
      '5-10': [
        { week: 'Week 1-2', tasks: ['AI landscape deep dive (4hrs)', 'ChatGPT + Notion AI mastery (3hrs)', 'Read 10 McKinsey/HBR articles', 'Start building frameworks'], milestone: 'AI business knowledge foundation' },
        { week: 'Week 3-4', tasks: ['Automation tools: Zapier, Make.com (5hrs)', 'Build 2 consulting tools (assessment, ROI calc)', 'Study change management principles'], milestone: 'Consulting toolkit ready' },
        { week: 'Week 5-8', tasks: ['Google cert or Wharton AI course', 'Build 3 detailed case studies', 'Conduct 2 free AI audits for local businesses', 'LinkedIn thought leadership (2 posts/week)'], milestone: 'Certified + real client experience' },
        { week: 'Week 9-12', tasks: ['Launch consulting services', 'Approach 10 businesses with pitch deck', 'Build referral network', 'Set pricing and packages'], milestone: 'Active consulting practice' },
      ],
      '10-20': [
        { week: 'Week 1-2', tasks: ['AI tools mastery: ChatGPT, Zapier, Notion, analytics (8hrs)', 'Business strategy frameworks (5hrs)', 'Read 15+ industry reports'], milestone: 'Tools + strategy knowledge' },
        { week: 'Week 3-4', tasks: ['Build consulting framework library (5 frameworks)', 'Complete Google PM cert', 'Conduct 3 free AI audits', 'Build pitch deck and proposal templates'], milestone: 'Professional consulting toolkit' },
        { week: 'Week 5-8', tasks: ['Wharton AI for Business cert', 'Build 5 case studies', 'Land first 2-3 paid consulting clients', 'Start workshop/training offering'], milestone: 'Paying clients + certifications' },
        { week: 'Week 9-12', tasks: ['Systematize service delivery', 'Revenue target: ₹1L/month from consulting', 'Build strategic partnerships', 'Speaking at local business events'], milestone: 'Established consulting practice' },
      ],
      'fulltime': [
        { week: 'Week 1-2', tasks: ['Intensive AI tools + strategy study (20hrs)', 'Business analysis frameworks (10hrs)', 'Study top consulting methodologies (McKinsey 7S, BCG matrix)', 'Read 20+ AI business reports'], milestone: 'Consulting-grade knowledge' },
        { week: 'Week 3-4', tasks: ['Build complete consulting toolkit', 'Complete 2 certifications', 'Conduct 5 free AI audits', 'Build website and LinkedIn presence'], milestone: 'Professional presence + toolkit' },
        { week: 'Week 5-8', tasks: ['Land 5+ paid clients', 'Develop 2-3 productized services', 'Workshop facilitation practice', 'Revenue target: ₹75K/month'], milestone: 'Revenue-generating practice' },
        { week: 'Week 9-12', tasks: ['Scale with partners or team', 'Revenue target: ₹1.5L/month', 'Corporate training offering', 'Industry speaking engagement'], milestone: 'Scalable consulting business' },
      ],
    },
    skillChecklist: [
      'Explain AI capabilities to non-technical stakeholders',
      'Identify AI use cases in any business process',
      'Conduct an AI readiness assessment',
      'Calculate ROI for AI implementations',
      'Create AI transformation roadmaps',
      'Use automation tools (Zapier/Make.com) for demos',
      'Facilitate workshops and presentations',
      'Manage change and handle resistance',
      'Project management fundamentals',
      'Build business proposals and pitch decks',
      'Understand data privacy and compliance basics',
      'Network and generate consulting leads',
    ],
  },

  'prompt-engineer': {
    freeResources: [
      { title: 'Learn Prompting', url: 'https://learnprompting.org/', type: 'course', desc: 'The most comprehensive free prompt engineering course online.' },
      { title: 'OpenAI Prompt Engineering Guide', url: 'https://platform.openai.com/docs/guides/prompt-engineering', type: 'website', desc: 'Official guide from OpenAI. Start here.' },
      { title: 'Anthropic Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', type: 'website', desc: 'Claude-specific prompting techniques from Anthropic.' },
      { title: 'Prompt Engineering Daily', url: 'https://www.youtube.com/@PromptEngineeringDaily', type: 'youtube', desc: 'Daily videos on advanced prompting techniques.' },
      { title: 'LangChain Documentation', url: 'https://docs.langchain.com/', type: 'website', desc: 'Build AI chains and agents. Key skill for prompt engineers.' },
    ],
    toolsToLearn: [
      { name: 'ChatGPT (GPT-4)', category: 'essential', free: true, url: 'https://chat.openai.com' },
      { name: 'Claude', category: 'essential', free: true, url: 'https://claude.ai' },
      { name: 'OpenAI API / Anthropic API', category: 'essential', free: true, url: 'https://platform.openai.com' },
      { name: 'Zapier / Make.com', category: 'intermediate', free: true, url: 'https://zapier.com' },
      { name: 'LangChain', category: 'intermediate', free: true, url: 'https://langchain.com' },
      { name: 'Cursor / GitHub Copilot', category: 'intermediate', free: false, url: 'https://cursor.sh' },
      { name: 'n8n', category: 'advanced', free: true, url: 'https://n8n.io' },
      { name: 'Voiceflow / Botpress', category: 'advanced', free: true, url: 'https://voiceflow.com' },
    ],
    portfolioProjects: [
      { title: 'Prompt Library', desc: 'Build a collection of 50+ tested prompts across categories (writing, coding, analysis, creative). Document what makes each effective.', difficulty: 'beginner', timeEstimate: '2 weeks' },
      { title: 'AI Workflow Automation', desc: 'Automate a real business process (email responses, report generation, social media) using Zapier + ChatGPT API.', difficulty: 'intermediate', timeEstimate: '1-2 weeks' },
      { title: 'Custom Chatbot', desc: 'Build a customer support chatbot for a specific business using the OpenAI API with custom system prompts and knowledge base.', difficulty: 'intermediate', timeEstimate: '2-3 weeks' },
      { title: 'Prompt Evaluation Framework', desc: 'Create a systematic way to test and compare prompt performance. Document with before/after examples and metrics.', difficulty: 'advanced', timeEstimate: '2 weeks' },
    ],
    certifications: [
      { name: 'Vanderbilt Prompt Engineering', provider: 'Vanderbilt/Coursera', cost: 'Free to audit', url: 'https://www.coursera.org/learn/prompt-engineering', worth: 'Good starting credential from a reputable university.' },
      { name: 'DeepLearning.AI ChatGPT Prompt Engineering', provider: 'DeepLearning.AI', cost: 'Free', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', worth: 'Short but authoritative. From Andrew Ng.' },
    ],
    jobPlatforms: [
      { name: 'Upwork', url: 'https://upwork.com', bestFor: 'Search "prompt engineering", "GPT", "AI automation"' },
      { name: 'Fiverr', url: 'https://fiverr.com', bestFor: 'Sell prompt writing and AI automation services' },
      { name: 'Wellfound', url: 'https://wellfound.com', bestFor: 'Startup roles specifically hiring prompt engineers' },
      { name: 'LinkedIn', url: 'https://linkedin.com/jobs', bestFor: '"Prompt Engineer" is now a real job title at many companies' },
      { name: 'AI Jobs Board', url: 'https://aijobs.net', bestFor: 'Dedicated AI job board with prompt engineering roles' },
    ],
    interviewQuestions: [
      'Write a system prompt for a customer support chatbot that handles refunds, complaints, and general queries.',
      'How would you reduce hallucination in a GPT-powered application?',
      'Explain chain-of-thought prompting. When would you use it vs. few-shot prompting?',
      'A prompt works in GPT-4 but fails in Claude. How would you debug and adapt it?',
      'How do you evaluate prompt quality? What metrics would you use?',
      'Design a prompt that extracts structured data (name, email, company) from unstructured emails.',
      'What is prompt injection? How would you protect an application against it?',
      'Walk me through how you would build an AI workflow that automates weekly report generation.',
    ],
    weeklyPlan: {
      '2-5': [
        { week: 'Week 1-2', tasks: ['Complete OpenAI prompt engineering guide (1.5hrs)', 'Practice 20 different prompting techniques', 'Start building prompt library'], milestone: 'Understand core prompting methods' },
        { week: 'Week 3-4', tasks: ['Learn Zapier basics (1hr)', 'Build first automation workflow', 'Study Anthropic Claude prompting guide'], milestone: 'Can create basic AI automations' },
        { week: 'Week 5-8', tasks: ['API basics (OpenAI/Anthropic)', 'Build 2 automation projects', 'Start freelance profile'], milestone: 'Portfolio projects started' },
        { week: 'Week 9-12', tasks: ['Complete prompt library (50+ prompts)', 'Land first freelance gig', 'Document everything as case studies'], milestone: 'Earning from prompt engineering' },
      ],
      '5-10': [
        { week: 'Week 1-2', tasks: ['All major prompting guides (4hrs)', 'Practice across ChatGPT + Claude + Gemini (3hrs)', 'Build prompt library (30 prompts)'], milestone: 'Multi-model prompting skills' },
        { week: 'Week 3-4', tasks: ['Zapier + Make.com mastery', 'Build 3 automation workflows', 'Learn basic Python for API calls'], milestone: 'Automation builder' },
        { week: 'Week 5-8', tasks: ['LangChain basics', 'Build chatbot project', 'Vanderbilt/DeepLearning.AI cert', 'Freelance profile + 10 proposals'], milestone: 'Certified + seeking clients' },
        { week: 'Week 9-12', tasks: ['Advanced: prompt evaluation, RAG basics', 'Land 3+ clients', 'Build portfolio website'], milestone: 'Active freelance prompt engineer' },
      ],
      '10-20': [
        { week: 'Week 1-2', tasks: ['Master prompting for all major models (8hrs)', 'Python + API integration (5hrs)', 'Build 40-prompt library'], milestone: 'Expert-level prompting' },
        { week: 'Week 3-4', tasks: ['Automation mastery: Zapier, Make, n8n', 'LangChain + vector databases', 'Build 3 portfolio projects'], milestone: 'Full-stack AI automation' },
        { week: 'Week 5-8', tasks: ['Build custom chatbot for a real business', 'Complete certifications', 'Land 5+ clients', 'Prompt injection security study'], milestone: 'Professional prompt engineer' },
        { week: 'Week 9-12', tasks: ['Specialize in a vertical (legal, medical, marketing)', 'Scale to agency model', 'Revenue target: ₹80K/month'], milestone: 'Specialized + scaling' },
      ],
      'fulltime': [
        { week: 'Week 1-2', tasks: ['Master all prompting techniques across models (15hrs)', 'Python + all major AI APIs (10hrs)', 'Build 50-prompt library', 'LangChain basics'], milestone: 'Comprehensive prompting + coding' },
        { week: 'Week 3-4', tasks: ['Advanced: RAG, function calling, agents', 'Build 5 automation projects', 'All relevant certifications', 'Freelance profile launch'], milestone: '5 projects + certified' },
        { week: 'Week 5-8', tasks: ['Specialize in a niche', 'Build 3 real client projects', 'Open-source prompt tools', 'Revenue target: ₹50K/month'], milestone: 'Established in niche' },
        { week: 'Week 9-12', tasks: ['Scale: productize services, hire/partner', 'Revenue target: ₹1.5L/month', 'Speaking/content for authority', 'Advanced: fine-tuning, evals'], milestone: 'Authority + income' },
      ],
    },
    skillChecklist: [
      'Zero-shot, few-shot, and chain-of-thought prompting',
      'System prompts and role-based prompting',
      'Prompt templates and variables',
      'Output formatting (JSON, markdown, structured data)',
      'Reducing hallucinations and improving accuracy',
      'Using APIs (OpenAI, Anthropic, Google)',
      'Basic Python for API integration',
      'Automation tools (Zapier, Make.com, n8n)',
      'Building custom chatbots',
      'Prompt security (injection prevention)',
      'RAG (Retrieval Augmented Generation) basics',
      'Evaluating and iterating on prompts systematically',
    ],
  },

  // Default fallback for archetypes not explicitly defined
  'default': {
    freeResources: [
      { title: 'ChatGPT — Start Here', url: 'https://chat.openai.com', type: 'tool', desc: 'The most popular AI tool. Start using it daily for everything.' },
      { title: 'Google AI Essentials', url: 'https://grow.google/ai-essentials/', type: 'course', desc: 'Free foundational AI course from Google. No coding required.' },
      { title: 'Coursera AI For Everyone', url: 'https://www.coursera.org/learn/ai-for-everyone', type: 'course', desc: 'Andrew Ng explains AI for non-technical people. Free to audit.' },
      { title: 'Fireship — AI Explained', url: 'https://www.youtube.com/@Fireship', type: 'youtube', desc: 'Fast, entertaining tech and AI explainers. Great for staying current.' },
      { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', type: 'course', desc: 'Free coding and AI courses. Full learning paths available.' },
    ],
    toolsToLearn: [
      { name: 'ChatGPT', category: 'essential', free: true, url: 'https://chat.openai.com' },
      { name: 'Claude', category: 'essential', free: true, url: 'https://claude.ai' },
      { name: 'Canva AI', category: 'essential', free: true, url: 'https://canva.com' },
      { name: 'Google Gemini', category: 'essential', free: true, url: 'https://gemini.google.com' },
      { name: 'Notion AI', category: 'intermediate', free: true, url: 'https://notion.so' },
      { name: 'Zapier', category: 'intermediate', free: true, url: 'https://zapier.com' },
    ],
    portfolioProjects: [
      { title: 'AI-Powered Personal Blog', desc: 'Start a blog on any topic. Use AI for research, writing, and creating images. Publish 10 posts.', difficulty: 'beginner', timeEstimate: '2-3 weeks' },
      { title: 'Automate Your Daily Workflow', desc: 'Identify 3 repetitive tasks you do daily and automate them using AI tools. Document the time savings.', difficulty: 'beginner', timeEstimate: '1 week' },
      { title: 'AI Tool Comparison Report', desc: 'Compare 5 AI tools for a specific use case (writing, design, coding). Test each and publish your findings.', difficulty: 'intermediate', timeEstimate: '2 weeks' },
      { title: 'Help a Local Business with AI', desc: 'Volunteer to help a local shop or business use AI tools. Document the before/after impact.', difficulty: 'intermediate', timeEstimate: '3-4 weeks' },
    ],
    certifications: [
      { name: 'Google AI Essentials', provider: 'Google', cost: 'Free', url: 'https://grow.google/ai-essentials/', worth: 'Great starting point. Google brand recognition.' },
      { name: 'AI For Everyone (deeplearning.ai)', provider: 'Coursera', cost: 'Free to audit', url: 'https://www.coursera.org/learn/ai-for-everyone', worth: 'Best non-technical AI overview.' },
      { name: 'LinkedIn Learning AI Courses', provider: 'LinkedIn', cost: 'Free (1 month trial)', url: 'https://www.linkedin.com/learning/', worth: 'Completion badges show on your LinkedIn profile.' },
    ],
    jobPlatforms: [
      { name: 'LinkedIn', url: 'https://linkedin.com/jobs', bestFor: 'Best overall job search platform' },
      { name: 'Naukri.com', url: 'https://naukri.com', bestFor: 'Largest Indian job board' },
      { name: 'Indeed', url: 'https://indeed.co.in', bestFor: 'Broad job search with AI filters' },
      { name: 'Upwork', url: 'https://upwork.com', bestFor: 'Freelance AI work' },
      { name: 'Internshala', url: 'https://internshala.com', bestFor: 'For students — AI internships' },
    ],
    interviewQuestions: [
      'How do you currently use AI in your daily work or studies?',
      'What AI tools are you familiar with and what do you use them for?',
      'Describe a problem you solved using an AI tool.',
      'How do you think AI will impact your industry in the next 5 years?',
      'What is the difference between AI, machine learning, and deep learning?',
      'How would you explain AI to a non-technical person?',
      'What are the limitations of current AI tools?',
      'How do you stay updated with the latest AI developments?',
    ],
    weeklyPlan: {
      '2-5': [
        { week: 'Week 1-2', tasks: ['Set up ChatGPT + Claude accounts', 'Use AI for 3 daily tasks', 'Watch Google AI Essentials intro'], milestone: 'Using AI daily' },
        { week: 'Week 3-4', tasks: ['Complete AI For Everyone course', 'Try Canva AI for a project', 'Follow 5 AI creators on YouTube'], milestone: 'Understand AI landscape' },
        { week: 'Week 5-8', tasks: ['Start portfolio project', 'Explore 3 more AI tools', 'Share AI learnings on LinkedIn'], milestone: 'First project + online presence' },
        { week: 'Week 9-12', tasks: ['Complete first certification', 'Finish portfolio project', 'Start exploring specialization'], milestone: 'Certified + direction set' },
      ],
      '5-10': [
        { week: 'Week 1-2', tasks: ['AI tool mastery: ChatGPT, Claude, Gemini (4hrs)', 'Google AI Essentials course (3hrs)', 'Daily AI usage habit'], milestone: 'Comfortable with multiple AI tools' },
        { week: 'Week 3-4', tasks: ['Complete AI For Everyone', 'Build 2 portfolio projects', 'Learn Canva AI + basic automation'], milestone: '2 projects + broad knowledge' },
        { week: 'Week 5-8', tasks: ['Pick specialization direction', 'Deep dive into chosen area', '2 more portfolio projects', 'Networking on LinkedIn'], milestone: 'Specialization started' },
        { week: 'Week 9-12', tasks: ['Certifications', 'Apply for roles or freelance', 'Portfolio polished', 'Clear career direction'], milestone: 'Ready for next step' },
      ],
      '10-20': [
        { week: 'Week 1-2', tasks: ['Master all major AI tools (8hrs)', 'Complete 2 courses (5hrs)', 'Start building projects immediately'], milestone: 'Fast foundation' },
        { week: 'Week 3-4', tasks: ['Build 3 projects', 'Pick specialization', 'Start specific learning track', 'Certifications started'], milestone: '3 projects + clear direction' },
        { week: 'Week 5-8', tasks: ['Deep specialization', '2 more advanced projects', 'Complete all certifications', 'Active job search or client outreach'], milestone: 'Specialized + seeking opportunities' },
        { week: 'Week 9-12', tasks: ['Capstone project', 'Apply broadly', 'Personal brand established', 'First income from AI skills'], milestone: 'Earning from AI' },
      ],
      'fulltime': [
        { week: 'Week 1-2', tasks: ['Complete AI Essentials + AI For Everyone (15hrs)', 'Master all major AI tools (10hrs)', 'Build 2 quick projects'], milestone: 'Strong AI foundation' },
        { week: 'Week 3-4', tasks: ['Pick specialization + begin deep learning', 'Build 3 more projects', 'Complete 2 certifications', 'Portfolio setup'], milestone: 'Specialized + certified' },
        { week: 'Week 5-8', tasks: ['Advanced specialization', 'Build 3 real-world projects', 'Client outreach or job applications (50+)', 'Personal brand content'], milestone: 'Ready for market' },
        { week: 'Week 9-12', tasks: ['Land role or first clients', 'Revenue/income from AI skills', 'Continue learning in specialization', 'Plan 6-month growth roadmap'], milestone: 'Earning + growing' },
      ],
    },
    skillChecklist: [
      'Use ChatGPT/Claude effectively for daily tasks',
      'Create visuals with Canva AI',
      'Understand what AI can and cannot do',
      'Write effective prompts for different tasks',
      'Identify processes that can be automated with AI',
      'Basic understanding of AI, ML, and deep learning',
      'Complete at least one AI certification',
      'Build and present a portfolio project',
      'Explain your AI skills in an interview setting',
      'Stay current with AI news and developments',
    ],
  },
}

// Helper to get resources — falls back to default if archetype not found
export function getResources(archetypeId: string): ArchetypeResources {
  return ARCHETYPE_RESOURCES[archetypeId] || ARCHETYPE_RESOURCES['default']
}
