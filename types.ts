

export const Page = {
  HOME: 'HOME',
  SERVICES: 'SERVICES',
  PROJECTS: 'PROJECTS',
  NEWS: 'NEWS',
  ABOUT: 'ABOUT',
  CONTACT: 'CONTACT'
} as const;

export type Page = typeof Page[keyof typeof Page];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  imageUrl?: string;
  // If present, it's an external link
  externalUrl?: string; 
  content?: string;
}