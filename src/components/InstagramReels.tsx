
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
    <section className="py-12" style={{ backgroundColor: '#EFECE6' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Instagram style={{ color: '#4A4A45' }} size={24} />
            <h2 className="text-2xl lg:text-3xl font-bold" style={{ color: '#4A4A45' }}>
              Health & Wellness Insights
            </h2>
          </div>
          <p className="max-w-xl mx-auto" style={{ color: '#4A4A45', opacity: 0.8 }}>
            Follow our latest health tips and wellness advice
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
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
                <CarouselItem key={reel.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="group relative rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1" style={{ backgroundColor: '#EFECE6' }}>
                    <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="relative z-10 text-center p-4">
                        <Instagram className="text-white mb-2 mx-auto" size={32} />
                        <h3 className="text-white font-semibold text-sm mb-1">{reel.title}</h3>
                        <p className="text-gray-200 text-xs">{reel.description}</p>
                      </div>
                      
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="text-white" size={18} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-xs py-1 hover:opacity-80"
                        style={{ borderColor: '#cbc5b8ff', color: '#4A4A45', backgroundColor: 'transparent' }}
                        onClick={() => window.open(reel.url, '_blank')}
                      >
                        <Instagram className="mr-1" size={12} />
                        Watch
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-8 w-6 h-6" style={{ backgroundColor: '#EFECE6', borderColor: '#cbc5b8ff' }} />
            <CarouselNext className="hidden md:flex -right-8 w-6 h-6" style={{ backgroundColor: '#EFECE6', borderColor: '#cbc5b8ff' }} />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <Button 
            size="sm" 
            className="text-white px-6 py-2 rounded-full hover:opacity-90"
            style={{ backgroundColor: '#4A4A45' }}
            onClick={() => window.open('https://www.instagram.com/drprathushanerella', '_blank')}
          >
            <Instagram className="mr-2" size={16} />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
