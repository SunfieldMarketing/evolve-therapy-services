'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import USAMap from '@/components/USAMap';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Eye, ArrowRight, HeartPulse, Building2, TrendingUp, Users, GraduationCap, CheckCircle2, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const leaders = [
  {
    name: 'Lisa Bebie, PTA',
    title: 'President & Founder',
    photo: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png',
    fallback: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80',
    quote: 'As a clinician, I know how difficult it was to meet the goals of my employer as well as try to meet the goals of my customer. We know that a model that brings your therapy teams in-house allows great employee engagement, which then in turn, allows exceptional therapy outcomes to the residents we all serve.',
    bio: [
      'Over 20 years of long-term therapy leadership with a passionate commitment to evolve the functionality of therapy services for the aging population.',
      'Operational and clinical expertise in leadership and marketing models created by exceptional clinical programming—setting customers apart through a holistic philosophy.',
      'It is her vision to bridge the gap for operators who want to take their therapy teams in-house, and to assist in-house programs with clinically proven education, operational analysis, and compliance oversight.',
    ],
    accentColor: '#0284c7',
  },
  {
    name: 'Isaiah Rupp, MBA-HCA, PTA',
    title: 'VP of Operations & Co-Founder',
    photo: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777331091/07de3a3b-7cf1-4a15-9ec4-28fdf603ac74.png',
    fallback: 'https://images.unsplash.com/photo-1622253692010-333f2da60c8d?auto=format&fit=crop&q=80',
    quote: 'As Director of Operations my passion is in building the best clinical outcomes and operations success in the most fiscally responsible manner. My vision is to promote/build a place of stability where clinicians can thrive in doing what they have a passion to do.',
    bio: [
      'With an MBA in Healthcare Administration from South University and as a licensed Physical Therapist Assistant, Isaiah serves as Evolve\'s Director of Operations.',
      'He oversees all therapy operations, working to build strong clinical, operational, and business strategies—progressing quickly due to his ability to teach, train, and build up those around him.',
      'His leadership ensures compliance metrics are met while prioritizing holistic patient outcomes, cementing Evolve as a premier clinical partner across the therapeutic landscape.',
    ],
    accentColor: '#0f172a',
  },
];

