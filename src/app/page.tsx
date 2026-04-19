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
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      
      {/* Featured Clinical Approach */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                 Clinical Excellence
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-black text-secondary mb-6 leading-tight">
                Modern Therapy <br />
                <span className="text-primary italic font-medium">Managed with Care</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our vision is to provide the most rewarding and creative therapy consulting management model through compassionate leadership, clinical passion, and evidence-based experience.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Microscope size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-serif text-lg">Evidence-Based</h4>
                    <p className="text-sm text-slate-500 mt-1">Real-time analysis for superior clinical formulation.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-sky-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <HeartPulse size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-serif text-lg">Holistic Healing</h4>
                    <p className="text-sm text-slate-500 mt-1">Patient-centric and outcome-based programming.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 group cursor-pointer aspect-video md:aspect-square lg:aspect-[4/3]">
                <Image 
                  src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80" 
                  alt="Clinical Care Process" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                     <Play size={32} className="text-primary fill-primary ml-1" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SocialProof />
      <WhyEvolve />
      <Services />
      
      {/* Gentle Philosophy Section */}
      <section className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-8">
                  Our Philosophy
               </div>
               <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-secondary mb-12 leading-tight">
                  <span className="italic font-medium text-slate-500">"Empower your therapy team with</span> <span className="text-primary font-black">in-house leadership</span> <span className="italic font-medium text-slate-500">and clinical advancement."</span>
               </h3>
               <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10 border-t border-slate-200">
                  <div className="flex items-center gap-6">
                     <div className="w-14 h-14 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-sm text-primary">
                        <ShieldCheck size={28} strokeWidth={1.5} />
                     </div>
                     <div className="text-left">
                        <div className="font-black text-xl font-serif text-secondary">Trust & Transparency</div>
                        <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">True Partnership</div>
                     </div>
                  </div>
                  <div className="h-12 w-px bg-slate-200 hidden md:block" />
                  <div className="flex items-center gap-6">
                     <Image 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                        alt="Lisa Bebie" 
                        width={56} 
                        height={56} 
                        className="rounded-full object-cover border-2 border-white shadow-md"
                     />
                     <div className="text-left">
                        <div className="font-bold text-lg font-serif text-secondary">Lisa Bebie</div>
                        <div className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold mt-1">President & Founder</div>
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
