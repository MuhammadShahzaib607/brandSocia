import Hero from './components/Hero';
import Services from './components/Services';
import Platforms from './components/Platforms';
import SEOSection from './components/SEOSection';
import ContactCTA from '@/components/sections/ContactCTA';
import Testimonials from '@/components/sections/Testimonials';
import Projects from './components/Projects';

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';

export default function PortfolioPage() {
  return (
    <>
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <Header />
    <div className='h-20'></div>
    <main className="overflow-x-hidden bg-transparent text-gray-900">
      <Hero />
      <Services />
      <Projects />
      <Platforms />
      <SEOSection />
      <ContactCTA />
    </main>
    <Footer />
    </>
  );
}
