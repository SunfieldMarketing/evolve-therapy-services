'use client';

import { Star, Quote } from 'lucide-react';
import Link from 'next/link';
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

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="w-[380px] md:w-[440px] shrink-0">
      <div className="h-full rounded-[2.5rem] border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-9 md:p-11 flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 group">
        <div className="mb-8">
          <div className="flex justify-between items-start mb-6">
            <StarRow count={t.stars} />
            <Quote size={28} className="text-[#0284c7]/15 group-hover:text-[#0284c7]/30 transition-colors duration-500" />
          </div>
          <blockquote className="text-lg md:text-xl text-white/75 font-serif italic font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-500">
            &ldquo;{t.content}&rdquo;
          </blockquote>
        </div>

        <div className="flex items-center gap-4 pt-8 border-t border-white/[0.06]">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/20 shrink-0 group-hover:scale-110 transition-transform duration-500">
            {t.initials}
          </div>
          <div>
            <div className="text-base font-black text-white tracking-tight">{t.name}</div>
            <div className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.15em] mt-0.5">
              {t.role} · {t.facility}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-40 bg-[#0f172a] overflow-hidden" aria-label="Client testimonials">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0284c7 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <BlurFade className="text-center mb-16 md:mb-24">
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
      </div>

      {/* Auto-scrolling carousel — Single row for cleaner focus */}
      <div className="mb-16">
        <Marquee
          pauseOnHover
          className="[--duration:60s] [--gap:2rem]"
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <BlurFade className="text-center mt-8" delay={0.2}>
          <Link href="/contact">
            <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-12 py-6">
              <span className="font-black uppercase tracking-[0.25em] text-[11px] text-white">Partner With Evolve</span>
            </ShimmerButton>
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
