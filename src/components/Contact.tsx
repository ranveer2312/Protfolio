import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ranveer30654@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/images/Ranveer_KR_Yadav_Resume.pdf';
    link.download = 'Ranveer_KR_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ranveer30654@gmail.com",
      href: "mailto:ranveer30654@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8539841479",
      href: "tel:+918539841479"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Sonnapanhalli, Bengaluru, 562157",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/rana-ranveer-kumar-yadav-092a72252",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ranveer2312",
      color: "hover:text-gray-900 dark:hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss opportunities, collaborations, or just have a conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
              Contact Information
            </h3>
            
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`group flex items-center space-x-5 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 ${
                    info.href !== '#' ? 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105' : 'cursor-default'
                  }`}
                >
                  <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-slate-900 dark:text-white font-semibold text-lg">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-10">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Connect with me
              </h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 px-6 py-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 dark:text-slate-400 ${social.color} hover:scale-105 border border-slate-200/50 dark:border-slate-700/50`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Message Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-all duration-300 shadow-sm hover:shadow-md resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle size={20} />
                    <span>Try Again</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl">
                  <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                    ✅ Email client opened! Please send the message from your email app. I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl">
                  <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                    ❌ Something went wrong. Please try again or contact me directly at ranveer30654@gmail.com
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;