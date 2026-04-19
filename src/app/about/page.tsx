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
      />

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image 
                  src="/images/clinic.png" 
                  alt="Clinical Environment" 
                  width={600} 
                  height={800} 
                  className="object-cover w-full h-[600px]"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-1" />
            </motion.div>

            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Who we are</span>
              <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-10 leading-tight">
                Bridging the Gaps in <span className="text-primary italic">LTC Therapy</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Evolve Therapy Services is a therapy management company dedicated to helping LTC organizations excite and empower their therapy teams. 
                </p>
                <p>
                  Our model facilitates in-house employment with opportunities for career advancement through mentorship, grooming a cohesive company culture that generates exceptional outcomes.
                </p>
                <p className="font-bold text-secondary">
                  We bridge the gap between clinical quality and financial performance, enabling operators to truly evolve to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">The Founders</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-32">
            {/* Lisa Bebie */}
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-[4/5]">
                  <Image 
                    src="/images/lisa.png" 
                    alt="Lisa Bebie" 
                    width={500} 
                    height={625} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-white rounded-3xl shadow-xl z-20">
                  <div className="font-bold text-lg">Lisa Bebie, PTA</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">President & Founder</div>
                </div>
              </div>
              <div className="lg:col-span-7 pt-4">
                <h3 className="text-3xl font-serif text-secondary mb-6 italic">"As a clinician, I know how difficult it is to meet the goals of both employer and customer."</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Over 20 years of long-term therapy leadership with a passionate commitment to evolve the functionality of therapy services for the aging population as well as enhancing SNF operational processes for increased efficiency and maximization of reimbursement.
                  </p>
                  <p>
                    Operational and clinical expertise in leadership and marketing models that are created by exceptional clinical programming to set our customers apart from their competition by a holistic philosophy.
                  </p>
                  <p className="italic">
                    "We assist in-house programs with clinical proven education, operational analysis, and compliance oversight to allow LTC operators to truly EVOLVE to the next level."
                  </p>
                </div>
              </div>
            </div>

            {/* Isaiah Rupp */}
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7 pt-4 order-2 lg:order-1">
                 <h3 className="text-3xl font-serif text-secondary mb-6 italic">"It’s amazing what you can accomplish if you don’t care who gets the credit."</h3>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    With an MBA in Healthcare Administration and as a licensed Physical Therapist Assistant, Isaiah oversees all therapy operations, working to build strong clinical, operational, and business strategies within the teams.
                  </p>
                  <p>
                    His focus is build clinical outcomes and operations success in the most fiscally responsible manner, promoting a place of stability where clinicians can thrive in doing what they have a passion to do.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200 aspect-[4/5]">
                  <Image 
                    src="/images/isaiah.png" 
                    alt="Isaiah Rupp" 
                    width={500} 
                    height={625} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 p-6 bg-secondary text-white rounded-3xl shadow-xl z-20">
                  <div className="font-bold text-lg">Isaiah Rupp, MBA-HCA, PTA</div>
                  <div className="text-xs uppercase tracking-widest opacity-80">VP of Operations, Co-Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Vision & Mission */}
       <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 rounded-[3rem] bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/10">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-serif text-secondary mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide the most rewarding and creative therapy consulting management model through leadership, passion and experience to allow success and internal growth for our customers.
              </p>
            </div>
            <div className="p-12 rounded-[3rem] bg-secondary/5 hover:bg-secondary/10 transition-colors border border-secondary/10">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-serif text-secondary mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                To provide the highest quality customer centric outcome based therapy management services enabling our customers the ability to focus on their core strengths through a dynamic culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
