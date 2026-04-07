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

const calculateExperienceLabel = () => {
  const start = new Date('2025-05-05');
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  return years > 0 ? `${years}+ Years Experience` : `${months}+ Months Experience`;
};

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
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-slate-900" itemScope itemType="https://schema.org/Person">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">About Rana Ranveer Kumar Yadav</h2>
          <div className="w-12 sm:w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            <span itemProp="name">Rana Ranveer Kumar Yadav</span> - <span itemProp="jobTitle">Java Full Stack Developer</span> specializing in scalable web applications and modern development practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 sm:gap-8 items-stretch">
          {/* Left: Profile Card */}
          <div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 h-full flex flex-col shadow-md">
              <div className="text-center mb-6">
                <img
                  src="/images/profile.jpg"
                  alt="Rana Ranveer Kumar Yadav - Java Full Stack Developer Profile Picture"
                  className="w-full h-auto rounded-xl mx-auto mb-4 object-cover shadow-lg border border-slate-300"
                  itemProp="image"
                />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1" itemProp="name">
                  Rana Ranveer Kumar Yadav
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4" itemProp="jobTitle">
                  Java Full Stack Developer
                </p>
              </div>

              <div className="space-y-3 mb-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Building className="w-5 h-5 text-blue-600" />
                  <div itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                    <p className="font-medium" itemProp="name">Ni and Sons Wiring Solutions Pvt. Ltd.</p>
                    <p className="text-sm text-slate-500">Web Developer & Server Administrator</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>
                    <span itemProp="addressLocality">Bengaluru</span>, <span itemProp="addressRegion">Karnataka</span>, <span itemProp="addressCountry">India</span>
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>{calculateExperienceLabel()}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span itemProp="alumniOf">Computer Science Engineering</span>
                </div>
              </div>

              <div className="text-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-600 mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-1">10+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-blue-600" />
                  Technical Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React.js", "MySQL", "REST APIs"].map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800"
                      itemProp="knowsAbout"
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
            <article className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Executive Summary: Rana Ranveer Kumar Yadav - Java Full Stack Developer
              </h3>
              <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed" itemProp="description">
                <p>
                  Results-driven and detail-oriented <strong className="text-slate-900 dark:text-white">Computer Science graduate</strong> with hands-on experience in full stack web development, including <strong className="text-blue-600">Java, ReactJS, Spring Boot, JavaScript, and MySQL</strong>.
                </p>
                <p>
                  Currently working as a <strong>Web Developer and Server Administrator</strong> at Ni and Sons Wiring Solutions Pvt. Ltd, developing scalable web applications, managing server infrastructure, and deploying websites. Experienced in frontend and backend development, database integration, and building user-centric applications. Skilled in REST API development, version control, and delivering efficient, maintainable software solutions.
                </p>
              </div>
            </article>

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
