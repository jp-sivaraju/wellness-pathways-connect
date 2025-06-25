
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Dr. Prathusha', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Diabetes Management',
    'Lifestyle Coaching',
    'Positive Psychology',
    'Holistic Health',
    'Online Consultations',
    'Group Workshops',
  ];

  const resources = [
    'Health Articles',
    'Diabetes Guide',
    'Nutrition Tips',
    'Exercise Plans',
    'Mental Wellness',
    'Success Stories',
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      icon: <Youtube size={20} />,
      url: 'https://www.youtube.com/@pravehaintegrative',
      handle: '@pravehaintegrative'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      url: 'https://www.instagram.com/drprathushanerella',
      handle: '@drprathushanerella'
    },
    {
      name: 'Facebook',
      icon: <Facebook size={20} />,
      url: 'https://www.facebook.com/drprathushanerella/',
      handle: 'Dr. Prathusha Nerella'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                PN
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Prathusha Nerella</h3>
                <p className="text-gray-400 text-sm">Your Wellness Partner</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to helping you achieve optimal health through personalized diabetes care, 
              positive psychology, and holistic wellness approaches.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-300">contact@drprathushanerella.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-300">Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Resources */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Resources</h4>
              <ul className="space-y-2">
                {resources.slice(0, 4).map((resource, index) => (
                  <li key={index}>
                    <span className="text-gray-400">{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-400 hover:text-gray-200 transition-colors group"
                    >
                      {social.icon}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{social.name}</span>
                        <span className="text-xs text-gray-500">{social.handle}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Dr. Prathusha Nerella. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>for better health</span>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              Disclaimer: This website is for informational purposes only and does not constitute medical advice. 
              Always consult with qualified healthcare professionals for medical diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
