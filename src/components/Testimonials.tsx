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
    content: "Working with Evolve Therapy has been an absolute pleasure both from a customer service side and facility productivity side. Having a company that treats your facilities like it’s their own is very rare. They will focus on your facilities goals like it's their own."
  },
  {
    name: "Jimmy Daniels, COTA/L",
    role: "Director of Rehab, Emerald Care Center",
    content: "The leadership of Evolve has made a great impact not only in my daily operations but has made it fun and exciting to work with. They have definitely been a blessing to not only to me but my fellow peers."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-slate-500">Real feedback from clinical directors and facility operators.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="text-primary/20 mb-6" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-8">
                  "{t.content}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-secondary">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
