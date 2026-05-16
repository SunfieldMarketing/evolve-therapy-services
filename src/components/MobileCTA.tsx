'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowRight, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { tinaField } from '@/lib/tina';

import Link from 'next/link';

export default function MobileCTA({ data }: { data?: any }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const d = data || {
    text: "Get Free Analysis",
    href: "/contact"
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-6 left-6 right-6 z-[1000]"
        >
          <div className="flex items-center gap-3 p-2 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20">
            <Link 
              href={d.href}
              className="flex-1 bg-[#0284c7] text-white h-14 rounded-full flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-[0.1em] shadow-lg shadow-[#0284c7]/20 hover:bg-[#0284c7]/90 transition-all active:scale-95"
            >
              <span data-tina-field={tinaField(d, 'text')}>{d.text}</span> <ArrowRight size={14} />
            </Link>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-chatbot'))}
              className="w-14 h-14 shrink-0 bg-[#0f172a] text-white rounded-full flex items-center justify-center relative shadow-lg shadow-black/10 hover:bg-[#1e293b] transition-all active:scale-95 group"
              aria-label="Chat with AI"
            >
              <Bot size={20} className="text-[#0284c7]" />
              <Sparkles size={10} className="text-[#0284c7] absolute top-3 right-3 animate-pulse" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
