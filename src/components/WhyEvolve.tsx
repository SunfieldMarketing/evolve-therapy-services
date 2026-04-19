'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, Heart } from 'lucide-react';
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
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
               {/* Use a placeholder image or the generated one if path known. I'll use a descriptive placeholder div for now to avoid broken links if generation didn't output full accessible paths yet, but I'll assume they will be available. actually, I'll use a style background for now */}
               <div className="aspect-[4/5] bg-slate-200 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex flex-col justify-end p-8 text-white">
                    <p className="text-xl italic font-medium mb-4">"A model that brings your therapy teams in-house allows great employee engagement and exceptional resident outcomes."</p>
                    <p className="font-bold text-primary">Lisa Bebie, President & Founder</p>
                 </div>
               </div>
            </div>
            
            {/* Decors */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />
          </div>

          {/* Content side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8">Why Choose Evolve?</h2>
            <p className="text-lg text-slate-600 mb-12">
              We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations.
            </p>

            <div className="space-y-8">
              {features.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
