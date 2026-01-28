
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: string;
  liveLink: string;
  githubLink: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'tools';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
