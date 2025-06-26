
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Award } from 'lucide-react';

const Hero = () => {
  const handleConsultationClick = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    const aboutElement = document.querySelector('#about');
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-20 transition-all duration-500 hover:bg-opacity-95" style={{ backgroundColor: 'var(--main-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 transition-all duration-500 hover:translate-x-2">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight transition-all duration-300 hover:scale-105" style={{ color: 'var(--shape-text)' }}>
                Transform Your Health with 
                <span style={{ color: 'var(--shape-text)', opacity: 0.8 }}> Holistic Wellness</span>
              </h1>
              <p className="text-xl leading-relaxed transition-opacity duration-300 hover:opacity-90" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
                Expert diabetes care, lifestyle medicine, and positive psychology to help you achieve optimal health and wellbeing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: 'var(--shape-text)' }}
                onClick={handleConsultationClick}
              >
                Book Consultation
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
                style={{ borderColor: 'var(--shape-border)', color: 'var(--shape-text)', backgroundColor: 'transparent' }}
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center transition-all duration-300 hover:scale-110 hover:shadow-lg p-4 rounded-lg" style={{ backgroundColor: 'var(--clickable-bg)' }}>
                <div className="flex justify-center mb-2">
                  <Heart style={{ color: 'var(--shape-text)' }} size={32} />
                </div>
                <div className="text-2xl font-bold" style={{ color: 'var(--shape-text)' }}>500+</div>
                <div className="text-sm" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>Happy Patients</div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 hover:shadow-lg p-4 rounded-lg" style={{ backgroundColor: 'var(--clickable-bg)' }}>
                <div className="flex justify-center mb-2">
                  <Users style={{ color: 'var(--shape-text)' }} size={32} />
                </div>
                <div className="text-2xl font-bold" style={{ color: 'var(--shape-text)' }}>5+</div>
                <div className="text-sm" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>Years Experience</div>
              </div>
              <div className="text-center transition-all duration-300 hover:scale-110 hover:shadow-lg p-4 rounded-lg" style={{ backgroundColor: 'var(--clickable-bg)' }}>
                <div className="flex justify-center mb-2">
                  <Award style={{ color: 'var(--shape-text)' }} size={32} />
                </div>
                <div className="text-2xl font-bold" style={{ color: 'var(--shape-text)' }}>100%</div>
                <div className="text-sm" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>Success Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="relative transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 rounded-3xl transform rotate-3 transition-transform duration-300 hover:rotate-6" style={{ backgroundColor: 'var(--shape-text)' }}></div>
              <div className="relative p-8 rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', borderWidth: '1px' }}>
                <div className="w-full h-96 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--shape-bg)' }}>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'var(--shape-text)' }}>
                      <span className="text-white text-4xl font-bold">PN</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--shape-text)' }}>Dr. Prathusha Nerella</h3>
                    <p className="font-medium" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>Your Wellness Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
