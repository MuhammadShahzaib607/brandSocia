'use client';

import { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ServicesCard from '@/components/sections/ServiceCard'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'
import IntroContent from '@/components/sections/IntroContent';
import Testimonials from '@/components/sections/Testimonials';
import Slider from '@/components/sections/Slider';
import PortfolioPreviewTwo from '@/components/sections/PortfolioPreviewTwo';
import HardComponent from '@/components/sections/HardComponent';

// Animation variants for page sections
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
};

// Wrapper to trigger animation only when in view
function AnimateOnScroll({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  return (
    <motion.div ref={ref} initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={fadeInUp}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  // Add smooth scrolling effect
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Header />
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      
      <AnimateOnScroll>
        <Hero />
        <div className="h-1"></div>
        <Slider />
        <div className="h-1"></div>
        <IntroContent />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <BlogPreview />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <PortfolioPreview />
        <PortfolioPreviewTwo />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <HardComponent />
        <ServicesCard />
      </AnimateOnScroll>
      
      <AnimateOnScroll>
        <Testimonials />
        <ContactCTA />
      </AnimateOnScroll>
      <Footer />
    </div>
  )
}