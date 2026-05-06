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
  Award
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const detailedServices = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and comprehensive business intelligence customized to your market market dynamics.',
    icon: Stethoscope,
    tags: ['PDPM Efficiency', 'Clinical Strategy'],
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Case Mix & Quality Measures',
    desc: 'Deep education and analysis of your site’s Quality Measures and case mix efficiency ensuring peak performance in reimbursement.',
    icon: ClipboardCheck,
    tags: ['Quality Measures', 'Compliance'],
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'Reimbursement Optimization',
    desc: 'Progressive programs focused on MPPR effects and optimizing therapy service reimbursement across LTC and Outpatient environments.',
    icon: Target,
    tags: ['MPPR Strategy', 'Financial Success'],
    href: '/services/reimbursement-optimization'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning processes for long-term operational success and fiscal stability.',
    icon: LineChart,
    tags: ['Operational Success', 'Fiscally Responsible'],
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model while maximizing your goals and retaining all revenue.',
    icon: Users2,
    tags: ['Direct Hire', 'Culture Building'],
    href: '/services/in-house-transition'
  },
  {
    title: 'In-House Resource Hub',
    desc: 'Expert clinical resource in recruitment, denial management, unlimited therapy education, and real-time data analysis for in-house teams.',
    icon: GraduationCap,
    tags: ['Risk Mitigation', 'Data Analysis'],
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
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2">
              <BlurFade delay={0.1}>
                <div className="mb-8">
                  <AnimatedGradientText>The Evolve Mission</AnimatedGradientText>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.9] md:leading-[0.85]">
                  Bridging Gaps, <br />
                  <span className="text-[#0284c7] italic font-medium">Elevating Care.</span>
                </h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-xl">
                  It is our vision to assist operators who want to take their therapy teams in-house by choosing our management model; and to assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE to the next level.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <div className="font-black text-[#0f172a] uppercase text-[10px] tracking-widest">Our Vision</div>
                      <p className="text-sm text-slate-400 leading-relaxed">To provide the most creative therapy consulting model through compassionate leadership and clinical passion.</p>
                   </div>
                   <div className="space-y-2">
                      <div className="font-black text-[#0f172a] uppercase text-[10px] tracking-widest">Our Approach</div>
                      <p className="text-sm text-slate-400 leading-relaxed">Evidence-based experience that drives measurable results for your bottom line and your residents.</p>
                   </div>
                </div>
              </BlurFade>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <BlurFade delay={0.3}>
                  <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl group">
                     <Image 
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
                        alt="Clinical Excellence" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                      />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent" />
                     <div className="absolute bottom-10 left-10 right-10">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                           <div className="text-white text-3xl font-serif italic mb-2">"Evolve to the next level."</div>
                           <div className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.3em]">Operational Oversight</div>
                        </div>
                     </div>
                  </div>
               </BlurFade>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0284c7]/10 rounded-full blur-3xl -z-10" />
               <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#0284c7]/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── All Services Grid ── */}
      <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <BlurFade delay={0.1}>
              <div className="mb-6 flex justify-center">
                 <AnimatedGradientText>Full Service Catalog</AnimatedGradientText>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.95]">
                Comprehensive Resources <br />
                <span className="text-[#0284c7] italic font-medium">For Your Business</span>
              </h2>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {detailedServices.map((service, i) => (
              <BlurFade delay={0.1 + i * 0.1} key={i}>
                <Link
                  href={service.href}
                  className="group block h-full focus-visible:outline-none"
                >
                  <div className="flex flex-col p-10 rounded-[2.5rem] bg-white border border-slate-100 group-hover:border-[#0284c7]/30 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.06)] transition-all duration-500 h-full relative overflow-hidden">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0284c7] mb-8 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                      <service.icon size={26} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-serif font-black text-[#0f172a] mb-4 tracking-tight group-hover:text-[#0284c7] transition-colors duration-500">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed mb-8 text-sm font-light">{service.desc}</p>
                    <div className="mt-auto flex items-center justify-between">
                       <div className="flex gap-2">
                        {service.tags.slice(0, 1).map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] rounded-lg">
                            {tag}
                          </span>
                        ))}
                       </div>
                       <ArrowRight size={16} className="text-[#0284c7] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Evolve Methodology: How We Help Your Business ── */}
      <section className="py-24 md:py-40 bg-white overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mb-24">
               <BlurFade delay={0.1}>
                  <div className="text-[10px] font-black text-[#0284c7] uppercase tracking-[0.4em] mb-6">Our Methodology</div>
                  <h2 className="text-5xl md:text-7xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.9] mb-10">
                     How We Help <br />
                     <span className="text-[#0284c7] italic font-medium">Your Business Grow</span>
                  </h2>
                  <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                     We don't just provide consulting; we integrate into your facility as a clinical partner, focusing on the intersection of patient care and financial health.
                  </p>
               </BlurFade>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
               <div className="space-y-12">
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
               <div className="bg-[#0f172a] rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div>
                        <div className="w-12 h-12 bg-[#0284c7] rounded-xl flex items-center justify-center mb-8">
                           <ShieldCheck size={24} />
                        </div>
                        <h4 className="text-3xl md:text-5xl font-serif font-black mb-8 leading-tight tracking-tighter">Compliance is <br /><span className="text-[#38bdf8] italic">Non-Negotiable.</span></h4>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                           "Our management model assist in-house programs with clinically proven education and compliance oversight to allow LTC operators to truly EVOLVE."
                        </p>
                     </div>
                     <Link href="/contact" className="group/btn inline-flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#38bdf8] transition-colors">
                        Inquire About Compliance Oversight <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ── Dynamic Pricing Model Section ── */}
      <Pricing />

      {/* ── The Evolve Difference: High-End Feature Display ── */}
      <section className="py-24 md:py-44 bg-slate-50 overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
               <BlurFade delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">The Evolution Advantage</div>
                  <h2 className="text-5xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.9]">
                     The Evolve <br />
                     <span className="text-[#0284c7] italic font-medium">Difference</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
               {[
                 { 
                   title: 'Revenue Retention', 
                   desc: 'Retain 100% of therapy revenue. Maximize your goals while you maintain total control over your financial destiny.',
                   icon: Award,
                   color: 'bg-blue-600'
                 },
                 { 
                   title: 'Culture Continuity', 
                   desc: 'Your staff remains YOUR team. Groom internal talent for leadership positions rather than relying on vendors.',
                   icon: Users2,
                   color: 'bg-indigo-600'
                 },
                 { 
                   title: 'Operational Stability', 
                   desc: 'Employee engagement facilitates exceptional outcomes. Stable teams mean higher five-star ratings and functional independence.',
                   icon: Heart,
                   color: 'bg-emerald-600'
                 },
                 { 
                   title: 'Clinical Education', 
                   desc: 'Customized CEU education for therapists and LTC staff as a premium service. We bridge the gap with expert knowledge.',
                   icon: GraduationCap,
                   color: 'bg-slate-800'
                 }
               ].map((item, i) => (
                 <BlurFade key={i} delay={0.2 + i * 0.1}>
                    <div className="relative group p-12 md:p-16 bg-white rounded-[3rem] border border-slate-100 hover:border-[#0284c7]/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col justify-between overflow-hidden h-full">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 group-hover:bg-[#0284c7]/5 rounded-bl-[4rem] transition-colors duration-500" />
                       <div>
                          <div className={cn("w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white mb-10 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500", item.color)}>
                             <item.icon size={28} />
                          </div>
                          <h4 className="text-3xl font-serif font-black text-[#0f172a] mb-6 tracking-tight group-hover:text-[#0284c7] transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-lg font-light leading-relaxed">{item.desc}</p>
                       </div>
                       <div className="mt-12 flex items-center gap-2 text-[#0284c7] font-black uppercase text-[10px] tracking-[0.2em] group-hover:gap-4 transition-all">
                          Evolve Standard <div className="w-8 h-px bg-[#0284c7]/30" /> <Sparkles size={14} />
                       </div>
                    </div>
                 </BlurFade>
               ))}
            </div>

            <BlurFade delay={0.6} className="mt-24 text-center">
               <Link href="/contact" className="focus-visible:outline-none">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6">
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
