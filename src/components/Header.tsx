import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Mail, User } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Rana Ranveer
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-xl mt-2 shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-3 rounded-xl w-full justify-center font-medium transition-all duration-300 shadow-lg"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;