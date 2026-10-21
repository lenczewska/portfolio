export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'uiux';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  date?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  levelText: string;
  icon?: string;
  experience?: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface LanguageSkill {
  language: string;
  level: string; // e.g., 'Родной', 'C1 - Advanced', 'B2 - Upper-Intermediate'
  percentage: number;
  flag: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  institution: string;
  instructor?: string;
  period: string;
  credentialUrl?: string;
  certificateId?: string;
  skillsLearned: string[];
  description: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  university: string;
  period: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  telegram: string;
  telegramHandle: string;
  github: string;
  githubHandle: string;
  linkedin?: string;
  linkedinHandle?: string;
  location: string;
  status: string; // e.g. 'Готова к новым предложениям'
}

export interface PortfolioData {
  personal: {
    name: string;
    surname: string;
    role: string;
    tagline: string;
    bio: string;
    shortAbout: string;
    avatarUrl: string;
    resumeUrl?: string;
    stats: {
      value: string;
      label: string;
      subtext?: string;
    }[];
  };
  contacts: ContactInfo;
  projects: Project[];
  skillCategories: SkillCategory[];
  languages: LanguageSkill[];
  courses: Course[];
  education: EducationItem[];
  experience: ExperienceItem[];
}
