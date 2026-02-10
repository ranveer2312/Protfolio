import React from 'react';
import { Code, Database, Server, Settings, Monitor, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 80 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "ReactJS", level: 92 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 93 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 82 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "REST APIs", level: 88 },
        { name: "JWT", level: 85 },
        { name: "Bcrypt", level: 83 }
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 88 },
        { name: "Database Design", level: 85 },
        { name: "Query Optimization", level: 80 }
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 87 },
        { name: "Docker", level: 75 },
        { name: "GitHub Actions", level: 73 }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Development Tools",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 90 },
        { name: "Postman", level: 88 },
        { name: "Swagger", level: 85 }
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-4 sm:mb-6">
            <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                  <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2 sm:mb-3">
                        <span className="font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 sm:h-3 overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 px-4">
            Additional Technologies & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
            {[
              "REST API Development", "Authentication & Security", "Agile Methodology", "Problem Solving",
              "Server Administration", "Application Deployment", "System Design", "Team Collaboration"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-white to-blue-50 dark:from-slate-800 dark:to-blue-900/30 text-slate-800 dark:text-slate-200 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
