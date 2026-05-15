'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { tinaField } from '@/lib/tina';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BottomCTA({ data, parentField }: { data?: any, parentField?: string }) {
  const d = data || {
    quote: 'Ready to evolve your therapy department?',
    checklist: [],
    primaryCta: 'Start a Consultation',
    phone: '(800) 123-4567',
    isVisible: true
  };

  if (d.isVisible === false) return null;

  return (
    <section className="py-24 md:py-48 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0284c7 0%, transparent 50%)' }} />
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <BlurFade delay={0.2} duration={0.8}>
            <div className="text-6xl md:text-8xl text-[#0284c7]/20 font-serif mb-0 leading-none">"</div>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-10 md:mb-16 leading-[1] tracking-tighter -mt-4" data-tina-field={tinaField(d, 'quote')}>
              {d.quote}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-16 md:mb-24 text-left max-w-2xl mx-auto">
              {(d.checklist || []).map((item: string, i: number) => (
                <BlurFade delay={0.4 + i * 0.05} key={i} className="flex items-center gap-4 text-white/50 text-sm md:text-base font-light">
                  <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                  </div>
                  <span data-tina-field={tinaField(d, `checklist.${i}`)}>{item}</span>
                </BlurFade>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="relative z-50 pointer-events-auto">
                <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.6)" borderRadius="9999px" className="group px-10 py-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-white" data-tina-field={tinaField(d, 'primaryCta')}>{d.primaryCta}</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </ShimmerButton>
              </Link>
              <a
                href={`tel:${d.phone.replace(/\D/g, '')}`}
                className="text-white hover:text-[#0284c7] transition-colors flex flex-col items-center sm:items-start relative z-50 pointer-events-auto"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-1">Direct Line</span>
                <span className="text-lg md:text-xl font-serif font-bold tracking-tight" data-tina-field={tinaField(d, 'phone')}>{d.phone}</span>
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
