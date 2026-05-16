'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// We'll use a dynamic import for transformers to avoid SSR issues
let pipeline: any = null;

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
      text: "Hi! I'm your Evolve Clinical Assistant. I've been trained on our internal operations and therapy management models. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  const [qaPipeline, setQaPipeline] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Initialize Knowledge Base & AI Engine
  useEffect(() => {
    const init = async () => {
      try {
        // Load Knowledge
        const res = await fetch('/knowledge.json');
        const data = await res.json();
        const extracted: KnowledgeChunk[] = [];

        // Chunking
        const services = data['services.json']?.showcase?.services || [];
        services.forEach((s: any) => {
          extracted.push({ category: 'operational', source: s.title, content: s.desc, cta: { text: `Explore ${s.title}`, link: `/services/${s.slug}` } });
        });

        const faqs = data['settings.json']?.faq?.list || [];
        faqs.forEach((f: any) => {
            extracted.push({ category: 'general', source: 'FAQ', content: `${f.q}. ${f.a.replace(/^Answer:\s*/i, '')}` });
        });

        // Add more context from detailed pages
        Object.keys(data).forEach(key => {
            if (key.includes('therapy-') || key.includes('snf-') || key.includes('in-house-')) {
                const s = data[key];
                if (s.title && s.description) {
                    extracted.push({ category: 'clinical', source: s.title, content: `${s.title}: ${s.description} ${s.mainContent || ''}` });
                }
            }
        });

        setChunks(extracted);

        // Load AI Pipeline (Lazy load on first open or background)
        const { pipeline: transformersPipeline } = await import('@xenova/transformers');
        pipeline = transformersPipeline;
        
        // We use a small, efficient QA model
        const qa = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad');
        setQaPipeline(() => qa);
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

  // 2. The Internal AI Brain
  const processQuery = async (query: string) => {
    const q = query.toLowerCase().trim();

    // Sales Intent Hardcoding (For maximum punch)
    if (q.includes('why should we hire you') || q.includes('why choose') || q.includes('why us') || q.includes('why evolve')) {
        return {
          text: "We are the only partner in the LTC market that combines 20+ years of clinical expertise with a 100% revenue retention model. We manage the heavy lifting—recruitment, compliance, and clinical oversight—while you keep every dollar of your therapy revenue.",
          cta: { text: "Our Clinical Advantage", link: "/about" }
        };
    }

    if (q.includes('what do you do') || q.includes('simple terms') || q.includes('who are you') || q.includes('what is evolve')) {
        return {
          text: "We provide clinical and operational therapy management. We help LTC operators transition from expensive outside contractors to high-performing in-house models where the facility retains 100% of the revenue while we handle the clinical excellence.",
          cta: { text: "View Our Model", link: "/services" }
        };
    }

    // AI Semantic Retrieval & Extraction
    if (qaPipeline && chunks.length > 0) {
        setIsAiLoading(true);
        
        // Find best context
        const scored = chunks.map(chunk => {
            let score = 0;
            const words = q.split(' ').filter(w => w.length > 3);
            words.forEach(w => { if (chunk.content.toLowerCase().includes(w)) score++; });
            return { chunk, score };
        }).sort((a, b) => b.score - a.score);

        const bestContext = scored.slice(0, 3).map(s => s.chunk.content).join(' ');

        try {
            const result = await qaPipeline(query, bestContext);
            setIsAiLoading(false);

            if (result && result.answer && result.score > 0.1) {
                // We wrap the AI extraction in our "We" voice
                return {
                    text: `Based on our clinical model: We provide ${result.answer.charAt(0).toLowerCase() + result.answer.slice(1)}. We ensure this aligns with our goal of 100% revenue retention for your facility.`,
                    cta: scored[0].chunk.cta || { text: "Schedule Analysis", link: "/contact" }
                };
            }
        } catch (e) {
            setIsAiLoading(false);
        }
    }

    // Fallback: Smart Keyword Logic
    const keywords = q.split(' ').filter(w => w.length > 3);
    const bestMatch = chunks.find(c => keywords.some(k => c.content.toLowerCase().includes(k)));

    if (bestMatch) {
        return {
            text: `We specialize in exactly that. ${bestMatch.content}`,
            cta: bestMatch.cta || { text: "Learn More", link: "/contact" }
        };
    }

    return {
      text: "We want to make sure we give you a precise answer based on your facility's specific clinical data. Would you like to set up a 15-minute consultation with our leadership team?",
      cta: { text: "Connect with Evolve", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await processQuery(userMsg.text);
    
    setMessages((prev) => [...prev, {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: response.text,
      timestamp: new Date(),
      cta: response.cta,
    }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[600px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(15,23,42,0.15)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#0284c7] text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg leading-tight tracking-tight">Evolve Assistant</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] uppercase font-black tracking-widest text-white/70">
                        {qaPipeline ? 'Internal AI Active' : 'Loading Intelligence...'}
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-all">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[85%]", msg.type === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn(
                    "px-5 py-4 rounded-3xl text-sm leading-relaxed transition-all duration-300",
                    msg.type === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-md" 
                      : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm"
                  )}>
                    {msg.text}
                  </div>
                  {msg.cta && (
                    <motion.a
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      href={msg.cta.link}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#0284c7] transition-all"
                    >
                      {msg.cta.text}
                      <ArrowRight size={12} />
                    </motion.a>
                  )}
                  <span className="text-[9px] text-slate-400 mt-2 font-bold uppercase tracking-widest px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-3 text-[#0284c7]">
                  <Loader2 size={14} className="animate-spin" />
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-60">
                    {isAiLoading ? 'Analyzing Clinical Context...' : 'Processing...'}
                  </span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-2 p-1 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-[#0284c7]/30 transition-all">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-11 h-11 bg-[#0284c7] text-white rounded-xl flex items-center justify-center hover:bg-[#0f172a] transition-all disabled:opacity-30 shadow-lg shadow-[#0284c7]/20"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <Sparkles size={10} className="text-[#0284c7]" />
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Clinical Data Extraction Active</span>
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
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500",
          isOpen ? "bg-[#0f172a] rotate-90" : "bg-[#0284c7]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
