'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How does the pricing model work?",
    a: "We use a unique three-tiered approach that customizes to your business size. As your volume grows internally, our management pricing structure reduces, allowing you to scale profitably."
  },
  {
    q: "Do I retain 100% of my therapy revenue?",
    a: "Yes. Unlike traditional contract therapy companies that take a portion of your reimbursement, our management model allows the operator to retain 100% of all therapy revenue."
  },
  {
    q: "Can you help transition a third-party contract team to in-house?",
    a: "Absolutely. We specialize in providing all aspects of transitioning contract therapy teams to an in-house model for LTC providers, handling recruitment, regulatory compliance, and operational setup."
  },
  {
    q: "What if my program is already in-house?",
    a: "Evolve acts as your expert resource. We provide help with recruitment, denial management, clinical education, and real-time data analysis so you can focus on other business goals."
  },
  {
    q: "What clinical support do you provide?",
    a: "We provide clinical analysis for PDPM case mix efficiency, education on Quality Measures, customized business intelligence, and discharge planning optimization."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all ${activeIndex === i ? 'border-primary bg-slate-50' : 'border-slate-100'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <span className={`text-lg font-bold ${activeIndex === i ? 'text-primary' : 'text-secondary'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180 text-primary' : 'text-slate-400'}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mx-6">
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
