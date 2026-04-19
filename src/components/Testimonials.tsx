'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-6">Real Results, Trusted Partnerships</h2>
          <p className="text-lg text-slate-500">How our clinical-first approach transforms facilities and empowers therapy teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group h-full"
            >
              <div className="h-full bg-slate-50 p-12 rounded-[3rem] border border-slate-100 group-hover:bg-white group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                <Quote className="text-primary/10 absolute top-8 right-10 group-hover:text-primary/20 transition-colors" size={80} strokeWidth={1} />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-slate-600 font-medium leading-relaxed italic mb-12 relative z-10">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{t.name}</h4>
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
