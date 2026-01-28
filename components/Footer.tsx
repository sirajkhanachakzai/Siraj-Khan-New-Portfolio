
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="font-bold text-xl tracking-tight">Siraj Khan Achakzai</h4>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All Rights Reserved. Engineered with precision.</p>
          </div>
          
          <div className="flex items-center space-x-6 text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Lab</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
             <a href="https://github.com/sirajkhanachakzai" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"><i className="fa-brands fa-github"></i></a>
             <a href="https://pk.linkedin.com/in/sirajkhanachakzai" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"><i className="fa-brands fa-linkedin"></i></a>
             <a href="mailto:sirajkhanachakzai67@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
