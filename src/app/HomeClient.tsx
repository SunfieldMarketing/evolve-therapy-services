'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyEvolve from '@/components/WhyEvolve';
import USAMap from '@/components/USAMap';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { 
  ArrowRight, Phone, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, CheckCircle2, BarChart3, Award,
  Search, Map, Zap, HelpCircle, Handshake
} from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { useTina, tinaField } from '@/lib/tina';
import TinaProviderWrapper from '@/components/TinaProvider';

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
  Zap
};

export default function HomeClient(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const p = data?.home;

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  if (!p) return null;

  return (
    <TinaProviderWrapper>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero data={p.hero} />

        {/* ── Clinical Excellence ── */}
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#0284c7 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
              <BlurFade delay={0.1}>
                <div className="mb-6" data-tina-field={tinaField(p?.clinicalExcellence, 'badge')}>
                  <AnimatedGradientText>{p?.clinicalExcellence?.badge || ''}</AnimatedGradientText>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] leading-[0.9] tracking-tighter">
                  <span data-tina-field={tinaField(p?.clinicalExcellence, 'titleLine1')}>{p?.clinicalExcellence?.titleLine1 || ''}</span><br />
                  <span data-tina-field={tinaField(p?.clinicalExcellence, 'titleItalic')} className="text-[#0284c7] italic font-medium">{p?.clinicalExcellence?.titleItalic || ''}</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.2} className="text-xl text-slate-500 max-w-lg leading-relaxed font-light shrink-0">
                <span data-tina-field={tinaField(p?.clinicalExcellence, 'description')}>{p?.clinicalExcellence?.description || ''}</span>
              </BlurFade>
            </div>

            {/* Services Grid (Our Services Section) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
              {(p?.ourServices?.items || p?.clinicalExcellence?.services)?.map((item: any, i: number) => {
                 const Icon = iconMap[item.icon as keyof typeof iconMap] || Microscope;
                 return (
                  <BlurFade delay={0.1 + i * 0.08} key={i} className="group h-full">
                    <div data-tina-field={tinaField(item)} className="h-full relative overflow-hidden p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-2xl transition-all duration-500 flex flex-col">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border bg-slate-50 text-[#0284c7] border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white mb-8">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h4 className="font-black font-serif text-3xl tracking-tight mb-4 text-[#0f172a]">
                        {item.title}
                      </h4>
                      <p className="text-base leading-relaxed font-light text-slate-500 mb-8 flex-1">
                        {item.desc}
                      </p>
                      <Link href="/services" className="inline-flex items-center gap-2 text-[#0284c7] font-black uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </BlurFade>
                );
              })}
            </div>

            {/* Service Coverage (USA Map) */}
            <div className="mb-32">
               <BlurFade className="text-center mb-16">
                  <h3 data-tina-field={tinaField(p?.coverage, 'title')} className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] tracking-tighter mb-4">
                    {p?.coverage?.title || 'National Service Coverage'}
                  </h3>
               </BlurFade>
               <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#0284c7]/[0.02] pointer-events-none" />
                  <div className="relative z-10 min-h-[400px] md:min-h-[600px]">
                    <USAMap />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    {p?.coverage?.legend?.map((item: any, i: number) => (
                      <div key={i} data-tina-field={tinaField(item)} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-[#0284c7]" />
                        <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-widest">{item.text}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-32">
               <BlurFade className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                    <HelpCircle size={14} /> Common Questions
                  </div>
                  <h3 data-tina-field={tinaField(p?.faq, 'title')} className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] tracking-tighter">
                    {p?.faq?.title || 'Therapy Management FAQ'}
                  </h3>
               </BlurFade>
               <div className="max-w-4xl mx-auto">
                  <FAQ items={p?.faq?.items} />
               </div>
            </div>

            {/* Partner With Us Section */}
            <BlurFade delay={0.1}>
               <div className="bg-[#0f172a] rounded-[3.5rem] p-12 md:p-24 text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="relative z-10 max-w-3xl">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Handshake size={14} /> Strategic Partnership
                     </div>
                     <h3 data-tina-field={tinaField(p?.partner, 'title')} className="text-4xl md:text-7xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
                        {p?.partner?.title || 'Partner With The Clinical Leader'}
                     </h3>
                     <p data-tina-field={tinaField(p?.partner, 'desc')} className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-12">
                        {p?.partner?.desc || 'Join over 15 states worth of facility operators who have taken control of their therapy departments.'}
                     </p>
                     <Link href="/contact">
                        <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6">
                           <span data-tina-field={tinaField(p?.partner, 'button')} className="font-black uppercase tracking-[0.4em] text-[12px] text-white">
                              {p?.partner?.button || 'Initialize Partnership'}
                           </span>
                        </ShimmerButton>
                     </Link>
                  </div>
               </div>
            </BlurFade>
          </div>
        </section>

        <WhyEvolve />
        <Testimonials />
        <Contact />
        <Footer />
        <MobileCTA />
      </main>
    </TinaProviderWrapper>
  );
}
