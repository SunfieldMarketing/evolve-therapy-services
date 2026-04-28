'use client';

import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Marquee } from '@/components/magicui/marquee';
import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientTextDark } from '@/components/magicui/animated-gradient-text';
import { cn } from '@/lib/utils';

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

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <figure
      className={cn(
        'relative flex flex-col justify-between w-72 sm:w-80 shrink-0 cursor-default',
        'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6',
        'hover:bg-white/8 hover:border-white/20 transition-all duration-200',
        'select-none',
      )}
    >
      {/* Quote icon */}
      <Quote size={24} className="text-[#0284c7]/30 absolute top-5 right-5" aria-hidden="true" />

      {/* Stars */}
      <StarRow count={t.stars} />

      {/* Content */}
      <blockquote className="mt-3 text-white/70 text-sm leading-relaxed font-light flex-1">
        &ldquo;{t.content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/10">
        <div className="w-9 h-9 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/30 flex items-center justify-center text-[#0284c7] font-black text-sm shrink-0">
          {t.initials}
        </div>
        <div>
          <figcaption className="text-white font-bold text-sm">{t.name}</figcaption>
          <p className="text-white/35 text-[10px] mt-0.5">
            {t.role} · {t.facility}
          </p>
        </div>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-24 bg-[#0f172a] overflow-hidden" aria-label="Client testimonials">
      {/* Background — Magic UI DotPattern dark */}
      <div className="absolute inset-0 dot-pattern-dark opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(ellipse at 60% 50%, rgba(2,132,199,0.10) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <BlurFade className="text-center mb-10 md:mb-14">
          <div className="flex justify-center mb-5">
            <AnimatedGradientTextDark>Client Voices</AnimatedGradientTextDark>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tighter leading-[0.95]">
            Real Results,{' '}
            <span className="text-[#0284c7] italic font-medium">Trusted Partners.</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto font-light mt-4">
            Hear from LTC professionals who have transformed their therapy programs with Evolve.
          </p>
        </BlurFade>
      </div>

      {/* ── Magic UI Marquee — single row ── */}
      <div className="relative">
        <Marquee pauseOnHover className="py-3 [--duration:50s] [--gap:1.5rem]">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f172a] to-transparent z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-10" aria-hidden="true" />
      </div>

      {/* CTA */}
      <BlurFade className="text-center mt-10 md:mt-12" delay={0.2}>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all duration-200 shadow-[0_0_32px_rgba(2,132,199,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
        >
          Partner With Evolve
        </Link>
      </BlurFade>
    </section>
  );
}
