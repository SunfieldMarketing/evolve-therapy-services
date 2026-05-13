'use client';

import { Mail, MapPin, Phone, Send, ArrowRight, Clock, Lock } from 'lucide-react';
import { useTina } from 'tinacms/dist/react';
import contactData from '../../content/pages/contact.json';
import settingsData from '../../content/global/settings.json';

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock
};

export default function Contact() {
  const { data: contactRes } = useTina({
    query: `query { contact(relativePath: "contact.json") { form { badge title titleItalic description buttonText inquiryGoals } sidebar { title titleItalic description items { icon label value sub } } } }`,
    variables: {},
    data: { contact: contactData },
  });

  const { data: settingsRes } = useTina({
    query: `query { settings(relativePath: "settings.json") { phone email address } }`,
    variables: {},
    data: { settings: settingsData },
  });

  const c = contactRes?.contact || contactData;
  const s = settingsRes?.settings || settingsData;

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      {/* Bento Grid Background Effect */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(2,132,199,0.08) 0%, transparent 50%)' }} 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="text-secondary">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-[1px] bg-primary" />
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{c.form.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6 leading-tight text-[#0f172a]">
              {c.sidebar.title} <br />
              <span className="text-primary italic font-medium">{c.sidebar.titleItalic}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light">
              {c.sidebar.description}
            </p>

            <div className="space-y-8 lg:space-y-10">
              {c.sidebar.items.map((item: any, i: number) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap] || Phone;
                const value = item.icon === 'Phone' ? s.phone : (item.icon === 'Mail' ? s.email : (item.icon === 'MapPin' ? s.address : item.value));
                
                return (
                  <div key={i} className="flex items-start gap-6 group cursor-default p-4 -ml-4 rounded-3xl hover:bg-white/50 transition-colors duration-300">
                    <div className="w-14 h-14 bg-white border border-slate-200 text-primary rounded-2xl flex items-center justify-center shadow-lg shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className={`font-serif font-bold text-secondary group-hover:text-primary transition-colors ${item.icon === 'Phone' ? 'text-2xl' : 'text-lg'}`}>
                        {value.split('\n').map((line: string, idx: number) => (
                          <span key={idx}>{line}<br /></span>
                        ))}
                      </div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            <div className="relative bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-slate-200">
              <h3 className="text-3xl font-serif font-bold text-secondary mb-2 text-[#0f172a]">{c.form.title} <span className="text-primary italic font-medium">{c.form.titleItalic}</span></h3>
              <p className="text-slate-500 text-sm mb-8">{c.form.description}</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px]"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="email" 
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px]"
                    placeholder="Corporate Email"
                  />
                </div>

                <div className="space-y-2">
                  <select className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary text-[15px] appearance-none">
                    <option value="">Primary Inquiry Goal</option>
                    {c.form.inquiryGoals.map((goal: string, idx: number) => (
                      <option key={idx} value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px] resize-none"
                    placeholder="Tell us about your facility goals..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-md shadow-primary/20 text-[15px]"
                >
                  {c.form.buttonText} <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
