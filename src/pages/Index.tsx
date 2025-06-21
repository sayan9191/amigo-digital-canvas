
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import ClientLogos from '@/components/ClientLogos';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AutoPopup from '@/components/AutoPopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <ClientLogos />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <AutoPopup />
    </div>
  );
};

export default Index;
