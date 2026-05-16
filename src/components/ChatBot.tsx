'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

// TYPES
interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
  cta?: { text: string; link: string };
}

interface KnowledgeChunk {
  content: string;
  source: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm the Evolve Clinical Assistant. I'm here to help you navigate our therapy operations and financial models. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Background Knowledge Sync
  useEffect(() => {
    const loadKnowledge = async () => {
      try {
        const res = await fetch('/knowledge.json');
        if (!res.ok) return;
        const data = await res.json();
        const rawChunks: KnowledgeChunk[] = [];
        Object.keys(data).forEach(key => {
            const val = data[key];
            if (!val) return;
            if (val.hero?.subtext) rawChunks.push({ source: 'Home', content: val.hero.subtext });
            if (val.showcase?.services) val.showcase.services.forEach((s: any) => rawChunks.push({ source: s.title, content: s.desc }));
            if (val.faq?.list) val.faq.list.forEach((f: any) => rawChunks.push({ source: 'FAQ', content: `${f.q}. ${f.a.replace(/^Answer:\s*/i, '')}` }));
            if (val.title && val.description) rawChunks.push({ source: val.title, content: `${val.description} ${val.mainContent || ''}` });
        });
        setChunks(rawChunks);
      } catch (err) {
        console.error('Bot Init Error:', err);
      }
    };
    loadKnowledge();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. High-Intelligence Decision Engine (Social + Business + Reason)
  const getDynamicResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    
    // A. IDENTITY & SOCIAL INTELLIGENCE (Dynamic & Human)
    if (q === 'are you real' || q.includes('are you a bot') || q.includes('is this a person')) {
        return {
            text: "I am Evolve's Clinical AI. While I'm not a human, I've been built specifically to handle every nuance of therapy operations and clinical excellence using our internal data. If you'd prefer to speak with one of our human experts, I'd be happy to set that up for you right now."
        };
    }

    if (q.includes('who are you') || q.includes('what are you')) {
        return {
            text: "I am the Evolve Clinical Assistant. I'm a specialized intelligence engine designed to help facility operators explore a more profitable, transparent way to run therapy departments—where you keep 100% of the revenue."
        };
    }

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) {
        return {
            text: "Hello! I'm ready to help. Whether you have questions about our Medicaid models, recruitment strategies, or our 100% revenue retention model, I'm at your service."
        };
    }

    if (q.includes('how are you')) {
        return {
            text: "I'm operating at peak clinical efficiency. Thank you for asking. How is your therapy department performing this quarter? We'd love to help you optimize it."
        };
    }

    // B. BUSINESS INTELLIGENCE (Strict Relevance)
    const keywords = q.split(' ').filter(w => w.length > 3);
    const scored = chunks.map(chunk => {
        let score = 0;
        const content = chunk.content.toLowerCase();
        keywords.forEach(kw => { if (content.includes(kw)) score += 2; });
        if (content.includes(q)) score += 10;
        return { chunk, score };
    }).sort((a, b) => b.score - a.score);

    const top = scored[0];
    // Only respond with business data if we have high confidence
    if (top && top.score >= 4) {
        // Synthesis: Remove template wrappers for a more "Direct" answer
        const directAnswer = top.chunk.content.replace(/Answer:\s*/i, '').replace(/Regarding that:\s*/i, '').trim();
        return {
            text: `Based on our clinical data: ${directAnswer}`,
            cta: { text: "Discuss with Our Team", link: "/contact" }
        };
    }

    // C. GENERAL REASONING (Fallback that doesn't sound robotic)
    if (keywords.length > 0) {
        return {
            text: "That's an interesting point. While I specialize in the operational and clinical side of LTC therapy, I want to make sure you get a precise answer. Would you like me to connect you with our leadership team for a detailed discussion on that topic?",
            cta: { text: "Connect with Leadership", link: "/contact" }
        };
    }

    return {
      text: "I'm here to support your facility's evolution. Is there anything specific about our management models, states of operation, or financial transitions you'd like to explore?",
      cta: { text: "Schedule a Consultation", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Dynamic processing delay for "Thinking" feel
    setTimeout(() => {
      const response = getDynamicResponse(userMsg.content);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        timestamp: new Date(),
        cta: response.cta,
      }]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-15px_rgba(15,23,42,0.15)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-[#0284c7] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Bot size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl leading-tight tracking-tight">Evolve Assistant</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-[10px] uppercase font-black tracking-widest text-white/60">
                        Neural Intelligence Active
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-10 bg-slate-50/20 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[90%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn(
                    "px-6 py-5 rounded-[1.8rem] text-sm md:text-[15px] leading-relaxed transition-all duration-300",
                    msg.role === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-lg shadow-[#0284c7]/20 font-medium" 
                      : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm"
                  )}>
                    {msg.content}
                  </div>
                  {msg.cta && (
                    <motion.a
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      href={msg.cta.link}
                      className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#0284c7] transition-all shadow-xl"
                    >
                      {msg.cta.text}
                      <ArrowRight size={14} />
                    </motion.a>
                  )}
                  <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest px-2">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-3 text-[#0284c7]">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Reasoning</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] transition-all disabled:opacity-20 shadow-lg shadow-[#0284c7]/20"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-green-500" />
                  Clinical Data Secure
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest">
                  <Zap size={10} className="text-[#0284c7]" />
                  Real-Time AI
                  <Sparkles size={10} className="text-[#0284c7]" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10",
          isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
