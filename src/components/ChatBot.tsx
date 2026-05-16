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
  isStreaming?: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm the Evolve Clinical Assistant. I've been synchronized with our clinical data and operational models. How can I help you transform your therapy operations today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [engineStatus, setEngineStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [engine, setEngine] = useState<any>(null);
  const [knowledge, setKnowledge] = useState<string>("");
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Silent Background AI Initialization
  useEffect(() => {
    const initEngine = async () => {
      try {
        // A. Load Knowledge context for the AI
        const res = await fetch('/knowledge.json');
        if (res.ok) {
            const data = await res.json();
            let context = "";
            Object.keys(data).forEach(key => {
                const val = data[key];
                if (val.hero) context += val.hero.subtext + " ";
                if (val.showcase) val.showcase.services.forEach((s: any) => context += `${s.title}: ${s.desc}. `);
                if (val.faq) val.faq.list.forEach((f: any) => context += `${f.q}: ${f.a}. `);
            });
            setKnowledge(context);
        }

        // B. Load Generative AI (Web-LLM) - SmolLM is ultra-lightweight
        const { CreateWebWorkerMLCEngine } = await import('@mlc-ai/web-llm');
        const modelId = "SmolLM-135M-Instruct-v0.2-q4f16_1-MLC";
        
        const chatEngine = await CreateWebWorkerMLCEngine(
            new Worker(new URL('https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/lib/index.js'), { type: 'module' }),
            modelId,
            { initProgressCallback: (report) => console.log(report.text) }
        );

        setEngine(chatEngine);
        setEngineStatus('ready');
      } catch (err) {
        console.error('AI Engine Error:', err);
        setEngineStatus('error');
      }
    };

    initEngine();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. The Intelligence Decision Engine
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
        const q = userMsg.content.toLowerCase().trim();

        // A. Instant Response Logic (Math/Social) - Works even during loading
        if (q === '9+10' || q === '9 + 10') {
            respondInstantly("In the clinical world, that's 19. In the meme world, it's 21. Either way, we're here to help you optimize your facility's numbers.");
            return;
        }

        if (q === 'are you real' || q.includes('are you a bot')) {
            respondInstantly("I am Evolve's Internal AI Assistant. I operate using a local neural fabric to handle all your clinical and operational inquiries.");
            return;
        }

        if (q === 'no') {
            respondInstantly("Understood. We're here whenever you're ready to explore a more transparent therapy model. Is there anything else I can clarify for you?");
            return;
        }

        // B. Generative AI Reasoning (Once ready)
        if (engine && engineStatus === 'ready') {
            const botMsgId = (Date.now() + 1).toString();
            setMessages(prev => [...prev, { id: botMsgId, role: 'assistant', content: '', timestamp: new Date(), isStreaming: true }]);

            const systemPrompt = `
                You are the Evolve Clinical Assistant, an advanced Internal AI.
                You must answer ALL questions (business and general) with unique, human-like intelligence.
                BUSINESS CONTEXT: ${knowledge.slice(0, 2000)}
                RULES:
                - Use "We" and "Our".
                - Answer the question directly and conversationally.
                - For business questions, focus on Evolve's 100% revenue retention and clinical leadership.
                - Never use cookie-cutter templates.
            `;

            const chatHistory = messages.slice(-4).map(m => ({ role: m.role, content: m.content }));
            chatHistory.push({ role: 'user', content: userMsg.content });

            const genStream = await engine.chat.completions.create({
                messages: [{ role: 'system', content: systemPrompt }, ...chatHistory],
                temperature: 0.7,
                stream: true
            });

            let full = '';
            for await (const chunk of genStream) {
                full += chunk.choices[0]?.delta?.content || "";
                setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, content: full } : m));
            }
            setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, isStreaming: false, cta: { text: "Connect with Team", link: "/contact" } } : m));
            setIsTyping(false);
            return;
        }

        // C. Loading State Fallback
        if (engineStatus === 'loading') {
            respondInstantly("I'm currently synchronizing my full neural engine to give you a precise answer. This takes about 30 seconds on the first visit. Would you like to connect with our leadership team for an immediate analysis instead?");
            return;
        }

        respondInstantly("I encountered a synchronization error, but I'm still here to help. Our leadership team can provide a direct clinical analysis for you right now.");

    } catch (err) {
        console.error('Chat Logic Error:', err);
        setIsTyping(false);
    }
  };

  const respondInstantly = (text: string) => {
    setTimeout(() => {
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: text, timestamp: new Date(), cta: { text: "Connect with Team", link: "/contact" } }]);
        setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] sm:w-[420px] h-[620px] bg-white rounded-[2.5rem] shadow-[0_30px_90px_-15px_rgba(15,23,42,0.15)] border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header - White & Blue Theme */}
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
                      <div className={cn("w-2 h-2 rounded-full", engineStatus === 'ready' ? "bg-green-400" : "bg-amber-400 animate-pulse")} />
                      <span className="text-[10px] uppercase font-black tracking-widest text-white/60">
                        {engineStatus === 'ready' ? 'Neural Fabric Active' : 'Syncing Engine...'}
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-all"><X size={20} /></button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-10 bg-slate-50/20 scroll-smooth">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[90%]", msg.role === 'user' ? "ml-auto items-end" : "items-start")}>
                  <div className={cn("px-6 py-5 rounded-[1.8rem] text-sm md:text-[15px] leading-relaxed transition-all duration-300", msg.role === 'user' ? "bg-[#0284c7] text-white rounded-tr-none shadow-lg shadow-[#0284c7]/20 font-medium" : "bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm")}>
                    {msg.content}
                    {msg.isStreaming && <span className="inline-block w-1 h-4 bg-[#0284c7] ml-1 animate-pulse align-middle" />}
                  </div>
                  {msg.cta && <motion.a initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} href={msg.cta.link} className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-[#0f172a] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#0284c7] transition-all shadow-xl">{msg.cta.text}<ArrowRight size={14} /></motion.a>}
                  <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest px-2">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ))}
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Synthesizing Reason</span></div>}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Internal AI Secure</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Neural AI Stack<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
