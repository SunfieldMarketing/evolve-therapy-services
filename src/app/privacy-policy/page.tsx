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
          <div className="prose prose-slate prose-lg max-w-none prose-h2:text-[#0f172a] prose-h2:font-serif prose-h2:text-3xl prose-h2:mt-12 prose-a:text-[#0284c7]">
            <p className="text-sm text-slate-500 uppercase tracking-widest font-black mb-8">Last Updated: June 2026</p>
            
            <h2>1. Introduction</h2>
            <p>
              Evolve Therapy Services ("we," "our," or "us") is deeply committed to protecting the privacy and security of your data. As a premier provider of Long-Term Care (LTC) therapy management and consulting services, we understand the critical nature of confidentiality in the healthcare sector. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (evolvetherapyservices.com), interact with our digital platforms, or engage our corporate services.
            </p>
            <p>
              By accessing our Site or utilizing our Services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>

            <h2>2. Protected Health Information (PHI) & HIPAA Compliance</h2>
            <p>
              Evolve Therapy Services operates in strict adherence to the Health Insurance Portability and Accountability Act (HIPAA) and the Health Information Technology for Economic and Clinical Health (HITECH) Act. In our capacity as a therapy management consultant and partner, we may act as a "Business Associate" to "Covered Entities" (e.g., Skilled Nursing Facilities, LTC operators).
            </p>
            <p>
              Any Protected Health Information (PHI) encountered during our operational oversight, audits, or management services is governed strictly by the Business Associate Agreements (BAAs) we execute with our partners. This website is <strong>not</strong> intended for the transmission or storage of PHI. Please do not submit patient records or sensitive health data through our public contact forms.
            </p>

            <h2>3. Information We Collect</h2>
            <p>
              We collect information to provide better services to our partners and site visitors. The information we may collect includes:
            </p>
            <ul>
              <li><strong>Business & Personal Data:</strong> Personally identifiable information, such as your name, corporate title, facility name, email address, and telephone number that you voluntarily provide when requesting consultations, whitepapers, or interacting with our ChatBot.</li>
              <li><strong>Derivative Data & Analytics:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.</li>
            </ul>

            <h2>4. Use of Your Information</h2>
            <p>
              Accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you to:
            </p>
            <ul>
              <li>Facilitate corporate communication and respond to your B2B service inquiries.</li>
              <li>Deliver targeted industry insights, newsletters, and regulatory updates relevant to LTC operators.</li>
              <li>Administer and optimize our website functionality, security, and user experience.</li>
              <li>Compile anonymous statistical data and analysis for internal operational improvements.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <h2>5. Disclosure of Your Information</h2>
            <p>
              We do not sell, trade, or rent your Personally Identifiable Information to third parties. We may share information we have collected about you in certain situations:
            </p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance (under strict confidentiality agreements).</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>7. State-Specific Privacy Rights (CCPA/CPRA)</h2>
            <p>
              If you are a resident of California or other states with specific privacy frameworks, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us using the information provided below.
            </p>

            <h2>8. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have questions, comments, or concerns about this Privacy Policy or our data practices, please contact our Compliance Officer at:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-6">
              <p className="m-0">
                <strong>Evolve Therapy Services</strong><br/>
                Corporate Compliance Department<br/>
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
