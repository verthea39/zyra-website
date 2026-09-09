import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, FileText, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container grid custom-grid-4 gap-8">
        <div className="footer-brand flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-white.png" alt="Zyra Logo" className="footer-logo" />
          </Link>
          <p className="text-secondary mb-4">
            Your trusted partner for all corporate and individual documentation services in the UAE. 
            Fast, reliable, and professional.
          </p>
          <div className="social-links flex items-center gap-4">
            <a href="#" className="social-icon flex items-center justify-center min-w-[44px] min-h-[44px]" aria-label="Website"><Globe size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/" className="block py-2">Home</Link></li>
            <li><Link href="/about" className="block py-2">About Us</Link></li>
            <li><Link href="/services" className="block py-2">Services</Link></li>
            <li><Link href="/contact" className="block py-2">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/services" className="block py-2">Visa Processing</Link></li>
            <li><Link href="/services" className="block py-2">PRO Services</Link></li>
            <li><Link href="/services" className="block py-2">Business Setup</Link></li>
            <li><Link href="/services" className="block py-2">Document Attestation</Link></li>
            <li><Link href="/services" className="block py-2">Emirates ID</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-2">
              <MapPin size={20} className="text-white mt-1 shrink-0" />
              <span>Burj Nahar Mall - Al Muteena, Deira, Dubai</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-white shrink-0" />
              <span>+971 54 782 4637 / +971 50 722 8583</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-white shrink-0" />
              <span>zyrabusinesshub@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Globe size={20} className="text-white shrink-0" />
              <span>zyrabusinesshub.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container flex items-center justify-between">
          <p>&copy; {currentYear} Zyra Documentation Service. All rights reserved.</p>
          <div className="footer-legal flex gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
