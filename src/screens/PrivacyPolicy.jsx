import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page pt-24 pb-16">
      {/* Header */}
      <section className="bg-white py-16 mb-8 border-b border-gray-100">
        <div className="container text-center">
          <h1 className="heading-1 mb-4">Privacy <span className="text-accent">Policy</span></h1>
          <p className="text-lead max-w-2xl mx-auto">
            Last updated: September 9, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section pt-0">
        <div className="container max-w-4xl mx-auto prose prose-lg prose-blue text-gray-700">
          
          <p className="mb-6">
            Zyra Documents Clearance Services FZ-LLC ("Zyra," "we," "us") provides document clearance and PRO services in the United Arab Emirates, including visa and Emirates ID processing, immigration and GDRFA services, MOHRE and labour approvals, trade licence and company formation support, and medical typing and document follow-up. This policy explains what personal data we collect, why, and how you can control it.
          </p>

          <div className="bg-blue-50 border-l-4 border-accent p-4 mb-8 text-sm text-gray-800">
            <strong>Important note before publishing:</strong> Please have this document reviewed by a UAE-qualified lawyer — it is drafted to standard practice, not legal advice.
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Who we are</h2>
          <p className="mb-6">
            Zyra Documents Clearance Services FZ-LLC, trading as ZYRA Documents Clearance Services, licensed by the Ras Al Khaimah Economic Zone Authority (RAKEZ), licence no. 47036317. 
            <br />
            <strong>Registered office:</strong> C2-01, M2 Floor, Burj Nahar Complex, Al Muteena, Deira, Dubai, UAE. 
            <br />
            <strong>Contact:</strong> <a href="mailto:zyrabusinesshub@gmail.com" className="text-accent hover:underline">zyrabusinesshub@gmail.com</a>, <a href="tel:+971547824637" className="text-accent hover:underline">+971 54 782 4637</a>.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">What we collect</h2>
          <p className="mb-4">Because of the nature of our services, the personal data we handle can include:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Contact details</strong> — name, phone number, email address, WhatsApp number.</li>
            <li><strong>Identity documents</strong> — passport copies, Emirates ID, visa pages, and similar government-issued documents you share with us to process your application.</li>
            <li><strong>Immigration and employment information</strong> — visa status, sponsorship details, labour contract or offer letter details, where relevant to the service you've asked for.</li>
            <li><strong>Communications</strong> — messages you send us by WhatsApp, email, phone, or in person, including any documents attached to those messages.</li>
            <li><strong>Payment-related information</strong> for our service fee (we do not store full card numbers).</li>
          </ul>
          <p className="mb-6 italic">We only collect what a specific service requires — we don't ask for documents unrelated to the application you've engaged us for.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How we use it</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To carry out the document clearance or PRO service you've requested, including preparing and submitting your paperwork to the relevant UAE government authority (such as ICP, GDRFA, MOHRE, or the Dubai Department of Economy and Tourism).</li>
            <li>To communicate with you about your application — status updates, requests for missing documents, and quotes.</li>
            <li>To meet our own legal and regulatory obligations as a licensed service provider.</li>
          </ul>
          <p className="mb-6 font-medium">We do not use your documents or data for marketing to third parties, and we do not sell your personal data.</p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How we share it</h2>
          <p className="mb-6">
            We share your information only where it's necessary to deliver the service: with the specific UAE government department your application goes to, and with payment processors where relevant to collecting our service fee. We do not share your data with unrelated third parties.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">WhatsApp and Meta Platforms</h2>
          <p className="mb-6">
            If you contact us or we contact you via WhatsApp, that conversation is carried over Meta's WhatsApp Business Platform. Meta processes message metadata and content as described in <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Meta's own Privacy Policy</a> and <a href="https://www.whatsapp.com/legal/business-data-processing-terms" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WhatsApp Business Data Processing Terms</a> — Zyra does not control how Meta itself processes that data, only how we use the information you send us within that conversation.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">How long we keep it</h2>
          <p className="mb-6">
            We retain your documents and application data for as long as needed to complete your service and to meet our own recordkeeping obligations as a licensed business, after which we delete or anonymise it unless you ask us to remove it sooner (see our <Link href="/data-deletion" className="text-accent hover:underline">Data Deletion Instructions page</Link>).
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Your rights</h2>
          <p className="mb-6">
            Under UAE data protection law, you can ask us to access, correct, or delete the personal data we hold about you, or ask what we're using it for. To do this, contact <a href="mailto:zyrabusinesshub@gmail.com" className="text-accent hover:underline">zyrabusinesshub@gmail.com</a> or <a href="tel:+971547824637" className="text-accent hover:underline">+971 54 782 4637</a>, or use our <Link href="/data-deletion" className="text-accent hover:underline">Data Deletion Instructions page</Link> for a deletion request specifically.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Children</h2>
          <p className="mb-6">
            Our services are directed at adults handling their own or their family's documentation. We don't knowingly collect data from children beyond what's necessary for a dependent visa or sponsorship application submitted by a parent or guardian.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Changes to this policy</h2>
          <p className="mb-6">
            We may update this policy as our services or legal obligations change. The "last updated" date at the top will reflect the most recent revision.
          </p>
          
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
