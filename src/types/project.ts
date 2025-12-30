export interface Project {
  id: string;
  category: 'sold' | 'university' | 'course' | 'personal';
  image: string;
  title: string;
  description: string;
  fullDescription: string[];
  technologies: {name: string; icon: string}[];
  demoUrl?: string;
  codeUrl?: string;
}
