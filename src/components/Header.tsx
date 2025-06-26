
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
    <header className="shadow-sm sticky top-0 z-50 border-b transition-all duration-300 hover:shadow-md" style={{ backgroundColor: 'var(--main-bg)', borderBottomColor: 'var(--line-color)' }}>
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 hover:shadow-lg" style={{ backgroundColor: 'var(--shape-text)' }}>
              PN
            </div>
            <div>
              <h1 className="text-xl font-bold transition-colors duration-300" style={{ color: 'var(--shape-text)' }}>Dr. Prathusha Nerella</h1>
              <p className="text-sm" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>MBBS, MD - Diabetes & Lifestyle Expert</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="transition-all duration-300 font-medium cursor-pointer hover:opacity-80 hover:scale-105 hover:shadow-sm px-2 py-1 rounded"
                style={{ color: 'var(--shape-text)' }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: 'var(--shape-text)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in" style={{ borderTopColor: 'var(--line-color)' }}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="transition-all duration-300 font-medium text-left cursor-pointer hover:opacity-80 hover:translate-x-2 px-2 py-1 rounded"
                  style={{ color: 'var(--shape-text)' }}
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
