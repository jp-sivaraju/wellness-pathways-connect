
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      condition: "Type 2 Diabetes",
      rating: 5,
      testimonial: "Dr. Prathusha transformed my approach to diabetes management. Her holistic methods helped me reduce my medication dependency by 50% while improving my quality of life significantly. The positive psychology techniques she taught me changed my entire mindset.",
      outcome: "HbA1c reduced from 8.5% to 6.2% in 6 months"
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore, Karnataka",
      condition: "Pre-diabetes & Stress Management",
      rating: 5,
      testimonial: "I was heading towards diabetes due to my stressful corporate lifestyle. Dr. Prathusha's comprehensive approach combining lifestyle changes with stress management techniques helped me reverse my pre-diabetic condition completely.",
      outcome: "Reversed pre-diabetes and lost 15 kg"
    },
    {
      name: "Meera Patel",
      location: "Ahmedabad, Gujarat",
      condition: "Gestational Diabetes",
      rating: 5,
      testimonial: "During my pregnancy, Dr. Prathusha provided exceptional care for my gestational diabetes. Her natural approach and constant support helped me maintain healthy blood sugar levels throughout my pregnancy without any complications.",
      outcome: "Healthy pregnancy and delivery"
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad, Telangana",
      condition: "Diabetes & Depression",
      rating: 5,
      testimonial: "Dealing with diabetes and depression was overwhelming until I met Dr. Prathusha. Her unique combination of medical expertise and positive psychology helped me manage both conditions effectively. I feel like a new person now.",
      outcome: "Improved mental health and stable blood sugar"
    },
    {
      name: "Anjali Singh",
      location: "Delhi, NCR",
      condition: "Family Diabetes History",
      rating: 5,
      testimonial: "With a strong family history of diabetes, I was worried about my future. Dr. Prathusha's preventive approach and lifestyle modifications have kept me healthy for over 3 years. Her guidance is invaluable.",
      outcome: "Successfully prevented diabetes onset"
    },
    {
      name: "Deepak Agarwal",
      location: "Pune, Maharashtra",
      condition: "Type 1 Diabetes",
      rating: 5,
      testimonial: "As a Type 1 diabetic, I thought I had limited options. Dr. Prathusha's holistic approach helped me optimize my insulin management and improve my overall health. Her support has been life-changing.",
      outcome: "Better insulin management and energy levels"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#F8BBD9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What My Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their health and lives through our holistic approach.
          </p>
        </div>

        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg h-full bg-white">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#FCE4EC' }}>
                          <Quote className="text-gray-600" size={20} />
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 fill-current" size={16} />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow">
                        "{testimonial.testimonial}"
                      </p>
                      
                      <div className="border-t pt-4 mt-auto">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <span className="text-sm text-gray-500">{testimonial.location}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium mb-3">
                          Condition: {testimonial.condition}
                        </p>
                        <div className="p-3 rounded-lg shadow-inner" style={{ backgroundColor: '#FCE4EC' }}>
                          <p className="text-sm text-gray-700 font-medium">
                            <span className="font-semibold">Outcome:</span> {testimonial.outcome}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-100 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-100 shadow-lg" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <div className="text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-xl" style={{ backgroundColor: '#E91E63' }}>
            <h3 className="text-2xl font-bold mb-4">Join Hundreds of Satisfied Patients</h3>
            <p className="text-gray-100 text-lg mb-6">
              Start your journey to better health today with personalized care that addresses your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-gray-100">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-gray-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-gray-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
