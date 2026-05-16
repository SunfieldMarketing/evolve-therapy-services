'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, Clock, MapPin, ArrowRight, ShieldCheck, Globe, Lock } from 'lucide-react';
import { BlurFade } from '@/components/magicui/blur-fade';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { useTina, tinaField } from '@/lib/tina';
import contactData from '../../../content/pages/contact.json';
import MobileCTA from '@/components/MobileCTA';

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
        mobileCta { text href }
      }
    }`,
    variables: props.variables || {},
    data: props.data || { contact: contactData, settings: undefined },
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
        tinaFields={{
          title: tinaField(p.hero, 'titleLine1'),
          subtitle: tinaField(p.hero, 'description'),
          badgeText: tinaField(p.hero, 'badge'),
        }}
        valueBoxes={[
          { icon: ShieldCheck, label: 'Risk-Free Audit', sublabel: 'Initial Analysis' },
          { icon: Globe, label: 'National Scale', sublabel: 'Local Impact' }
        ]}
      />

      <section className="py-20 sm:py-32 px-5 sm:px-6 bg-slate-50 relative overflow-hidden max-w-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0284c7]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start overflow-hidden">
            
            <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-full">
              <BlurFade delay={0.1}>
                <div className="bg-[#0f172a] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#0284c7] rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mb-6 tracking-tighter leading-tight uppercase">
                      <span data-tina-field={tinaField(p.sidebar, 'title')}>{p.sidebar.title}</span> <br />
                      <span className="text-[#38bdf8] italic font-medium" data-tina-field={tinaField(p.sidebar, 'titleItalic')}>{p.sidebar.titleItalic}</span>
                    </h2>
                    <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed mb-10 sm:mb-12" data-tina-field={tinaField(p.sidebar, 'description')}>
                      {p.sidebar.description}
                    </p>

                    <div className="space-y-8 sm:space-y-10 w-full">
                      {p.sidebar.items.map((item: any, i: number) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap] || Phone;
                        return (
                          <div key={i} className="flex items-start gap-5 sm:gap-6 group text-left" data-tina-field={tinaField(item, 'value')}>
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-[#0f172a] shadow-xl transition-all duration-500 shrink-0">
                              <Icon size={20} />
                            </div>
                            <div className="flex-1 overflow-hidden">
                              <div className="text-[9px] sm:text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-1">{item.label}</div>
                              <div className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#38bdf8] transition-colors break-words">{item.value}</div>
                              <div className="text-xs text-white/40 mt-1" data-tina-field={tinaField(item, 'sub')}>{item.sub}</div>
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
                     <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-200 flex items-start gap-5 shadow-sm" data-tina-field={tinaField(badge, 'title')}>
                        <Icon className="text-[#0284c7] shrink-0" size={28} />
                        <div>
                           <h4 className="font-black font-serif text-[#0f172a] text-lg sm:text-xl mb-2 uppercase">{badge.title}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed font-light" data-tina-field={tinaField(badge, 'desc')}>{badge.desc}</p>
                        </div>
                     </div>
                  </BlurFade>
                );
              })}
            </div>

            <div className="lg:col-span-7 w-full max-w-full">
               <BlurFade delay={0.3} className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col justify-center overflow-hidden">
                  <div className="mb-8 sm:mb-10 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="inline-flex items-center gap-3 mb-6">
                       <div className="w-8 h-px bg-[#0284c7]" />
                       <span className="text-[#0284c7] font-black uppercase tracking-[0.3em] text-[10px]" data-tina-field={tinaField(p.form, 'badge')}>{p.form.badge}</span>
                    </div>
                    <h3 className="text-3xl sm:text-5xl font-serif font-black text-[#0f172a] mb-4 tracking-tighter leading-tight uppercase">
                      <span data-tina-field={tinaField(p.form, 'title')}>{p.form.title}</span> <br />
                      <span className="text-[#0284c7] italic font-medium" data-tina-field={tinaField(p.form, 'titleItalic')}>{p.form.titleItalic}</span>
                    </h3>
                    <p className="text-slate-500 text-base sm:text-lg font-light leading-relaxed max-w-lg" data-tina-field={tinaField(p.form, 'description')}>
                      {p.form.description}
                    </p>
                  </div>

                  <form action="https://formsubmit.co/info@evolvetherapyservices.com" method="POST" className="space-y-4 sm:space-y-5 w-full">
                    <input type="hidden" name="_subject" value="New Lead from Evolve Therapy Services!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                        <input type="text" name="Full Name" required className="w-full bg-slate-50 border border-slate-100 rounded-xl sm:rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium text-sm sm:text-base" placeholder="E.g. Sarah Mitchell" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Facility Name</label>
                        <input type="text" name="Facility Name" required className="w-full bg-slate-50 border border-slate-100 rounded-xl sm:rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium text-sm sm:text-base" placeholder="E.g. Evolve Care Center" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Work Email</label>
                        <input type="email" name="Work Email" required className="w-full bg-slate-50 border border-slate-100 rounded-xl sm:rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium text-sm sm:text-base" placeholder="your@facility.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                        <input type="tel" name="Phone Number" required className="w-full bg-slate-50 border border-slate-100 rounded-xl sm:rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium text-sm sm:text-base" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Primary Inquiry Goal</label>
                      <select name="Inquiry Goal" required className="w-full bg-slate-50 border border-slate-100 rounded-xl sm:rounded-[1.5rem] p-4 lg:p-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium appearance-none cursor-pointer text-sm sm:text-base">
                        {p.form.inquiryGoals?.map((goal: string) => (
                          <option key={goal}>{goal}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Message / Specific Goals</label>
                      <textarea name="Message" required rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:bg-white transition-all font-medium resize-none text-sm sm:text-base" placeholder="Tell us about your current therapy status..." />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 sm:py-6 bg-[#0284c7] text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] sm:text-[11px] shadow-xl hover:bg-[#0369a1] transition-all hover:-translate-y-1 active:translate-y-0 group mt-6 pointer-events-auto"
                    >
                      <span data-tina-field={tinaField(p.form, 'buttonText')}>{p.form.buttonText}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-slate-400 text-[10px] sm:text-xs font-light mt-4">
                       By submitting, you agree to our <span className="underline decoration-slate-200 underline-offset-4 cursor-pointer hover:text-slate-600 transition-colors">privacy policy</span> and clinical data terms.
                    </p>
                  </form>
               </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
      <MobileCTA data={s?.mobileCta} />
    </main>
  );
}
