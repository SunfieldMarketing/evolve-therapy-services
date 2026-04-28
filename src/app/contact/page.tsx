'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, MapPin, ArrowRight, Share2, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#0284c7] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* ── Left Sidebar: Leadership Connectivity ── */}
              <div className="lg:col-span-5 bg-[#0f172a] p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col justify-between min-h-[600px]">
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0284c7]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-12">
                       Reach Out
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-black text-white mb-8 tracking-tighter leading-[0.95]">
                      Connect with our <br />
                      <span className="text-[#38bdf8] italic font-medium">Leadership</span>
                    </h1>
                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-sm">
                      Call us today and tell us about your current status. Discover how we can provide an immediate impact on your facility's operational outcomes.
                    </p>
                  </motion.div>

                  <div className="space-y-12">
                    {[
                      { icon: Phone, label: 'Secure Line', val: '(888) 386-5820', sub: 'Direct regional support' },
                      { icon: Mail, label: 'Email Inquiry', val: 'info@evolvetherapyservices.com', sub: 'Partnership & general info' },
                      { icon: Clock, label: 'Support Hours', val: 'Mon - Fri: 8am - 6pm EST', sub: 'Dedicated clinical hours' }
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-6 group"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-all duration-300 shrink-0">
                          <item.icon size={24} strokeWidth={1.5} />
                        </div>
                        <div className="pt-1">
                          <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">{item.label}</div>
                          <div className="text-xl font-serif font-bold text-white group-hover:text-[#38bdf8] transition-colors">{item.val}</div>
                          <div className="text-xs text-white/30 mt-1">{item.sub}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="relative z-10 pt-16 border-t border-white/5"
                >
                  <p className="text-white/20 italic font-serif text-sm">
                    "Empowering local care through national expertise."
                  </p>
                </motion.div>
              </div>

              {/* ── Right Panel: The Form Journey ── */}
              <div className="lg:col-span-7 bg-white p-10 md:p-16 lg:p-24 relative flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-xl mx-auto w-full"
                >
                  <div className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-px bg-[#0284c7]" />
                      <span className="text-[#0284c7] font-black uppercase tracking-[0.3em] text-[10px]">Partner With Us</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] mb-6 tracking-tighter leading-[0.9]">
                      Let's Evolve <br />
                      <span className="text-[#0284c7] italic font-medium">Together</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                      Ready to maximize your clinical and financial potential? Contact us for a free clinical and financial cost savings analysis with zero obligation.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 relative">
                    {/* The Form Fields */}
                    <div className="space-y-12">
                      <div className="space-y-10">
                        <div className="flex items-start gap-5 group">
                          <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0284c7]">
                            <Phone size={18} />
                          </div>
                          <div>
                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">Direct Line</div>
                            <div className="text-lg font-black text-[#0f172a]">(888) 386-5820</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 group">
                          <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0284c7]">
                            <Mail size={18} />
                          </div>
                          <div>
                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">Email Connect</div>
                            <div className="text-sm font-black text-[#0f172a]">info@evolvetherapyservices.com</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 group">
                          <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0284c7]">
                            <MapPin size={18} />
                          </div>
                          <div>
                            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.25em] mb-1">Headquarters</div>
                            <div className="text-sm text-slate-500 leading-relaxed font-bold">
                              31641 Compass Cove <br />
                              Avon Lake, OH 44012
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Form/Card Style — Based on Mockup */}
                    <div className="relative">
                      <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)] border border-slate-100 absolute -top-32 md:-top-40 right-0 w-full md:w-[380px] z-20">
                         <h3 className="text-2xl font-serif font-black text-[#0f172a] mb-2 leading-tight tracking-tight">Secure a <br /> Consultation</h3>
                         <p className="text-[11px] text-slate-400 font-medium mb-8">Our clinical directors respond within 24 hours.</p>
                         
                         <form className="space-y-4">
                           <div className="flex gap-4">
                              <input placeholder="F" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20" />
                              <input placeholder="L" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20" />
                           </div>
                           <input placeholder="Corporate Email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20" />
                           <textarea placeholder="Tell us about your facility goals..." rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 resize-none" />
                           <button className="w-full bg-[#0284c7] text-white py-4 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#0369a1] transition-all">
                             Submit Inquiry <ArrowRight size={14} />
                           </button>
                         </form>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Extended Trust / Capabilities Strip ── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'Compliance Defense', desc: 'Expert audit protection and denial management for clinical security.' },
                { icon: Share2, title: 'Strategic Network', sub: 'National resources paired with localized operational care.' },
                { icon: Headphones, title: '24/7 Response', desc: 'Direct access to regional clinical directors for rapid support.' }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:shadow-xl transition-all duration-500">
                   <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0284c7] mb-8">
                      <item.icon size={24} />
                   </div>
                   <h4 className="text-xl font-serif font-black text-[#0f172a] mb-4">{item.title}</h4>
                   <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc || item.sub}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
