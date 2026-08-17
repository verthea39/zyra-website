import React from 'react';
import { Link } from 'react-router-dom';
import { FileSignature, ShieldCheck, Briefcase, Globe, Award, ChevronRight, ArrowRight, CheckCircle2, Clock, FileText } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-[#070B14] text-white overflow-hidden font-sans pt-24 lg:pt-32">
        {/* Background Decorative Gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute top-1/3 left-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-8">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-xs font-medium tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                UAE Corporate & PRO Specialists
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Your Trusted Partner for{' '}
                <span className="text-amber-400">
                  Documentation Services
                </span>{' '}
                in the UAE
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
                We simplify corporate and individual documentation. From Visa Processing and PRO Services to complete Company Formation, experience fast, reliable, and hassle-free solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all duration-200 shadow-md shadow-amber-500/10 group">
                  Explore Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:text-white transition-all duration-200">
                  Contact Us
                </Link>
              </div>

              {/* Trust Metrics */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Hassle-Free Processing</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">500+</div>
                  <div className="text-xs text-slate-500 mt-1">Companies Formed</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">24/7</div>
                  <div className="text-xs text-slate-500 mt-1">Expert Assistance</div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl shadow-2xl">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">Services Overview</div>
                    <div className="text-lg font-bold text-white mt-0.5">Streamlined UAE Solutions</div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                </div>

                {/* Service List items */}
                <div className="mt-5 space-y-3.5">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold text-white">Company Formation</div>
                      <div className="text-xs text-slate-400 mt-0.5">Mainland, Freezone & Offshore setup</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 mt-1" />
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold text-white">PRO & Attestation</div>
                      <div className="text-xs text-slate-400 mt-0.5">Fast ministry & embassy document clearing</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 mt-1" />
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-semibold text-white">Visa Processing</div>
                      <div className="text-xs text-slate-400 mt-0.5">Golden Visa, Investor & Employment visas</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 mt-1" />
                  </div>
                </div>

                {/* Fast turnaround guarantee tag */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Government Approved
                  </span>
                  <span>Fast Turnaround</span>
                </div>
              </div>
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
          <div className="grid custom-grid-3 gap-8 mt-8">
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
          <div className="grid custom-grid-3 gap-8">
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
