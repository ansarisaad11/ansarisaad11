
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wes-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold mb-2">Portfolio</h3>
            <p className="font-sans text-wes-cream">
              Crafted with the precision of a Wes Anderson film
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <div className="w-3 h-3 bg-wes-coral rounded-full"></div>
            <div className="w-3 h-3 bg-wes-mustard rounded-full"></div>
            <div className="w-3 h-3 bg-wes-sage rounded-full"></div>
            <div className="w-3 h-3 bg-wes-pink rounded-full"></div>
          </div>
          
          <div className="border-t-2 border-wes-burgundy pt-6">
            <p className="font-sans text-sm text-wes-cream">
              © 2024 Portfolio. Every detail meticulously crafted.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
