'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How does the pricing model work?',
    a: 'We use a unique three-tiered approach that customizes to your business size. As your volume grows internally, our management pricing structure reduces, allowing you to scale profitably while rewarding your growth.',
  },
  {
    q: 'Do I retain 100% of my therapy revenue?',
    a: 'Yes. Unlike traditional contract therapy companies that take a portion of your reimbursement, our management model allows the operator to retain 100% of all therapy revenue. We are paid for our management expertise, not a cut of your earnings.',
  },
  {
    q: 'Can you help transition a third-party contract team to in-house?',
    a: 'Absolutely. We specialize in providing all aspects of transitioning contract therapy teams to an in-house model for LTC providers — handling everything from recruitment and employee engagement to regulatory compliance and operational setup.',
  },
  {
    q: 'What if my program is already in-house?',
    a: 'Evolve acts as your expert elite resource. We provide specialized help with recruitment, denial management, clinical education, and real-time data analysis so you can focus on broader facility goals while we optimize the therapy department.',
  },
  {
    q: 'What clinical support do you provide?',
    a: 'We provide comprehensive clinical analysis for PDPM case mix efficiency, education on Quality Measures, customized business intelligence, and discharge planning optimization to ensure peak facility performance.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-100 relative" id="faq">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-4xl">
        {/* Centered layout */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-6">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.95] mb-6">
              Common <span className="text-[#0284c7] italic font-medium">Inquiries</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              Everything you need to know about the Evolve therapy management model.
            </p>
          </motion.div>
        </div>

        {/* Centered accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#0284c7]/30 shadow-[0_20px_50px_rgba(2,132,199,0.1)]'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-8 py-7 text-left gap-4 cursor-pointer"
                    onClick={() => setActive(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className={`text-lg md:text-xl font-bold font-serif leading-snug transition-colors duration-300 ${isOpen ? 'text-[#0284c7]' : 'text-[#0f172a]'}`}>
                      {faq.q}
                    </span>
                    <div
                      className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#0284c7] border-[#0284c7] text-white rotate-45'
                          : 'bg-slate-50 border-slate-200 text-slate-400'
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={20} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="px-8 pb-8 text-slate-600 text-[17px] leading-relaxed font-light border-t border-slate-50 pt-6">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#0284c7] transition-all duration-300 shadow-xl shadow-slate-200"
          >
            Ask a Custom Question
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
