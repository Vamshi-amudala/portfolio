import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Hero Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Vamshi</span>
              <span className="block text-blue-600 dark:text-blue-400">Amudala</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              <span className="font-medium">Java Full Stack Developer</span>
              <span className="block text-lg mt-2">📍 Hyderabad, India</span>
            </div>

            <p className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-200 mb-12 animate-pulse">
              "Crafting Scalable Backends & Elegant Interfaces"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="https://www.linkedin.com/in/vamshi-amudala-b9296a229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              
              <a
                href="https://github.com/Vamshi-amudala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>

              <a
                href="/VAMSHI-AMUDALA.pdf"
                download
                className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>

            </div>

            {/* Scroll Indicator */}
            <button
              onClick={() => scrollToSection('#about')}
              className="animate-bounce inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;