'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { 
  MapPin, 
  Building2, 
  Phone, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { useTina, tinaField } from '@/lib/tina';
import TinaProviderWrapper from '@/components/TinaProvider';
import { BlurFade } from '@/components/magicui/blur-fade';

const iconMap = {
  MapPin,
  Building2,
  Phone,
  Globe,
  ShieldCheck,
  Award,
  Users
};

export default function LocationsClient(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const p = data?.locations;

  return (
    <TinaProviderWrapper>
      <main className="min-h-screen bg-white">
        <Navbar />
        
        <PageHeader 
          title={p?.hero?.title || 'Our Reach'} 
          italicWord={p?.hero?.italicWord || ''} 
          subtitle={p?.hero?.subtitle || ''}
          useVideo={false}
          bgImage="none"
          badgeText="Locations"
          tinaFields={{
            title: tinaField(p?.hero, 'title'),
            subtitle: tinaField(p?.hero, 'subtitle'),
          }}
        />

        {/* National Stats Section */}
        <section className="py-24 md:py-48 bg-slate-50 relative overflow-hidden">
           <div className="container mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                 {p?.reach?.items?.map((item: any, i: number) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap] || MapPin;
                    return (
                       <BlurFade key={i} delay={0.1 * i} className="h-full">
                          <div data-tina-field={tinaField(item)} className="bg-white rounded-[3rem] p-12 border border-slate-100 hover:shadow-2xl transition-all duration-700 text-center h-full flex flex-col items-center">
                             <div className="w-16 h-16 rounded-2xl bg-[#0284c7]/5 text-[#0284c7] flex items-center justify-center mb-8">
                                <Icon size={30} />
                             </div>
                             <h4 className="text-3xl font-serif font-black text-[#0f172a] mb-4">{item.title}</h4>
                             <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                          </div>
                       </BlurFade>
                    );
                 })}
              </div>
           </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 md:py-64 bg-white text-center">
           <div className="container mx-auto px-6">
              <BlurFade>
                 <h2 className="text-5xl md:text-9xl font-serif font-black text-[#0f172a] tracking-tighter leading-none mb-16">
                    Strategy <br />
                    <span className="text-[#0284c7] italic">Without Borders.</span>
                 </h2>
                 <Link href="/contact">
                    <ShimmerButton background="#0284c7" shimmerColor="rgba(255,255,255,0.4)" borderRadius="9999px" className="px-16 py-8 shadow-2xl">
                       <span className="font-black uppercase tracking-[0.4em] text-[12px] text-white">Initialize Partnership</span>
                    </ShimmerButton>
                 </Link>
              </BlurFade>
           </div>
        </section>

        <Footer />
      </main>
    </TinaProviderWrapper>
  );
}
