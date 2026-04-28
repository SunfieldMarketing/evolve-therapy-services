'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { 
  Stethoscope, 
  BarChart3, 
  GraduationCap, 
  LineChart, 
  Users2, 
  ClipboardCheck,
  ShieldAlert,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const detailedServices = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical analysis for PDPM case mix efficiency-opportunity and comprehensive business intelligence customized to your market market dynamics.',
    icon: Stethoscope,
    tags: ['PDPM Efficiency', 'Clinical Strategy'],
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Deep education and analysis of your site’s Quality Measures and case mix efficiency ensuring peak performance in reimbursement.',
    icon: ClipboardCheck,
    tags: ['Quality Measures', 'Compliance'],
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'SNF Staff Education',
    desc: 'Professional training for your SNF staff, marketing team, and administration to foster seamless collaboration and operational excellence.',
    icon: GraduationCap,
    tags: ['Workforce Training', 'LTC Education'],
    href: '/services/snf-staff-education'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning processes for long-term operational success and stability.',
    icon: LineChart,
    tags: ['Operational Success', 'Fiscally Responsible'],
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'Denial Management',
    desc: 'Expert resource in recruitment, denial management, unlimited therapy education, and real-time clinical data analysis.',
    icon: ShieldAlert,
    tags: ['Risk Mitigation', 'Data Analysis'],
    href: '/services/denial-management'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model while maximizing your goals and retaining all revenue.',
    icon: Users2,
    tags: ['Direct Hire', 'Culture Building'],
    href: '/services/in-house-transition'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Services" 
        subtitle="Bridging the gap for operators who want to truly EVOLVE their therapy programs to the next level."
        videoKey="services"
      />

      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <BlurFade delay={0.1}>
              <div className="mb-6 flex justify-center">
                 <AnimatedGradientText>Tailored Expertise</AnimatedGradientText>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.95]">
                Expert Solutions for <br />
                <span className="text-[#0284c7] italic font-medium">LTC Operators</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
                At Evolve, we provide the full spectrum of resources required to deliver the highest possible level of patient care while maximizing operational efficiency.
              </p>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {detailedServices.map((service, i) => (
              <BlurFade delay={0.1 + i * 0.1} key={i}>
                <Link
                  href={service.href}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2 rounded-3xl"
                >
                  <div className="flex flex-col md:flex-row gap-8 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] group-hover:border-[#0284c7]/20 transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7]/5 rounded-full blur-3xl group-hover:bg-[#0284c7]/10 transition-colors" />
                    
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0f172a] shrink-0 shadow-lg border border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 z-10">
                      <service.icon size={26} strokeWidth={1.5} />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl lg:text-3xl font-serif font-black text-[#0f172a] mb-4 tracking-tight group-hover:text-[#0284c7] transition-colors duration-500">{service.title}</h3>
                      <p className="text-slate-500 leading-relaxed mb-8 text-sm md:text-base font-light">{service.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-white text-[#0f172a] text-[9px] font-black uppercase tracking-[0.2em] rounded-lg border border-slate-200 group-hover:border-[#0284c7]/20 group-hover:text-[#0284c7] transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* The Evolution Section */}
      <section className="py-24 md:py-36 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0284c7]/10 -skew-x-12 translate-x-1/2 blur-[80px]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <BlurFade delay={0.1} className="mb-10">
                 <AnimatedGradientText>The Evolution</AnimatedGradientText>
              </BlurFade>
              <BlurFade delay={0.2}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-8 leading-[0.95] tracking-tighter">
                  Our Three-Tiered <br />
                  <span className="text-[#38bdf8] italic font-medium uppercase text-3xl md:text-5xl">Pricing Model</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.3}>
                <p className="text-lg md:text-xl text-white/60 mb-12 leading-relaxed font-light">
                  Our unique approach customizes to your size of business and Evolves as you do. Our models allow price reduction as your business grows internally.
                </p>
              </BlurFade>
              
              <div className="space-y-6">
                {[
                  { id: '1', label: 'Starter Tier for New Programs', color: 'bg-white/10', text: 'text-white/60' },
                  { id: '2', label: 'Intermediate Growth Scaling', color: 'bg-[#0284c7] shadow-[0_0_30px_rgba(2,132,199,0.3)]', text: 'text-white' },
                  { id: '3', label: 'Enterprise Peak Operations', color: 'bg-white/5', text: 'text-white/40' }
                ].map((tier, i) => (
                  <BlurFade 
                    delay={0.4 + i * 0.1}
                    key={tier.id}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 p-5 rounded-3xl border border-white/5 transition-all hover:bg-white/5 group"
                  >
                    <div className={`w-12 h-12 ${tier.color} rounded-xl flex items-center justify-center font-black text-lg shrink-0`}>
                      {tier.id}
                    </div>
                    <span className={`text-lg font-bold font-serif ${tier.text} self-center`}>{tier.label}</span>
                  </BlurFade>
                ))}
              </div>
            </div>

            <BlurFade delay={0.5} className="relative">
               <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 lg:p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] text-center relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#0284c7] text-white rounded-[1.5rem] flex items-center justify-center mb-8 shadow-2xl mx-auto border-2 border-[#38bdf8]/50">
                    <Zap size={32} />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-serif font-black text-white mb-6 leading-tight">
                    Already In-House?
                  </h4>
                  <p className="text-white/50 mb-10 leading-relaxed text-base font-light italic">
                    "Let Evolve be your needed resource in recruitment, denial management, and data analysis. We can be your expert so you don’t have to be."
                  </p>
                  <Link href="/contact" className="w-full">
                    <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="w-full justify-center group/btn">
                      <span className="font-black uppercase tracking-[0.2em] text-[10px] text-white">Get an Expert Analysis</span>
                    </ShimmerButton>
                  </Link>
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0284c7]/20 rounded-full blur-[100px] pointer-events-none" />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Feature Compare */}
      <section className="py-24 md:py-40 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12">
          <BlurFade delay={0.2} className="max-w-5xl mx-auto">
            <div className="bg-white border border-slate-100 rounded-[3rem] md:rounded-[4rem] overflow-hidden relative shadow-sm">
               {/* Decorative line */}
               <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-100 hidden lg:block" />
               
               <div className="p-12 lg:p-20">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f172a] text-center mb-16 md:mb-20 font-black tracking-tighter">Why Direct-Hire <br /> <span className="text-[#0284c7] italic font-medium">In-House?</span></h3>
                  <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                     <div className="space-y-12">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 shrink-0">
                            <CheckCircle size={24} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.2em] uppercase text-[10px] mb-3">Revenue Retention</div>
                            <p className="text-base text-slate-500 font-light leading-relaxed">Retain 100% of all therapy revenue instead of paying shares to third-parties.</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 shrink-0">
                            <CheckCircle size={24} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.2em] uppercase text-[10px] mb-3">Culture Continuity</div>
                            <p className="text-base text-slate-500 font-light leading-relaxed">Your staff grows internally towards regional positions and remains as YOUR team.</p>
                          </div>
                        </div>
                     </div>
                     <div className="space-y-12">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 shrink-0">
                            <CheckCircle size={24} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.2em] uppercase text-[10px] mb-3">Operational Growth</div>
                            <p className="text-base text-slate-500 font-light leading-relaxed">Employee engagement facilitates exceptional outcomes for residents.</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group">
                          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-300 shrink-0">
                            <CheckCircle size={24} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.2em] uppercase text-[10px] mb-3">Clinical Education</div>
                            <p className="text-base text-slate-500 font-light leading-relaxed">Customized CEU/education for therapists and LTC staff as a premium service.</p>
                          </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </main>
  );
}
