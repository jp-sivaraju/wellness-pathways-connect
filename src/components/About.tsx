
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
      icon: <Stethoscope style={{ color: '#4A4A45' }} size={32} />,
      title: "Diabetes Management",
      description: "Comprehensive diabetes care with personalized treatment plans and lifestyle modifications."
    },
    {
      icon: <Brain style={{ color: '#4A4A45' }} size={32} />,
      title: "Positive Psychology",
      description: "Mental wellness and emotional balance through evidence-based positive psychology techniques."
    },
    {
      icon: <Leaf style={{ color: '#4A4A45' }} size={32} />,
      title: "Holistic Health",
      description: "Integrative approach combining traditional medicine with natural healing methods."
    }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#EFECE6' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#4A4A45' }}>
                About Dr. Prathusha Nerella
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#4A4A45', opacity: 0.8 }}>
                With over 5 years of experience in diabetes care and lifestyle medicine, Dr. Prathusha Nerella 
                is dedicated to helping patients achieve optimal health through a holistic approach that addresses 
                both physical and mental well-being.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4A4A45', opacity: 0.8 }}>
                Her unique combination of medical expertise, positive psychology, and holistic health practices 
                enables her to provide comprehensive care that transforms lives and promotes sustainable wellness.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold" style={{ color: '#4A4A45' }}>Qualifications & Certifications</h3>
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle style={{ color: '#4A4A45' }} className="flex-shrink-0" size={20} />
                  <span style={{ color: '#4A4A45', opacity: 0.8 }}>{credential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#e5dfd2ff', borderColor: '#cbc5b8ff', borderWidth: '1px' }}>
              <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#4A4A45' }}>Areas of Expertise</h3>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2" style={{ color: '#4A4A45' }}>{item.title}</h4>
                      <p style={{ color: '#4A4A45', opacity: 0.8 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white p-6 rounded-xl" style={{ backgroundColor: '#4A4A45' }}>
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
