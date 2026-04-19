'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:hidden fixed bottom-6 left-6 right-6 z-[60]"
        >
          <div className="flex gap-4 p-2 bg-secondary rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10">
            <a 
              href="tel:8883865820"
              className="flex-1 bg-primary text-white py-4 rounded-3xl flex items-center justify-center gap-2 font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20"
            >
              <Phone size={18} /> Call
            </a>
            <a 
              href="#contact"
              className="flex-1 bg-white text-secondary py-4 rounded-3xl flex items-center justify-center gap-2 font-black text-sm uppercase tracking-widest"
            >
              Analysis <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
