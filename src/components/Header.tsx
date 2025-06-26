
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header style={{ backgroundColor: '#EFECE6' }} className="shadow-sm sticky top-0 z-50 border-b" style={{ backgroundColor: '#EFECE6', borderBottomColor: '#cbc5b8ff' }}>
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: '#4A4A45' }}>
              PN
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#4A4A45' }}>Dr. Prathusha Nerella</h1>
              <p className="text-sm" style={{ color: '#4A4A45', opacity: 0.8 }}>MBBS, MD - Diabetes & Lifestyle Expert</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="transition-colors font-medium cursor-pointer hover:opacity-80"
                style={{ color: '#4A4A45' }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: '#4A4A45' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ borderTopColor: '#cbc5b8ff' }}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="transition-colors font-medium text-left cursor-pointer hover:opacity-80"
                  style={{ color: '#4A4A45' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
