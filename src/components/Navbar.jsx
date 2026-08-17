import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

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
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="brand flex items-center gap-2">
          <img src={isScrolled ? `${import.meta.env.BASE_URL}logo.png` : `${import.meta.env.BASE_URL}logo-white.png`} alt="Zyra Logo" className="brand-logo" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="container flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            to="/contact" 
            className="btn btn-primary text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
