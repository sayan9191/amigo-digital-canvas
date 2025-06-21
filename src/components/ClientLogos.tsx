
import React from 'react';

const ClientLogos = () => {
  const clientLogos = [
    { name: "Rashna", image: "/lovable-uploads/cb309d42-e368-48a4-b1d7-40c260f219e1.png" },
    { name: "Pet Paradise", image: "/lovable-uploads/d3d52f60-465f-4ee4-ad67-af5036823cd4.png" },
    { name: "Gold Mark", image: "/lovable-uploads/64d1de5b-047b-4377-b85f-84cbdfbab1cb.png" },
    { name: "Arun Ice Cream", image: "/lovable-uploads/2b032308-3630-4bcd-aa70-2a14297410ed.png" },
    { name: "Belly Chuckles Bistro", image: "/lovable-uploads/1f15527e-6acb-467f-b37e-872a51e2ec7f.png" },
    { name: "Green Leaf Restaurant", image: "/lovable-uploads/50c342f3-ab32-46f6-86f1-ad3bd7763939.png" },
    { name: "Sunshine Creation", image: "/lovable-uploads/36b6b6e4-d25b-4476-99bf-c0901add4f27.png" },
    { name: "Senco Gold & Diamonds", image: "/lovable-uploads/0523ad61-8f3d-4000-bc18-3e1de5cd327d.png" },
    { name: "Bhooter Raja Bengali Restaurant", image: "/lovable-uploads/c2c776ec-d9ec-4842-b775-8d76fc3b0f02.png" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Welcome to Marketing Amigo
          </h2>
          <p className="text-lg text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted by businesses across various industries
          </p>
        </div>

        {/* Moving logos container */}
        <div className="relative">
          <div className="flex animate-scroll-left-fast space-x-8">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={client.image} 
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white">100+</h3>
            <p className="text-white/90">Projects Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
