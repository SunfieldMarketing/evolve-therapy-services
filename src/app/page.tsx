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
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Clinical Excellence</span>
              <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
                Modern Therapy <br />
                <span className="text-primary italic">Managed</span> Differently
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed italic">
                "Our vision is to provide the most rewarding and creative therapy consulting management model through leadership, passion, and experience."
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <Microscope size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Data-Driven</h4>
                    <p className="text-sm text-slate-400">Real-time analysis for clinical success.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Holistic Care</h4>
                    <p className="text-sm text-slate-400">Outcome-based therapy programming.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group cursor-pointer">
                <Image 
                  src="/images/video_thumb.png" 
                  alt="Clinical Video Reel" 
                  width={800} 
                  height={600} 
                  className="object-cover w-full h-[500px] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 shadow-2xl group-hover:scale-110 transition-transform">
                     <Play size={40} className="text-white fill-white ml-2" />
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50">
                  <p className="font-black text-secondary uppercase tracking-[0.2em] text-[10px] mb-1">Now Playing</p>
                  <p className="font-serif text-lg italic text-primary">The Evolution of Care</p>
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
      <section className="py-32 bg-secondary text-white relative">
         <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-8 block">A Holistic Approach</span>
               <h3 className="text-4xl md:text-7xl font-serif mb-12 italic leading-tight">
                  "Empower your therapy team with <span className="text-primary">in-house employment</span> and career advancement."
               </h3>
               <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-12 border-t border-white/10">
                  <div className="flex items-center gap-4">
                     <ShieldCheck className="text-primary" size={40} />
                     <div className="text-left">
                        <div className="font-bold text-2xl">100% Retained</div>
                        <div className="text-white/40 text-sm">Therapy Revenue Control</div>
                     </div>
                  </div>
                  <div className="h-10 w-px bg-white/10 hidden md:block" />
                  <div className="flex items-center gap-4">
                     <Image 
                        src="/images/lisa.png" 
                        alt="Lisa Bebie" 
                        width={60} 
                        height={60} 
                        className="rounded-full object-cover border-2 border-primary"
                     />
                     <div className="text-left">
                        <div className="font-bold">Lisa Bebie</div>
                        <div className="text-primary text-xs uppercase tracking-widest font-black">President & Founder</div>
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
