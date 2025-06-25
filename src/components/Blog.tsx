
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
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Health & Wellness Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights on diabetes management, positive psychology, and holistic health practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-gray-700 hover:bg-gray-800" : "border-gray-600 text-gray-700 hover:bg-gray-100"}
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
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg" style={{ backgroundColor: '#A1887F' }}>
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-gray-900 line-clamp-2 leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600 line-clamp-3 text-sm">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
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
                        className="w-full text-gray-700 hover:text-white p-3 justify-center hover:shadow-md transition-all duration-300"
                        style={{ '--tw-bg-opacity': '0', ':hover': { backgroundColor: '#A1887F' } }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A1887F'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        Read Full Article
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
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
          <Button 
            size="lg" 
            className="text-white px-8 py-4 rounded-full hover:opacity-90 shadow-lg"
            style={{ backgroundColor: '#A1887F' }}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
