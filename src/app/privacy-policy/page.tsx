'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ShieldCheck } from 'lucide-react';
import settingsData from '../../../content/global/settings.json';

export default function PrivacyPolicyPage() {
  const s = settingsData;

  return (
    <main className="min-h-screen bg-white">
      <Navbar data={s?.navbar} />
      
      <PageHeader 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your data."
        bgImage="none"
        useVideo={false}
        badgeText="Legal & Compliance"
        valueBoxes={[
          { icon: ShieldCheck, label: 'Data Security', sublabel: 'Enterprise Grade' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Evolve Therapy Services ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website evolvetherapyservices.com or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Site includes:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, facility name, and telephone number that you voluntarily give to us when you fill out contact forms.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>

            <h2>3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul>
              <li>Respond to your customer service requests and support needs.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding promotions.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:<br/>
              <strong>Email:</strong> info@evolvetherapyservices.com<br/>
              <strong>Phone:</strong> (888) 386-5820
            </p>
          </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
    </main>
  );
}
