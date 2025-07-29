import React, { useEffect, useState } from 'react';
import { Code2, Users, Award, Coffee } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: <Code2 className="w-6 h-6" />,
      value: 50,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-blue-600 to-indigo-600'
    },

    {
      icon: <Award className="w-6 h-6" />,
      value: 4,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      value: 1000,
      suffix: '+',
      label: 'Cups of Coffee',
      color: 'from-pink-600 to-red-600'
    }
  ];

  const AnimatedCounter: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span className="text-2xl sm:text-3xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            By the Numbers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A snapshot of my journey and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-white dark:bg-slate-800 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;