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
  embedding?: number[];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm the Evolve Clinical Assistant. Our ultra-lightweight neural engine is active and ready to assist you. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isAiReady, setIsAiReady] = useState(false);
  const [chunks, setChunks] = useState<KnowledgeChunk[]>([]);
  const [embedder, setEmbedder] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Ultra-Lightweight Neural Stack Initialization
  useEffect(() => {
    const initAi = async () => {
      try {
        console.log('[AI-INIT] Starting Stack Initialization...');
        
        // A. Load Knowledge Base with extreme safety
        let data: any = {};
        try {
            const res = await fetch('/knowledge.json');
            if (res.ok) {
                const text = await res.text();
                data = text ? JSON.parse(text) : {};
            }
        } catch (e) {
            console.warn('[AI-INIT] Knowledge fetch failed, using empty state', e);
        }
        
        const rawChunks: KnowledgeChunk[] = [];
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            Object.keys(data).forEach(key => {
                try {
                    const val = data[key];
                    if (!val) return;
                    if (val.hero?.subtext) rawChunks.push({ source: 'Home', content: val.hero.subtext });
                    if (val.showcase?.services) val.showcase.services.forEach((s: any) => rawChunks.push({ source: s.title, content: s.desc }));
                    if (val.faq?.list) val.faq.list.forEach((f: any) => rawChunks.push({ source: 'FAQ', content: `${f.q}. ${f.a.replace(/^Answer:\s*/i, '')}` }));
                    if (val.title && val.description) rawChunks.push({ source: val.title, content: `${val.description} ${val.mainContent || ''}` });
                } catch (err) {
                    console.error('[AI-INIT] Error processing chunk:', key, err);
                }
            });
        }

        // B. Load Tiny Embedding Model
        console.log('[AI-INIT] Loading Neural Model...');
        const { pipeline, env } = await import('@xenova/transformers');
        
        // Environment fixes for specific bundlers
        env.allowLocalModels = false;
        env.useBrowserCache = true;

        const model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        console.log('[AI-INIT] Neural Model Loaded.');
        
        // C. Pre-embed chunks
        const activeChunks = rawChunks.slice(0, 30); // Limiting for speed
        const embeddedChunks = await Promise.all(activeChunks.map(async (c) => {
            try {
                const output = await model(c.content, { pooling: 'mean', normalize: true });
                return { ...c, embedding: Array.from(output.data) as number[] };
            } catch (e) {
                console.error('[AI-INIT] Embedding error:', e);
                return c;
            }
        }));

        setChunks(embeddedChunks);
        setEmbedder(() => model);
        setIsAiReady(true);
        console.log('[AI-INIT] Stack Ready.');
      } catch (err) {
        console.error('[AI-INIT] CRITICAL ERROR:', err);
        // Fallback to basic state to prevent infinite initializing
        setIsAiReady(true);
      }
    };
    initAi();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const cosineSimilarity = (a: number[], b: number[]) => {
    if (!a || !b) return 0;
    return a.reduce((sum, val, i) => sum + val * b[i], 0);
  };

  const getNeuralResponse = async (query: string) => {
    const q = query.toLowerCase().trim();
    
    if (q === 'are you real' || q.includes('are you a bot') || q.includes('is this a person')) {
        return { text: "I am Evolve's Clinical AI. I operate entirely in your browser using a local neural intelligence stack. I'm here to provide precise data on therapy operations." };
    }

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) {
        return { text: "Hello! I'm synchronized with Evolve's clinical models. How can we help you explore our 100% revenue retention strategy today?" };
    }

    if (isAiReady && embedder) {
        try {
            const queryOutput = await embedder(query, { pooling: 'mean', normalize: true });
            const queryEmbedding = Array.from(queryOutput.data) as number[];

            const matches = chunks
                .filter(c => c.embedding)
                .map(chunk => ({
                    chunk,
                    similarity: cosineSimilarity(queryEmbedding, chunk.embedding!)
                }))
                .sort((a, b) => b.similarity - a.similarity);

            if (matches[0] && matches[0].similarity > 0.45) {
                const cleanContent = matches[0].chunk.content.replace(/Answer:\s*/i, '').trim();
                return { text: `According to our clinical resources: ${cleanContent}`, cta: { text: "View Details", link: "/contact" } };
            }
        } catch (e) {
            console.error('[AI-QUERY] Reasoning Error:', e);
        }
    }

    return { text: "That's a vital clinical inquiry. To give you the most accurate financial and operational roadmap, we recommend a 15-minute analysis with our leadership team.", cta: { text: "Connect with Leadership", link: "/contact" } };
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getNeuralResponse(userMsg.content);
    setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', content: response.text, timestamp: new Date(), cta: response.cta }]);
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
            className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-15px_rgba(15,23,42,0.15)] border border-slate-100 flex flex-col overflow-hidden"
          >
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
                      <div className={cn("w-2 h-2 rounded-full", isAiReady ? "bg-green-400" : "bg-amber-400 animate-pulse")} />
                      <span className="text-[10px] uppercase font-black tracking-widest text-white/60">Neural Stack Active</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all"><X size={20} /></button>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-10 bg-slate-50/20 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[90%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn("px-6 py-5 rounded-[1.8rem] text-sm md:text-[15px] leading-relaxed", msg.role === 'user' ? "bg-[#0284c7] text-white rounded-tr-none shadow-lg font-medium" : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm")}>{msg.content}</div>
                  {msg.cta && <motion.a initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} href={msg.cta.link} className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#0284c7] transition-all shadow-xl">{msg.cta.text}<ArrowRight size={14} /></motion.a>}
                  <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest px-2">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ))}
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Reasoning</span></div>}
            </div>

            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Local AI Inference</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Ultra-Lightweight<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
