'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import USAMap from '@/components/USAMap';
import { BlurFade } from '@/components/magicui/blur-fade';
import { MapPin, Phone, Mail, ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Locations" 
        subtitle="Serving facilities across Ohio and the surrounding regions from our headquarters in Avon Lake."
        videoKey="locations"
      />

      {/* Interactive USA Coverage Map - Moved to top focus */}
      <USAMap />

      <section className="py-20 md:py-32 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
             <BlurFade 
               delay={0.1}
               className="lg:col-span-5 flex"
             >
                <div className="bg-[#0f172a] p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden w-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                     <MapPin size={240} />
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 font-black text-[10px] uppercase tracking-[0.3em] mb-10 w-max">
                    Global HQ
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-serif font-black mb-12 tracking-tighter leading-none">Headquarters</h3>
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl group-hover:-translate-y-1 transition-transform">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-black text-[#38bdf8] uppercase tracking-[0.2em] text-[9px] mb-2">Principal Office</p>
                        <p className="text-xl font-serif font-medium text-white/90">31641 Compass Cove<br />Avon Lake, OH 44012</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl group-hover:-translate-y-1 transition-transform">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-black text-[#38bdf8] uppercase tracking-[0.2em] text-[9px] mb-2">Direct Support</p>
                        <p className="text-xl font-serif font-medium text-white/90">(888) 386-5820</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl group-hover:-translate-y-1 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-black text-[#38bdf8] uppercase tracking-[0.2em] text-[9px] mb-2">Digital Inquiries</p>
                        <p className="text-xl font-serif font-medium text-white/90">info@evolvetherapyservices.com</p>
                      </div>
                    </div>
                  </div>
                </div>
             </BlurFade>
             
             <div className="lg:col-span-7 flex flex-col justify-center gap-8">
                <BlurFade 
                   delay={0.2}
                   className="p-10 lg:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group"
                >
                   <h3 className="text-3xl lg:text-4xl font-serif font-black text-[#0f172a] mb-6 tracking-tighter leading-tight flex items-center gap-4 group-hover:text-[#0284c7] transition-colors">
                     <TrendingUp className="text-[#0284c7]" size={36} />
                     Regional Strategy
                   </h3>
                   <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-6">
                     Evolve provides holistic therapy, operational oversight, and denial management for the LTC industry, enabling operators to look beyond the day-to-day and focus on long-term growth. Our regional directors are strategically placed to ensure 24/7 support.
                   </p>
                   <p className="text-sm md:text-base text-slate-400 leading-relaxed font-normal">
                     Through extensive state-level networks and clinical partners, we make geographic scale feel local and intimate.
                   </p>
                </BlurFade>
                
                <BlurFade 
                   delay={0.3}
                   className="relative overflow-hidden group p-10 lg:p-14 rounded-[3rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500"
                >
                   <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#0284c7]/5 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/2 pointer-events-none group-hover:bg-[#0f172a]/5 transition-colors" />
                   
                   <div className="relative z-10">
                     <div className="inline-flex px-3 py-1 bg-[#0284c7]/10 text-[#0284c7] text-[10px] uppercase font-black tracking-widest rounded-full mb-6">Site Coordination</div>
                     <h4 className="text-2xl md:text-3xl font-serif font-black text-[#0f172a] mb-4 tracking-tight leading-tight group-hover:text-[#0f172a] transition-colors">Your Local Clinical Partner</h4>
                     <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light">
                       Whether you are already in-house or using a third-party company, Evolve acts as your local clinical partner. We maintain a presence that feels like we are part of your team, because we are. Our site coordinators provide face-to-face mentorship and operations strategy directly at your facility.
                     </p>
                   </div>
                </BlurFade>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
