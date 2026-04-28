'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Eye, ArrowRight, HeartPulse, Building2, TrendingUp } from 'lucide-react';

const leaders = [
  {
    name: 'Lisa Bebie, PTA',
    title: 'President & Founder',
    photo: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png',
    fallback: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80',
    quote: '"As a clinician, I know how difficult it was to meet the goals of my employer as well as try to meet the goals of my customer. We know that a model that brings your therapy teams in-house allows great employee engagement, which then in turn, allows exceptional therapy outcomes to the residents we all serve."',
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
    quote: '"As Director of Operations my passion is in building the best clinical outcomes and operations success in the most fiscally responsible manner. My vision is to promote/build a place of stability where clinicians can thrive in doing what they have a passion to do."',
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
      <section className="py-20 md:py-32 overflow-hidden relative bg-white">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#0284c7]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <BlurFade delay={0.1}>
                <div className="mb-6">
                   <AnimatedGradientText>Who We Are</AnimatedGradientText>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] mb-8 leading-[0.95] tracking-tighter">
                  Bridging the Gap in<br />
                  <span className="text-[#0284c7] italic font-medium">LTC Therapy</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.2} className="space-y-6 text-base md:text-lg text-slate-500 leading-relaxed font-light mb-10">
                <p>
                  Evolve Therapy Services is a therapy management company dedicated to helping LTC organizations excite and empower their therapy teams through an in-house employment model with opportunities for career advancement through mentorship.
                </p>
                <p>
                  Our model facilitates a cohesive company culture that generates exceptional outcomes, all while allowing facilities to retain 100% of their therapy revenue.
                </p>
              </BlurFade>
              <BlurFade delay={0.3}>
                <blockquote className="bg-[#0f172a] p-8 rounded-2xl border-l-4 border-[#0284c7]">
                  <p className="font-serif font-medium text-white/90 italic text-lg lg:text-xl leading-relaxed">
                    "We bridge the gap between clinical quality and financial performance, enabling operators to truly evolve to the next level."
                  </p>
                  <footer className="mt-4 text-[#38bdf8] text-xs font-bold uppercase tracking-widest">— Lisa Bebie, PTA · President & Founder</footer>
                </blockquote>
              </BlurFade>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 gap-5">
              {pillars.map((item, i) => (
                <BlurFade
                  key={i}
                  delay={0.2 + i * 0.15}
                  className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#0284c7]/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#0284c7]/5 rounded-xl flex items-center justify-center text-[#0284c7] shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-colors duration-300">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#0f172a] font-serif text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="py-20 md:py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <BlurFade className="text-center mb-16 md:mb-24">
            <div className="flex justify-center mb-6">
              <AnimatedGradientText>The Founders</AnimatedGradientText>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] tracking-tighter">
              Visionary <span className="text-[#0284c7] italic font-medium">Leadership</span>
            </h2>
          </BlurFade>

          <div className="space-y-24 md:space-y-32 max-w-5xl mx-auto">
            {leaders.map((leader, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
                {/* Photo (Circular style) */}
                <BlurFade
                  delay={0.2}
                  className={`w-full md:w-5/12 flex justify-center shrink-0 ${i % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="relative group">
                     {/* Background decorative ring */}
                     <div className="absolute inset-0 rounded-full border border-slate-200 scale-105 group-hover:scale-110 transition-transform duration-700" />
                     
                     {/* Circular Profile Picture */}
                     <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-[6px] border-white bg-white z-10">
                       <Image
                         src={leader.photo}
                         alt={leader.name}
                         fill
                         className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                         onError={(e) => { (e.target as HTMLImageElement).src = leader.fallback; }}
                       />
                     </div>
                     
                     {/* Name badge */}
                     <div 
                       className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-4 px-6 rounded-2xl shadow-xl text-white text-center whitespace-nowrap z-20 min-w-48"
                       style={{ background: leader.accentColor }}
                     >
                       <div className="font-black font-serif text-base tracking-tight">{leader.name}</div>
                       <div className="text-[9px] uppercase tracking-[0.2em] font-bold mt-1 opacity-80">{leader.title}</div>
                     </div>
                  </div>
                </BlurFade>

                {/* Content */}
                <BlurFade
                  delay={0.3}
                  className={`w-full md:w-7/12 ${i % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-[#0f172a] italic leading-tight font-medium mb-8 border-l-4 border-[#0284c7] pl-5">
                    {leader.quote}
                  </blockquote>
                  <div className="space-y-4 text-base lg:text-lg text-slate-500 leading-relaxed font-light mb-8">
                    {leader.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </BlurFade>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Philosophy Section */}
       <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
               <Building2 size={40} className="mx-auto text-[#0284c7] mb-8" />
              <h3 className="text-3xl md:text-5xl font-serif font-black text-[#0f172a] mb-6 leading-tight tracking-tighter">
                Redefining the standard of care<br/>
                <span className="text-[#0284c7] italic font-medium">facility by facility.</span>
              </h3>
              <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12">
                 We believe that providing your resident population with high-end, clinically proven therapy should not mean sacrificing your facility’s bottom line. Through our strategic support, your facility achieves peak clinical integration.
              </p>
               <div className="grid sm:grid-cols-3 gap-6 text-left">
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                   <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-sm text-[#0f172a] mb-4 border border-slate-100"><HeartPulse size={20}/></div>
                   <div className="font-bold text-[#0f172a] mb-2">Patient Triage</div>
                   <div className="text-xs text-slate-500 leading-relaxed">Prioritizing the residents who need immediate therapeutic intervention.</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                   <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-sm text-[#0f172a] mb-4 border border-slate-100"><TrendingUp size={20}/></div>
                   <div className="font-bold text-[#0f172a] mb-2">Financial Growth</div>
                   <div className="text-xs text-slate-500 leading-relaxed">Retaining your hard earned revenue via targeted resource utilization.</div>
                 </div>
                 <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                   <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl shadow-sm text-[#0f172a] mb-4 border border-slate-100"><Shield size={20}/></div>
                   <div className="font-bold text-[#0f172a] mb-2">Audit Defense</div>
                   <div className="text-xs text-slate-500 leading-relaxed">Preparing and defending against arbitrary regulatory audits proactively.</div>
                 </div>
               </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
