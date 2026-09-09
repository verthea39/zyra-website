import React from 'react';
import Link from 'next/link';
import { FileSignature, ShieldCheck, Briefcase, Globe, Award, ChevronRight, ArrowRight, CheckCircle2, Clock, FileText } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auhref=format&fit=crop" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container flex flex-col items-center text-center">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-slate-900/60 backdrop-blur-md text-white text-sm font-bold tracking-wide mb-8 shadow-2xl">
            <span className="h-1.5 w-1.5 rounded-full bg-[#99692e] animate-pulse" />
            UAE Corporate & PRO Specialists
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-black tracking-tight text-white leading-[1.15] w-full max-w-4xl mb-8 drop-shadow-xl">
            Your Trusted Partner for <br className="hidden sm:block" />
            <span className="text-[#99692e] drop-shadow-md">
              Documentation Services
            </span> <br className="hidden sm:block" />
            in the UAE
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl px-4 sm:px-0 mb-10">
            We simplify corporate and individual documentation. From Visa Processing and PRO Services to complete Company Formation, experience fast, reliable, and hassle-free solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4">
            <Link href="/services" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-[#99692e] hover:bg-[#b57d38] transition-all duration-200 shadow-[0_0_20px_rgba(153,105,46,0.3)] group">
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-200 shadow-sm">
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-slate-50/30 overflow-hidden">
        <div className="container">
          <div className="text-center mb-10 fade-in-up">
            <span className="text-[#99692e] font-bold uppercase tracking-wider mb-3 block text-sm sm:text-base">Why Choose Us</span>
            <h2 className="heading-2 text-[#0F172A] text-2xl sm:text-4xl md:text-5xl">Excellence in Every Step</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 sm:p-10 text-center rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 cursor-pointer">
              <div className="flex justify-center mb-6 text-[#99692e]">
                <ShieldCheck size={48} className="sm:w-14 sm:h-14" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-xl sm:text-2xl mb-3">Secure & Reliable</h3>
              <p className="text-slate-500 text-sm">Your documents are handled with the utmost security and confidentiality.</p>
            </div>
            <div className="p-8 sm:p-10 text-center rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 cursor-pointer delay-100">
              <div className="flex justify-center mb-6 text-[#99692e]">
                <Award size={48} className="sm:w-14 sm:h-14" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-xl sm:text-2xl mb-3">Expert Team</h3>
              <p className="text-slate-500 text-sm">Years of experience dealing with UAE government authorities and regulations.</p>
            </div>
            <div className="p-8 sm:p-10 text-center rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 cursor-pointer delay-200">
              <div className="flex justify-center mb-6 text-[#99692e]">
                <Globe size={48} className="sm:w-14 sm:h-14" />
              </div>
              <h3 className="font-bold text-[#0F172A] text-xl sm:text-2xl mb-3">Fast Processing</h3>
              <p className="text-slate-500 text-sm">We expedite all processes to save you valuable time and effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="section overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mb-8 text-center md:text-left">
            <div>
              <span className="text-[#99692e] font-bold uppercase tracking-wider mb-2 block text-sm sm:text-base">Our Expertise</span>
              <h2 className="heading-2 text-[#0F172A] text-2xl sm:text-3xl md:text-4xl">Popular Services</h2>
            </div>
            <Link href="/services" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-bold text-white bg-[#0F172A] hover:bg-slate-800 transition-colors shadow-md w-full md:w-auto mt-2 md:mt-0">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="section hero-gradient text-center py-20">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="heading-2 text-white">Ready to streamline your paperwork?</h2>
          <p className="text-lead text-white opacity-90 max-w-2xl">
            Get in touch with our experts today for a free consultation. Let us handle the complexity while you focus on what matters.
          </p>
          <Link href="/contact" className="btn btn-primary mt-4">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
