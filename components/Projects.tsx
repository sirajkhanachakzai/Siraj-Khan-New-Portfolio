
import React, { useState, useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Normalize coordinates from -1 to 1
    const x = (e.clientX - centerX) / (width / 2);
    const y = (e.clientY - centerY) / (height / 2);

    // Subtle movement in opposite direction (scaled by 12px for precision)
    setOffset({ x: -x * 12, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-[#00ff9d]/40 transition-all duration-700 flex flex-col h-full hover:shadow-[0_0_50px_rgba(0,255,157,0.08)]"
    >
      {/* Image Container with Parallax */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 w-[115%] h-[115%] -left-[7.5%] -top-[7.5%] transition-transform duration-300 ease-out will-change-transform"
          style={{ 
            transform: `translate(${offset.x}px, ${offset.y}px)`,
          }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />
        </div>
        
        {/* Aesthetic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[#00ff9d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-15"></div>
        
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 text-[10px] font-black text-[#00ff9d] uppercase tracking-[0.3em] mono shadow-2xl">
            {project.type}
          </span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8 space-y-5 flex-grow flex flex-col relative z-20 -mt-12 bg-gradient-to-b from-transparent to-[#0a0a0a]">
        <div className="space-y-4">
          {/* Animated Title */}
          <h3 className="text-2xl font-black text-white group-hover:text-[#00ff9d] transition-all duration-500 transform group-hover:-translate-y-2 tracking-tighter leading-tight">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] text-slate-500 font-bold uppercase mono tracking-widest px-2.5 py-1 bg-white/[0.03] rounded-lg border border-white/5 group-hover:border-[#00ff9d]/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed flex-grow font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          {project.description}
        </p>
        
        {/* Call to Action Buttons */}
        <div className="pt-8 grid grid-cols-2 gap-4">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 py-4 px-4 bg-[#00ff9d] text-black font-black rounded-2xl text-[11px] hover:bg-[#05f498] hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,255,157,0.2)] group/btn"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover/btn:rotate-45 transition-transform duration-300"></i>
            <span className="mono">DEPLOY.LIVE()</span>
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 py-4 px-4 bg-white/[0.02] border border-white/10 text-white font-black rounded-2xl text-[11px] hover:bg-white/5 hover:border-[#ff007f]/50 hover:text-[#ff007f] transition-all group/repo"
          >
            <i className="fa-brands fa-github text-[14px] group-hover/repo:scale-110 transition-transform"></i>
            <span className="mono">GET.SRC()</span>
          </a>
        </div>
      </div>
      
      {/* Decorative Corner Element */}
      <div className="absolute bottom-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
        <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-[#00ff9d]"></div>
        <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-[#00ff9d]"></div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI', 'Automation', 'Bot', 'Management', 'Tool', 'Portfolio'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#ff007f]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-10 md:space-y-0">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase mono">
              Engineering_Logs
            </div>
            <h2 className="text-5xl md:text-7xl font-black flex flex-col tracking-tighter leading-none">
              <span className="text-[#00ff9d] neon-text-green">Deployments</span>
              <span className="text-white">//&nbsp;Lab_Results</span>
            </h2>
            <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
              Real-time production instances and granular repository access for high-level neural integrations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:pb-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-[10px] font-black transition-all border mono tracking-widest ${
                  filter === cat 
                  ? 'bg-[#00ff9d] text-black border-[#00ff9d] shadow-[0_10px_20px_rgba(0,255,157,0.3)]' 
                  : 'bg-white/5 text-slate-400 border-white/5 hover:border-[#00ff9d]/50 hover:text-[#00ff9d]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
