
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in your services.%0A%0AName: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/7001510950?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
          <textarea 
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
          ></textarea>
        </div>
        <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary transform hover:scale-105 transition-all duration-200">
          Send Message via WhatsApp
        </Button>
      </form>

      <div className="border-t pt-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Contact</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:7001510950" className="text-gray-600 hover:text-primary transition-colors">7001510950</a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:marketingamigo.contact@gmail.com" className="text-gray-600 hover:text-primary transition-colors">marketingamigo.contact@gmail.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="w-4 h-4 text-primary" />
            <a 
              href="https://g.co/kgs/Mx6mKgr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Basirhat Baro Kalibari Para, West Bengal, Pin - 743411
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
