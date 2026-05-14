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
  ChevronRight,
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
import aboutData from '../../../content/pages/about.json';

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

export default function AboutPage(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || `query { 
      about(relativePath: "about.json") { 
        header { title italicWord subtitle badgeText valueBoxes { label sublabel icon } }
        intro { badge titleLine1 titleItalic paragraphs quote quoteAuthor }
        pillars { icon title text }
        journey { badge titleLine1 titleItalic subtitle items { title text } }
        leaders { name title photo quote bio }
        philosophy { titleLine1 titleItalic description items { title icon desc } }
        national { badge titleLine1 titleItalic quote legend { icon text } }
        trust { icon text }
        cta { title subtitle button }
      } 
    }`,
    variables: props.variables || {},
    data: props.data || { about: aboutData },
  });

  const p = data.about;
  const leaders = p.leaders;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title={p.header.title} 
        italicWord={p.header.italicWord} 
        subtitle={p.header.subtitle}
        videoKey="about"
        bgImage="none"
        useVideo={false}
        badgeText={p.header.badgeText}
        valueBoxes={p.header.valueBoxes.map((box: any) => ({
          ...box,
          icon: iconMap[box.icon as keyof typeof iconMap] || Award
        }))}
      />

      {/* Intro Section */}
      <section className="py-24 md:py-48 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                {p.intro.badge}
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.9] mb-10">
                {p.intro.titleLine1} <br />
                <span className="text-[#0284c7] italic font-medium">{p.intro.titleItalic}</span>
              </h2>
              <div className="space-y-6 text-xl text-slate-500 leading-relaxed font-light">
                {p.intro.paragraphs.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.3} className="relative">
               <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  <Quote className="text-[#38bdf8]/20 w-24 h-24 mb-8" />
                  <blockquote className="text-2xl md:text-3xl font-serif italic font-medium leading-relaxed mb-10 relative z-10">
                    "{p.intro.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-px bg-[#38bdf8]/40" />
                     <cite className="text-[#38bdf8] font-black uppercase tracking-[0.2em] text-xs not-italic">{p.intro.quoteAuthor}</cite>
                  </div>
               </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
            {p.trust.map((item: any, i: number) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Award;
              return (
                <div key={i} className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                  <Icon size={20} className="text-[#0284c7]" />
                  <span className="text-[#0f172a] font-black uppercase tracking-[0.2em] text-[10px]">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Stats Section */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <BlurFade delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                  {p.journey.badge}
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.9] mb-8">
                  {p.journey.titleLine1} <br />
                  <span className="text-[#0284c7] italic font-medium">{p.journey.titleItalic}</span>
                </h2>
                <p className="text-xl text-slate-500 font-light leading-relaxed">
                  {p.journey.subtitle}
                </p>
              </BlurFade>
            </div>
            <div className="lg:col-span-7">
               <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
                  {p.journey.items.map((stat: any, i: number) => (
                    <BlurFade key={i} delay={0.2 + i * 0.1}>
                       <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:bg-white hover:border-[#0284c7]/20 hover:shadow-2xl transition-all duration-700 text-center">
                          <div className="text-5xl md:text-6xl font-serif font-black text-[#0284c7] mb-4">{stat.title}</div>
                          <div className="text-[10px] font-black text-[#0f172a] uppercase tracking-[0.2em] leading-relaxed">{stat.text}</div>
                       </div>
                    </BlurFade>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-24 md:py-48 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0284c7] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {p.pillars.map((pillar: any, i: number) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap] || Award;
              return (
                <BlurFade key={i} delay={0.1 * i} className="h-full">
                  <div className="h-full bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-14 hover:bg-white/10 hover:border-white/20 transition-all duration-700 group">
                    <div className="w-16 h-16 rounded-2xl bg-[#0284c7] flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <Icon size={30} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-serif font-black mb-6 tracking-tighter">{pillar.title}</h3>
                    <p className="text-white/40 text-lg font-light leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="py-24 md:py-48 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <BlurFade className="text-center mb-24 md:mb-32">
            <div className="flex justify-center mb-8">
              <AnimatedGradientText>{p.national.badge}</AnimatedGradientText>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black text-[#0f172a] tracking-tighter leading-[1] sm:leading-[0.85]">
              {p.national.titleLine1} <span className="text-[#0284c7] italic font-medium">{p.national.titleItalic}</span>
            </h2>
          </BlurFade>

          <div className="space-y-16 sm:space-y-24 md:space-y-40 max-w-6xl mx-auto">
            {leaders.map((leader: any, i: number) => (
              <BlurFade key={i} delay={0.2} className="group">
                <div className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-20 items-center",
                  i % 2 === 1 && "lg:flex-row-reverse"
                )}>
                  <div className="w-full lg:w-5/12 flex justify-center shrink-0">
                     <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
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
                    <div className="mb-8">
                       <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tight">{leader.name}</h3>
                       <div className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em] mt-2">{leader.title}</div>
                    </div>
                    
                    <div className="relative mb-12">
                       <Quote className="absolute -top-4 -left-6 text-[#0284c7]/5 w-16 h-16" />
                       <p className="relative z-10 text-xl font-serif text-[#0f172a] italic leading-relaxed font-bold border-l-4 border-[#0284c7] pl-8">
                          "{leader.quote}"
                       </p>
                    </div>

                    <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-light">
                      {leader.bio.map((para: string, j: number) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
       <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
               <Building2 size={56} strokeWidth={1} className="mx-auto text-[#0284c7] mb-12" />
               <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 sm:mb-10 leading-[1] sm:leading-[0.9] tracking-tighter">
                 {p.philosophy.titleLine1}<br/>
                 <span className="text-[#0284c7] italic font-medium">{p.philosophy.titleItalic}</span>
               </h3>
              <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-20">
                 {p.philosophy.description}
              </p>
               <div className="grid sm:grid-cols-3 gap-8">
                 {p.philosophy.items.map((item: any, idx: number) => (
                   <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-700">
                     <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-sm text-[#0f172a] mb-8 border border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                       {(() => {
                         const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                         return <Icon size={28}/>;
                       })()}
                     </div>
                     <div className="font-black font-serif text-2xl text-[#0f172a] mb-4">{item.title}</div>
                     <div className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</div>
                   </div>
                 ))}
               </div>
            </BlurFade>
          </div>
        </div>
      </section>
 
      {/* Strategic Partnership Section */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <BlurFade delay={0.1}>
            <div className="flex flex-col items-center mb-16">
              <div className="mb-8">
                <AnimatedGradientText>{p.national.badge}</AnimatedGradientText>
              </div>
               <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] leading-[1] sm:leading-[0.85] tracking-tighter uppercase">
                 {p.national.titleLine1} <br />
                 <span className="text-[#0284c7] italic font-medium lowercase">{p.national.titleItalic}</span>
               </h3>
            </div>
            <p className="text-slate-400 text-xl md:text-2xl font-light mb-20 leading-relaxed max-w-4xl mx-auto italic">
               "{p.national.quote}"
            </p>
          </BlurFade>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6">
           <BlurFade delay={0.3}>
              <div className="rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 p-8 md:p-16 shadow-2xl relative">
                 <div className="relative z-10 min-h-[400px] md:min-h-[600px]">
                    <USAMap />
                 </div>
                 
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 relative z-20">
                    {p.national.legend.map((item: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-slate-100">
                        {(() => {
                          const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                          return <Icon className="text-[#0284c7]" size={20} />;
                        })()}
                        <span className="text-[#0f172a] font-black uppercase text-[9px] tracking-widest">{item.text}</span>
                      </div>
                    ))}
                  </div>
              </div>
           </BlurFade>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-32 md:py-64 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <BlurFade delay={0.2}>
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-10 sm:mb-16">
              {p.cta.title.split(' ')[0]} <br />
              <span className="text-[#0284c7] italic">{p.cta.title.split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-20">
              {p.cta.subtitle}
            </p>
            <Link href="/contact">
              <ShimmerButton as="div" background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-16 py-8 shadow-2xl">
                <span className="font-black uppercase tracking-[0.4em] text-[13px] text-white">{p.cta.button}</span>
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </main>
  );
}
