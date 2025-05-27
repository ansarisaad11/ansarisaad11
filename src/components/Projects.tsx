
import React from 'react';
import { projector } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "The Grand Budapest Website",
      description: "A luxury hotel booking platform with the elegance of a European grand hotel and the functionality of modern hospitality.",
      tech: ["React", "TypeScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      color: "wes-pink"
    },
    {
      title: "Moonrise Kingdom App",
      description: "A whimsical task management application that brings the joy of childhood adventure to everyday productivity.",
      tech: ["Vue.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      color: "wes-mustard"
    },
    {
      title: "Royal Tenenbaums CRM",
      description: "A family business management system with the complexity of family dynamics and the precision of a Swiss watch.",
      tech: ["Angular", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      color: "wes-sage"
    },
    {
      title: "Life Aquatic Dashboard",
      description: "An oceanographic data visualization platform that explores the depths of marine research with submarine-like precision.",
      tech: ["D3.js", "Python", "Flask"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      color: "wes-coral"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-wes-pink">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-wes-navy mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-wes-burgundy mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-${project.color} border-4 border-wes-navy shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <div className="aspect-video overflow-hidden border-b-4 border-wes-navy">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-wes-navy mb-3">
                  {project.title}
                </h3>
                <p className="font-sans text-wes-navy leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-white border-2 border-wes-navy px-3 py-1 text-sm font-sans font-medium text-wes-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center space-x-2 font-sans font-medium text-wes-burgundy hover:text-wes-navy transition-colors duration-300">
                  {/* <projector size={16} /> */}
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
