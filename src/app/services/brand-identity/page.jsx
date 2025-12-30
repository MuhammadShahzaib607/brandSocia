'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaBehance, FaDribbble, FaArrowRight, FaCheckCircle, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function BrandIdentity() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
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
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const slideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      <div className="h-30"></div>
      <main className="min-h-screen text-gray" ref={sectionRef}>
        {/* HERO SECTION - Split Layout */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20"
                  variants={itemVariants}
                >
                  <FaLightbulb className="text-orange-400 mr-2" />
                  <span className="text-orange-400 font-medium">Creative Brand Solutions</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 leading-tight">
                  Visual Identity That Commands Attention
                </h1>
                <p className="text-xl text-black-300 leading-relaxed">
                  We craft memorable brand experiences that resonate with your audience and drive business growth through strategic visual design.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => router.push('/contact')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 flex items-center gap-2"
                >
                  Start Your Project <FaArrowRight />
                </Button>
                <Button
                  onClick={() => router.push('/portfolio')}
                  variant="outline"
                  className="border-orange-500/30 text-orange-400 hover:bg-orange-500/10"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Creative Brand Identity Design"
                  className="rounded-3xl shadow-2xl border border-orange-500/40 w-full"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold">100% Custom</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          className="container mx-auto px-4 py-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Brands Created' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24h', label: 'Response Time' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-black-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES SECTION - Hexagonal Cards */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Brand Identity Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              From concept to completion, we deliver comprehensive brand solutions that make your business unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRocket className="text-3xl" />,
                title: 'Logo Design',
                description: 'Unique, memorable logos that capture your essence',
                features: ['3 Concepts', 'Unlimited Revisions', 'All Formats']
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: 'Brand Strategy',
                description: 'Strategic foundation for your visual identity',
                features: ['Brand Positioning', 'Target Audience', 'Competitive Analysis']
              },
              {
                icon: <FaCheckCircle className="text-3xl" />,
                title: 'Brand Guidelines',
                description: 'Comprehensive rules for consistent branding',
                features: ['Color Palette', 'Typography', 'Usage Rules']
              },
              {
                icon: <FaRocket className="text-3xl" />,
                title: 'Brand Applications',
                description: 'Real-world implementation across all touchpoints',
                features: ['Business Cards', 'Packaging', 'Digital Assets']
              }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Card className="h-full bg-black-800/50 border border-black-700/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 group">
                  <div className="p-8 text-center">
                    <div className="text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 mb-3">{service.title}</h3>
                    <p className="text-black-300 mb-6 text-sm">{service.description}</p>
                    <ul className="space-y-2 text-xs text-black-400">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="text-orange-400 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROCESS SECTION - Timeline */}
        <motion.div
          className="container mx-auto px-4 py-20 bg-black-900/40 rounded-3xl"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Creative Process</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              A proven methodology that transforms your vision into a powerful brand identity.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
            
            {[
              {
                step: '01',
                title: 'Discovery & Research',
                description: 'We dive deep into your business, audience, and competitive landscape to understand what makes you unique.',
                icon: <FaUsers className="text-2xl" />
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Based on insights, we develop a strategic foundation that guides all design decisions.',
                icon: <FaLightbulb className="text-2xl" />
              },
              {
                step: '03',
                title: 'Design & Creation',
                description: 'Our creative team brings your brand to life with stunning visuals and compelling messaging.',
                icon: <FaRocket className="text-2xl" />
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'We ensure smooth implementation and provide ongoing support for your brand success.',
                icon: <FaCheckCircle className="text-2xl" />
              }
            ].map((process, i) => (
              <motion.div 
                key={i} 
                variants={slideVariants}
                className={`flex items-center mb-16 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-black-800/50 p-8 rounded-2xl border border-black-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-orange-400">{process.icon}</div>
                      <span className="text-orange-400 font-bold text-lg">Step {process.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                    <p className="text-black-300">{process.description}</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                  {process.step}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SOCIAL SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Join Our Creative Community</h2>
            <p className="text-xl text-black-300 max-w-2xl mx-auto">
              Follow us for design inspiration, behind-the-scenes content, and industry insights.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: <FaInstagram />, name: 'Instagram', link: 'https://instagram.com', followers: '25K' },
              { icon: <FaBehance />, name: 'Behance', link: 'https://behance.net', followers: '15K' },
              { icon: <FaDribbble />, name: 'Dribbble', link: 'https://dribbble.com', followers: '8K' },
              { icon: <FaLinkedinIn />, name: 'LinkedIn', link: 'https://linkedin.com', followers: '12K' },
              { icon: <FaFacebookF />, name: 'Facebook', link: 'https://facebook.com', followers: '20K' },
              { icon: <FaTwitter />, name: 'Twitter', link: 'https://twitter.com', followers: '5K' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-6 bg-black-800/30 rounded-2xl border border-black-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 min-w-[120px]"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl text-black-300 group-hover:text-orange-400 transition-colors duration-300 mb-3">
                  {social.icon}
                </div>
                <span className="text-sm font-medium text-black-300 group-hover:text-orange-400 transition-colors duration-300 mb-1">
                  {social.name}
                </span>
                <span className="text-xs text-black-400">{social.followers} followers</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-700/50 p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5"></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaRocket className="text-6xl text-orange-400" />
                </motion.div>
                <h2 className="text-5xl font-bold mb-6">
                  Ready to Build Your <span className="text-orange-400">Dream Brand</span>?
                </h2>
                <p className="text-xl text-black-300 mb-10 max-w-3xl mx-auto">
                  Join hundreds of successful businesses who trust us with their brand identity. 
                  Let's create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button
                    onClick={() => router.push('/contact')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4 flex items-center gap-3"
                  >
                    Start Your Project <FaArrowRight />
                  </Button>
                  <Button
                    onClick={() => router.push('/portfolio')}
                    variant="outline"
                    className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 text-lg px-8 py-4"
                  >
                    View Portfolio
                  </Button>
                </div>
                <div className="mt-8 text-sm text-black-400">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-orange-400" />
                    Free consultation • No commitment required
                  </span>
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
