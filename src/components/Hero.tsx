
import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/ContactForm';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-white pt-16 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-bounce-slow shadow-lg"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg rotate-45 animate-pulse-slow shadow-lg"></div>
        <div className="absolute top-1/3 left-16 w-16 h-16 bg-gradient-to-br from-green-300 to-teal-400 rounded-full animate-ping shadow-lg"></div>
        
        {/* Floating icons */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-delayed">
          <Zap className="w-10 h-10 text-blue-400 animate-pulse" />
        </div>
        <div className="absolute top-1/2 right-16 animate-float">
          <Target className="w-6 h-6 text-purple-400 animate-pulse" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-16 right-32 w-20 h-20 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full opacity-60 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-gradient-to-r from-indigo-300 to-blue-400 rounded-full opacity-50 animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
            Empowering Your Business
            <span className="block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent animate-pulse">
              Online
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your Partner in Digital Growth - We help you scale digitally with expert marketing strategies, custom websites, and e-commerce solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-scale w-full sm:w-auto"
                >
                  Let's Build Success Together
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center text-primary">Get in Touch</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/7001510950', '_blank')}
            >
              <MessageCircle className="mr-2 w-6 h-6" size={20} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
