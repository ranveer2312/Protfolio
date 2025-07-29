import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Rana Ranveer Kumar Yadav
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Full Stack Developer specializing in scalable web applications and modern technology solutions.
            </p>
            
            <div className="space-y-3 mb-6">
              <a href="mailto:ranveer30654@gmail.com" className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>ranveer30654@gmail.com</span>
              </a>
              <a href="tel:+918539841479" className="flex items-center space-x-3 text-slate-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 8539841479</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/rana-ranveer-kumar-yadav-092a72252" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ranveer2312" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-gray-600 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div>Web Development</div>
              <div>Full Stack Solutions</div>
              <div>API Development</div>
              <div>Database Design</div>
              <div>System Architecture</div>
              <div>Technical Consulting</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Rana Ranveer Kumar Yadav. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm text-center md:text-right">
              <span>Available for new opportunities</span>
              <span className="mx-2">•</span>
              <span>Open to collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;