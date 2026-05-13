'use client';

import { useEffect } from 'react';
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
import { cn } from '@/lib/utils';
import { 
  ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, CheckCircle2, BarChart3, Award,
  Search, Map, Zap, Microscope as MicroscopeIcon, HeartPulse as HeartPulseIcon, ShieldCheck as ShieldCheckIcon, BarChart3 as BarChart3Icon
} from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { useTina } from 'tinacms/dist/react';
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
  BarChart3Icon
};

export default function Home(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || `query { home(relativePath: "home.json") { hero { eyebrow titleLine1 titleItalic titleLine2 subtext primaryCta secondaryCta stats { value label } } clinicalExcellence { badge titleLine1 titleItalic description stats { value suffix label desc } services { title desc tag icon } } process { badge title titleItalic description steps { num title desc icon } } whyEvolve { title subtitle introText features { title subtitle desc icon color href } quoteStrip { text author authorTitle authorPhoto } } bottomCta { quote checklist primaryCta phone } } }`,
    variables: props.variables || {},
    data: props.data || { home: homeData },
  });

  const p = data?.home || homeData;
  
  if (!p) return null; // Safety bail-out if both are missing

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero data={p.hero} />
      <SocialProof />

      {/* ── Clinical Excellence ── */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ 
               backgroundImage: `radial-gradient(#0284c7 0.5px, transparent 0.5px)`, 
               backgroundSize: '24px 24px' 
             }} 
        />
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-[#0284c7]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <BlurFade delay={0.1}>
              <div className="mb-5">
                <AnimatedGradientText>{p.clinicalExcellence.badge}</AnimatedGradientText>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter">
                {p.clinicalExcellence.titleLine1}<br />
                <span className="text-[#0284c7] italic font-medium">{p.clinicalExcellence.titleItalic}</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} className="text-lg text-slate-500 max-w-md leading-relaxed font-light shrink-0">
              {p.clinicalExcellence.description}
            </BlurFade>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
            {p.clinicalExcellence.stats.map((stat: any, i: number) => {
              const Icon = iconMap[stat.label === 'Revenue Retained' ? 'TrendingUp' : stat.label === 'Years Experience' ? 'Award' : stat.label === 'Clinical Support' ? 'Clock' : 'Users'] || TrendingUp;
              return (
                <BlurFade
                  delay={0.1 + i * 0.1}
                  key={i}
                  className="group relative p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between min-h-[140px] md:min-h-[160px] overflow-hidden"
                >
                  <Icon size={20} className="relative z-10 text-[#0284c7] mb-3 group-hover:-translate-y-1 transition-transform duration-300" />
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] mb-1">
                      <NumberTicker value={stat.value} suffix={stat.suffix} delay={0.5 + i * 0.1} />
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </BlurFade>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 md:mb-32">
            {p.clinicalExcellence.services.map((item: any, i: number) => {
               const Icon = iconMap[item.icon as keyof typeof iconMap] || Microscope;
               return (
                <BlurFade
                  delay={0.1 + i * 0.08}
                  key={i}
                  className="relative overflow-hidden group p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-[0_40px_80px_-20px_rgba(2,132,199,0.12)] transition-all duration-500"
                >
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={6} colorFrom="#38bdf8" colorTo="#0284c7" />
                  
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border bg-slate-50 text-[#0284c7] border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full text-[#0284c7] bg-[#0284c7]/5">
                      {item.tag}
                    </span>
                  </div>
                  
                  <h4 className="font-black font-serif text-2xl lg:text-3xl tracking-tight mb-4 relative z-10 text-[#0f172a]">
                    {item.title}
                  </h4>
                  
                  <p className="text-[15px] md:text-base leading-relaxed font-light relative z-10 max-w-sm text-slate-500">
                    {item.desc}
                  </p>
                </BlurFade>
              );
            })}
          </div>

          {/* Process Timeline */}
          <BlurFade delay={0.2} className="bg-[#0f172a] rounded-3xl md:rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284c7]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
            <div className="relative z-10">
              <div className="mb-12">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                    {p.process.badge}
                 </div>
                 <h3 className="text-4xl md:text-5xl font-serif font-black text-white tracking-tighter mb-4">
                    {p.process.title} <span className="text-[#0284c7] italic">{p.process.titleItalic}</span>
                 </h3>
                 <p className="text-white/40 text-lg font-light max-w-2xl leading-relaxed">
                    {p.process.description}
                 </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                {p.process.steps.map((step: any, i: number) => {
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
      </section>

      <WhyEvolve />
      <Services />
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
                {p.bottomCta.quote.split(' in-house')[0]}
                <span className="text-[#0284c7] italic"> in-house leadership</span>
                <br />{p.bottomCta.quote.split('leadership ')[1]}
              </h3>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24 text-left max-w-4xl mx-auto">
                {p.bottomCta.checklist.map((item: string, i: number) => (
                  <BlurFade delay={0.4 + i * 0.05} key={item} className="flex items-center gap-4 text-white/50 text-base font-light border-b border-white/5 pb-4">
                    <CheckCircle2 size={18} className="text-[#0284c7] shrink-0" />
                    {item}
                  </BlurFade>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/contact">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.6)" borderRadius="9999px" className="group px-12 py-6">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white">{p.bottomCta.primaryCta}</span>
                    <ArrowRight size={18} className="ml-4 group-hover:translate-x-2 transition-transform" />
                  </ShimmerButton>
                </Link>
                <a
                  href={`tel:${p.bottomCta.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white px-10 py-6 rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
                >
                  <Phone size={16} /> {p.bottomCta.phone}
                </a>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
