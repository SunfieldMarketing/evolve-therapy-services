'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
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
  UserCheck,
  Building2,
  Globe2,
  Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ── Bespoke Services Hero (Combines Mission Ideas) ── */}
      <section className="relative w-full overflow-hidden flex items-center justify-center bg-[#0f172a]" style={{ minHeight: '85vh' }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 pointer-events-none select-none">
            <iframe
              src="https://www.youtube.com/embed/8_nVbI7NcOw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=8_nVbI7NcOw&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&start=5"
              title="Services background cover"
              allow="autoplay; encrypted-media"
              className="absolute inset-0 w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 opacity-40"
            />
            <div className="absolute inset-0 z-10 bg-transparent" />
          </div>
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0f172a]/95 via-[#0f172a]/70 to-white" />
        </div>

        <div className="relative z-30 container mx-auto px-6 lg:px-12 text-center pt-32 pb-20">
          <BlurFade delay={0.1}>
            <div className="flex justify-center mb-8">
               <AnimatedGradientText className="bg-white/10 text-[#38bdf8] border-white/20">The Evolve Mission</AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-white tracking-tighter leading-[0.85] mb-12">
              Our <span className="text-[#0284c7] italic">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-4xl mx-auto mb-16">
              It is our vision to assist operators who want to take their therapy teams in-house by choosing our management model; and to assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE to the next level.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
               <div className="text-left space-y-4">
                  <div className="flex items-center gap-3 font-black text-[#38bdf8] uppercase text-[10px] tracking-[0.4em]">
                     <div className="w-10 h-px bg-[#38bdf8]" /> Our Vision
                  </div>
                  <p className="text-white/40 text-sm md:text-base font-light italic leading-relaxed">"To provide the most creative therapy consulting model through compassionate leadership and clinical passion."</p>
               </div>
               <div className="text-left space-y-4">
                  <div className="flex items-center gap-3 font-black text-[#38bdf8] uppercase text-[10px] tracking-[0.4em]">
                     <div className="w-10 h-px bg-[#38bdf8]" /> Our Approach
                  </div>
                  <p className="text-white/40 text-sm md:text-base font-light italic leading-relaxed">"Evidence-based experience that drives measurable results for your bottom line and your residents."</p>
               </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── Transitionary Social Proof Section ── */}
      <section className="bg-white py-12 relative z-40 -mt-10">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-12">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
                  {[
                    { label: 'Facilities Optimized', value: '50+', icon: Building2 },
                    { label: 'States Represented', value: '12+', icon: Globe2 },
                    { label: 'Therapists Trained', value: '500+', icon: Users },
                    { label: 'Clinical Excellence', value: '100%', icon: Award }
                  ].map((stat, i) => (
                    <BlurFade key={i} delay={0.2 + i * 0.1}>
                       <div className="text-center group">
                          <div className="text-[#0284c7] mb-3 flex justify-center group-hover:scale-110 transition-transform">
                             <stat.icon size={24} strokeWidth={1.5} />
                          </div>
                          <div className="text-3xl font-serif font-black text-[#0f172a] mb-1">{stat.value}</div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                       </div>
                    </BlurFade>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ── Services Showcase: Alternating High-Light Sections ── */}
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

      {/* ── Methodology: How We Help Your Business ── */}
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
                    { 
                      title: 'Identify Financial Opportunity', 
                      icon: TrendingUp,
                      desc: 'Every partnership starts with a data audit. We identify where your facility is losing revenue due to inefficient PDPM coding or staffing misalignment.' 
                    },
                    { 
                      title: 'Streamline Clinical Operations', 
                      icon: Sparkles,
                      desc: 'We implement evidence-based workflows that ensure clinical documentation accurately reflects the high-level care your team is providing.' 
                    },
                    { 
                      title: 'Strategic Staff Growth', 
                      icon: Briefcase,
                      desc: 'By moving to an in-house model, we help you groom internal talent for regional positions, reducing turnover and building a sustainable culture.' 
                    }
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

      {/* ── Dynamic Pricing Model Section ── */}
      <Pricing />

      {/* ── The Evolve Advantage: 4-Card Professional Layout ── */}
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
                 { 
                   title: 'Revenue Retention', 
                   desc: 'Retain 100% of all therapy revenue instead of paying shared percentages to vendors.',
                   icon: Activity,
                   color: 'from-blue-600/10 to-blue-600/5',
                   border: 'hover:border-blue-600/30'
                 },
                 { 
                   title: 'Culture Continuity', 
                   desc: 'Your staff remains your team. Groom internal talent for leadership within your own walls.',
                   icon: UserCheck,
                   color: 'from-indigo-600/10 to-indigo-600/5',
                   border: 'hover:border-indigo-600/30'
                 },
                 { 
                   title: 'Operational Stability', 
                   desc: 'Employee engagement facilitates exceptional outcomes and long-term facility stability.',
                   icon: Layers,
                   color: 'from-emerald-600/10 to-emerald-600/5',
                   border: 'hover:border-emerald-600/30'
                 },
                 { 
                   title: 'Clinical Education', 
                   desc: 'Customized CEU education for therapists and LTC staff as a premium management service.',
                   icon: GraduationCap,
                   color: 'from-slate-600/10 to-slate-600/5',
                   border: 'hover:border-slate-600/30'
                 }
               ].map((item, i) => (
                 <BlurFade key={i} delay={0.2 + i * 0.1}>
                    <div className={cn(
                      "group p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden",
                      item.border
                    )}>
                       <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", item.color)} />
                       <div className="relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0f172a] mb-10 group-hover:bg-white transition-all duration-500 shadow-sm">
                             <item.icon size={28} strokeWidth={1.5} className="group-hover:text-[#0284c7] transition-colors" />
                          </div>
                          <h4 className="text-xl md:text-2xl font-serif font-black text-[#0f172a] mb-6 tracking-tight group-hover:text-[#0284c7] transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                       </div>
                       <div className="relative z-10 mt-10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                          <div className="w-8 h-1 bg-[#0284c7] rounded-full" />
                       </div>
                    </div>
                 </BlurFade>
               ))}
            </div>

            <BlurFade delay={0.8} className="mt-24 text-center">
               <Link href="/contact" className="focus-visible:outline-none">
                  <ShimmerButton background="#0f172a" shimmerColor="rgba(255,255,255,0.1)" borderRadius="9999px" className="px-12 py-6">
                     <span className="font-black uppercase tracking-[0.25em] text-[12px] text-white">Experience the Difference — Contact Us</span>
                  </ShimmerButton>
               </Link>
            </BlurFade>
         </div>
      </section>

      <Footer />
    </main>
  );
}
