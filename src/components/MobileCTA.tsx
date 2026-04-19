'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 bg-transparent sticky-mobile-nav">
      <div className="flex gap-4 p-2 bg-white/80 backdrop-blur-lg border border-slate-100 rounded-2xl shadow-2xl">
        <a 
          href="tel:8883865820"
          className="flex-1 bg-secondary text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-secondary/20"
        >
          <Phone size={20} /> Call Now
        </a>
        <a 
          href="sms:8883865820"
          className="flex-1 bg-primary text-white py-4 rounded-xl flex items-center justify-center gap-3 font-bold shadow-lg shadow-primary/20"
        >
          <MessageSquare size={20} /> Text Now
        </a>
      </div>
    </div>
  );
}
