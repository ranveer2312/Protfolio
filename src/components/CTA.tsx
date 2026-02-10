import React from 'react';
import { Mail, Calendar, Download, Clock, Award, Handshake } from 'lucide-react';

const CTA: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scheduleCall = () => {
    const subject = 'Schedule a Call Request';
    const body = `Hi Ranveer,

I would like to schedule a call with you to discuss potential collaboration opportunities.

Please let me know your available time slots.

Best regards`;
    
    const mailtoLink = `mailto:ranveer30654@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/images/Ranveer_KR_Yadav_Resume.pdf';
    link.download = 'Ranveer_KR_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Response",
      description: "I typically respond within 24 hours"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Work",
      description: "Committed to delivering excellence"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Long-term Partnership",
      description: "Building lasting professional relationships"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight px-4">
            Ready to Work Together?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Let's create something amazing together. I'm always excited to take on 
            new challenges and bring innovative ideas to life.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-4">
          <button
            onClick={scrollToContact}
            className="group flex items-center justify-center space-x-2 bg-white text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-sm sm:text-base w-full sm:w-auto"
          >
            <Mail size={16} className="sm:w-5 sm:h-5" />
            <span>Get In Touch</span>
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              →
            </div>
          </button>

          <button
            onClick={scheduleCall}
            className="group flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
          >
            <Calendar size={16} className="sm:w-5 sm:h-5" />
            <span>Schedule a Call</span>
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              →
            </div>
          </button>

          <button
            onClick={downloadResume}
            className="group flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-bold transition-all duration-300 hover:scale-105 text-sm sm:text-base w-full sm:w-auto"
          >
            <Download size={16} className="sm:w-5 sm:h-5" />
            <span>Download Resume</span>
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              →
            </div>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2.5 sm:p-3 md:p-4 bg-white/20 rounded-xl text-white">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' })}
                </div>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;