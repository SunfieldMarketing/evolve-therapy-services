'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHeader 
        title="Our" 
        italicWord="Leadership" 
        subtitle="Meet the visionaries behind Evolve Therapy Services and our commitment to clinical excellence."
        videoKey="about"
      />

      {/* Intro Section */}
      <section className="py-24 md:py-48 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 border border-slate-100 p-4 bg-white">
                <Image 
                  src="https://images.unsplash.com/photo-1519494026892-80ba3f6247fb?auto=format&fit=crop&q=80" 
                  alt="Modern Clinical Environment" 
                  width={800} 
                  height={1000} 
                  className="object-cover w-full h-[700px] rounded-[3rem]"
                />
              </div>
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                 Who we are
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-secondary mb-12 leading-[0.95] tracking-tighter">
                Bridging the Gaps in <br />
                <span className="text-primary italic font-medium uppercase text-6xl">LTC Therapy</span>
              </h2>
              <div className="space-y-10 text-xl text-slate-500 leading-relaxed font-light">
                <p>
                  Evolve Therapy Services is a therapy management company dedicated to helping LTC organizations excite and empower their therapy teams. 
                </p>
                <p>
                  Our model facilitates in-house employment with opportunities for career advancement through mentorship, grooming a cohesive company culture that generates exceptional outcomes.
                </p>
                <div className="bg-secondary p-10 rounded-[2.5rem] border-l-8 border-primary shadow-2xl">
                   <p className="font-serif font-black text-white italic text-2xl leading-relaxed">
                     "We bridge the gap between clinical quality and financial performance, enabling operators to truly evolve to the next level."
                   </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="py-24 md:py-48 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-32">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-100 text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-8 shadow-sm"
            >
               The Founders
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-secondary tracking-tighter">Visionary Leadership</h2>
          </div>

          <div className="space-y-48 lg:space-y-64">
            {/* Lisa Bebie */}
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-5 relative"
              >
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white bg-white p-3 aspect-[4/5]">
                  <Image 
                    src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80" 
                    alt="Lisa Bebie" 
                    width={800} 
                    height={1000} 
                    className="object-cover w-full h-full rounded-[3rem]"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 p-10 bg-primary text-white rounded-[2.5rem] shadow-2xl z-20">
                  <div className="font-black font-serif text-2xl tracking-tight">Lisa Bebie</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black mt-2 opacity-80">President & Founder</div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-7 pt-4"
              >
                <h3 className="text-4xl lg:text-5xl font-serif text-secondary mb-10 italic leading-tight font-medium">
                  "As a clinician, I know how difficult it is to meet the goals of both employer and customer."
                </h3>
                <div className="space-y-8 text-xl text-slate-500 leading-relaxed font-light">
                  <p>
                    Over 20 years of long-term therapy leadership with a passionate commitment to evolve the functionality of therapy services for the aging population as well as enhancing SNF operational processes for increased efficiency and maximization of reimbursement.
                  </p>
                  <p>
                    Operational and clinical expertise in leadership and marketing models that are created by exceptional clinical programming to set our customers apart from their competition by a holistic philosophy.
                  </p>
                  <div className="pt-8 flex gap-6 italic text-secondary font-medium border-t border-slate-200">
                    <span className="text-5xl text-primary leading-none">“</span>
                    <p>We assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE to the next level.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Isaiah Rupp */}
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-7 pt-4 order-2 lg:order-1"
              >
                 <h3 className="text-4xl lg:text-5xl font-serif text-secondary mb-10 italic leading-tight font-medium">
                   "It’s amazing what you can accomplish if you don’t care who gets the credit."
                 </h3>
                <div className="space-y-10 text-xl text-slate-500 leading-relaxed font-light">
                  <p>
                    With an MBA in Healthcare Administration and as a licensed Physical Therapist Assistant, Isaiah oversees all therapy operations, working to build strong clinical, operational, and business strategies within the teams.
                  </p>
                  <p>
                    His focus is build clinical outcomes and operations success in the most fiscally responsible manner, promoting a place of stability where clinicians can thrive in doing what they have a passion to do.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-5 relative order-1 lg:order-2"
              >
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white bg-white p-3 aspect-[4/5]">
                  <Image 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da60c8d?auto=format&fit=crop&q=80" 
                    alt="Isaiah Rupp" 
                    width={800} 
                    height={1000} 
                    className="object-cover w-full h-full rounded-[3rem]"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 p-10 bg-secondary text-white rounded-[2.5rem] shadow-2xl z-20">
                  <div className="font-black font-serif text-2xl tracking-tight">Isaiah Rupp</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black mt-2 opacity-80">VP of Operations, Co-Founder</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

       {/* Vision & Mission */}
       <section className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-16 lg:p-24 rounded-[4rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-700 border border-slate-100 group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-12 shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Eye size={40} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif font-black text-secondary mb-8 tracking-tighter">Our Vision</h3>
              <p className="text-xl text-slate-500 leading-relaxed font-light">
                To provide the most rewarding and creative therapy consulting management model through leadership, passion and experience to allow success and internal growth for our customers.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-16 lg:p-24 rounded-[4rem] bg-secondary hover:shadow-2xl transition-all duration-700 border border-white/5 group"
            >
              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-primary mb-12 shadow-inner group-hover:bg-white group-hover:text-secondary transition-all duration-500">
                <Target size={40} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-serif font-black text-white mb-8 tracking-tighter">Our Mission</h3>
              <p className="text-white/40 text-xl leading-relaxed font-light">
                To provide the highest quality customer centric outcome based therapy management services enabling our customers the ability to focus on their core strengths through a dynamic culture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
