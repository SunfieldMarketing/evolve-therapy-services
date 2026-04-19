'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Dynamic Structural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      
      {/* Massive Glow Orbs */}
      <div className="absolute top-10 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] mix-blend-multiply z-0 animate-float" />
      <div className="absolute bottom-10 left-[-20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-multiply z-0 animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full dark-glass border border-primary/20 text-white font-bold text-xs uppercase tracking-[0.25em] mb-8 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Revolutionizing LTC Therapy
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-heading font-black text-secondary leading-[1.05] mb-8 tracking-tight">
              Evolve Your <br />
              <span className="text-gradient">Clinical Care.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
              We provide the framework for clinicians to thrive. Maintain 100% of your revenue while we elevate your therapy department through expert management and operational oversight.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <a 
                href="#contact" 
                className="group bg-primary text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-4 shadow-[0_10px_40px_-10px_rgba(67,56,202,0.6)] hover:shadow-xl hover:-translate-y-1"
              >
                Start Evolving
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/services" 
                className="glass-panel text-secondary border border-slate-200 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
              >
                Our Solutions
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200/60">
              {[
                { label: 'Revenue Kept', value: '100%' },
                { label: 'Growth Focused', value: 'Tiered' },
                { label: 'Support', value: '24/7' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-heading font-black text-secondary mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Bento Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-4 h-[600px]">
               {/* Main Big Image */}
               <div className="col-span-2 row-span-2 relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                 <Image 
                   src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" 
                   alt="Modern Therapy Setting" 
                   fill
                   className="object-cover group-hover:scale-105 transition-transform duration-1000"
                   priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-80" />
                 
                 {/* Floating Info Card */}
                 <div className="absolute bottom-6 left-6 right-6 p-6 dark-glass rounded-3xl z-10 flex items-center justify-between">
                    <div>
                      <div className="text-white font-heading font-bold text-xl">Operational Excellence</div>
                      <div className="text-white/60 text-sm font-medium">In-house model transition setup</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center">
                      <Activity size={20} />
                    </div>
                 </div>
               </div>
            </div>

            {/* Floating Elements Outside the Box */}
            <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-12 p-6 glass-panel rounded-3xl shadow-xl hidden md:block"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Efficiency</div>
                    <div className="text-lg font-black text-secondary">+25% Growth</div>
                  </div>
               </div>
            </motion.div>

            <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-12 top-1/3 p-6 glass-panel rounded-3xl shadow-xl hidden md:block"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Culture</div>
                    <div className="text-lg font-black text-secondary">Expert Team</div>
                  </div>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
