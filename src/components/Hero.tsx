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

  const calculateExperience = () => {
    const startDate = new Date('2025-05-05');
    const now = new Date();
    const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0) {
      return `${years}+`;
    } else {
      return `${months}m`;
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/30 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{fontFamily: 'Inter, system-ui, sans-serif'}}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0">
            {/* Badge */}
            <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-600/20 dark:to-indigo-600/20 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-blue-200/50 dark:border-blue-700/50 mb-3 sm:mb-4 md:mb-6 backdrop-blur-sm">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-blue-600 dark:text-blue-400" fill="currentColor" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Available for Immediate Joining</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white mb-2 sm:mb-3 md:mb-4 tracking-tight leading-tight px-2 sm:px-0" style={{fontFamily: 'Poppins, sans-serif'}}>
              Let's Work Together to Create <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Wonders</span> with Us
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 md:mb-8 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              A visionary full-stack developer crafting captivating wonders through Java and Spring Boot. A digital turning imagination into extraordinary reality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 justify-center lg:justify-start px-2 sm:px-0">
              <button
                onClick={() => scrollToSection('#contact')}
                className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl text-xs sm:text-sm md:text-base"
              >
                <span>Let's Talk</span>
                <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="group flex items-center justify-center gap-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg text-xs sm:text-sm md:text-base"
              >
                <span>Download Resume</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-12 max-w-xs sm:max-w-sm mx-auto lg:mx-0 px-2 sm:px-0">
              <div className="text-center lg:text-left p-3 sm:p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2">{calculateExperience()}</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 font-semibold">Experience</div>
              </div>
              <div className="text-center lg:text-left p-3 sm:p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg sm:rounded-xl backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 sm:mb-2">5+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 font-semibold">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <img
                src="/images/ranveer.png"
                alt="Rana Ranveer Kumar Yadav - Full Stack Developer"
                className="w-full h-auto rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
          {/* Location */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-slate-600 dark:text-slate-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
            <MapPin size={12} className="text-blue-600 dark:text-blue-400 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
            <span className="font-semibold">Bengaluru, Karnataka</span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse ml-1"></span>
            <span className="text-green-600 dark:text-green-400 font-bold">Open to Work</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-2 sm:gap-3">
            <a
              href="https://linkedin.com/in/rana-ranveer-kumar-yadav-092a72252"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-2 sm:p-2.5 md:p-3 bg-white/70 dark:bg-slate-800/70 hover:bg-blue-600 text-slate-700 dark:text-slate-300 hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
            >
              <Linkedin size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://github.com/ranveer2312"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-2 sm:p-2.5 md:p-3 bg-white/70 dark:bg-slate-800/70 hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-white rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
            >
              <Github size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
