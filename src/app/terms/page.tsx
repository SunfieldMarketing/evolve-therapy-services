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
          <div className="prose prose-slate prose-lg max-w-none prose-h2:text-[#0f172a] prose-h2:font-serif prose-h2:text-3xl prose-h2:mt-12 prose-a:text-[#0284c7]">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-black mb-8">Last Updated: June 2026</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing the website at evolvetherapyservices.com (the "Site") operated by Evolve Therapy Services ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local, state, and federal laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p>
              These Terms apply specifically to your use of this Site. Professional therapy management, auditing, and consulting services provided by Evolve Therapy Services are governed by separate, specifically negotiated Management Agreements and Business Associate Agreements (BAAs).
            </p>

            <h2>2. Intellectual Property Rights & Use License</h2>
            <p>
              The content, features, and functionality of this Site—including but not limited to proprietary methodologies, therapy management frameworks, text, graphics, logos, and software—are the exclusive property of Evolve Therapy Services and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              Permission is granted to temporarily download one copy of the public-facing materials on the Site for personal, non-commercial transitory viewing only. Under this limited license, you may not:
            </p>
            <ul>
              <li>Modify, copy, or reproduce our clinical frameworks, audits, or proprietary materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial) without written consent;</li>
              <li>Attempt to decompile, reverse engineer, or scrape any software contained on the Site;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Evolve Therapy Services at any time.
            </p>

            <h2>3. Professional Disclaimer</h2>
            <p>
              The information provided on this Site is for general informational and educational purposes only and is not a substitute for professional operational, legal, or medical advice. While we strive to keep the information up to date and correct, Evolve Therapy Services makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability with respect to the website or the information, services, or related graphics contained on the website.
            </p>
            <p>
              Implementation of any strategies, clinical models, or operational transitions described on this Site without a formal consulting agreement is done strictly at your own risk.
            </p>

            <h2>4. Limitations of Liability</h2>
            <p>
              In no event shall Evolve Therapy Services, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, revenue, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Site;</li>
              <li>Any conduct or content of any third party on the Site;</li>
              <li>Any unauthorized access, use, or alteration of your transmissions or content.</li>
            </ul>

            <h2>5. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Evolve Therapy Services and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Site or a breach of these Terms.
            </p>

            <h2>6. Revisions and Errata</h2>
            <p>
              The materials appearing on Evolve Therapy Services' website could include technical, typographical, or photographic errors. Evolve Therapy Services does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice, but we make no commitment to update the materials.
            </p>

            <h2>7. Governing Law & Dispute Resolution</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of Ohio, USA, without regard to its conflict of law provisions. 
            </p>
            <p>
              Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be settled by arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. The place of arbitration shall be Ohio.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
              <p className="m-0">
                <strong>Evolve Therapy Services</strong><br/>
                Legal Department<br/>
                <strong>Email:</strong> <a href="mailto:info@evolvetherapyservices.com">info@evolvetherapyservices.com</a><br/>
                <strong>Phone:</strong> (888) 386-5820
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer data={s} preFooterData={s?.preFooterCta} />
    </main>
  );
}
