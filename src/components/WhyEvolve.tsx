'use client';

import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShieldCheck, TrendingUp, Users, HeartPulse, Sparkles, Building2, Layers, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

const content = [
  {
    title: "100% Revenue Retention",
    description: "Our model allows facilities to retain 100% of their therapy revenue, eliminating third-party markups and creating immediate fiscal stability for the operator.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bg: "bg-blue-50/50"
  },
  {
    title: "Leadership Excellence",
    description: "We focus on grooming internal talent for regional leadership roles, ensuring that your facility's culture remains stable and focused on long-term outcomes.",
    icon: Users,
    color: "text-[#0284c7]",
    bg: "bg-[#0284c7]/5"
  },
  {
    title: "Clinical Integrity",
    description: "Our regional directors provide real-time education and audit oversight, ensuring that every claim meets the highest regulatory standards and clinical honesty.",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50/50"
  },
  {
    title: "Operational Stability",
    description: "By transitioning to an in-house model, you gain complete control over your staffing and clinical protocols, removing the volatility of contract therapy.",
    icon: Layers,
    color: "text-indigo-600",
    bg: "bg-indigo-50/50"
  }
];

export default function WhyEvolve() {
  return (
    <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-24 md:mb-32">
          <BlurFade delay={0.1} className="mb-8">
            <AnimatedGradientText>The Evolve Advantage</AnimatedGradientText>
          </BlurFade>
          <BlurFade delay={0.2}>
            <h2 className="text-6xl md:text-8xl font-serif font-black text-[#0f172a] leading-[0.85] tracking-tighter">
              Why Leaders <br />
              <span className="text-[#0284c7] italic font-medium">Choose Evolve.</span>
            </h2>
            <p className="mt-12 text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl border-l-2 border-[#0284c7] pl-10 italic">
              Experience the transition from contract dependency to in-house mastery. We provide the blueprint for clinical and financial sovereignty.
            </p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {content.map((item, index) => (
            <BlurFade 
              key={index} 
              delay={0.3 + index * 0.1}
              className="h-full"
            >
              <div className="group h-full p-10 md:p-12 bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:border-[#0284c7]/30 hover:shadow-2xl transition-all duration-700 flex flex-col items-start text-left">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 shadow-xl shadow-black/5 group-hover:scale-110 group-hover:rotate-3",
                  item.bg,
                  item.color
                )}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-serif font-black text-[#0f172a] mb-6 leading-tight group-hover:text-[#0284c7] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg">
                  {item.description}
                </p>
                
                <div className="mt-10 pt-10 border-t border-slate-50 w-full">
                   <div className="flex items-center gap-3 text-[#0284c7] font-black text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                      Standard of Excellence <CheckCircle2 size={14} />
                   </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Core Methodology Highlight */}
        <BlurFade delay={0.8} className="mt-20 md:mt-32">
          <div className="bg-[#0f172a] p-10 md:p-20 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-64 h-64 bg-[#0284c7]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
             <div className="relative z-10 max-w-3xl mx-auto">
                <Building2 size={48} className="text-[#0284c7] mx-auto mb-10" />
                <h4 className="text-3xl md:text-5xl font-serif font-black text-white mb-8 tracking-tighter leading-none">
                  A Shared Commitment <br />
                  <span className="text-[#38bdf8] italic">To Your Facility's Future.</span>
                </h4>
                <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed italic border-x-2 border-white/5 px-8">
                  "Scaling with integrity means ensuring that every facility we touch receives the same premier clinical oversight, regardless of size or location."
                </p>
             </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
