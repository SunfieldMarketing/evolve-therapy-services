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
  Target
} from 'lucide-react';
import Link from 'next/link';

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

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <BlurFade delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.95]">
                Bridging the Gap to <br />
                <span className="text-[#0284c7] italic font-medium">Exceptional Operations</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="text-xl text-slate-500 font-light leading-relaxed">
                It is our vision to assist operators who want to take their therapy teams in-house by choosing our management model; and to assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE to the next level.
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

      {/* Dynamic Pricing Model Section */}
      <Pricing />

      {/* ── Why In-House? Comparison ── */}
      <section className="py-24 md:py-44 bg-slate-50 overflow-hidden relative">
        <div className="container mx-auto px-6 md:px-12">
          <BlurFade delay={0.2} className="max-w-6xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-[4rem] md:rounded-[5rem] overflow-hidden relative shadow-2xl shadow-black/5">
               <div className="p-12 md:p-24 lg:p-32">
                  <div className="text-center mb-20 md:mb-28">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-6">The Evolve Difference</div>
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

      {/* ── Final Conversion CTA ── */}
      <section className="py-24 md:py-48 bg-[#0f172a] relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #0284c7 0%, transparent 50%)' }} />
        <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none mb-12">
              Ready to <br />
              <span className="text-[#0284c7] italic">Evolve With Us?</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed mb-16">
              Let our directors perform a free analysis of your therapy department and identify immediate clinical and financial opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6">
                  <span className="font-black uppercase tracking-[0.25em] text-[11px] text-white">Contact Our Team</span>
                </ShimmerButton>
              </Link>
              <a href="tel:8883865820" className="text-white font-black uppercase text-[11px] tracking-[0.3em] hover:text-[#0284c7] transition-colors flex items-center gap-2">
                <Phone size={14} /> (888) 386-5820
              </a>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
