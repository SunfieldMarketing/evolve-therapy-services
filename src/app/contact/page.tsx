'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, Clock, MapPin, ArrowRight, ShieldCheck, Globe, Lock } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { useTina, tinaField } from '@/lib/tina';
import contactData from '../../../content/pages/contact.json';

const iconMap = {
  Mail,
  Phone,
  Clock,
  MapPin,
  ShieldCheck,
  Globe,
  Lock
};

export default function ContactPage(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query || `query { 
      contact(relativePath: "contact.json") { 
        hero { badge titleLine1 titleItalic description } 
        sidebar { title titleItalic description items { icon label value sub } } 
        form { badge title titleItalic description buttonText inquiryGoals } 
        trustBadges { icon title desc } 
      }
      settings(relativePath: "settings.json") {
        siteName phone email address linkedin
        navbar { links { name href } ctaText }
        footer { tagline copyright links { name href } serviceLinks { name href } }
        preFooterCta { title subtitle primaryCta }
      }
    }`,
    variables: props.variables || {},
    data: props.data || { contact: contactData },
  });

  const p = data.contact;
  const s = data.settings;

  return (
    <main className="min-h-screen bg-white">
      <Navbar data={s?.navbar} />
      
      <PageHeader 
        title={p.hero.titleLine1} 
        italicWord={p.hero.titleItalic} 
        subtitle={p.hero.description}
        videoKey="contact"
        bgImage="none"
        useVideo={false}
        badgeText={p.hero.badge}
        valueBoxes={[
          { icon: ShieldCheck, label: 'Risk-Free Audit', sublabel: 'Initial Analysis' },
          { icon: Globe, label: 'National Scale', sublabel: 'Local Impact' }
        ]}
      />

      <section className="py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0284c7]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 flex flex-col gap-6">
              <BlurFade delay={0.1}>
                <div className="bg-[#0f172a] rounded-[3rem] p-10 md:p-14 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7] rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6 tracking-tighter leading-tight">
                      {p.sidebar.title} <br />
                      <span className="text-[#38bdf8] italic font-medium">{p.sidebar.titleItalic}</span>
                    </h2>
                    <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
                      {p.sidebar.description}
                    </p>

                    <div className="space-y-10">
                      {p.sidebar.items.map((item: any, i: number) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap] || Phone;
                        return (
                          <div key={i} className="flex items-start gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] shadow-xl transition-all duration-500">
                              <Icon size={22} />
                            </div>
                            <div>
                              <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">{item.label}</div>
                              <div className="text-xl font-serif font-bold text-white group-hover:text-[#38bdf8] transition-colors">{item.value}</div>
                              <div className="text-xs text-white/40 mt-1">{item.sub}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </BlurFade>

              {p.trustBadges?.map((badge: any, i: number) => {
                const Icon = iconMap[badge.icon as keyof typeof iconMap] || Clock;
                return (
                  <BlurFade delay={0.2 + i * 0.05} key={i}>
                     <div className="bg-white rounded-[2rem] p-8 border border-slate-200 flex items-start gap-5 shadow-sm">
                        <Icon className="text-[#0284c7] shrink-0" size={32} />
                        <div>
                           <h4 className="font-black font-serif text-[#0f172a] text-xl mb-2">{badge.title}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed font-light">{badge.desc}</p>
                        </div>
                     </div>
                  </BlurFade>
                );
              })}
            </div>

            <div className="lg:col-span-7">
               <BlurFade delay={0.3} className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col justify-center">
                  <div className="mb-10">
                    <div className="inline-flex items-center gap-3 mb-6">
                       <div className="w-8 h-px bg-[#0284c7]" />
                       <span className="text-[#0284c7] font-black uppercase tracking-[0.3em] text-[10px]">{p.form.badge}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-black text-[#0f172a] mb-4 tracking-tighter leading-tight">
                      {p.form.title} <br />
                      <span className="text-[#0284c7] italic font-medium">{p.form.titleItalic}</span>
                    </h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed max-w-lg">
                      {p.form.description}
                    </p>
                  </div>

                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium" placeholder="E.g. Sarah Mitchell" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Facility Name</label>
                        <input className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium" placeholder="E.g. Evolve Care Center" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Work Email</label>
                        <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium" placeholder="your@facility.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                        <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Primary Inquiry Goal</label>
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium appearance-none cursor-pointer">
                        {p.form.inquiryGoals?.map((goal: string) => (
                          <option key={goal}>{goal}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message / Specific Goals</label>
                      <textarea rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] p-5 lg:p-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium resize-none" placeholder="Tell us about your current therapy status..." />
                    </div>
                    
                    <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="w-full py-5 lg:py-6 group shadow-xl mt-6">
                      <span className="font-black uppercase tracking-[0.3em] text-[11px] text-white">{p.form.buttonText}</span>
                      <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </ShimmerButton>
                    
                    <p className="text-center text-slate-400 text-xs font-light mt-4">
                       By submitting, you agree to our <span className="underline decoration-slate-200 underline-offset-4 cursor-pointer hover:text-slate-600 transition-colors">privacy policy</span> and clinical data terms.
                    </p>
                  </form>
               </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
    </main>
  );
}
