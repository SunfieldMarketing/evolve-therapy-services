'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Info Side */}
            <div className="p-12 lg:p-20 bg-primary text-white">
              <h2 className="text-4xl font-bold mb-8">Let's Evolve Together</h2>
              <p className="text-primary-foreground/80 text-lg mb-12">
                Ready to maximize your clinical and financial potential? Contact us for a free clinical and financial cost savings analysis.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-2xl font-bold">(888) 386-5820</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-2xl font-bold">info@evolvetherapyservices.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Headquarters</p>
                    <p className="text-xl font-bold">31641 Compass Cove<br />Avon Lake, OH 44012</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                    placeholder="jane@facility.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                    placeholder="How can we help your facility grow?"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-secondary text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl group"
                >
                  Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
