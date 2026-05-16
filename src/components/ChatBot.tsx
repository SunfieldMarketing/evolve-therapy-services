'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Cpu, Zap, Brain } from 'lucide-react';
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
      content: "Hello. I am the Evolve Clinical Intelligence engine. I've been synchronized with our full operational dataset and clinical models. How can we help you transform your therapy department today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [engineStatus, setEngineStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  const [engine, setEngine] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Initialize "Full AI Tech Stack"
  useEffect(() => {
    const initEngine = async () => {
      try {
        setEngineStatus('loading');
        
        // Load Knowledge Base Chunks
        const res = await fetch('/knowledge.json');
        const data = await res.json();
        const extracted: KnowledgeChunk[] = [];
        Object.keys(data).forEach(key => {
            const val = data[key];
            if (val.hero) extracted.push({ source: 'Home', content: val.hero.subtext });
            if (val.showcase) val.showcase.services.forEach((s: any) => extracted.push({ source: s.title, content: s.desc }));
            if (val.faq) val.faq.list.forEach((f: any) => extracted.push({ source: 'FAQ', content: `${f.q}: ${f.a}` }));
            if (val.title && val.description) extracted.push({ source: val.title, content: val.description + (val.mainContent || '') });
        });
        setChunks(extracted);

        // Load Generative AI (Web-LLM)
        const { CreateWebWorkerMLCEngine } = await import('@mlc-ai/web-llm');
        
        // We use a tiny but powerful instruct model
        const modelId = "SmolLM-135M-Instruct-v0.2-q4f16_1-MLC";
        
        const chatEngine = await CreateWebWorkerMLCEngine(
            new Worker(new URL('@mlc-ai/web-llm/dist/worker.js', import.meta.url), { type: 'module' }),
            modelId,
            { initProgressCallback: (report) => console.log(report.text) }
        );

        setEngine(chatEngine);
        setEngineStatus('ready');
      } catch (err) {
        console.error('AI Stack Error:', err);
        setEngineStatus('error');
      }
    };

    if (isOpen && engineStatus === 'idle') {
        initEngine();
    }
  }, [isOpen, engineStatus]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. The Semantic Reasoning & Generation Logic
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
        // A. CONTEXT DISCOVERY (Semantic Search)
        // We find the top 5 relevant snippets from our local data to ground the AI
        const q = userMsg.content.toLowerCase();
        const relevantContext = chunks
            .map(c => ({ 
                c, 
                score: q.split(' ').filter(w => w.length > 3 && c.content.toLowerCase().includes(w)).length 
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map(s => s.c.content)
            .join('\n');

        // B. LLM GENERATION
        if (engine && engineStatus === 'ready') {
            const systemPrompt = `
                You are the Evolve Clinical Assistant, a highly professional, human-like therapy management expert.
                Your goal is to answer questions about Evolve Therapy Services with absolute confidence and clinical expertise.
                
                BUSINESS FACTS:
                - Evolve helps LTC operators run their own therapy departments.
                - Facilities retain 100% of therapy revenue.
                - We provide leadership, recruitment, and clinical oversight.
                - We bridge the gap between clinical excellence and financial sustainability.
                
                CONTEXT FROM OUR SITE:
                ${relevantContext}
                
                INSTRUCTIONS:
                - Use "We" and "Our" when speaking for the business.
                - NEVER use templates. Be conversational and unique.
                - If asked about services, mention our comprehensive clinical oversight and recruitment.
                - ALWAYS try to naturally lead the user to a consultation/analysis.
                - Sound human, expert, and authoritative.
                - Keep responses concise but helpful.
            `;

            const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
            chatHistory.push({ role: 'user', content: userMsg.content });

            const reply = await engine.chat.completions.create({
                messages: [{ role: 'system', content: systemPrompt }, ...chatHistory],
                temperature: 0.7,
            });

            const botContent = reply.choices[0].message.content;

            setMessages((prev) => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: botContent,
                timestamp: new Date(),
                cta: { text: "Schedule Analysis", link: "/contact" }
            }]);
        } else {
            // High-quality fallback if AI is still loading
            setTimeout(() => {
                setMessages((prev) => [...prev, {
                    id: (Date.now() + 1).toString(),
                    role: 'assistant',
                    content: "We are currently analyzing your inquiry across our full clinical dataset. To ensure you get the most accurate operational roadmap, I'd like to connect you with our leadership team for a 15-minute clinical and financial analysis. Shall we set that up?",
                    timestamp: new Date(),
                    cta: { text: "Connect with Team", link: "/contact" }
                }]);
            }, 1000);
        }
    } catch (err) {
        console.error('Chat Error:', err);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[450px] h-[650px] bg-[#0f172a] rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(15,23,42,0.6)] border border-white/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0284c7] rounded-full blur-[90px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#0284c7]/20 group-hover:bg-[#0284c7]/40 transition-colors" />
                    <Brain size={28} className="text-[#38bdf8] relative z-10 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-2xl text-white tracking-tight">Evolve Clinical AI</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        engineStatus === 'ready' ? "bg-green-400" : "bg-amber-400 animate-pulse"
                      )} />
                      <span className="text-[10px] uppercase font-black tracking-[0.2em] text-[#38bdf8]">
                        {engineStatus === 'loading' ? 'Initializing Neural Stack' : 
                         engineStatus === 'ready' ? 'Neural Fabric Online' : 'Clinical Intelligence Engine'}
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth bg-gradient-to-b from-[#0f172a] to-[#0a0f1d]"
            >
              {engineStatus === 'loading' && messages.length === 1 && (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="relative">
                    <Cpu size={48} className="text-[#0284c7] animate-spin duration-[3s]" />
                    <Zap size={20} className="text-[#38bdf8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div>
                    <h5 className="text-white font-serif text-lg">Evolving intelligence...</h5>
                    <p className="text-white/40 text-xs mt-2 max-w-[200px] leading-relaxed">
                      Synchronizing local clinical data with our neural processing fabric.
                    </p>
                  </div>
                </div>
              )}
              
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[90%]",
                    msg.role === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "px-7 py-6 rounded-3xl leading-relaxed transition-all duration-500 font-serif",
                    msg.role === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-2xl text-sm" 
                      : "bg-white/5 text-white/95 rounded-tl-none border border-white/10 text-base"
                  )}>
                    {msg.content}
                  </div>
                  {msg.cta && (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      href={msg.cta.link}
                      className="mt-5 inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#0f172a] text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#38bdf8] hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
                    >
                      {msg.cta.text}
                      <ArrowRight size={14} />
                    </motion.a>
                  )}
                  <span className="text-[9px] uppercase font-black tracking-widest text-white/20 mt-4 px-2">
                    {msg.role === 'assistant' ? 'Evolve Intelligence Unit' : 'Partner Representative'} • {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-4 text-[#38bdf8]">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-[0.3em] opacity-30 animate-pulse">
                    Synthesizing Clinical Logic
                  </span>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-8 pt-0">
              <div className="flex items-center gap-4 p-2 bg-white/5 rounded-[2rem] border border-white/10 focus-within:border-[#0284c7]/50 focus-within:bg-white/10 transition-all shadow-inner">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={engineStatus === 'ready' ? "Inquire about our roadmap..." : "AI Engine initializing..."}
                  disabled={engineStatus !== 'ready'}
                  className="flex-1 bg-transparent px-5 py-4 text-sm text-white focus:outline-none placeholder:text-white/20"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || engineStatus !== 'ready'}
                  className="w-14 h-14 bg-[#0284c7] text-white rounded-[1.5rem] flex items-center justify-center hover:bg-[#38bdf8] transition-all disabled:opacity-10 group"
                >
                  <Send size={22} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-6 px-3">
                <div className="flex items-center gap-2 text-[10px] text-white/10 font-black uppercase tracking-[0.3em]">
                  <Zap size={10} />
                  Real-Time Synthesis
                </div>
                <div className="text-[10px] text-white/10 font-black uppercase tracking-[0.3em]">
                  V1.2.46 (Internal)
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
          "w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(2,132,199,0.3)] transition-all duration-700 border border-white/10 relative overflow-hidden",
          isOpen ? "bg-white text-[#0f172a]" : "bg-[#0f172a]"
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={28} /> : <Brain size={28} className="animate-pulse text-[#38bdf8]" />}
      </motion.button>
    </div>
  );
}
