import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in full-stack development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Certification Card */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-600">
            {/* Certificate Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-4 rounded-2xl mr-6">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">
                        Java Full Stack Development
                      </h3>
                      <p className="text-xl opacity-90">
                        Edubridge Digital Academy
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Certification Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Certification Overview
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Comprehensive certification in Java Full Stack Development covering modern web development practices, 
                      enterprise-level application development, and industry-standard tools and technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Certification Details
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Issued by:</span>
                        <span className="text-gray-900 dark:text-white font-medium">Edubridge Digital Academy</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                        <span className="text-gray-900 dark:text-white font-medium">6 Months Intensive Program</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Focus Area:</span>
                        <span className="text-gray-900 dark:text-white font-medium">Full Stack Java Development</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Covered */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Skills & Technologies Covered
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Backend Development</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs'].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Frontend Development</h5>
                      <div className="flex flex-wrap gap-2">
                        {['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Database & Tools</h5>
                      <div className="flex flex-wrap gap-2">
                        {['MySQL', 'Git', 'Postman', 'Maven', 'Agile'].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Highlights */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Real-time Projects</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Course Completion</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Technologies Mastered</div>
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

export default Certifications;