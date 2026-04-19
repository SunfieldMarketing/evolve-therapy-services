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
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sky-50 border border-slate-100 text-primary font-bold text-xs uppercase tracking-widest mb-6">
               The Evolve Advantage
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-secondary mb-8 leading-tight">
              Changing How <br />
              <span className="text-primary italic font-medium">Therapy Functions</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations for LTC providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-14 h-14 bg-slate-50 text-primary rounded-full flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-slate-100">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-secondary mb-3 font-serif">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <a href="/about" className="inline-flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors group tracking-wide text-sm">
                Learn About Our Leadership <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl bg-white border border-slate-100 p-3">
               <div className="relative rounded-[1.5rem] overflow-hidden w-full h-[650px]">
                 <Image 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" 
                  alt="Expert Management Team" 
                  fill
                  className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />
                 
                 {/* Quote Block Overlay */}
                 <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-white/95 backdrop-blur-md p-8 rounded-[1.5rem] shadow-xl">
                       <span className="text-5xl text-primary/30 font-serif leading-none absolute top-4 left-4">"</span>
                       <p className="text-secondary text-lg leading-relaxed relative z-10 font-medium italic mb-6">
                         A model that brings your therapy teams in-house allows great employee engagement and exceptional resident outcomes.
                       </p>
                       <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                            <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" fill className="object-cover" alt="Lisa Bebie" />
                          </div>
                          <div>
                            <div className="font-bold text-secondary text-sm">Lisa Bebie</div>
                            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">President & Founder</div>
                          </div>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
