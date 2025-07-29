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
    <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to Work Together?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Let's create something amazing together. I'm always excited to take on 
            new challenges and bring innovative ideas to life.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button
            onClick={scrollToContact}
            className="group flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              →
            </div>
          </button>

          <button
            onClick={scheduleCall}
            className="group flex items-center space-x-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
          >
            <Calendar size={20} />
            <span>Schedule a Call</span>
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              →
            </div>
          </button>

          <button
            onClick={downloadResume}
            className="group flex items-center space-x-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
          >
            <Download size={20} />
            <span>Download Resume</span>
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              →
            </div>
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-2xl text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed">
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