'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Target, Eye, ArrowRight, Phone } from 'lucide-react';

const leaders = [
  {
    name: 'Lisa Bebie, PTA',
    title: 'President & Founder',
    photo: 'https://evolvetherapyservices.com/wp-content/uploads/2022/03/Lisa-Bebie.png',
    fallback: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80',
    quote: '"As a clinician, I know how difficult it was to meet the goals of my employer as well as try to meet the goals of my customer. We know that a model that brings your therapy teams in-house allows great employee engagement, which then in turn, allows exceptional therapy outcomes to the residents we all serve."',
    bio: [
      'Over 20 years of long-term therapy leadership with a passionate commitment to evolve the functionality of therapy services for the aging population.',
      'Operational and clinical expertise in leadership and marketing models created by exceptional clinical programming—setting customers apart through a holistic philosophy.',
      'It is her vision to bridge the gap for operators who want to take their therapy teams in-house, and to assist in-house programs with clinically proven education, operational analysis, and compliance oversight.',
    ],
    accentColor: '#0284c7',
  },
  {
    name: 'Isaiah Rupp, MBA-HCA, PTA',
    title: 'VP of Operations & Co-Founder',
    photo: 'https://evolvetherapyservices.com/about/',
    fallback: 'https://images.unsplash.com/photo-1622253692010-333f2da60c8d?auto=format&fit=crop&q=80',
    quote: '"It\'s amazing what you can accomplish if you don\'t care who gets the credit." — Harry Truman',
    bio: [
      'With an MBA in Healthcare Administration from South University and as a licensed Physical Therapist Assistant, Isaiah serves as Evolve\'s Director of Operations.',
      'He oversees all therapy operations, working to build strong clinical, operational, and business strategies—progressing quickly due to his ability to teach, train, and build up those around him.',
      'His passion is in building the best clinical outcomes and operations success in the most fiscally responsible manner, promoting stability where clinicians can thrive.',
    ],
    accentColor: '#0f172a',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Leadership" 
        subtitle="Meet the clinicians and operational leaders behind Evolve Therapy Services."
        videoKey="about"
      />

      {/* Intro / Company Overview */}
      <section className="py-24 md:py-40 overflow-hidden relative bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-8">
                Who We Are
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-[#0f172a] mb-8 leading-[0.95] tracking-tighter">
                Bridging the Gap in<br />
                <span className="text-[#0284c7] italic font-medium">LTC Therapy</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-500 leading-relaxed font-light mb-12">
                <p>
                  Evolve Therapy Services is a therapy management company dedicated to helping LTC organizations excite and empower their therapy teams through an in-house employment model with opportunities for career advancement through mentorship.
                </p>
                <p>
                  Our model facilitates a cohesive company culture that generates exceptional outcomes, all while allowing facilities to retain 100% of their therapy revenue.
                </p>
              </div>
              <blockquote className="bg-[#0f172a] p-8 rounded-2xl border-l-4 border-[#0284c7]">
                <p className="font-serif font-medium text-white italic text-xl leading-relaxed">
                  "We bridge the gap between clinical quality and financial performance, enabling operators to truly evolve to the next level."
                </p>
                <footer className="mt-4 text-[#0284c7] text-sm font-bold uppercase tracking-widest">— Lisa Bebie, PTA · President & Founder</footer>
              </blockquote>
            </motion.div>

            {/* Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 gap-6"
            >
              {[
                { icon: Eye, title: 'Our Vision', text: 'To provide the most rewarding and creative therapy consulting management model through leadership, passion, and experience to allow success and internal growth for our customers.' },
                { icon: Target, title: 'Our Mission', text: 'To provide the highest quality customer-centric, outcome-based therapy management services enabling our customers the ability to focus on their core strengths through a dynamic culture.' },
                { icon: Shield, title: 'Our Commitment', text: 'We are committed to clinical integrity, operational transparency, and building genuine partnerships where your facility\'s success is our success.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0284c7]/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-[#0284c7]/10 rounded-xl flex items-center justify-center text-[#0284c7] shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#0f172a] font-serif text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="py-24 md:py-40 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-black uppercase tracking-[0.3em] mb-6">
              The Founders
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#0f172a] tracking-tighter">
              Visionary <span className="text-[#0284c7] italic font-medium">Leadership</span>
            </h2>
          </motion.div>

          <div className="space-y-32">
            {leaders.map((leader, i) => (
              <div key={i} className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center`}>
                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className={`lg:col-span-4 relative ${i % 2 === 1 ? 'order-1 lg:order-2' : ''}`}
                >
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <Image
                      src={leader.photo}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).src = leader.fallback; }}
                    />
                  </div>
                  {/* Name badge */}
                  <div 
                    className="absolute -bottom-6 left-6 right-6 p-5 rounded-2xl shadow-xl text-white"
                    style={{ background: leader.accentColor }}
                  >
                    <div className="font-black font-serif text-lg tracking-tight">{leader.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold mt-1 opacity-80">{leader.title}</div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className={`lg:col-span-8 pt-8 ${i % 2 === 1 ? 'order-2 lg:order-1' : ''}`}
                >
                  <blockquote className="text-2xl md:text-3xl font-serif text-[#0f172a] italic leading-tight font-medium mb-10 border-l-4 border-[#0284c7] pl-6">
                    {leader.quote}
                  </blockquote>
                  <div className="space-y-5 text-lg text-slate-500 leading-relaxed font-light mb-10">
                    {leader.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial from Jimmy Daniels */}
      <section className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-[#0284c7]/30 font-serif mb-4">"</div>
            <p className="text-xl md:text-2xl text-white/80 font-light italic leading-relaxed mb-10">
              I truly am blessed that I have had the opportunity to have worked with Evolve Therapy Services. The leadership of Evolve has made a great impact not only in my daily operations as a director of therapy but has made it fun and exciting to work with — ultimately making a positive impact in our communities.
            </p>
            <div className="text-[#0284c7] font-black text-sm uppercase tracking-widest">Jimmy Daniels, COTA/L</div>
            <div className="text-white/40 text-xs mt-1">Director of Rehab · Emerald Care Center, Midwest City, OK</div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-slate-50 rounded-3xl p-12 md:p-16 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-black text-[#0f172a] tracking-tighter mb-3">
                Ready to <span className="text-[#0284c7] italic">Evolve</span> your facility?
              </h3>
              <p className="text-slate-500 text-lg font-light">Get a free cost savings analysis from our team today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0284c7] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#0f172a] transition-all"
              >
                Request Free Analysis <ArrowRight size={16} />
              </Link>
              <a
                href="tel:8883865820"
                className="inline-flex items-center gap-2 border border-slate-200 text-[#0f172a] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all"
              >
                <Phone size={15} /> (888) 386-5820
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
