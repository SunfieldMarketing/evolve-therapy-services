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
import Link from 'next/link';
import { 
  ArrowRight, Microscope, HeartPulse, ShieldCheck, 
  TrendingUp, Users, Clock, BarChart3, Award, Search, Map, Zap, GraduationCap
} from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { useTina, tinaField } from '@/lib/tina';
import homeData from '../../content/pages/home.json';
import settingsData from '../../content/global/settings.json';
import contactData from '../../content/pages/contact.json';

const iconMap: any = {
  Microscope, HeartPulse, ShieldCheck, BarChart3, Users, TrendingUp, Search, Map, Zap, GraduationCap, Award, Clock
};

export default function Home(props: { data: any; query: string; variables: any }) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  const { data } = useTina({
    query: props.query || `query {
      home(relativePath: "home.json") {
        hero { eyebrow titleLine1 titleItalic titleLine2 subtext primaryCta primaryCtaLink secondaryCta secondaryCtaLink stats { value label } }
        clinicalExcellence { badge titleLine1 titleItalic description stats { value suffix label desc } services { title desc tag icon slug } }
        process { badge title titleItalic description steps { num title desc icon } }
        whyEvolve { 
          title subtitle introText 
          features { title subtitle desc icon color href } 
          quoteStrip { text author authorTitle authorPhoto } 
        }
        ourServices {
          title theme showSection
          items { title desc icon slug }
          featuredCard { badge title titleItalic description buttonText buttonLink image }
        }
        bottomCta { quote checklist primaryCta primaryCtaLink phone }
        coverage { title legend { text icon } }
        faq { title items { question answer } }
        partner { title desc button buttonLink }
      }
      contact(relativePath: "contact.json") {
        hero { badge titleLine1 titleItalic description }
        sidebar { title titleItalic description items { icon label value sub } }
        form { badge title titleItalic description buttonText inquiryGoals }
        trustBadges { icon title desc }
      }
      settings(relativePath: "settings.json") {
        siteName phone email address linkedin
        navbar { links { name href } ctaText }
        footer { tagline copyright links { name href } serviceLinks { name href } }
        testimonials { title titleItalic description list { name role facility content stars initials } }
        faq { title titleItalic description list { q a } }
        activeStates
        mobileCta { text href }
      }
    }`,
    variables: props.variables || {},
    data: props.data || { home: homeData, contact: contactData, settings: settingsData },
  });

  const p = data.home;
  const s = data.settings;

  return (
    <main className="min-h-screen bg-white selection:bg-[#0284c7]/30 selection:text-white">
      <Navbar data={s?.navbar} />
      <Hero data={p.hero} parentField="hero" />

      {/* ── Clinical Excellence ── */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0284c7]/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20 md:mb-28">
            <BlurFade delay={0.1}>
              <div className="mb-6">
                <AnimatedGradientText data-tina-field={tinaField(p.clinicalExcellence, 'badge')}>{p.clinicalExcellence.badge}</AnimatedGradientText>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter">
                <span data-tina-field={tinaField(p.clinicalExcellence, 'titleLine1')}>{p.clinicalExcellence.titleLine1}</span><br />
                <span className="text-[#0284c7] italic font-medium" data-tina-field={tinaField(p.clinicalExcellence, 'titleItalic')}>{p.clinicalExcellence.titleItalic}</span>
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed font-light shrink-0" data-tina-field={tinaField(p.clinicalExcellence, 'description')}>
              {p.clinicalExcellence.description}
            </BlurFade>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
            {p.clinicalExcellence.stats.map((stat: any, i: number) => (
              <BlurFade
                delay={0.1 + i * 0.1}
                key={i}
                className="group flex flex-col"
              >
                <div className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] mb-2" data-tina-field={tinaField(stat, 'value')}>
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-[#0284c7] uppercase tracking-[0.2em] mb-4" data-tina-field={tinaField(stat, 'label')}>{stat.label}</div>
                <p className="text-sm text-slate-400 font-light leading-relaxed" data-tina-field={tinaField(stat, 'desc')}>{stat.desc}</p>
              </BlurFade>
            ))}
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 md:mb-40">
            {p.clinicalExcellence.services.map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Microscope;
              return (
                <BlurFade
                  delay={0.1 + i * 0.08}
                  key={i}
                  className="relative overflow-hidden group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#0284c7]/30 hover:shadow-[0_40px_80px_-20px_rgba(2,132,199,0.12)] transition-all duration-500"
                >
                  <Link href={item.slug ? `/services/${item.slug}` : `/services/${item.title?.toLowerCase().replace(/ /g, '-')}`} className="absolute inset-0 z-30 pointer-events-auto" aria-label={`View details for ${item.title}`} />
                  <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={6} colorFrom="#38bdf8" colorTo="#0284c7" />
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border bg-white text-[#0f172a] border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white shadow-sm" data-tina-field={tinaField(item, 'icon')}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full text-[#0284c7] bg-[#0284c7]/5" data-tina-field={tinaField(item, 'tag')}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-black font-serif text-2xl lg:text-3xl tracking-tight mb-4 relative z-10 text-[#0f172a]" data-tina-field={tinaField(item, 'title')}>
                    {item.title}
                  </h4>
                  <p className="text-[15px] md:text-base leading-relaxed font-light relative z-10 text-slate-500" data-tina-field={tinaField(item, 'desc')}>
                    {item.desc}
                  </p>
                </BlurFade>
              );
            })}
          </div>

          {/* Process Timeline */}
          <BlurFade delay={0.2} className="bg-[#0f172a] rounded-[3rem] p-10 md:p-20 overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16 md:mb-24">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-px h-8 bg-[#0284c7]" />
                    <span className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em]" data-tina-field={tinaField(p.process, 'badge')}>{p.process.badge}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter">
                    <span data-tina-field={tinaField(p.process, 'title')}>{p.process.title}</span> <span className="text-[#0284c7] italic font-medium" data-tina-field={tinaField(p.process, 'titleItalic')}>{p.process.titleItalic}</span>
                  </h3>
                </div>
                <p className="text-white/40 text-lg md:text-xl font-light max-w-xs" data-tina-field={tinaField(p.process, 'description')}>
                  {p.process.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                {p.process.steps.map((step: any, i: number) => {
                   const StepIcon = iconMap[step.icon] || Search;
                   return (
                    <BlurFade delay={0.3 + i * 0.12} key={i} className="relative group" data-tina-field={tinaField(step, 'title')}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-5xl md:text-7xl font-serif font-black text-[#0284c7]/10 group-hover:text-[#0284c7]/30 transition-colors duration-500">{step.num}</div>
                        <StepIcon size={24} className="text-[#0284c7] opacity-40 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                      <h4 className="font-black text-white text-lg md:text-xl mb-4 tracking-tight">{step.title}</h4>
                      <p className="text-white/30 text-sm leading-relaxed font-light" data-tina-field={tinaField(step, 'desc')}>{step.desc}</p>
                    </BlurFade>
                  );
                })}
              </div>
            </div>
          </BlurFade>

          {/* Bottom Link */}
          <div className="mt-16 text-center">
            <Link href="/services" className="group inline-flex items-center gap-3 text-slate-400 hover:text-[#0284c7] transition-colors">
              <span className="text-xs font-black uppercase tracking-[0.3em]">View Full Clinical Portfolio</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <WhyEvolve data={p.whyEvolve} parentField="whyEvolve" />
      <Services data={p.ourServices} parentField="ourServices" />
      <Testimonials data={s?.testimonials} parentField="testimonials" />
      <USAMap activeStates={s?.activeStates} />
      <FAQ data={s?.faq || p?.faq} parentField={s?.faq ? "faq" : "faq"} />

      {/* ── Philosophy / CTA ── */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
          <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] tracking-tighter mb-6 leading-none">
              Start your <span className="text-[#0284c7] italic font-medium">clinical evolution</span> with Evolve Therapy Services
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
              Ready to take control of your therapy department's future? <br className="hidden md:block" />
              Let's discuss a customized management roadmap.
            </p>
          </div>

          <div className="bg-[#0f172a] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:border-[#0284c7]/30 transition-all duration-500">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0284c7 0%, transparent 50%)' }} />
              <p className="text-2xl md:text-5xl font-serif font-black text-[#38bdf8] italic mb-10 leading-[1.1] relative z-10 tracking-tighter" data-tina-field={tinaField(p.bottomCta, 'quote')}>
                "{p.bottomCta.quote}"
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-16 md:mb-24 text-left max-w-2xl mx-auto">
                {p.bottomCta.checklist.map((item: string, i: number) => (
                  <BlurFade delay={0.4 + i * 0.05} key={i} className="flex items-center gap-4 text-white/50 text-sm md:text-base font-light">
                    <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                    </div>
                    <span data-tina-field={tinaField(p.bottomCta, `checklist.${i}`)}>{item}</span>
                  </BlurFade>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href={p.bottomCta.primaryCtaLink || "/contact"} className="relative z-[101] pointer-events-auto">
                  <ShimmerButton as="div" background="#0284c7" shimmerColor="rgba(255,255,255,0.6)" borderRadius="9999px" className="group px-10 py-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-white" data-tina-field={tinaField(p.bottomCta, 'primaryCta')}>{p.bottomCta.primaryCta}</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </ShimmerButton>
                </Link>
                <a
                  href={`tel:${p.bottomCta.phone.replace(/\D/g, '')}`}
                  className="text-white hover:text-[#0284c7] transition-colors flex flex-col items-center sm:items-start relative z-[101] pointer-events-auto"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">Direct Line</span>
                  <span className="text-lg md:text-xl font-serif font-bold tracking-tight" data-tina-field={tinaField(p.bottomCta, 'phone')}>{p.bottomCta.phone}</span>
                </a>
              </div>
          </div>
        </div>
      </section>

      <Contact data={data.contact} parentField="contact" />
      <Footer data={s} preFooterData={s?.preFooterCta} />
      <MobileCTA data={s?.mobileCta} />
    </main>
  );
}
