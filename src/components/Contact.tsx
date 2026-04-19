'use client';

import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] invert" 
           style={{ backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-full bg-primary/10 -skew-x-12 translate-x-1/2 z-0 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="text-white">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-[1px] bg-primary" />
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Partner With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8 leading-[1.05] tracking-tight">
              Let's Evolve <br />
              <span className="text-gradient hover:animate-pulse">Together.</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 leading-relaxed font-medium">
              Ready to maximize your clinical and financial potential? Contact us for a free clinical and financial cost savings analysis with zero obligation.
            </p>

            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Direct Line</div>
                  <div className="text-2xl font-black text-white font-heading tracking-wide group-hover:text-primary transition-colors">(888) 386-5820</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email Connect</div>
                  <div className="text-xl font-bold text-white break-all">info@evolvetherapyservices.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Headquarters</div>
                  <div className="text-lg font-bold text-white leading-relaxed">31641 Compass Cove<br />Avon Lake, OH 44012</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            <div className="relative dark-glass p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">Secure a Consultation</h3>
              <p className="text-white/50 text-sm mb-8 font-medium">Our clinical directors respond within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all text-white placeholder:text-white/30"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all text-white placeholder:text-white/30"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="email" 
                    className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all text-white placeholder:text-white/30"
                    placeholder="Corporate Email"
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 px-6 py-4 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/10 transition-all text-white placeholder:text-white/30 resize-none"
                    placeholder="Tell us about your facility goals..."
                  />
                </div>

                <button 
                  type="button"
                  className="w-full bg-primary text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-secondary transition-all shadow-[0_10px_30px_rgba(67,56,202,0.5)] group uppercase tracking-widest text-xs"
                >
                  Submit Inquiry <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
