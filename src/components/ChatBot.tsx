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
    
    // 1. Check for basic intents
    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) return { text: "Hello! How can I help you evolve your therapy operations today?" };
    if (q.includes('price') || q.includes('cost') || q.includes('fee')) {
      return { 
        text: "We use a unique three-tiered pricing approach that customizes to your business size. As you grow, our management pricing structure actually reduces. This rewards your operational success.",
        cta: { text: "See Pricing Details", link: "/services/therapy-cost-reduction" }
      };
    }
    if (q.includes('revenue') || q.includes('money') || q.includes('100%')) {
      return { 
        text: "Our unique business model allows long-term care operators to retain 100% of their therapy revenue. Unlike traditional contractors, we don't take a cut of your clinical billing.",
        cta: { text: "Learn About Revenue Retention", link: "/services/optimal-therapy-outcomes" }
      };
    }
    if (q.includes('transition') || q.includes('in-house') || q.includes('inhouse')) {
      return { 
        text: "We specialize in seamless transitions from third-party contracts to efficient in-house models. We handle recruitment, credentialing, and clinical oversight with zero disruption to care.",
        cta: { text: "View Transition Roadmap", link: "/services/in-house-transition" }
      };
    }
    if (q.includes('state') || q.includes('where') || q.includes('location')) {
        return { 
          text: "Evolve currently provides clinical oversight and recruitment support across 17 states, including Ohio, Pennsylvania, Florida, and more. We are rapidly expanding our national footprint.",
          cta: { text: "View Coverage Map", link: "/locations" }
        };
      }
    if (q.includes('contact') || q.includes('call') || q.includes('email') || q.includes('talk') || q.includes('person') || q.includes('consult')) {
        return { 
          text: "I'd be happy to set that up! Our leadership team can provide a free clinical and financial analysis for your facility.",
          cta: { text: "Schedule Free Consultation", link: "/contact" }
        };
      }

    // 2. Generic Search in Knowledge Base
    let bestMatch = "";
    let matchCta = undefined;

    // Search Services
    const services = knowledge['services.json']?.showcase?.services || [];
    for (const s of services) {
        if (q.includes(s.title.toLowerCase()) || q.includes(s.slug.toLowerCase())) {
            bestMatch = s.desc;
            matchCta = { text: `Explore ${s.title}`, link: `/services/${s.slug}` };
            break;
        }
    }

    if (!bestMatch) {
        // Search FAQ
        const faqs = knowledge['settings.json']?.faq?.list || [];
        for (const f of faqs) {
            if (q.includes(f.q.toLowerCase())) {
                bestMatch = f.a;
                break;
            }
        }
    }

    if (bestMatch) return { text: bestMatch, cta: matchCta };

    return { 
      text: "That's a great question. While I specialize in therapy operations and management, for that specific inquiry, I'd recommend speaking directly with our leadership team.",
      cta: { text: "Connect with Evolve", link: "/contact" }
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
