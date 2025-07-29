import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Building2, Trophy } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      stream: "Computer Science & Engineering",
      institution: "Engineering College",
      location: "India",
      board: "Vishveshraya Technological University (VTU)",
      duration: "2021 - 2025",
      icon: <GraduationCap className="w-6 h-6" />,
      subjects: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development", "Computer Networks"],
      level: "Undergraduate",
      status: "Completed"
    },
    {
      degree: "Class 12 (Intermediate)",
      stream: "Science Stream (PCM)",
      institution: "Ram Swarath College",
      location: "Tarapur, Bihar",
      board: "Bihar School Examination Board (BSEB)",
      duration: "2019 - 2021",
      icon: <GraduationCap className="w-6 h-6" />,
      subjects: ["Physics", "Chemistry", "Mathematics"],
      level: "Higher Secondary",
      status: "Completed"
    },
    {
      degree: "Class 10 (Matriculation)",
      stream: "General Studies",
      institution: "Krishnanandan Memorial Academy",
      location: "Asarganj, Bihar",
      board: "Bihar School Examination Board (BSEB)",
      duration: "2016 - 2019",
      icon: <BookOpen className="w-6 h-6" />,
      subjects: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
      level: "Secondary",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/20" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-8">
            <Trophy className="w-5 h-5" />
            <span className="font-bold text-sm uppercase tracking-widest">Academic Excellence</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-200 dark:to-indigo-200 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
            Educational Journey
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full mb-8 shadow-lg"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive academic foundation building expertise from core sciences to advanced computer engineering
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => {
            const colors = [
              { bg: 'from-blue-500 to-indigo-600', icon: 'from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30', text: 'text-blue-600 dark:text-blue-400' },
              { bg: 'from-purple-500 to-pink-600', icon: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30', text: 'text-purple-600 dark:text-purple-400' },
              { bg: 'from-emerald-500 to-teal-600', icon: 'from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30', text: 'text-emerald-600 dark:text-emerald-400' }
            ];
            const color = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${color.bg}`}></div>
                
                <div className="p-8 lg:p-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${color.icon} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <div className={color.text}>
                          {education.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300" style={{fontFamily: 'Poppins, sans-serif'}}>
                            {education.degree}
                          </h3>
                          {education.stream && (
                            <p className={`text-lg font-bold ${color.text} mb-2`} style={{fontFamily: 'Inter, sans-serif'}}>
                              {education.stream}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-200 dark:border-green-700/50 shadow-sm">
                            {education.status}
                          </span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                        {education.institution}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-6">
                        <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-700/50 px-3 py-2 rounded-lg">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm font-medium">{education.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-700/50 px-3 py-2 rounded-lg">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{education.duration}</span>
                        </div>
                      </div>
                      
                      <div className={`bg-gradient-to-r ${color.icon} rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                              🏛️ Awarding Body
                            </p>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {education.board}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                              🎓 Qualification Level
                            </p>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                              {education.level} Education
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900/20 rounded-3xl p-10 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
                <Building2 className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">Academic Foundation</span>
              </div>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 mb-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                Excellence in Education
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium" style={{fontFamily: 'Inter, sans-serif'}}>
                This comprehensive educational journey has built a strong foundation combining theoretical excellence 
                with practical application, developing the analytical thinking and technical expertise essential for 
                innovation in software engineering and technology leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;