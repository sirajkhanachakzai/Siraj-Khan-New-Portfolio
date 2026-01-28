
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="crystal-glass rounded-[4rem] p-10 md:p-20 relative overflow-hidden group">
          {/* Animated Glows */}
          <div className="absolute top-[-20%] left-[-20%] w-80 h-80 bg-[#00f2ff]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#00f2ff]/20 transition-colors duration-1000"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-80 h-80 bg-[#7000ff]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#7000ff]/20 transition-colors duration-1000"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-[#00f2ff] mono text-xs font-black tracking-[0.6em] uppercase">Identity_Sequence</h4>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#7000ff]">Architect</span></h2>
              </div>
              
              <div className="space-y-8 text-slate-400 leading-relaxed text-xl font-medium">
                <p>
                  I am <strong className="text-white">Siraj Khan Achakzai</strong>, a specialist in AI-driven architecture and futuristic web development. My mission is to build the bridges between <span className="text-[#00f2ff]">complex datasets</span> and <span className="text-white">human-centric design</span>.
                </p>
                <div className="p-8 rounded-[2rem] crystal-glass border-l-4 border-[#ff007f] italic font-semibold text-white/90 bg-white/[0.02]">
                  "Intelligence is not just in the logic; it is in the interface through which we interact with the future."
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl crystal-glass hover:border-[#00f2ff]/30 transition-all group/stat">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-[#00f2ff] transition-colors">99.9%</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono">Uptime_Reliability</div>
                </div>
                <div className="p-8 rounded-3xl crystal-glass hover:border-[#7000ff]/30 transition-all group/stat">
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-[#7000ff] transition-colors">65+</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mono">Deployments_Total</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square crystal-glass rounded-[4rem] overflow-hidden p-6 border-white/5 relative group/img transform transition-all duration-700 hover:rotate-2">
                <img 
                  src="https://avatars.githubusercontent.com/u/214365161?v=4" 
                  alt="Siraj Portrait" 
                  className="w-full h-full object-cover rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000"
                />
                
                {/* HUD Elements */}
                <div className="absolute top-12 left-12 w-20 h-20 border-t-2 border-l-2 border-[#00f2ff]/30 rounded-tl-2xl"></div>
                <div className="absolute bottom-12 right-12 w-20 h-20 border-b-2 border-r-2 border-[#ff007f]/30 rounded-br-2xl"></div>
                
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff]/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 crystal-glass px-10 py-6 rounded-3xl border-[#00f2ff]/40 shadow-[0_20px_50px_rgba(0,242,255,0.1)] animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#00f2ff] rounded-full animate-ping"></div>
                  <span className="font-black text-sm tracking-widest mono text-white">SYSTEM_ID: SIRAJ_01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;
