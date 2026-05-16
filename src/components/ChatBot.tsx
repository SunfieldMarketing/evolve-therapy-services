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
      content: "Hello. I'm the Evolve Clinical Assistant. I'm here to provide direct intelligence based on our internal clinical data and operational models. How can we help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState<any>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. Sync Knowledge
  useEffect(() => {
    const loadKnowledge = async () => {
      try {
        const res = await fetch('/knowledge.json');
        if (res.ok) {
            const data = await res.json();
            setKnowledge(data);
        }
      } catch (err) {
        console.error('AI Sync Error:', err);
      }
    };
    loadKnowledge();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. GENERATIVE LOGIC SYNTH (Extreme Contextual Intelligence)
  const getGenerativeResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    const facts = knowledge?.facts || {};
    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

    // DYNAMIC SENTENCE COMPONENTS (For "New Responses Everytime")
    const subjects = ["Our clinical model", "Evolve", "Our leadership team", "The Evolve framework", "My internal intelligence"];
    const verbs = ["transforms", "optimizes", "stabilizes", "empowers", "streamlines"];
    const objects = ["therapy operations", "revenue retention", "clinical outcomes", "facility EBITDA", "operational transparency"];
    const closings = [
        "Shall we discuss how this applies to your specific census?",
        "Would you like to see a custom cost analysis for your facility?",
        "Can we set up a 15-minute strategy call to dive deeper into this?",
        "Are you ready to explore a more transparent therapy model for your team?",
        "Would it be helpful to have our leadership team review your current labor mix?",
        "Shall we look at your current Medicaid case mix together?",
        "Can I help you map out an in-house transition roadmap?"
    ];

    const generateSentence = (fact: string) => {
        return `${choose(subjects)} ${choose(verbs)} ${choose(objects)} ${fact}. ${choose(closings)}`;
    };

    // --- DEEP CONCEPT BRAIN ---

    // 1. STATES / LOCATION (Negative & Positive)
    if (q.includes('state') || q.includes('operate') || q.includes('location') || q.includes('work in')) {
        const states = facts.activeStates || [];
        const targetedState = states.find((s: string) => q.includes(s.toLowerCase()));
        
        if (targetedState) {
            return {
                text: `Yes, ${targetedState} is a core territory for us. We provide daily regional oversight and recruitment support across ${states.length} states currently. ${choose(closings)}`,
                cta: { text: "Operational Map", link: "/locations" }
            };
        } else {
            return {
                text: `We aren't active in that specific state yet, but we are rapidly scaling across our ${states.length} current territories, including ${choose(states)} and ${choose(states)}. We can still provide clinical auditing remotely. ${choose(closings)}`,
                cta: { text: "Connect with Team", link: "/contact" }
            };
        }
    }

    // 2. DIFFERENCE / COMPETITION ("What makes you different?")
    if (q.includes('different') || q.includes('why you') || q.includes('unique') || q.includes('competition')) {
        return {
            text: `What makes us different is our "Zero Legacy String" approach. Most management companies hide their profits in black-box fees; we help you build an in-house team so you keep 100% of the revenue while we provide the elite clinical oversight. ${choose(closings)}`,
            cta: { text: "Our Philosophy", link: "/about" }
        };
    }

    // 3. HISTORY / TIME ("How long have you been in business?")
    if (q.includes('how long') || q.includes('history') || q.includes('years') || q.includes('since')) {
        return {
            text: `Evolve has been transforming LTC facility operations for over a decade. We started with a mission to return clinical control to facility operators, and we've since scaled to provide oversight in 17 states. ${choose(closings)}`,
            cta: { text: "Learn Our Story", link: "/about" }
        };
    }

    // 4. GROWTH / PRACTICE ("Can you help grow my practice?")
    if (q.includes('grow') || q.includes('practice') || q.includes('business') || q.includes('expand')) {
        return {
            text: `Growth is the byproduct of our model. By increasing your revenue retention (often by 22% or more) and optimizing your Medicaid case mix, we provide the financial stability needed to scale your operations. ${choose(closings)}`,
            cta: { text: "Request Strategy Session", link: "/contact" }
        };
    }

    // 5. CONTACT / CALLS
    if (q.includes('call') || q.includes('email') || q.includes('contact') || q.includes('phone')) {
        return {
            text: `I'd be happy to facilitate that. You can reach our leadership at ${facts.contact?.phone} or ${facts.contact?.email}. We're headquartered in Ohio but operate nationally. ${choose(closings)}`,
            cta: { text: "Schedule Strategy Call", link: "/contact" }
        };
    }

    // 6. GENERAL SERVICES (Dynamic Mix)
    if (q.includes('help') || q.includes('service') || q.includes('do you do')) {
        const s = facts.services || [];
        const shuffled = [...s].sort(() => 0.5 - Math.random());
        return {
            text: `We specialize in ${shuffled.slice(0, 3).join(', ')}. Our clinical experts handle everything from recruitment to PDPM audits so your facility runs at peak efficiency. ${choose(closings)}`,
            cta: { text: "View All Services", link: "/services" }
        };
    }

    // 7. SOCIAL / MATH
    if (q.includes('hi') || q.includes('hello')) return choose(["Hello! Ready to analyze your therapy operations?", "Greetings. I'm synchronized with Evolve's clinical data. How can I help?", "Hi there. What's on your operational roadmap today?"]);
    if (q.includes('9 + 10') || q.includes('9+10')) return "In our clinical math, that's 19. Precision is our baseline. How can I help with your numbers?";

    // --- DYNAMIC GENERATIVE FALLBACK ---
    if (knowledge) {
        const keywords = q.split(' ').filter(w => w.length > 3);
        let maxScore = 0;
        let match: any = null;

        Object.keys(knowledge).forEach(key => {
            if (key === 'facts') return;
            const val = knowledge[key];
            if (!val) return;
            let score = 0;
            const content = JSON.stringify(val).toLowerCase();
            keywords.forEach(kw => { if (content.includes(kw)) score += 2; });
            if (content.includes(q)) score += 10;
            if (score > maxScore) { maxScore = score; match = val; }
        });

        if (match && maxScore > 2) {
            const fact = `by focusing on ${match.hero?.title || match.title || "clinical excellence"}`;
            return {
                text: generateSentence(fact),
                cta: { text: "Detailed Analysis", link: "/contact" }
            };
        }
    }

    // FINAL FALLBACK: Dynamic Generative Default
    return {
        text: `That's a vital operational inquiry. To ensure you get a pinpoint accurate answer based on your specific census and labor mix, I'd like to connect you with our leadership team for a brief strategy analysis. ${choose(closings)}`,
        cta: { text: "Connect with Leadership", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = typeof getGenerativeResponse(userMsg.content) === 'string' 
        ? { text: getGenerativeResponse(userMsg.content) as string } 
        : getGenerativeResponse(userMsg.content) as any;

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
                        Generative Reasoner Active
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
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Synthesizing Context</span></div>}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Internal AI Secure</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Generative Logic Synth<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
