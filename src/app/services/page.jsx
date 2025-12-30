'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FaCode, FaPalette, FaRocket, FaUsers, FaSearch, FaShoppingCart, FaPenFancy,
  FaArrowRight, FaLightbulb, FaCog, FaBullhorn, FaTrophy, FaEdit
} from 'react-icons/fa';
import ServicesSection from '@/components/sections/ServicesSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Roll from '@/components/sections/HardComponent';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const services = [
    {
      title: 'Brand Identity',
      description: 'Create memorable visual identities that represent your brand values.',
      icon: <FaPalette className="text-4xl" />,
      link: '/services/brand-identity',
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/50',
      borderColor: 'border-orange-700/50',
    },
    {
      title: 'Web Development',
      description: 'Build powerful websites and web applications with modern technologies.',
      icon: <FaCode className="text-4xl" />,
      link: '/services/web-development',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-700/50',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Create online stores that convert visitors into customers.',
      icon: <FaShoppingCart className="text-4xl" />,
      link: '/services/ecommerce-solutions',
      color: 'text-red-400',
      bgColor: 'bg-red-900/50',
      borderColor: 'border-red-700/50',
    },
    {
      title: 'Graphic Design',
      description: 'Stunning visual designs that capture attention and communicate effectively.',
      icon: <FaPenFancy className="text-4xl" />,
      link: '/services/graphic-designing',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-700/50',
    },
    {
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic to your website.',
      icon: <FaSearch className="text-4xl" />,
      link: '/services/seo',
      color: 'text-green-400',
      bgColor: 'bg-green-900/50',
      borderColor: 'border-green-700/50',
    },
    {
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience across all platforms.',
      icon: <FaBullhorn className="text-4xl" />,
      link: '/services/social-media-marketing',
      color: 'text-pink-400',
      bgColor: 'bg-pink-900/50',
      borderColor: 'border-pink-700/50',
    },
    {
      title: 'Content Strategy',
      description: 'Create compelling content that engages and converts your audience.',
      icon: <FaEdit className="text-4xl" />,
      link: '/services/content-strategy',
      color: 'text-amber-400',
      bgColor: 'bg-amber-900/50',
      borderColor: 'border-amber-700/50',
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies that drive business growth.',
      icon: <FaRocket className="text-4xl" />,
      link: '/services',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-900/50',
      borderColor: 'border-indigo-700/50',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5★', label: 'Average Rating' },
  ];

  const processSteps = [
    { title: 'Discovery', description: 'We understand your business goals and requirements.', icon: <FaLightbulb className="text-2xl" /> },
    { title: 'Strategy', description: 'We develop a tailored approach for your success.', icon: <FaCog className="text-2xl" /> },
    { title: 'Execution', description: 'We bring your vision to life with precision.', icon: <FaRocket className="text-2xl" /> },
    { title: 'Results', description: 'We deliver measurable outcomes for your business.', icon: <FaTrophy className="text-2xl" /> },
  ];

  return (
    <>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      <div className="h-30"></div>

      <main className="min-h-screen text-gray" ref={sectionRef}>
        {/* HERO SECTION */}
        <motion.div className="container mx-auto px-4 py-20" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20" variants={itemVariants}>
                  <FaRocket className="text-orange-400 mr-2" />
                  <span className="text-orange-400 font-medium">Digital Solutions</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 text-transparent">
                    Our Services
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                  We offer a comprehensive range of digital marketing and design services tailored to help your business thrive in the digital landscape.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Get Started
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10 px-8 py-4 rounded-2xl font-semibold">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Services"
                className="rounded-3xl shadow-2xl border border-orange-500/40 w-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div className="container mx-auto px-4 py-20" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Digital Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <motion.div variants={itemVariants} className="group">
                  <Card className={`h-full p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border ${service.borderColor} hover:border-orange-300 cursor-pointer`}>
                    <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors duration-300 ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors duration-300">
                      Learn More
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* HARD COMPONENT */}
        <motion.div className="container mx-auto px-4 py-16" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Roll />
          </motion.div>
        </motion.div>

        <ServicesSection />

        {/* CTA SECTION */}
        <motion.div ref={sectionRef} className="container mx-auto px-4 py-20" initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <Card className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                      Ready to Transform Your <span className="text-orange-600">Digital Presence</span>?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      Let's discuss your project and create a tailored solution that drives results for your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link href="/contact">
                        <Button className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                          Get in Touch
                          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </Button>
                      </Link>
                      <Link href="/portfolio">
                        <Button variant="outline" className="border-orange-500/50 text-orange-600 hover:bg-orange-500/10 px-8 py-4 rounded-2xl font-semibold">
                          View Our Work
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
