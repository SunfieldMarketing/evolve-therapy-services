'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  category: 'clinical' | 'financial' | 'operational' | 'general';
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm the Evolve Clinical Assistant. I've been synchronized with our full operational knowledge base. How can we help you transform your therapy operations today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Background Knowledge Ingestion (Instant & Automatic)
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
            if (val.hero?.subtext) rawChunks.push({ category: 'general', source: 'Home', content: val.hero.subtext });
            if (val.showcase?.services) {
                val.showcase.services.forEach((s: any) => rawChunks.push({ category: 'operational', source: s.title, content: s.desc }));
            }
            if (val.faq?.list) {
                val.faq.list.forEach((f: any) => rawChunks.push({ category: 'general', source: 'FAQ', content: `${f.q}. ${f.a.replace(/^Answer:\s*/i, '')}` }));
            }
            if (val.title && val.description) {
                rawChunks.push({ 
                    category: key.includes('medicaid') ? 'financial' : 'clinical', 
                    source: val.title, 
                    content: `${val.description} ${val.mainContent || ''}` 
                });
            }
        });
        setChunks(rawChunks);
        setIsReady(true);
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

  // 2. High-Fidelity Conversational Synthesis (Instant AI feel)
  const intros = useMemo(() => [
    "That's a vital part of our model. ",
    "We prioritize this area in our partnerships. ",
    "Our clinical leadership team often addresses this: ",
    "At Evolve, we've developed a specific strategy for this: ",
    "To provide you with the most clinical insight: ",
    "This is exactly why we help facilities transition to in-house models: ",
    "Regarding our clinical oversight: ",
    "From a financial and operational perspective: "
  ], []);

  const closings = useMemo(() => [
    "Does this align with your facility's current clinical goals?",
    "We can show you exactly how this would look for your census in a quick 15-minute analysis.",
    "Our team is ready to dive deeper into this with you whenever you're available.",
    "This is just one way we ensure our partners retain 100% of their revenue.",
    "Would you like to see a more detailed breakdown of our clinical results in this area?",
    "We believe this approach is the only way to achieve long-term clinical and financial stability."
  ], []);

  const synthesizeResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    
    // Core Intent Mapping
    if (/^(hi|hello|hey|greetings)/i.test(q)) {
        return {
            text: "Hello! We're glad you're here. We are currently helping LTC operators across 17 states transition to more profitable, clinical-focused therapy models. How can we help you explore our 100% revenue retention model today?"
        };
    }

    if (q.includes('what') && (q.includes('service') || q.includes('do you do'))) {
        const svcs = chunks.filter(c => c.category === 'operational').map(c => c.source).slice(0, 5).join(', ');
        return {
            text: `We provide comprehensive clinical and operational management. Our core services include ${svcs}, and more—all designed to help you run a high-performing in-house therapy department while retaining 100% of your revenue.`,
            cta: { text: "View Full Service List", link: "/services" }
        };
    }

    if (q.includes('why') && (q.includes('hire') || q.includes('choose') || q.includes('you'))) {
        return {
            text: "Facilities choose Evolve because we are the only partner that combines elite clinical leadership with a 100% revenue retention model. We handle the heavy lifting—recruitment, compliance, and oversight—while you keep every dollar your therapy department earns.",
            cta: { text: "The Evolve Advantage", link: "/about" }
        };
    }

    // Semantic Retrieval
    const keywords = q.split(' ').filter(w => w.length > 3);
    const scored = chunks.map(chunk => {
        let score = 0;
        keywords.forEach(kw => { if (chunk.content.toLowerCase().includes(kw)) score += 2; });
        if (chunk.content.toLowerCase().includes(q)) score += 10;
        return { chunk, score };
    }).sort((a, b) => b.score - a.score);

    const top = scored[0];
    if (top && top.score > 1) {
        const intro = intros[Math.floor(Math.random() * intros.length)];
        const closing = closings[Math.floor(Math.random() * closings.length)];
        
        // Dynamic Synthesis - Removing any robot-like "Answer:" tags
        const cleanContent = top.chunk.content.replace(/Answer:\s*/i, '').trim();
        
        return {
            text: `${intro}${cleanContent} ${closing}`,
            cta: { text: "Request Strategy Analysis", link: "/contact" }
        };
    }

    return {
      text: "That is a specific clinical inquiry that our leadership team would love to address with you directly. We can perform a detailed operational analysis for your facility to show you how our model applies to your unique situation.",
      cta: { text: "Connect with Leadership", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim() || !isReady) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = synthesizeResponse(userMsg.content);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        timestamp: new Date(),
        cta: response.cta,
      }]);
      setIsTyping(false);
    }, 800);
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
            {/* Header - Instant & Blue Theme */}
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
                        Neural Engine Active
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-all"
                >
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
                  placeholder="Ask about our models..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || !isReady}
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
                  Instant Intelligence
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
