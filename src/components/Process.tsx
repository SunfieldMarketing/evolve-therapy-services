'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import { tinaField } from '@/lib/tina';
import { cn } from '@/lib/utils';
import { Search, Map, Zap, GraduationCap, Award, Clock, Microscope, HeartPulse, ShieldCheck, BarChart3, Users, TrendingUp } from 'lucide-react';

const iconMap: any = {
  Search, Map, Zap, GraduationCap, Award, Clock, Microscope, HeartPulse, ShieldCheck, BarChart3, Users, TrendingUp
};

export default function Process({ data, parentField }: { data?: any, parentField?: string }) {
  const d = data || {
    badge: 'Our Process',
    title: 'How We',
    titleItalic: 'Evolve',
    description: 'A systematic approach to clinical and operational success.',
    steps: [],
    isVisible: true,
    theme: 'dark'
  };

  if (d.isVisible === false) return null;

  return (
    <section className={cn(
      "py-24 md:py-32 relative overflow-hidden",
      d.theme === 'dark' ? "bg-[#0f172a] text-white" : d.theme === 'slate' ? "bg-slate-900 text-white" : "bg-white text-[#0f172a]"
    )}>
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <BlurFade delay={0.2} className={cn(
          "rounded-[3rem] p-10 md:p-20 overflow-hidden relative border",
          d.theme === 'dark' ? "bg-[#0f172a] border-white/5" : d.theme === 'slate' ? "bg-slate-900 border-white/5" : "bg-slate-50 border-slate-200"
        )}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16 md:mb-24">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-px h-8 bg-[#0284c7]" />
                  <span className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em]" data-tina-field={tinaField(d, 'badge')}>{d.badge}</span>
                </div>
                <h3 className={cn(
                  "text-4xl md:text-6xl font-serif font-black tracking-tighter",
                  (d.theme === 'dark' || d.theme === 'slate') ? "text-white" : "text-[#0f172a]"
                )}>
                  <span data-tina-field={tinaField(d, 'title')}>{d.title}</span> <span className="text-[#0284c7] italic font-medium" data-tina-field={tinaField(d, 'titleItalic')}>{d.titleItalic}</span>
                </h3>
              </div>
              <p className={cn(
                "text-lg md:text-xl font-light max-w-xs",
                (d.theme === 'dark' || d.theme === 'slate') ? "text-white/40" : "text-slate-500"
              )} data-tina-field={tinaField(d, 'description')}>
                {d.description}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
              {(d.steps || []).map((step: any, i: number) => {
                 const StepIcon = iconMap[step.icon] || Search;
                 return (
                  <BlurFade delay={0.3 + i * 0.12} key={i} className="relative group" data-tina-field={tinaField(step, 'title')}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-5xl md:text-7xl font-serif font-black text-[#0284c7]/10 group-hover:text-[#0284c7]/30 transition-colors duration-500">{step.num}</div>
                      <StepIcon size={24} className="text-[#0284c7] opacity-40 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    <h4 className={cn(
                      "font-black text-lg md:text-xl mb-4 tracking-tight",
                      (d.theme === 'dark' || d.theme === 'slate') ? "text-white" : "text-[#0f172a]"
                    )}>{step.title}</h4>
                    <p className={cn(
                      "text-sm leading-relaxed font-light",
                      (d.theme === 'dark' || d.theme === 'slate') ? "text-white/30" : "text-slate-500"
                    )} data-tina-field={tinaField(step, 'desc')}>{step.desc}</p>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
