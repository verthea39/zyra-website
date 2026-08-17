import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container grid grid-cols-4 gap-8">
        <div className="footer-brand flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo-white.png`} alt="Zyra Logo" className="footer-logo" />
          </Link>
          <p className="text-secondary mb-4">
            Your trusted partner for all corporate and individual documentation services in the UAE. 
            Fast, reliable, and professional.
          </p>
          <div className="social-links flex items-center gap-4">
            <a href="#" className="social-icon" aria-label="Website"><Globe size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/services">Visa Processing</Link></li>
            <li><Link to="/services">PRO Services</Link></li>
            <li><Link to="/services">Business Setup</Link></li>
            <li><Link to="/services">Document Attestation</Link></li>
            <li><Link to="/services">Emirates ID</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-2">
              <MapPin size={20} className="text-accent mt-1 shrink-0" />
              <span>Burj Nahar Mall - Al Muteena, Deira, Dubai</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-accent shrink-0" />
              <span>+971 54 782 4637 / +971 50 722 8583</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-accent shrink-0" />
              <span>zyrabusinesshub@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={20} className="text-accent shrink-0" />
              <span>zyrabusinesshub.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container flex items-center justify-between">
          <p>&copy; {currentYear} Zyra Documentation Service. All rights reserved.</p>
          <div className="footer-legal flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
