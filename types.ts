export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'Mobile' | '3D' | 'Branding';
  image: string;
  description: string;
  technologies: string[];
  year: string;
  client: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Design' | 'Development' | 'Tools';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}