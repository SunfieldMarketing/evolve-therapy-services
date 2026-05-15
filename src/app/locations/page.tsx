'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import USAMap from '@/components/USAMap';
import { BlurFade } from '@/components/magicui/blur-fade';
import { MapPin, Phone, Mail, ArrowRight, TrendingUp, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { useTina, tinaField } from '@/lib/tina';
import DesignSystemInjector from '@/components/DesignSystemInjector';
import locationsData from '../../../content/pages/locations.json';
import MobileCTA from '@/components/MobileCTA';

const iconMap = {
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  GraduationCap
};

export default function LocationsPage(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || `query { 
      locations(relativePath: "locations.json") { 
        hero { title titleItalic description } 
        hq { badge title address phone email } 
        strategy { title description subtext } 
        partner { badge title description } 
        reach { title titleItalic description items { title desc icon } } 
        commitment { quote } 
      }
      settings(relativePath: "settings.json") {
        siteName phone email address linkedin
        designSystem { primaryColor secondaryColor headingFont bodyFont customCss }
        navbar { logo links { name href } ctaText }
        footer { logo tagline copyright links { name href } serviceLinks { name href } }
        preFooterCta { title subtitle primaryCta }
        mobileCta { text href }
        activeStates
      }
    }`,
    variables: props.variables || {},
    data: props.data || { locations: locationsData, settings: undefined },
  });

  const p = data.locations;
  const s = data.settings;

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#0284c7]/30 selection:text-[#0f172a]">
      <DesignSystemInjector data={s?.designSystem} />
      <Navbar data={s?.navbar} />
      <PageHeader 
        title={p.hero.title} 
        italicWord={p.hero.titleItalic} 
        subtitle={p.hero.description}
        videoKey="locations"
        tinaFields={{
          title: tinaField(p.hero, 'title'),
          subtitle: tinaField(p.hero, 'description'),
        }}
      />

      {/* Interactive USA Coverage Map - Moved to top focus */}
      <USAMap activeStates={s?.activeStates} />

      <section className="py-20 md:py-32 relative overflow-hidden bg-slate-50 border-t border-slate-100">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
             <BlurFade 
               delay={0.1}
               className="lg:col-span-5 flex"
             >
                <div className="bg-[#0f172a] p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden w-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none">
                     <MapPin size={240} />
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 font-black text-[10px] uppercase tracking-[0.3em] mb-10 w-max" data-tina-field={tinaField(p.hq, 'badge')}>
                    {p.hq.badge}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-serif font-black mb-12 tracking-tighter leading-none" data-tina-field={tinaField(p.hq, 'title')}>{p.hq.title}</h3>
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl group-hover:-translate-y-1 transition-transform">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-black text-[#38bdf8] uppercase tracking-[0.2em] text-[9px] mb-2">Principal Office</p>
                        <p className="text-xl font-serif font-medium text-white/90 whitespace-pre-line" data-tina-field={tinaField(p.hq, 'address')}>{p.hq.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl group-hover:-translate-y-1 transition-transform">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="font-black text-[#38bdf8] uppercase tracking-[0.2em] text-[9px] mb-2">Direct Support</p>
                        <p className="text-xl font-serif font-medium text-white/90" data-tina-field={tinaField(p.hq, 'phone')}>{p.hq.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-[#0284c7] text-white rounded-xl flex items-center justify-center shrink-0 shadow-xl group-hover:-translate-y-1 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="font-black text-[#38bdf8] uppercase tracking-[0.2em] text-[9px] mb-2">Digital Inquiries</p>
                        <p className="text-xl font-serif font-medium text-white/90" data-tina-field={tinaField(p.hq, 'email')}>{p.hq.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
             </BlurFade>
             
             <div className="lg:col-span-7 flex flex-col justify-center gap-8">
                <BlurFade 
                   delay={0.2}
                   className="p-10 lg:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group"
                >
                   <h3 className="text-3xl lg:text-4xl font-serif font-black text-[#0f172a] mb-6 tracking-tighter leading-tight flex items-center gap-4 group-hover:text-[#0284c7] transition-colors" data-tina-field={tinaField(p.strategy, 'title')}>
                     <TrendingUp className="text-[#0284c7]" size={36} />
                     {p.strategy.title}
                   </h3>
                   <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-6" data-tina-field={tinaField(p.strategy, 'description')}>
                     {p.strategy.description}
                   </p>
                   <p className="text-sm md:text-base text-slate-400 leading-relaxed font-normal" data-tina-field={tinaField(p.strategy, 'subtext')}>
                     {p.strategy.subtext}
                   </p>
                </BlurFade>
                
                <BlurFade 
                   delay={0.3}
                   className="relative overflow-hidden group p-10 lg:p-14 rounded-[3rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500"
                >
                   <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#0284c7]/5 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/2 pointer-events-none group-hover:bg-[#0f172a]/5 transition-colors" />
                   
                   <div className="relative z-10">
                     <div className="inline-flex px-3 py-1 bg-[#0284c7]/10 text-[#0284c7] text-[10px] uppercase font-black tracking-widest rounded-full mb-6" data-tina-field={tinaField(p.partner, 'badge')}>{p.partner.badge}</div>
                     <h4 className="text-2xl md:text-3xl font-serif font-black text-[#0f172a] mb-4 tracking-tight leading-tight group-hover:text-[#0f172a] transition-colors" data-tina-field={tinaField(p.partner, 'title')}>{p.partner.title}</h4>
                     <p className="text-slate-500 leading-relaxed text-base md:text-lg font-light" data-tina-field={tinaField(p.partner, 'description')}>
                       {p.partner.description}
                     </p>
                   </div>
                </BlurFade>
             </div>
          </div>
        </div>
      </section>

      {/* Strategic Regional Grid */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="text-center mb-20 text-[#0f172a]">
              <h3 className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-[0.9] mb-8">
                <span data-tina-field={tinaField(p.reach, 'title')}>{p.reach.title}</span> <br />
                <span className="text-[#0284c7] italic font-medium" data-tina-field={tinaField(p.reach, 'titleItalic')}>{p.reach.titleItalic}</span>
              </h3>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light" data-tina-field={tinaField(p.reach, 'description')}>{p.reach.description}</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {p.reach.items.map((item: any, i: number) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || MapPin;
                return (
                  <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:scale-[1.05] transition-all duration-500" data-tina-field={tinaField(item, 'title')}>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0284c7] shadow-lg mb-10 border border-slate-100">
                      <Icon size={26} />
                    </div>
                    <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-6 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed" data-tina-field={tinaField(item, 'desc')}>{item.desc}</p>
                  </div>
                );
              })}
           </div>
        </div>
      </section>


      {/* Corporate Commitment */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
           <div className="flex flex-col items-center gap-6">
              <div className="flex gap-2 text-[#0284c7]/20">
                <ArrowRight size={24} /> <ArrowRight size={24} /> <ArrowRight size={24} />
              </div>
              <p className="text-slate-400 font-serif italic text-xl max-w-2xl" data-tina-field={tinaField(p.commitment, 'quote')}>
                "{p.commitment.quote}"
              </p>
           </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
      <MobileCTA data={s?.mobileCta} />
    </main>
  );
}
