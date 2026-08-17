import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ ...status, error: null, success: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            phone: formData.phone, 
            message: formData.message 
          }
        ]);

      if (error) throw error;

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ loading: false, error: error.message || 'Something went wrong. Please try again.', success: false });
    }
  };

  return (
    <div className="contact-page pt-24 pb-16">
      <section className="container">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Get In <span className="text-accent">Touch</span></h1>
          <p className="text-lead max-w-2xl mx-auto">
            Have questions about our services? Need a quote? Contact our experts today.
          </p>
        </div>

        <div className="grid custom-grid-2 gap-12 items-start mt-12">
          {/* Contact Information */}
          <div className="contact-info flex flex-col gap-8 fade-in-up">
            <div className="glass p-8 rounded-lg">
              <h3 className="heading-3 mb-6">Contact Information</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Office Location</h4>
                    <p className="text-secondary">Burj Nahar Mall - Al Muteena, Deira, Dubai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                    <p className="text-secondary">+971 54 782 4637<br/>+971 50 722 8583</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Address</h4>
                    <p className="text-secondary">zyrabusinesshub@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="glass-dark p-8 rounded-lg text-center">
              <MessageCircle size={48} className="text-accent mx-auto mb-4" />
              <h3 className="heading-3 text-white mb-2">Need immediate assistance?</h3>
              <p className="text-gray-300 mb-6">Chat with our customer service agents on WhatsApp.</p>
              <a href="https://wa.me/971547824637" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-lg fade-in-up delay-100">
            <h3 className="heading-3 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control" 
                  required 
                  placeholder="John Doe"
                />
              </div>
              <div className="grid custom-grid-2 gap-4">
                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="phone" className="font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control" 
                    required 
                    placeholder="+971 50 123 4567"
                  />
                </div>
              </div>
              <div className="form-group flex flex-col gap-2">
                <label htmlFor="message" className="font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control" 
                  required
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2" disabled={status.loading}>
                {status.loading ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
              
              {status.success && (
                <div className="p-4 mt-2 bg-green-100 text-green-700 rounded-md">
                  Thank you for your message! Our team will contact you shortly.
                </div>
              )}
              {status.error && (
                <div className="p-4 mt-2 bg-red-100 text-red-700 rounded-md">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .form-control {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #E2E8F0;
          border-radius: var(--radius-md);
          background-color: var(--bg-primary);
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .form-control:focus {
          outline: none;
          border-color: var(--accent-color);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Contact;
