import Home from '../screens/Home';

export const metadata = {
  title: 'Visa & PRO Services in Deira, Dubai | Zyra',
  description: 'Document clearance and PRO services in Al Muteena, Deira. UAE visa processing, Emirates ID, trade licence and company formation. Written quote upfront.',
};

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zyra Documents Clearance Services",
      "legalName": "Zyra Documents Clearance Services FZ-LLC",
      "url": "https://www.zyrabusinesshub.com/",
      "logo": "https://www.zyrabusinesshub.com/Logo.png",
      "description": "Document clearance and PRO services in Dubai: UAE visa processing, Emirates ID, immigration and GDRFA services, MOHRE labour approvals, trade licence and company formation.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C2-01, M2 Floor, Burj Nahar Complex, Al Muteena",
        "addressLocality": "Deira",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "telephone": "+971547824637",
      "email": "zyrabusinesshub@gmail.com",
      "areaServed": ["Dubai", "Northern Emirates"],
      "knowsLanguage": ["en", "hi", "ml", "ta"],
      "sameAs": [
        "https://www.instagram.com/zyra_business_hub/",
        "https://www.facebook.com/profile.php?id=61593753955318",
        "https://share.google/8OGncxrtDfF5Ubevb"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Zyra Documents Clearance Services | Dubai PRO Services",
      "url": "https://www.zyrabusinesshub.com/",
      "description": "Document clearance and PRO services in Al Muteena, Deira. UAE visa processing, Emirates ID, trade licence and company formation. Written quote upfront.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Zyra Documents Clearance Services",
        "url": "https://www.zyrabusinesshub.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zyra Documents Clearance Services"
      },
      "dateModified": "2026-09-08T00:00:00+04:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a PRO services company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A PRO (Public Relations Officer) services company handles the government-facing paperwork that comes with living or doing business in the UAE — visa processing, Emirates ID, labour approvals, and trade licence transactions — on a client's behalf."
          }
        },
        {
          "@type": "Question",
          "name": "What is GDRFA, and how does Zyra help with it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GDRFA (the General Directorate of Residency and Foreigners Affairs) is the Dubai authority that manages entry permits, visa status changes, and immigration files. We prepare and submit GDRFA paperwork, handle file amendments, and follow up on your behalf."
          }
        },
        {
          "@type": "Question",
          "name": "How do I renew my UAE Emirates ID or visa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Send us your current documents and we'll tell you exactly what's needed, check everything before submission, and handle the ICP Smart Services and GDRFA filing for you."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help sponsor my spouse, parents, or children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — family and dependent sponsorship is one of our core visa services, from the initial application through renewal."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle medical fitness typing and booking for visas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — we book the medical fitness test where required and handle the application typing that goes with it, as part of the visa process."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle staff visas and labour approvals for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — work permits, offer letters, labour contracts, MOHRE quota approvals, and onboarding or cancellation, including bulk processing for teams."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with trade licence renewals and company formation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — mainland and free zone company setup, licence issuance and renewal, activity amendments, share transfers, and licence cancellation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle document attestation or legal translation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not currently. If that changes, we'll update this page — get in touch to check the latest."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my application is rejected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle rejection follow-up directly with the department and let you know what's needed to resolve it — that's part of the service, not an extra step you're left to manage alone."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the process take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the department and your specific case. We'll give you a realistic estimate once we've reviewed your documents — not a fixed promise, since the final timeline is set by the government authority, not us."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We're based in Al Muteena, Deira, and serve clients across Dubai and the northern emirates."
          }
        },
        {
          "@type": "Question",
          "name": "What languages does your team speak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "English, Hindi, Malayalam, and Tamil."
          }
        },
        {
          "@type": "Question",
          "name": "Do you charge before seeing my documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We only quote once we've reviewed your paperwork, and government and service fees are always itemised separately in writing."
          }
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
