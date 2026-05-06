'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Target, ArrowRight, Sparkles, Heart, LucideIcon } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';

// Map of page-specific background abstract/medical images  
const imageMap: Record<string, string> = {
  default:   'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
  services:  'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80',
  about:     'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  contact:   'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  locations: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80',
};

// Map of page-specific background videos
const videoMap: Record<string, string> = {
  services: '8_nVbI7NcOw',
  about: 'bsTbwMlTyjg',
};

interface ValueBox {
  icon: LucideIcon;
  label: string;
  sublabel: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  videoKey?: keyof typeof imageMap;
  bgImage?: string;
  ctaText?: string;
  ctaLink?: string;
  badgeText?: string;
  valueBoxes?: ValueBox[];
  useVideo?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  italicWord,
  videoKey = 'default',
  bgImage,
  ctaText = 'Start Your Evolution',
  ctaLink = '/contact',
  badgeText = 'Professional Integrity',
  valueBoxes = [
    { icon: Sparkles, label: 'Visionary Hub', sublabel: 'Creative Consulting' },
    { icon: Heart, label: 'Compassion', sublabel: 'Results Driven' }
  ],
  useVideo = true,
}: PageHeaderProps) {
  const imageUrl = bgImage || imageMap[videoKey] || imageMap.default;
  const videoId = videoMap[videoKey as string];
  const finalUseVideo = useVideo && !!videoId;

  return (
    <section className="relative w-full h-screen flex flex-col justify-center bg-[#0f172a] overflow-hidden">
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        {finalUseVideo ? (
          <div className="absolute inset-0 pointer-events-none select-none">
            <div className={cn(
              "absolute w-[320vw] h-[320vh] top-[-110vh] left-[-160vw] pointer-events-none",
              videoKey === 'about' && "left-[-100vw] top-[-40vh]"
            )}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${videoId}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1`}
                title={`${title} background cover`}
                allow="autoplay; encrypted-media"
                className="w-full h-full border-0 opacity-40 contrast-[1.2] saturate-[0.6] grayscale-[0.1]"
              />
            </div>
            {/* Interaction Blocker */}
            <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default" />
          </div>
        ) : (
          <div className="absolute inset-0">
            <img
              src={imageUrl}
              alt={`${title} background cover`}
              className="absolute inset-0 w-full h-full object-cover opacity-60 contrast-[1.1] saturate-[1.2]"
            />
            {/* Additional image-specific overlay for better text contrast */}
            <div className="absolute inset-0 bg-[#0f172a]/40 mix-blend-multiply" />
          </div>
        )}
        
        {/* Multi-layer gradient overlay (Matched to Services Hero) */}
        <div className="absolute inset-0 z-20 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, #0284c7 0%, transparent 65%)' }} />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f172a]/95 via-transparent to-transparent" />
        <div className="absolute inset-0 z-25 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      </div>

      {/* ── Content (Matched to Services Hero Style) ── */}
      <div className="relative z-50 container mx-auto px-6 lg:px-12 -mt-12">
        <div className="w-full">
          <BlurFade delay={0.2}>
             {/* Subtitle Badge */}
             <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-[1px] bg-[#0284c7]" />
                <span className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.6em]">{badgeText}</span>
             </div>
             
             <h1 className="text-5xl md:text-[5vw] lg:text-[4.5vw] font-serif font-black text-white leading-[1] tracking-tighter mb-16 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap overflow-visible uppercase">
                {title}
                {italicWord && (
                  <span className="text-[#0284c7] italic ml-[0.15em] uppercase tracking-tighter">{italicWord}.</span>
                )}
             </h1>

             {subtitle && (
                <div className="mb-20 w-full">
                   <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed border-l-4 border-[#0284c7] pl-10 italic max-w-5xl">
                      "{subtitle}"
                   </p>
                </div>
             )}

             <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <Link href={ctaLink} className="inline-flex group shrink-0">
                   <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="0.75rem" className="px-16 py-7 shadow-[0_30px_60px_rgba(2,132,199,0.3)]">
                      <span className="font-black uppercase tracking-[0.4em] text-[14px] text-white">{ctaText}</span>
                      <ArrowRight size={20} className="ml-5 group-hover:translate-x-3 transition-transform" />
                   </ShimmerButton>
                </Link>

                {/* Values Integration: Matched to Services Hero */}
                <div className="flex flex-col sm:flex-row gap-12">
                   {valueBoxes.map((box, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                         <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                            <box.icon size={24} />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-white font-black uppercase text-[11px] tracking-widest mb-1">{box.label}</span>
                            <span className="text-white/20 text-[13px] font-light italic whitespace-nowrap">"{box.sublabel}"</span>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
