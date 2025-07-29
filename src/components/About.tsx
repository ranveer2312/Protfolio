import React from 'react';
import {
  Code,
  Database,
  Cloud,
  Brain,
  Award,
  MapPin,
  Calendar,
  Building,
  GraduationCap
} from 'lucide-react';

const About: React.FC = () => {
  const coreCompetencies = [
    {
      category: "Backend Development",
      skills: "Java, Spring Boot, Spring Data JPA, REST APIs"
    },
    {
      category: "Frontend Development",
      skills: "React.js, HTML5, CSS3, JavaScript (ES6+)"
    },
    {
      category: "Database Management",
      skills: "MySQL, SQL optimization, ER modeling"
    },
    {
      category: "Tools & Technologies",
      skills: "Git, Maven, Postman, VSCode, IntelliJ"
    },
    {
      category: "Dev Practices",
      skills: "Agile/Scrum, CI/CD (basic), Test-Driven Development (TDD)"
    }
  ];

  const expertise = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Full Stack Development",
      description: "Spring Boot, React.js, RESTful APIs"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Database Management",
      description: "MySQL, SQL optimization, ER modeling"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "DevOps & Tools",
      description: "Git, Maven, CI/CD, Agile practices"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Problem Solving",
      description: "Business requirements, TDD, Clean code"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Java Full Stack Developer specializing in scalable web applications and modern development practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-stretch">
          {/* Left: Profile Card */}
          <div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 h-full flex flex-col shadow-md">
              <div className="text-center mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Rana Ranveer Kumar Yadav"
                  className="w-full h-auto rounded-xl mx-auto mb-4 object-cover shadow-lg border border-slate-300"
                />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Rana Ranveer Kumar Yadav
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">
                  Java Full Stack Developer
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Building className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Tiranga Aerospace</p>
                    <p className="text-sm text-slate-500">Web Development Trainee</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>4+ Months Experience</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span>Computer Science Engineering</span>
                </div>
              </div>

              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-600 mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-blue-600" />
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React.js", "MySQL", "REST APIs"].map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Executive Summary, Core Competencies, and Technical Expertise */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Executive Summary: Java Full Stack Developer
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p>
                  Results-driven and detail-oriented <strong className="text-slate-900 dark:text-white">Java Full Stack Developer</strong> with
                  strong expertise in building scalable web applications using <strong className="text-blue-600">Spring Boot, MySQL, and React</strong>.
                </p>
                <p>
                  Skilled in building clean REST APIs, integrating frontend/backend services, and solving real-world business problems
                  through clean, testable code.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-md">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Core Competencies</h4>
              <div className="space-y-4">
                {coreCompetencies.map((competency, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center border-l-4 border-blue-600 pl-4 py-2">
                    <div className="font-semibold text-slate-900 dark:text-white sm:w-48 mb-1 sm:mb-0">
                      {competency.category}:
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {competency.skills}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {expertise.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 flex-shrink-0">
                        {skill.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">
                          {skill.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
