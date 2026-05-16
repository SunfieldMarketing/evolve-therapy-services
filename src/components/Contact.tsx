import { Mail, MapPin, Phone, Send, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { tinaField } from '@/lib/tina';

const iconMap: any = {
  ShieldCheck, Clock, Award, Phone, Mail, MapPin
};

export default function Contact({ data, parentField }: { data?: any, parentField?: string }) {
  const d = data || {
    hero: {
      badge: 'Partner With Us',
      titleLine1: "Let's Evolve",
      titleItalic: 'Together',
      description: "Ready to maximize your clinical and financial potential? Contact us for a free clinical and financial cost savings analysis with zero obligation."
    },
    sidebar: {
      title: 'Our',
      titleItalic: 'Commitment',
      description: 'Our clinical directors respond within 24 hours.',
      items: [
        { icon: 'Phone', label: 'Direct Line', value: '(888) 386-5820' },
        { icon: 'Mail', label: 'Email Connect', value: 'info@evolvetherapyservices.com' },
        { icon: 'MapPin', label: 'Headquarters', value: '31641 Compass Cove, Avon Lake, OH 44012' },
      ]
    },
    form: {
      badge: 'Inquiry',
      title: 'Secure a',
      titleItalic: 'Consultation',
      description: 'Our clinical directors respond within 24 hours.',
      buttonText: 'Submit Inquiry'
    },
    trustBadges: [
      { icon: 'ShieldCheck', title: 'HIPAA Compliant', desc: 'Secure data handling' },
      { icon: 'Clock', title: '24h Response', desc: 'Expert clinical feedback' },
      { icon: 'Award', title: 'Top Rated', desc: 'Clinical excellence' }
    ]
  };

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
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs" data-tina-field={parentField ? tinaField(d.hero, 'badge') : undefined}>{d.hero.badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6 leading-tight">
              <span data-tina-field={parentField ? tinaField(d.hero, 'titleLine1') : undefined}>{d.hero.titleLine1}</span> <br />
              <span className="text-primary italic font-medium" data-tina-field={parentField ? tinaField(d.hero, 'titleItalic') : undefined}>{d.hero.titleItalic}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light" data-tina-field={parentField ? tinaField(d.hero, 'description') : undefined}>
              {d.hero.description}
            </p>

            <div className="space-y-8 lg:space-y-10">
              {(d.sidebar?.items || []).map((item: any, i: number) => {
                const Icon = iconMap[item.icon] || Phone;
                return (
                  <div key={i} className="flex items-start gap-6 group cursor-default p-4 -ml-4 rounded-3xl hover:bg-white/50 transition-colors duration-300">
                    <div className="w-14 h-14 bg-white border border-slate-200 text-primary rounded-2xl flex items-center justify-center shadow-lg shrink-0 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1" data-tina-field={parentField ? tinaField(item, 'label') : undefined}>{item.label}</div>
                      <div className="text-xl md:text-2xl font-serif font-bold text-secondary group-hover:text-primary transition-colors" data-tina-field={parentField ? tinaField(item, 'value') : undefined}>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            <div className="relative bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-slate-200">
              <h3 className="text-3xl font-serif font-bold text-secondary mb-2">
                <span data-tina-field={parentField ? tinaField(d.form, 'title') : undefined}>{d.form.title}</span> <span className="text-primary italic" data-tina-field={parentField ? tinaField(d.form, 'titleItalic') : undefined}>{d.form.titleItalic}</span>
              </h3>
              <p className="text-slate-500 text-sm mb-8" data-tina-field={parentField ? tinaField(d.form, 'description') : undefined}>{d.form.description}</p>
              
              <form action="https://formsubmit.co/info@evolvetherapyservices.com" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New Lead from Evolve Therapy Services!" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      name="First Name"
                      required
                      className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px]"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      name="Last Name"
                      required
                      className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="email" 
                    name="Email"
                    required
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px]"
                    placeholder="Corporate Email"
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    name="Message"
                    rows={4}
                    required
                    className="w-full bg-slate-50 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-secondary placeholder:text-slate-400 text-[15px] resize-none"
                    placeholder="Tell us about your facility goals..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-md shadow-primary/20 text-[15px] pointer-events-auto"
                >
                  <span data-tina-field={parentField ? tinaField(d.form, 'buttonText') : undefined}>{d.form.buttonText}</span> <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

