'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { tinaField } from '@/lib/tina';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Partner({ data, parentField }: { data?: any, parentField?: string }) {
  const d = data || {
    title: 'Partner With Us',
    desc: 'Join the growing list of facilities achieving clinical excellence.',
    button: 'Get Started',
    isVisible: true,
    theme: 'light'
  };

  if (d.isVisible === false) return null;

  return (
    <section className={cn(
      "py-20 md:py-32 relative overflow-hidden",
      d.theme === 'dark' ? "bg-[#0f172a] text-white" : d.theme === 'slate' ? "bg-slate-900 text-white" : "bg-slate-50 text-[#0f172a]"
    )}>
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10 text-center">
        <BlurFade delay={0.2}>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tighter mb-8",
            (d.theme === 'dark' || d.theme === 'slate') ? "text-white" : "text-[#0f172a]"
          )} data-tina-field={tinaField(d, 'title')}>
            {d.title}
          </h2>
          <p className={cn(
            "text-lg md:text-xl font-light max-w-2xl mx-auto mb-12",
            (d.theme === 'dark' || d.theme === 'slate') ? "text-white/50" : "text-slate-500"
          )} data-tina-field={tinaField(d, 'desc')}>
            {d.desc}
          </p>
          <div className="relative z-50 pointer-events-auto">
            <Link href="/contact" className="focus-visible:outline-none">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.6)" borderRadius="9999px" className="group px-10 py-5 mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-white" data-tina-field={tinaField(d, 'button')}>{d.button}</span>
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
