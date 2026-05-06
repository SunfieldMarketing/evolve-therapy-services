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
  Check
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1454165833767-027eeed15c3e?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959443?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
    href: '/services/in-house-resource-hub'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Services" 
        subtitle="At Evolve we provide all of the services that you require to provide your patients with the highest possible level of care and service."
        videoKey="services"
      />

      {/* ── Intro: What We Do ── */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <BlurFade delay={0.1}>
                <div className="mb-6">
                  <AnimatedGradientText>The Evolve Mission</AnimatedGradientText>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.95]">
                  Bridging Gaps, <br />
                  <span className="text-[#0284c7] italic font-medium">Elevating Care.</span>
                </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed mb-8 max-w-xl">
                  It is our vision to assist operators who want to take their therapy teams in-house by choosing our management model; and to assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE to the next level.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <div className="font-black text-[#0f172a] uppercase text-[10px] tracking-widest">Our Vision</div>
                      <p className="text-xs text-slate-400 leading-relaxed">To provide the most creative therapy consulting model through compassionate leadership and clinical passion.</p>
                   </div>
                   <div className="space-y-2">
                      <div className="font-black text-[#0f172a] uppercase text-[10px] tracking-widest">Our Approach</div>
                      <p className="text-xs text-slate-400 leading-relaxed">Evidence-based experience that drives measurable results for your bottom line and your residents.</p>
                   </div>
                </div>
              </BlurFade>
            </div>
            <div className="w-full lg:w-1/2">
               <BlurFade delay={0.3} className="h-full">
                  <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl group">
                     <Image 
                        src="https://res.cloudinary.com/dai2pg27n/image/upload/v1778092798/d9b89396-c963-4b64-a929-b0ce959244cd.png" 
                        alt="Clinical Success" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                      />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
                  </div>
               </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Showcase: Alternating High-Light Sections ── */}
      <section className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
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
                    <div className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                       <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                       />
                       <div className="absolute inset-0 bg-[#0284c7]/10 mix-blend-overlay" />
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

      {/* ── The Evolve Advantage: Redone as Editorial Timeline / List ── */}
      <section className="py-24 md:py-44 bg-[#0f172a] overflow-hidden relative">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px]" />
         </div>
         
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-32">
               <BlurFade delay={0.1} className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                     <Sparkles size={14} />
                     The Evolution Advantage
                  </div>
                  <h2 className="text-5xl md:text-8xl font-serif text-white font-black tracking-tighter leading-[0.85]">
                     Why We Are <br />
                     <span className="text-[#38bdf8] italic font-medium text-4xl md:text-7xl">Truly Different.</span>
                  </h2>
               </BlurFade>
               <BlurFade delay={0.2} className="max-w-sm">
                  <p className="text-white/40 text-lg font-light leading-relaxed">
                     A boutique management model that prioritizes your facility's long-term health over third-party profit margins.
                  </p>
               </BlurFade>
            </div>

            <div className="space-y-px border-t border-white/5">
               {[
                 { 
                   title: '100% Revenue Retention', 
                   desc: 'Retain all therapy revenue. We are consultants, not partners in your profit.',
                   icon: Award,
                   stat: '100%'
                 },
                 { 
                   title: 'Culture Continuity', 
                   desc: 'Your staff remains YOUR team. We help you groom internal talent for leadership.',
                   icon: Users2,
                   stat: 'In-House'
                 },
                 { 
                   title: 'Operational Stability', 
                   desc: 'Employee engagement facilitates exceptional outcomes and higher functional independence.',
                   icon: Heart,
                   stat: '5-Star'
                 },
                 { 
                   title: 'Clinical Education', 
                   desc: 'Customized CEU education for therapists and staff as a premium management service.',
                   icon: GraduationCap,
                   stat: 'Expert'
                 }
               ].map((item, i) => (
                 <BlurFade key={i} delay={0.3 + i * 0.1}>
                    <div className="group py-12 md:py-16 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-white/[0.02] transition-colors px-4 rounded-xl">
                       <div className="flex items-center gap-8 md:gap-12 flex-1">
                          <div className="text-4xl md:text-6xl font-serif font-black text-white/10 group-hover:text-[#38bdf8]/40 transition-colors duration-500 min-w-[100px]">
                             {i + 1 < 10 ? `0${i + 1}` : i + 1}
                          </div>
                          <div>
                             <h4 className="text-2xl md:text-4xl font-serif font-black text-white mb-3 group-hover:text-[#38bdf8] transition-colors">{item.title}</h4>
                             <p className="text-white/40 text-sm md:text-lg font-light max-w-xl">{item.desc}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6 md:gap-10 shrink-0">
                          <div className="text-right hidden sm:block">
                             <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Focus Area</div>
                             <div className="text-lg font-black text-white italic">{item.stat}</div>
                          </div>
                          <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] transition-all duration-500">
                             <item.icon size={24} />
                          </div>
                       </div>
                    </div>
                 </BlurFade>
               ))}
            </div>

            <BlurFade delay={0.8} className="mt-24 text-center">
               <Link href="/contact" className="focus-visible:outline-none">
                  <ShimmerButton background="#38bdf8" shimmerColor="rgba(255,255,255,0.5)" borderRadius="9999px" className="px-12 py-6">
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
