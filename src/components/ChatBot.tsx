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
  const [sessionContext, setSessionContext] = useState<string[]>([]);
  
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

    // Listen for mobile trigger
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-chatbot', handleOpen);

    return () => {
      window.removeEventListener('open-chatbot', handleOpen);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 2. FULL HISTORY SEMANTIC WINDOW (History-Aware Logic)
  const getThreadedResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    if (!knowledge) return { text: "I'm analyzing the Evolve clinical database. One moment..." };

    const facts = knowledge.facts || {};
    const chatLog = messages.map(m => m.content.toLowerCase()).join(' ');
    const choose = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

    // TRACK SESSION TOPICS
    const updateContext = (topic: string) => {
        if (!sessionContext.includes(topic)) setSessionContext(prev => [...prev, topic]);
    };

    // --- CONTEXTUAL DETECTION ---
    const wasDiscussingStates = chatLog.includes('state') || chatLog.includes('operate') || chatLog.includes('where');
    const wasDiscussingServices = chatLog.includes('service') || chatLog.includes('do you do') || chatLog.includes('help');
    const wasDiscussingPerformance = chatLog.includes('grow') || chatLog.includes('result') || chatLog.includes('ebitda');

    // --- INTENT GATES (Direct Answers + Context) ---

    // 1. GREETINGS
    if (q === 'hi' || q === 'hello' || q === 'hey') {
        return { text: "Hello! I'm synchronized and ready to dive deeper into your therapy operations. What specific clinical challenge can we address next?" };
    }

    // 2. CONTACT / PHONE (High Priority)
    if (q.includes('number') || q.includes('phone') || q.includes('call') || q.includes('contact')) {
        return { 
            text: `You can reach our leadership team directly at ${facts.contact?.phone || '800-XXX-XXXX'}. We can provide a detailed clinical analysis of your specific facility. Would you like to schedule a strategy call?`,
            cta: { text: "Connect Now", link: "/contact" }
        };
    }

    // 3. LOCATIONS & STATES
    if (q.includes('state') || q.includes('location') || q.includes('where') || q.includes('operate') || (q.includes('which') && wasDiscussingStates)) {
        updateContext('locations');
        const states = facts.activeStates || [];
        const stateMatch = states.find((s: string) => q.includes(s.toLowerCase()));

        if (stateMatch) {
            return {
                text: `Yes, we maintain full operational oversight in ${stateMatch}. Across our entire 17-state footprint, we ensure 100% clinical compliance and revenue retention. Would you like to see our regional directors' coverage map?`,
                cta: { text: "View Operational Map", link: "/locations" }
            };
        }

        const bridge = wasDiscussingServices ? "Building on our services, " : "";
        return {
            text: `${bridge}Evolve currently provides regional management in these ${states.length} states: ${states.join(', ')}. In every region we serve, we focus on transitioning facilities to high-performing in-house models. Shall we discuss how we support your specific region?`,
            cta: { text: "View Coverage Map", link: "/locations" }
        };
    }

    // 4. GROWTH & PERFORMANCE
    if (q.includes('grow') || q.includes('result') || q.includes('ebitda') || q.includes('improve') || (q.includes('help') && wasDiscussingPerformance)) {
        updateContext('performance');
        const bridge = wasDiscussingStates ? "Within those active states, " : wasDiscussingServices ? "Through those clinical optimizations, " : "";
        
        // Anti-Redundancy: Use different facts if already mentioned
        const fact = chatLog.includes('david miller') 
            ? "we drive facility growth by stabilizing your clinical labor mix and improving PDPM accuracy to eliminate high-cost contract labor."
            : "our clinical partners, such as David Miller (CEO of Legacy Health Centers), have reported an average 22% increase in revenue retention after implementing our model.";

        return {
            text: `${bridge}${fact} This ensures your facility keeps 100% of the therapy revenue. Shall we look at your current Medicaid case mix together?`,
            cta: { text: "Request Strategy Session", link: "/contact" }
        };
    }

    // 5. SERVICES & CAPABILITIES
    if (q.includes('service') || q.includes('do you do') || q.includes('what can you') || (q.includes('help') && !wasDiscussingPerformance)) {
        updateContext('services');
        const s = facts.services || [];
        const bridge = wasDiscussingStates ? "In each of our regions, " : wasDiscussingPerformance ? "To drive those results, " : "";
        return {
            text: `${bridge}we specialize in ${s.join(', ')}. Our core strength is the In-House Transition, where we handle the recruitment and clinical education so you maintain absolute control. Shall we discuss which of these would most impact your operations today?`,
            cta: { text: "Explore All Services", link: "/services" }
        };
    }

    // 6. SITE-WIDE INTELLIGENCE (Semantic Search)
    let bestMatch: any = null;
    Object.keys(knowledge).forEach(key => {
        if (key === 'facts') return;
        const content = JSON.stringify(knowledge[key]).toLowerCase();
        if (content.includes(q)) bestMatch = knowledge[key];
    });

    if (bestMatch) {
        const title = bestMatch.hero?.title || bestMatch.title || "Clinical Oversight";
        const bridge = sessionContext.length > 0 ? `Following up on our discussion about ${sessionContext[sessionContext.length-1]}, ` : "";
        return {
            text: `${bridge}regarding ${title}: Our model focuses on ${bestMatch.hero?.subtext || 'operational excellence'}. This ensures you eliminate hidden management fees while maintaining 100% control of your department. Would you like a detailed analysis of this workflow?`,
            cta: { text: "Request Analysis", link: "/contact" }
        };
    }

    // FINAL FALLBACK
    return {
        text: "That's a vital operational inquiry. Based on our conversation so far, I'd like to connect you with our leadership team for a brief strategy analysis to provide a pinpoint accurate answer for your specific census. Would that be helpful?",
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
        const response = getThreadedResponse(userMsg.content);
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
                        Contextual Intelligence Active
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
                  <span className="text-[9px] text-slate-400 mt-2 font-black uppercase tracking-widest px-2">
                    {typeof window !== 'undefined' && msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isTyping && <div className="flex items-center gap-3 text-[#0284c7]"><Loader2 size={16} className="animate-spin" /><span className="text-[10px] uppercase font-black tracking-widest opacity-40">Reasoning History</span></div>}
            </div>

            {/* Input */}
            <div className="p-6 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-3 p-1.5 bg-slate-100/50 rounded-2xl border border-slate-200 focus-within:border-[#0284c7]/30 transition-all">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none placeholder:text-slate-400 text-slate-700 font-medium" />
                <button onClick={handleSend} disabled={!input.trim()} className="w-12 h-12 bg-[#0284c7] text-white rounded-[1.2rem] flex items-center justify-center hover:bg-[#0f172a] shadow-lg shadow-[#0284c7]/20"><Send size={20} /></button>
              </div>
              <div className="flex items-center justify-between mt-5 px-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><ShieldCheck size={12} className="text-green-500" />Internal AI Secure</div>
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Threaded Semantic History<Sparkles size={10} className="text-[#0284c7]" /></div>
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
          "w-16 h-16 rounded-[1.8rem] items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10",
          isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]",
          "hidden md:flex" // Hide on mobile, shown via MobileCTA
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
}
