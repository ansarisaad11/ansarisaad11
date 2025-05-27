
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-wes-pink to-wes-cream flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-background-pattern"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-8 animate-fade-in">
        <div className="border-4 border-wes-burgundy bg-white/80 backdrop-blur-sm p-12 shadow-2xl">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-wes-navy mb-6 leading-tight">
            Portfolio
          </h1>
          <div className="w-24 h-1 bg-wes-burgundy mx-auto mb-6"></div>
          <p className="font-sans text-xl md:text-2xl text-wes-navy font-light max-w-2xl mx-auto leading-relaxed">
            A carefully curated collection of work, presented with the distinctive charm and symmetrical precision of a Wes Anderson film.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-3 h-3 bg-wes-coral rounded-full"></div>
            <div className="w-3 h-3 bg-wes-mustard rounded-full"></div>
            <div className="w-3 h-3 bg-wes-sage rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-wes-burgundy rounded-full flex justify-center">
          <div className="w-1 h-3 bg-wes-burgundy rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
