import React from 'react';
import { Link } from 'react-router-dom';
import { FileSignature, ShieldCheck, Briefcase, Globe, Award, ChevronRight, ArrowRight, CheckCircle2, Clock, FileText } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-[#070B14] text-white overflow-hidden font-sans pt-24 lg:pt-32 pb-24 lg:pb-32">
        {/* Background Decorative Gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute top-1/3 left-1/4 -z-10 h-[350px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-xs sm:text-sm font-medium tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                UAE Corporate & PRO Specialists
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] break-words w-full">
                Your Trusted Partner for <br className="hidden md:block" />
                <span className="text-amber-400">
                  Documentation Services
                </span> <br className="hidden md:block" />
                in the UAE
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-2xl px-2 sm:px-0">
                We simplify corporate and individual documentation. From Visa Processing and PRO Services to complete Company Formation, experience fast, reliable, and hassle-free solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/services" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all duration-200 shadow-md shadow-amber-500/10 group">
                  Explore Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 hover:text-white transition-all duration-200">
                  Contact Us
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-slate-800/60 w-full text-center lg:text-left">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Hassle-Free Processing</div>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">500+</div>
                  <div className="text-xs text-slate-500 mt-1">Companies Formed</div>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-2xl lg:text-3xl font-bold text-white tracking-tight">24/7</div>
                  <div className="text-xs text-slate-500 mt-1">Expert Assistance</div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Feature Card */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full">
              <div className="relative mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-xl shadow-2xl">
                
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-800">
                  <div>
                    <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400">Services Overview</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5">Streamlined UAE Solutions</div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 shrink-0 ml-2" />
                </div>

                {/* Service List items */}
                <div className="mt-4 sm:mt-5 space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-sm font-semibold text-white truncate">Company Formation</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-2">Mainland, Freezone & Offshore setup</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-sm font-semibold text-white truncate">PRO & Attestation</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-2">Fast ministry & embassy document clearing</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                    <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="text-sm font-semibold text-white truncate">Visa Processing</div>
                      <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5 line-clamp-2">Golden Visa, Investor & Employment visas</div>
                    </div>
                  </div>
                </div>

                {/* Fast turnaround guarantee tag */}
                <div className="mt-4 sm:mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center sm:justify-between gap-2 text-xs text-slate-400 text-center sm:text-left">
                  <span className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> Government Approved
                  </span>
                  <span>Fast Turnaround</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white overflow-hidden px-4 sm:px-0">
        <div className="container">
          <div className="text-center mb-8 fade-in-up">
            <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm sm:text-base">Why Choose Us</span>
            <h2 className="heading-2 text-2xl sm:text-3xl md:text-4xl">Excellence in Every Step</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            <div className="glass p-6 sm:p-8 text-center hover-scale rounded-xl">
              <div className="flex justify-center mb-4 text-accent">
                <ShieldCheck size={40} className="sm:w-12 sm:h-12" />
              </div>
              <h3 className="heading-3 mb-2 text-xl sm:text-2xl">Secure & Reliable</h3>
              <p className="text-secondary text-sm sm:text-base">Your documents are handled with the utmost security and confidentiality.</p>
            </div>
            <div className="glass p-6 sm:p-8 text-center hover-scale rounded-xl delay-100">
              <div className="flex justify-center mb-4 text-accent">
                <Award size={40} className="sm:w-12 sm:h-12" />
              </div>
              <h3 className="heading-3 mb-2 text-xl sm:text-2xl">Expert Team</h3>
              <p className="text-secondary text-sm sm:text-base">Years of experience dealing with UAE government authorities and regulations.</p>
            </div>
            <div className="glass p-6 sm:p-8 text-center hover-scale rounded-xl delay-200">
              <div className="flex justify-center mb-4 text-accent">
                <Globe size={40} className="sm:w-12 sm:h-12" />
              </div>
              <h3 className="heading-3 mb-2 text-xl sm:text-2xl">Fast Processing</h3>
              <p className="text-secondary text-sm sm:text-base">We expedite all processes to save you valuable time and effort.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="section overflow-hidden px-4 sm:px-0">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mb-8 text-center md:text-left">
            <div>
              <span className="text-accent font-bold uppercase tracking-wider mb-2 block text-sm sm:text-base">Our Expertise</span>
              <h2 className="heading-2 text-2xl sm:text-3xl md:text-4xl">Popular Services</h2>
            </div>
            <Link to="/services" className="btn btn-secondary w-full md:w-auto mt-2 md:mt-0">View All</Link>
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
