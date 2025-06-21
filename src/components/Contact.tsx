import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "7001510950",
      link: "tel:7001510950"
    },
    {
      icon: Mail,
      title: "Email",
      content: "marketingamigo.contact@gmail.com",
      link: "mailto:marketingamigo.contact@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Basirhat Baro Kalibari Para, West Bengal, Pin - 743411",
      link: "https://g.co/kgs/Mx6mKgr"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61566809620338"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/marketing-amigo/"
    },
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/marketingamigo52090"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can grow your business together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-primary transition-colors"
                        target={info.title === "Location" ? "_blank" : undefined}
                        rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Ongoing Support</h4>
                <p className="text-gray-600">
                  Continuous assistance even after project completion
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  May charges applied (T & C)
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
              <CardDescription>We'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounde-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary">
                Send Message
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                *Terms and conditions may apply
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <social.icon className="w-6 h-6 text-white" />
              </a>
            ))}
            <a
              href="https://g.co/kgs/f4h7ncf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-xs font-bold text-primary">G</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
