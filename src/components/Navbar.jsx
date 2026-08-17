import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#070B14]/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center font-bold text-slate-950 text-xl shadow-md shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
            Z
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            ZYRA<span className="text-amber-400">.</span>
          </span>
        </Link>

        {/* Right Side: Nav & CTA */}
        <div className="flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`font-medium transition-colors ${isActive(link.path) ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}
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
              to="/contact" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20"
            >
              Get a Quote
            </Link>
            
            <button 
              className="md:hidden text-slate-300 hover:text-white p-2 -mr-2 flex items-center justify-center min-h-[44px] min-w-[44px]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-20 z-40 bg-[#070B14]/98 backdrop-blur-2xl transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <div className="px-6 py-10 flex flex-col gap-6 min-h-[calc(100vh-5rem)]">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-2xl font-semibold tracking-tight transition-colors ${isActive(link.path) ? 'text-amber-400' : 'text-slate-200 hover:text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pt-8 border-t border-slate-800/60 pb-8">
            <Link 
              to="/contact" 
              className="flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-lg text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
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
