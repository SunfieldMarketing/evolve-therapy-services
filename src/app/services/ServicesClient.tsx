'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  Users, 
  GraduationCap, 
  HeartPulse, 
  Microscope,
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTina, tinaField } from '@/lib/tina';
import TinaProviderWrapper from '@/components/TinaProvider';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const iconMap = {
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Search,
  Users,
  GraduationCap,
  HeartPulse,
  Microscope,
  ClipboardCheck,
  Stethoscope
};

export default function ServicesClient(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const p = data?.services;

  return (
    <TinaProviderWrapper>
      <main className="min-h-screen bg-white">
        <Navbar />
        
        <PageHeader 
          title={p?.hero?.title || 'Our Solutions'} 
          italicWord={p?.hero?.italicWord || ''} 
          subtitle={p?.hero?.subtitle || ''}
          useVideo={false}
          bgImage="none"
          badgeText="Services"
          tinaFields={{
            title: tinaField(p?.hero, 'title'),
            subtitle: tinaField(p?.hero, 'subtitle'),
          }}
        />

        {/* Services Grid */}
        <section className="py-24 md:py-48">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {p?.list?.map((service: any, i: number) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap] || Stethoscope;
                return (
                  <BlurFade key={i} delay={0.1 * i}>
                    <div data-tina-field={tinaField(service)} className="group h-full bg-slate-50 rounded-[3rem] p-12 border border-slate-100 hover:bg-white hover:border-[#0284c7]/30 hover:shadow-2xl transition-all duration-700 flex flex-col">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-10 shadow-sm text-[#0284c7] border border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white transition-all">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-3xl font-serif font-black text-[#0f172a] mb-6 tracking-tight">{service.title}</h3>
                      <p className="text-slate-500 text-lg font-light leading-relaxed mb-10 flex-1">{service.desc}</p>
                      
                      <Link 
                        href={service.href || '/contact'}
                        className="inline-flex items-center gap-3 text-[#0284c7] font-black uppercase text-[10px] tracking-[0.2em] group-hover:gap-5 transition-all"
                      >
                        Explore Service <ArrowRight size={16} />
                      </Link>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-48 bg-[#0f172a] relative overflow-hidden text-center">
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0284c7 0%, transparent 70%)' }} />
           <div className="container mx-auto px-6 relative z-10">
              <BlurFade>
                 <h2 data-tina-field={tinaField(p?.cta, 'title')} className="text-5xl md:text-8xl font-serif font-black text-white tracking-tighter leading-none mb-12">
                    {p?.cta?.title?.split(' ')[0] || ''} <br />
                    <span className="text-[#0284c7] italic">{p?.cta?.title?.split(' ').slice(1).join(' ') || ''}</span>
                 </h2>
                 <p data-tina-field={tinaField(p?.cta, 'subtitle')} className="text-xl md:text-2xl text-white/40 font-light max-w-3xl mx-auto mb-16">
                    {p?.cta?.subtitle || ''}
                 </p>
                 <Link href="/contact">
                    <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6">
                       <span data-tina-field={tinaField(p?.cta, 'button')} className="font-black uppercase tracking-[0.4em] text-[12px] text-white">
                          {p?.cta?.button || 'Contact Us'}
                       </span>
                    </ShimmerButton>
                 </Link>
              </BlurFade>
           </div>
        </section>

        <Footer />
      </main>
    </TinaProviderWrapper>
  );
}
