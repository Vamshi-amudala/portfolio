import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Job Portal Application',
      description: 'A comprehensive job portal platform with role-based authentication and secure user management.',
      longDescription: 'Built a full-featured job portal application using Java and Spring Boot. The platform includes secure user authentication with Spring Security, role-based access control for employers and job seekers, RESTful APIs for seamless data exchange, and interactive user dashboards. The application features job posting, application tracking, and user profile management capabilities.',
      techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST API'],
      github: 'https://github.com/Vamshi-amudala/jobPortal_project',
      features: [
        'Role-based access control for employers and job seekers',
        'Secure authentication and authorization with Spring Security',
        'RESTful APIs for efficient data management',
        'Interactive user dashboards',
        'Job posting and application tracking system'
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'VoteWise – Secure Online Voting System',
      description: 'An innovative voting platform ensuring security and anonymity with real-time result reporting.',
      longDescription: 'Developed a secure online voting system with advanced security features including OTP-based authentication for voter verification, anonymous voting mechanisms to ensure privacy, real-time result reporting and analytics, and robust data encryption. The system is designed to handle large-scale elections while maintaining security and transparency.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'OTP Authentication', 'Security'],
      github: '#',
      features: [
        'OTP-based voter authentication',
        'Anonymous voting with privacy protection',
        'Real-time result reporting and analytics',
        'Secure data encryption and storage',
        'Scalable architecture for large-scale elections'
      ],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Health Tracker',
      description: 'A comprehensive health monitoring application with Python Flask backend and interactive frontend.',
      longDescription: 'Created a health tracking application using Python Flask for the backend with MySQL database integration. The application features an interactive frontend UI for health data visualization, user profile management, health metrics tracking, and data analytics. The system allows users to monitor various health parameters and track their wellness journey over time.',
      techStack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/Vamshi-amudala/project/tree/main/health_tracker',
      features: [
        'Interactive health data visualization',
        'Personal health metrics tracking',
        'User profile and preferences management',
        'Health analytics and reporting',
        'Responsive web interface'
      ],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg opacity-90 mb-4 lg:mb-0">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </a>
                    )}
                    
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                    >
                      {expandedProject === index ? (
                        <>
                          <ChevronUp className="h-5 w-5 mr-2" />
                          Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-5 w-5 mr-2" />
                          More
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === index && (
                  <div className="space-y-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Project Overview
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <a
            href="https://github.com/Vamshi-amudala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;