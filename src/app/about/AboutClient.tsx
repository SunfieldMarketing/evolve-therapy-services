'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { 
  Award, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Eye, 
  Target, 
  HeartPulse,
  Quote,
  Building2,
  Stethoscope,
  ShieldCheck,
  Star,
  UserCheck,
  Activity,
  Layers,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import USAMap from '@/components/USAMap';
import { cn } from '@/lib/utils';
import { useTina, tinaField } from '@/lib/tina';
import TinaProviderWrapper from '@/components/TinaProvider';

const iconMap = {
  Award,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Eye,
  Target,
  HeartPulse,
  Building2,
  Stethoscope,
  ShieldCheck,
  Star,
  UserCheck,
  Activity,
  Layers,
  GraduationCap
};

export default function AboutClient(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const p = data?.about;
  const leaders = p?.leaders || [];

  return (
    <TinaProviderWrapper>
      <main className="min-h-screen bg-white">
        <Navbar />
        
        <PageHeader 
          title={p?.header?.title || 'About Us'} 
          italicWord={p?.header?.italicWord || ''} 
          subtitle={p?.header?.subtitle || ''}
          videoKey="about"
          bgImage="none"
          useVideo={false}
          badgeText={p?.header?.badgeText || 'Our Vision'}
          valueBoxes={p?.header?.valueBoxes?.map((box: any) => ({
            ...box,
            icon: iconMap[box.icon as keyof typeof iconMap] || Award
          })) || []}
          tinaFields={{
            title: tinaField(p?.header, 'title'),
            italicWord: tinaField(p?.header, 'italicWord'),
            subtitle: tinaField(p?.header, 'subtitle'),
            badgeText: tinaField(p?.header, 'badgeText'),
          }}
        />

        {/* Intro Section - Restored Clinical Look */}
        <section className="py-24 md:py-48 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <BlurFade delay={0.1}>
                <div data-tina-field={tinaField(p?.intro, 'badge')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  {p?.intro?.badge || 'Our Mission'}
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.9] mb-10">
                  <span data-tina-field={tinaField(p?.intro, 'titleLine1')}>{p?.intro?.titleLine1 || 'Clinical Oversight.'}</span> <br />
                  <span data-tina-field={tinaField(p?.intro, 'titleItalic')} className="text-[#0284c7] italic font-medium">{p?.intro?.titleItalic || 'Evolved.'}</span>
                </h2>
                <div className="space-y-6 text-xl text-slate-500 leading-relaxed font-light">
                  {p?.intro?.paragraphs?.map((para: string, i: number) => (
                    <p key={i} data-tina-field={tinaField(p?.intro, `paragraphs[${i}]`)}>{para}</p>
                  ))}
                </div>
              </BlurFade>

              <BlurFade delay={0.3} className="relative">
                 <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <Quote className="text-[#38bdf8]/20 w-24 h-24 mb-8" />
                    <blockquote data-tina-field={tinaField(p?.intro, 'quote')} className="text-2xl md:text-3xl font-serif italic font-medium leading-relaxed mb-10 relative z-10">
                      "{p?.intro?.quote || ''}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-px bg-[#38bdf8]/40" />
                       <cite data-tina-field={tinaField(p?.intro, 'quoteAuthor')} className="text-[#38bdf8] font-black uppercase tracking-[0.2em] text-xs not-italic">{p?.intro?.quoteAuthor || ''}</cite>
                    </div>
                 </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Pillars of Excellence - Restored Dark Section */}
        <section className="py-24 md:py-48 bg-[#0f172a] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0284c7] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {p?.pillars?.map((pillar: any, i: number) => {
                const Icon = iconMap[pillar?.icon as keyof typeof iconMap] || Award;
                return (
                  <BlurFade key={i} delay={0.1 * i} className="h-full">
                    <div data-tina-field={tinaField(pillar)} className="h-full bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-14 hover:bg-white/10 hover:border-white/20 transition-all duration-700 group">
                      <div className="w-16 h-16 rounded-2xl bg-[#0284c7] flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <Icon size={30} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-3xl font-serif font-black mb-6 tracking-tighter">{pillar?.title || ''}</h3>
                      <p className="text-white/40 text-lg font-light leading-relaxed">
                        {pillar?.text || ''}
                      </p>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Bios - Restored Focus */}
        <section className="py-24 md:py-48 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
             <BlurFade className="text-center mb-24 md:mb-32">
              <h2 className="text-5xl md:text-8xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.85]">
                Our <span className="text-[#0284c7] italic font-medium">Leadership.</span>
              </h2>
            </BlurFade>

            <div className="space-y-40 max-w-6xl mx-auto">
              {leaders.map((leader: any, i: number) => (
                <BlurFade key={i} delay={0.2} className="group">
                  <div className={cn(
                    "flex flex-col lg:flex-row gap-12 lg:gap-20 items-center",
                    i % 2 === 1 && "lg:flex-row-reverse"
                  )}>
                    <div className="w-full lg:w-5/12 flex justify-center shrink-0">
                       <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
                          <Image
                            src={leader.photo}
                            alt={leader.name}
                            fill
                            className="object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent" />
                       </div>
                    </div>

                    <div className="w-full lg:w-7/12">
                      <div data-tina-field={tinaField(leader)}>
                        <div className="mb-8">
                           <h3 className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tight">{leader?.name || ''}</h3>
                           <div className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em] mt-2">{leader?.title || ''}</div>
                        </div>
                        
                        <div className="relative mb-12">
                           <Quote className="absolute -top-4 -left-6 text-[#0284c7]/5 w-16 h-16" />
                           <p className="relative z-10 text-xl font-serif text-[#0f172a] italic leading-relaxed font-bold border-l-4 border-[#0284c7] pl-8">
                              "{leader?.quote || ''}"
                           </p>
                        </div>

                        <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-light">
                          {leader?.bio?.map((para: string, j: number) => (
                            <p key={j}>{para}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* National Strategic Presence - Restored USA Map */}
        <section className="py-24 md:py-48 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 text-center mb-16">
            <BlurFade delay={0.1}>
               <h3 className="text-4xl md:text-7xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.85] mb-8">
                 National <span className="text-[#0284c7] italic font-medium">Footprint.</span>
               </h3>
               <p className="text-slate-400 text-xl md:text-2xl font-light max-w-3xl mx-auto italic">
                 "Providing expert clinical oversight to facilities in over 15 states and growing."
               </p>
            </BlurFade>
          </div>

          <div className="w-full max-w-7xl mx-auto px-6">
             <BlurFade delay={0.3}>
                <div className="rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 p-8 md:p-16 shadow-2xl relative">
                   <div className="relative z-10 min-h-[400px] md:min-h-[600px]">
                      <USAMap />
                   </div>
                </div>
             </BlurFade>
          </div>
        </section>

        {/* Final Conversion CTA */}
        <section className="py-32 md:py-64 bg-white text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-20">
                Join The <br />
                <span className="text-[#0284c7] italic">Evolution.</span>
              </h2>
              <Link href="/contact">
                <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-16 py-8 shadow-2xl">
                  <span className="font-black uppercase tracking-[0.4em] text-[13px] text-white">Contact Our Team</span>
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
