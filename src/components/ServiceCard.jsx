import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link = '/services' }) => {
  return (
    <div className="service-card glass hover-scale">
      <div className="service-icon-wrapper">
        {icon}
      </div>
      <h3 className="service-title heading-3">{title}</h3>
      <p className="service-desc text-secondary">{description}</p>
      <Link to={link} className="service-link flex items-center gap-2">
        <span className="font-bold">Learn More</span>
        <ArrowRight size={18} />
      </Link>
    </div>
  );
};

export default ServiceCard;
