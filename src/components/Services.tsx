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
    <section id="services" className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-[1px] bg-primary" />
               <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-secondary leading-tight">
              Comprehensive <br />
              <span className="text-primary font-medium italic">Management Solutions</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-md leading-relaxed pb-4">
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
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-500 group relative flex flex-col justify-between"
            >
              <Link href={service.href} className="absolute inset-0 z-10" aria-label={`Learn more about ${service.title}`} />
              <div>
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 border border-white`}>
                  <service.icon size={26} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-10 text-[15px]">
                  {service.desc}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Service Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-24 bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200/60 relative"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-100 bg-sky-50 text-primary font-bold text-xs uppercase tracking-widest mb-8 self-start">
                Featured Solution
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-serif font-black text-secondary mb-6 leading-tight">
                Clinical Cost & <br />
                <span className="text-primary italic font-medium">Success Analysis</span>
              </h3>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                Receive a comprehensive, data-driven overview of your facility's current therapy clinical and financial health. No strings attached.
              </p>
              <div>
                <a href="/contact" className="inline-flex bg-secondary text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary transition-colors duration-300">
                  Request Analysis
                </a>
              </div>
            </div>
            
            <div className="relative min-h-[400px] overflow-hidden lg:h-auto">
               <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="Clinical Analysis Dashboard Details" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-1/3" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
