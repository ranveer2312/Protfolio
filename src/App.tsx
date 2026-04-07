import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
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
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918539841479?text=Hi%20Ranveer%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.49 2.031 7.8L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.765-1.853l-.485-.287-5.004 1.192 1.27-4.87-.317-.5A13.226 13.226 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.323s1.428 3.854 1.627 4.12c.2.266 2.81 4.29 6.808 6.018.951.41 1.694.655 2.272.839.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.93.332-1.727.232-1.892-.099-.165-.365-.265-.763-.464z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;