import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. Dr. Prathusha will get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" size={24} />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Available Mon-Sat, 9 AM - 7 PM"
    },
    {
      icon: <Mail className="text-gray-600 group-hover:text-green-600 transition-colors duration-300" size={24} />,
      title: "Email",
      details: ["contact@drprathushanerella.com", "appointments@drprathushanerella.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="text-gray-600 group-hover:text-red-600 transition-colors duration-300" size={24} />,
      title: "Location",
      details: ["Hyderabad, Telangana, India"],
      description: "Online consultations available worldwide"
    },
    {
      icon: <Clock className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" size={24} />,
      title: "Consultation Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "Emergency consultations available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey to better health? Schedule a consultation or reach out with any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-l-4 shadow-sm group hover-lift card-hover animate-scale-in" style={{ borderLeftColor: '#E91E63', animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl text-white hover-lift animate-scale-in" style={{ background: 'linear-gradient(135deg, #E91E63 0%, #AD1457 100%)', animationDelay: '0.6s' }}>
              <h4 className="text-xl font-bold mb-4">Why Choose Dr. Prathusha?</h4>
              <ul className="space-y-2">
                <li className="flex items-center hover-scale">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Personalized holistic approach
                </li>
                <li className="flex items-center hover-scale">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Evidence-based treatment methods
                </li>
                <li className="flex items-center hover-scale">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Comprehensive diabetes care
                </li>
                <li className="flex items-center hover-scale">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Positive psychology integration
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="shadow-lg hover-lift card-hover">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter your phone number"
                        className="w-full transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your health concerns or questions..."
                      rows={5}
                      className="w-full transition-all duration-300 focus:scale-105"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full text-white py-3 btn-animate hover-bounce group transition-all duration-300 transform hover:scale-105"
                    style={{ backgroundColor: '#E91E63' }}
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
