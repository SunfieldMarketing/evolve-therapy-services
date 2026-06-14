'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ShieldCheck } from 'lucide-react';
import settingsData from '../../../content/global/settings.json';

export default function TermsPage() {
  const s = settingsData;

  return (
    <main className="min-h-screen bg-white">
      <Navbar data={s?.navbar} />
      
      <PageHeader 
        title="Terms of Service"
        subtitle="Rules and guidelines for using our website."
        bgImage="none"
        useVideo={false}
        badgeText="Legal & Compliance"
        valueBoxes={[
          { icon: ShieldCheck, label: 'Agreement', sublabel: 'Terms of Use' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2>1. Terms</h2>
            <p>
              By accessing the website at evolvetherapyservices.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Evolve Therapy Services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Evolve Therapy Services' website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Evolve Therapy Services' website are provided on an 'as is' basis. Evolve Therapy Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Evolve Therapy Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Evolve Therapy Services' website.
            </p>

            <h2>5. Revisions and Errata</h2>
            <p>
              The materials appearing on Evolve Therapy Services' website could include technical, typographical, or photographic errors. Evolve Therapy Services does not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Ohio, USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
    </main>
  );
}
