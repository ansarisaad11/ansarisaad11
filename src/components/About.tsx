
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-wes-sage">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-wes-navy mb-4">
            About
          </h2>
          <div className="w-16 h-1 bg-wes-burgundy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white border-4 border-wes-forest p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-wes-navy mb-4">
                The Story
              </h3>
              <p className="font-sans text-wes-navy leading-relaxed mb-4">
                Like a character in a carefully orchestrated scene, I approach each project with meticulous attention to detail and an eye for the extraordinary within the ordinary.
              </p>
              <p className="font-sans text-wes-navy leading-relaxed">
                My work is characterized by precision, creativity, and a touch of whimsy that brings projects to life in unexpected ways.
              </p>
            </div>
            
            <div className="bg-wes-cream border-4 border-wes-coral p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-wes-navy mb-4">
                Philosophy
              </h3>
              <p className="font-sans text-wes-navy leading-relaxed">
                "Every detail matters, every frame tells a story, and every project is an opportunity to create something perfectly imperfect."
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border-4 border-wes-mustard p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=500&fit=crop&crop=face"
                alt="Professional headshot"
                className="w-80 h-96 object-cover border-2 border-wes-navy"
              />
              <div className="text-center mt-4 font-sans text-sm text-wes-navy">
                "A portrait in the style of Anderson"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
