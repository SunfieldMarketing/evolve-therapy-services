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
    <section className="bg-white relative py-20 border-b border-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-secondary mb-3">
                {stat.value}
              </div>
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-2">
                <stat.icon size={14} /> {stat.label}
              </div>
              <div className="text-slate-500 text-sm font-medium">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
