
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Transmitting...');
    
    // Simulate API call
    setTimeout(() => {
      const { name, email, message } = formState;
      const subject = `Inquiry from ${name}`;
      const body = `${message}\n\nSent from: ${email}`;
      window.location.href = `mailto:sirajkhanachakzai67@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('Mail client opened.');
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold">Open for Connections</h2>
              <p className="text-slate-400">
                Whether it's a new venture or a simple tech chat, my frequencies are always open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-blue-400 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Base of Operations</h4>
                  <p className="text-slate-400">Quetta, Balochistan, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-pink-400 text-xl group-hover:bg-pink-600 group-hover:text-white transition-all">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Electronic Mail</h4>
                  <p className="text-slate-400">sirajkhanachakzai67@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border border-blue-500/10">
              <h4 className="font-bold mb-4 uppercase text-xs tracking-[0.2em] text-blue-400">Social Pulse</h4>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter', 'instagram'].map(platform => (
                  <a 
                    key={platform}
                    href={`#${platform}`}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 transition-all"
                  >
                    <i className={`fa-brands fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-[2.5rem] p-10 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Identity</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Frequency</label>
                <input 
                  type="email" 
                  required
                  placeholder="Email Address"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message Protocol</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="How can we collaborate?"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 resize-none"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all flex items-center justify-center space-x-3"
              >
                <span>Initiate Contact</span>
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
              
              {status && (
                <div className="text-center text-xs font-bold text-blue-400 animate-pulse uppercase tracking-widest">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
