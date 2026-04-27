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
    <section id="about" className="py-24 md:py-48 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-10"
            >
               The Evolve Advantage
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-secondary mb-10 leading-[0.95] tracking-tighter">
              Changing How <br />
              <span className="text-primary italic font-medium">Therapy Functions</span>
            </h2>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-xl font-light">
              We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations for LTC providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="w-16 h-16 bg-slate-50 text-secondary rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-slate-100 shadow-xl shadow-black/5 group-hover:-translate-y-2">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-serif font-black text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-10 border-t border-slate-100">
              <a href="/about" className="inline-flex items-center gap-4 text-secondary font-black text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-all group">
                Discover Our Leadership <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] bg-white border border-slate-100 p-4">
               <div className="relative rounded-[3rem] overflow-hidden w-full h-[750px]">
                 <Image 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                  alt="Professional Therapy Management Team" 
                  fill
                  className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
                 
                 {/* Premium Testimonial Block */}
                 <div className="absolute bottom-0 left-0 right-0 p-10">
                    <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.5 }}
                       className="bg-white/95 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white"
                    >
                       <span className="text-7xl text-primary/10 font-serif leading-none absolute top-6 left-10 select-none">"</span>
                       <p className="text-secondary text-xl font-serif italic mb-8 relative z-10 leading-relaxed font-medium">
                         An in-house model allows 100% revenue retention and fosters a unified facility culture.
                       </p>
                       <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                          <Image 
                            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80" 
                            width={56} 
                            height={56} 
                            className="rounded-[1.25rem] object-cover border border-slate-100 shadow-md" 
                            alt="Lisa Bebie" 
                          />
                          <div>
                            <div className="font-black text-secondary text-lg tracking-tight">Lisa Bebie</div>
                            <div className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">President & Founder</div>
                          </div>
                       </div>
                    </motion.div>
                 </div>
               </div>
            </div>
            
            {/* Background Decorative Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
