'use client';

import { useState, useEffect, useRef } from 'react';
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
  Star,
  Quote
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTina, tinaField } from '@/lib/tina';
import servicesData from '../../../content/pages/services.json';

const iconMap = {
  Stethoscope,
  GraduationCap,
  LineChart,
  Users2,
  ClipboardCheck,
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
  Star
};

export default function ServicesPage(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || `query { 
      services(relativePath: "services.json") { 
        hero { badge titleLine1 titleItalic description heroValues { icon title subtitle } } 
        trust { icon text } 
        showcase { badge titleLine1 titleItalic services { title desc details icon image slug alignment } } 
        methodology { badge titleLine1 titleItalic items { title icon desc } sidebarTitle sidebarItalic sidebarQuote sidebarIcon } 
        advantage { badge titleLine1 titleItalic items { title icon desc } } 
      }
      settings(relativePath: "settings.json") {
        siteName phone email address linkedin
        navbar { links { name href } ctaText }
        footer { tagline copyright links { name href } serviceLinks { name href } }
        preFooterCta { title subtitle primaryCta }
      }
    }`,
    variables: props.variables || {},
    data: props.data || { services: servicesData },
  });

  const p = data.services;
  const s = data.settings;
  const detailedServices = p.showcase.services;

  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoStarted(true);
      }).catch((e) => {
        console.error("Autoplay failed:", e);
        setVideoStarted(true);
      });
    } else {
      const timer = setTimeout(() => setVideoStarted(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar data={s?.navbar} />
      
      {/* ── Editorial Hero ── */}
      <section className="relative w-full h-screen flex flex-col justify-center bg-[#0f172a] overflow-hidden">
        
        <div className="absolute inset-0 z-0">
           <div className={cn(
             "absolute inset-0 transition-opacity duration-[2s] ease-in-out bg-[#0f172a]",
             videoStarted ? "opacity-100" : "opacity-0"
           )}>
             <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
                <video
                  ref={videoRef}
                  src="/videos/services.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
                  style={{ filter: 'contrast(1.2) saturate(0.6) grayscale(0.1)' }}
                />
             </div>
             {/* Fade-in overlay for video start */}
             <div className={cn(
               "absolute inset-0 bg-[#0f172a] transition-opacity duration-[1500ms] pointer-events-none z-30",
               videoStarted ? "opacity-0" : "opacity-100"
             )} />
           </div>

           <div className="absolute inset-0 z-20 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, #0284c7 0%, transparent 65%)' }} />
           <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80" />
           <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f172a]/95 via-transparent to-transparent" />
           <div className="absolute inset-0 z-25 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        </div>

        <div className="relative z-50 container mx-auto px-6 lg:px-12 -mt-12">
          <div className="w-full">
            <BlurFade delay={0.2}>
               <div className="flex items-center gap-6 mb-12">
                  <div className="w-12 h-[1px] bg-[#0284c7]" />
                  <span className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.6em]">{p.hero.badge}</span>
               </div>
               
               <h1 className="text-5xl md:text-[5vw] lg:text-[4.5vw] font-serif font-black text-white leading-[1] tracking-tighter mb-16 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] break-words">
                  <span className="uppercase tracking-tighter block md:inline">{p.hero.titleLine1}</span>
                  <span className="text-[#0284c7] italic md:ml-[0.15em] uppercase tracking-tighter block md:inline">{p.hero.titleItalic}</span>
               </h1>

               <div className="mb-20 w-full">
                  <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed border-l-4 border-[#0284c7] pl-10 italic max-w-5xl">
                     {p.hero.description}
                  </p>
               </div>
               
               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
                  <Link href="/contact" className="inline-flex group shrink-0">
                     <ShimmerButton as="div" background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="0.75rem" className="px-16 py-7 shadow-[0_30px_60px_rgba(2,132,199,0.3)]">
                        <span className="font-black uppercase tracking-[0.4em] text-[14px] text-white">Start Your Evolution</span>
                        <ArrowRight size={20} className="ml-5 group-hover:translate-x-3 transition-transform" />
                     </ShimmerButton>
                  </Link>

                  <div className="flex flex-col sm:flex-row gap-12">
                     {p.hero.heroValues?.map((val: any, idx: number) => {
                        const Icon = iconMap[val.icon as keyof typeof iconMap] || Sparkles;
                        return (
                          <div key={idx} className="flex items-center gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                               <Icon size={24} />
                            </div>
                            <div className="flex flex-col">
                               <span className="text-white font-black uppercase text-[11px] tracking-widest mb-1">{val.title}</span>
                               <span className="text-white/20 text-[13px] font-light italic">"{val.subtitle}"</span>
                            </div>
                          </div>
                        );
                     })}
                  </div>
               </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Social Proof Trust Section ── */}
      <section className="relative z-50 pt-16 pb-32 bg-[#0f172a] border-y border-white/[0.05]">
        <div className="container mx-auto px-12">
           <div className="flex flex-wrap items-center justify-between gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
              {p.trust.map((item: any, idx: number) => (
                <div key={idx} className="flex items-center gap-4 group cursor-default">
                   {(() => {
                     const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
                     return <Icon className={cn("group-hover:scale-110 transition-transform", item.icon === 'Star' ? "text-yellow-500" : item.icon === 'Activity' ? "text-emerald-500" : "text-[#0284c7]")} size={20} />;
                   })()}
                   <span className="text-white/50 font-black uppercase text-[10px] tracking-[0.4em]">{item.text}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ── Services Showcase ── */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mb-32">
            <BlurFade delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[2px] bg-[#0284c7]" />
                 <span className="text-[#0284c7] font-black uppercase text-[10px] tracking-[0.4em]">{p.showcase.badge}</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.85]">
                {p.showcase.titleLine1} <br />
                <span className="text-[#0284c7] italic">{p.showcase.titleItalic}</span>
              </h2>
            </BlurFade>
          </div>

          <div className="space-y-32 md:space-y-48">
            {detailedServices.map((service: any, i: number) => (
              <BlurFade delay={0.1} key={i} className="group">
                <div className={cn(
                  "flex flex-col lg:flex-row gap-16 lg:gap-32 items-center",
                  service.alignment === 'right' && "lg:flex-row-reverse"
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
                       {(() => {
                         const Icon = iconMap[service.icon as keyof typeof iconMap] || Stethoscope;
                         return <Icon size={12} className="text-[#0284c7]" />;
                       })()}
                       CORE SOLUTION {i + 1}
                    </div>
                    <h3 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 leading-[0.9] tracking-tighter group-hover:text-[#0284c7] transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                      {service.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                      {service.details.map((detail: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-4">
                           <div className="w-6 h-6 rounded-lg bg-[#0284c7]/5 text-[#0284c7] flex items-center justify-center shrink-0">
                              <Check size={14} strokeWidth={3} />
                           </div>
                           <span className="text-sm font-semibold text-[#0f172a]/70">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/services/${service.slug}`}>
                       <ShimmerButton as="div" background="#0f172a" shimmerColor="rgba(255,255,255,0.1)" borderRadius="1rem" className="group/btn px-10 py-5">
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
                  <div className="text-[10px] font-black text-[#0284c7] uppercase tracking-[0.4em] mb-8">{p.methodology.badge}</div>
                  <h2 className="text-6xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.85] mb-12">
                     {p.methodology.titleLine1} <br />
                     <span className="text-[#0284c7] italic">{p.methodology.titleItalic}</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">
               <div className="space-y-16 flex flex-col justify-center">
                  {p.methodology.items.map((item: any, i: number) => (
                    <BlurFade key={i} delay={0.2 + i * 0.1}>
                       <div className="flex gap-10 group">
                          <div className="w-20 h-20 shrink-0 rounded-3xl bg-white flex items-center justify-center text-[#0284c7] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-700 shadow-2xl border border-slate-100">
                             {(() => {
                               const Icon = iconMap[item.icon as keyof typeof iconMap] || TrendingUp;
                               return <Icon size={32} strokeWidth={1.5} />;
                             })()}
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
                             {(() => {
                               const Icon = iconMap[p.methodology.sidebarIcon as keyof typeof iconMap] || ShieldCheck;
                               return <Icon size={32} />;
                             })()}
                          </div>
                          <h4 className="text-4xl md:text-6xl font-serif font-black mb-12 leading-[0.9] tracking-tighter">{p.methodology.sidebarTitle} <br /><span className="text-[#38bdf8] italic">{p.methodology.sidebarItalic}</span></h4>
                          <p className="text-white/40 text-xl font-light leading-relaxed mb-16 italic">
                             "{p.methodology.sidebarQuote}"
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

      <Pricing data={p.pricing} parentField="pricing" />

      <section className="py-32 md:py-56 bg-white overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-32">
               <BlurFade delay={0.1}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.4em] mb-10 shadow-sm">{p.advantage.badge}</div>
                  <h2 className="text-6xl md:text-9xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.82]">
                     {p.advantage.titleLine1} <br />
                     <span className="text-[#0284c7] italic">{p.advantage.titleItalic}</span>
                  </h2>
               </BlurFade>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
               {p.advantage.items.map((item: any, i: number) => (
                 <BlurFade key={i} delay={0.2 + i * 0.1}>
                    <div className={cn("group p-12 rounded-[3rem] bg-slate-50 border border-slate-100 transition-all duration-700 h-full flex flex-col justify-between relative overflow-hidden", "hover:border-[#0284c7]/30")}>
                       <div className="relative z-10">
                          <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#0f172a] mb-12 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-700 shadow-xl">
                             {(() => {
                               const Icon = iconMap[item.icon as keyof typeof iconMap] || Activity;
                               return <Icon size={32} strokeWidth={1.5} />;
                             })()}
                          </div>
                          <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-8 tracking-tight group-hover:text-[#0284c7] transition-colors">{item.title}</h4>
                          <p className="text-slate-500 text-base leading-relaxed font-light">{item.desc}</p>
                       </div>
                    </div>
                 </BlurFade>
               ))}
            </div>
         </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
    </main>
  );
}
