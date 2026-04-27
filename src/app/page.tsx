'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import USAMap from '@/components/USAMap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Social Proof — directly below hero */}
      <SocialProof />

      {/* Clinical Excellence — NO side photo */}
      <section className="py-24 md:py-40 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#0284c7]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-6">
                Clinical Excellence
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#0f172a] mb-6 leading-[0.95] tracking-tighter">
                Modern Therapy <br />
                <span className="text-[#0284c7] italic font-medium">Managed with Care</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed font-light max-w-2xl">
                Our vision is to provide the most rewarding and creative therapy consulting management model through compassionate leadership, clinical passion, and evidence-based experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: 'Evidence-Based Practice',
                  desc: 'Real-time PDPM analysis, MDS accuracy reviews, and data-driven business intelligence customized to your market dynamics.',
                },
                {
                  icon: HeartPulse,
                  title: 'Holistic Patient Outcomes',
                  desc: 'Patient-centric, outcome-based programming that drives 5-star ratings and measurable clinical improvements across your facility.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Compliance & Trust',
                  desc: 'Full denial management, regulatory oversight, and proactive audit support—so you can focus on care, not paperwork.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-xl hover:bg-white transition-all duration-500 group"
                >
                  <div className="w-14 h-14 bg-[#0284c7]/10 text-[#0284c7] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-black text-[#0f172a] font-serif text-xl tracking-tight mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#0284c7] transition-all"
              >
                Explore All Services <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 text-[#0f172a] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all"
              >
                Free Cost Analysis
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <WhyEvolve />
      <Services />

      {/* Philosophy / Dark Quote Section */}
      <section className="py-24 md:py-40 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230284c7\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-7xl text-[#0284c7]/20 font-serif mb-0 leading-none">"</div>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[0.95] tracking-tighter -mt-4">
                Empower your therapy team with
                <span className="text-[#0284c7] italic"> in-house leadership</span>
                <br />and clinical advancement.
              </h3>
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="h-px w-16 bg-[#0284c7]/30" />
                <p className="text-white/40 text-xs font-black uppercase tracking-[0.3em]">Evolve Philosophy</p>
                <div className="h-px w-16 bg-[#0284c7]/30" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0284c7] text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all shadow-[0_0_40px_rgba(2,132,199,0.3)]"
                >
                  Start Your Evolution <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:8883865820"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  <Phone size={15} /> (888) 386-5820
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive USA Service Area Map */}
      <USAMap />

      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
