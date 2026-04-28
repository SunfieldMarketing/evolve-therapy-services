'use client';

import { Award, Briefcase, Zap, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

const features = [
  {
    title: 'Tiered Pricing Model',
    desc: 'Our unique approach customizes to your size of business and Evolves as you do, reducing pricing as you grow.',
    icon: Zap
  },
  {
    title: '100% Revenue Retention',
    desc: 'You retain all therapy revenue while we provide the expert management and operational oversite.',
    icon: Award
  },
  {
    title: 'In-House Employment',
    desc: 'Empower your therapy team with in-house employment and career advancement through internal mentorship.',
    icon: Briefcase
  },
  {
    title: 'Holistic Philosophy',
    desc: 'We set our customers apart through exceptional clinical programming and a holistic approach to care.',
    icon: Heart
  }
];

export default function WhyEvolve() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-50 mix-blend-multiply pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-5 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Content side */}
          <div className="lg:col-span-6">
            <BlurFade delay={0.1} className="mb-8">
              <AnimatedGradientText>The Evolve Advantage</AnimatedGradientText>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-[#0f172a] mb-10 leading-[0.95] tracking-tighter">
                Changing How <br />
                <span className="text-[#0284c7] italic font-medium">Therapy Functions</span>
              </h2>
            </BlurFade>
            
            <BlurFade delay={0.3}>
              <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-xl font-light">
                We provide the framework for clinicians to thrive doing what they have a passion to do, all while maintaining the most fiscally responsible operations for LTC providers.
              </p>
            </BlurFade>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((item, i) => (
                <BlurFade delay={0.3 + i * 0.1} key={i} className="group cursor-default">
                  <div className="w-16 h-16 bg-slate-50 text-[#0f172a] rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500 border border-slate-100 shadow-xl shadow-black/5 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(2,132,199,0.3)]">
                    <item.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-4 tracking-tight group-hover:text-[#0284c7] transition-colors duration-500">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={0.7} className="mt-20 pt-10 border-t border-slate-100">
              <Link href="/about" className="focus-visible:outline-none flex self-start">
                <ShimmerButton background="#f8fafc" shimmerColor="rgba(2,132,199,0.15)" borderRadius="9999px" className="group rounded-full border border-slate-200">
                  <span className="text-[#0f172a] font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-[#0284c7] transition-colors duration-300">Discover Our Leadership</span>
                  <ArrowRight size={18} className="text-[#0f172a] ml-3 group-hover:text-[#0284c7] group-hover:translate-x-1 transition-transform" />
                </ShimmerButton>
              </Link>
            </BlurFade>
          </div>

          {/* Image side */}
          <div className="lg:col-span-6 relative">
            <BlurFade delay={0.4} duration={1.2}>
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] bg-white border border-slate-100 p-4">
                 <div className="relative rounded-[3rem] overflow-hidden w-full h-[750px] group">
                   <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" 
                    alt="Professional Therapy Management Team" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-80" />
                   
                   {/* Premium Testimonial Block */}
                   <div className="absolute bottom-0 left-0 right-0 p-10">
                      <BlurFade delay={0.8} duration={0.8} className="bg-white/95 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl border border-white relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284c7]/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                         <span className="text-7xl text-[#0284c7]/10 font-serif leading-none absolute top-6 left-10 select-none" aria-hidden="true">"</span>
                         <p className="text-[#0f172a] text-xl font-serif italic mb-8 relative z-10 leading-relaxed font-medium">
                           An in-house model allows 100% revenue retention and fosters a unified facility culture.
                         </p>
                         <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                            <Image 
                              src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80" 
                              width={56} 
                              height={56} 
                              className="rounded-[1.25rem] object-cover border border-slate-100 shadow-md" 
                              alt="Lisa Bebie" 
                            />
                            <div>
                              <div className="font-black text-[#0f172a] text-lg tracking-tight">Lisa Bebie</div>
                              <div className="text-[#0284c7] text-[10px] font-black uppercase tracking-[0.2em] mt-1">President & Founder</div>
                            </div>
                         </div>
                      </BlurFade>
                   </div>
                 </div>
              </div>
            </BlurFade>
            
            {/* Background Decorative Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0284c7]/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
