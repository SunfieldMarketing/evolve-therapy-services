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
import Link from 'next/link';

const services = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and customized business intelligence.',
    icon: Stethoscope,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Education and analysis of your site’s Quality Measures and case mix efficiency.',
    icon: ClipboardCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'SNF Staff Education',
    desc: 'Expert training for your SNF staff, marketing team, and administration for better collaboration.',
    icon: GraduationCap,
    color: 'text-primary',
    bg: 'bg-primary/10',
    href: '/services/snf-staff-education'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning for operational success.',
    icon: LineChart,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model.',
    icon: Users2,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    href: '/services/in-house-transition'
  },
  {
    title: 'Denial Management',
    desc: 'Expert support in recruitment, data analysis, and managing therapy denials effectively.',
    icon: BarChart3,
    color: 'text-accent',
    bg: 'bg-accent/10',
    href: '/services/denial-management'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-14 md:mb-20">
          <div className="max-w-3xl">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-3 mb-8"
            >
               <div className="w-12 h-[2px] bg-primary" />
               <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">Expertise & Oversight</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-secondary leading-[0.95] tracking-tighter">
              Comprehensive <br />
              <span className="text-primary font-serif font-medium italic">Management Solutions</span>
            </h2>
          </div>
          <p className="text-xl text-slate-400 max-w-md leading-relaxed pb-2 font-light">
            Evolve provides the expert resources needed to bridge the gap between clinical quality and financial performance for LTC operators.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-50 p-7 sm:p-10 md:p-12 rounded-3xl md:rounded-[3.5rem] border border-slate-100 hover:bg-white hover:border-primary/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group relative flex flex-col justify-between overflow-hidden"
            >
              <Link href={service.href} className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />
              
              {/* Subtle background decoration for each card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />

              <div>
                <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-[1.5rem] flex items-center justify-center mb-10 border border-white shadow-xl shadow-black/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-black text-secondary mb-5 leading-tight group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-12 text-sm font-medium">
                  {service.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-500">
                Learn More <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Card - Now even more premium with better contrast and layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-28 bg-secondary rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/5"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-14 lg:p-24 flex flex-col justify-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-black text-[10px] uppercase tracking-[0.3em] mb-12 self-start"
              >
                Featured Discovery
              </motion.div>
              
              <h3 className="text-4xl lg:text-6xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tighter">
                Clinical Cost & <br />
                <span className="text-primary italic font-medium">Success Analysis</span>
              </h3>
              <p className="text-white/40 mb-12 text-xl leading-relaxed font-light">
                Receive a comprehensive, data-driven overview of your facility's current therapy health. Strategic insights with no legacy strings attached.
              </p>
              <div>
                <a href="/contact" className="inline-flex bg-white text-secondary px-12 py-5 rounded-2x font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-500 shadow-xl shadow-black/20 group">
                  Request Free Analysis <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="relative min-h-[500px] overflow-hidden lg:h-auto group">
               <Image 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80" 
                alt="Clinical Success Data Review" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent lg:w-1/2" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:hidden" />
              
              {/* Decorative data points overlay strictly for aesthetics */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-ping opacity-20 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
