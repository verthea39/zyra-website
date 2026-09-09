import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link = '/services' }) => {
  return (
    <div className="service-card shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3 className="service-title font-bold text-[#0F172A] text-xl sm:text-2xl mt-4">{title}</h3>
      <p className="text-slate-500 text-sm mt-3 mb-6 line-clamp-3">{description}</p>
      <Link href={link} className="service-link flex items-center gap-2 mt-auto group py-3">
        <span className="text-[14px] font-bold text-[#0F172A] tracking-wide">Learn More</span>
        <ArrowRight size={16} className="text-[#0F172A] transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
