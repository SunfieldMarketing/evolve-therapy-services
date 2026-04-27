'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import USAMap from '@/components/USAMap';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, CheckCircle2, BarChart3, Award
} from 'lucide-react';

const clinicalStats = [
  { value: '100%', label: 'Revenue Retained', icon: TrendingUp, desc: 'Your facility keeps every dollar of therapy revenue — zero shared with us.' },
  { value: '20+', label: 'Years Experience', icon: Award, desc: 'Two decades of LTC clinical and operational leadership expertise.' },
  { value: '24/7', label: 'Clinical Support', icon: Clock, desc: 'Round-the-clock access to your dedicated regional director.' },
  { value: '15+', label: 'States Served', icon: Users, desc: 'Active management across major U.S. markets and growing.' },
];

const clinicalServices = [
  {
    icon: Microscope,
    title: 'Evidence-Based Practice',
    desc: 'Real-time PDPM case mix analysis, MDS accuracy reviews, and data-driven business intelligence customized to your specific market.',
    tag: 'Analytics',
  },
  {
    icon: HeartPulse,
    title: 'Holistic Patient Outcomes',
    desc: 'Patient-centric, outcome-based programming that drives five-star ratings and measurable improvements in functional independence.',
    tag: 'Clinical',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Management',
    desc: 'Full denial management, regulatory audit support, and proactive SNF compliance oversight — so you focus on care, not paperwork.',
    tag: 'Regulatory',
  },
  {
    icon: BarChart3,
    title: 'Medicaid Case Mix',
    desc: 'Detailed quality measure analysis, case mix efficiency reviews, and Medicaid reimbursement optimization for your payer mix.',
    tag: 'Reimbursement',
  },
  {
    icon: Users,
    title: 'In-House Transition',
    desc: 'Seamless migration from contract therapy to an in-house model with staff retention, culture building, and zero disruption to care.',
    tag: 'Transition',
  },
  {
    icon: TrendingUp,
    title: 'Operational Growth',
    desc: 'Tiered pricing reductions as your business scales, grooming internal staff for regional leadership roles within your own organization.',
    tag: 'Growth',
  },
];

const processSteps = [
  { num: '01', title: 'Free Analysis', desc: 'We perform a complimentary cost savings analysis and identify clinical and financial opportunity.' },
  { num: '02', title: 'Custom Strategy', desc: 'A tailored therapy management plan is developed for your census size, payer mix, and staffing model.' },
  { num: '03', title: 'Seamless Launch', desc: 'Your regional director is embedded with your team — minimal disruption, maximum momentum.' },
  { num: '04', title: 'Continuous Evolution', desc: 'Ongoing audits, education, and operational refinement keep you ahead of regulatory and clinical changes.' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* ── Clinical Excellence ── */}
      <section className="py-20 md:py-36 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-[#0284c7]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-5">
                Clinical Excellence
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter">
                Modern Therapy<br />
                <span className="text-[#0284c7] italic font-medium">Managed with Care</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 max-w-md leading-relaxed font-light shrink-0"
            >
              Our vision is to provide the most creative therapy consulting model through compassionate leadership, clinical passion, and evidence-based experience.
            </motion.p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
            {clinicalStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-[#0f172a] text-white flex flex-col justify-between min-h-[140px] md:min-h-[180px]"
              >
                <stat.icon size={20} className="text-[#0284c7] mb-3 md:mb-4" />
                <div>
                  <div className="text-3xl md:text-4xl font-serif font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-24">
            {clinicalServices.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-xl hover:bg-white transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-[#0284c7]/10 text-[#0284c7] rounded-xl flex items-center justify-center group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-400">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0284c7] bg-[#0284c7]/10 px-3 py-1.5 rounded-full">{item.tag}</span>
                </div>
                <h4 className="font-black text-[#0f172a] font-serif text-lg md:text-xl tracking-tight mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Timeline */}
          <div className="bg-[#0f172a] rounded-3xl md:rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#0284c7]/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10 md:mb-14">
                <div className="w-px h-8 bg-[#0284c7]" />
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white tracking-tighter">How We Work</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative"
                  >
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-4 left-full w-full h-px border-t border-dashed border-white/10 -translate-x-4" />
                    )}
                    <div className="text-5xl md:text-6xl font-serif font-black text-[#0284c7]/20 mb-4 leading-none">{step.num}</div>
                    <h4 className="font-black text-white text-base md:text-lg mb-2">{step.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-12 md:mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#0f172a] text-white px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#0284c7] transition-all"
            >
              Explore All Services <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-[#0f172a] px-7 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              Free Cost Analysis
            </Link>
          </motion.div>
        </div>
      </section>

      <WhyEvolve />
      <Services />

      {/* ── Philosophy / CTA Dark Section ── */}
      <section className="py-20 md:py-36 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0284c7 0%, transparent 50%)' }} />
        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-6xl sm:text-7xl text-[#0284c7]/20 font-serif mb-0 leading-none">"</div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-[0.95] tracking-tighter -mt-4">
                Empower your therapy team with
                <span className="text-[#0284c7] italic"> in-house leadership</span>
                <br />and clinical advancement.
              </h3>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 mb-10 md:mb-14 text-left max-w-2xl mx-auto">
                {[
                  'Retain 100% of therapy revenue',
                  'Customized CEU education for staff',
                  'Regional director embedded on-site',
                  'Tiered pricing — costs drop as you scale',
                  'Denial management & audit support',
                  'In-house to contracted, or reverse',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-[#0284c7] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all shadow-[0_0_40px_rgba(2,132,199,0.3)]"
                >
                  Start Your Evolution <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:8883865820"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  <Phone size={14} /> (888) 386-5820
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── USA Coverage Map ── */}
      <USAMap />

      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
