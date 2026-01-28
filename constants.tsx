
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'linkedin-ai',
    title: 'LinkedIn Lead Qualification',
    description: 'AI-powered tool for intelligent lead qualification and outreach strategy on LinkedIn.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop',
    tags: ['AI', 'Automation', 'LinkedIn API'],
    type: 'AI',
    liveLink: 'https://ailinkdenspy.netlify.app/',
    githubLink: 'https://github.com/sirajkhanachakzai/AI-Powered-LinkedIn-Lead-Qualification'
  },
  {
    id: 'social-automation',
    title: 'Social Media Lead Automation',
    description: 'A comprehensive automation suite for capturing and nurturing leads across social platforms.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    tags: ['Node.js', 'React', 'Automation'],
    type: 'Automation',
    liveLink: 'https://aisocialmediaautomation.netlify.app/',
    githubLink: 'https://github.com/sirajkhanachakzai/Social-Media-Lead-Automation-Tool'
  },
  {
    id: 'student-ai',
    title: 'Student AI Assistant',
    description: 'Personalized AI learning companion helping students manage tasks and master subjects.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Gemini API', 'Next.js', 'Education'],
    type: 'Bot',
    liveLink: 'https://ai-studentasistant.netlify.app/',
    githubLink: 'https://github.com/sirajkhanachakzai/Student-Ai-Assistant'
  },
  {
    id: 'hotel-ai',
    title: 'Hotel AI Management',
    description: 'Advanced management system with integrated AI for guest services and logistics.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    tags: ['Dashboard', 'AI', 'Fullstack'],
    type: 'Management',
    liveLink: 'https://aihotelmanagment.netlify.app/',
    githubLink: 'https://github.com/sirajkhanachakzai/Hotel-AI'
  },
  {
    id: 'modern-task',
    title: 'Modern Task Manager',
    description: 'Sleek, performant task management application with a focus on UX and productivity.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Zustand', 'UI/UX'],
    type: 'Tool',
    liveLink: 'https://modrentaskmanager.netlify.app/',
    githubLink: 'https://github.com/sirajkhanachakzai/Modern-Task-Manager'
  },
  {
    id: 'portfolio-v1',
    title: 'Digital Portfolio',
    description: 'Highly responsive and interactive developer profile showcasing core strengths.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Framing'],
    type: 'Portfolio',
    liveLink: 'https://sirajkhanachakzai.netlify.app/',
    githubLink: 'https://github.com/sirajkhanachakzai/Portfolio-Website'
  }
];

export const SKILLS: Skill[] = [
  // Group 1: Languages
  { name: 'Python', icon: 'fa-brands fa-python', category: 'frontend' }, 
  { name: 'C++', icon: 'fa-solid fa-terminal', category: 'frontend' },
  { name: 'HTML5', icon: 'fa-brands fa-html5', category: 'frontend' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', category: 'frontend' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', category: 'frontend' },
  
  // Group 2: Frameworks & AI
  { name: 'React', icon: 'fa-brands fa-react', category: 'ai' }, 
  { name: 'Next.js', icon: 'fa-solid fa-n', category: 'ai' },
  { name: 'Dialogflow', icon: 'fa-solid fa-brain', category: 'ai' },
  { name: 'OpenAI', icon: 'fa-solid fa-bolt', category: 'ai' },
  { name: 'Gemini AI', icon: 'fa-solid fa-robot', category: 'ai' },

  // Group 3: Tools & Specialization
  { name: 'AI Automation', icon: 'fa-solid fa-gears', category: 'tools' }, 
  { name: 'Git', icon: 'fa-brands fa-git-alt', category: 'tools' },
  { name: 'GitHub', icon: 'fa-brands fa-github', category: 'tools' },
  { name: 'VS Code', icon: 'fa-solid fa-code', category: 'tools' },
  { name: 'Web Apps', icon: 'fa-solid fa-globe', category: 'tools' },
];

export const SIRAJ_BIO = `
I'm Siraj Khan Achakzai, a Web & AI developer from Quetta, Pakistan. 
I specialize in crafting intelligent interfaces that merge design, technology, and AI. 
I build modern, responsive web & mobile experiences including landing pages, 
e-commerce platforms, chatbots, and AI assistants. 
My tech stack includes React, React Native, Node.js, and advanced AI APIs like Gemini.
`;
