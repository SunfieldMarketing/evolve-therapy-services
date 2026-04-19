'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, ShieldCheck, HeartPulse } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Therapists Placed', value: '500+', color: 'bg-emerald-500' },
  { icon: TrendingUp, label: 'Cost Reduction', value: '25%', color: 'bg-blue-500' },
  { icon: ShieldCheck, label: 'Compliance Rate', value: '100%', color: 'bg-teal-500' },
  { icon: HeartPulse, label: 'Patient Clinical Outcomes', value: 'Premium', color: 'bg-amber-500' },
];

export default function SocialProof() {
  return (
    <section className="bg-secondary relative py-12 overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className={`${stat.color} p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
