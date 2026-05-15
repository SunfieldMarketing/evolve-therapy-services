'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { tinaField } from '@/lib/tina';

export default function FAQ({ data, parentField }: { data?: any, parentField?: string }) {
  const [active, setActive] = useState<number | null>(0);

  const d = data || {
    title: 'Common Questions,',
    titleItalic: 'Straight Answers.',
    description: 'Find answers to the most frequent inquiries about our therapy management model.',
    list: []
  };

  const faqs = (d.list || d.items || []).map((item: any) => ({
    q: item.q || item.question || '',
    a: item.a || item.answer || ''
  })).filter((item: any) => item.q && item.a);

  return (
    <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-100 relative" id="faq">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-4xl">
        
        {/* Section Header */}
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
              <span data-tina-field={parentField ? tinaField(d, 'title') : undefined}>{d.title}</span> <span className="text-[#0284c7] italic font-medium" data-tina-field={parentField ? tinaField(d, 'titleItalic') : undefined}>{d.titleItalic}</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl mx-auto" data-tina-field={parentField ? tinaField(d, 'description') : undefined}>
              {d.description}
            </p>
          </motion.div>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq: any, i: number) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={`${faq.q}-${i}`}
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
                    className="w-full flex items-center justify-between px-8 py-7 text-left gap-4 cursor-pointer relative z-30 pointer-events-auto"
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
