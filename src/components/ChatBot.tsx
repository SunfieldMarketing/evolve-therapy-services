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
  const [lastSubject, setLastSubject] = useState<string | null>(null);
  
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

  // 2. DIRECT SEMANTIC INTENT ENGINE (Brain 9.0 - Accuracy & Context)
  const getDirectResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!knowledge) return { text: "I'm analyzing the Evolve clinical database. One moment..." };

    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
    const facts = knowledge.facts || {};

    // --- INTENT GATES (Direct Answers) ---

    // 1. GREETINGS
    if (q === 'hi' || q === 'hello' || q === 'hey') {
        return { text: "Hello! I'm synchronized and ready to analyze your therapy operations. What can I help you solve today?" };
    }

    // 2. CONTACT / PHONE / REACH
    if (q.includes('number') || q.includes('phone') || q.includes('call') || q.includes('contact') || q.includes('reach')) {
        const phone = facts.contact?.phone || "800-XXX-XXXX";
        const email = facts.contact?.email || "info@evolvetherapy.com";
        return { 
            text: `You can reach our leadership team directly at ${phone} or via email at ${email}. We are ready to provide a full clinical analysis of your facility's operations. Would you like to schedule a call?`,
            cta: { text: "Connect Now", link: "/contact" }
        };
    }

    // 3. LOCATIONS (States)
    if (q.includes('state') || q.includes('location') || q.includes('operate') || q.includes('where')) {
        setLastSubject('locations');
        const states = facts.activeStates || [];
        const stateMatch = states.find((s: string) => q.includes(s.toLowerCase()));
        
        if (stateMatch) {
            return {
                text: `Yes, we are fully active in ${stateMatch}. Evolve provides regional management and operational oversight across ${states.length} states to ensure 100% compliance. Would you like to see our full operational map?`,
                cta: { text: "View Operational Map", link: "/locations" }
            };
        }
        return {
            text: `Evolve currently operates in ${states.length} states, including ${states.slice(0, 5).join(', ')}, and others. We provide the regional directors and clinical oversight needed to stabilize your department. Shall I list all the states we serve?`,
            cta: { text: "View All States", link: "/locations" }
        };
    }

    // 4. CONTEXTUAL FOLLOW-UP (e.g., "which ones", "list them")
    if ((q.includes('which') || q.includes('list') || q.includes('what are they')) && lastSubject === 'locations') {
        const states = facts.activeStates || [];
        return {
            text: `Our current footprint covers these ${states.length} states: ${states.join(', ')}. In these regions, we provide daily operational support to build high-performing in-house therapy teams. Would you like to see how we apply this to your specific region?`,
            cta: { text: "Request Strategy Session", link: "/contact" }
        };
    }

    // 5. SERVICES
    if (q.includes('service') || q.includes('do you do') || q.includes('help')) {
        setLastSubject('services');
        const s = facts.services || [];
        return {
            text: `We specialize in ${s.join(', ')}. Our core strength is the In-House Transition—we handle the recruitment and clinical education so you keep 100% of the revenue. Shall we discuss which of these would most impact your facility today?`,
            cta: { text: "Explore All Services", link: "/services" }
        };
    }

    // 6. GROWTH / RESULTS
    if (q.includes('grow') || q.includes('result') || q.includes('ebitda') || q.includes('improve')) {
        return {
            text: `We drive facility growth by optimizing your revenue retention—our partners, such as David Miller (CEO of Legacy Health Centers), have reported an average 22% increase. This is achieved by stabilizing your clinical labor mix and improving PDPM accuracy. Shall we look at your current Medicaid case mix together?`,
            cta: { text: "Request Strategy Session", link: "/contact" }
        };
    }

    // 7. MISC / SITE-WIDE SEARCH
    const keywords = q.split(' ').filter(w => w.length > 3);
    let bestMatch: any = null;
    Object.keys(knowledge).forEach(key => {
        if (key === 'facts') return;
        const content = JSON.stringify(knowledge[key]).toLowerCase();
        if (content.includes(q)) bestMatch = knowledge[key];
    });

    if (bestMatch) {
        const title = bestMatch.hero?.title || bestMatch.title || "Clinical Oversight";
        const detail = bestMatch.hero?.subtext || "operational excellence";
        return {
            text: `Regarding ${title}: Our model focuses on ${detail}. This ensures your department maintains 100% control and zero hidden management fees. Would it be helpful to have our leadership team review your current model?`,
            cta: { text: "Request Detailed Analysis", link: "/contact" }
        };
    }

    // FINAL FALLBACK
    return {
        text: "That's a vital operational inquiry. To provide a pinpoint accurate answer based on your specific census and labor mix, I'd like to connect you with our leadership team for a brief strategy analysis. Would that be helpful?",
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
        const response = getDirectResponse(userMsg.content);
        setMessages((prev) => [...prev, {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: response.text,
            timestamp: new Date(),
            cta: response.cta,
        }]);
        setIsTyping(false);
    }, 1100);
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
                        Direct Intent Active
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
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Direct Logic Mapping</span></div>}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Internal AI Secure</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Direct Intent Engine<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
