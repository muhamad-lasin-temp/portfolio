import { Project, ExperienceItem, FaqItem, SkillCategory, Service } from '../types/types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: '1. WEB DEVELOPMENT',
    description: 'I deliver high-performance, fully responsive, and robust website solutions. Combining deep technical expertise with modern frontend and backend frameworks, I build platforms that are fast, secure, and infinitely scalable to drive your digital growth.'
  },
  {
    id: 'software-dev',
    title: '2. SOFTWARE DEVELOPMENT',
    description: 'From custom CRMs and complex accounting systems to specialized HR tools, I architect end-to-end software applications tailored to your operational needs. I own the full engineering lifecycle from initial requirements through to deployment and maintenance.'
  },
  {
    id: 'ai-ml',
    title: '3. AI/ML INTEGRATION',
    description: 'I integrate cutting-edge Artificial Intelligence and Machine Learning technologies directly into enterprise ERP and business systems. From automated data pipelines to predictive analytics, I empower your platforms with next-generation intelligence.'
  },
  {
    id: 'web-design',
    title: '4. WEB DESIGN',
    description: 'Premium landing pages, fully responsive interactive interfaces, and fluid Framer design. We specialize in bridging the gap between pure artistic visual design and modern, high-performance, responsive frontend engineering.'
  },
  {
    id: 'ui-ux',
    title: '5. UI/UX DESIGN',
    description: 'We create intuitive, high-converting digital interfaces, user flows, and wireframes. We design premium web and mobile experiences rooted in user-centered research, ensuring cohesive layouts, interactive simplicity, and robust, responsive patterns that bring products to life.'
  }
];

export const ABOUT_METRICS = {
  yearsExperience: 1,
  completedProjects: 5,
  worldwideClients: 10,
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Accounting System',
    category: 'BUSINESS APPS',
    tags: ['Full-Stack', 'UAE VAT', 'Dashboard', 'Reports'],
    description: 'Comprehensive accounting platform handling invoicing, expenses, payables, and UAE VAT-compliant reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    link: 'https://afamia.afamiasoft.com',
  },
  {
    id: 'p3',
    title: 'HR Software',
    category: 'BUSINESS APPS',
    tags: ['React', 'Payroll', 'Employee Portal'],
    description: 'Internal Human Resources software focused on payroll, employee lifecycle, and operational tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    link: 'https://hrbmc.afamiasoft.com',
  },
  {
    id: 'p2',
    title: 'CRM Platform',
    category: 'BUSINESS APPS',
    tags: ['Demo', 'React', 'Sales Pipeline', 'Lead Gen'],
    description: 'End-to-end Customer Relationship Management system designed to track leads, pipelines, and convert sales efficiently. Note: This is a demo software currently under development.',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop',
    link: 'https://demo.afamiasoft.com/crm',
  },
  {
    id: 'p4',
    title: 'Restaurant POS System',
    category: 'PERSONAL',
    tags: ['POS', 'Restaurant', 'QR Ordering', 'AI', 'Full-Stack'],
    description: 'A complete Point of Sale system for restaurants — built entirely from scratch independently. Covers table management, ordering, kitchen flow, and daily financials. Includes an interactive floor map, QR code ordering, live kitchen order tickets (KOT), AI-powered menu image generation, and VAT-compliant reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2564&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Afamia Soft Corporate',
    category: 'LIVE WEBSITES',
    tags: ['Corporate', 'React', 'Live'],
    description: 'Corporate website for Afamia Software, featuring modern web design, seamless navigation, and fully responsive interfaces built for enterprise clients.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    link: 'https://afamiasoft.com',
  },
  {
    id: 'p6',
    title: 'BTC UAE',
    category: 'LIVE WEBSITES',
    tags: ['Portal', 'Web Design', 'Live'],
    description: 'A dedicated business portal and corporate identity platform for BTC UAE. Fully responsive, performant, and optimized for lead generation.',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    link: 'https://btc-uae.net',
  },
  {
    id: 'p7',
    title: 'Finprime Consulting',
    category: 'LIVE WEBSITES',
    tags: ['Consulting', 'Finance', 'Live'],
    description: 'Professional consulting platform for Finprime, highlighting their core financial services, expertise, and global reach with a premium aesthetic.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    link: 'https://finprimeconsulting.com/',
  },
  {
    id: 'p8',
    title: 'Nanay\'s Luto Restaurant',
    category: 'LIVE WEBSITES',
    tags: ['Restaurant', 'UI/UX', 'Live'],
    description: 'A modern, highly aesthetic restaurant website built to showcase menus, highlight culinary photography, and facilitate easy customer engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    link: 'https://nanaysluto.vercel.app/',
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'e1',
    title: 'Software Engineer & Team Lead',
    company: 'Afamia Software',
    location: 'Dubai, UAE',
    period: 'Current',
    description: 'I build end-to-end business applications — accounting systems, CRM platforms, and HR software — owning the full lifecycle from requirements to deployment. I also integrate AI & ML technologies into ERP systems.',
    responsibilities: [
      { label: 'System Architecture', text: 'Architecting robust business applications.' },
      { label: 'Frontend Dev', text: 'Building responsive React/Next.js interfaces.' },
      { label: 'Backend Dev', text: 'Robust Laravel & Python API development.' },
      { label: 'AI Integration', text: 'Embedding ML models into business workflows.' },
      { label: 'Project Management', text: 'Leading agile teams and client requirements.' },
      { label: 'Cloud Deployment', text: 'Managing VPS deployments.' }
    ]
  }
];

export const AI_SKILLS_DATA: SkillCategory[] = [
  {
    id: 's1',
    title: 'Core AI & ML',
    description: 'Foundations of intelligent systems — learning algorithms, neural networks, and model training.',
    skills: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Transformers', 'NLP', 'Model Evaluation']
  },
  {
    id: 's2',
    title: 'Generative AI',
    description: 'Building tools that create — from conversational agents to advanced reasoning engines.',
    skills: ['LLM Orchestration', 'RAG (Retrieval-Augmented Gen)', 'Prompt Engineering', 'AI Agents', 'OpenAI API', 'LangChain']
  },
  {
    id: 's3',
    title: 'Engineering & MLOps',
    description: 'Taking models from notebook to production, ensuring scalable architecture and reliable pipelines.',
    skills: ['PyTorch', 'MLOps', 'Vector Databases', 'Python', 'API Design', 'Cloud Deployments']
  },
  {
    id: 's4',
    title: 'Mathematical Foundation',
    description: 'The algorithmic logic and mathematics powering modern machine learning operations.',
    skills: ['Linear Algebra', 'Calculus', 'Probability & Statistics', 'Optimization']
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What technologies do you use for AI integration?',
    answer: 'I heavily utilize Python, PyTorch, LangChain, and vector databases for RAG architectures. For LLM orchestration, I work with the OpenAI API and build custom conversational agents tailored to specific enterprise needs.',
  },
  {
    id: 'faq-2',
    question: 'Do you build full-stack web applications?',
    answer: 'Yes, I own the full lifecycle from requirements to deployment. My expertise ranges from building high-performance frontend interfaces using React to architecting complex backend services and database structures.',
  },
  {
    id: 'faq-3',
    question: 'How do you handle project requirements?',
    answer: 'I work closely with clients to gather detailed requirements, outline an implementation strategy, and iteratively build the solution with frequent feedback loops, ensuring the final product matches business goals perfectly.',
  },
];
