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
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-full bg-secondary/5 -skew-x-12 translate-x-1/2 z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-[1px] bg-primary" />
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary tracking-tight">
              Comprehensive <br />
              <span className="text-gradient">Management Solutions.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed font-medium">
            Evolve provides the expert resources needed to bridge the gap between clinical quality and financial performance for LTC operators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-700" />
              
              <div>
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-slate-100/50`}>
                  <service.icon size={26} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-10 text-sm font-medium">
                  {service.desc}
                </p>
              </div>
              
              <button className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-all group-hover:gap-4">
                Learn More <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 bg-secondary rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 dark-glass text-white font-bold text-xs uppercase tracking-widest mb-8 self-start shadow-xl">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Featured Solution
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-heading font-black text-white mb-8 tracking-tight leading-[1.1]">
                Clinical Cost & <br />
                <span className="text-gradient">Success Analysis</span>
              </h3>
              <p className="text-white/60 mb-10 text-lg leading-relaxed font-medium">
                Receive a comprehensive, data-driven overview of your facility's current therapy clinical and financial health. No strings attached.
              </p>
              <div>
                <a href="/contact" className="inline-flex bg-primary text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1">
                  Get Started Today
                </a>
              </div>
            </div>
            
            <div className="relative min-h-[400px] overflow-hidden lg:h-auto">
               <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="Clinical Analysis Dashboard Details" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/70 to-transparent lg:w-1/2" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
