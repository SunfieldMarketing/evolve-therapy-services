'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Activity, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#fdfdfd]">
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-bold text-xs uppercase tracking-widest mb-8">
              Compassionate Therapy Management
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-serif font-black text-secondary leading-[1.1] mb-8">
              Transforming <br />
              <span className="text-primary font-serif font-medium italic">Clinical Care</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl font-medium">
              We provide the framework for clinicians to thrive. Maintain 100% of your revenue while we elevate your therapy department through expert management and operational oversight.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a 
                href="/contact" 
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-secondary transition-all duration-300 flex items-center justify-center shadow-lg shadow-primary/20 hover:-translate-y-0.5"
              >
                Schedule Consultation
              </a>
              <a 
                href="/services" 
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center hover:-translate-y-0.5 shadow-sm"
              >
                Our Clinical Solutions
              </a>
            </div>

            <div className="flex gap-10 pt-8 border-t border-slate-100">
              <div>
                <div className="text-3xl font-serif font-black text-secondary mb-1">100%</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Revenue Retained</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-black text-secondary mb-1">24/7</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Clinical Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-1 relative"
          >
            <div className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ece?auto=format&fit=crop&q=80" 
                   alt="Compassionate Therapy Session" 
                   fill
                   className="object-cover"
                   priority
                 />
                 {/* Soft therapeutic gradient overlay strictly for aesthetic depth */}
                 <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Subtle trusted badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                 <Activity size={24} />
               </div>
               <div>
                  <div className="text-sm font-bold text-secondary font-serif">In-House Excellence</div>
                  <div className="text-xs text-slate-500 font-medium">Customized therapy oversight</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
