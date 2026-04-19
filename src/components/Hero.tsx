'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-1" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl -z-1" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-wider">
                LTC Therapy Management Expert
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary leading-tight mb-8">
                Changing How <span className="text-primary italic">Therapy</span> Functions.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Retain 100% of your therapy revenue while reducing costs as your business grows. 
                Our tiered pricing model evolves with your success.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium text-slate-700">100% Revenue Retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium text-slate-700">Cost Success Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="font-medium text-slate-700">Expert Compliance</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
                >
                  Free Savings Analysis <ArrowRight size={20} />
                </a>
                <a 
                  href="#services" 
                  className="bg-white text-secondary border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-secondary mb-2">Request More Info</h3>
              <p className="text-slate-500 mb-6 font-medium">Get your free clinical & financial overview today.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name *" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required 
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name *" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                />
                <input 
                  type="text" 
                  placeholder="Facility Name / Address" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" 
                />
                <textarea 
                  placeholder="How can we help?" 
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-secondary/90 transition-all shadow-lg"
                >
                  Submit Analysis Request
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
