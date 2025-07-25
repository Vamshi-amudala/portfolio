import React from 'react';
import { Building, Calendar, Award, Code2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Training
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional development and hands-on training in full-stack Java development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-8 bottom-8 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {/* Experience Item */}
            <div className="relative flex items-center mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-gray-800 rounded-full shadow-lg"></div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-xl mr-4">
                        <Building className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Capgemini's Edubridge Digital Academy
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          Java Full Stack Development Training
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    <span>Completed: June 23, 2025</span>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Completed comprehensive full-stack Java development training program focusing on industry-standard practices and modern development methodologies.
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Trained in full-stack Java development with hands-on experience
                        </li>
                        <li className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Built real-time applications using Spring Boot and modern frameworks
                        </li>
                        <li className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Gained expertise in RESTful API development and database integration
                        </li>
                        <li className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Learned industry best practices and agile development methodologies
                        </li>
                      </ul>
                    </div>

                    {/* Technologies Covered */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Code2 className="h-5 w-5 mr-2 text-emerald-500" />
                        Technologies Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'MySQL', 'REST APIs', 'Frontend Technologies'].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
              <Building className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Open to new opportunities and collaborations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;