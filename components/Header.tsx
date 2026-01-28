
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [protocol, setProtocol] = useState('AI_SYSTEMS_ENG');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateProtocol = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setProtocol('MORNING_PROTOCOL');
      else if (hour >= 12 && hour < 17) setProtocol('AFTERNOON_SYNC');
      else setProtocol('EVENING_BROADCAST');
    };

    updateProtocol();
    window.addEventListener('scroll', handleScroll);
    const interval = setInterval(updateProtocol, 60000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'CORE', href: '#about' },
    { name: 'TECH', href: '#skills' },
    { name: 'LAB', href: '#projects' },
    { name: 'SYNC', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-4 group">
          <div className="w-12 h-12 bg-black border-2 border-[#00ff9d] rounded-xl flex items-center justify-center font-black text-xl text-[#00ff9d] group-hover:rotate-6 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,157,0.2)]">
            S
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black leading-none tracking-tighter text-white">SIRAJ.IO</h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#00ff9d] font-black mono mt-1">{protocol}</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-black text-slate-400 hover:text-[#00ff9d] transition-all tracking-[0.2em] mono"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-[#ff007f] text-white text-xs font-black rounded-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,127,0.3)] tracking-widest mono"
          >
            DEPLOY()
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#00ff9d] text-2xl p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-terminal'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl transition-all duration-500 border-b border-white/10 ${
          isMobileMenuOpen ? 'h-screen opacity-100 py-12 translate-y-0' : 'h-0 opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-black text-white hover:text-[#00ff9d] tracking-tighter transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-10 py-4 bg-[#00ff9d] text-black font-black rounded-xl"
          >
            INIT_CONTACT
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
