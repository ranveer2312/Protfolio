import React from 'react';
import { Code, Database, Server, Settings, Monitor, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 88 }
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "ReactJS", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "Bootstrap", level: 85 }
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Django", level: 78 },
        { name: "PHP", level: 75 },
        { name: "REST APIs", level: 88 }
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
      title: "DevOps",
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 72 }
      ],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Tools",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 90 },
        { name: "Postman", level: 88 },
        { name: "Git", level: 85 }
      ],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-2"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Additional Technologies & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Machine Learning", "IoT Development", "Data Science", "Microservices",
              "System Design", "Agile Methodology", "Problem Solving", "Team Leadership"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-800 dark:text-blue-200 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200 dark:border-blue-800"
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