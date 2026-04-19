'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Tiered Pricing Model',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, reducing pricing as you grow.',
    icon: Zap
  },
  {
    title: '100% Revenue Retention',
    desc: 'You retain all therapy revenue while we provide the expert management and operational oversite.',
    icon: Award
  },
  {
    title: 'In-House Employment',
    desc: 'Empower your therapy team with in-house employment and career advancement through internal mentorship.',
    icon: Briefcase
  },
  {
    title: 'Holistic Philosophy',
    desc: 'We set our customers apart through exceptional clinical programming and a holistic approach to care.',
    icon: Heart
  }
];

export default function WhyEvolve() {
  return (
    <section id="about" className="py-32 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-[1px] bg-primary" />
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The Advantage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary mb-8 leading-tight tracking-tight">
              Changing How <br />
              <span className="text-gradient">Therapy Functions.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
              We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations for LTC providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="w-14 h-14 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-1 border border-slate-100">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3 font-heading">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-slate-200">
              <a href="/about" className="inline-flex items-center gap-3 text-secondary font-bold hover:text-primary transition-colors group tracking-wide uppercase text-sm">
                About Our Leadership <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
               <Image 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
                alt="Expert Management Team" 
                width={800} 
                height={900} 
                className="object-cover h-[750px] w-full hover:scale-105 transition-transform duration-1000"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              
              {/* Quote Block Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                 <div className="dark-glass p-8 rounded-3xl">
                    <span className="text-4xl text-primary/40 font-heading leading-none absolute top-4 left-4">"</span>
                    <p className="text-white/90 text-lg leading-relaxed relative z-10 font-medium italic mb-6">
                      A model that brings your therapy teams in-house allows great employee engagement and exceptional resident outcomes.
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                       <div className="w-10 h-10 rounded-full border border-primary overflow-hidden relative">
                         <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" fill className="object-cover" alt="Lisa Bebie" />
                       </div>
                       <div>
                         <div className="font-bold text-white text-sm">Lisa Bebie</div>
                         <div className="text-xs text-primary font-bold uppercase tracking-widest">President & Founder</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
