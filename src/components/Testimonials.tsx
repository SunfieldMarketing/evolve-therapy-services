'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/magicui/marquee';
import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientTextDark } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { cn } from '@/lib/utils';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

const testimonials = [
  {
    name: 'Amy Tyler, PTA',
    role: 'Director of Rehab',
    facility: 'Crystal Health and Rehab',
    content:
      'The support we received from Evolve Therapy Services facilitated our shift from a negative margin to being the most profitable we have ever been as a rehab department. Lisa and Isaiah work hard to ensure that we are up to date on the latest changes.',
    stars: 5,
    initials: 'AT',
  },
  {
    name: 'I. Chafetz',
    role: 'Facility Administrator',
    facility: 'LTC Operator',
    content:
      "Having a company that treats your facilities like it's their own is very rare. They will focus on your facilities' goals like it's their own. It's an absolute pleasure both from a customer service and productivity side.",
    stars: 5,
    initials: 'IC',
  },
  {
    name: 'Jimmy Daniels, COTA/L',
    role: 'Director of Rehab',
    facility: 'Emerald Care Center',
    content:
      'The leadership of Evolve has made a great impact not only in my daily operations but has made it fun and exciting to work, ultimately making a positive impact in our communities. They have definitely been a blessing.',
    stars: 5,
    initials: 'JD',
  },
  {
    name: 'Sarah Mitchell, OT',
    role: 'Lead Occupational Therapist',
    facility: 'Sunrise Senior Living',
    content:
      'Evolve completely transformed how our therapy team operates. The billing efficiency and clinical protocols they brought in have made a tangible difference for our residents and our bottom line.',
    stars: 5,
    initials: 'SM',
  },
  {
    name: 'Robert Hartley',
    role: 'Administrator',
    facility: 'Hillview Care Center',
    content:
      'From day one, the Evolve team felt like an extension of our own staff. They understand LTC challenges deeply and their strategic guidance has been invaluable to our facility growth.',
    stars: 5,
    initials: 'RH',
  },
];


export default function Testimonials() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-44 bg-[#0f172a] overflow-hidden" aria-label="Client testimonials">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0284c7 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <BlurFade className="text-center mb-20 md:mb-32">
          <div className="flex justify-center mb-8">
            <AnimatedGradientTextDark>Client Voices</AnimatedGradientTextDark>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter leading-[0.9] mb-8">
            Real Results, <br />
            <span className="text-[#0284c7] italic font-medium">Trusted Partners.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Hear from LTC professionals who have transformed their therapy programs with Evolve.
          </p>
        </BlurFade>

        {/* Carousel Container */}
        <div className="relative group">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-16 hide-scrollbar cursor-grab active:cursor-grabbing"
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="snap-center shrink-0 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
              >
                <div className="h-full rounded-[3rem] border border-white/5 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-14 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 group/card">
                  <div className="mb-10">
                    <div className="flex justify-between items-start mb-8">
                      <StarRow count={t.stars} />
                      <Quote size={32} className="text-[#0284c7]/20 group-hover/card:text-[#0284c7]/40 transition-colors" />
                    </div>
                    <blockquote className="text-xl md:text-2xl text-white/80 font-serif italic font-medium leading-relaxed">
                      &ldquo;{t.content}&rdquo;
                    </blockquote>
                  </div>

                  <div className="flex items-center gap-5 pt-10 border-t border-white/5">
                    <div className="w-14 h-14 rounded-2xl bg-[#0284c7] flex items-center justify-center text-white font-black text-lg shadow-xl shadow-blue-500/20">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-lg font-black text-white tracking-tight">{t.name}</div>
                      <div className="text-[#0284c7] text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                        {t.role} · {t.facility}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation & Progress Bar (Matching Screenshot 2 style) */}
          <div className="mt-12 flex items-center gap-8 px-4">
             <button 
               onClick={() => scroll('left')}
               className="text-white/20 hover:text-white transition-colors"
               aria-label="Previous testimonial"
             >
               <ChevronLeft size={32} strokeWidth={1} />
             </button>
             
             {/* Custom Progress Bar */}
             <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-white/40"
                  style={{ width: `${scrollProgress}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
             </div>

             <button 
               onClick={() => scroll('right')}
               className="text-white/20 hover:text-white transition-colors"
               aria-label="Next testimonial"
             >
               <ChevronRight size={32} strokeWidth={1} />
             </button>
          </div>
        </div>

        {/* CTA */}
        <BlurFade className="text-center mt-24" delay={0.2}>
          <Link
            href="/contact"
          >
            <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6">
              <span className="font-black uppercase tracking-[0.25em] text-[11px] text-white">Partner With Evolve</span>
            </ShimmerButton>
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
