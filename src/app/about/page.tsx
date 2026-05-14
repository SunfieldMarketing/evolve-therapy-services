'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { 
  HeartPulse, 
  Shield, 
  Handshake, 
  Building2, 
  Quote, 
  CheckCircle2 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BlurFade } from '@/components/magicui/blur-fade';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import USAMap from '@/components/USAMap';
import MobileCTA from '@/components/MobileCTA';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <PageHeader 
        title="OUR" 
        italicWord="LEADERSHIP" 
        subtitle="At Evolve Therapy Services, our founders aren't just executives—they are clinicians. We know exactly what your therapists need to succeed on the floor because we've been there."
        videoKey="about"
        useVideo={true}
        badgeText="ABOUT EVOLVE"
        ctaText="OUR CLINICAL MODEL"
        ctaLink="/services"
        valueBoxes={[
          { icon: CheckCircle2, label: "Revenue", sublabel: "100% Retained" },
          { icon: CheckCircle2, label: "Experience", sublabel: "20+ Years" },
          { icon: CheckCircle2, label: "Support", sublabel: "24/7 Clinical" },
          { icon: CheckCircle2, label: "Scale", sublabel: "15+ States" }
        ]}
      />

      {/* 2. Bridging the Gap in LTC Therapy */}
      <section className="py-24 md:py-40 bg-white overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/5 border border-[#0284c7]/10 text-[#0284c7] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                ABOUT Evolve
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 sm:mb-12 leading-[1] sm:leading-[0.85] tracking-tighter">
                Bridging the Gap in<br />
                <span className="text-[#0284c7] italic font-medium">LTC Therapy</span>
              </h2>
              <div className="space-y-6 text-xl text-slate-500 leading-relaxed font-light mb-12">
                <p>Our founders recognized a systemic failure in the LTC therapy industry: the disconnect between facility administration and third-party therapy providers. Operators were forced to choose between clinical quality and financial viability.</p>
                <p>At Evolve, we eliminate this compromise. By integrating directly as your clinical partner, we treat your therapy operations as our own.</p>
              </div>

              <div className="bg-[#0f172a] rounded-[2rem] p-8 md:p-10 text-white relative shadow-xl">
                 <Quote className="text-[#38bdf8]/20 w-16 h-16 mb-6" />
                 <blockquote className="text-xl md:text-2xl font-serif italic font-medium leading-relaxed mb-6 relative z-10">
                   "The therapy department should be the heartbeat of the facility—a center of excellence that drives both clinical and financial success."
                 </blockquote>
                 <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-[#38bdf8]/40" />
                    <cite className="text-[#38bdf8] font-black uppercase tracking-[0.2em] text-[10px] not-italic">Lisa Bebie & Dustin Rego, Founders</cite>
                 </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} className="space-y-6 lg:pl-10">
              {[
                { title: 'Core Values', icon: HeartPulse, desc: 'We prioritize the well-being of the residents above all else, ensuring that financial strategies strictly support clinical imperatives.' },
                { title: 'Compliance', icon: Shield, desc: 'Proactive audit defense and rigorous regulatory oversight protects your facility from arbitrary takeaways.' },
                { title: 'Local Partnerships', icon: Handshake, desc: 'Our regional directors operate as an extension of your own leadership team, providing on-the-ground support.' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 flex flex-col sm:flex-row items-start gap-6 shadow-sm hover:shadow-xl hover:border-[#0284c7]/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#0284c7]/5 flex-shrink-0 flex items-center justify-center rounded-2xl text-[#0284c7] border border-[#0284c7]/10">
                    <card.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-black text-[#0f172a] mb-3 tracking-tight">{card.title}</h4>
                    <p className="text-slate-500 font-light leading-relaxed text-sm sm:text-base">{card.desc}</p>
                  </div>
                </div>
              ))}
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 3. Visionary Leadership */}
      <section className="py-24 md:py-40 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <BlurFade className="text-center mb-24 md:mb-32">
            <div className="flex justify-center mb-8">
              <AnimatedGradientText>The Founders</AnimatedGradientText>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black text-[#0f172a] tracking-tighter leading-[1] sm:leading-[0.85]">
              Visionary <span className="text-[#0284c7] italic font-medium">Leadership</span>
            </h2>
          </BlurFade>

          <div className="space-y-16 sm:space-y-24 md:space-y-40 max-w-6xl mx-auto">
            {/* Lisa Bebie */}
            <BlurFade delay={0.2} className="group">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-5/12 flex justify-center shrink-0">
                   <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src="https://res.cloudinary.com/dai2pg27n/image/upload/v1777331058/557b678a-ef77-49a0-9782-0b1cd12512bc.png"
                        alt="Lisa Bebie"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent" />
                   </div>
                </div>

                <div className="w-full lg:w-7/12">
                  <div className="mb-8">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tight">Lisa Bebie, PTA</h3>
                     <div className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em] mt-2">President & Founder</div>
                  </div>
                  
                  <div className="relative mb-12">
                     <Quote className="absolute -top-4 -left-6 text-[#0284c7]/5 w-16 h-16" />
                     <p className="relative z-10 text-xl font-serif text-[#0f172a] italic leading-relaxed font-bold border-l-4 border-[#0284c7] pl-8">
                        "I founded Evolve because the industry demanded a partner who understood that clinical excellence and financial sustainability are not mutually exclusive."
                     </p>
                  </div>

                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-light">
                    <p>Lisa Bebie has been a driving force in long-term care therapy for over two decades. Her extensive background as a clinician provides her with an unparalleled understanding of facility-level dynamics.</p>
                    <p>Recognizing that generic, third-party management models consistently fail to adapt to individual facility needs, Lisa established Evolve Therapy Services.</p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Dustin Rego */}
            <BlurFade delay={0.2} className="group">
              <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
                <div className="w-full lg:w-5/12 flex justify-center shrink-0">
                   <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src="https://res.cloudinary.com/dai2pg27n/image/upload/v1738706319/Evolve/p2v3bxtow5l8xof89689.png"
                        alt="Dustin Rego"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 via-transparent to-transparent" />
                   </div>
                </div>

                <div className="w-full lg:w-7/12">
                  <div className="mb-8">
                     <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tight">Dustin Rego, DPT, PTA, MBA</h3>
                     <div className="text-[#0284c7] text-xs font-black uppercase tracking-[0.4em] mt-2">Chief Operating Officer</div>
                  </div>
                  
                  <div className="relative mb-12">
                     <Quote className="absolute -top-4 -left-6 text-[#0284c7]/5 w-16 h-16" />
                     <p className="relative z-10 text-xl font-serif text-[#0f172a] italic leading-relaxed font-bold border-l-4 border-[#0284c7] pl-8">
                        "Leadership in LTC therapy requires more than just management; it demands boots-on-the-ground clinical strategy and relentless operational execution."
                     </p>
                  </div>

                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-light">
                    <p>With an extensive background combining deep clinical practice as a DPT and robust financial acumen via his MBA, Dustin ensures that Evolve’s partners operate at peak efficiency.</p>
                    <p>His operational strategies consistently shield facilities from regulatory audits while maximizing legitimate revenue capture through precise PDPM management.</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 4. Redefining the standard of care */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <BlurFade delay={0.2} duration={0.8}>
               <Building2 size={56} strokeWidth={1} className="mx-auto text-[#0284c7] mb-12" />
               <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] mb-8 sm:mb-10 leading-[1] sm:leading-[0.9] tracking-tighter">
                 Redefining the standard of care<br/>
                 <span className="text-[#0284c7] italic font-medium">facility by facility.</span>
               </h3>
              <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-20">
                 We believe that providing your resident population with high-end, clinically proven therapy should not mean sacrificing your facility’s bottom line.
              </p>
               <div className="grid sm:grid-cols-3 gap-8">
                 {[
                   { title: 'Clinical Health', icon: HeartPulse, desc: 'Prioritizing the residents who need immediate therapeutic intervention.' },
                   { title: 'Financial Strength', icon: Building2, desc: 'Retaining your hard earned revenue via targeted resource utilization.' },
                   { title: 'Market Growth', icon: Handshake, desc: 'Positioning your facility as the premier choice in your regional market.' }
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

      {/* 5. A National Network primed for growth */}
      <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <BlurFade delay={0.1}>
            <div className="flex flex-col items-center mb-16">
              <div className="mb-8">
                <AnimatedGradientText>National Presence</AnimatedGradientText>
              </div>
               <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black text-[#0f172a] leading-[1] sm:leading-[0.85] tracking-tighter uppercase">
                 A NATIONAL NETWORK <br />
                 <span className="text-[#0284c7] italic font-medium lowercase">primed for growth.</span>
               </h3>
            </div>
            <p className="text-slate-400 text-xl md:text-2xl font-light mb-20 leading-relaxed max-w-4xl mx-auto italic">
               "Our regional directors are strategically deployed across the United States to ensure that every facility under our oversight carries the same Evolve Standard."
            </p>
          </BlurFade>
        </div>

        <div className="w-full max-w-6xl mx-auto px-6">
           <BlurFade delay={0.3}>
              <div className="rounded-[3rem] overflow-hidden bg-white border border-slate-100 p-8 md:p-12 shadow-2xl relative">
                 <div className="grid lg:grid-cols-12 gap-12 items-center">
                   <div className="lg:col-span-8 relative min-h-[400px]">
                      <div className="absolute top-0 left-0">
                        <span className="text-[#0284c7] font-black uppercase text-[10px] tracking-widest">Where We</span>
                        <span className="text-[#0f172a] font-black uppercase text-[10px] tracking-widest ml-1">Operate</span>
                      </div>
                      <div className="pt-8">
                        <USAMap />
                      </div>
                   </div>
                   <div className="lg:col-span-4 flex flex-col gap-6">
                      <div className="bg-[#0f172a] text-white p-8 rounded-3xl">
                        <div className="text-[#38bdf8] font-black text-4xl mb-2">15+ Active States</div>
                        <p className="text-white/60 font-light text-sm leading-relaxed mb-6">Coast-to-coast clinical coverage. Local impact. National scale.</p>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                         {['OH', 'MI', 'IN', 'PA', 'TX', 'FL'].map(state => (
                           <div key={state} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center justify-center text-[#0284c7] font-black text-xl">
                             {state}
                           </div>
                         ))}
                      </div>
                   </div>
                 </div>
                 
                 <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 relative z-20 pt-8 border-t border-slate-100">
                    {[
                      { text: 'EXPERT REGULATORY ALIGNMENT' },
                      { text: 'REAL-TIME CLINICAL DASHBOARDS' },
                      { text: 'TAILORED FINANCIAL STRATEGIES' },
                      { text: 'LEADERSHIP DEVELOPMENT' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                        <span className="text-[#0f172a] font-black uppercase text-[9px] md:text-[10px] tracking-widest">{item.text}</span>
                      </div>
                    ))}
                  </div>
              </div>
           </BlurFade>
        </div>
      </section>

      {/* 6. The Evolve Advantage */}
      <section className="py-32 md:py-48 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <BlurFade delay={0.2}>
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-10 sm:mb-16">
              The Evolve <br />
              <span className="text-[#0284c7] italic">Advantage.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              Connect with our leadership team today to learn how our clinical oversight model can secure your facility’s future.
            </p>
            <Link href="/contact">
              <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-16 py-8 shadow-2xl mx-auto">
                <span className="font-black uppercase tracking-[0.4em] text-[13px] text-white">INITIALIZE PARTNERSHIP</span>
              </ShimmerButton>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* 7. Mobile CTA */}
      <MobileCTA />

      <Footer />
    </main>
  );
}
