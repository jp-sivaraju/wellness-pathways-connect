import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Essential Tips for Managing Diabetes Naturally",
      excerpt: "Learn effective natural strategies to maintain healthy blood sugar levels and improve your overall quality of life.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Diabetes Management",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop"
    },
    {
      title: "The Power of Positive Psychology in Chronic Disease Management",
      excerpt: "Discover how positive psychology techniques can transform your approach to managing chronic health conditions.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop"
    },
    {
      title: "Holistic Nutrition: Beyond Calories and Carbs",
      excerpt: "Explore the deeper aspects of nutrition that consider your body, mind, and lifestyle for optimal health.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Holistic Health",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=250&fit=crop"
    },
    {
      title: "Stress and Blood Sugar: Understanding the Connection",
      excerpt: "Learn how stress affects your blood sugar levels and practical strategies to manage both effectively.",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Lifestyle Medicine",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop"
    },
    {
      title: "Building Healthy Habits That Actually Stick",
      excerpt: "Science-backed strategies for creating lasting lifestyle changes that support your health goals.",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "Lifestyle Medicine",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      title: "The Role of Sleep in Diabetes Management",
      excerpt: "Understanding how quality sleep impacts blood sugar control and overall metabolic health.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Diabetes Management",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ];

  const categories = ["All", "Diabetes Management", "Mental Health", "Holistic Health", "Lifestyle Medicine"];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="blog" className="py-20 transition-all duration-500 hover:bg-opacity-95" style={{ backgroundColor: 'var(--main-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transition-all duration-500 hover:translate-y-2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 transition-all duration-300 hover:scale-105" style={{ color: 'var(--shape-text)' }}>
            Health & Wellness Blog
          </h2>
          <p className="text-xl max-w-3xl mx-auto transition-opacity duration-300 hover:opacity-90" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
            Stay informed with the latest insights on diabetes management, positive psychology, and holistic health practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`transition-all duration-300 hover:scale-105 ${index === 0 ? "text-white" : "hover:opacity-80"}`}
              style={index === 0 ? 
                { backgroundColor: 'var(--shape-text)' } : 
                { borderColor: 'var(--shape-border)', color: 'var(--shape-text)', backgroundColor: 'transparent' }
              }
            >
              {category}
            </Button>
          ))}
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
              {blogPosts.map((post, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 overflow-hidden h-full" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}>
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'var(--shape-text)' }}>
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg line-clamp-2 leading-tight transition-colors duration-300 hover:opacity-80" style={{ color: 'var(--shape-text)' }}>{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3 text-sm" style={{ color: 'var(--shape-text)', opacity: 0.8 }}>
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm mb-4" style={{ color: 'var(--shape-text)', opacity: 0.7 }}>
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full p-3 justify-center transition-all duration-300 hover:scale-105 hover:shadow-md"
                        style={{ color: 'var(--shape-text)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--shape-text)';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'var(--shape-text)';
                        }}
                      >
                        Read Full Article
                        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 shadow-lg transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--shape-border)' }} />
            <CarouselNext className="hidden md:flex -right-12 shadow-lg transition-all duration-300 hover:scale-110" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--shape-border)' }} />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: 'var(--shape-text)' }}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
