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
    <section className="bg-secondary relative py-24 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                <stat.icon size={30} />
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-2">
                {stat.label}
              </div>
              <div className="text-white/40 text-sm">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
