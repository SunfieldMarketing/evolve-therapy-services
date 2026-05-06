'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import USAMap from '@/components/USAMap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, CheckCircle2, BarChart3, Award
} from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';

const clinicalStats = [
  { value: 100, suffix: '%', label: 'Revenue Retained', icon: TrendingUp, desc: 'Your facility keeps every dollar of therapy revenue - zero shared with us.' },
  { value: 20, suffix: '+', label: 'Years Experience', icon: Award, desc: 'Two decades of LTC clinical and operational leadership expertise.' },
  { value: 24, suffix: '/7', label: 'Clinical Support', icon: Clock, desc: 'Round-the-clock access to your dedicated regional director.' },
  { value: 15, suffix: '+', label: 'States Served', icon: Users, desc: 'Active management across major U.S. markets and growing.' },
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
    desc: 'Full denial management, regulatory audit support, and proactive SNF compliance oversight - so you focus on care, not paperwork.',
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
  { num: '03', title: 'Seamless Launch', desc: 'Your regional director is embedded with your team - minimal disruption, maximum momentum.' },
  { num: '04', title: 'Continuous Evolution', desc: 'Ongoing audits, education, and operational refinement keep you ahead of regulatory and clinical changes.' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* ── Clinical Excellence ── */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-[#0284c7]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <BlurFade delay={0.1}>
              <div className="mb-5">
                <AnimatedGradientText>Clinical Excellence</AnimatedGradientText>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter">
                Modern Therapy<br />
                <span className="text-[#0284c7] italic font-medium">Managed with Care</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} className="text-lg text-slate-500 max-w-md leading-relaxed font-light shrink-0">
              Our vision is to provide the most creative therapy consulting model through compassionate leadership, clinical passion, and evidence-based experience.
            </BlurFade>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
            {clinicalStats.map((stat, i) => (
              <BlurFade
                delay={0.1 + i * 0.1}
                key={i}
                className="group relative p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between min-h-[140px] md:min-h-[160px] overflow-hidden"
              >
                <stat.icon size={20} className="relative z-10 text-[#0284c7] mb-3 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] mb-1">
                    <NumberTicker value={stat.value} suffix={stat.suffix} delay={0.5 + i * 0.1} />
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Service Grid - Clean Equal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 md:mb-32">
            {clinicalServices.map((item, i) => (
              <BlurFade
                delay={0.1 + i * 0.08}
                key={i}
                className="relative overflow-hidden group p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-[0_40px_80px_-20px_rgba(2,132,199,0.12)] transition-all duration-500"
              >
                {/* BorderBeam on hover only */}
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={6} colorFrom="#38bdf8" colorTo="#0284c7" />
                
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border bg-slate-50 text-[#0284c7] border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full text-[#0284c7] bg-[#0284c7]/5">
                    {item.tag}
                  </span>
                </div>
                
                <h4 className="font-black font-serif text-2xl lg:text-3xl tracking-tight mb-4 relative z-10 text-[#0f172a]">
                  {item.title}
                </h4>
                
                <p className="text-[15px] md:text-base leading-relaxed font-light relative z-10 max-w-sm text-slate-500">
                  {item.desc}
                </p>
              </BlurFade>
            ))}
          </div>

          {/* Process Timeline */}
          <BlurFade delay={0.2} className="bg-[#0f172a] rounded-3xl md:rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#0284c7]/5 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10 md:mb-14">
                <div className="w-px h-8 bg-[#0284c7]" />
                <h3 className="text-2xl md:text-3xl font-serif font-black text-white tracking-tighter">How We Work</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {processSteps.map((step, i) => (
                  <BlurFade delay={0.3 + i * 0.12} key={i} className="relative group">
                    <div className="text-5xl md:text-6xl font-serif font-black text-[#0284c7]/20 group-hover:text-[#0284c7]/40 mb-4 leading-none transition-colors duration-300">{step.num}</div>
                    <h4 className="font-black text-white text-base md:text-lg mb-2">{step.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </BlurFade>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.4} className="flex flex-col sm:flex-row gap-3 mt-12 md:mt-16 items-center lg:items-start lg:justify-center">
            <Link href="/services">
              <ShimmerButton background="#0f172a" borderRadius="9999px" className="group">
                <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#38bdf8] transition-colors">Explore All Services</span>
                <ArrowRight size={15} className="ml-1" />
              </ShimmerButton>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-[#0f172a] px-7 py-[0.875rem] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:outline-none"
            >
              Free Cost Analysis
            </Link>
          </BlurFade>
        </div>
      </section>

      <WhyEvolve />

      <Services />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── USA Coverage Map ── */}
      <USAMap />

      <FAQ />

      {/* Philosophy / CTA Dark Section (Empower your therapy team...) */}
      <section className="py-20 md:py-36 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0284c7 0%, transparent 50%)' }} />
        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
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
                  'Tiered pricing - costs drop as you scale',
                  'Denial management & audit support',
                  'In-house to contracted, or reverse',
                ].map((item, i) => (
                  <BlurFade delay={0.4 + i * 0.05} key={item} className="flex items-center gap-3 text-white/70 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-[#0284c7] shrink-0" />
                    {item}
                  </BlurFade>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.6)" borderRadius="9999px" className="group">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Start Your Evolution</span>
                    <ArrowRight size={15} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </ShimmerButton>
                </Link>
                <a
                  href="tel:8883865820"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-[0.875rem] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <Phone size={14} /> (888) 386-5820
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
