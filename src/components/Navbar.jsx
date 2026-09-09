'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => pathname === path;
  
  // Determine if the navbar should use light text/logo (only at top of home page)
  const isDarkTheme = pathname === '/' && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="container h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src={`${isDarkTheme ? '/logo-white.png' : '/Zyra Logo.png'}`} 
            alt="Zyra Logo" 
            className="h-14 w-auto object-contain py-1" 
          />
        </Link>

        {/* Right Side: Nav & CTA */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className={`font-medium transition-colors ${
                      isActive(link.path) 
                        ? (isDarkTheme ? 'text-white' : 'text-[#99692e]') 
                        : (isDarkTheme ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-[#99692e]')
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="hidden md:inline-flex items-center justify-center px-8 py-2.5 rounded-full font-bold text-white bg-[#99692e] hover:bg-[#b57d38] transition-colors shadow-md"
            >
              Get a Quote
            </Link>
            
            <button 
              className={`md:hidden p-2 -mr-2 flex items-center justify-center min-h-[44px] min-w-[44px] ${isDarkTheme ? 'text-white' : 'text-slate-600 hover:text-slate-900'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-20 z-40 bg-white/98 backdrop-blur-2xl transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 block translate-y-0' : 'opacity-0 hidden -translate-y-4'}`}>
        <div className="px-6 py-10 flex flex-col gap-6 min-h-[calc(100vh-5rem)]">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`text-2xl font-semibold tracking-tight transition-colors ${isActive(link.path) ? 'text-[#99692e]' : 'text-slate-700 hover:text-[#99692e]'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pt-8 border-t border-slate-200 pb-8">
            <Link 
              href="/contact" 
              className="flex items-center justify-center w-full px-6 py-4 rounded-full font-bold text-lg text-white bg-[#99692e] hover:bg-[#b57d38] transition-colors shadow-lg shadow-[#99692e]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
            <p className="text-center text-sm text-slate-500 mt-4">
              Available 24/7 for expert assistance.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
