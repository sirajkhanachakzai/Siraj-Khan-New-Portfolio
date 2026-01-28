
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = [
    { 
      id: 'frontend', 
      label: 'SYSTEM_LANGUAGES', 
      icon: 'fa-code', 
      color: '#00f2ff', 
      accent: 'rgba(0, 242, 255, 0.1)'
    },
    { 
      id: 'ai', 
      label: 'NEURAL_FRAMEWORKS', 
      icon: 'fa-brain', 
      color: '#7000ff', 
      accent: 'rgba(112, 0, 255, 0.1)'
    },
    { 
      id: 'tools', 
      label: 'CORE_OPERATIONS', 
      icon: 'fa-toolbox', 
      color: '#ff007f', 
      accent: 'rgba(255, 0, 127, 0.1)'
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h4 className="mono text-[#7000ff] text-xs font-black tracking-[0.5em] uppercase">Capability_Matrix</h4>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white">
            Technical <span className="text-[#00f2ff]">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f2ff] to-[#7000ff] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat) => (
            <div key={cat.id} className="crystal-glass rounded-[3rem] p-10 group hover:border-white/20 transition-all duration-500 relative">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-10 transition-transform group-hover:scale-110 group-hover:rotate-12"
                style={{ backgroundColor: cat.accent, color: cat.color, border: `1px solid ${cat.color}30` }}
              >
                <i className={`fa-solid ${cat.icon}`}></i>
              </div>
              
              <h3 className="text-sm font-black mb-12 mono tracking-tighter opacity-50 uppercase">{cat.label}</h3>
              
              <div className="space-y-8">
                {SKILLS.filter(s => s.category === cat.id).map(skill => (
                  <div key={skill.name} className="space-y-4 group/item">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-500 group-hover/item:text-white transition-all">
                          <i className={`${skill.icon} text-sm`}></i>
                        </div>
                        <span className="text-sm font-bold text-slate-300 group-hover/item:text-white transition-colors mono">{skill.name}</span>
                      </div>
                      <span className="text-[9px] mono text-slate-600 font-black">SYNCED</span>
                    </div>
                    
                    <div className="h-[6px] bg-white/5 rounded-full overflow-hidden p-[1px]">
                      <div 
                        className="h-full rounded-full liquid-progress transition-all duration-[2s] group-hover:w-full" 
                        style={{ backgroundColor: cat.color, width: '85%', boxShadow: `0 0 15px ${cat.color}60` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
