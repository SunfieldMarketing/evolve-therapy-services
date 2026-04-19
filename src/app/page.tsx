import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import WhyEvolve from '@/components/WhyEvolve';
import ServiceArea from '@/components/ServiceArea';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <WhyEvolve />
      <Services />
      <ServiceArea />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
