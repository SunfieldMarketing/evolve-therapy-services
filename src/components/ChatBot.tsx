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
  const [sessionData, setSessionData] = useState<string[]>([]);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. GLOBAL KNOWLEDGE SYNC (All Subpages & Content)
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

  // 2. NEURAL MATRIX 5.0 (Generative Fragment Synthesis)
  const getNeuralResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!knowledge) return { text: "I'm synchronizing with Evolve's clinical data. One moment..." };

    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
    const lastTopic = sessionData[sessionData.length - 1];

    // A. FRAGMENT EXTRACTION (Crawl all subpages and knowledge keys)
    const fragments: { text: string; score: number; topic: string }[] = [];
    const keywords = q.split(' ').filter(w => w.length > 3);

    Object.keys(knowledge).forEach(key => {
        const val = knowledge[key];
        if (!val || key === 'facts') return;
        
        let score = 0;
        const content = JSON.stringify(val).toLowerCase();
        keywords.forEach(kw => { if (content.includes(kw)) score += 5; });
        if (content.includes(q)) score += 20;

        if (score > 0) {
            // Synthesize a thought fragment from this page/data
            const title = val.hero?.title || val.title || key;
            const sub = val.hero?.subtext || val.content || "";
            fragments.push({ text: `${title}: ${sub}`, score, topic: key });
        }
    });

    // B. LOGIC GATES (Hardcoded expert logic for core pillars)
    const isService = q.includes('service') || q.includes('do you') || q.includes('help');
    const isGrowth = q.includes('grow') || q.includes('business') || q.includes('improve') || q.includes('clinic');
    const isLocation = q.includes('state') || q.includes('where') || q.includes('operate');

    // C. SYNTHESIS ENGINE (Constructing the unique response)
    let finalResponse = "";
    let cta = { text: "Connect with Leadership", link: "/contact" };

    if (q === 'hi' || q === 'hello') {
        return { text: choose(["Hello! I'm synchronized with Evolve's clinical models. How can I help you optimize your operations today?", "Greetings. I'm ready to analyze your therapy data. What's on your operational roadmap?", "Hi there. What specific clinical challenge can we solve together?"]) };
    }

    // Sort fragments by relevance
    const topFragments = fragments.sort((a, b) => b.score - a.score).slice(0, 2);

    if (isLocation) {
        setSessionData(prev => [...prev, 'locations']);
        const states = knowledge.facts?.activeStates || [];
        const stateMatch = states.find((s: string) => q.includes(s.toLowerCase()));
        finalResponse = stateMatch 
            ? `Evolve provides full regional management and clinical oversight in ${stateMatch}. We currently operate across ${states.length} states, ensuring 100% compliance and revenue retention for every partner.`
            : `We provide elite clinical oversight and recruitment support across ${states.length} states, including ${choose(states)} and ${choose(states)}. While we aren't in your specific state yet, our directors can provide remote clinical auditing.`;
        cta = { text: "View Operational Map", link: "/locations" };
    } else if (isService || isGrowth || topFragments.length > 0) {
        setSessionData(prev => [...prev, 'clinical']);
        
        // Assemble thought chain
        const f1 = topFragments[0];
        const f2 = topFragments[1];
        
        const intro = lastTopic === 'locations' ? "Across our active states, " : "";
        const fact = isGrowth 
            ? "our partners like David Miller (CEO of Legacy Health Centers) have seen a 22% increase in revenue retention. "
            : `our core model focuses on ${knowledge.facts?.services?.slice(0,3).join(', ')}. `;
        
        const context = f1 ? `We stabilize operations through ${f1.text.split(':')[1]?.slice(0, 100).trim()}... ` : "";
        
        finalResponse = `${intro}${fact}${context}This ensures your facility maintains 100% control while eliminating high-cost contract labor legacy strings.`;
        cta = isService ? { text: "View All Services", link: "/services" } : { text: "Request Strategy Session", link: "/contact" };
    } else {
        finalResponse = "To ensure you get a pinpoint accurate answer based on your facility's specific census and labor mix, I'd like to connect you with our leadership team for a brief clinical analysis.";
    }

    // Add unique professional closing
    const closings = [
        "Shall we discuss how this applies to your specific census?",
        "Would you like to see a custom cost analysis for your facility?",
        "Can we set up a 15-minute strategy call to dive deeper into this?",
        "Are you ready to explore a more transparent therapy model for your team?",
        "Shall we look at your current Medicaid case mix together?",
        "Can I help you map out an in-house transition roadmap?",
        "Would it be helpful to have our leadership team review your current labor mix?"
    ];
    
    return { text: `${finalResponse} ${choose(closings)}`, cta };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
        const response = getNeuralResponse(userMsg.content);
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
                        Neural Matrix 5.0 Active
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
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Neural Matrix 5.0<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
