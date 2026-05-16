'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KnowledgeChunk {
  content: string;
  category: string;
  source: string;
  cta?: { text: string; link: string };
}

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
  cta?: { text: string; link: string };
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hello. I'm the Evolve Clinical Assistant. How can we help you transform your therapy operations today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Initialize Knowledge Base & Chunking
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch('/knowledge.json');
        const data = await res.json();
        const extracted: KnowledgeChunk[] = [];

        // Services
        const services = data['services.json']?.showcase?.services || [];
        services.forEach((s: any) => {
          extracted.push({ 
            category: 'operational', 
            source: s.title, 
            content: s.desc,
            cta: { text: `Explore ${s.title}`, link: `/services/${s.slug}` }
          });
        });

        // FAQ - Strip "Answer:" prefix for cleaner responses
        const faqs = data['settings.json']?.faq?.list || [];
        faqs.forEach((f: any) => {
            const cleanA = f.a.replace(/^Answer:\s*/i, '');
            extracted.push({ 
              category: 'general', 
              source: 'FAQ', 
              content: `${f.q}. ${cleanA}` 
            });
        });

        setChunks(extracted);
        setIsInitializing(false);
      } catch (err) {
        console.error('Bot Init Error:', err);
        setIsInitializing(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. High-Impact Intent Logic
  const getProfessionalResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    
    // Core Sales Intents - DIRECT & PERSUASIVE
    if (q.includes('why should we hire you') || q.includes('why choose') || q.includes('why us') || q.includes('why evolve')) {
      return {
        text: "We are the only partner in the LTC space that combines 20+ years of clinical leadership with a 100% revenue retention model. We provide the expertise and staff management, while your facility keeps every dollar of therapy billing. It's the most transparent and profitable management model on the market.",
        cta: { text: "Our Clinical Advantage", link: "/about" }
      };
    }

    if (q.includes('what do you do') || q.includes('simple terms') || q.includes('who are you')) {
      return {
        text: "We provide clinical and operational management for therapy departments in long-term care facilities. We handle the recruitment, compliance, and clinical oversight, allowing you to transition from high-cost contractors to a high-performing in-house model where you retain all the revenue.",
        cta: { text: "View Our Services", link: "/services" }
      };
    }

    if (q.includes('revenue') || q.includes('100%') || q.includes('money') || q.includes('profit')) {
      return {
        text: "With our model, your facility retains 100% of your therapy revenue. We bridge the gap between clinical excellence and financial sustainability, empowering you to reinvest in your patient care instead of paying a contractor's markup.",
        cta: { text: "Calculate Your Retention", link: "/services/optimal-therapy-outcomes" }
      };
    }

    if (q.includes('transition') || q.includes('in-house') || q.includes('contract')) {
      return {
        text: "We specialize in seamless transitions from contract therapy to an in-house model. We manage the recruitment, credentialing, and culture-building, ensuring zero disruption to your patient care while you gain complete operational control.",
        cta: { text: "Transition Roadmap", link: "/services/in-house-transition" }
      };
    }

    if (q.includes('state') || q.includes('where') || q.includes('location')) {
      return {
        text: "We currently provide leadership and recruitment across 17 states, including Ohio, Pennsylvania, Florida, New Jersey, and Delaware. We are a national firm ready to support your facility wherever you operate.",
        cta: { text: "View Coverage Map", link: "/locations" }
      };
    }

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) {
        return { text: "Hello. We are Evolve Therapy Services. How can we help you explore a more profitable and clinical-focused therapy model today?" };
    }

    // Fallback: Semantic Match
    const keywords = q.split(' ').filter(w => w.length > 3);
    const scored = chunks.map(chunk => {
      let score = 0;
      const content = chunk.content.toLowerCase();
      keywords.forEach(kw => { if (content.includes(kw)) score += 1; });
      if (content.includes(q)) score += 5;
      return { chunk, score };
    }).sort((a, b) => b.score - a.score);

    if (scored[0] && scored[0].score > 0) {
      return {
        text: `Regarding that: ${scored[0].chunk.content}`,
        cta: scored[0].chunk.cta || { text: "Request Full Analysis", link: "/contact" }
      };
    }

    return {
      text: "That is a specific operational inquiry that our leadership team would best handle during a custom analysis. We can show you exactly how our model would apply to your facility's unique data.",
      cta: { text: "Connect with Leadership", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getProfessionalResponse(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: response.text,
        timestamp: new Date(),
        cta: response.cta,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[420px] h-[600px] bg-[#0f172a] rounded-[2rem] shadow-[0_30px_90px_-15px_rgba(15,23,42,0.6)] border border-white/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 pb-10 border-b border-white/5 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Bot size={22} className="text-[#38bdf8]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-xl text-white tracking-tight">Evolve Assistant</h4>
                    <span className="text-[9px] uppercase font-black tracking-[0.2em] text-[#38bdf8]">Clinical Oversight Platform</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth custom-scrollbar"
            >
              {isInitializing ? (
                <div className="flex flex-col items-center justify-center h-full text-white/20 gap-4">
                  <Loader2 size={32} className="animate-spin text-[#0284c7]" />
                  <span className="text-[10px] uppercase font-black tracking-widest">Accessing Clinical Data...</span>
                </div>
              ) : (
                messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={cn(
                      "flex flex-col max-w-[88%]",
                      msg.type === 'user' ? "ml-auto items-end" : "items-start"
                    )}
                  >
                    <div className={cn(
                      "px-6 py-5 rounded-3xl leading-relaxed transition-all duration-500 font-serif",
                      msg.type === 'user' 
                        ? "bg-[#0284c7] text-white rounded-tr-none shadow-xl text-sm" 
                        : "bg-white/5 text-white/90 rounded-tl-none border border-white/10 text-base italic"
                    )}>
                      {msg.text}
                    </div>
                    {msg.cta && (
                      <motion.a
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        href={msg.cta.link}
                        className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-white text-[#0f172a] text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#38bdf8] hover:text-white transition-all shadow-2xl"
                      >
                        {msg.cta.text}
                        <ArrowRight size={12} />
                      </motion.a>
                    )}
                    <span className="text-[8px] uppercase font-black tracking-widest text-white/20 mt-3 px-1">
                      {msg.type === 'bot' ? 'Evolve Expert' : 'Partner Portal'} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              )}
              {isTyping && (
                <div className="flex items-center gap-3 text-[#38bdf8]">
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-current animate-bounce" />
                    <div className="w-1 h-1 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1 h-1 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-[9px] uppercase font-black tracking-[0.2em] opacity-40">Processing Inquiry</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-8 pt-0">
              <div className="flex items-center gap-3 p-2 bg-white/5 rounded-2xl border border-white/10 focus-within:border-[#0284c7]/50 focus-within:bg-white/10 transition-all">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="How can we assist you?"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-white focus:outline-none placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center hover:bg-[#38bdf8] transition-all disabled:opacity-20"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-center text-[9px] text-white/20 mt-6 font-black uppercase tracking-[0.3em]">
                Clinical Integrity Guaranteed
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10",
          isOpen ? "bg-white text-[#0f172a]" : "bg-[#0f172a]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
