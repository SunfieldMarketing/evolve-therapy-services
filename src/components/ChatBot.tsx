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

  // 2. THE SEMANTIC TEMPLATE ENGINE (Brain 7.0 - Human-Like Flow)
  const getSemanticResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!knowledge) return { text: "I'm analyzing the Evolve clinical database. One moment..." };

    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
    const shuffle = (arr: any[]) => [...arr].sort(() => 0.5 - Math.random());

    // --- SEMANTIC BLOCKS (Grammatically Perfect Phrases) ---
    const openers = [
        "In terms of optimizing your facility's performance,", "Regarding your specific clinical roadmap,", "Looking at the way we transform operations,", 
        "Our model is fundamentally designed to", "To ensure your clinic reaches its maximum EBITDA,", "When we evaluate therapy management strategies,"
    ];
    const explanations = [
        "we focus on stabilizing clinical oversight through data-driven audits", 
        "our approach streamlines the transition from contract labor to an in-house model",
        "we prioritize revenue retention by optimizing your Medicaid case mix",
        "the goal is to eliminate high-cost contract labor while maintaining 100% control",
        "we empower your department by building an elite clinical leadership structure"
    ];
    const evidence = [
        "which has resulted in a 22% increase in revenue retention for partners like Legacy Health Centers",
        "ensuring that every clinical dollar is maximized through PDPM and MDS accuracy",
        "across our current footprint of 17 active states, including Ohio and New Jersey",
        "by leveraging our Zero Legacy String model to remove hidden management fees"
    ];
    const closings = [
        "Shall we discuss how this applies to your specific census?",
        "Would you like to see a custom cost analysis for your facility?",
        "Can we set up a 15-minute strategy call to dive deeper into this?",
        "Are you ready to explore a more transparent therapy model for your team?",
        "Would it be helpful to have our leadership team review your current labor mix?"
    ];

    // --- RECURSIVE CONTEXT MINING ---
    const isService = q.includes('service') || q.includes('do you do') || q.includes('what are');
    const isGrowth = q.includes('grow') || q.includes('business') || q.includes('improve') || q.includes('practice');
    const isLocation = q.includes('state') || q.includes('location') || q.includes('where') || q.includes('operate');

    let finalResponse = "";
    let cta = { text: "Connect with Leadership", link: "/contact" };

    if (q === 'hi' || q === 'hello') {
        return { text: choose(["Hello! I'm synchronized with Evolve's clinical models. How can I help you optimize your operations today?", "Greetings. I'm ready to analyze your therapy data. What's on your operational roadmap?", "Hi there. What specific clinical challenge can we solve together?"]) };
    }

    if (isLocation) {
        const states = knowledge.facts?.activeStates || [];
        const match = states.find((s: string) => q.includes(s.toLowerCase()));
        const stateIntro = match ? `Yes, we are fully active in ${match}. ` : `Currently, Evolve manages clinical oversight across ${states.length} states. `;
        finalResponse = `${stateIntro}We specialize in providing the regional management and recruitment support needed to ${choose(explanations)}.`;
        cta = { text: "View Operational Map", link: "/locations" };
    } else if (isService) {
        const s = shuffle(knowledge.facts?.services || []);
        finalResponse = `${choose(openers)} we specialize in ${s[0]}, ${s[1]}, and ${s[2]}. This approach ${choose(explanations)} ${choose(evidence)}.`;
        cta = { text: "Explore All Services", link: "/services" };
    } else if (isGrowth) {
        finalResponse = `${choose(openers)} we ${choose(explanations)}. This strategy is ${choose(evidence)} to ensure your facility maintains absolute financial and clinical control.`;
        cta = { text: "Request Strategy Session", link: "/contact" };
    } else {
        // Dynamic search for specific site-wide intelligence
        const keywords = q.split(' ').filter(w => w.length > 3);
        let bestMatch: any = null;
        Object.keys(knowledge).forEach(key => {
            if (key === 'facts') return;
            const content = JSON.stringify(knowledge[key]).toLowerCase();
            if (content.includes(q)) bestMatch = knowledge[key];
        });

        if (bestMatch) {
            const title = bestMatch.hero?.title || bestMatch.title || "Clinical Optimization";
            finalResponse = `Regarding ${title}, ${choose(explanations)}. This ensures your department performs at an elite level ${choose(evidence)}.`;
        } else {
            finalResponse = `To provide a pinpoint accurate roadmap based on your specific census and labor mix, I'd like to have our leadership team provide a brief clinical analysis.`;
        }
    }

    return { 
        text: `${finalResponse} ${choose(closings)}`, 
        cta 
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
        const response = getSemanticResponse(userMsg.content);
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
                        Semantic Engine Active
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
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Semantic Template Engine<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
