'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import { tinaField } from '@/lib/tina';
import USAMap from './USAMap';
import { Microscope, HeartPulse, ShieldCheck, BarChart3, Users, TrendingUp, Search, Map, Zap, GraduationCap, Award, Clock } from 'lucide-react';

const iconMap: any = {
  Microscope, HeartPulse, ShieldCheck, BarChart3, Users, TrendingUp, Search, Map, Zap, GraduationCap, Award, Clock
};

export default function ServiceArea({ data, activeStates, parentField }: { data?: any, activeStates?: string[], parentField?: string }) {
  const d = data || {
    title: 'Nationwide Service Coverage',
    legend: [],
    isVisible: true
  };

  if (d.isVisible === false) return null;

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black text-[#0f172a] leading-[0.95] tracking-tighter mb-8" data-tina-field={tinaField(d, 'title')}>
              {d.title}
            </h2>
          </BlurFade>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
            {(d.legend || []).map((item: any, i: number) => {
              const Icon = iconMap[item.icon] || Map;
              return (
                <BlurFade delay={0.2 + i * 0.1} key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                  <Icon size={18} className="text-[#0284c7]" />
                  <span data-tina-field={tinaField(item, 'text')}>{item.text}</span>
                </BlurFade>
              );
            })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <BlurFade delay={0.3}>
            <USAMap activeStates={activeStates} />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
