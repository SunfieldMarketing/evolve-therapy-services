'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { 
  Stethoscope, 
  BarChart3, 
  GraduationCap, 
  LineChart, 
  Users2, 
  ClipboardCheck,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Phone,
  Target,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Heart,
  Award,
  Check,
  Layers,
  Activity,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const detailedServices = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and comprehensive business intelligence customized to your market market dynamics.',
    details: [
      'Clinical analysis for PDPM case mix efficiency',
      'Business Intelligence customized to your market',
      'Data-driven clinical discharge planning',
      'Functional outcome maximization'
    ],
    icon: Stethoscope,
    image: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1778095358/199776c9-037b-44b0-bd72-274885e0b165.png',
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Medicaid & Quality Measures',
    desc: 'Deep education and analysis of your site’s Quality Measures and case mix efficiency ensuring peak performance in reimbursement.',
    details: [
      'Education and analysis of site QMs',
      'Case mix efficiency audits',
      'SNF staff & administration training',
      'Regulatory compliance mapping'
    ],
    icon: ClipboardCheck,
    image: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1778092798/d9b89396-c963-4b64-a929-b0ce959244cd.png',
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'Reimbursement Optimization',
    desc: 'Progressive programs focused on MPPR effects and optimizing therapy service reimbursement across LTC and Outpatient environments.',
    details: [
      'MPPR optimization strategies',
      'Payer mix analysis',
      'Outpatient therapy growth',
      'Long-term reimbursement stability'
    ],
    icon: Target,
    image: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1778093795/42b46240-f14c-44d5-b1e5-dc4d831cb2d6.png',
    href: '/services/reimbursement-optimization'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning processes for long-term operational success and fiscal stability.',
    details: [
      'Staffing model optimization',
      'Labor cost management',
      'Efficiency benchmarking',
      'Resource allocation strategy'
    ],
    icon: LineChart,
    image: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1778095199/d4b294cb-7d97-4dd6-857b-eee76e1777a5.png',
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model while maximizing your goals and retaining all revenue.',
    details: [
      'Full recruitment support',
      'Retention of 100% therapy revenue',
      'Culture and brand continuity',
      'Management model implementation'
    ],
    icon: Users2,
    image: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1778095821/9c7538a6-3e33-4a50-a1d5-dbd97914fa26.png',
    href: '/services/in-house-transition'
  },
  {
    title: 'In-House Resource Hub',
    desc: 'Expert clinical resource in recruitment, denial management, unlimited therapy education, and real-time data analysis for in-house teams.',
    details: [
      'Denial management expert resource',
      'Unlimited clinical education/CEUs',
      'Real-time data analytics',
      'Operational health auditing'
    ],
    icon: GraduationCap,
    image: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1778095465/fe87049e-5e24-4b1e-bc2a-b265ebd01ddf.png',
    href: '/services/in-house-resource-hub'
  }
];

