
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
    <section id="home" className="py-20" style={{ backgroundColor: '#D7CCC8' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transform Your Health with 
                <span className="text-gray-700"> Holistic Wellness</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert diabetes care, lifestyle medicine, and positive psychology to help you achieve optimal health and wellbeing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-white px-8 py-4 rounded-full hover:opacity-90"
                style={{ backgroundColor: '#A1887F' }}
                onClick={handleConsultationClick}
              >
                Book Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-gray-700 hover:bg-gray-100 px-8 py-4 rounded-full"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart className="text-gray-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-gray-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-gray-600" size={32} />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ backgroundColor: '#A1887F' }}></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="w-full h-96 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#D7CCC8' }}>
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#A1887F' }}>
                      <span className="text-white text-4xl font-bold">PN</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Dr. Prathusha Nerella</h3>
                    <p className="text-gray-600 font-medium">Your Wellness Partner</p>
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
