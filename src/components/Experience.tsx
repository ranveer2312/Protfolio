import React from 'react';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const calculateDuration = (startDate: string) => {
    const start = new Date(startDate);
    const now = new Date();
    const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0 && remainingMonths > 0) {
      return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else {
      return `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
  };

  const experiences = [
    {
      company: "Ni and Sons Wiring Solutions Pvt. Ltd.",
      position: "Web Developer & Server Administrator",
      startDate: "2024-11-24",
      duration: `November 2024 – Present (${calculateDuration("2024-11-24")})`,
      location: "Bengaluru, Karnataka",
      description: "Handling company server management, application deployment, and uptime monitoring. Developing and maintaining the official company website. Working on backend logic, API integrations, and database operations. Troubleshooting system, application, and server-related issues. Providing technical support to ensure smooth internal system operations.",
      technologies: ["ReactJS", "Spring Boot", "MySQL", "Server Management", "REST APIs", "Git", "Application Deployment"],
      isCurrentRole: true,
      companyType: "Wiring Solutions"
    },
    {
      company: "Tiranga Aerospace",
      position: "Java Full Stack Developer",
      startDate: "2024-05-05",
      duration: "May 2024 – November 2024",
      location: "Bengaluru, Karnataka",
      description: "Developed full-stack e-commerce and HR management applications using ReactJS, Spring Boot, and MySQL. Built and integrated RESTful APIs and implemented responsive front-end designs. Used Git for version control and collaborated in an agile development environment. Practiced SDLC phases from planning to deployment.",
      technologies: ["ReactJS", "Spring Boot", "MySQL", "REST APIs", "Git", "Agile", "SDLC"],
      isCurrentRole: false,
      companyType: "Aerospace Technology"
    }
  ];

  return (
    <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 px-6 py-3 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-6">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Career Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Professional <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Building expertise across full-stack development, server administration, and modern web technologies
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 sm:p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-2">
                        {exp.companyType}
                      </p>
                      <p className="text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {exp.position}
                      </p>
                    </div>
                  </div>
                  
                  {exp.isCurrentRole && (
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-bold border border-green-200 dark:border-green-700/50 shadow-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Current Role
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700/50 px-4 py-2 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700/50 px-4 py-2 rounded-lg">
                    <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-700/30 dark:to-blue-900/10 rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-700 dark:to-blue-900/30 text-slate-800 dark:text-slate-200 rounded-lg text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-600 hover:scale-105 hover:shadow-md transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900/20 rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
                <Briefcase className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">Career Progression</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Growing Expertise in Modern Technologies
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Progressive experience in full-stack development and server administration. Currently contributing to enterprise wiring solutions 
                while continuously expanding expertise in modern web technologies, server infrastructure management, and scalable application development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;