'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ServiceArea from '@/components/ServiceArea';
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

      <section className="py-32 md:py-56 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-stretch">
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="lg:col-span-5 flex"
             >
                <div className="bg-secondary p-12 lg:p-20 rounded-[4rem] text-white shadow-[0_80px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden w-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-12 text-white/5">
                     <MapPin size={300} />
                  </div>
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-black text-[10px] uppercase tracking-[0.4em] mb-12 self-start"
                  >
                    Global HQ
                  </motion.div>
                  <h3 className="text-5xl lg:text-6xl font-serif font-black mb-16 tracking-tighter leading-none">Headquarters</h3>
                  <div className="space-y-12 relative z-10">
                    <div className="flex items-start gap-8 group">
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-black text-white/40 uppercase tracking-[0.3em] text-[10px] mb-3">Principal Office</p>
                        <p className="text-2xl font-serif font-black">31641 Compass Cove<br />Avon Lake, OH 44012</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-8 group">
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="font-black text-white/40 uppercase tracking-[0.3em] text-[10px] mb-3">Direct Support</p>
                        <p className="text-2xl font-serif font-black">(888) 386-5820</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-8 group">
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="font-black text-white/40 uppercase tracking-[0.3em] text-[10px] mb-3">Digital Inquiries</p>
                        <p className="text-xl font-serif font-black break-all">info@evolve.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-20">
                     <a href="/contact" className="flex items-center justify-center gap-3 bg-white text-secondary py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary hover:text-white transition-all shadow-2xl shadow-black/20 group">
                        Contact Regional Director <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                     </a>
                  </div>
                </div>
             </motion.div>
             
             <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
                <motion.div 
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1 }}
                   className="p-16 lg:p-24 rounded-[4rem] bg-slate-50 border border-slate-100 shadow-2xl shadow-black/[0.02]"
                >
                   <h3 className="text-4xl lg:text-5xl font-serif font-black text-secondary mb-10 tracking-tighter leading-tight">Regional Strategy</h3>
                   <p className="text-2xl text-slate-500 leading-relaxed font-light italic">
                     Evolve provides holistic therapy, operational oversight, and denial management for the LTC industry, enabling operators to look beyond the day-to-day and focus on long-term growth. Our regional directors are strategically placed to ensure 24/7 support for your facility.
                   </p>
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.2 }}
                   className="p-16 lg:p-24 rounded-[4rem] bg-primary/5 border border-primary/10 relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 p-12 text-primary/5">
                      <TrendingUp size={120} />
                   </div>
                   <h4 className="text-3xl font-serif font-black text-primary mb-8 tracking-tight leading-tight">Site Coordination</h4>
                   <p className="text-secondary leading-relaxed text-xl font-light">
                     Whether you are already in-house or using a third-party company, Evolve acts as your local clinical partner. We maintain a presence that feels like we are part of your team, because we are.
                   </p>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <ServiceArea />
      </motion.section>

      <Footer />
    </main>
  );
}
