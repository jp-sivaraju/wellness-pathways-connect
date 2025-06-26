
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import InstagramReels from '@/components/InstagramReels';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--main-bg)' }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <InstagramReels />
      <Blog />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
