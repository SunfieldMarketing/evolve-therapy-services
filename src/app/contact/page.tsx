'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock, MapPin, ArrowRight, Share2, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#0284c7] selection:text-white">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* ── Left Sidebar: Clinical Connectivity ── */}
            <div className="lg:col-span-12 xl:col-span-5 bg-[#0f172a] rounded-[3.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden flex flex-col justify-between min-h-[700px] shadow-2xl">
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
                 <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[#0284c7] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-12">
                   Clinical Oversight
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 tracking-tighter leading-[0.9]">
                  Direct Access to <br />
                  <span className="text-[#38bdf8] italic font-medium">Leadership</span>
                </h1>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-16 max-w-sm">
                  At Evolve, you aren't just another facility on a list. You have a direct line to our clinical directors who manage your regional operations.
                </p>

                <div className="space-y-12">
                  {[
                    { icon: Phone, label: 'National Support', val: '(888) 386-5820', sub: '24/7 Clinical Support Line' },
                    { icon: Mail, label: 'Inquiries', val: 'info@evolvetherapyservices.com', sub: 'Corporate & Partnership' },
                    { icon: Clock, label: 'Availability', val: 'Mon - Fri | 8am - 6pm EST', sub: 'Weekend on-call supported' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-all duration-500">
                        <item.icon size={26} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">{item.label}</div>
                        <div className="text-2xl font-serif font-bold text-white group-hover:text-[#38bdf8] transition-colors">{item.val}</div>
                        <div className="text-xs text-white/30 mt-1">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-16 border-t border-white/5 flex items-center justify-between">
                 <div className="text-white/20 text-xs font-black uppercase tracking-widest ">HQ: Avon Lake, OH</div>
                 <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                 </div>
              </div>
            </div>

            {/* ── Right Panel: Strategic Analysis Form ── */}
            <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-center">
               <div className="max-w-2xl mx-auto w-full">
                  <div className="mb-16">
                    <div className="inline-flex items-center gap-3 mb-8">
                       <div className="w-12 h-px bg-[#0284c7]" />
                       <span className="text-[#0284c7] font-black uppercase tracking-[0.3em] text-[10px]">Secure Your Analysis</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] mb-8 tracking-tighter leading-[0.9]">
                      Establish Your <br />
                      <span className="text-[#0284c7] italic font-medium">Strategic Roadmap</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                      Our clinical and financial analysis identify immediate cost-saving opportunities for your facility. Submit your details for a 24-hour response.
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 transition-all font-medium" placeholder="E.g. Sarah Mitchell" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Facility Name</label>
                        <input className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 transition-all font-medium" placeholder="E.g. Evolve Care Center" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Work Email</label>
                      <input className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 transition-all font-medium" placeholder="your@facility.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Primary Inquiry Goal</label>
                      <select className="w-full bg-white border border-slate-200 rounded-[1.5rem] p-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 transition-all font-medium appearance-none">
                        <option>In-House Transition Analysis</option>
                        <option>Clinical Compliance Audit</option>
                        <option>Denial Management Support</option>
                        <option>Staff Recruitment & Education</option>
                        <option>General Operational Consulting</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message / Specific Goals</label>
                      <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-[2rem] p-8 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 transition-all font-medium resize-none" placeholder="Tell us about your current therapy status..." />
                    </div>
                    
                    <button className="w-full mt-6">
                      <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="w-full py-7 group">
                        <span className="font-black uppercase tracking-[0.3em] text-[11px] text-white">Initialize Partnership</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </ShimmerButton>
                    </button>
                    
                    <p className="text-center text-slate-400 text-xs font-light mt-8">
                       By submitting, you agree to our privacy policy and clinical data terms.
                    </p>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities Highlights ── */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
           <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 grid md:grid-cols-3 gap-12 border border-slate-100">
              {[
                { title: 'Immediate Impact', desc: 'Baseline results typically delivered within 48 hours of initial clinical data submission.' },
                { title: 'Director-Led', desc: 'Every inquiry is personally reviewed and responded to by a Clinical Regional Director.' },
                { title: 'Risk-Free Audit', desc: 'Our initial SWOT and cost-savings analysis are performed with zero legacy strings attached.' }
              ].map((item, i) => (
                <div key={i}>
                   <h4 className="text-xl font-serif font-black text-[#0f172a] mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#0284c7]" /> {item.title}
                   </h4>
                   <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
