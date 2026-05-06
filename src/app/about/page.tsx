'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import USAMap from '@/components/USAMap';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Shield, 
  Target, 
  Eye, 
  ArrowRight, 
  HeartPulse, 
  Building2, 
  TrendingUp, 
  Users, 
  GraduationCap,
  Sparkles,
  Heart,
  ShieldCheck,
  Activity,
  Star,
  UserCheck,
  Quote,
  CheckCircle2
} from 'lucide-react';

const leaders = [
  {
    name: 'Lisa Bebie, PTA',
    title: 'President & Founder',
    photo: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png',
    fallback: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80',
    quote: '"As a clinician, I know that a model that brings your therapy teams in-house allows great employee engagement, which then in turn, allows exceptional therapy outcomes to the residents we all serve."',
    bio: [
      'Over 20 years of long-term therapy leadership with a passionate commitment to evolve the functionality of therapy services for the aging population.',
      'Operational and clinical expertise in leadership and marketing models created by exceptional clinical programming—setting customers apart through a holistic philosophy.',
      'It is her vision to bridge the gap for operators who want to take their therapy teams in-house, and to assist in-house programs with clinically proven education, operational analysis, and compliance oversight.'
    ],
    accentColor: '#0284c7',
  },
  {
    name: 'Isaiah Rupp, MBA-HCA, PTA',
    title: 'VP of Operations & Co-Founder',
    photo: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777331091/07de3a3b-7cf1-4a15-9ec4-28fdf603ac74.png',
    fallback: 'https://images.unsplash.com/photo-1622253692010-333f2da60c8d?auto=format&fit=crop&q=80',
    quote: '"My passion is in building the best clinical outcomes and operations success in the most fiscally responsible manner. Promoting a place of stability where clinicians can thrive."',
    bio: [
      'With an MBA in Healthcare Administration and as a licensed Physical Therapist Assistant, Isaiah serves as Evolve\'s Director of Operations.',
      'He oversees all therapy operations, working to build strong clinical, operational, and business strategies—progressing quickly due to his ability to teach, train, and build up those around him.',
      'His leadership ensures compliance metrics are met while prioritizing holistic patient outcomes, cementing Evolve as a premier clinical partner across the therapeutic landscape.'
    ],
    accentColor: '#0f172a',
  },
];

const pillars = [
  { icon: Eye, title: 'Our Vision', text: 'To provide the most rewarding and creative therapy consulting management model through leadership, passion, and experience.' },
  { icon: Target, title: 'Our Mission', text: 'To provide the highest quality customer-centric, outcome-based therapy management services enabling focus on core strengths.' },
  { icon: Shield, title: 'Our Commitment', text: 'We are committed to clinical integrity, operational transparency, and building genuine partnerships for long-term success.' },
];

