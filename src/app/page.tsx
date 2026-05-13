'use client';

import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import USAMap from '@/components/USAMap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import SocialProof from '@/components/SocialProof';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, CheckCircle2, BarChart3, Award,
  Search, Map, Zap, Stethoscope, Microscope as MicroscopeIcon, HeartPulse as HeartPulseIcon, ShieldCheck as ShieldCheckIcon, BarChart3 as BarChart3Icon
} from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { useTina, tinaField } from 'tinacms/dist/react';
import homeData from '../../content/pages/home.json';

const iconMap = {
  Microscope,
  HeartPulse,
  ShieldCheck,
  BarChart3,
  Users,
  TrendingUp,
  Award,
  Clock,
  Search,
  Map,
  Zap,
  MicroscopeIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  BarChart3Icon,
  Stethoscope
};

export default function Home(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || `query { home(relativePath: "home.json") { hero { eyebrow titleLine1 titleItalic titleLine2 subtext primaryCta secondaryCta stats { value label } } clinicalExcellence { badge titleLine1 titleItalic description stats { value suffix label desc } services { title desc tag icon } } process { badge title titleItalic description steps { num title desc icon } } whyEvolve { title subtitle introText features { title subtitle desc icon color href } quoteStrip { text author authorTitle authorPhoto } } socialProof { stats { value label desc } } featuredDiscovery { badge title titleItalic description image cta } bottomCta { quote checklist primaryCta phone } } }`,
    variables: props.variables || {},
    data: props.data || { home: homeData },
  });

  const p = data?.home || homeData;
  
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!p) return null; // Safety bail-out if both are missing

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoStarted(true);
      }).catch(() => {
        setVideoStarted(true);
      });
    } else {
      const timer = setTimeout(() => setVideoStarted(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
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
                  src="/videos/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none select-none"
                  style={{ filter: 'contrast(1.2) saturate(0.6) grayscale(0.1)' }}
                />
             </div>
             <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default" />
             <div className={`absolute inset-0 bg-[#0f172a] pointer-events-none z-30 transition-opacity duration-[1500ms] ease-in-out ${videoStarted ? 'opacity-0' : 'opacity-100'}`} />
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
                  <span data-tina-field={tinaField(p.hero, 'eyebrow')} className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.6em]">{p.hero.eyebrow}</span>
               </div>
               
               <h1 className="text-5xl md:text-[5vw] lg:text-[4.5vw] font-serif font-black text-white leading-[1] tracking-tighter mb-16 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] break-words">
                  <span data-tina-field={tinaField(p.hero, 'titleLine1')} className="uppercase tracking-tighter block md:inline">{p.hero.titleLine1}</span>
                  <span data-tina-field={tinaField(p.hero, 'titleItalic')} className="text-[#0284c7] italic md:ml-[0.15em] uppercase tracking-tighter block md:inline">{p.hero.titleItalic}</span>
                  <br />
                  <span data-tina-field={tinaField(p.hero, 'titleLine2')} className="uppercase tracking-tighter block md:inline">{p.hero.titleLine2}</span>
               </h1>

               <div className="mb-20 w-full">
                  <p data-tina-field={tinaField(p.hero, 'subtext')} className="text-xl md:text-2xl text-white/40 font-light leading-relaxed border-l-4 border-[#0284c7] pl-10 italic max-w-5xl">
                     {p.hero.subtext}
                  </p>
               </div>
               
               <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-24">
                  <Link href="/contact" className="inline-flex group shrink-0">
                     <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="0.75rem" className="px-16 py-7 shadow-[0_30px_60px_rgba(2,132,199,0.3)]">
                        <span data-tina-field={tinaField(p.hero, 'primaryCta')} className="font-black uppercase tracking-[0.4em] text-[14px] text-white">{p.hero.primaryCta}</span>
                        <ArrowRight size={20} className="ml-5 group-hover:translate-x-3 transition-transform" />
                     </ShimmerButton>
                  </Link>

                  <div className="flex flex-col sm:flex-row gap-12">
                     {p.hero.stats?.map((stat: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-6 group">
                           <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                              <span data-tina-field={tinaField(stat, 'value')} className="font-black text-xl">{stat.value}</span>
                           </div>
                           <div className="flex flex-col">
                              <span data-tina-field={tinaField(stat, 'label')} className="text-white font-black uppercase text-[11px] tracking-widest mb-1">{stat.label}</span>
                              <span className="text-white/20 text-[13px] font-light italic">"Verified Data"</span>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* ── Clinical Excellence (Main Services Grid) ── */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mb-32">
            <BlurFade delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-[2px] bg-[#0284c7]" />
                 <span data-tina-field={tinaField(p.clinicalExcellence, 'badge')} className="text-[#0284c7] font-black uppercase text-[10px] tracking-[0.4em]">{p.clinicalExcellence.badge}</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter mb-8 leading-[0.85]">
                <span data-tina-field={tinaField(p.clinicalExcellence, 'titleLine1')}>{p.clinicalExcellence.titleLine1}</span> <br />
                <span data-tina-field={tinaField(p.clinicalExcellence, 'titleItalic')} className="text-[#0284c7] italic">{p.clinicalExcellence.titleItalic}</span>
              </h2>
              <p data-tina-field={tinaField(p.clinicalExcellence, 'description')} className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl">
                {p.clinicalExcellence.description}
              </p>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             <div className="lg:col-span-4 space-y-12">
                {p.clinicalExcellence.stats?.map((stat: any, idx: number) => (
                  <div key={idx} className="group">
                    <div className="flex items-baseline gap-2 mb-4">
                       <span data-tina-field={tinaField(stat, 'value')} className="text-6xl md:text-7xl font-serif font-black text-[#0f172a]">{stat.value}</span>
                       <span data-tina-field={tinaField(stat, 'suffix')} className="text-3xl font-serif font-bold text-[#0284c7]">{stat.suffix}</span>
                    </div>
                    <h4 data-tina-field={tinaField(stat, 'label')} className="text-xs font-black uppercase tracking-[0.3em] text-[#0f172a] mb-3">{stat.label}</h4>
                    <p data-tina-field={tinaField(stat, 'desc')} className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-[#0284c7] transition-colors">{stat.desc}</p>
                  </div>
                ))}
             </div>
             
             <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
                {p.clinicalExcellence.services?.map((service: any, idx: number) => {
                  const Icon = iconMap[service.icon as keyof typeof iconMap] || Stethoscope;
                  return (
                    <BlurFade key={idx} delay={0.2 + idx * 0.1}>
                      <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:bg-white hover:border-[#0284c7]/20 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col justify-between">
                        <div>
                           <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0284c7] mb-8 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shadow-sm">
                              <Icon size={24} />
                           </div>
                           <div data-tina-field={tinaField(service, 'tag')} className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0284c7] mb-4">{service.tag}</div>
                           <h3 data-tina-field={tinaField(service, 'title')} className="text-3xl font-serif font-black text-[#0f172a] mb-6 tracking-tighter leading-tight">{service.title}</h3>
                           <p data-tina-field={tinaField(service, 'desc')} className="text-slate-500 leading-relaxed font-light mb-10">{service.desc}</p>
                        </div>
                        <Link href="/services" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#0f172a] group-hover:text-[#0284c7] group-hover:gap-6 transition-all">
                           Service Specs <ArrowRight size={14} />
                        </Link>
                      </div>
                    </BlurFade>
                  );
                })}
             </div>
          </div>

          {/* Process Timeline */}
          <div className="mt-32">
            <BlurFade delay={0.2} className="bg-[#0f172a] rounded-3xl md:rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative border border-white/5">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
              <div className="relative z-10">
                <div className="mb-12">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                      {p?.process?.badge || "Operational Blueprint"}
                   </div>
                   <h3 className="text-4xl md:text-5xl font-serif font-black text-white tracking-tighter mb-4">
                      {p?.process?.title || "The Evolve"} <span className="text-[#0284c7] italic">{p?.process?.titleItalic || "Implementation"}</span>
                   </h3>
                   <p className="text-white/40 text-lg font-light max-w-2xl leading-relaxed">
                      {p?.process?.description || "Our systematic approach ensures a seamless transition."}
                   </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                  {(p?.process?.steps || homeData.process.steps).map((step: any, i: number) => {
                    const Icon = iconMap[step.icon as keyof typeof iconMap] || Search;
                    return (
                      <BlurFade delay={0.3 + i * 0.12} key={i} className="relative group">
                        <div className="flex items-center justify-between mb-6">
                           <div className="text-5xl md:text-6xl font-serif font-black text-[#0284c7]/20 group-hover:text-[#0284c7]/40 leading-none transition-colors duration-300">{step.num}</div>
                           <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 shadow-xl">
                              <Icon size={20} strokeWidth={1.5} />
                           </div>
                        </div>
                        <h4 className="font-black text-white text-lg md:text-xl mb-3 tracking-tight group-hover:text-[#38bdf8] transition-colors">{step.title}</h4>
                        <p className="text-white/40 text-[15px] leading-relaxed font-light">{step.desc}</p>
                      </BlurFade>
                    );
                  })}
                </div>
              </div>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.4} className="flex flex-col sm:flex-row gap-4 mt-16 items-center justify-center">
              <Link href="/services">
                <ShimmerButton background="#0f172a" borderRadius="9999px" className="group px-10 py-5">
                  <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white">Explore Solutions</span>
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
                </ShimmerButton>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 border border-slate-200 bg-white text-[#0f172a] px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.25em] hover:bg-slate-50 transition-all shadow-xl shadow-slate-100"
              >
                Free Cost Analysis
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>

      <WhyEvolve />
      <Testimonials />
      <FAQ />
      <USAMap />

      {/* Philosophy / CTA Dark Section */}
      <section className="py-24 md:py-40 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0284c7 0%, transparent 50%)' }} />
        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
              <div className="text-7xl sm:text-9xl text-[#0284c7]/20 font-serif mb-0 leading-none">"</div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-10 md:mb-16 leading-[0.9] tracking-tighter -mt-6">
                {p?.bottomCta?.quote?.split(' in-house')[0] || "Empower your therapy team with"}
                <span className="text-[#0284c7] italic"> in-house leadership</span>
                <br />{p?.bottomCta?.quote?.split('leadership ')[1] || "and clinical advancement."}
              </h3>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24 text-left max-w-4xl mx-auto">
                {(p?.bottomCta?.checklist || homeData.bottomCta.checklist).map((item: string, i: number) => (
                  <BlurFade delay={0.4 + i * 0.05} key={i} className="flex items-center gap-4 text-white/50 text-base font-light border-b border-white/5 pb-4">
                    <CheckCircle2 size={18} className="text-[#0284c7] shrink-0" />
                    {item}
                  </BlurFade>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.6)" borderRadius="9999px" className="group px-12 py-6">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white">{p?.bottomCta?.primaryCta || "Start Your Evolution"}</span>
                    <ArrowRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform" />
                  </ShimmerButton>
                </Link>
                <a
                  href={`tel:${(p?.bottomCta?.phone || homeData.bottomCta.phone).replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-10 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
                >
                  <Phone size={16} /> {p?.bottomCta?.phone || homeData.bottomCta.phone}
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Featured Discovery Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <div className="bg-[#0f172a] rounded-[3.5rem] overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-20 flex flex-col justify-center relative z-10">
                <div className="mb-8">
                  <AnimatedGradientText className="justify-start">{p?.featuredDiscovery?.badge || "Clinical Innovation"}</AnimatedGradientText>
                </div>
                <h3 className="text-4xl md:text-6xl font-serif font-black text-white leading-[0.9] tracking-tighter mb-8">
                  {p?.featuredDiscovery?.title || "Clinical Cost &"} <br />
                  <span className="text-[#0284c7] italic">{p?.featuredDiscovery?.titleItalic || "Success Analysis"}</span>
                </h3>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg">
                  {p?.featuredDiscovery?.description || "Unlock hidden potential in your therapy department with our comprehensive data-driven discovery process."}
                </p>
                <Link href="/contact" className="w-fit">
                   <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-10 py-5">
                      <span className="font-black uppercase tracking-[0.2em] text-[11px] text-white">{p?.featuredDiscovery?.cta || "Request Free Discovery"}</span>
                   </ShimmerButton>
                </Link>
              </div>
              <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                <Image 
                  src={p?.featuredDiscovery?.image || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"} 
                  alt="Clinical Discovery" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
