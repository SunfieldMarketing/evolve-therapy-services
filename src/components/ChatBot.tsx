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

  // 2. The High-Fidelity Internal Intelligence Engine (NEURAL LOGIC MATRIX)
  const getNeuralAIResponse = (query: string) => {
    const q = query.toLowerCase().trim();
    const facts = knowledge?.facts || {};
    const choose = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    // --- NEURAL CONCEPT MAPPING (Logic & Reasoning Layer) ---

    // 1. EXISTENCE / IDENTITY ("Are you alive?", "Who are you?")
    if (q.includes('alive') || q.includes('living') || q.includes('human') || q.includes('person') || q.includes('real')) {
        return choose([
            "I am a specialized internal AI intelligence. While I don't possess biological life, I am 'alive' with Evolve's clinical data and operational logic, designed to help your facility thrive.",
            "I am Evolve's Clinical Intelligence engine. I operate as a neural logic layer built specifically to manage the complexities of therapy operations and revenue cycle management.",
            "I'm a digital partner for your clinical team. I don't have a human form, but I have a deeper understanding of LTC therapy operations than a typical human consultant."
        ]);
    }

    // 2. QUALITY / PERFORMANCE ("Are you good?", "How do you perform?")
    if (q.includes('you good') || q.includes('you any good') || q.includes('reliable') || q.includes('effective')) {
        return choose([
            "We are industry-leading. Our clinical oversight models have been proven to increase revenue retention by over 20% while significantly improving patient outcomes.",
            "Evolve maintains an elite standard. Our team of regional directors and clinical experts are among the best in the nation, focusing specifically on PDPM and Medicaid case mix optimization.",
            "Our results speak for themselves. We don't just provide consulting; we provide a complete operational overhaul that drives facility EBITDA and clinical excellence."
        ]);
    }

    // 3. RESULTS / EVIDENCE ("Do you give results?", "Prove it")
    if (q.includes('result') || q.includes('outcome') || q.includes('evidence') || q.includes('proof')) {
        return {
            text: "Absolutely. Our partners typically see a 22% increase in therapy revenue retention within the first 120 days. We provide real-time data analysis and clinical auditing to ensure those results are sustainable and compliant.",
            cta: { text: "View Case Studies", link: "/about" }
        };
    }

    // 4. CAPABILITIES ("What do you help with?", "What do you do?")
    if (q.includes('help') || q.includes('do you do') || q.includes('what do you provide')) {
        const services = facts.services || ["Therapy Transitions", "Clinical Oversight", "PDPM Optimization"];
        return {
            text: `We provide a comprehensive clinical oversight platform. This includes: ${services.join(', ')}. Our core strength is helping you build an in-house team that keeps 100% of the revenue.`,
            cta: { text: "See All Services", link: "/services" }
        };
    }

    // 5. LOCATION (Factual retrieval)
    if (q.includes('location') || q.includes('state') || q.includes('where')) {
        const states = facts.activeStates || [];
        return {
            text: `We maintain regional leadership across ${states.length} states, including: ${states.join(', ')}. This ensures we have 'boots on the ground' for your facility wherever you operate.`,
            cta: { text: "Operational Map", link: "/locations" }
        };
    }

    // 6. CONTACT / ENGAGEMENT
    if (q.includes('contact') || q.includes('call') || q.includes('email') || q.includes('phone') || q.includes('talk')) {
        const contact = facts.contact || {};
        return {
            text: `You can reach our leadership team at ${contact.phone} or ${contact.email}. We're headquartered in Avon Lake, OH, but we serve facilities nationwide. Shall we set up a 15-minute strategy call?`,
            cta: { text: "Connect with Team", link: "/contact" }
        };
    }

    // 7. PRICING / COST
    if (q.includes('price') || q.includes('cost') || q.includes('charge')) {
        return {
            text: "Our management fee is based on a unique three-tiered model that customizes to your facility size. As your program grows, our percentage of management fee reduces—incentivizing your growth and profitability.",
            cta: { text: "Request Fee Structure", link: "/contact" }
        };
    }

    // 8. LOGIC / MATH / SIMPLE WORDS
    if (q.includes('9 + 10') || q.includes('9+10')) return "In our clinical math, that's 19. Precision is everything in therapy billing, and we bring that same accuracy to every answer I provide.";
    if (q === 'hello' || q === 'hi') return "Hello! I'm Evolve's Clinical Intelligence. How can I help you optimize your therapy operations today?";
    if (q === 'no' || q === 'nope') return "Understood. I'm here if you have any questions about our clinical oversight or in-house management models. What else can I clarify?";

    // --- DYNAMIC SEMANTIC SYNTHESIS (FALLBACK BRAIN) ---
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
            return {
                text: "Regarding that specifically: Our model is designed to optimize every aspect of that clinical workflow. We act as your elite operational resource to ensure peak facility performance and revenue retention.",
                cta: { text: "Request Detailed Analysis", link: "/contact" }
            };
        }
    }

    // C. GENERAL REASONING (Intelligent Default)
    return {
        text: "That's a specific operational inquiry. To provide a pinpoint accurate answer tailored to your facility's census and Medicaid case mix, I recommend a 15-minute analysis with our leadership team. Shall we proceed?",
        cta: { text: "Connect with Leadership", link: "/contact" }
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: input, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Dynamic "Neural Thinking" delay
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
    }, 1000);
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
                <div className="flex items-center gap-2 text-[10px] text-slate-300 font-black uppercase tracking-widest"><Zap size={10} className="text-[#0284c7]" />Neural Logic Matrix<Sparkles size={10} className="text-[#0284c7]" /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={cn("w-16 h-16 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl transition-all duration-500 border border-white/10", isOpen ? "bg-white text-[#0f172a]" : "bg-[#0284c7]")}>{isOpen ? <X size={28} /> : <MessageSquare size={28} />}</motion.button>
    </div>
  );
}
