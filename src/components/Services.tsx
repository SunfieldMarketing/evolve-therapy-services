'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  ClipboardCheck, 
  LineChart 
} from 'lucide-react';

const services = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and customized business intelligence.',
    icon: Stethoscope,
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Education and analysis of your site’s Quality Measures and case mix efficiency.',
    icon: ClipboardCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'SNF Staff Education',
    desc: 'Expert training for your SNF staff, marketing team, and administration for better collaboration.',
    icon: GraduationCap,
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning for operational success.',
    icon: LineChart,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model.',
    icon: Users2,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    title: 'Denial Management',
    desc: 'Expert support in recruitment, data analysis, and managing therapy denials effectively.',
    icon: BarChart3,
    color: 'text-rose-600',
    bg: 'bg-rose-50'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Our Comprehensive Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-slate-600">
            Evolve provides the expert resources needed to bridge the gap between clinical quality and financial performance for LTC operators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={30} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <div className="flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
