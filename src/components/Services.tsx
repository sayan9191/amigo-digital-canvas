
import React from 'react';
import { Megaphone, Globe, Palette, TrendingUp, Zap, PenTool, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing Services",
      description: "Grow your online presence with our targeted marketing services",
      features: [
        "Social Media Growth & Engagement",
        "SEO & Google My Business Optimization", 
        "WhatsApp Marketing",
        "Email Marketing Campaigns",
        "Online Reputation Management"
      ]
    },
    {
      icon: Globe,
      title: "Website Development & Management", 
      description: "We build professional, mobile-responsive websites designed to convert",
      features: [
        "Complete Website Design",
        "Business Web Design (WordPress)",
        "Sales Funnel Marketing",
        "YouTube Monetization",
        "Website Management & Maintenance"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Management",
      description: "Complete e-commerce solutions to grow your online business",
      features: [
        "E-commerce Website Development (Shopify)",
        "Online Store Management",
        "Product Listing & Optimization",
        "Payment Gateway Integration",
        "Order Management & Support"
      ]
    },
    {
      icon: Palette,
      title: "Branding & Graphics Design",
      description: "Create a memorable brand identity that stands out",
      features: [
        "Brand Guide & Design",
        "Logo, Icon, and Branding Collateral", 
        "Whiteboard Animation",
        "Content Creation & Marketing",
        "Promotional Animated Video Creation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Lead Generation & Business Growth Services",
      description: "Drive qualified leads and accelerate business growth",
      features: [
        "B2B & B2C Lead Generation",
        "Optimize & Automate Lead Conversion",
        "Influencer Marketing",
        "Event Marketing", 
        "Local Business Promotion"
      ]
    },
    {
      icon: Zap,
      title: "Ads, Campaigns, Execution",
      description: "Strategic advertising campaigns that deliver results",
      features: [
        "Google Ads & Pay-Per-Click Campaigns",
        "Social Media Advertising",
        "Campaign Strategy & Execution",
        "Performance Optimization",
        "ROI Tracking & Analytics"
      ]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging content that connects with your audience",
      features: [
        "Writing, Blogging & Content Marketing",
        "Social Media Content Creation",
        "Video Content Production",
        "Graphic Design & Visual Content",
        "Content Strategy & Planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-light rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-primary rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8 animate-scale-in"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We offer comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg transform hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timely Delivery and Ongoing Support section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-white border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold mb-4">Timely Delivery</h4>
              <p className="text-white/90">
                We ensure all projects are completed on time with the highest quality standards
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white border border-gray-200 shadow-lg">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Ongoing Support</h4>
              <p className="text-gray-600 mb-2">
                Continuous assistance even after project completion
              </p>
              <p className="text-xs text-gray-500">
                May charges applied (T & C)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
