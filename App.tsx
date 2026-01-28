
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#00f2ff]/30 grid-pattern">
      <Header />
      
      <main className="relative z-10 space-y-32">
        <div className="reveal">
          <Hero />
        </div>
        
        <div className="reveal">
          <About />
        </div>
        
        <div className="reveal">
          <Skills />
        </div>
        
        <div className="reveal">
          <Projects />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>
      
      <Footer />
      <GeminiChat />

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default App;
