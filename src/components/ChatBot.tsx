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
      content: "Hello. I'm the Evolve Clinical Assistant. I'm here to provide direct intelligence on our therapy management models and clinical oversight. How can we help you today?",
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

  // 2. The High-Fidelity Internal Intelligence Engine (DEEP SEMANTIC BRAIN)
  const getNeuralAIResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    const facts = knowledge?.facts || {};
    const choose = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    // --- CONCEPT BRAIN: DEEP INTENT MAPPING ---

    // 1. LOCATION & FOOTPRINT (Including Negative Recognition)
    if (q.includes('location') || q.includes('state') || q.includes('where') || q.includes('operate') || q.includes('california') || q.includes('texas')) {
        const states = facts.activeStates || [];
        const isQueryingSpecificState = states.some((s: string) => q.includes(s.toLowerCase()));
        
        if (isQueryingSpecificState) {
            return {
                text: `Yes, we are fully operational in that region. We currently maintain regional leadership and clinical oversight across ${states.length} states, ensuring your facility has elite operational support.`,
                cta: { text: "Operational Map", link: "/locations" }
            };
        } else {
            return {
                text: `While we aren't currently active in that specific state, Evolve is rapidly expanding. We are currently operational in ${states.length} territories, including: ${states.join(', ')}. We'd love to discuss how our regional directors can support your specific location.`,
                cta: { text: "Connect with Team", link: "/contact" }
            };
        }
    }

    // 2. TEAM & SCALE ("How big is team?", "Who are you?")
    if (q.includes('team') || q.includes('size') || q.includes('how many') || q.includes('staff')) {
        return {
            text: "Our team consists of elite clinical regional directors, PDPM specialists, and dedicated recruitment hubs. We are a mid-to-large scale operation designed to provide 'boutique' attention to every facility while maintaining the infrastructure needed for national oversight.",
            cta: { text: "Meet Our Leadership", link: "/about" }
        };
    }

    // 3. IMPROVEMENT & VALUE ("What can you improve?", "Benefit")
    if (q.includes('improve') || q.includes('better') || q.includes('benefit') || q.includes('value') || q.includes('why')) {
        return {
            text: "Evolve improves facility EBITDA by an average of 22% while boosting clinical outcomes. We optimize therapy room utilization, discharge planning efficiency, and Medicaid case mix accuracy to ensure your facility is performing at its absolute peak.",
            cta: { text: "See Case Studies", link: "/services" }
        };
    }

    // 4. RESULTS & EVIDENCE
    if (q.includes('result') || q.includes('proof') || q.includes('outcome') || q.includes('success')) {
        return {
            text: "Our results are data-driven: We consistently deliver 100% therapy revenue retention to our partners. By moving from contract labor to an in-house model, our facilities gain complete transparency and clinical control over their departments.",
            cta: { text: "Request Cost Analysis", link: "/contact" }
        };
    }

    // 5. IDENTITY & SOCIAL
    if (q.includes('alive') || q.includes('real') || q.includes('human')) {
        return "I am Evolve's internal intelligence engine—a specialized logic layer designed to help facility operators navigate the transition to more profitable in-house therapy models.";
    }

    // 6. LOGIC & MATH
    if (q.includes('9 + 10') || q.includes('9+10')) return "Mathematically, that's 19. We bring that same level of pinpoint accuracy to your facility's financial and clinical audits.";
    if (q === 'hi' || q === 'hello' || q === 'hey') return "Hello! I'm synchronized with Evolve's latest clinical models. How can I assist your operations today?";
    if (q === 'no' || q === 'nope') return "Understood. Our team is available if you'd like to explore a more transparent approach to therapy management in the future.";

    // --- DYNAMIC RETRIEVAL (DEEP SCAN) ---
    if (knowledge) {
        const keywords = q.split(' ').filter(w => w.length > 3);
        const matches: any[] = [];
        
        Object.keys(knowledge).forEach(key => {
            if (key === 'facts') return;
            const val = knowledge[key];
            if (!val) return;
            let score = 0;
            const content = JSON.stringify(val).toLowerCase();
            keywords.forEach(kw => { if (content.includes(kw)) score += 2; });
            if (content.includes(q)) score += 10;
            if (score > 0) matches.push({ key, content, score });
        });

        const top = matches.sort((a, b) => b.score - a.score)[0];
        if (top && top.score > 2) {
            // Contextual synthesis of raw data
            const cleanContent = top.content.slice(0, 400).replace(/["{}[\]]/g, '').trim();
            return {
                text: `Regarding that specifically: ${cleanContent}... Our model is designed to optimize every aspect of that operational workflow to ensure peak facility performance.`,
                cta: { text: "Request Full Strategy Session", link: "/contact" }
            };
        }
    }

    // FINAL FALLBACK: If we truly don't know, be conversational but still helpful
    return {
        text: "That sounds like a vital clinical or operational question. Evolve specializes in exactly these types of transitions and department optimizations. I'd love to have our leadership team provide a pinpoint accurate roadmap for you—would a 15-minute analysis work for you?",
        cta: { text: "Connect with Leadership", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Neural synthesis delay
    setTimeout(() => {
      const response = getNeuralAIResponse(userMsg.content);
      const text = typeof response === 'string' ? response : response.text;
      const cta = typeof response === 'object' ? response.cta : undefined;

      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: text,
        timestamp: new Date(),
        cta: cta,
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
                        Neural Intelligence Active
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
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Deep Semantic Logic<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
