'use client';

import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="text-secondary">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-[1px] bg-primary" />
               <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Partner With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6 leading-tight">
              Let's Evolve <br />
              <span className="text-primary italic font-medium">Together</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Ready to maximize your clinical and financial potential? Contact us for a free clinical and financial cost savings analysis with zero obligation.
            </p>

            <div className="space-y-8 lg:space-y-10">
              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white border border-slate-200 text-primary rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Direct Line</div>
                  <div className="text-2xl font-serif font-bold text-secondary group-hover:text-primary transition-colors">(888) 386-5820</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white border border-slate-200 text-primary rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Connect</div>
                  <div className="text-lg font-serif font-bold text-secondary break-all">info@evolvetherapyservices.com</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-default">
                <div className="w-14 h-14 bg-white border border-slate-200 text-primary rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</div>
                  <div className="text-lg font-serif font-bold text-secondary leading-relaxed">31641 Compass Cove<br />Avon Lake, OH 44012</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            <div className="relative bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-slate-200">
              <h3 className="text-3xl font-serif font-bold text-secondary mb-2">Secure a Consultation</h3>
              <p className="text-slate-500 text-sm mb-8">Our clinical directors respond within 24 hours.</p>
              
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
                  Submit Inquiry <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
