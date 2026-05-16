'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Sparkles, Cpu, ShieldCheck } from 'lucide-react';
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
      content: "Hi! I'm your Evolve Clinical Assistant. I've been synchronized with our clinical data and operational models. How can I help you transform your therapy department today?",
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
        
        // A. Load Knowledge Base (RAG)
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

        // B. Load Generative AI (Web-LLM)
        const { CreateWebWorkerMLCEngine } = await import('@mlc-ai/web-llm');
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

  // 2. The Internal AI Brain
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
        // Find Relevant Context
        const q = userMsg.content.toLowerCase();
        const context = chunks
            .map(c => ({ c, score: q.split(' ').filter(w => w.length > 3 && c.content.toLowerCase().includes(w)).length }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map(s => s.c.content)
            .join('\n');

        if (engine && engineStatus === 'ready') {
            const systemPrompt = `
                You are the Evolve Clinical Assistant, a helpful and expert AI for Evolve Therapy Services.
                PERSONA: Professional, clinical, confident, and human-like.
                BUSINESS CORE: We help LTC operators run their own therapy departments. Facilities keep 100% of revenue. We provide clinical leadership and recruitment.
                CONTEXT: ${context}
                
                RULES:
                - Use "We" and "Our".
                - Answer the question directly using the context provided.
                - Never use templates. Be conversational.
                - Always close by offering a strategy call or detailed analysis.
            `;

            const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
            chatHistory.push({ role: 'user', content: userMsg.content });

            // Using Streaming for "Real AI" feel
            const completion = await engine.chat.completions.create({
                messages: [{ role: 'system', content: systemPrompt }, ...chatHistory],
                temperature: 0.7,
            });

            const botContent = completion.choices[0].message.content;

            setMessages((prev) => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: botContent,
                timestamp: new Date(),
                cta: { text: "Schedule Analysis", link: "/contact" }
            }]);
        }
    } catch (err) {
        console.error('Chat Error:', err);
    } finally {
        setIsTyping(false);
    }
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
            {/* Header - Glassmorphism & Blue Theme */}
            <div className="p-6 bg-[#0284c7] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Bot size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg leading-tight tracking-tight">Evolve Assistant</h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        engineStatus === 'ready' ? "bg-green-400" : "bg-amber-400 animate-pulse"
                      )} />
                      <span className="text-[9px] uppercase font-black tracking-widest text-white/70">
                        {engineStatus === 'ready' ? 'Neural Fabric Online' : 'Initializing AI Stack'}
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
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/30 scroll-smooth">
              {engineStatus === 'loading' && messages.length === 1 && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-4 text-center">
                  <Cpu size={32} className="animate-spin text-[#0284c7]" />
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Optimizing Engine</p>
                    <p className="text-[9px] text-slate-400 max-w-[200px]">Downloading clinical models to your browser for private, local AI processing.</p>
                  </div>
                </div>
              )}
              
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[85%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn(
                    "px-5 py-4 rounded-3xl text-sm leading-relaxed transition-all duration-300",
                    msg.role === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-md font-medium" 
                      : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm"
                  )}>
                    {msg.content}
                  </div>
                  {msg.cta && (
                    <motion.a
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      href={msg.cta.link}
                      className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#0284c7] transition-all shadow-sm"
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
                  <span className="text-[9px] uppercase font-black tracking-[0.2em] opacity-60">
                    Neural Synthesis in Progress
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
                  placeholder={engineStatus === 'ready' ? "Ask anything..." : "AI initializing..."}
                  disabled={engineStatus !== 'ready'}
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || engineStatus !== 'ready'}
                  className="w-11 h-11 bg-[#0284c7] text-white rounded-xl flex items-center justify-center hover:bg-[#0f172a] transition-all disabled:opacity-30 shadow-lg shadow-[#0284c7]/20"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex items-center gap-2 text-[9px] text-slate-300 font-bold uppercase tracking-widest">
                  <ShieldCheck size={10} className="text-green-500" />
                  End-to-End Clinical Privacy
                </div>
                <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-black uppercase tracking-widest">
                  <Sparkles size={10} className="text-[#0284c7]" />
                  Neural AI
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
          "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500",
          isOpen ? "bg-[#0f172a] rotate-90" : "bg-[#0284c7]"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
