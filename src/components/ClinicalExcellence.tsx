'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { tinaField } from '@/lib/tina';
import Link from 'next/link';
import { 
  Microscope, HeartPulse, ShieldCheck, BarChart3, 
  Users, TrendingUp, Search, Map, Zap, GraduationCap, Award, Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: any = {
  Microscope, HeartPulse, ShieldCheck, BarChart3, Users, TrendingUp, Search, Map, Zap, GraduationCap, Award, Clock
};

export default function ClinicalExcellence({ data, parentField }: { data?: any, parentField?: string }) {
  const d = data || {
    badge: 'Clinical Integrity',
    titleLine1: 'Superior Clinical',
    titleItalic: 'Outcomes',
    description: 'We drive excellence through data-backed methodologies and compassionate care.',
    stats: [],
    services: [],
    isVisible: true,
    theme: 'light'
  };

  if (d.isVisible === false) return null;

  return (
    <section className={cn(
      "py-24 md:py-40 relative overflow-hidden",
      d.theme === 'dark' ? "bg-[#0f172a] text-white" : d.theme === 'slate' ? "bg-slate-900 text-white" : "bg-white text-[#0f172a]"
    )}>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0284c7]/3 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20 md:mb-28">
          <BlurFade delay={0.1}>
            <div className="mb-6">
              <AnimatedGradientText data-tina-field={tinaField(d, 'badge')}>{d.badge}</AnimatedGradientText>
            </div>
            <h2 className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-serif font-black leading-[0.95] tracking-tighter",
              d.theme === 'light' ? "text-[#0f172a]" : "text-white"
            )}>
              <span data-tina-field={tinaField(d, 'titleLine1')}>{d.titleLine1}</span><br />
              <span className="text-[#0284c7] italic font-medium" data-tina-field={tinaField(d, 'titleItalic')}>{d.titleItalic}</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} className="text-lg md:text-xl text-slate-500 max-w-md leading-relaxed font-light shrink-0" data-tina-field={tinaField(d, 'description')}>
            {d.description}
          </BlurFade>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 md:mb-32">
          {(d.stats || []).map((stat: any, i: number) => (
            <BlurFade
              delay={0.1 + i * 0.1}
              key={i}
              className="group flex flex-col"
              data-tina-field={tinaField(stat, 'label')}
            >
              <div className={cn(
                "text-4xl md:text-6xl font-serif font-black mb-2",
                d.theme === 'light' ? "text-[#0f172a]" : "text-white"
              )}>
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-[#0284c7] uppercase tracking-[0.2em] mb-4">{stat.label}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed" data-tina-field={tinaField(stat, 'desc')}>{stat.desc}</p>
            </BlurFade>
          ))}
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(d.services || []).map((item: any, i: number) => {
            const Icon = iconMap[item.icon] || Microscope;
            return (
              <BlurFade
                delay={0.1 + i * 0.08}
                key={i}
                className={cn(
                  "relative overflow-hidden group p-10 rounded-[2.5rem] border transition-all duration-500",
                  d.theme === 'light' 
                    ? "bg-slate-50 border-slate-100 hover:bg-white hover:border-[#0284c7]/30" 
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#0284c7]/50"
                )}
                data-tina-field={tinaField(item, 'title')}
              >
                <Link href={item.slug ? `/services/${item.slug}` : `/services/${item.title?.toLowerCase().replace(/ /g, '-')}`} className="absolute inset-0 z-30 pointer-events-auto" aria-label={`View details for ${item.title}`} />
                <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" duration={6} colorFrom="#38bdf8" colorTo="#0284c7" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border bg-white text-[#0f172a] border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white shadow-sm">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full text-[#0284c7] bg-[#0284c7]/5">
                    {item.tag}
                  </span>
                </div>
                <h4 className={cn(
                  "font-black font-serif text-2xl lg:text-3xl tracking-tight mb-4 relative z-10",
                  d.theme === 'light' ? "text-[#0f172a]" : "text-white"
                )}>
                  {item.title}
                </h4>
                <p className="text-[15px] md:text-base leading-relaxed font-light relative z-10 text-slate-500" data-tina-field={item.slug ? undefined : tinaField(item, 'desc')}>
                  {item.desc}
                </p>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
