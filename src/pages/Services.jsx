import React from 'react';
import { FileSignature, Briefcase, Stamp, Building, Users, Activity } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const allServices = [
    {
      icon: <FileSignature size={32} />,
      title: "Visa Processing",
      description: "Complete assistance for Golden Visas, Employment Visas, Family Sponsorships, Partner Visas, and Tourist Visas in the UAE. We manage the entire lifecycle from application to stamping."
    },
    {
      icon: <Briefcase size={32} />,
      title: "PRO Services",
      description: "Professional outsourced PRO services for companies. We handle trade license renewals, labor quotas, immigration approvals, and all government liaison work."
    },
    {
      icon: <Building size={32} />,
      title: "Business Setup",
      description: "End-to-end solutions for mainland, free zone, and offshore company formation. We guide you in selecting the right jurisdiction and handle all registration formalities."
    },
    {
      icon: <Stamp size={32} />,
      title: "Document Attestation",
      description: "Fast and secure legalization of educational degrees, marriage certificates, birth certificates, and commercial documents from MOFA, embassies, and consulates."
    },
    {
      icon: <Activity size={32} />,
      title: "Medical & Emirates ID",
      description: "Typing and processing for Emirates ID applications, renewals, and medical fitness tests scheduling across all approved typing centers."
    },
    {
      icon: <Users size={32} />,
      title: "Legal Translation",
      description: "Certified legal translation services for all official documents recognized by UAE courts, ministries, and government departments."
    }
  ];

  return (
    <div className="services-page pt-24 pb-16">
      {/* Header */}
      <section className="bg-white py-16 mb-12 border-b border-gray-100">
        <div className="container text-center">
          <h1 className="heading-1 mb-4">Our <span className="text-accent">Services</span></h1>
          <p className="text-lead max-w-2xl mx-auto">
            Comprehensive documentation and PRO solutions tailored for individuals and corporations in the UAE.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div className={`fade-in-up delay-${(index % 3) * 100}`} key={index}>
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link="/contact"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
