'use client';

import { 
  BarChart3, 
  GraduationCap, 
  Stethoscope, 
  Users2, 
  ClipboardCheck, 
  LineChart,
  ArrowUpRight
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
    desc: 'Clinical Analysis for PDPM case mix efficiency-opportunity and customized business intelligence.',
    icon: Stethoscope,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    href: '/services/optimal-therapy-outcomes'
  },
  {
    title: 'Medicaid Case Mix Analysis',
    desc: 'Education and analysis of your site’s Quality Measures and case mix efficiency.',
    icon: ClipboardCheck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    href: '/services/medicaid-case-mix-analysis'
  },
  {
    title: 'SNF Staff Education',
    desc: 'Expert training for your SNF staff, marketing team, and administration for better collaboration.',
    icon: GraduationCap,
    color: 'text-[#0284c7]',
    bg: 'bg-[#0284c7]/10',
    href: '/services/snf-staff-education'
  },
  {
    title: 'Therapy Cost Reduction',
    desc: 'Optimizing staffing models and clinical discharge planning for operational success.',
    icon: LineChart,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    href: '/services/therapy-cost-reduction'
  },
  {
    title: 'In-House Transition',
    desc: 'Easily transition your third-party contract therapy team to an efficient in-house model.',
    icon: Users2,
    color: 'text-slate-600',
    bg: 'bg-slate-100',
    href: '/services/in-house-transition'
  },
  {
    title: 'Denial Management',
    desc: 'Expert support in recruitment, data analysis, and managing therapy denials effectively.',
    icon: BarChart3,
    color: 'text-[#38bdf8]',
    bg: 'bg-[#38bdf8]/10',
    href: '/services/denial-management'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="max-w-3xl">
            <BlurFade delay={0.1} className="mb-6">
               <AnimatedGradientText>Expertise & Oversight</AnimatedGradientText>
            </BlurFade>
            <BlurFade delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter">
                Comprehensive <br />
                <span className="text-[#0284c7] font-serif font-medium italic">Management Solutions</span>
              </h2>
            </BlurFade>
          </div>
          <BlurFade delay={0.3} className="text-lg text-slate-500 max-w-md leading-relaxed pb-2 font-light">
            Evolve provides the expert resources needed to bridge the gap between clinical quality and financial performance for LTC operators.
          </BlurFade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-8">
          {services.map((service, i) => (
            <BlurFade
              key={i}
              delay={0.1 + i * 0.1}
              className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-[#0284c7]/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group relative flex flex-col justify-between overflow-hidden"
            >
              <Link href={service.href} className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2 rounded-3xl md:rounded-[2.5rem]" aria-label={`Learn more about ${service.title}`} />
              
              {/* Subtle background decoration for each card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0284c7]/5 rounded-full blur-2xl group-hover:bg-[#0284c7]/10 transition-colors duration-700" />

              <div>
                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 border border-white shadow-xl shadow-black/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10`}>
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                
                <h3 className="relative z-10 text-xl font-serif font-black text-[#0f172a] mb-4 leading-tight group-hover:text-[#0284c7] transition-colors duration-500">{service.title}</h3>
                <p className="relative z-10 text-slate-500 leading-relaxed mb-10 text-sm font-medium">
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-3 text-[#0284c7] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-500">
                Learn More <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Featured Service Card - Now with BorderBeamAlways */}
        <BlurFade 
          delay={0.4}
          className="mt-16 md:mt-24 bg-white rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-200 group"
        >
          {/* BorderBeam always visible around the hero-style featured card */}
          <BorderBeamAlways colorFrom="#38bdf8" colorTo="#0284c7" borderWidth={2} />
          
          <div className="grid lg:grid-cols-2 relative z-10">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-white/90 lg:bg-transparent">
              <BlurFade delay={0.5} className="mb-8">
                <AnimatedGradientText>Featured Discovery</AnimatedGradientText>
              </BlurFade>
              
              <h3 className="text-3xl lg:text-5xl font-serif font-black text-[#0f172a] mb-6 leading-[0.9] tracking-tighter">
                Clinical Cost & <br />
                <span className="text-[#0284c7] italic font-medium">Success Analysis</span>
              </h3>
              <p className="text-black mb-10 text-sm md:text-base leading-relaxed font-semibold">
                Receive a comprehensive, data-driven overview of your facility's current therapy health. Strategic insights with no legacy strings attached.
              </p>
              <div>
                <Link href="/contact" className="focus-visible:outline-none">
                  <ShimmerButton background="#0f172a" shimmerColor="rgba(255,255,255,0.1)" borderRadius="1rem" className="group/btn inline-flex text-white hover:bg-[#0284c7] transition-colors duration-500">
                    <span className="font-black text-[10px] uppercase tracking-[0.2em] text-white">Request Free Analysis</span>
                    <ArrowUpRight className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </ShimmerButton>
                </Link>
              </div>
            </div>
            
            <div className="relative min-h-[400px] overflow-hidden lg:h-auto z-0 mix-blend-multiply opacity-90 group-hover:mix-blend-normal transition-all duration-700">
               <Image 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80" 
                alt="Clinical Success Data Review" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-[80%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent lg:hidden" />
              
              {/* Decorative data points overlay strictly for aesthetics */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full animate-ping opacity-20 pointer-events-none" />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