const pillars = [
  { icon: Eye, title: 'Our Vision', text: 'To provide the most rewarding and creative therapy consulting management model through leadership, passion, and experience to allow success and internal growth for our customers.' },
  { icon: Target, title: 'Our Mission', text: 'To provide the highest quality customer-centric, outcome-based therapy management services enabling our customers the ability to focus on their core strengths through a dynamic culture.' },
  { icon: Shield, title: 'Our Commitment', text: 'We are committed to clinical integrity, operational transparency, and building genuine partnerships where your facility\'s success is our success.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Leadership" 
        subtitle="Meet the clinicians and operational leaders behind Evolve Therapy Services."
        videoKey="about"
      />

      {/* Intro / Company Overview */}
      <section className="py-24 md:py-48 overflow-hidden relative bg-white">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0284c7]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Text */}
            <div>
              <BlurFade delay={0.1}>
                <div className="mb-8">
                   <AnimatedGradientText>Who We Are</AnimatedGradientText>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-12 leading-[0.85] tracking-tighter">
                  Bridging the Gap in<br />
                  <span className="text-[#0284c7] italic font-medium">LTC Therapy</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.2} className="space-y-8 text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-16">
                <p>
                  Evolve Therapy Services is a therapy management company dedicated to helping LTC organizations excite and empower their therapy teams through an in-house employment model with opportunities for career advancement through mentorship.
                </p>
                <p>
                  Our model facilitates a cohesive company culture that generates exceptional outcomes, all while allowing facilities to retain 100% of their therapy revenue.
                </p>
              </BlurFade>
              <BlurFade delay={0.3}>
                <blockquote className="bg-[#0f172a] p-10 rounded-3xl border-l-8 border-[#0284c7] shadow-2xl">
                  <p className="font-serif font-medium text-white/90 italic text-xl lg:text-2xl leading-relaxed">
                    "We bridge the gap between clinical quality and financial performance, enabling operators to truly evolve to the next level."
                  </p>
                  <footer className="mt-6 text-[#38bdf8] text-xs font-black uppercase tracking-[0.3em]">- Lisa Bebie, PTA · President & Founder</footer>
                </blockquote>
              </BlurFade>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 gap-6">
              {pillars.map((item, i) => (
                <BlurFade
                  key={i}
                  delay={0.2 + i * 0.15}
                  className="flex gap-8 p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-[#0284c7]/30 hover:shadow-2xl transition-all duration-700 group"
                >
                  <div className="w-16 h-16 bg-[#0284c7]/5 rounded-2xl flex items-center justify-center text-[#0284c7] shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-all duration-500">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#0f172a] font-serif text-2xl mb-4">{item.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed font-light">{item.text}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bios (Founders) - Redesigned for Proportional Balance */}
      <section className="py-24 md:py-48 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <BlurFade className="text-center mb-24 md:mb-32">
            <div className="flex justify-center mb-8">
              <AnimatedGradientText>The Founders</AnimatedGradientText>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif font-black text-[#0f172a] tracking-tighter leading-[0.85]">
              Visionary <span className="text-[#0284c7] italic font-medium">Leadership</span>
            </h2>
          </BlurFade>

          <div className="space-y-24 md:space-y-40 max-w-6xl mx-auto">
            {leaders.map((leader, i) => (
              <BlurFade key={i} delay={0.2} className="group">
                <div className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-20 items-center",
                  i % 2 === 1 && "lg:flex-row-reverse"
                )}>
                  {/* Photo Column - Balanced Circular Frame */}
                  <div className="w-full lg:w-5/12 flex justify-center shrink-0">
                     <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src={leader.photo}
                          alt={leader.name}
                          fill
                          className="object-cover object-top"
                          onError={(e) => { (e.target as HTMLImageElement).src = leader.fallback; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent" />
                     </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-7/12">
                    <div className="mb-8">
                       <h3 className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tight">{leader.name}</h3>
                       <div className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em] mt-2">{leader.title}</div>
                    </div>
                    
                    <div className="relative mb-12">
                       <Quote className="absolute -top-4 -left-6 text-[#0284c7]/5 w-16 h-16" />
                       <p className="relative z-10 text-xl font-serif text-[#0f172a] italic leading-relaxed font-bold border-l-4 border-[#0284c7] pl-8">
                          "{leader.quote}"
                       </p>
                    </div>

                    <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-light">
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

      {/* Expanded Philosophy Section */}
       <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
               <Building2 size={56} strokeWidth={1} className="mx-auto text-[#0284c7] mb-12" />
              <h3 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-10 leading-[0.9] tracking-tighter">
                Redefining the standard of care<br/>
                <span className="text-[#0284c7] italic font-medium">facility by facility.</span>
              </h3>
              <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-20">
                 We believe that providing your resident population with high-end, clinically proven therapy should not mean sacrificing your facility’s bottom line.
              </p>
               <div className="grid sm:grid-cols-3 gap-8">
                 {[
                   { title: 'Patient Triage', icon: HeartPulse, desc: 'Prioritizing the residents who need immediate therapeutic intervention.' },
                   { title: 'Financial Growth', icon: TrendingUp, desc: 'Retaining your hard earned revenue via targeted resource utilization.' },
                   { title: 'Audit Defense', icon: Shield, desc: 'Preparing and defending against arbitrary regulatory audits proactively.' }
                 ].map((item, idx) => (
                   <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-700">
                     <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl shadow-sm text-[#0f172a] mb-8 border border-slate-100 group-hover:bg-[#0284c7] group-hover:text-white transition-colors"><item.icon size={28}/></div>
                     <div className="font-black font-serif text-2xl text-[#0f172a] mb-4">{item.title}</div>
                     <div className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</div>
                   </div>
                 ))}
               </div>
            </BlurFade>
          </div>
        </div>
      </section>
 
      {/* Strategic Partnership Section (National Network) - Centered USAMap focus */}
      <section className="py-24 md:py-48 bg-white relative overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <BlurFade delay={0.1}>
            <div className="flex flex-col items-center mb-16">
              <div className="mb-8">
                <AnimatedGradientText>National Presence</AnimatedGradientText>
              </div>
              <h3 className="text-5xl md:text-7xl font-serif font-black text-[#0f172a] leading-[0.85] tracking-tighter uppercase">
                A National Network <br />
                <span className="text-[#0284c7] italic font-medium lowercase">Primed for Growth.</span>
              </h3>
            </div>
            <p className="text-slate-400 text-xl md:text-2xl font-light mb-20 leading-relaxed max-w-4xl mx-auto italic">
               "Our regional directors are strategically deployed across the United States to ensure that every facility under our oversight carries the same Evolve Standard."
            </p>
          </BlurFade>
        </div>

        {/* The USAMap component - Centered and Balanced */}
        <div className="w-full max-w-7xl mx-auto px-6">
           <BlurFade delay={0.3}>
              <div className="rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 p-8 md:p-16 shadow-2xl relative">
                 <div className="relative z-10 min-h-[400px] md:min-h-[600px]">
                    <USAMap />
                 </div>
                 
                 {/* Legend / Stats integrated into the map area */}
                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 relative z-20">
                    {[
                      { icon: Shield, text: 'Expert Regulatory Alignment' },
                      { icon: Eye, text: 'Real-Time Clinical Dashboards' },
                      { icon: Target, text: 'Tailored Financial Strategies' },
                      { icon: Users, text: 'Leadership Development' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-sm border border-slate-100">
                        <item.icon className="text-[#0284c7]" size={20} />
                        <span className="text-[#0f172a] font-black uppercase text-[9px] tracking-widest">{item.text}</span>
                      </div>
                    ))}
                  </div>
              </div>
           </BlurFade>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-32 md:py-64 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <BlurFade delay={0.2}>
            <h2 className="text-6xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-16">
              The Evolve <br />
              <span className="text-[#0284c7] italic">Advantage.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-20">
              Connect with our leadership team today to learn how our clinical oversight model can secure your facility’s future.
            </p>
            <Link href="/contact">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-16 py-8 shadow-2xl">
                <span className="font-black uppercase tracking-[0.4em] text-[13px] text-white">Start Your Evolution</span>
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </main>
  );
}
