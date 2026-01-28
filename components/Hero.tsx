
import React, { useEffect, useRef, useState } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for(let i=0; i<80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: Math.random() > 0.5 ? '#00f2ff' : '#7000ff'
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    init(); animate();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-30" />;
};

const Hero: React.FC = () => {
  const [protocol, setProtocol] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["NEURAL ARCHITECT", "AI STRATEGIST", "SYSTEM AUTOMATOR"];

  useEffect(() => {
    const hour = new Date().getHours();
    const msg = hour < 12 ? 'MORNING_SYNC_ESTABLISHED' : hour < 18 ? 'AFTERNOON_PROTOCOL_ACTIVE' : 'EVENING_UPLINK_LIVE';
    setProtocol(msg);

    const interval = setInterval(() => {
      setTitleIndex(prev => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full crystal-glass border-[#00f2ff]/20 text-[#00f2ff] text-[10px] font-bold tracking-[0.4em] mono">
            <span className="w-2 h-2 bg-[#00f2ff] rounded-full animate-ping"></span>
            <span>{protocol}</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-[0.85] text-white">
              SIRAJ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#7000ff] to-[#ff007f] neon-text-cyan">
                KHAN
              </span>
            </h1>
            <div className="h-20 flex items-center justify-center lg:justify-start">
              <span className="text-2xl md:text-3xl font-bold mono text-slate-400 tracking-tighter opacity-80 uppercase">
                // {titles[titleIndex]}
              </span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Bridging the gap between <span className="text-white">human intuition</span> and <span className="text-[#00f2ff]">machine intelligence</span>. Engineering the next generation of digital ecosystems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a href="#projects" className="group relative w-full sm:w-auto px-12 py-5 bg-[#00f2ff] text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,242,255,0.2)]">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10 mono tracking-tighter">INITIATE_EXPLORATION()</span>
            </a>
            <a href="#contact" className="w-full sm:w-auto px-12 py-5 crystal-glass text-white font-bold rounded-2xl hover:border-[#ff007f]/50 hover:text-[#ff007f] transition-all mono text-sm tracking-tighter uppercase">
              Download_Manifesto
            </a>
          </div>
        </div>
        
        <div className="relative group perspective-1000">
          <div className="absolute -inset-10 bg-gradient-to-br from-[#00f2ff]/20 via-[#7000ff]/20 to-[#ff007f]/20 rounded-full blur-[100px] opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
          <div className="relative crystal-glass rounded-[3.5rem] p-4 transform transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-2 border-white/10">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/10 to-[#ff007f]/10 pointer-events-none rounded-[3.5rem]"></div>
             <img 
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1000&q=90" 
              alt="Neural Interface" 
              className="w-full h-auto object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.02]"
            />
            
            {/* HUD Overlay */}
            <div className="absolute top-10 right-10 flex flex-col items-end space-y-2">
              <div className="px-3 py-1 crystal-glass rounded text-[8px] text-[#00f2ff] mono tracking-widest uppercase">Target_Lock: True</div>
              <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#ff007f] w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
