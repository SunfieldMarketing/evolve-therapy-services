'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Evolve Therapy has been an absolute pleasure both from a customer service side and facility productivity side. Having a company that treats your facilities like it's their own is very rare.",
    author: "I. Chafetz",
    title: "Facility Administrator",
    stars: 5,
  },
  {
    quote: "I truly am blessed that I have had the opportunity to work with Evolve Therapy Services. The leadership has made a great impact not only in my daily operations but has made it fun and exciting to ultimately make a positive impact in our communities.",
    author: "Jimmy Daniels, COTA/L",
    title: "Director of Rehab — Emerald Care Center, Midwest City, OK",
    stars: 5,
  },
  {
    quote: "Evolve is just that — they will focus on your facility's goals and productivity like it's their own and the results speak for themselves.",
    author: "LTC Operator",
    title: "Skilled Nursing Facility, Ohio",
    stars: 5,
  },
];

const stats = [
  { value: '20+', label: 'Years of Leadership', desc: 'Clinical & operational expertise' },
  { value: '100%', label: 'Revenue Retained', desc: 'By your facility, always' },
  { value: '15+', label: 'States Served', desc: 'Nationwide LTC footprint' },
  { value: '24/7', label: 'Clinical Support', desc: 'Always available for your team' },
];

export default function SocialProof() {
  return (
    <>
      {/* Stats Bar */}
      <section className="bg-[#0f172a] py-16 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left relative"
              >
                <div className="text-5xl font-serif font-black text-[#0284c7] mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-white font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs font-medium">{stat.desc}</div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="bg-white py-24 md:py-32 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-6">
              What Clients Say
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] tracking-tighter">
              Trusted by LTC Leaders<br />
              <span className="text-[#0284c7] italic font-medium">Across the Nation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-[#0284c7]/20 transition-all duration-500 flex flex-col"
              >
                <Quote size={32} className="text-[#0284c7]/20 mb-4 shrink-0" />
                <p className="text-slate-600 leading-relaxed font-light italic flex-1 mb-6">"{t.quote}"</p>
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star key={s} size={12} className="fill-[#0284c7] text-[#0284c7]" />
                    ))}
                  </div>
                  <div className="font-black text-[#0f172a] text-sm">{t.author}</div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{t.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
