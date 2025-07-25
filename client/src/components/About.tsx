import React from 'react';
import { GraduationCap, MapPin, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Java Full Stack Developer with a strong foundation in backend technologies and modern frontend frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a dedicated Java Full Stack Developer with a passion for creating robust backend systems and intuitive user interfaces. My journey in technology is driven by curiosity and a commitment to delivering high-quality solutions that make a real-world impact.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With expertise in Java, Spring Boot, and modern web technologies, I enjoy tackling complex challenges and transforming ideas into functional, scalable applications. I believe in writing clean, maintainable code and following best practices in software development.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Currently based in Hyderabad, India</span>
            </div>

            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Passionate about backend development and real-world applications</span>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Education
            </h3>

            <div className="space-y-4">
              {/* MCA */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Aurora's PG College
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      2023 – 2025
                    </p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
                    <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>

              {/* B.Sc */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      B.Sc Computer Science
                    </h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      Govt. Arts & Science College, Kamareddy
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      2020 – 2023 • CGPA: 8.01
                    </p>
                  </div>
                  <div className="bg-emerald-100 dark:bg-emerald-900 p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;