'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import { Mail, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Contact" 
        italicWord="Us" 
        subtitle="Ready to evolve your clinical and financial potential? We would love to discuss how to grow with you."
        videoKey="contact"
      />

      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0284c7]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0f172a]/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Panel - Dark Themed Info */}
              <div className="lg:col-span-5 bg-[#0f172a] relative overflow-hidden text-white flex flex-col justify-between p-10 md:p-14 lg:p-16">
                 {/* Internal blob */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                 
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="relative z-10"
                 >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 font-black text-[9px] uppercase tracking-[0.3em] mb-10">
                      Reach Out
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 tracking-tighter leading-[1.05]">
                      Connect with our <br />
                      <span className="text-[#38bdf8] italic font-medium">Leadership</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-light mb-12 max-w-sm">
                      Call us today and tell us about your current status. Discover how we can provide an immediate impact on your facility's operational outcomes.
                    </p>
                    
                    <div className="space-y-8">
                      {[
                        { icon: Phone, label: 'Secure Line', value: '(888) 386-5820', desc: 'Direct regional support' },
                        { icon: Mail, label: 'Email Inquiry', value: 'info@evolvetherapyservices.com', desc: 'Partnership & general info' },
                        { icon: Clock, label: 'Support Hours', value: 'Mon - Fri: 8am - 6pm EST', desc: 'Dedicated clinical hours' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-5 group">
                           <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#38bdf8] shrink-0 border border-white/10 group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-all duration-300">
                              <item.icon size={20} strokeWidth={2} />
                           </div>
                           <div>
                              <p className="font-bold text-white/30 uppercase tracking-[0.2em] text-[10px] mb-1">{item.label}</p>
                              <p className="text-lg font-serif font-medium text-white group-hover:text-[#38bdf8] transition-colors duration-300">{item.value}</p>
                              <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                 </motion.div>

                 {/* Decorative End Quote */}
                 <div className="relative z-10 mt-20 pt-10 border-t border-white/10">
                    <p className="text-white/30 italic font-serif text-sm">
                      "Empowering local care through national expertise."
                    </p>
                 </div>
              </div>

              {/* Right Panel - Form */}
              <div className="lg:col-span-7 flex items-center justify-center p-10 md:p-14 lg:p-20 relative">
                 <div className="w-full max-w-2xl mx-auto">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                   >
                     <div className="mb-10 text-center lg:text-left">
                       <h3 className="text-2xl md:text-3xl font-serif font-black text-[#0f172a] mb-4">Request a Cost Analysis</h3>
                       <p className="text-slate-500 font-light text-sm md:text-base">
                         Fill out the form below. We respond strictly confidentially and never sell your data to third parties.
                       </p>
                     </div>
                     <Contact />
                   </motion.div>
                 </div>
                 
                 {/* Internal decorative lines */}
                 <div className="absolute top-0 left-0 w-px h-full bg-slate-100 hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
