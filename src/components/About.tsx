
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
      icon: <Stethoscope className="text-gray-600" size={32} />,
      title: "Diabetes Management",
      description: "Comprehensive diabetes care with personalized treatment plans and lifestyle modifications."
    },
    {
      icon: <Brain className="text-gray-600" size={32} />,
      title: "Positive Psychology",
      description: "Mental wellness and emotional balance through evidence-based positive psychology techniques."
    },
    {
      icon: <Leaf className="text-gray-600" size={32} />,
      title: "Holistic Health",
      description: "Integrative approach combining traditional medicine with natural healing methods."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Dr. Prathusha Nerella
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 5 years of experience in diabetes care and lifestyle medicine, Dr. Prathusha Nerella 
                is dedicated to helping patients achieve optimal health through a holistic approach that addresses 
                both physical and mental well-being.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Her unique combination of medical expertise, positive psychology, and holistic health practices 
                enables her to provide comprehensive care that transforms lives and promotes sustainable wellness.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Qualifications & Certifications</h3>
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-gray-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Areas of Expertise</h3>
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 text-white p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">My Philosophy</h4>
              <p className="text-gray-200">
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
