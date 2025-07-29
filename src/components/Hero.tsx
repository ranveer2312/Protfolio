import React from 'react';
import { Download, Mail, MapPin, Linkedin, Github, ArrowRight, Star, Award, Code, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/images/Ranveer_KR_Yadav_Resume.pdf';
    link.download = 'Ranveer_KR_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/30 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{fontFamily: 'Inter, system-ui, sans-serif'}}
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Professional Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 px-6 py-3 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Professional Developer</span>
          </div>



          {/* Enhanced Headings */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
            <span className="block">Rana Ranveer</span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Kumar Yadav</span>
          </h1>

          <div className="mb-8">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Full Stack Developer</span>
            </p>
            <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-bold">
              Enterprise Solutions • Modern Architecture • Scalable Systems
            </p>
          </div>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-medium max-w-5xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions with cutting-edge technologies.
            <br className="hidden sm:block" />
            <span className="text-slate-500 dark:text-slate-500 text-lg sm:text-xl">Specializing in Java, Spring Boot, React.js & Cloud Architecture</span>
          </p>

          {/* Professional Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">5+</div>
              <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">4+</div>
              <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">Months Experience</div>
            </div>
            <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">100%</div>
              <div className="text-base text-slate-600 dark:text-slate-400 font-semibold">Client Satisfaction</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 mb-12">
            <MapPin size={18} className="text-blue-600 dark:text-blue-400" />
            <span className="font-semibold">Bengaluru, Karnataka, India</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></span>
            <span className="text-green-600 dark:text-green-400 font-medium">Available</span>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={handleDownloadResume}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={22} className="relative z-10" />
              <span className="relative z-10 text-lg">Download Resume</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg hover:shadow-xl"
            >
              <Mail size={22} />
              <span className="text-lg">Let's Connect</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/rana-ranveer-kumar-yadav-092a72252"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-4 bg-white/70 dark:bg-slate-800/70 hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
            >
              <Linkedin size={24} />
              <span className="font-semibold hidden sm:block">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ranveer2312"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-4 bg-white/70 dark:bg-slate-800/70 hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-white rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
            >
              <Github size={24} />
              <span className="font-semibold hidden sm:block">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
