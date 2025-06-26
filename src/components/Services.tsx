
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Video, Users, BookOpen, Heart, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Individual Consultations",
      description: "Personalized one-on-one sessions for diabetes management, lifestyle modifications, and holistic health planning.",
      features: ["Comprehensive health assessment", "Personalized treatment plans", "Regular follow-ups", "24/7 support"],
      price: "₹2,000 per session"
    },
    {
      icon: <Video style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Online Consultations",
      description: "Convenient virtual consultations from the comfort of your home with the same quality of care.",
      features: ["Video consultations", "Digital prescriptions", "Health monitoring", "Flexible scheduling"],
      price: "₹1,500 per session"
    },
    {
      icon: <Users style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Group Workshops",
      description: "Interactive workshops on diabetes management, stress reduction, and healthy lifestyle practices.",
      features: ["Group learning sessions", "Practical demonstrations", "Peer support", "Resource materials"],
      price: "₹500 per workshop"
    },
    {
      icon: <BookOpen style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Health Education Programs",
      description: "Comprehensive educational programs for schools, organizations, and community groups.",
      features: ["Custom curriculum", "Interactive presentations", "Health screening", "Follow-up support"],
      price: "Contact for pricing"
    },
    {
      icon: <Heart style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Wellness Coaching",
      description: "Long-term wellness coaching focusing on sustainable lifestyle changes and positive psychology.",
      features: ["Goal setting", "Habit formation", "Mindfulness training", "Progress tracking"],
      price: "₹5,000 per month"
    },
    {
      icon: <Activity style={{ color: 'var(--shape-text)' }} size={32} />,
      title: "Corporate Wellness",
      description: "Workplace wellness programs designed to improve employee health and productivity.",
      features: ["Health assessments", "Wellness workshops", "Stress management", "Team building"],
      price: "Custom packages available"
    }
  ];

  return (
    <section id="services" className="py-20 transition-all duration-500 hover:bg-opacity-95" style={{ backgroundColor: 'var(--shape-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transition-all duration-500 hover:translate-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 transition-all duration-300 hover:scale-105" style={{ color: 'var(--shape-text)' }}>
            Comprehensive Health Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto transition-opacity duration-300 hover:opacity-90" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
            Discover our range of specialized services designed to support your journey to optimal health and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="transition-transform duration-300 hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:scale-105" style={{ color: 'var(--shape-text)', backgroundColor: 'var(--clickable-bg)' }}>
                    {service.price}
                  </span>
                </div>
                <CardTitle className="text-xl transition-colors duration-300 hover:opacity-80" style={{ color: 'var(--shape-text)' }}>{service.title}</CardTitle>
                <CardDescription style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm transition-all duration-300 hover:translate-x-2 p-1 rounded" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
                      <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: 'var(--shape-text)' }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ backgroundColor: 'var(--shape-text)' }}>
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-4" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
            Not sure which service is right for you?
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="transition-all duration-300 hover:scale-105 hover:shadow-md"
            style={{ borderColor: 'var(--shape-border)', color: 'var(--shape-text)', backgroundColor: 'transparent' }}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
