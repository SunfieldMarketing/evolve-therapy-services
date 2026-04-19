'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "How does the pricing model work?",
    a: "We use a unique three-tiered approach that customizes to your business size. As your volume grows internally, our management pricing structure reduces, allowing you to scale profitably while rewarding your growth."
  },
  {
    q: "Do I retain 100% of my therapy revenue?",
    a: "Yes. Unlike traditional contract therapy companies that take a portion of your reimbursement, our management model allows the operator to retain 100% of all therapy revenue. We are paid for our management expertise, not a cut of your earnings."
  },
  {
    q: "Can you help transition a third-party contract team to in-house?",
    a: "Absolutely. We specialize in providing all aspects of transitioning contract therapy teams to an in-house model for LTC providers, handling everything from recruitment and employee engagement to regulatory compliance and operational setup."
  },
  {
    q: "What if my program is already in-house?",
    a: "Evolve acts as your expert elite resource. We provide specialized help with recruitment, denial management, clinical education, and real-time data analysis so you can focus on broader facility goals while we optimize the therapy department."
  },
  {
    q: "What clinical support do you provide?",
    a: "We provide comprehensive clinical analysis for PDPM case mix efficiency, education on Quality Measures, customized business intelligence, and discharge planning optimization to ensure peak facility performance."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Knowledge Center</span>
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-6">Common Inquiries</h2>
            <p className="text-lg text-slate-500">Everything you need to know about the Evolve therapy management model.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group rounded-[2rem] transition-all duration-500 overflow-hidden ${activeIndex === i ? 'bg-secondary text-white shadow-2xl' : 'bg-slate-50 border border-slate-100'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <span className={`text-xl md:text-2xl font-bold ${activeIndex === i ? 'text-white' : 'text-secondary'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'bg-primary text-white rotate-0' : 'bg-white text-slate-400 rotate-90'}`}>
                    {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-10 pt-0 text-white/70 text-lg leading-relaxed max-w-3xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
