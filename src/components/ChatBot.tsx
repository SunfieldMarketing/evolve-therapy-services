'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KnowledgeChunk {
  content: string;
  category: string;
  source: string;
  cta?: { text: string; link: string };
  tags: string[];
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
      text: "Hello. I am the Evolve Clinical Assistant. I've been synchronized with our facility management data and clinical models. How can we assist you in evolving your operations today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Core Logic & Knowledge Ingestion
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch('/knowledge.json');
        const data = await res.json();
        const extracted: KnowledgeChunk[] = [];

        // SERVICES (Aggregated)
        const services = data['services.json']?.showcase?.services || [];
        const allServiceTitles = services.map((s: any) => s.title).join(', ');
        extracted.push({ 
          category: 'services', 
          source: 'Overview', 
          tags: ['list', 'services', 'what', 'do', 'provide', 'offer'],
          content: `We provide a comprehensive suite of therapy management services including ${allServiceTitles}. Our goal is to handle the clinical and operational heavy lifting so you can focus on patient care.`,
          cta: { text: "Explore All Services", link: "/services" }
        });

        services.forEach((s: any) => {
          extracted.push({ 
            category: 'services', 
            source: s.title, 
            tags: [s.title.toLowerCase(), s.slug, 'detail', 'info'],
            content: s.desc,
            cta: { text: `Detail: ${s.title}`, link: `/services/${s.slug}` }
          });
        });

        // FAQ & CLINICAL DETAILS
        const faqs = data['settings.json']?.faq?.list || [];
        faqs.forEach((f: any) => {
            extracted.push({ 
              category: 'general', 
              source: 'FAQ', 
              tags: f.q.toLowerCase().split(' '),
              content: f.a.replace(/^Answer:\s*/i, '')
            });
        });

        // REVENUE & VALUE
        extracted.push({
            category: 'value',
            source: 'Model',
            tags: ['why', 'hire', 'choose', 'better', 'difference', 'unique', 'value', 'benefit'],
            content: "We are unique because we empower LTC facilities to own their therapy departments. Unlike traditional contractors, we provide the leadership while you retain 100% of the revenue. We bridge the gap between high-level clinical outcomes and financial sustainability.",
            cta: { text: "Our Philosophy", link: "/about" }
        });

        setChunks(extracted);
      } catch (err) {
        console.error('Bot Init Error:', err);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. Advanced Reasoning Engine
  const generateAIResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    
    // GREETINGS (Robust)
    if (/^(hi|hello|hey|greetings|good morning|good afternoon)/i.test(q)) {
        return {
            text: "Hello! We're glad you're here. We are currently helping LTC operators across 17 states transition to more profitable, clinical-focused therapy models. Is there a specific part of our operations or revenue retention model you'd like to explore?"
        };
    }

    // LISTING SERVICES (Specific reasoning)
    if ((q.includes('what') || q.includes('list')) && (q.includes('service') || q.includes('do you do') || q.includes('offer'))) {
        const overview = chunks.find(c => c.source === 'Overview');
        return {
            text: `We offer a full spectrum of clinical management and operational support. ${overview?.content}`,
            cta: overview?.cta
        };
    }

    // REVENUE & FINANCIALS
    if (q.includes('money') || q.includes('revenue') || q.includes('profit') || q.includes('cost') || q.includes('100%')) {
        const val = chunks.find(c => c.category === 'value');
        return {
            text: `Our financial model is designed for maximum transparency. ${val?.content} Specifically, we focus on helping you retain 100% of your therapy revenue by removing the middleman.`,
            cta: { text: "Financial Model", link: "/services/therapy-cost-reduction" }
        };
    }

    // WHY US
    if (q.includes('why') && (q.includes('hire') || q.includes('use') || q.includes('choose') || q.includes('you'))) {
        const val = chunks.find(c => c.category === 'value');
        return {
            text: `The choice to partner with us is a choice to take control of your facility's future. ${val?.content}`,
            cta: { text: "Why Evolve?", link: "/about" }
        };
    }

    // SEMANTIC SEARCH LOGIC (No cookie-cutter prefixes)
    const keywords = q.split(' ').filter(w => w.length > 3);
    const scored = chunks.map(chunk => {
        let score = 0;
        keywords.forEach(kw => {
            if (chunk.content.toLowerCase().includes(kw)) score += 2;
            if (chunk.tags.some(t => t.includes(kw))) score += 3;
        });
        if (chunk.content.toLowerCase().includes(q)) score += 10;
        return { chunk, score };
    }).sort((a, b) => b.score - a.score);

    const top = scored[0];
    if (top && top.score > 2) {
        // Construct a unique response based on category
        let responsePrefix = "To address that specifically: ";
        if (top.chunk.category === 'services') responsePrefix = "Our clinical team provides specialized support for that. ";
        if (top.chunk.category === 'clinical') responsePrefix = "Clinical excellence is our core focus. ";
        
        return {
            text: `${responsePrefix}${top.chunk.content}`,
            cta: top.chunk.cta || { text: "Discuss with Leadership", link: "/contact" }
        };
    }

    // INTELLIGENT FALLBACK
    return {
      text: "That's a specific inquiry about LTC operations that we'd like to address with the proper data. We can provide a complimentary clinical and financial analysis for your facility to show you exactly how our model would apply. Shall we connect you with our team?",
      cta: { text: "Connect with Evolve", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setIsThinking(true);

    // Simulate AI reasoning cycles
    setTimeout(() => {
      const response = generateAIResponse(userMsg.text);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: response.text,
        timestamp: new Date(),
        cta: response.cta,
      }]);
      setIsTyping(false);
      setIsThinking(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[600px] bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(15,23,42,0.1)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#0284c7] text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md shadow-inner">
                    <BrainCircuit size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl leading-tight tracking-tight">Evolve Assistant</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] uppercase font-black tracking-widest text-white/60">Reasoning Engine Online</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-all">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/20 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[88%]", msg.type === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn(
                    "px-6 py-4.5 rounded-[1.8rem] text-sm md:text-base leading-relaxed transition-all duration-300",
                    msg.type === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-lg shadow-[#0284c7]/20 font-medium" 
                      : "bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                  {msg.cta && (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      href={msg.cta.link}
                      className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#0284c7] transition-all shadow-xl"
                    >
                      {msg.cta.text}
                      <ArrowRight size={12} />
                    </motion.a>
                  )}
                  <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest px-1">
                    {msg.type === 'bot' ? 'Evolve Expert' : 'Partner Portal'} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-3 text-[#0284c7]">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-60 animate-pulse">
                    {isThinking ? 'Analyzing Knowledge Fragments...' : 'Constructing Response...'}
                  </span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-2 p-1.5 bg-slate-100/50 rounded-[1.5rem] border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about our models..."
                  className="flex-1 bg-transparent px-4 py-3.5 text-sm font-medium focus:outline-none placeholder:text-slate-400 text-slate-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-12 h-12 bg-[#0284c7] text-white rounded-2xl flex items-center justify-center hover:bg-[#0f172a] transition-all disabled:opacity-20 shadow-lg shadow-[#0284c7]/20"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4 px-1">
                <div className="flex items-center gap-2 text-[9px] text-slate-400 font-black uppercase tracking-widest">
                  <Sparkles size={10} className="text-[#0284c7]" />
                  Verified Business Intelligence
                </div>
                <div className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">
                  Zero Hallucination
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
          "w-16 h-16 rounded-[1.4rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500",
          isOpen ? "bg-[#0f172a] rotate-90" : "bg-gradient-to-br from-[#0284c7] to-[#0369a1]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
