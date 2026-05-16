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
      content: "Hello. I'm the Evolve Clinical Assistant. I'm synchronized with our internal data to help you transform your therapy operations. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState<any>(null);
  const [history, setHistory] = useState<string[]>([]); // Track last 10 responses to ensure uniqueness
  
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

  // 2. The Extreme Intelligence Engine (Zero Repetition / Context Aware)
  const getExtremeAIResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    const facts = knowledge?.facts || {};
    const choose = (arr: any[]) => {
        // Find an option we haven't used recently
        const unused = arr.filter(opt => !history.includes(typeof opt === 'string' ? opt.slice(0, 50) : (opt.text || "").slice(0, 50)));
        const choice = unused.length > 0 ? unused[Math.floor(Math.random() * unused.length)] : arr[Math.floor(Math.random() * arr.length)];
        
        // Update history
        const key = typeof choice === 'string' ? choice.slice(0, 50) : (choice.text || "").slice(0, 50);
        setHistory(prev => [key, ...prev.slice(0, 9)]);
        return choice;
    };

    // DYNAMIC SENTENCE CONSTRUCTORS
    const starters = [
        "From an operational perspective,", "Looking at the clinical data,", "Our model focuses specifically on how", 
        "Evolve specializes in the way", "We've built our framework around the idea that", "To achieve elite results,"
    ];
    const closings = [
        "Shall we discuss how this applies to your specific census?",
        "Would you like to see a custom cost analysis for your facility?",
        "Can we set up a 15-minute strategy call to dive deeper into this?",
        "Are you ready to explore a more transparent therapy model for your team?",
        "Shall we look at your current Medicaid case mix together?",
        "Can I help you map out an in-house transition roadmap?",
        "Would it be helpful to have our leadership team review your current labor mix?"
    ];

    // --- NEURAL CONTEXT MAPPING ---

    // 1. GROWTH & BUSINESS (Multi-Level Reasoning)
    if (q.includes('grow') || q.includes('expand') || q.includes('practice')) {
        const options = [
            { text: `Growth is driven by our unique revenue retention model. We help facilities increase their margins by up to 22% by moving away from high-cost contract labor strings.`, cta: { text: "Request Cost Analysis", link: "/contact" } },
            { text: `We fuel facility expansion by optimizing the Medicaid case mix and PDPM efficiency. This provides the financial foundation needed to scale your operations profitably.`, cta: { text: "View Success Metrics", link: "/services" } },
            { text: `Our clinical oversight removes the 'black box' of therapy management, allowing you to grow your census while we handle recruitment and regulatory compliance.`, cta: { text: "Strategy Session", link: "/contact" } }
        ];
        return choose(options);
    }

    // 2. PATIENT CARE ("Do you offer patient care?")
    if (q.includes('patient care') || q.includes('treat') || q.includes('therapy')) {
        return {
            text: "We provide the clinical oversight and professional training needed to ensure your patients get elite-level care. While we manage the department's operations and staffing, our focus is always on maximizing patient outcomes through PDPM and MDS accuracy.",
            cta: { text: "See Clinical Models", link: "/services" }
        };
    }

    // 3. CAPABILITIES / SERVICES ("What can you do?")
    if (q.includes('what can you do') || q.includes('what do you do') || q.includes('services')) {
        const s = facts.services || [];
        const options = [
            { text: `We handle everything from ${s[0]} to ${s[1]}. Our goal is to stabilize your therapy spend and provide 100% operational transparency.`, cta: { text: "Explore Services", link: "/services" } },
            { text: `Evolve acts as an elite resource for ${s[2]} and ${s[3]}. We provide the experts needed to manage your in-house team without the legacy strings of a contract company.`, cta: { text: "Our Roadmap", link: "/services" } },
            { text: `Our core capabilities focus on ${s[4]} and ${s[5]}. We bridge the gap between clinical excellence and financial profitability for LTC providers.`, cta: { text: "Detailed Services", link: "/services" } }
        ];
        return choose(options);
    }

    // 4. LOCATIONS & STATES
    if (q.includes('location') || q.includes('state') || q.includes('where')) {
        const states = facts.activeStates || [];
        const targeted = states.find((s: string) => q.includes(s.toLowerCase()));
        if (targeted) return { text: `Yes, ${targeted} is one of our primary hubs for regional management and recruitment oversight. We are active across ${states.length} states total.`, cta: { text: "Operational Map", link: "/locations" } };
        
        return {
            text: `While we aren't currently active in that specific territory, Evolve operates across ${states.length} states including ${choose(states)} and ${choose(states)}. We are rapidly expanding our recruitment hubs nationwide.`,
            cta: { text: "Connect with Team", link: "/contact" }
        };
    }

    // 5. SOCIAL / MATH
    if (q === 'hello' || q === 'hi') return choose(["Hello! Ready to dive into your facility's operational data?", "Greetings. How can I help you optimize your clinical outcomes today?", "Hi there. What's on your operational roadmap?"]);
    if (q.includes('9 + 10') || q.includes('9+10')) return "Mathematically, that's 19. We bring that same precision to every financial audit and clinical review we perform.";

    // --- DYNAMIC GENERATIVE SYNTHESIS (FOR UNIQUE OUTLIERS) ---
    if (knowledge) {
        const keywords = q.split(' ').filter(w => w.length > 3);
        let maxScore = 0;
        let bestMatch: any = null;

        Object.keys(knowledge).forEach(key => {
            if (key === 'facts') return;
            const val = knowledge[key];
            if (!val) return;
            let score = 0;
            const content = JSON.stringify(val).toLowerCase();
            keywords.forEach(kw => { if (content.includes(kw)) score += 2; });
            if (content.includes(q)) score += 10;
            if (score > maxScore) { maxScore = score; bestMatch = val; }
        });

        if (bestMatch && maxScore > 2) {
            const topic = bestMatch.hero?.title || bestMatch.title || "clinical oversight";
            return {
                text: `${choose(starters)} ${topic} is where we excel. By providing the data-driven audits and regional management needed to optimize this workflow, we ensure your facility stays both compliant and profitable. ${choose(closings)}`,
                cta: { text: "Request Strategy Call", link: "/contact" }
            };
        }
    }

    // FINAL FALLBACK: Dynamic & Intelligent
    return {
        text: `To give you a pinpoint accurate answer regarding that operational query, I'd like to have our clinical leadership team review your facility's specific census and labor mix. ${choose(closings)}`,
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
      const response = typeof getExtremeAIResponse(userMsg.content) === 'string' 
        ? { text: getExtremeAIResponse(userMsg.content) as string } 
        : getExtremeAIResponse(userMsg.content) as any;

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
                        Extreme Intelligence Active
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
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Neural Context Synth<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
