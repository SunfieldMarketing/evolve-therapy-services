'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  ClipboardCheck, 
  LineChart,
  ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and customized business intelligence.',
    icon: Stethoscope,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Education and analysis of your site’s Quality Measures and case mix efficiency.',
    icon: ClipboardCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    title: 'SNF Staff Education',
    desc: 'Expert training for your SNF staff, marketing team, and administration for better collaboration.',
    icon: GraduationCap,
    color: 'text-primary',
    bg: 'bg-primary/10'
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
    color: 'text-slate-600',
    bg: 'bg-slate-100'
  },
  {
    title: 'Denial Management',
    desc: 'Expert support in recruitment, data analysis, and managing therapy denials effectively.',
    icon: BarChart3,
    color: 'text-accent',
    bg: 'bg-accent/10'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-serif text-secondary">
              Comprehensive <br />
              <span className="text-primary italic">Management</span> Solutions
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed">
            Evolve provides the expert resources needed to bridge the gap between clinical quality and financial performance for LTC operators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
              
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-10">
                {service.desc}
              </p>
              
              <button className="flex items-center gap-2 text-secondary font-bold group-hover:gap-4 transition-all">
                Learn More <ArrowUpRight size={18} className="text-primary" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-[3rem] overflow-hidden group"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="text-primary font-bold mb-4">Featured Solution</div>
              <h3 className="text-3xl md:text-5xl font-serif text-white mb-8">
                Clinical Cost & <br />
                <span className="text-primary italic">Success</span> Analysis
              </h3>
              <p className="text-white/60 mb-10 text-lg leading-relaxed">
                Receive a comprehensive, data-driven overview of your facility's current therapy clinical and financial health. No strings attached.
              </p>
              <div>
                <a href="#contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">
                  Get Started Today
                </a>
              </div>
            </div>
            <div className="relative min-h-[400px] overflow-hidden">
               <Image 
                src="/images/analysis.png" 
                alt="Clinical Analysis" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
