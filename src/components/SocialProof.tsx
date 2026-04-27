'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, ShieldCheck, HeartPulse } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Expert Therapists', value: '500+', desc: 'Dedicated professionals' },
  { icon: TrendingUp, label: 'Cost Reduction', value: '25%', desc: 'Operational efficiency' },
  { icon: ShieldCheck, label: 'Compliance', value: '100%', desc: 'Legal & clinical rigor' },
  { icon: HeartPulse, label: 'Clinical Quality', value: 'Elite', desc: 'Superior outcomes' },
];

export default function SocialProof() {
  return (
    <section className="bg-white relative py-20 lg:py-32 border-b border-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-between items-center gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 min-w-[200px] text-center lg:text-left group relative"
            >
              <div className="text-5xl md:text-6xl font-serif font-black text-secondary mb-4 tracking-tighter group-hover:text-primary transition-colors duration-500">
                {stat.value}
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2">
                <stat.icon size={12} strokeWidth={3} /> {stat.label}
              </div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                {stat.desc}
              </div>
              
              {/* Vertical Separator */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-slate-100" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
