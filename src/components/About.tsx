
import React from 'react';
import { CheckCircle, Stethoscope, Brain, Leaf } from 'lucide-react';

const About = () => {
  const credentials = [
    "MBBS - Bachelor of Medicine, Bachelor of Surgery",
    "MD - Doctor of Medicine",
    "Certified Diabetes Educator",
    "Positive Psychology Practitioner",
    "Holistic Health Expert"
  ];

  const expertise = [
    {
      icon: <Stethoscope style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Diabetes Management",
      description: "Comprehensive diabetes care with personalized treatment plans and lifestyle modifications."
    },
    {
      icon: <Brain style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Positive Psychology",
      description: "Mental wellness and emotional balance through evidence-based positive psychology techniques."
    },
    {
      icon: <Leaf style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Holistic Health",
      description: "Integrative approach combining traditional medicine with natural healing methods."
    }
  ];

  return (
    <section id="about" className="py-20 transition-all duration-500 hover:bg-opacity-95" style={{ backgroundColor: 'var(--main-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 transition-all duration-500 hover:translate-x-2">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 transition-all duration-300 hover:scale-105" style={{ color: 'var(--shape-text)' }}>
                About Dr. Prathusha Nerella
              </h2>
              <p className="text-lg leading-relaxed mb-6 transition-opacity duration-300 hover:opacity-90" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
                With over 5 years of experience in diabetes care and lifestyle medicine, Dr. Prathusha Nerella 
                is dedicated to helping patients achieve optimal health through a holistic approach that addresses 
                both physical and mental well-being.
              </p>
              <p className="text-lg leading-relaxed transition-opacity duration-300 hover:opacity-90" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
                Her unique combination of medical expertise, positive psychology, and holistic health practices 
                enables her to provide comprehensive care that transforms lives and promotes sustainable wellness.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold" style={{ color: 'var(--shape-text)' }}>Qualifications & Certifications</h3>
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3 transition-all duration-300 hover:translate-x-2 hover:bg-opacity-50 p-2 rounded" style={{ backgroundColor: 'var(--clickable-bg)' }}>
                  <CheckCircle style={{ color: 'var(--shape-text)' }} className="flex-shrink-0" size={20} />
                  <span style={{ color: 'var(--shape-text)', opacity: 0.8 }}>{credential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 transition-all duration-500 hover:translate-x-2">
            <div className="p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ backgroundColor: 'var(--shape-bg)', borderColor: 'var(--shape-border)', borderWidth: '1px' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--shape-text)' }}>Areas of Expertise</h3>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 transition-all duration-300 hover:translate-x-2 hover:bg-opacity-50 p-3 rounded" style={{ backgroundColor: 'var(--clickable-bg)' }}>
                    <div className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--shape-text)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--shape-text)', opacity: 0.8 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ backgroundColor: 'var(--shape-text)' }}>
              <h4 className="text-lg font-semibold mb-2">My Philosophy</h4>
              <p className="text-gray-100">
                "True healing comes from addressing the whole person - mind, body, and spirit. 
                Every patient deserves personalized care that honors their unique journey to wellness."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
