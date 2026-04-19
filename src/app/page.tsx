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
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Featured Video / Clinical Highlight */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-[1px] bg-primary" />
                 <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Clinical Excellence</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-secondary mb-8 leading-[1.05] tracking-tight">
                Modern Therapy <br />
                <span className="text-gradient">Managed Differently.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Our vision is to provide the most rewarding and creative therapy consulting management model through leadership, passion, and experience.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-heading">Data-Driven</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">Real-time analysis for clinical success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-heading">Holistic Care</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">Outcome-based therapy programming.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 lg:col-span-7 relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer border border-slate-100">
                <Image 
                  src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80" 
                  alt="Clinical Video Reel" 
                  width={900} 
                  height={600} 
                  className="object-cover w-full h-[550px] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-24 h-24 dark-glass rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                     <Play size={40} className="text-white fill-white ml-2" />
                   </div>
                </div>
                <div className="absolute bottom-8 left-8 p-6 dark-glass rounded-3xl border border-white/10 pointer-events-none">
                  <p className="font-black text-white/50 uppercase tracking-[0.2em] text-[10px] mb-2">Now Playing</p>
                  <p className="font-heading font-bold text-xl text-white">The Evolution of Care</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SocialProof />
      <WhyEvolve />
      <Services />
      
      {/* Dynamic Philosophy Section */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10" 
              style={{ backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
         
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 dark-glass font-bold text-xs uppercase tracking-widest text-primary mb-8">
                  A Holistic Approach
               </div>
               <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-12 leading-[1.1] tracking-tight">
                  "Empower your therapy team with <span className="text-gradient">in-house employment</span> and career advancement."
               </h3>
               <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-6">
                     <ShieldCheck className="text-primary" size={48} />
                     <div className="text-left">
                        <div className="font-black text-2xl font-heading tracking-wide">100% Retained</div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Therapy Revenue Control</div>
                     </div>
                  </div>
                  <div className="h-10 w-px bg-white/10 hidden md:block" />
                  <div className="flex items-center gap-6">
                     <Image 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                        alt="Lisa Bebie" 
                        width={64} 
                        height={64} 
                        className="rounded-full object-cover border-2 border-primary shadow-[0_0_20px_rgba(67,56,202,0.5)]"
                     />
                     <div className="text-left">
                        <div className="font-bold text-xl font-heading">Lisa Bebie</div>
                        <div className="text-primary text-[10px] uppercase tracking-[0.2em] font-black">President & Founder</div>
                     </div>
                  </div>
               </div>
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
