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
  const [lastResponseKey, setLastResponseKey] = useState<string>("");
  
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

  // 2. High-Fidelity Contextual Reasoning Engine
  const getTailoredResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    const facts = knowledge?.facts || {};
    
    // UTILS: Random choice for uniqueness
    const choose = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    // A. SOCIAL & PERSONALITY LAYER (Unique & Adaptive)
    if (q === 'hello' || q === 'hi' || q.includes('hey')) {
        return choose([
            "Hello! I'm ready to dive into our clinical data. What specifically can I clarify for your facility?",
            "Greetings. I'm synchronized with Evolve's latest operational models. How can I assist your team today?",
            "Hi there. I'm here to help you explore a more profitable, clinical-first approach to therapy. What's on your mind?"
        ]);
    }

    if (q.includes('how are you') || q === 'are you good' || q.includes('doing well')) {
        return choose([
            "I'm operating at peak clinical efficiency, thank you. How is your therapy department performing this quarter?",
            "Doing great. I've just finished a refresh of our latest recruitment and retention data. Ready when you are.",
            "Excellent. I'm focused on helping you retain 100% of your therapy revenue. How can I help you achieve that today?"
        ]);
    }

    if (q === 'are you real' || q.includes('are you a bot')) {
        return "I am Evolve's internal intelligence engine. While I don't have a physical form, I have full access to our clinical protocols and operational roadmaps to ensure your facility gets expert-level guidance.";
    }

    // B. FACTUAL EXTRACTION (Pinpoint & Contextual)
    
    // 1. States / Operational Footprint
    if (q.includes('state') || q.includes('operate') || q.includes('location')) {
        const states = facts.activeStates || [];
        const intro = choose([
            `Evolve currently maintains a heavy operational presence in ${states.length} states:`,
            `Our clinical oversight teams are active across ${states.length} key territories, including:`,
            `We provide regional management and recruitment support in these ${states.length} states:`
        ]);
        return {
            text: `${intro} ${states.join(', ')}. In these regions, we provide daily operational support to ensure 100% compliance and revenue retention.`,
            cta: { text: "View Operational Map", link: "/locations" }
        };
    }

    // 2. Contact Logic (Tailored to the specific ask)
    if (q.includes('contact') || q.includes('call') || q.includes('email') || q.includes('phone')) {
        const contact = facts.contact || {};
        let text = "";
        if (q.includes('phone') || q.includes('call')) text = `You can speak with our leadership team directly at ${contact.phone}. `;
        else if (q.includes('email')) text = `Please reach out to us at ${contact.email} for a direct clinical response. `;
        else text = `Our team is available at ${contact.phone} or ${contact.email}. `;
        
        text += `We are headquartered in Avon Lake, OH. Would you like to bypass the wait and schedule a 15-minute analysis right now?`;
        return { text, cta: { text: "Schedule Strategy Analysis", link: "/contact" } };
    }

    // 3. Services / Capabilities (Unique based on phrasing)
    if (q.includes('help with') || q.includes('services') || q.includes('what do you do')) {
        const services = facts.services || [];
        if (q.includes('best') || q.includes('top') || q.includes('special')) {
            return {
                text: "What we do best is the In-House Transition. We provide the complete roadmap, recruitment, and clinical oversight needed to move you away from high-cost contract therapy and into a 100% revenue-retaining model.",
                cta: { text: "View Transition Roadmap", link: "/services/in-house-transition" }
            };
        }
        return {
            text: `We specialize in ${services.slice(0, 3).join(', ')}, and more. Our core mission is helping facilities like yours take back control of their therapy departments to maximize both EBITDA and patient outcomes.`,
            cta: { text: "Explore All Capabilities", link: "/services" }
        };
    }

    // C. LOGIC & BUSINESS REASONING
    if (q.includes('9 + 10') || q.includes('9+10')) {
        return "Clinically speaking, that's 19. While some online might tell you otherwise, at Evolve, we stick to the accurate data—especially when it comes to your facility's financial health.";
    }

    if (q.includes('simple terms') || q.includes('explain') || q.includes('what is evolve')) {
        return {
            text: "In simple terms: Evolve helps nursing homes run their own therapy departments instead of hiring expensive outside companies. You keep all the profit, and we provide the experts, the hiring, and the clinical oversight to make it happen.",
            cta: { text: "Watch Our Mission", link: "/about" }
        };
    }

    if (q.includes('how can i work') || q.includes('pricing') || q.includes('cost')) {
        return {
            text: "Working with us is a partnership. We use a three-tiered management structure where our fees actually reduce as your volume grows. This ensures we are always incentivized to help your program succeed. Shall we run a 15-minute cost analysis for your facility?",
            cta: { text: "Get Cost Analysis", link: "/contact" }
        };
    }

    // D. DYNAMIC SEMANTIC SEARCH (When logic fails)
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
            const faq = facts.faqs?.find((f:any) => f.q.toLowerCase().includes(q) || keywords.some(kw => f.q.toLowerCase().includes(kw)));
            if (faq) return { text: faq.a, cta: { text: "Connect with Team", link: "/contact" } };

            return {
                text: `That aligns with our core clinical oversight model. Evolve acts as your expert elite resource for exactly these types of operational challenges. Shall we discuss how this specifically applies to your current census?`,
                cta: { text: "Request Strategy Session", link: "/contact" }
            };
        }
    }

    // E. FINAL FALLBACK (Human-like synthesis)
    return {
        text: "That's a vital inquiry. To ensure you get a pinpoint accurate answer based on your facility's specific census and labor mix, I'd like to connect you with our leadership team for a brief strategy analysis. Would that be helpful?",
        cta: { text: "Connect with Leadership", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Dynamic delay for "Thinking"
    setTimeout(() => {
      const response = getTailoredResponse(userMsg.content);
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
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Contextual Accuracy<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