export default function AboutPage() {
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoStarted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* ── Cinematic Editorial Hero ── */}
      <section className="relative w-full h-screen flex flex-col justify-center bg-[#0f172a] overflow-hidden">
        
        {/* Background Layer (Same Bypass Strategy) */}
        <div className="absolute inset-0 z-0">
           <div className={cn(
             "absolute inset-0 transition-opacity duration-[2s] ease-in-out bg-[#0f172a]",
             videoStarted ? "opacity-100" : "opacity-0"
           )}>
             <div className="absolute w-[320vw] h-[320vh] top-[-110vh] left-[-160vw] pointer-events-none select-none">
                <iframe
                  src="https://www.youtube.com/embed/8_nVbI7NcOw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=8_nVbI7NcOw&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1"
                  title="About cinematic"
                  allow="autoplay; encrypted-media"
                  className="w-full h-full border-0 opacity-40 contrast-[1.2] saturate-[0.6] grayscale-[0.1]"
                  onLoad={() => setTimeout(() => setVideoStarted(true), 800)}
                />
             </div>
             <div className="absolute inset-0 z-10 bg-transparent pointer-events-auto cursor-default" />
           </div>

           {/* Editorial Visual Overlays */}
           <div className="absolute inset-0 z-20 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, #0284c7 0%, transparent 65%)' }} />
           <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80" />
           <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0f172a]/95 via-transparent to-transparent" />
           <div className="absolute inset-0 z-25 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        </div>

        {/* Content Area */}
        <div className="relative z-50 container mx-auto px-6 lg:px-12">
          <div className="w-full">
            <BlurFade delay={0.2}>
               {/* Subtitle Badge */}
               <div className="flex items-center gap-6 mb-12">
                  <div className="w-12 h-[1px] bg-[#0284c7]" />
                  <span className="text-[#38bdf8] font-black uppercase text-[10px] tracking-[0.6em]">Our Philosophy</span>
               </div>
               
               <h1 className="text-5xl md:text-[5vw] lg:text-[4.5vw] font-serif font-black text-white leading-[1] tracking-tighter mb-16 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] whitespace-nowrap overflow-visible">
                  <span className="uppercase tracking-tighter">CLINICAL</span>
                  <span className="text-[#0284c7] italic ml-[0.15em] uppercase tracking-tighter">LEADERSHIP.</span>
               </h1>

               <div className="mb-20 w-full">
                  <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed border-l-4 border-[#0284c7] pl-10 italic max-w-5xl">
                     "We bridge the gap between clinical quality and financial performance, enabling operators to truly evolve to the next level."
                  </p>
               </div>
               
               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                  <Link href="/contact" className="inline-flex group shrink-0">
                     <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="0.75rem" className="px-16 py-7 shadow-[0_30px_60px_rgba(2,132,199,0.3)]">
                        <span className="font-black uppercase tracking-[0.4em] text-[14px] text-white">Meet the Visionaries</span>
                        <ArrowRight size={20} className="ml-5 group-hover:translate-x-3 transition-transform" />
                     </ShimmerButton>
                  </Link>

                  <div className="flex flex-col sm:flex-row gap-12">
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                           <Eye size={24} />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-white font-black uppercase text-[11px] tracking-widest mb-1">Our Vision</span>
                           <span className="text-white/20 text-[13px] font-light italic">"Creative Models"</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#0284c7] shadow-2xl backdrop-blur-xl group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                           <Target size={24} />
                        </div>
                        <div className="flex flex-col">
                           <span className="text-white font-black uppercase text-[11px] tracking-widest mb-1">Our Mission</span>
                           <span className="text-white/20 text-[13px] font-light italic">"Patient Centric"</span>
                        </div>
                     </div>
                  </div>
               </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Editorial Mission Row ── */}
      <section className="py-24 md:py-48 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#0284c7]/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <BlurFade delay={0.1}>
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-[2px] bg-[#0284c7]" />
                  <span className="text-[#0284c7] font-black uppercase text-[11px] tracking-[0.5em]">The Core Standard</span>
               </div>
               <h2 className="text-6xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.85] mb-12">
                  Bridging the gap <br />
                  <span className="text-[#0284c7] italic">In LTC Therapy.</span>
               </h2>
               <div className="space-y-8 text-xl text-slate-500 font-light leading-relaxed max-w-xl">
                  <p>
                    Evolve Therapy Services is a management collective dedicated to helping LTC organizations excite and empower their therapy teams through an in-house employment model.
                  </p>
                  <p>
                    Our model facilitates a cohesive company culture that generates exceptional outcomes, all while allowing facilities to retain 100% of their therapy revenue.
                  </p>
               </div>
            </BlurFade>
            
            <BlurFade delay={0.3}>
               <div className="grid grid-cols-1 gap-6">
                  {pillars.map((pillar, i) => (
                    <div key={i} className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-[#0284c7]/30 transition-all duration-700 shadow-xl hover:shadow-2xl">
                       <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#0284c7] mb-8 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                          <pillar.icon size={28} />
                       </div>
                       <h4 className="text-3xl font-serif font-black text-[#0f172a] mb-4 group-hover:text-[#0284c7] transition-colors">{pillar.title}</h4>
                       <p className="text-slate-500 leading-relaxed font-light">{pillar.text}</p>
                    </div>
                  ))}
               </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ── Founders / Clinical Leadership Hub ── */}
      <section className="py-32 md:py-56 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #0284c7 0%, transparent 60%)' }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-32">
            <BlurFade delay={0.1}>
               <div className="text-[11px] font-black text-[#38bdf8] uppercase tracking-[0.5em] mb-8">Clinical Authority</div>
               <h2 className="text-6xl md:text-9xl font-serif text-white font-black tracking-tighter leading-none mb-12">
                  The Clinical <br />
                  <span className="text-[#0284c7] italic">Visionaries.</span>
               </h2>
            </BlurFade>
          </div>

          <div className="grid lg:grid-cols-2 gap-32 max-w-7xl mx-auto">
            {leaders.map((leader, i) => (
              <BlurFade key={i} delay={0.2 + i * 0.2}>
                <div className="group flex flex-col items-center">
                   <div className="relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl mb-12 bg-slate-800">
                      <Image 
                        src={leader.photo} 
                        alt={leader.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-[4s]" 
                        onError={(e) => { (e.target as HTMLImageElement).src = leader.fallback; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-12 left-12 right-12">
                         <div className="inline-flex px-4 py-2 rounded-full bg-[#0284c7] text-white text-[10px] font-black uppercase tracking-widest mb-4">
                            {leader.title}
                         </div>
                         <h3 className="text-4xl font-serif font-black text-white">{leader.name}</h3>
                      </div>
                   </div>
                   
                   <div className="text-left w-full">
                      <Quote size={40} className="text-[#0284c7] mb-8 opacity-40" />
                      <blockquote className="text-2xl md:text-3xl font-serif text-white italic font-light leading-snug mb-12 border-l-2 border-[#0284c7] pl-8">
                         {leader.quote}
                      </blockquote>
                      <div className="space-y-6 text-white/40 text-lg font-light leading-relaxed">
                         {leader.bio.map((para, j) => (
                           <p key={j}>{para}</p>
                         ))}
                      </div>
                   </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── National Coverage Map Section ── */}
      <section className="py-32 md:py-56 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <USAMap />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <BlurFade delay={0.1}>
               <Building2 size={48} className="mx-auto text-[#0284c7] mb-12" />
               <h2 className="text-5xl md:text-8xl font-serif text-[#0f172a] font-black tracking-tighter leading-[0.85] mb-12">
                  A National <br />
                  <span className="text-[#0284c7] italic">Clinical Infrastructure.</span>
               </h2>
               <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                  Our regional directors are strategically deployed across the United States to ensure that every facility carries the same Evolve Standard.
               </p>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: 'Regulatory Alignment', icon: ShieldCheck, desc: 'Expert defense against arbitrary regulatory audits proactively.' },
               { title: 'Real-Time Data', icon: Activity, desc: 'Live clinical dashboards for immediate operational decision making.' },
               { title: 'Financial Strategy', icon: TrendingUp, desc: 'Tailored reimbursement models that secure your facility future.' },
               { title: 'Leadership Growth', icon: UserCheck, desc: 'Grooming internal staff for regional leadership roles.' }
             ].map((item, i) => (
               <BlurFade key={i} delay={0.2 + i * 0.1}>
                  <div className="p-12 rounded-[3rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700 h-full flex flex-col justify-between">
                     <div>
                        <div className="w-16 h-16 rounded-2xl bg-[#0284c7]/5 flex items-center justify-center text-[#0284c7] mb-10">
                           <item.icon size={32} />
                        </div>
                        <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-6 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                     </div>
                  </div>
               </BlurFade>
             ))}
          </div>
        </div>
      </section>

      {/* ── Final Authority CTA ── */}
      <section className="py-48 bg-white overflow-hidden relative">
         <div className="container mx-auto px-6 text-center">
            <BlurFade delay={0.2}>
               <h2 className="text-6xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-16">
                  Experience the <br />
                  <span className="text-[#0284c7] italic">Evolve Standard.</span>
               </h2>
               <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-20">
                  Join the operators who have taken control of their therapy departments and secured their clinical future.
               </p>
               <Link href="/contact">
                  <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-16 py-8 shadow-[0_40px_80px_rgba(2,132,199,0.3)]">
                     <span className="font-black uppercase tracking-[0.4em] text-[14px] text-white">Start Your Evolution</span>
                  </ShimmerButton>
               </Link>
            </BlurFade>
         </div>
      </section>

      <Footer />
    </main>
  );
}
