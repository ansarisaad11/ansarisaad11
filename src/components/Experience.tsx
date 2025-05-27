
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      year: "2024",
      title: "Senior Creative Developer",
      company: "The Grand Design Co.",
      description: "Leading digital experiences with the precision of a hotel concierge and the creativity of a filmmaker.",
      color: "wes-coral"
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Moonrise Studios",
      description: "Crafting web applications with the same attention to detail found in vintage luggage labels.",
      color: "wes-mustard"
    },
    {
      year: "2020",
      title: "Frontend Specialist",
      company: "Royal Tenenbaum Tech",
      description: "Building user interfaces that are as symmetrical and delightful as a perfectly framed shot.",
      color: "wes-sage"
    },
    {
      year: "2018",
      title: "Junior Developer",
      company: "Rushmore Academy",
      description: "Where it all began - learning the fundamentals while developing an eye for the extraordinary.",
      color: "wes-pink"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-wes-cream">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-wes-navy mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-wes-burgundy mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-wes-burgundy"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`bg-${exp.color} border-4 border-wes-navy p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  <div className="font-serif text-3xl font-bold text-wes-navy mb-2">
                    {exp.year}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-wes-navy mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="font-sans text-lg text-wes-burgundy mb-3">
                    {exp.company}
                  </h4>
                  <p className="font-sans text-wes-navy leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-wes-burgundy border-4 border-white rounded-full shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
