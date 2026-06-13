export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  description?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: { label: string; text: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}