export default function ServicesPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ── Services Hero (Video-Only Background) ── */}
      <section className="relative w-full overflow-hidden flex flex-col justify-center bg-[#0f172a] h-screen pt-20">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Video Layer - Over-scaled (130%) to hide YouTube UI completely */}
          <div className={cn(
             "absolute inset-0 z-10 pointer-events-none transition-opacity duration-[2s] ease-in-out overflow-hidden bg-[#0f172a]",
             videoLoaded ? "opacity-100" : "opacity-100"
          )}>
            <div className="absolute inset-0 w-[130%] h-[130%] -top-[15%] -left-[15%]">
              <iframe
                src="https://www.youtube.com/embed/8_nVbI7NcOw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=8_nVbI7NcOw&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&start=5&enablejsapi=1"
                title="Services background"
                allow="autoplay; encrypted-media"
                className="w-full h-full border-0 pointer-events-none opacity-40"
              />
            </div>
            {/* Click/Touch blocker to ensure no interaction with video */}
            <div className="absolute inset-0 bg-transparent z-20" />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 z-30 bg-[#0f172a]/70" />
          <div className="absolute inset-0 z-30 bg-gradient-to-b from-[#0f172a]/95 via-transparent to-[#0f172a]/95" />
        </div>

        {/* Scaled Content Container */}
        <div className="relative z-40 w-full px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 py-20">
          <BlurFade delay={0.1}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <div className="w-full lg:w-3/5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[9px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl backdrop-blur-md">
                    <Sparkles size={12} /> The Evolution Advantage
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white tracking-tighter leading-[0.85] mb-10 drop-shadow-2xl">
                    Our <br />
                    <span className="text-[#0284c7] italic">Services.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-3xl mb-12">
                    Assist operators who want to take their therapy teams in-house by choosing our management model; and assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                     <Link href="/contact">
                        <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="0.75rem" className="px-10 py-5">
                           <span className="font-black uppercase tracking-[0.25em] text-[11px] text-white">Contact Our Team</span>
                        </ShimmerButton>
                     </Link>
                     <div className="flex items-center gap-4 text-white/30 font-black uppercase text-[9px] tracking-[0.3em] hover:text-white transition-colors">
                        <Phone size={12} className="text-[#38bdf8]" /> (888) 386-5820
                     </div>
                  </div>
               </div>

               <div className="w-full lg:w-2/5">
                  <div className="grid gap-6">
                     {[
                        { title: 'Visionary Strategy', desc: 'Creative consulting through compassionate leadership.', icon: Target },
                        { title: 'Clinical Passion', desc: 'Results that drive bottom line success.', icon: Heart }
                     ].map((pill, i) => (
                        <div key={i} className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden">
                           <div className="flex gap-5 items-start relative z-10">
                              <div className="w-10 h-10 rounded-xl bg-[#0284c7] flex items-center justify-center text-white shadow-lg shrink-0">
                                 <pill.icon size={18} />
                              </div>
                              <div>
                                 <h4 className="text-[10px] font-black text-white tracking-widest uppercase mb-1">{pill.title}</h4>
                                 <p className="text-white/30 text-xs font-light leading-relaxed italic">"{pill.desc}"</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </BlurFade>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
           <div className="w-px h-8 bg-gradient-to-b from-[#0284c7] to-transparent" />
           <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.4em]">Explore Services</div>
        </div>
      </section>

      {/* ── Services Showcase ── */}
      <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <BlurFade delay={0.1}>
              <div className="mb-6 flex justify-center">
                 <AnimatedGradientText>Strategic Solutions</AnimatedGradientText>
              </div>
              <h2 className="text-4xl md:text-7xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.9]">
                Clinical Excellence <br />
                <span className="text-[#0284c7] italic font-medium">In Every Vertical</span>
              </h2>
            </BlurFade>
          </div>

          <div className="space-y-20 md:space-y-32">
            {detailedServices.map((service, i) => (
              <BlurFade delay={0.1} key={i} className="group">
                <div className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-24 items-center",
                  i % 2 !== 0 && "lg:flex-row-reverse"
                )}>
                  <div className="w-full lg:w-[45%]">
                    <div className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-slate-200">
                       <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-[2s] brightness-[1.05] contrast-[1.02]" 
                        priority={i < 2}
                       />
                       <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                       <service.icon size={12} />
                       Expert Solution
                    </div>
                    <h3 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] mb-6 leading-none tracking-tighter group-hover:text-[#0284c7] transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
                      {service.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center shrink-0">
                              <Check size={12} strokeWidth={3} />
                           </div>
                           <span className="text-sm font-semibold text-[#0f172a]/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.href}>
                       <ShimmerButton background="#0f172a" shimmerColor="rgba(255,255,255,0.1)" borderRadius="1rem" className="group/btn px-8 py-4">
                          <span className="font-black uppercase tracking-[0.2em] text-[10px] text-white">Deep Dive into Service</span>
                          <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                       </ShimmerButton>
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology ── */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mb-24">
               <BlurFade delay={0.1}>
                  <div className="text-[10px] font-black text-[#0284c7] uppercase tracking-[0.4em] mb-6">Our Methodology</div>
                  <h2 className="text-5xl md:text-7xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.9] mb-10">
                     How We Help <br />
                     <span className="text-[#0284c7] italic font-medium">Your Business Grow</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
               <div className="space-y-12 flex flex-col justify-center">
                  {[
                    { title: 'Identify Financial Opportunity', icon: TrendingUp, desc: 'Every partnership starts with a data audit.' },
                    { title: 'Streamline Clinical Operations', icon: Sparkles, desc: 'Evidence-based workflows that ensure documentation accuracy.' },
                    { title: 'Strategic Staff Growth', icon: Briefcase, desc: 'Groom internal talent for regional positions.' }
                  ].map((item, i) => (
                    <BlurFade key={i} delay={0.2 + i * 0.1}>
                       <div className="flex gap-8 group">
                          <div className="w-16 h-16 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shadow-lg border border-slate-100">
                             <item.icon size={28} />
                          </div>
                          <div>
                             <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-3">{item.title}</h4>
                             <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                    </BlurFade>
                  ))}
               </div>
               
               <BlurFade delay={0.5} className="h-full">
                 <div className="bg-[#0f172a] rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden group h-full flex flex-col justify-between">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                       <div>
                          <div className="w-12 h-12 bg-[#0284c7] rounded-xl flex items-center justify-center mb-8">
                             <ShieldCheck size={24} />
                          </div>
                          <h4 className="text-3xl md:text-5xl font-serif font-black mb-8 leading-tight tracking-tighter">Clinical Integrity & <br /><span className="text-[#38bdf8] italic">Oversight You Can Trust.</span></h4>
                          <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                             "Our management model assist in-house programs with clinically proven education and compliance oversight to allow LTC operators to truly EVOLVE."
                          </p>
                       </div>
                       <Link href="/contact" className="group/btn inline-flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#38bdf8] transition-colors mt-auto">
                          Inquire About Compliance Oversight <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                       </Link>
                    </div>
                 </div>
               </BlurFade>
            </div>
         </div>
      </section>

      {/* ── Dynamic Pricing ── */}
      <Pricing />

      {/* ── Evolution Advantage ── */}
      <section className="py-24 md:py-44 bg-slate-50 overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
               <BlurFade delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">The Evolution Advantage</div>
                  <h2 className="text-5xl md:text-7xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.9]">
                     The Evolve <br />
                     <span className="text-[#0284c7] italic font-medium">Difference.</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
               {[
                 { title: 'Revenue Retention', icon: Activity, color: 'from-blue-600/10 to-blue-600/5', border: 'hover:border-blue-600/30' },
                 { title: 'Culture Continuity', icon: UserCheck, color: 'from-indigo-600/10 to-indigo-600/5', border: 'hover:border-indigo-600/30' },
                 { title: 'Operational Stability', icon: Layers, color: 'from-emerald-600/10 to-emerald-600/5', border: 'hover:border-emerald-600/30' },
                 { title: 'Clinical Education', icon: GraduationCap, color: 'from-slate-600/10 to-slate-600/5', border: 'hover:border-slate-600/30' }
               ].map((item, i) => (
                 <BlurFade key={i} delay={0.2 + i * 0.1}>
                    <div className={cn("group p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden", item.border)}>
                       <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", item.color)} />
                       <div className="relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0f172a] mb-10 group-hover:bg-white transition-all duration-500 shadow-sm">
                             <item.icon size={28} strokeWidth={1.5} className="group-hover:text-[#0284c7] transition-colors" />
                          </div>
                          <h4 className="text-xl md:text-2xl font-serif font-black text-[#0f172a] mb-6 tracking-tight group-hover:text-[#0284c7] transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">Retain 100% of revenue and groom internal talent for leadership.</p>
                       </div>
                    </div>
                 </BlurFade>
               ))}
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
