
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Neural link established. I am Siraj's digital surrogate. Query me on project details or technical stack.", timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.content }]
    }));

    const response = await getGeminiResponse(input, history);
    
    setMessages(prev => [...prev, { role: 'model', content: response, timestamp: new Date() }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {/* Chat Window */}
      <div className={`absolute bottom-24 right-0 w-[350px] md:w-[420px] bg-[#050505] rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-500 origin-bottom-right overflow-hidden ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#00ff9d]/10 border border-[#00ff9d]/30 flex items-center justify-center text-[#00ff9d] text-xl shadow-[0_0_15px_rgba(0,255,157,0.1)]">
              <i className="fa-solid fa-microchip"></i>
            </div>
            <div>
              <h4 className="font-black text-white text-sm mono tracking-tighter">AI_SURROGATE_V1</h4>
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]"></span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase mono">Neural_Link_OK</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition-colors border border-transparent hover:border-white/10"
          >
            <i className="fa-solid fa-chevron-down text-slate-400"></i>
          </button>
        </div>

        {/* Body */}
        <div ref={scrollRef} className="h-[450px] overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-5 py-4 rounded-2xl text-sm leading-relaxed mono tracking-tight ${
                m.role === 'user' 
                ? 'bg-[#00ff9d] text-black font-bold rounded-tr-none shadow-[0_4px_15px_rgba(0,255,157,0.15)]' 
                : 'bg-white/5 text-slate-200 rounded-tl-none border border-white/5'
              }`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 px-5 py-4 rounded-2xl rounded-tl-none border border-white/5 flex space-x-2">
                <div className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full animate-bounce shadow-[0_0_8px_#00ff9d]"></div>
                <div className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full animate-bounce delay-100 shadow-[0_0_8px_#00ff9d]"></div>
                <div className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full animate-bounce delay-200 shadow-[0_0_8px_#00ff9d]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-white/5 bg-[#080808]">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Execute command..."
              className="w-full bg-black border border-white/10 rounded-xl pl-5 pr-14 py-4 focus:outline-none focus:border-[#00ff9d] transition-all text-sm mono tracking-tighter"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-2 bottom-2 px-4 bg-[#00ff9d] rounded-lg flex items-center justify-center text-black font-black disabled:opacity-30 transition-all hover:scale-105 active:scale-95 shadow-[0_0_10px_rgba(0,255,157,0.2)]"
            >
              <i className="fa-solid fa-terminal text-xs"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 border-2 ${
          isOpen 
          ? 'bg-[#050505] text-[#ff007f] border-[#ff007f]/50 rotate-180' 
          : 'bg-black text-[#00ff9d] border-[#00ff9d]/50 neon-border-green'
        }`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-terminal' : 'fa-robot'}`}></i>
      </button>
    </div>
  );
};

export default GeminiChat;
