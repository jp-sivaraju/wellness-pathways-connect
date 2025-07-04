
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Video, Users, BookOpen, Heart, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="text-gray-600 group-hover:text-blue-600 transition-all duration-300" size={32} />,
      title: "Individual Consultations",
      description: "Personalized one-on-one sessions for diabetes management, lifestyle modifications, and holistic health planning.",
      features: ["Comprehensive health assessment", "Personalized treatment plans", "Regular follow-ups", "24/7 support"],
      price: "₹2,000 per session"
    },
    {
      icon: <Video className="text-gray-600 group-hover:text-green-600 transition-all duration-300" size={32} />,
      title: "Online Consultations",
      description: "Convenient virtual consultations from the comfort of your home with the same quality of care.",
      features: ["Video consultations", "Digital prescriptions", "Health monitoring", "Flexible scheduling"],
      price: "₹1,500 per session"
    },
    {
      icon: <Users className="text-gray-600 group-hover:text-purple-600 transition-all duration-300" size={32} />,
      title: "Group Workshops",
      description: "Interactive workshops on diabetes management, stress reduction, and healthy lifestyle practices.",
      features: ["Group learning sessions", "Practical demonstrations", "Peer support", "Resource materials"],
      price: "₹500 per workshop"
    },
    {
      icon: <BookOpen className="text-gray-600 group-hover:text-orange-600 transition-all duration-300" size={32} />,
      title: "Health Education Programs",
      description: "Comprehensive educational programs for schools, organizations, and community groups.",
      features: ["Custom curriculum", "Interactive presentations", "Health screening", "Follow-up support"],
      price: "Contact for pricing"
    },
    {
      icon: <Heart className="text-gray-600 group-hover:text-red-600 transition-all duration-300" size={32} />,
      title: "Wellness Coaching",
      description: "Long-term wellness coaching focusing on sustainable lifestyle changes and positive psychology.",
      features: ["Goal setting", "Habit formation", "Mindfulness training", "Progress tracking"],
      price: "₹5,000 per month"
    },
    {
      icon: <Activity className="text-gray-600 group-hover:text-teal-600 transition-all duration-300" size={32} />,
      title: "Corporate Wellness",
      description: "Workplace wellness programs designed to improve employee health and productivity.",
      features: ["Health assessments", "Wellness workshops", "Stress management", "Team building"],
      price: "Custom packages available"
    }
  ];

  return (
    <section id="services" className="py-20 animate-fade-in" style={{ backgroundColor: '#F8BBD9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Health Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of specialized services designed to support your journey to optimal health and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-500 border-0 shadow-md group card-hover animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors duration-300">
                    {service.price}
                  </span>
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 flex-shrink-0 group-hover:bg-gray-800 transition-colors duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full text-white btn-animate hover-bounce transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#E91E63' }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 mb-4">
            Not sure which service is right for you?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-gray-700 hover:bg-gray-100 hover-lift btn-animate transition-all duration-300"
            style={{ borderColor: '#E91E63' }}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
