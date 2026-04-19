'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, Heart, CheckCircle } from 'lucide-react';
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
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Evolve Advantage</span>
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8">
              Changing How <br />
              <span className="text-primary italic">Therapy</span> Functions
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations for LTC providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-secondary mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-600 relative">
               <span className="absolute -top-4 -left-2 text-6xl text-primary/10 font-serif">"</span>
               A model that brings your therapy teams in-house allows great employee engagement and exceptional resident outcomes.
               <div className="mt-4 font-bold text-secondary not-italic">— Lisa Bebie, President & Founder</div>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl">
               <Image 
                src="/images/team.png" 
                alt="Expert Management Team" 
                width={700} 
                height={850} 
                className="object-cover h-[700px] w-full hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute top-12 -left-12 p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="text-primary font-black text-4xl mb-1">98%</div>
                <div className="text-slate-500 text-sm font-bold uppercase tracking-wider">Client Satisfaction</div>
              </div>

              {/* Success Badge */}
              <div className="absolute bottom-12 -right-8 p-6 bg-secondary text-white rounded-3xl shadow-2xl flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className="font-bold">Growth Evolved</div>
                  <div className="text-xs text-white/60">Tiered pricing success.</div>
                </div>
              </div>
            </div>
            
            {/* Decors */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
