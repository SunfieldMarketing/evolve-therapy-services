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
      content: "Hello. I'm the Evolve Clinical Assistant. Our ultra-lightweight neural engine is active and synchronized with our business data. How can I help you today?",
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
        // A. Load Knowledge Base
        const res = await fetch('/knowledge.json');
        if (!res.ok) return;
        const data = await res.json();
        const rawChunks: KnowledgeChunk[] = [];
        Object.keys(data).forEach(key => {
            const val = data[key];
            if (!val) return;
            if (val.hero?.subtext) rawChunks.push({ source: 'Home', content: val.hero.subtext });
            if (val.showcase?.services) val.showcase.services.forEach((s: any) => rawChunks.push({ source: s.title, content: s.desc }));
            if (val.faq?.list) val.faq.list.forEach((f: any) => rawChunks.push({ source: 'FAQ', content: `${f.q}. ${f.a.replace(/^Answer:\s*/i, '')}` }));
            if (val.title && val.description) rawChunks.push({ source: val.title, content: `${val.description} ${val.mainContent || ''}` });
        });

        // B. Load Tiny Embedding Model (Only 14MB)
        const { pipeline } = await import('@xenova/transformers');
        const model = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        
        // C. Pre-embed chunks for instant neural search
        // We limit to 50 chunks for "ultra-lightweight" performance
        const activeChunks = rawChunks.slice(0, 50);
        const embeddedChunks = await Promise.all(activeChunks.map(async (c) => {
            const output = await model(c.content, { pooling: 'mean', normalize: true });
            return { ...c, embedding: Array.from(output.data) as number[] };
        }));

        setChunks(embeddedChunks);
        setEmbedder(() => model);
        setIsAiReady(true);
      } catch (err) {
        console.error('AI Stack Error:', err);
      }
    };
    initAi();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. Vector Similarity Engine (Cosine Similarity)
  const cosineSimilarity = (a: number[], b: number[]) => {
    return a.reduce((sum, val, i) => sum + val * b[i], 0);
  };

  const getNeuralResponse = async (query: string) => {
    const q = query.toLowerCase().trim();
    
    // A. Social & Identity Hard-Coding (For immediate personality)
    if (q === 'are you real' || q.includes('are you a bot') || q.includes('is this a person')) {
        return {
            text: "I am Evolve's Clinical AI Assistant. I'm a real neural intelligence unit running entirely in your browser, built to help you optimize therapy operations. If you'd like to speak with our human leadership, I can set that up instantly."
        };
    }

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey')) {
        return { text: "Hello! Our clinical oversight and 100% revenue retention models are ready for your review. What can I clarify for you today?" };
    }

    // B. Neural Vector Search
    if (isAiReady && embedder) {
        const queryOutput = await embedder(query, { pooling: 'mean', normalize: true });
        const queryEmbedding = Array.from(queryOutput.data) as number[];

        const matches = chunks
            .map(chunk => ({
                chunk,
                similarity: chunk.embedding ? cosineSimilarity(queryEmbedding, chunk.embedding) : 0
            }))
            .sort((a, b) => b.similarity - a.similarity);

        const topMatch = matches[0];

        // If we have high semantic confidence (> 0.4 for this tiny model)
        if (topMatch && topMatch.similarity > 0.45) {
            const cleanContent = topMatch.chunk.content.replace(/Answer:\s*/i, '').replace(/Regarding that:\s*/i, '').trim();
            return {
                text: `Based on our clinical dataset: ${cleanContent}`,
                cta: { text: "Learn More", link: "/contact" }
            };
        }
    }

    // C. Fallback (Conversational & Professional)
    return {
      text: "That's a specific inquiry about LTC therapy operations. To ensure you get a pinpoint clinical and financial roadmap, I'd like to connect you with our team for a 15-minute analysis. Shall we proceed?",
      cta: { text: "Connect with Team", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const response = await getNeuralResponse(userMsg.content);
    
    setMessages((prev) => [...prev, {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response.text,
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
            className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-15px_rgba(15,23,42,0.15)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
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
                      <span className="text-[10px] uppercase font-black tracking-widest text-white/60">
                        {isAiReady ? 'Neural Stack Active' : 'Initializing AI...'}
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all">
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
                  <Loader2 size={16} className="animate-spin" />
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
                  placeholder="Ask anything..."
                  className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] transition-all disabled:opacity-20 shadow-lg shadow-[#0284c7]/20"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-green-500" />
                  Local AI Inference
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest">
                  <Zap size={10} className="text-[#0284c7]" />
                  Ultra-Lightweight
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
