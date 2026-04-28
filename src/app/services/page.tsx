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

      {/* The Evolution Section — Redesigned as a Tiered Journey */}
      <section className="py-24 md:py-40 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#0284c7] blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#38bdf8] blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
            <BlurFade delay={0.1} className="mb-8">
               <AnimatedGradientText>Adaptive Growth</AnimatedGradientText>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
                Our Three-Tiered <br />
                <span className="text-[#38bdf8] italic font-medium">Evolution Model</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.3}>
              <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
                Our management approach scales with your facility, reducing costs and increasing internal autonomy as your programs mature.
              </p>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                id: '01',
                name: 'Starter Tier',
                title: 'Program Inception',
                desc: 'Focused on recruitment, initial compliance setup, and establishing core clinical benchmarks for new in-house teams.',
                features: ['Baseline Compliance Review', 'Full Recruitment Support', 'Core PDPM Education'],
                color: 'border-white/10 bg-white/5',
                accent: '#ffffff'
              },
              {
                id: '02',
                name: 'Intermediate Tier',
                title: 'Growth & Scaling',
                desc: 'Advanced operational oversight, deep data analysis, and regional leadership development to drive sustainable profitability.',
                features: ['Bi-Weekly Cost Analysis', 'Leadership Mentorship', 'Customized Clinical QA'],
                color: 'border-[#0284c7]/50 bg-[#0284c7]/10 shadow-[0_30px_60px_-15px_rgba(2,132,199,0.3)] scale-105 z-20',
                accent: '#38bdf8'
              },
              {
                id: '03',
                name: 'Enterprise Tier',
                title: 'Peak Operations',
                desc: 'Full clinical excellence oversight with lowest-cost management fees, designed for stable, high-volume healthcare portfolios.',
                features: ['Unlimited Audit Defense', 'Custom Business Intelligence', 'Priority Resource Allocation'],
                color: 'border-white/10 bg-white/5',
                accent: '#ffffff'
              }
            ].map((tier, i) => (
              <BlurFade delay={0.4 + i * 0.15} key={tier.id} className="h-full">
                <div className={cn(
                  "p-10 md:p-12 rounded-[3rem] border h-full transition-all duration-500 hover:-translate-y-4 group",
                  tier.color
                )}>
                  <div className="text-5xl font-black font-serif italic mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500" style={{ color: tier.accent }}>{tier.id}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] mb-3" style={{ color: tier.accent }}>{tier.name}</div>
                  <h4 className="text-3xl font-serif font-black text-white mb-6 leading-tight">{tier.title}</h4>
                  <p className="text-white/50 mb-10 leading-relaxed text-[15px] font-light">{tier.desc}</p>
                  
                  <ul className="space-y-4 mb-12">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-white/80 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" /> {f}
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className="block mt-auto">
                    <button className="w-full py-4 rounded-2xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Special Resource Box — Glassmorphism */}
          <BlurFade delay={0.8} className="mt-24 md:mt-32 max-w-5xl mx-auto">
             <div className="relative p-12 md:p-20 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden text-center flex flex-col items-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="w-20 h-20 bg-[#0284c7] text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl border-2 border-[#38bdf8]/50">
                  <Zap size={36} />
                </div>
                <h4 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-[0.9] tracking-tighter max-w-2xl">
                  Already In-House? <br />
                  <span className="text-[#38bdf8] italic font-medium">Let us be your expert.</span>
                </h4>
                <p className="text-white/50 mb-12 leading-relaxed text-lg md:text-xl font-light italic max-w-3xl">
                  "Let Evolve be your needed resource in recruitment, denial management, and data analysis. We can be your clinical partner so you don’t have to be the expert in everything."
                </p>
                <Link href="/contact" className="w-full sm:w-auto">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6 group/btn">
                    <span className="font-black uppercase tracking-[0.25em] text-[11px] text-white">Get a Resource Consultation</span>
                  </ShimmerButton>
                </Link>
             </div>
          </BlurFade>
        </div>
      </section>

      {/* Why Direct-Hire Section — Cleaned up */}
      <section className="py-24 md:py-44 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12">
          <BlurFade delay={0.2} className="max-w-6xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-[4rem] md:rounded-[5rem] overflow-hidden relative shadow-2xl shadow-black/5">
               <div className="p-12 md:p-24 lg:p-32">
                  <div className="text-center mb-20 md:mb-28">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-6">Comparison</div>
                    <h3 className="text-5xl md:text-7xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.9]">Why Direct-Hire <br /> <span className="text-[#0284c7] italic font-medium">In-House?</span></h3>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
                     <div className="space-y-16">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 group">
                          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.3em] uppercase text-[11px] mb-4">Revenue Retention</div>
                            <p className="text-lg text-slate-500 font-light leading-relaxed">Retain 100% of all therapy revenue instead of paying shares to third-parties. Our models ensure your bottom line is protected while patient care remains the priority.</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 group">
                          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.3em] uppercase text-[11px] mb-4">Culture Continuity</div>
                            <p className="text-lg text-slate-500 font-light leading-relaxed">Your staff grows internally towards regional positions and remains as YOUR team. No more high turnover from disconnected third-party vendors.</p>
                          </div>
                        </div>
                     </div>
                     <div className="space-y-16">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 group">
                          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.3em] uppercase text-[11px] mb-4">Operational Growth</div>
                            <p className="text-lg text-slate-500 font-light leading-relaxed">Employee engagement facilitates exceptional outcomes for residents. When your team is invested, your facility thrives clinically and operationally.</p>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 group">
                          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shrink-0">
                            <CheckCircle size={32} strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="font-black text-[#0f172a] tracking-[0.3em] uppercase text-[11px] mb-4">Clinical Education</div>
                            <p className="text-lg text-slate-500 font-light leading-relaxed">Customized CEU/education for therapists and LTC staff as a premium service. We provide the expertise that keeps your clinical team at the top of their field.</p>
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
