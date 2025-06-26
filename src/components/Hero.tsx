
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
    <section id="home" className="py-20" style={{ backgroundColor: '#EFECE6' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#4A4A45' }}>
                Transform Your Health with 
                <span style={{ color: '#4A4A45', opacity: 0.8 }}> Holistic Wellness</span>
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: '#4A4A45', opacity: 0.8 }}>
                Expert diabetes care, lifestyle medicine, and positive psychology to help you achieve optimal health and wellbeing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-white px-8 py-4 rounded-full hover:opacity-90"
                style={{ backgroundColor: '#4A4A45' }}
                onClick={handleConsultationClick}
              >
                Book Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 rounded-full hover:opacity-80"
                style={{ borderColor: '#cbc5b8ff', color: '#4A4A45', backgroundColor: 'transparent' }}
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart style={{ color: '#4A4A45' }} size={32} />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#4A4A45' }}>500+</div>
                <div className="text-sm" style={{ color: '#4A4A45', opacity: 0.8 }}>Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users style={{ color: '#4A4A45' }} size={32} />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#4A4A45' }}>5+</div>
                <div className="text-sm" style={{ color: '#4A4A45', opacity: 0.8 }}>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award style={{ color: '#4A4A45' }} size={32} />
                </div>
                <div className="text-2xl font-bold" style={{ color: '#4A4A45' }}>100%</div>
                <div className="text-sm" style={{ color: '#4A4A45', opacity: 0.8 }}>Success Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ backgroundColor: '#4A4A45' }}></div>
              <div className="relative p-8 rounded-3xl shadow-xl" style={{ backgroundColor: '#EFECE6', borderColor: '#E5E0DF', borderWidth: '1px' }}>
                <div className="w-full h-96 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#e5dfd2ff' }}>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#4A4A45' }}>
                      <span className="text-white text-4xl font-bold">PN</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#4A4A45' }}>Dr. Prathusha Nerella</h3>
                    <p className="font-medium" style={{ color: '#4A4A45', opacity: 0.8 }}>Your Wellness Partner</p>
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
