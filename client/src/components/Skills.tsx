import React from 'react';
import { Coffee, Globe, Server, Database, PenTool as Tool, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: ['Java', 'Python']
    },
    {
      title: 'Frontend Technologies',
      icon: Globe,
      color: 'emerald',
      skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React']
    },
    {
      title: 'Backend Technologies',
      icon: Server,
      color: 'orange',
      skills: ['Spring Boot', 'REST API', 'Node.js','Express.js', 'Flask']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'purple',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools & Others',
      icon: Tool,
      color: 'gray',
      skills: ['Git', 'GitHub', 'Postman', 'Firebase']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
      emerald: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400',
      orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
      gray: 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  const getSkillColor = (categoryColor: string) => {
    const skillColorMap = {
      blue: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-700',
      emerald: 'bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 hover:bg-emerald-200 dark:hover:bg-emerald-700',
      orange: 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-700',
      purple: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700',
      gray: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
    };
    return skillColorMap[categoryColor as keyof typeof skillColorMap] || skillColorMap.gray;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building full-stack applications from conception to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${getColorClasses(category.color)}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-4 ${getColorClasses(category.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 cursor-default ${getSkillColor(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <Coffee className="h-5 w-5 text-amber-600 mr-2" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;