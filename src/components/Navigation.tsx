
import React from 'react';

const Navigation = () => {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#games', label: 'Games' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wes-cream/90 backdrop-blur-sm border-b-2 border-wes-burgundy">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="font-sans text-sm font-medium text-wes-navy hover:text-wes-burgundy transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-wes-burgundy transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
