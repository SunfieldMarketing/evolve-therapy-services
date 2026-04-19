'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-8 border border-primary/20">
              <ShieldCheck size={14} /> Leadership in LTC Therapy
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-secondary leading-[1.1] mb-8">
              Evolving the <br />
              <span className="text-primary italic">Standard</span> of Care.
            </h1>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl">
              Customized therapy management solutions designed to maximize clinical quality while retaining 100% of your revenue. 
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a 
                href="#contact" 
                className="group bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30"
              >
                Get Free Analysis 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="bg-white text-secondary border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div>
                <div className="text-3xl font-serif text-secondary font-bold mb-1">100%</div>
                <div className="text-sm text-slate-500 font-medium">Revenue Retention</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-secondary font-bold mb-1">24/7</div>
                <div className="text-sm text-slate-500 font-medium">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-secondary font-bold mb-1">15+</div>
                <div className="text-sm text-slate-500 font-medium">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white">
              <Image 
                src="/images/hero.png" 
                alt="Therapy Management Professional" 
                width={800} 
                height={1000} 
                className="object-cover h-[650px] w-full"
                priority
              />
              
              {/* Floating Overlay Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-secondary">Efficiency Optimized</div>
                    <div className="text-sm text-slate-500 line-clamp-1">Tiered pricing that evolves as you grow.</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Stars */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
