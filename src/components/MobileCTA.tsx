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
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-6 left-6 right-6 z-[60]"
        >
          <div className="flex gap-3 p-2 dark-glass rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
            <a 
              href="tel:8883865820"
              className="flex-1 bg-primary text-white py-4 rounded-[1.5rem] flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_rgba(67,56,202,0.4)]"
            >
              <Phone size={16} /> Call
            </a>
            <a 
              href="/contact"
              className="flex-1 bg-white text-secondary py-4 rounded-[1.5rem] flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest"
            >
              Analysis <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
