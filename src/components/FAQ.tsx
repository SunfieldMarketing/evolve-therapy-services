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
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
               <div className="w-12 h-[1px] bg-primary" />
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Knowledge Center</span>
               <div className="w-12 h-[1px] bg-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary tracking-tight mb-6">
              Common <span className="text-gradient hover:animate-pulse">Inquiries.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">Everything you need to know about the Evolve therapy management model.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`group rounded-[2rem] transition-all duration-500 overflow-hidden relative ${activeIndex === i ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-transparent' : 'bg-transparent border border-slate-200/60 hover:bg-white hover:border-slate-300'}`}
              >
                {activeIndex === i && <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-accent" />}
                
                <button
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <span className={`text-xl md:text-2xl font-bold font-heading pr-8 ${activeIndex === i ? 'text-secondary' : 'text-slate-600 group-hover:text-secondary transition-colors'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 shadow-sm ${activeIndex === i ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary rotate-0'}`}>
                    {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="p-8 pt-0 md:px-10 pb-10 text-slate-500 font-medium text-lg leading-relaxed max-w-3xl">
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
