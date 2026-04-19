'use client';

import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Text Content */}
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8">
              Let's Evolve <br />
              <span className="text-primary italic">Together</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Ready to maximize your clinical and financial potential? Contact us for a free clinical and financial cost savings analysis.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Consultation</div>
                  <div className="text-xl font-bold text-secondary">(888) 386-5820</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Inquiry</div>
                  <div className="text-xl font-bold text-secondary">info@evolvetherapyservices.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-secondary text-white rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Headquarters</div>
                  <div className="text-lg font-bold text-secondary leading-tight">31641 Compass Cove<br />Avon Lake, OH 44012</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl translate-x-4 translate-y-4" />
            <div className="relative bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-2xl">
              <h3 className="text-3xl font-bold text-secondary mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary"
                    placeholder="Email Address"
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary"
                    placeholder="Tell us about your facility goals..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-secondary transition-all shadow-xl shadow-primary/20 group uppercase tracking-widest text-sm"
                >
                  Request Analysis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
