import React from 'react';
import { ExternalLink, Github, ShoppingCart, Users, Zap, Leaf, Monitor, Calendar, Award, Lock, Code2 } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Integrated Database Management System",
      description: "Role-based HR management system with roles including Admin, Finance Manager, Data Manager, Sales Manager, HR Manager, and Employees. Implemented 6 core modules including Employee Onboarding, Attendance Tracking, Payroll, and Analytics Dashboards.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Spring Boot", "MySQL", "REST API"],
      icon: <Users className="w-6 h-6" />,
      features: ["Role-based Access Control", "Employee Onboarding", "Attendance Tracking", "Payroll Processing", "Analytics Dashboards", "Real-time Data Insights"],
      category: "Enterprise Application",
      status: "Production Ready",
      duration: "6 months",
      liveUrl: "https://idmsproject.vercel.app/",
      githubUrl: "https://github.com/ranveer2312/IDMS"
    },
    {
      title: "E-Commerce Website",
      description: "Complete e-commerce platform with features such as product catalog, shopping cart, secure authentication, and integrated payment. Developed frontend using ReactJS for responsive and interactive user interfaces with Spring Boot REST APIs.",
      technologies: ["React.js", "Spring Boot", "MySQL", "REST API", "JWT", "Payment Integration"],
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Product Catalog", "Shopping Cart", "User Authentication", "Secure Payment Gateway", "Order Management", "Responsive Design"],
      category: "Full Stack Development",
      status: "Production Ready",
      duration: "5 months",
      liveUrl: "https://manvaya.vercel.app/",
      githubUrl: "https://github.com/ranveer2312/ethereal-elegance"
    },
    {
      title: "IoT-Based Emergency Alert System",
      description: "Designed and developed an IoT-based emergency alert system to provide real-time alerts. Integrated cloud services for storing and processing alert data efficiently. Implemented sensor-based automation to detect emergencies and trigger notifications.",
      technologies: ["IoT Sensors", "Cloud Integration", "Real-time Alerts", "Automation", "Data Processing"],
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time Emergency Detection", "Cloud Data Storage", "Automated Notifications", "Sensor Integration", "Alert Processing"],
      category: "IoT & Cloud Computing",
      status: "Code Available",
      duration: "4 months",
      githubUrl: "https://github.com/ranveer2312/iot-emergency-system"
    },
    {
      title: "Code Collaboration Platform",
      description: "Real-time collaborative coding environment with live code sharing, video chat, and synchronized editing for remote development teams.",
      technologies: ["React.js", "Node.js", "Socket.io", "WebRTC", "Monaco Editor", "Express.js"],
      icon: <Code2 className="w-6 h-6" />,
      features: ["Real-time Code Editing", "Video Chat Integration", "Live Code Sharing", "Multi-language Support"],
      category: "Collaboration Platform",
      status: "Code Available",
      duration: "4 months",
      githubUrl: "https://github.com/ranveer2312/code-collab"
    },
    {
      title: "Django Commerce Suite",
      description: "Modular e-commerce framework built with Django, featuring extensible architecture, advanced inventory management, and comprehensive admin interface.",
      technologies: ["Django", "Python", "PostgreSQL", "Redis", "Celery"],
      icon: <Monitor className="w-6 h-6" />,
      features: ["Modular Architecture", "Advanced User Management", "Automated Order Processing", "Comprehensive Admin Panel"],
      category: "Backend Development",
      status: "Code Available",
      duration: "3 months",
      githubUrl: "https://github.com/ranveer2312/django-commerce"
    },
    {
      title: "AgriTech Management Platform",
      description: "Comprehensive agricultural technology solution for precision farming, crop optimization, and supply chain management with data-driven insights.",
      technologies: ["PHP", "MySQL", "JavaScript", "Chart.js", "Bootstrap"],
      icon: <Leaf className="w-6 h-6" />,
      features: ["Precision Crop Tracking", "Intelligent Inventory System", "Farmer Analytics Dashboard", "Automated Report Generation"],
      category: "AgriTech Solution",
      status: "Client Deployed",
      duration: "5 months"
    }
  ];

  return (
    <section id="projects" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 tracking-tight px-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            10+ projects built spanning enterprise applications, full-stack platforms, IoT systems, and more — showcasing expertise in full-stack development, 
            cloud architecture, and innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden backdrop-blur-sm"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-4 sm:p-6 md:p-8">
                {/* Project Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4">
                      <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl sm:rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full">
                            {project.category}
                          </span>
                          <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                            project.status === 'Production Ready' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            project.status === 'In Development' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                            project.status === 'Code Available' ? 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400' :
                            project.status === 'Client Deployed' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                            'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-2"></div>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-slate-600 dark:text-slate-400 flex items-center p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide flex items-center">
                    <div className="w-1 h-4 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-2"></div>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-700 dark:to-blue-900/30 text-slate-800 dark:text-slate-200 rounded-lg sm:rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-600 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105 group/btn"
                    >
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <div className={`flex-1 flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold cursor-default ${
                      project.status === 'In Development' 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white' 
                        : project.status === 'Code Available'
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white'
                        : 'bg-gradient-to-r from-slate-500 to-slate-600 text-white'
                    }`}>
                      {project.status === 'In Development' ? <Monitor size={16} /> : 
                       project.status === 'Code Available' ? <Github size={16} /> : <Lock size={16} />}
                      <span>{
                        project.status === 'In Development' ? 'In Development' :
                        project.status === 'Code Available' ? 'Deployment Pending' :
                        'Enterprise Only'
                      }</span>
                    </div>
                  )}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-blue-400 dark:hover:border-blue-500 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl transition-all duration-300 text-xs sm:text-sm font-bold hover:scale-105 group/btn"
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Source</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 border-2 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold cursor-default hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-200">
                      <Lock size={16} />
                      <span>Proprietary</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;