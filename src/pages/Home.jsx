import React from 'react';
import { Link } from 'react-router-dom';
import { FileSignature, ShieldCheck, Briefcase, Globe, Award, ChevronRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-gradient section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="flex flex-col gap-8 max-w-3xl fade-in-up">
            <span className="text-accent font-bold tracking-wider uppercase">Welcome to Zyra</span>
            <h1 className="heading-1 text-white">
              Your Trusted Partner for <span className="text-accent">Documentation Services</span> in the UAE
            </h1>
            <p className="text-lead text-white opacity-90" style={{ maxWidth: '600px' }}>
              We simplify corporate and individual documentation. From Visa Processing and PRO Services to Company Formation, experience fast, reliable, and hassle-free solutions.
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <Link to="/services" className="btn btn-primary">
                Explore Services <ChevronRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-8 fade-in-up">
            <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Why Choose Us</span>
            <h2 className="heading-2">Excellence in Every Step</h2>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="glass p-8 text-center hover-scale rounded-lg">
              <div className="flex justify-center mb-4 text-accent">
                <ShieldCheck size={48} />
              </div>
              <h3 className="heading-3 mb-2">Secure & Reliable</h3>
              <p className="text-secondary">Your documents are handled with the utmost security and confidentiality.</p>
            </div>
            <div className="glass p-8 text-center hover-scale rounded-lg delay-100">
              <div className="flex justify-center mb-4 text-accent">
                <Award size={48} />
              </div>
              <h3 className="heading-3 mb-2">Expert Team</h3>
              <p className="text-secondary">Years of experience dealing with UAE government authorities and regulations.</p>
            </div>
            <div className="glass p-8 text-center hover-scale rounded-lg delay-200">
              <div className="flex justify-center mb-4 text-accent">
                <Globe size={48} />
              </div>
              <h3 className="heading-3 mb-2">Fast Processing</h3>
              <p className="text-secondary">We expedite all processes to save you valuable time and effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider mb-2 block">Our Expertise</span>
              <h2 className="heading-2">Popular Services</h2>
            </div>
            <Link to="/services" className="btn btn-secondary">View All</Link>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FileSignature size={32} />}
              title="Visa Processing"
              description="Complete assistance for Golden Visas, Employment Visas, Family Sponsorships, and Tourist Visas in the UAE."
            />
            <ServiceCard 
              icon={<Briefcase size={32} />}
              title="Business Setup"
              description="End-to-end solutions for mainland, free zone, and offshore company formation in Dubai and across the UAE."
            />
            <ServiceCard 
              icon={<FileSignature size={32} />}
              title="Document Attestation"
              description="Fast and secure legalization of educational, personal, and commercial documents from all relevant ministries."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section hero-gradient text-center py-20">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="heading-2 text-white">Ready to streamline your paperwork?</h2>
          <p className="text-lead text-white opacity-90 max-w-2xl">
            Get in touch with our experts today for a free consultation. Let us handle the complexity while you focus on what matters.
          </p>
          <Link to="/contact" className="btn btn-primary mt-4">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
