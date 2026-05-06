'use client';

import { 
  BarChart3, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  ClipboardCheck, 
  LineChart,
  ArrowUpRight,
  Target,
  Grid
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { BorderBeamAlways } from '@/components/magicui/border-beam';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const services = [
  {
    title: 'Optimal Therapy Outcomes',
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and customized business intelligence for your market.',
    icon: Stethoscope,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Case Mix & Quality Measures',
    desc: 'Education and analysis of your site’s QMs, case mix efficiency, and training for SNF staff and administration.',
    icon: ClipboardCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'Reimbursement Optimization',
    desc: 'Progressive programs focused on MPPR effects and optimizing therapy service reimbursement across LTC and Outpatient.',
    icon: Target,
    color: '#0284c7',
    bg: 'bg-[#0284c7]/10',
    href: '/services/reimbursement-optimization'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning processes for long-term operational success.',
    icon: LineChart,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model while retaining revenue.',
    icon: Users2,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    href: '/services/in-house-transition'
  },
  {
    title: 'In-House Resource Hub',
    desc: 'Expert support for existing in-house programs: recruitment, denial management, CEUs, and data analysis.',
    icon: GraduationCap,
    color: 'text-[#38bdf8]',
    bg: 'bg-[#38bdf8]/10',
    href: '/services/in-house-resource-hub'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* Premium Bento-style Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#0284c7 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-slate-50/50 to-white pointer-events-none" />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-20 md:mb-24">
          <div className="max-w-3xl">
            <BlurFade delay={0.1} className="mb-8">
               <AnimatedGradientText>Clinical Excellence</AnimatedGradientText>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif font-black text-[#0f172a] leading-[0.85] tracking-tighter">
                Bridging the Gap Between <br />
                <span className="text-[#0284c7] font-serif font-medium italic">Success & Integrity.</span>
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.3} className="text-xl text-slate-500 max-w-md leading-relaxed pb-4 font-light italic border-l-2 border-[#0284c7] pl-8">
            Providing high-end, clinically proven therapy should not mean sacrificing your facility’s bottom line. We bridge that gap.
          </BlurFade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <BlurFade
              key={i}
              delay={0.1 + i * 0.1}
              className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 hover:border-[#0284c7]/20 hover:scale-[1.02] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] transition-all duration-700 group relative flex flex-col justify-between overflow-hidden"
            >
              <Link href={service.href} className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2 rounded-[3rem]" aria-label={`Learn more about ${service.title}`} />
              
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0284c7]/5 rounded-full blur-3xl group-hover:bg-[#0284c7]/10 transition-colors duration-700" />

              <div>
                <div className={`w-16 h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-10 border border-white shadow-2xl shadow-black/5 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                  {(() => {
                    const Icon = service.icon;
                    return <Icon size={28} strokeWidth={1.5} className={typeof service.color === 'string' && service.color.startsWith('text-') ? service.color : ''} style={!service.color.startsWith('text-') ? { color: service.color } : {}} />;
                  })()}
                </div>
                
                <h3 className="relative z-10 text-2xl font-serif font-black text-[#0f172a] mb-6 leading-tight group-hover:text-[#0284c7] transition-colors duration-500">{service.title}</h3>
                <p className="relative z-10 text-slate-500 leading-relaxed mb-12 text-base font-light">
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-4 text-[#0284c7] font-black text-[11px] uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                Full Specs <ArrowUpRight size={18} strokeWidth={3} />
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Featured Discovery Card - Premium Photography Upgrade */}
        <BlurFade 
          delay={0.4}
          className="mt-24 md:mt-32 bg-[#0f172a] rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/5 group"
        >
          <BorderBeamAlways colorFrom="#38bdf8" colorTo="#0284c7" borderWidth={3} />
          
          <div className="grid lg:grid-cols-2 relative z-10 min-h-[600px]">
            <div className="p-10 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
              <BlurFade delay={0.5} className="mb-10">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.4em]">Featured Discovery</div>
              </BlurFade>
              
              <h3 className="text-4xl lg:text-7xl font-serif font-black text-white mb-8 leading-[0.85] tracking-tighter">
                Clinical Cost & <br />
                <span className="text-[#0284c7] italic font-medium">Success Logic.</span>
              </h3>
              <p className="text-white/40 mb-12 text-lg lg:text-xl leading-relaxed font-light italic border-l-2 border-[#0284c7] pl-8">
                Receive a comprehensive, data-driven overview of your facility's current therapy health. Strategic insights with no legacy strings attached.
              </p>
              <div>
                <Link href="/contact" className="focus-visible:outline-none">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="group/btn px-12 py-6">
                    <span className="font-black text-[12px] uppercase tracking-[0.4em] text-white">Free Health Audit</span>
                    <ArrowUpRight size={18} className="ml-3 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                  </ShimmerButton>
                </Link>
              </div>
            </div>
            
            <div className="relative min-h-[500px] lg:h-auto overflow-hidden">
               <Image 
                src="https://res.cloudinary.com/dai2pg27n/image/upload/v1778106814/a2965afd-7c2b-4619-8aec-81fad538dff2.png" 
                alt="Clinical Success Data Review" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[4000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/20 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent lg:hidden" />
              
              {/* Data visualization accent strictly for aesthetics */}
              <div className="absolute bottom-10 right-10 w-64 h-64 border border-white/10 rounded-full animate-pulse opacity-20 pointer-events-none" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
