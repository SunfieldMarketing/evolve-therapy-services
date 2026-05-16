'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
  cta?: {
    text: string;
    link: string;
  };
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hi! I'm the Evolve Assistant. I can help you with questions about our therapy management models, revenue retention, and in-house transitions. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/knowledge.json')
      .then((res) => res.json())
      .then((data) => setKnowledge(data))
      .catch((err) => console.error('Error loading knowledge base:', err));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const findAnswer = (query: string): { text: string; cta?: { text: string; link: string } } => {
    if (!knowledge) return { text: "I'm still warming up my clinical brain. Ask me again in a second!" };

    const q = query.toLowerCase();
    
    // 1. Value Proposition & Confidence (Why us / Why choose us)
    if (q.includes('why use you') || q.includes('why choose') || q.includes('why us') || q.includes('better') || q.includes('benefits') || q.includes('advantage')) {
      return {
        text: "You should choose Evolve because we are the only partner that combines 20+ years of clinical expertise with a model that lets you keep 100% of your therapy revenue. We don't just manage; we transform your facility into a center of financial strength and clinical excellence without the legacy strings of traditional contractors.",
        cta: { text: "Our Unique Advantage", link: "/about" }
      };
    }

    if (q.includes('what do you do') || q.includes('simple terms') || q.includes('who are you') || q.includes('what is evolve') || q.includes('summary')) {
      return {
        text: "We specialize in empowering LTC operators to take control of their own therapy departments. We provide the leadership, recruitment, and clinical oversight required for you to transition from high-cost contractors to a high-performing in-house model where you retain all the revenue.",
        cta: { text: "Learn How We Evolve", link: "/about" }
      };
    }

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) return { text: "Hello! We're excited to show you how Evolve can transform your facility's clinical and financial future. What can we help you explore today?" };

    // 2. Financial & Revenue
    if (q.includes('price') || q.includes('cost') || q.includes('fee') || q.includes('billing')) {
      return { 
        text: "We provide a transparent, tiered management fee that actually decreases as your volume grows. Unlike others, we don't take a percentage of your billing—we're here to help you scale efficiently while protecting your margins.",
        cta: { text: "Explore Our Pricing", link: "/services/therapy-cost-reduction" }
      };
    }
    if (q.includes('revenue') || q.includes('money') || q.includes('100%') || q.includes('profit')) {
      return { 
        text: "We believe your facility deserves to keep 100% of its therapy revenue. We bridge the gap between clinical quality and financial sustainability, giving you the tools to reinvest in your patient care and your bottom line.",
        cta: { text: "Revenue Retention Model", link: "/services/optimal-therapy-outcomes" }
      };
    }

    // 3. Clinical & Operational Oversight
    if (q.includes('transition') || q.includes('in-house') || q.includes('inhouse') || q.includes('switch')) {
      return { 
        text: "We make the transition to in-house therapy seamless and risk-free. We handle everything from staff recruitment to clinical credentialing, ensuring your facility experiences zero disruption while gaining complete operational control.",
        cta: { text: "View Our Roadmap", link: "/services/in-house-transition" }
      };
    }

    if (q.includes('staff') || q.includes('hiring') || q.includes('recruit') || q.includes('therapist')) {
        return {
          text: "We are experts at building elite clinical teams. We provide active, state-wide recruitment support and specialized in-house education so your therapists are always at the top of their field and focused on your facility's success.",
          cta: { text: "Building Your Team", link: "/services/snf-staff-education" }
        };
    }

    if (q.includes('state') || q.includes('where') || q.includes('location') || q.includes('map')) {
        return { 
          text: "We currently provide clinical leadership and recruitment across 17 states, including Ohio, Pennsylvania, Florida, New Jersey, and Delaware. We have a strategic national presence and we're ready to scale wherever you are.",
          cta: { text: "See Our Footprint", link: "/locations" }
        };
      }

    if (q.includes('compliance') || q.includes('audit') || q.includes('denial') || q.includes('regulatory')) {
        return {
            text: "We treat your compliance as our top priority. We use real-time PDPM analysis and MDS accuracy reviews to ensure your facility is protected from audits while maximizing clinical outcomes.",
            cta: { text: "Our Clinical Standards", link: "/services/denial-management" }
        };
    }

    if (q.includes('contact') || q.includes('call') || q.includes('email') || q.includes('talk') || q.includes('person') || q.includes('consult') || q.includes('help')) {
        return { 
          text: "We'd love to show you the data. We can provide a complimentary clinical and financial analysis for your facility to demonstrate exactly how we can increase your revenue retention.",
          cta: { text: "Schedule a Consultation", link: "/contact" }
        };
      }

    // 4. Keyword-based Deep Search in Knowledge Base
    const services = knowledge['services.json']?.showcase?.services || [];
    for (const s of services) {
        if (q.includes(s.title.toLowerCase()) || q.includes(s.slug.toLowerCase())) {
            return { text: `We provide specialized expertise in ${s.title}. ${s.desc}`, cta: { text: `Explore ${s.title}`, link: `/services/${s.slug}` } };
        }
    }

    const faqs = knowledge['settings.json']?.faq?.list || [];
    for (const f of faqs) {
        if (q.includes(f.q.toLowerCase())) {
            return { text: f.a };
        }
    }

    return { 
      text: "That's a vital part of therapy operations. We have specific, data-driven strategies for that which our leadership team can walk you through in a quick 15-minute analysis. Shall we set that up?",
      cta: { text: "Let's Connect", link: "/contact" }
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
      const response = findAnswer(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: response.text,
        timestamp: new Date(),
        cta: response.cta,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] sm:h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(15,23,42,0.2)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#0f172a] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0284c7] flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-serif font-black text-lg leading-tight">Evolve Assistant</h4>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Clinical Engine Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-slate-50/50"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.type === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "px-5 py-4 rounded-3xl text-sm leading-relaxed",
                    msg.type === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-lg shadow-[#0284c7]/20" 
                      : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                  {msg.cta && (
                    <motion.a
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      href={msg.cta.link}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-[#0284c7] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                    >
                      {msg.cta.text}
                      <ArrowRight size={14} />
                    </motion.a>
                  )}
                  <span className="text-[10px] text-slate-400 mt-2 font-medium">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center">
                    <Loader2 size={14} className="animate-spin" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest">Processing...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-2xl border border-slate-100">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-11 h-11 bg-[#0f172a] text-white rounded-xl flex items-center justify-center hover:bg-[#0284c7] transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1.5 font-medium">
                <Info size={10} />
                Powered by Evolve Clinical Intelligence
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
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500",
          isOpen ? "bg-[#0f172a] rotate-90" : "bg-[#0284c7]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
