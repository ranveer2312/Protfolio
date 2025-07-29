import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

function App() {
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add animation classes on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />

        <Experience />
        <Projects />
        <Skills />
        <Education />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;