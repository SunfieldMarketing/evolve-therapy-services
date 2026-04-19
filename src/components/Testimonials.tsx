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
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-secondary font-bold text-xs uppercase tracking-[0.25em] mb-8 shadow-sm">
             <MessageSquare size={14} className="text-accent" /> Client Voices
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-secondary tracking-tight mb-8">
            Real Results, <span className="text-gradient hover:animate-pulse">Trusted Partnerships.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">How our modern operational approach transforms facilities and empowers therapy teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative group h-full"
            >
              <div className="h-full bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] group-hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
                
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 font-medium leading-relaxed mb-12 relative z-10 text-lg">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-secondary/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary font-heading">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
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
