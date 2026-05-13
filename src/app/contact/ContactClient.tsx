'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import { useTina, tinaField } from '@/lib/tina';
import TinaProviderWrapper from '@/components/TinaProvider';

export default function ContactClient(props: { data: any, query: string, variables: any }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const p = data?.contact;

  return (
    <TinaProviderWrapper>
      <main className="min-h-screen bg-white">
        <Navbar />
        
        <PageHeader 
          title={p?.hero?.title || 'Connect'} 
          italicWord={p?.hero?.italicWord || 'With Us'} 
          subtitle={p?.hero?.subtitle || ''}
          useVideo={false}
          bgImage="none"
          badgeText="Contact"
          tinaFields={{
            title: tinaField(p?.hero, 'title'),
            subtitle: tinaField(p?.hero, 'subtitle'),
          }}
        />

        <section className="py-24 md:py-48">
          <Contact />
        </section>

        <Footer />
      </main>
    </TinaProviderWrapper>
  );
}
