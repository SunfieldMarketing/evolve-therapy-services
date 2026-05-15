'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import USAMap from '@/components/USAMap';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Target,
  Eye,
  HeartPulse,
  Building2,
  TrendingUp,
  Users,
  Quote,
  ShieldCheck,
  Star,
  UserCheck,
  Activity,
  Award,
  Zap,
} from 'lucide-react';
import MobileCTA from '@/components/MobileCTA';
import { cn } from '@/lib/utils';
import { useTina, tinaField } from '@/lib/tina';
import aboutData from '../../../content/pages/about.json';

const iconMap: Record<string, React.ComponentType<any>> = {
  Award, Zap, Shield, Users, TrendingUp, Eye, Target, HeartPulse,
  Building2, ShieldCheck, Star, UserCheck, Activity,
};

export default function AboutPage(props: { data: any; query: string; variables: any }) {
  const { data } = useTina({
    query: props.query || `query {
      about(relativePath: "about.json") {
        header { title italicWord subtitle badgeText valueBoxes { label sublabel icon } }
        trust { icon text }
        intro { badge titleLine1 titleItalic paragraphs quote quoteAuthor }
        pillars { icon title text }
        leaders { name title photo quote bio }
        philosophy { titleLine1 titleItalic description items { title icon desc } }
        national { badge titleLine1 titleItalic quote legend { icon text } }
        cta { title subtitle button buttonLink }
      }
      settings(relativePath: "settings.json") {
        siteName phone email address linkedin
        navbar { links { name href } ctaText }
        footer { tagline copyright links { name href } serviceLinks { name href } }
        preFooterCta { title subtitle primaryCta }
        mobileCta { text href }
      }
    }`,
    variables: props.variables || {},
    data: props.data || { about: aboutData, settings: undefined },
  });

  const p = data.about;
  const s = data.settings;

  return (
    <main className="min-h-screen bg-white">
      <Navbar data={s?.navbar} />

      {/* ── 1. Hero / PageHeader ── */}
      <PageHeader
        title={p.header.title}
        italicWord={p.header.italicWord}
        subtitle={p.header.subtitle}
        bgImage="https://res.cloudinary.com/dai2pg27n/image/upload/v1778105493/9888c51b-097f-46b4-907c-1280f458806b.png"
        useVideo={false}
        badgeText={p.header.badgeText}
        tinaFields={{
          title: tinaField(p.header, 'title'),
          subtitle: tinaField(p.header, 'subtitle'),
          badgeText: tinaField(p.header, 'badgeText'),
        }}
        valueBoxes={p.header.valueBoxes.map((box: any) => ({
          icon: iconMap[box.icon as keyof typeof iconMap] || Award,
          label: box.label,
          sublabel: box.sublabel,
        }))}
      />

      {/* ── 2. Trust Banner ── */}
      <section className="relative z-50 pt-16 pb-16 bg-[#0f172a] border-b border-white/[0.05]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4 opacity-60 hover:opacity-100 transition-all duration-700">
            {p.trust.map((item: any, i: number) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 group cursor-default"
                  data-tina-field={tinaField(p, 'trust')}
                >
                  <Icon className="text-[#0284c7] group-hover:scale-110 transition-transform" size={20} />
                  <span
                    className="text-white/70 font-black uppercase text-[10px] tracking-[0.4em]"
                    data-tina-field={tinaField(item, 'text')}
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Intro / Bridging the Gap ── */}
      <section className="py-24 md:py-48 overflow-hidden relative bg-white">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0284c7]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left: Text */}
            <div>
              <BlurFade delay={0.1}>
                <div className="mb-8">
                  <AnimatedGradientText data-tina-field={tinaField(p.intro, 'badge')}>
                    {p.intro.badge}
                  </AnimatedGradientText>
                </div>
                <h2
                  className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 sm:mb-12 leading-[1] sm:leading-[0.85] tracking-tighter"
                  data-tina-field={tinaField(p.intro, 'titleLine1')}
                >
                  {p.intro.titleLine1}<br />
                  <span
                    className="text-[#0284c7] italic font-medium"
                    data-tina-field={tinaField(p.intro, 'titleItalic')}
                  >
                    {p.intro.titleItalic}
                  </span>
                </h2>
              </BlurFade>

              <BlurFade delay={0.2} className="space-y-8 text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-16">
                {p.intro.paragraphs.map((para: string, i: number) => (
                  <p key={i} data-tina-field={tinaField(p.intro, 'paragraphs')}>{para}</p>
                ))}
              </BlurFade>

              <BlurFade delay={0.3}>
                <blockquote className="bg-[#0f172a] p-10 rounded-3xl border-l-8 border-[#0284c7] shadow-2xl">
                  <p
                    className="font-serif font-medium text-white/90 italic text-xl lg:text-2xl leading-relaxed"
                    data-tina-field={tinaField(p.intro, 'quote')}
                  >
                    &ldquo;{p.intro.quote}&rdquo;
                  </p>
                  <footer
                    className="mt-6 text-[#38bdf8] text-xs font-black uppercase tracking-[0.3em]"
                    data-tina-field={tinaField(p.intro, 'quoteAuthor')}
                  >
                    - {p.intro.quoteAuthor}
                  </footer>
                </blockquote>
              </BlurFade>
            </div>

            {/* Right: Pillars */}
            <div className="grid grid-cols-1 gap-6">
              {p.pillars.map((item: any, i: number) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                return (
                  <BlurFade
                    key={i}
                    delay={0.2 + i * 0.15}
                    className="flex gap-8 p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-[#0284c7]/30 hover:shadow-2xl transition-all duration-700 group"
                  >
                    <div className="w-16 h-16 bg-[#0284c7]/5 rounded-2xl flex items-center justify-center text-[#0284c7] shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3
                        className="font-black text-[#0f172a] font-serif text-2xl mb-4"
                        data-tina-field={tinaField(item, 'title')}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-slate-500 text-base leading-relaxed font-light"
                        data-tina-field={tinaField(item, 'text')}
                      >
                        {item.text}
                      </p>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Leadership Bios (Founders) ── */}
      <section className="py-24 md:py-48 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <BlurFade className="text-center mb-24 md:mb-32">
            <div className="flex justify-center mb-8">
              <AnimatedGradientText>The Founders</AnimatedGradientText>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black text-[#0f172a] tracking-tighter leading-[1] sm:leading-[0.85]">
              Visionary <span className="text-[#0284c7] italic font-medium">Leadership</span>
            </h2>
          </BlurFade>

          <div className="space-y-16 sm:space-y-24 md:space-y-40 max-w-6xl mx-auto">
            {p.leaders.map((leader: any, i: number) => (
              <BlurFade key={i} delay={0.2} className="group">
                <div className={cn(
                  'flex flex-col lg:flex-row gap-12 lg:gap-20 items-center',
                  i % 2 === 1 && 'lg:flex-row-reverse'
                )}>
                  {/* Photo */}
                  <div className="w-full lg:w-5/12 flex justify-center shrink-0">
                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src={leader.photo}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                        data-tina-field={tinaField(leader, 'photo')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12">
                    <div className="mb-8">
                      <h3
                        className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tight"
                        data-tina-field={tinaField(leader, 'name')}
                      >
                        {leader.name}
                      </h3>
                      <div
                        className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em] mt-2"
                        data-tina-field={tinaField(leader, 'title')}
                      >
                        {leader.title}
                      </div>
                    </div>

                    <div className="relative mb-12">
                      <Quote className="absolute -top-4 -left-6 text-[#0284c7]/5 w-16 h-16" />
                      <p
                        className="relative z-10 text-xl font-serif text-[#0f172a] italic leading-relaxed font-bold border-l-4 border-[#0284c7] pl-8"
                        data-tina-field={tinaField(leader, 'quote')}
                      >
                        &ldquo;{leader.quote}&rdquo;
                      </p>
                    </div>

                    <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-light">
                      {leader.bio.map((para: string, j: number) => (
                        <p key={j} data-tina-field={tinaField(leader, 'bio')}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Philosophy / Redefining Standard ── */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
              <Building2 size={56} strokeWidth={1} className="mx-auto text-[#0284c7] mb-12" />
              <h3
                className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 sm:mb-10 leading-[1] sm:leading-[0.9] tracking-tighter"
                data-tina-field={tinaField(p.philosophy, 'titleLine1')}
              >
                {p.philosophy.titleLine1}<br />
                <span
                  className="text-[#0284c7] italic font-medium"
                  data-tina-field={tinaField(p.philosophy, 'titleItalic')}
                >
                  {p.philosophy.titleItalic}
                </span>
              </h3>
              <p
                className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-20"
                data-tina-field={tinaField(p.philosophy, 'description')}
              >
                {p.philosophy.description}
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                {p.philosophy.items.map((item: any, idx: number) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                  return (
                    <div
                      key={idx}
                      className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-700"
                    >
                      <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-sm text-[#0f172a] mb-8 border border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                        <Icon size={28} />
                      </div>
                      <div
                        className="font-black font-serif text-2xl text-[#0f172a] mb-4"
                        data-tina-field={tinaField(item, 'title')}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-sm text-slate-500 leading-relaxed font-light"
                        data-tina-field={tinaField(item, 'desc')}
                      >
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── 6. National Network / USA Map ── */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <BlurFade delay={0.1}>
            <div className="flex flex-col items-center mb-16">
              <div className="mb-8">
                <AnimatedGradientText data-tina-field={tinaField(p.national, 'badge')}>
                  {p.national.badge}
                </AnimatedGradientText>
              </div>
              <h3
                className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] leading-[1] sm:leading-[0.85] tracking-tighter uppercase"
                data-tina-field={tinaField(p.national, 'titleLine1')}
              >
                {p.national.titleLine1} <br />
                <span
                  className="text-[#0284c7] italic font-medium lowercase"
                  data-tina-field={tinaField(p.national, 'titleItalic')}
                >
                  {p.national.titleItalic}
                </span>
              </h3>
            </div>
            <p
              className="text-slate-400 text-xl md:text-2xl font-light mb-20 leading-relaxed max-w-4xl mx-auto italic"
              data-tina-field={tinaField(p.national, 'quote')}
            >
              &ldquo;{p.national.quote}&rdquo;
            </p>
          </BlurFade>
        </div>

        {/* USA Map card */}
        <div className="w-full max-w-7xl mx-auto px-6">
          <BlurFade delay={0.3}>
            <div className="rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 p-8 md:p-16 shadow-2xl relative">
              <div className="relative z-10 min-h-[400px] md:min-h-[600px]">
                <USAMap activeStates={s?.activeStates} />
              </div>

              {/* Legend */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 relative z-20">
                {p.national.legend.map((item: any, idx: number) => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-slate-100"
                    >
                      <Icon className="text-[#0284c7] shrink-0" size={20} />
                      <span
                        className="text-[#0f172a] font-black uppercase text-[9px] tracking-widest"
                        data-tina-field={tinaField(item, 'text')}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── 7. The Evolve Advantage CTA ── */}
      <section className="py-32 md:py-64 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <BlurFade delay={0.2}>
            <h2
              className="text-5xl sm:text-6xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-10 sm:mb-16"
              data-tina-field={tinaField(p.cta, 'title')}
            >
              {p.cta.title} <br />
              <span className="text-[#0284c7] italic">Advantage.</span>
            </h2>
            <p
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-20"
              data-tina-field={tinaField(p.cta, 'subtitle')}
            >
              {p.cta.subtitle}
            </p>
            <Link href={p.cta.buttonLink || "/contact"} className="pointer-events-auto relative z-50">
              <ShimmerButton
                background="#0284c7"
                shimmerColor="rgba(255,255,255,0.4)"
                borderRadius="9999px"
                className="px-16 py-8 shadow-2xl mx-auto pointer-events-auto"
              >
                <span
                  className="font-black uppercase tracking-[0.4em] text-[13px] text-white"
                  data-tina-field={tinaField(p.cta, 'button')}
                >
                  {p.cta.button}
                </span>
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
      <MobileCTA data={s?.mobileCta} />
    </main>
  );
}
