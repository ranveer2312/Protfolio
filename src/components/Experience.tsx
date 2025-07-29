import React from 'react';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Tiranga Aerospace",
      position: "Web Development Trainee",
      duration: "May 2025 – Present",
      location: "Bengaluru, Karnataka",
      description: "Developing scalable web applications using modern technologies including React.js and Spring Boot. Contributing to aerospace technology solutions with focus on performance optimization and user experience.",
      technologies: ["ReactJS", "Spring Boot", "MySQL", "JavaScript", "REST APIs"],
      isCurrentRole: true,
      companyType: "Aerospace Technology"
    },
    {
      company: "Aitchnu Global Technologies",
      position: "Java Full Stack Intern + DevOps Trainee",
      duration: "2024",
      location: "Remote",
      description: "Gained comprehensive experience in Java full-stack development and DevOps practices. Implemented containerization solutions and automated deployment pipelines for enterprise applications.",
      technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "CI/CD", "Git"],
      isCurrentRole: false,
      companyType: "Global Technology Solutions"
    },
    {
      company: "Aqmenz Automation",
      position: "Machine Learning Project Intern",
      duration: "2024",
      location: "Remote",
      description: "Developed machine learning models for industrial automation processes. Applied data analysis techniques to optimize operational efficiency and implement AI-driven solutions.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "AI", "TensorFlow"],
      isCurrentRole: false,
      companyType: "Industrial Automation"
    },
    {
      company: "Internshala",
      position: "Data Science Intern",
      duration: "2023",
      location: "Remote",
      description: "Completed advanced data science certification with hands-on projects. Built comprehensive data visualization dashboards and applied statistical analysis to business datasets.",
      technologies: ["Python", "Data Science", "Analytics", "Visualization", "Pandas"],
      isCurrentRole: false,
      companyType: "EdTech Platform"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Building expertise across full-stack development, DevOps, and emerging technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left Column - Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        {exp.companyType}
                      </p>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>

                  {exp.isCurrentRole && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Current Position
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column - Details */}
                <div className="lg:w-2/3">
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Career Progression
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Progressive experience across diverse technology domains, from data science foundations to full-stack development 
              and DevOps practices. Currently contributing to aerospace technology solutions while continuously expanding 
              expertise in modern web technologies and cloud-native architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;