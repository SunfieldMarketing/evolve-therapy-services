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
        videoUrl="https://player.vimeo.com/external/494635105.sd.mp4?s=d007c0892f39edbb979873d6e556488d0859585e&profile_id=165&oauth2_token_id=57447761"
      />

      <section className="py-32 md:py-56 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 items-start">
            <div className="lg:col-span-5">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
               >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-12">
                    Get in touch
                  </motion.div>
                  <h2 className="text-5xl md:text-7xl font-serif font-black text-secondary mb-16 tracking-tighter leading-[0.95]">
                    Direct <br />
                    <span className="text-primary italic font-medium uppercase text-6xl">Communication</span>
                  </h2>
                  
                  <div className="space-y-12">
                    {[
                      { icon: Phone, label: 'Call Us Today', value: '(888) 386-5820', desc: 'Direct regional support' },
                      { icon: Mail, label: 'Email Inquiry', value: 'info@evolve.com', desc: 'Partnership & general info' },
                      { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 8am - 6pm EST', desc: 'Clinical support hours' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-8 group">
                         <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-secondary shrink-0 shadow-xl border border-slate-50 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <item.icon size={28} strokeWidth={1.5} />
                         </div>
                         <div>
                            <p className="font-black text-secondary uppercase tracking-[0.3em] text-[10px] mb-3">{item.label}</p>
                            <p className="text-2xl font-serif font-black text-secondary group-hover:text-primary transition-colors duration-500">{item.value}</p>
                            <p className="text-slate-400 text-sm mt-1 font-medium">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-20 p-12 lg:p-16 rounded-[4rem] bg-secondary text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                     <h4 className="text-3xl font-serif font-black mb-8 relative z-10 leading-tight">Expert Analysis</h4>
                     <p className="text-white/40 mb-0 leading-relaxed italic text-lg font-light relative z-10">
                       "Interested in more information or a free cost savings analysis? Our objective is to help improve our clients' financial, operations, and clinical performance."
                     </p>
                  </div>
               </motion.div>
            </div>

            <div className="lg:col-span-7">
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
               >
                 <Contact />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
