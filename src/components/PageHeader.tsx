'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Target } from 'lucide-react';

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

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  italicWord?: string;
  videoKey?: keyof typeof imageMap;
  bgImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  italicWord,
  videoKey = 'default',
  bgImage,
}: PageHeaderProps) {
  const imageUrl = bgImage || imageMap[videoKey] || imageMap.default;
  const videoId = videoMap[videoKey as string];

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center min-h-screen bg-[#0f172a]">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#0f172a]">
        {videoId ? (
          <div className="absolute inset-0 pointer-events-none select-none">
            {/* Shifted video up significantly by using a smaller negative top offset */}
            <div className="absolute w-[320vw] h-[320vh] top-[-80vh] left-[-160vw] pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${videoId}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1`}
                title={`${title} background cover`}
                allow="autoplay; encrypted-media"
                className="w-full h-full border-0 opacity-40 contrast-[1.1] saturate-[0.8]"
              />
            </div>
            {/* Interaction Blocker */}
            <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default" />
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={`${title} background cover`}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        
        {/* Multi-layer gradient overlay (Matched to Services Hero) */}
        <div className="absolute inset-0 z-20 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, #0284c7 0%, transparent 65%)' }} />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f172a]/95 via-transparent to-transparent" />
        <div className="absolute inset-0 z-25 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
      </div>

      {/* ── Content (Restructured to match Services/Home Hero Style) ── */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 -mt-12">
        <BlurFade delay={0.2}>
           {/* Subtitle Badge */}
           <div className="flex items-center gap-6 mb-12">
              <div className="w-12 h-[1px] bg-[#0284c7]" />
              <span className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.6em]">Professional Integrity</span>
           </div>
           
           <h1 className="text-6xl md:text-[8vw] lg:text-[7vw] font-serif font-black text-white leading-[0.8] tracking-tighter mb-16 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap overflow-visible">
              <span className="uppercase tracking-tighter">{title}</span>
              {italicWord && (
                <span className="text-[#0284c7] italic ml-[0.15em] uppercase tracking-tighter">{italicWord}.</span>
              )}
           </h1>

           {subtitle && (
              <div className="mb-20 w-full">
                 <p className="text-xl md:text-3xl text-white/40 font-light leading-relaxed border-l-4 border-[#0284c7] pl-10 italic max-w-5xl">
                    "{subtitle}"
                 </p>
              </div>
           )}

           <div className="flex items-center gap-8">
              <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl">
                 <Target size={20} />
              </div>
              <div className="flex flex-col">
                 <span className="text-white font-black uppercase text-[11px] tracking-widest">Core Philosophy</span>
                 <span className="text-white/20 text-[12px] font-light italic">"Results Driven Leadership"</span>
              </div>
           </div>
        </BlurFade>
      </div>
    </section>
  );
}
