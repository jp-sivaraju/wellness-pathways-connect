
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Autoplay from 'embla-carousel-autoplay';

const InstagramReels = () => {
  const reels = [
    {
      id: 'DKHnfO5SXC5',
      url: 'https://www.instagram.com/reel/DKHnfO5SXC5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Diabetes Management Tips',
      description: 'Essential tips for managing diabetes effectively'
    },
    {
      id: 'DKw1A5sS0xc',
      url: 'https://www.instagram.com/reel/DKw1A5sS0xc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Lifestyle Medicine',
      description: 'How lifestyle changes can transform your health'
    },
    {
      id: 'DKrtOQnSDQk',
      url: 'https://www.instagram.com/reel/DKrtOQnSDQk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Positive Psychology',
      description: 'Mental wellness strategies for better health'
    },
    {
      id: 'DKj_laPywpc',
      url: 'https://www.instagram.com/reel/DKj_laPywpc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Holistic Health',
      description: 'Integrative approaches to wellness'
    },
    {
      id: 'DKZnQRyylmh',
      url: 'https://www.instagram.com/reel/DKZnQRyylmh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Nutrition Guidance',
      description: 'Healthy eating habits for optimal health'
    },
    {
      id: 'DKMyPI0SmJz',
      url: 'https://www.instagram.com/reel/DKMyPI0SmJz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      title: 'Wellness Journey',
      description: 'Your path to better health starts here'
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20" style={{ backgroundColor: '#D7CCC8' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="text-gray-600" size={32} />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Health & Wellness Insights
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our latest health tips, wellness advice, and expert insights on Instagram
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
              {reels.map((reel) => (
                <CarouselItem key={reel.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                      {/* Instagram Reel Embed Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="relative z-10 text-center p-6">
                        <Instagram className="text-white mb-4 mx-auto" size={48} />
                        <h3 className="text-white font-semibold text-lg mb-2">{reel.title}</h3>
                        <p className="text-gray-200 text-sm">{reel.description}</p>
                      </div>
                      
                      {/* Overlay with play button effect */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{reel.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{reel.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-gray-600 text-gray-700 hover:bg-gray-100"
                        onClick={() => window.open(reel.url, '_blank')}
                      >
                        <Instagram className="mr-2" size={16} />
                        Watch on Instagram
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white border-gray-300 hover:bg-gray-100" />
            <CarouselNext className="hidden md:flex -right-12 bg-white border-gray-300 hover:bg-gray-100" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="text-white px-8 py-4 rounded-full hover:opacity-90"
            style={{ backgroundColor: '#A1887F' }}
            onClick={() => window.open('https://www.instagram.com/drprathushanerella', '_blank')}
          >
            <Instagram className="mr-2" size={20} />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
