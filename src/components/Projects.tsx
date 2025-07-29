import React from 'react';
import { ExternalLink, Github, ShoppingCart, Users, Zap, Leaf, Monitor, Calendar, Award, Lock, Code2 } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Enterprise-grade e-commerce solution with advanced user authentication, comprehensive product catalog, intelligent shopping cart, and secure payment gateway integration.",
      technologies: ["React.js", "Spring Boot", "MySQL", "REST API", "JWT"],
      icon: <ShoppingCart className="w-6 h-6" />,
      features: ["Multi-tier Authentication", "Advanced Product Management", "Smart Shopping Cart", "Secure Payment Gateway"],
      category: "Full Stack Development",
      status: "Production Ready",
      duration: "6 months",
      liveUrl: "https://ecommercewebsite-pi-five.vercel.app/",
      githubUrl: "https://github.com/ranveer2312/Products-Management"
    },
    {
      title: "Enterprise HR Management",
      description: "Scalable human resource management system with comprehensive employee lifecycle management, advanced analytics, and automated workflow processing.",
      technologies: ["Spring Boot", "JavaScript", "MySQL", "Bootstrap", "JPA"],
      icon: <Users className="w-6 h-6" />,
      features: ["Employee Lifecycle Management", "Automated Attendance Tracking", "Advanced Analytics Dashboard", "Custom Report Generation"],
      category: "Enterprise Application",
      status: "Production Ready",
      duration: "4 months",
      liveUrl: "https://idmsproject.vercel.app/",
      githubUrl: "https://github.com/ranveer2312/IDMS"
    },
    {
      title: "IoT Emergency Response System",
      description: "Mission-critical IoT infrastructure for real-time environmental monitoring with cloud-native architecture and automated emergency response protocols.",
      technologies: ["IoT Sensors", "Python", "AWS IoT", "Real-time Analytics", "MQTT"],
      icon: <Zap className="w-6 h-6" />,
      features: ["Real-time Sensor Network", "Cloud-native Architecture", "Automated Alert System", "Predictive Analytics"],
      category: "IoT & Cloud Computing",
      status: "Code Available",
      duration: "8 months",
      githubUrl: "https://github.com/ranveer2312/iot-emergency-system"
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
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Explore my portfolio of enterprise-grade applications, showcasing expertise in full-stack development, 
            cloud architecture, and innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              
              <div className="relative p-8">
                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
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
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide flex items-center">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-2"></div>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
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
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-wide flex items-center">
                    <div className="w-1 h-4 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-2"></div>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-50 dark:from-slate-700 dark:to-blue-900/30 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-600 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-3.5 rounded-xl transition-all duration-300 text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105 group/btn"
                    >
                      <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <div className={`flex-1 flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-bold cursor-default ${
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
                      className="flex items-center justify-center space-x-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-blue-400 dark:hover:border-blue-500 px-5 py-3.5 rounded-xl transition-all duration-300 text-sm font-bold hover:scale-105 group/btn"
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span>Source</span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 border-2 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 px-5 py-3.5 rounded-xl text-sm font-bold cursor-default hover:border-slate-400 dark:hover:border-slate-500 transition-colors duration-200">
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