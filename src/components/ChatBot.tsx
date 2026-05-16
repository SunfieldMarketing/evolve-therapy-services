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
      content: "Hello. I'm the Evolve Clinical Assistant. I'm synchronized with our internal data to provide you with unique, direct intelligence on therapy management. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState<any>(null);
  const [sessionContext, setSessionContext] = useState<string[]>([]);
  
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

  // 2. THE CURATED REASONER (Extreme Uniqueness & Contextual Depth)
  const getCuratedResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    const facts = knowledge?.facts || {};
    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

    // DYNAMIC VOCABULARY & PHRASING (100+ Combinations)
    const perspectives = [
        "From an operational standpoint,", "Clinically speaking,", "Our data indicates that", 
        "The Evolve philosophy is built on the fact that", "In terms of facility EBITDA,",
        "Regarding your clinical labor mix,", "Looking at the 100% revenue retention model,"
    ];
    const adverbs = ["transparently", "precisely", "effectively", "authoritatively", "seamlessly", "expertly", "rigorously"];
    const verbs = ["transforms", "stabilizes", "optimizes", "streamlines", "secures", "drives", "empowers", "redefines"];
    const professionalClosings = [
        "Shall we discuss how this applies to your specific census?",
        "Would you like to see a custom cost analysis for your facility?",
        "Can we set up a 15-minute strategy call to dive deeper into this?",
        "Are you ready to explore a more transparent therapy model for your team?",
        "Shall we look at your current Medicaid case mix together?",
        "Can I help you map out an in-house transition roadmap?",
        "Would it be helpful to have our leadership team review your current labor mix?"
    ];

    // CONTEXTUAL MEMORY (Linking previous asks to the current answer)
    const contextLink = sessionContext.length > 0 ? `Building on our discussion about ${sessionContext[sessionContext.length-1]}, ` : "";

    // --- RECURSIVE CONCEPT MAPPING ---

    // 1. LOCATION & STATES (Curated with Negative Context)
    if (q.includes('state') || q.includes('location') || q.includes('operate') || q.includes('where')) {
        const states = facts.activeStates || [];
        const stateMatch = states.find((s: string) => q.includes(s.toLowerCase()));
        setSessionContext(prev => [...prev, "locations"]);

        if (stateMatch) {
            return {
                text: `${contextLink}${choose(perspectives)} we maintain ${choose(adverbs)} strong regional hubs in ${stateMatch} and ${states.length-1} other territories. Our directors provide the daily oversight needed to ${choose(verbs)} your therapy operations. ${choose(professionalClosings)}`,
                cta: { text: "View Operational Map", link: "/locations" }
            };
        }
        return {
            text: `${contextLink}${choose(perspectives)} while we aren't active in that specific territory yet, we ${choose(adverbs)} manage clinical oversight across ${states.length} states including ${choose(states)} and ${choose(states)}. We can still provide a remote clinical audit for your facility. ${choose(professionalClosings)}`,
            cta: { text: "Connect with Team", link: "/contact" }
        };
    }

    // 2. RESULTS & PERFORMANCE (Citing Source Directly)
    if (q.includes('result') || q.includes('benefit') || q.includes('good') || q.includes('improve') || q.includes('proof')) {
        setSessionContext(prev => [...prev, "performance"]);
        return {
            text: `${contextLink}${choose(perspectives)} our partners like Legacy Health Centers have seen their revenue retention ${choose(verbs)} by 22%. This is achieved by ${choose(adverbs)} optimizing your labor mix and PDPM accuracy. ${choose(professionalClosings)}`,
            cta: { text: "Detailed Case Study", link: "/about" }
        };
    }

    // 3. CAPABILITIES & VALUE ("What do you do?", "Difference")
    if (q.includes('what do you do') || q.includes('service') || q.includes('different') || q.includes('help')) {
        const s = facts.services || [];
        setSessionContext(prev => [...prev, "services"]);
        return {
            text: `${contextLink}${choose(perspectives)} we ${choose(adverbs)} ${choose(verbs)} the transition from contract therapy to a high-performing in-house model. Our core focus is ${choose(s)}, ensuring you maintain 100% control and zero hidden management fees. ${choose(professionalClosings)}`,
            cta: { text: "View All Services", link: "/services" }
        };
    }

    // 4. SOCIAL & LOGIC
    if (q === 'hi' || q === 'hello') return choose(["Hello! I'm synchronized and ready to analyze your therapy data. What's on your mind?", "Greetings. How can I help you transform your operations today?", "Hi! What clinical challenge can we solve together?"]);
    if (q.includes('9 + 10') || q.includes('9+10')) return `In clinical math, that's 19. Precision is how we ${choose(adverbs)} ${choose(verbs)} your facility's financial health.`;

    // --- DYNAMIC CONCEPT SYNTHESIS (FOR UNIQUE INQUIRIES) ---
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
            const topic = match.hero?.title || match.title || "therapy oversight";
            return {
                text: `${contextLink}${choose(perspectives)} ${topic} is a key area where we ${choose(adverbs)} ${choose(verbs)} facility EBITDA. We specialize in mapping this to your specific clinical labor mix. ${choose(professionalClosings)}`,
                cta: { text: "Request Strategy Session", link: "/contact" }
            };
        }
    }

    // FINAL FALLBACK: CUSTOM & DIRECT
    return {
        text: `${contextLink}${choose(perspectives)} to ensure you get a ${choose(adverbs)} accurate answer tailored to your specific facility, I'd recommend a 15-minute strategy call with our leadership team. ${choose(professionalClosings)}`,
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
      const response = typeof getCuratedResponse(userMsg.content) === 'string' 
        ? { text: getCuratedResponse(userMsg.content) as string } 
        : getCuratedResponse(userMsg.content) as any;

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
                        Curated Intelligence Active
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
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Curating Context</span></div>}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Internal AI Secure</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Curated Logic Reasoner<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
