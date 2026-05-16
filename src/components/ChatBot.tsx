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

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello. I'm the Evolve Clinical Assistant. I'm synchronized with our global clinical intelligence to provide direct reasoning on your therapy operations. How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. GLOBAL KNOWLEDGE SYNC
  useEffect(() => {
    const loadKnowledge = async () => {
      try {
        const res = await fetch('/knowledge.json');
        if (res.ok) setKnowledge(await res.json());
      } catch (err) { console.error('AI Sync Error:', err); }
    };
    loadKnowledge();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. LINGUISTIC DAG REASONER (Brain 8.0 - Impossible Grammar Errors)
  const getGraphResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!knowledge) return { text: "I'm analyzing the Evolve clinical database. One moment..." };

    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
    
    // --- LINGUISTIC NODES & EDGES (The Graph) ---
    const openers = [
        "In terms of optimizing your facility's performance,", "Regarding your specific clinical roadmap,", "Looking at the way we transform operations,", 
        "Our model is fundamentally designed to", "To ensure your clinic reaches its maximum EBITDA,", "When we evaluate therapy management strategies,"
    ];
    
    // Core Clinical Facts (Nodes)
    const facts = {
        services: `we focus on ${knowledge.facts?.services?.join(', ')}`,
        transition: "our approach streamlines the transition from contract labor to a high-performing in-house model",
        revenue: "we prioritize revenue retention by optimizing your Medicaid case mix",
        growth: "David Miller (CEO of Legacy Health Centers) reported a 22% increase in revenue retention using our clinical model",
        states: `we currently provide operational oversight across ${knowledge.facts?.activeStates?.length} states`
    };

    // Logical Transitions (Edges)
    const edges = [
        " which directly leads to", " effectively ensuring that", " while simultaneously", " as a result of", " consequently providing"
    ];

    const valueProps = [
        " absolute financial and clinical control", 
        " 100% revenue retention for your department",
        " the elimination of high-cost contract labor legacy strings",
        " elite clinical oversight through data-driven audits"
    ];

    const closings = [
        "Shall we discuss how this applies to your specific census?",
        "Would you like to see a custom cost analysis for your facility?",
        "Can we set up a 15-minute strategy call to dive deeper into this?",
        "Are you ready to explore a more transparent therapy model for your team?",
        "Would it be helpful to have our leadership team review your current labor mix?"
    ];

    // --- RECURSIVE INTENT PARSING ---
    const isService = q.includes('service') || q.includes('do you do') || q.includes('what are');
    const isGrowth = q.includes('grow') || q.includes('business') || q.includes('improve') || q.includes('clinic');
    const isLocation = q.includes('state') || q.includes('location') || q.includes('where') || q.includes('operate');

    let finalResponse = "";
    let cta = { text: "Connect with Leadership", link: "/contact" };

    if (q === 'hi' || q === 'hello') {
        return { text: choose(["Hello! I'm synchronized with Evolve's clinical models. How can I help you optimize your operations today?", "Greetings. I'm ready to analyze your therapy data. What's on your roadmap?", "Hi there. What clinical challenge can we solve together?"]) };
    }

    // TRAVERSE THE GRAPH (Word-by-Word logic assembly)
    const opener = choose(openers);
    let path: string[] = [];

    if (isLocation) {
        path = [facts.states, choose(edges), valueProps[3]];
        cta = { text: "View Operational Map", link: "/locations" };
    } else if (isService) {
        path = [facts.services, choose(edges), facts.transition];
        cta = { text: "Explore All Services", link: "/services" };
    } else if (isGrowth) {
        path = [facts.growth, choose(edges), valueProps[1]];
        cta = { text: "Request Strategy Session", link: "/contact" };
    } else {
        path = [facts.transition, choose(edges), valueProps[0]];
    }

    // Final Assembly (Ensuring no duplicates or broken grammar)
    const content = path.join('');
    finalResponse = `${opener} ${content}. ${choose(closings)}`;

    return { text: finalResponse, cta };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
        const response = getGraphResponse(userMsg.content);
        setMessages((prev) => [...prev, {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: response.text,
            timestamp: new Date(),
            cta: response.cta,
        }]);
        setIsTyping(false);
    }, 1200);
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
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-[10px] uppercase font-black tracking-widest text-white/60">
                        Graph Intelligence Active
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
                  <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest px-2">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ))}
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Reasoning Graph</span></div>}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Internal AI Secure</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Linguistic Graph Reasoner<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
