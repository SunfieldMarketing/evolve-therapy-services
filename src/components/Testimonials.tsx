'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Amy Tyler, PTA",
    role: "Director of Rehab, Crystal Health and Rehab",
    content: "The support we have received from Evolve Therapy Services has facilitated our shift from a negative margin to being the most profitable we have ever been as a rehab department. Lisa and Isaiah work hard to ensure that we are up to date on the latest changes."
  },
  {
    name: "I Chafetz",
    role: "LTC Operator",
    content: "Having a company that treats your facilities like it’s their own is very rare. They will focus on your facilities goals like it's their own. It's an absolute pleasure both from a customer service side and productivity side."
  },
  {
    name: "Jimmy Daniels, COTA/L",
    role: "Director of Rehab, Emerald Care Center",
    content: "The leadership of Evolve has made a great impact not only in my daily operations but has made it fun and exciting to work with. They have definitely been a blessing to not only to me but my fellow peers."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
             <MessageSquare size={14} className="text-primary" /> Client Voices
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-secondary tracking-tight mb-8">
            Real Results, <br />
            <span className="text-primary italic font-medium">Trusted Partnerships.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">How our modern operational approach transforms facilities and empowers therapy teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative group h-full"
            >
              <div className="h-full bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
                
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 font-medium leading-relaxed mb-10 relative z-10 text-[15px]">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 bg-sky-50 text-primary border border-sky-100 rounded-full flex items-center justify-center font-serif font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-serif">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
