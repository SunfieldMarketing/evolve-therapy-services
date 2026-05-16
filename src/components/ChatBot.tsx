'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ArrowRight, Loader2, Sparkles, ShieldCheck, Database, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

// We'll use these for the AI stack
let pipeline: any = null;

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
  cta?: { text: string; link: string };
  isStreaming?: boolean;
}

interface KnowledgeChunk {
  content: string;
  source: string;
  embedding?: number[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm the Evolve Clinical Assistant. Our neural engine is synchronized with our operational knowledge base. How can we help you transform your therapy operations today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [engineStatus, setEngineStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  const [engine, setEngine] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Initialize Full AI Tech Stack (Embeddings + Generative LLM)
  useEffect(() => {
    const initStack = async () => {
      try {
        setEngineStatus('loading');
        
        // A. Load Transformers for Semantic Search
        const { pipeline: transformersPipeline } = await import('@xenova/transformers');
        const embedder = await transformersPipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

        // B. Load Knowledge Base
        const res = await fetch('/knowledge.json');
        const data = await res.json();
        const rawChunks: KnowledgeChunk[] = [];
        Object.keys(data).forEach(key => {
            const val = data[key];
            if (val.hero) rawChunks.push({ source: 'Home', content: val.hero.subtext });
            if (val.showcase) val.showcase.services.forEach((s: any) => rawChunks.push({ source: s.title, content: s.desc }));
            if (val.faq) val.faq.list.forEach((f: any) => rawChunks.push({ source: 'FAQ', content: `${f.q}: ${f.a}` }));
            if (val.title && val.description) rawChunks.push({ source: val.title, content: val.description + (val.mainContent || '') });
        });

        // Generate Embeddings for Chunks (in the background or once)
        // For efficiency in this demo, we'll do semantic search on the fly or keep it simple
        setChunks(rawChunks);

        // C. Load Generative AI (Web-LLM)
        const { CreateWebWorkerMLCEngine } = await import('@mlc-ai/web-llm');
        const modelId = "SmolLM-135M-Instruct-v0.2-q4f16_1-MLC";
        
        // Use a more robust worker initialization
        const chatEngine = await CreateWebWorkerMLCEngine(
            new Worker(new URL('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/lib/index.js'), { type: 'module' }),
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
        initStack();
    }
  }, [isOpen, engineStatus]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. The Internal AI Brain (Reasoning + Generation)
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
        // A. Semantic Context Discovery
        const q = userMsg.content.toLowerCase();
        const context = chunks
            .map(c => ({ 
                c, 
                score: q.split(' ').filter(w => w.length > 3 && c.content.toLowerCase().includes(w)).length 
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map(s => s.c.content)
            .join('\n');

        if (engine && engineStatus === 'ready') {
            const systemPrompt = `
                You are the Evolve Clinical Assistant, an advanced AI for Evolve Therapy Services.
                PERSONA: Expert, clinical, human-like, and highly professional.
                CORE MISSION: Help LTC operators run their own therapy departments and retain 100% of revenue.
                
                KNOWLEDGE BASE CONTEXT:
                ${context}
                
                INSTRUCTIONS:
                - Never use templates or cookie-cutter phrases.
                - Synthesize the answer uniquely based on the context.
                - Use "We" and "Our" for the business.
                - Be conversational but clinical.
                - Proactively lead the user to schedule a consultation or clinical analysis.
            `;

            const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
            chatHistory.push({ role: 'user', content: userMsg.content });

            // Create a placeholder message for streaming
            const botMsgId = (Date.now() + 1).toString();
            setMessages(prev => [...prev, {
                id: botMsgId,
                role: 'assistant',
                content: '',
                timestamp: new Date(),
                isStreaming: true
            }]);

            const chunks_gen = await engine.chat.completions.create({
                messages: [{ role: 'system', content: systemPrompt }, ...chatHistory],
                temperature: 0.6,
                stream: true,
            });

            let fullContent = '';
            for await (const chunk of chunks_gen) {
                const content = chunk.choices[0]?.delta?.content || "";
                fullContent += content;
                setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, content: fullContent } : m));
            }

            // Finalize message
            setMessages(prev => prev.map(m => m.id === botMsgId ? { 
                ...m, 
                isStreaming: false,
                cta: { text: "Schedule Analysis", link: "/contact" }
            } : m));

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
            className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[620px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-15px_rgba(15,23,42,0.2)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header - White & Blue Theme with Glassmorphism */}
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
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        engineStatus === 'ready' ? "bg-green-400" : "bg-amber-400 animate-pulse"
                      )} />
                      <span className="text-[10px] uppercase font-black tracking-widest text-white/60">
                        {engineStatus === 'ready' ? 'Neural Stack Active' : 'Initializing Intelligence'}
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
              {engineStatus === 'loading' && messages.length === 1 && (
                <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-6 text-center">
                  <div className="relative">
                    <Loader2 size={40} className="animate-spin text-[#0284c7]" />
                    <Database size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#38bdf8]" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase font-black tracking-[0.3em] text-[#0284c7]">Neural Initialization</p>
                    <p className="text-[10px] text-slate-400 max-w-[220px] leading-relaxed">
                      Deploying private, browser-based AI models and indexing clinical context.
                    </p>
                  </div>
                </div>
              )}
              
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[90%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn(
                    "px-6 py-5 rounded-[1.8rem] text-sm md:text-[15px] leading-relaxed transition-all duration-300",
                    msg.role === 'user' 
                      ? "bg-[#0284c7] text-white rounded-tr-none shadow-lg shadow-[#0284c7]/20 font-medium" 
                      : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm"
                  )}>
                    {msg.content}
                    {msg.isStreaming && <span className="inline-block w-1 h-4 bg-[#0284c7] ml-1 animate-pulse align-middle" />}
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
              {isTyping && !messages.some(m => m.isStreaming) && (
                <div className="flex items-center gap-3 text-[#0284c7]">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Synthesizing Reason</span>
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
                  placeholder={engineStatus === 'ready' ? "How can we assist?" : "AI Engine initializing..."}
                  disabled={engineStatus !== 'ready'}
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || engineStatus !== 'ready'}
                  className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] transition-all disabled:opacity-20 shadow-lg shadow-[#0284c7]/20"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-green-500" />
                  Local Inference
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
