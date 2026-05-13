'use client';

import { Check, ArrowRight, Zap, TrendingDown, Users } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import { useTina } from 'tinacms/dist/react';
import servicesData from '../../content/pages/services.json';

export default function Pricing() {
  const { data } = useTina({
    query: `query { services(relativePath: "services.json") { pricing { badge title titleItalic description tiers { level title desc features featured } bottomBanner { title desc cta } } } }`,
    variables: {},
    data: { services: servicesData },
  });

  const p = data?.services?.pricing || servicesData.pricing;
  
  if (!p) return null;

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <BlurFade delay={0.1}>
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
               <Zap size={14} />
               {p.badge}
             </div>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] leading-[0.9] tracking-tighter mb-8">
              {p.title} <br />
              <span className="text-[#0284c7] italic font-medium">{p.titleItalic}</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              {p.description.split(' grown')[0]}
              {p.description.includes('Our pricing') && (
                <span className="text-[#0f172a] font-bold"> {p.description.split('business growing.')[0].split('business. ')[1]} business growing.</span>
              )}
              {/* Fallback if split fails */}
              {!p.description.includes('Our pricing') && p.description}
            </p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {p.tiers.map((tier: any, i: number) => (
            <BlurFade key={i} delay={0.4 + i * 0.1}>
              <div className={`h-full p-10 rounded-[3rem] border transition-all duration-500 flex flex-col justify-between group ${
                tier.featured 
                ? 'bg-[#0f172a] border-[#0f172a] text-white shadow-2xl shadow-blue-900/20 scale-105' 
                : 'bg-slate-50 border-slate-100 text-[#0f172a] hover:bg-white hover:border-[#0284c7]/20'
              }`}>
                <div>
                  <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-6 ${tier.featured ? 'text-[#38bdf8]' : 'text-[#0284c7]'}`}>
                    {tier.level}
                  </div>
                  <h3 className="text-3xl font-serif font-black mb-4 tracking-tighter">{tier.title}</h3>
                  <p className={`text-sm mb-10 leading-relaxed ${tier.featured ? 'text-white/60' : 'text-slate-500'}`}>
                    {tier.desc}
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    {tier.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${tier.featured ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 'bg-[#0284c7]/10 text-[#0284c7]'}`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm font-semibold ${tier.featured ? 'text-white/80' : 'text-slate-700'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-8 border-t ${tier.featured ? 'border-white/10' : 'border-slate-200'}`}>
                   {tier.featured ? (
                     <Link href="/contact">
                       <ShimmerButton background="#38bdf8" shimmerColor="rgba(255,255,255,0.5)" borderRadius="1rem" className="w-full py-4">
                          <span className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Contact for Proposal</span>
                       </ShimmerButton>
                     </Link>
                   ) : (
                     <Link href="/contact" className="w-full inline-flex items-center justify-center py-4 rounded-2xl border border-[#0f172a]/10 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#0f172a] hover:text-white transition-all">
                       Learn More
                     </Link>
                   )}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Dynamic Scale Indicator */}
        <BlurFade delay={0.8} className="mt-20 md:mt-32">
           <Link href="/contact" className="block group/scaling">
             <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 group-hover/scaling:bg-white group-hover/scaling:border-[#0284c7]/20 group-hover/scaling:shadow-2xl group-hover/scaling:shadow-blue-500/5 transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                   <div className="w-20 h-20 rounded-[2rem] bg-[#0284c7] flex items-center justify-center text-white shadow-2xl shadow-blue-500/20 group-hover/scaling:scale-110 transition-transform duration-500 shrink-0">
                      <TrendingDown size={40} />
                   </div>
                   <div className="text-center md:text-left">
                      <h4 className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tighter mb-2">{p.bottomBanner.title}</h4>
                      <p className="text-slate-500 text-lg font-medium">{p.bottomBanner.desc}</p>
                   </div>
                </div>
                <div className="flex items-center gap-4 text-[#0284c7] font-black text-xs uppercase tracking-[0.3em] group-hover/scaling:gap-8 transition-all duration-500 bg-white px-8 py-4 rounded-2xl border border-slate-100 group-hover/scaling:border-[#0284c7]/30">
                   <Users size={18} />
                   {p.bottomBanner.cta}
                   <ArrowRight size={18} className="group-hover/scaling:translate-x-2 transition-transform" />
                </div>
             </div>
           </Link>
        </BlurFade>
      </div>
    </section>
  );
}
