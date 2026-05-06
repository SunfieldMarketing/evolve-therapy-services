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
  GraduationCap, 
  LineChart, 
  Users2, 
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Heart,
  Award,
  Layers,
  Activity,
  UserCheck,
  Check,
  ChevronDown
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
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    // Safety reveal to ensure page doesn't stay black
    const timer = setTimeout(() => setVideoStarted(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ── Redesigned Editorial Hero ── */}
      <section className="relative w-full h-screen flex flex-col justify-end bg-black overflow-hidden">
        {/* Background Layer: Absolute Video with Heavy Cropping */}
        <div className="absolute inset-0 z-0">
           <div className={cn(
             "absolute inset-0 z-10 transition-opacity duration-[3s] ease-in-out bg-black",
             videoStarted ? "opacity-100" : "opacity-100"
           )}>
             <div className="absolute inset-0 w-[140%] h-[140%] -top-[20%] -left-[20%] pointer-events-none select-none">
                <iframe
                  src="https://www.youtube.com/embed/8_nVbI7NcOw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=8_nVbI7NcOw&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&start=5&enablejsapi=1"
                  title="Services cinematic"
                  allow="autoplay; encrypted-media"
                  className="w-full h-full border-0 opacity-50 contrast-[1.1] saturate-[0.8]"
                  onLoad={() => setTimeout(() => setVideoStarted(true), 1000)}
                />
             </div>
             {/* Invisible blocking layer to prevent any hover-state UI on video */}
             <div className="absolute inset-0 z-20 bg-transparent cursor-default" />
           </div>

           {/* Editorial Gradient Overlays */}
           <div className="absolute inset-0 z-30 bg-gradient-to-t from-black via-black/40 to-transparent" />
           <div className="absolute inset-0 z-30 bg-gradient-to-r from-black/80 via-transparent to-black/20" />
        </div>

        {/* Content Area: Editorial Split Layout */}
        <div className="relative z-40 container mx-auto px-6 lg:px-12 pb-24 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-20">
            
            {/* Left Column: Big Statement */}
            <div className="w-full lg:w-[60%]">
               <BlurFade delay={0.2}>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-[1px] bg-[#0284c7]" />
                     <span className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.5em]">The Clinical Standard</span>
                  </div>
                  <h1 className="text-7xl md:text-[12vw] lg:text-[10vw] font-serif font-black text-white leading-[0.82] tracking-tighter mb-12">
                     <span className="block">EVOLVE</span>
                     <span className="text-[#0284c7] italic block ml-[0.1em]">SERVICES.</span>
                  </h1>
                  <div className="max-w-2xl">
                     <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-12 border-l-2 border-[#0284c7]/30 pl-8">
                        Assisting operators who want to take their therapy teams in-house by choosing our management model; and assisting in-house programs with clinical proven education and compliance oversight.
                     </p>
                     <Link href="/contact" className="inline-flex group">
                        <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="0.5rem" className="px-12 py-6">
                           <span className="font-black uppercase tracking-[0.2em] text-[12px] text-white">Partner with Evolve</span>
                           <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </ShimmerButton>
                     </Link>
                  </div>
               </BlurFade>
            </div>

            {/* Right Column: Floating Vision Pillars */}
            <div className="w-full lg:w-[30%]">
               <BlurFade delay={0.4}>
                  <div className="space-y-6">
                     {[
                        { title: 'Compassion', desc: 'Creative therapy consulting through leadership.', icon: Heart },
                        { title: 'Excellence', desc: 'Evidence-based results for your bottom line.', icon: Award }
                     ].map((pill, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl hover:bg-white/[0.07] transition-all duration-700">
                           <div className="flex items-center gap-6 mb-4">
                              <pill.icon size={20} className="text-[#0284c7]" />
                              <h4 className="text-[11px] font-black text-white uppercase tracking-widest">{pill.title}</h4>
                           </div>
                           <p className="text-white/30 text-sm font-light leading-relaxed italic">"{pill.desc}"</p>
                        </div>
                     ))}
                  </div>
               </BlurFade>
            </div>
          </div>
        </div>

        {/* Vertical Watermark */}
        <div className="absolute right-[-5vw] top-1/2 -translate-y-1/2 rotate-90 pointer-events-none hidden xl:block">
           <span className="text-white/[0.03] text-[20vw] font-serif font-black tracking-tighter leading-none select-none">
              EST. 2024
           </span>
        </div>

        {/* Subtle Scroll Down */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 animate-bounce">
           <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">Explore Deeply</span>
           <ChevronDown size={14} className="text-[#0284c7]" />
        </div>
      </section>

      {/* ── Services Showcase ── */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mb-32">
            <BlurFade delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[2px] bg-[#0284c7]" />
                 <span className="text-[#0284c7] font-black uppercase text-[10px] tracking-[0.4em]">Service Catalog</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.85]">
                Clinical Mastery <br />
                <span className="text-[#0284c7] italic">In Every Detail.</span>
              </h2>
            </BlurFade>
          </div>

          <div className="space-y-32 md:space-y-48">
            {detailedServices.map((service, i) => (
              <BlurFade delay={0.1} key={i} className="group">
                <div className={cn(
                  "flex flex-col lg:flex-row gap-16 lg:gap-32 items-center",
                  i % 2 !== 0 && "lg:flex-row-reverse"
                )}>
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] bg-slate-100">
                       <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[3s] brightness-[1.02]" 
                        priority={i < 2}
                       />
                       <div className="absolute inset-0 bg-[#0284c7]/5 mix-blend-overlay" />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                       <service.icon size={12} className="text-[#0284c7]" />
                       Vertical: {i + 1}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 leading-[0.9] tracking-tighter group-hover:text-[#0284c7] transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                      {service.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                           <div className="w-6 h-6 rounded-lg bg-[#0284c7]/5 text-[#0284c7] flex items-center justify-center shrink-0">
                              <Check size={14} strokeWidth={3} />
                           </div>
                           <span className="text-sm font-semibold text-[#0f172a]/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={service.href}>
                       <ShimmerButton background="#0f172a" shimmerColor="rgba(255,255,255,0.1)" borderRadius="1rem" className="group/btn px-10 py-5">
                          <span className="font-black uppercase tracking-[0.2em] text-[11px] text-white">Full Service Specs</span>
                          <ArrowRight size={14} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
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
      <section className="py-32 md:py-56 bg-slate-50 overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mb-32">
               <BlurFade delay={0.1}>
                  <div className="text-[10px] font-black text-[#0284c7] uppercase tracking-[0.4em] mb-8">Clinical Methodology</div>
                  <h2 className="text-6xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.85] mb-12">
                     Data-Driven <br />
                     <span className="text-[#0284c7] italic">Growth Logic.</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">
               <div className="space-y-16 flex flex-col justify-center">
                  {[
                    { title: 'Audit Opportunity', icon: TrendingUp, desc: 'Every partnership starts with a detailed clinical and financial audit.' },
                    { title: 'Workflow Precision', icon: Sparkles, desc: 'We implement evidence-based protocols that ensure compliance.' },
                    { title: 'Sustainable Culture', icon: Briefcase, desc: 'Grooming internal talent for regional leadership roles.' }
                  ].map((item, i) => (
                    <BlurFade key={i} delay={0.2 + i * 0.1}>
                       <div className="flex gap-10 group">
                          <div className="w-20 h-20 shrink-0 rounded-3xl bg-white flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-700 shadow-2xl border border-slate-100">
                             <item.icon size={32} strokeWidth={1.5} />
                          </div>
                          <div>
                             <h4 className="text-3xl font-serif font-black text-[#0f172a] mb-4">{item.title}</h4>
                             <p className="text-slate-500 font-light leading-relaxed text-lg">{item.desc}</p>
                          </div>
                       </div>
                    </BlurFade>
                  ))}
               </div>
               
               <BlurFade delay={0.5} className="h-full">
                 <div className="bg-[#0f172a] rounded-[5rem] p-16 md:p-24 text-white relative overflow-hidden group h-full flex flex-col justify-between shadow-[0_50px_100px_rgba(2,132,199,0.2)]">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                       <div>
                          <div className="w-16 h-16 bg-[#0284c7] rounded-2xl flex items-center justify-center mb-12 shadow-2xl">
                             <ShieldCheck size={32} />
                          </div>
                          <h4 className="text-4xl md:text-6xl font-serif font-black mb-12 leading-[0.9] tracking-tighter">Clinical Integrity <br /><span className="text-[#38bdf8] italic">Uncompromised.</span></h4>
                          <p className="text-white/40 text-xl font-light leading-relaxed mb-16 italic">
                             "Allowing LTC operators to truly EVOLVE through clinical education and oversight."
                          </p>
                       </div>
                       <Link href="/contact" className="group/btn inline-flex items-center gap-4 text-white font-black uppercase text-[11px] tracking-[0.4em] hover:text-[#38bdf8] transition-colors mt-auto">
                          Inquire about Oversight <ArrowRight size={18} className="group-hover/btn:translate-x-4 transition-transform" />
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
      <section className="py-32 md:py-56 bg-white overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-32">
               <BlurFade delay={0.1}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-sm">Core Advantages</div>
                  <h2 className="text-6xl md:text-9xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.82]">
                     The Evolve <br />
                     <span className="text-[#0284c7] italic">Mastery.</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
               {[
                 { title: 'Revenue Retention', icon: Activity, color: 'from-blue-600/10 to-blue-600/5', border: 'hover:border-blue-600/30' },
                 { title: 'Culture Continuity', icon: UserCheck, color: 'from-indigo-600/10 to-indigo-600/5', border: 'hover:border-indigo-600/30' },
                 { title: 'Operational Stability', icon: Layers, color: 'from-emerald-600/10 to-emerald-600/5', border: 'hover:border-emerald-600/30' },
                 { title: 'Clinical Education', icon: GraduationCap, color: 'from-slate-600/10 to-slate-600/5', border: 'hover:border-slate-600/30' }
               ].map((item, i) => (
                 <BlurFade key={i} delay={0.2 + i * 0.1}>
                    <div className={cn("group p-12 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all duration-700 h-full flex flex-col justify-between relative overflow-hidden", item.border)}>
                       <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#0f172a] mb-12 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-700 shadow-xl">
                             <item.icon size={32} strokeWidth={1.5} />
                          </div>
                          <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-8 tracking-tight group-hover:text-[#0284c7] transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-base leading-relaxed font-light">Retain 100% of revenue and groom internal talent for facility stability.</p>
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
