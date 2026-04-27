'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import ServiceArea from '@/components/ServiceArea';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, ShieldCheck, HeartPulse, Microscope } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Featured Clinical Approach */}
      <section className="py-32 md:py-48 bg-white border-b border-slate-50 relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                 Clinical Excellence
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-secondary mb-10 leading-[0.95] tracking-tighter">
                Modern Therapy <br />
                <span className="text-primary italic font-medium">Managed with Care</span>
              </h2>
              <p className="text-xl text-slate-500 mb-14 leading-relaxed font-light max-w-xl">
                Our vision is to provide the most rewarding and creative therapy consulting management model through compassionate leadership, clinical passion, and evidence-based experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white border border-slate-100 text-primary rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg shadow-black/5">
                    <Microscope size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary font-serif text-xl tracking-tight">Evidence-Based</h4>
                    <p className="text-sm text-slate-400 mt-2 font-medium leading-relaxed">Real-time analysis for superior clinical formulation.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white border border-slate-100 text-primary rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-lg shadow-black/5">
                    <HeartPulse size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary font-serif text-xl tracking-tight">Holistic Healing</h4>
                    <p className="text-sm text-slate-400 mt-2 font-medium leading-relaxed">Patient-centric and outcome-based programming.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 group cursor-pointer aspect-[4/5]">
                <Image 
                  src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80" 
                  alt="Compassionate Senior Patient Care" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/0 transition-colors duration-1000" />
                <div className="absolute inset-0 flex items-end justify-start p-12">
                   <div className="w-20 h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                     <Play size={28} className="fill-current ml-1" />
                   </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-50 hidden md:block"
              >
                  <div className="text-3xl font-serif font-black text-primary">98%</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Patient Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SocialProof />
      <WhyEvolve />
      <Services />
      
      {/* Gentle Philosophy Section */}
      <section className="py-32 md:py-48 bg-secondary relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[100px] border-white/5 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/60 font-black text-[10px] uppercase tracking-[0.4em] mb-12"
               >
                  Our Philosophy
               </motion.div>
               <motion.h3 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 1 }}
                 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-20 leading-[0.95] tracking-tighter"
               >
                  <span className="italic font-medium text-white/40">"Empower your therapy team with</span> <br />
                  <span className="text-primary font-black uppercase">in-house leadership</span> <br />
                  <span className="italic font-medium text-white/40">and clinical advancement."</span>
               </motion.h3>
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
                 className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 pt-16 border-t border-white/10"
               >
                  <div className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-white/5 border border-white/10 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <ShieldCheck size={32} strokeWidth={1.5} />
                     </div>
                     <div className="text-left">
                        <div className="font-black text-2xl font-serif text-white tracking-tight">Trust & Transparency</div>
                        <div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mt-2">True Partnerships Only</div>
                     </div>
                  </div>
                  
                  <div className="h-16 w-px bg-white/10 hidden md:block" />
                  
                  <div className="flex items-center gap-6 group">
                     <div className="relative">
                        <Image 
                           src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80" 
                           alt="Lisa Bebie - President & Founder" 
                           width={72} 
                           height={72} 
                           className="rounded-[1.5rem] object-cover border-2 border-white/10 shadow-2xl group-hover:border-primary transition-all duration-500"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-4 border-secondary flex items-center justify-center" />
                     </div>
                     <div className="text-left">
                        <div className="font-black text-2xl font-serif text-white tracking-tight">Lisa Bebie</div>
                        <div className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mt-2">President & Founder</div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
