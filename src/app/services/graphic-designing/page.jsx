'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaPalette, FaPaintBrush, FaImage, FaRocket, FaUsers, FaShieldAlt, FaMobileAlt, FaGlobe, FaArrowRight, FaCheckCircle, FaLightbulb, FaCog, FaStore, FaWallet, FaChartBar, FaHeadset, FaPenFancy, FaCamera, FaPrint, FaDesktop } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import {Button} from '@/components/ui/Button';
import {Card} from '@/components/ui/Card';

export default function GraphicDesigning() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
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

  const services = [
    {
      title: 'Logo Design',
      description: 'Professional logo designs that represent your brand identity.',
      icon: <FaPenFancy className="text-3xl" />,
      features: ['3 Concepts', 'Unlimited Revisions', 'All Formats'],
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-700/50',
      textColor: 'text-purple-400',
    },
    {
      title: 'Print Design',
      description: 'Eye-catching print materials for marketing and promotion.',
      icon: <FaPrint className="text-3xl" />,
      features: ['Brochures', 'Flyers', 'Business Cards'],
      bgColor: 'bg-pink-900/50',
      borderColor: 'border-pink-700/50',
      textColor: 'text-pink-400',
    },
    {
      title: 'Digital Graphics',
      description: 'Engaging visuals for digital platforms and social media.',
      icon: <FaDesktop className="text-3xl" />,
      features: ['Social Media', 'Web Graphics', 'Banners'],
      bgColor: 'bg-indigo-900/50',
      borderColor: 'border-indigo-700/50',
      textColor: 'text-indigo-400',
    },
    {
      title: 'Brand Identity',
      description: 'Complete visual identity systems for cohesive branding.',
      icon: <FaPalette className="text-3xl" />,
      features: ['Color Palette', 'Typography', 'Guidelines'],
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-700/50',
      textColor: 'text-blue-400',
    },
  ];

  const processSteps = [
    { 
      title: 'Discovery', 
      description: 'We learn about your brand, goals, and target audience to understand your design needs.',
      icon: <FaLightbulb className="text-2xl" />,
      details: ['Brand Analysis', 'Target Audience', 'Design Requirements']
    },
    { 
      title: 'Concept Development', 
      description: 'We create initial design concepts based on your requirements and brand identity.',
      icon: <FaPaintBrush className="text-2xl" />,
      details: ['Initial Concepts', 'Mood Boards', 'Style Exploration']
    },
    { 
      title: 'Refinement', 
      description: 'We refine the chosen concept with your feedback until it perfectly matches your vision.',
      icon: <FaCog className="text-2xl" />,
      details: ['Client Feedback', 'Design Iterations', 'Final Adjustments']
    },
    { 
      title: 'Finalization', 
      description: 'We prepare the final designs in all required formats for your immediate use.',
      icon: <FaRocket className="text-2xl" />,
      details: ['File Preparation', 'Format Delivery', 'Usage Guidelines']
    },
  ];

  const tools = [
    { name: 'Adobe Creative Suite', icon: <FaPalette className="text-4xl" />, description: 'Professional design software' },
    { name: 'Figma', icon: <FaDesktop className="text-4xl" />, description: 'Collaborative design platform' },
    { name: 'Canva Pro', icon: <FaImage className="text-4xl" />, description: 'User-friendly design tool' },
    { name: 'Sketch', icon: <FaPaintBrush className="text-4xl" />, description: 'Digital design toolkit' },
  ];

  const results = [
    { title: 'Design Quality', value: '100%', description: 'Professional-grade designs', icon: <FaPalette className="text-4xl" /> },
    { title: 'Client Satisfaction', value: '98%', description: 'Happy clients and repeat business', icon: <FaUsers className="text-4xl" /> },
    { title: 'Delivery Time', value: '48h', description: 'Fast turnaround for revisions', icon: <FaRocket className="text-4xl" /> },
  ];

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
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20"
                  variants={itemVariants}
                >
                  <FaPalette className="text-purple-400 mr-2" />
                  <span className="text-purple-400 font-medium">Creative Design Studio</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
                  Visual Design That Captivates
                </h1>
                <p className="text-xl text-black-300 leading-relaxed">
                  Transform your ideas into stunning visual designs that communicate your message effectively and leave a lasting impression on your audience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => router.push('/contact')} 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 flex items-center gap-2"
                >
                  Start Your Project <FaArrowRight />
                </Button>
                <Button 
                  onClick={() => router.push('/portfolio')} 
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
                  alt="Graphic Design Services"
                  className="rounded-3xl shadow-2xl border border-purple-500/40 w-full"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold">Creative Excellence</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          className="container mx-auto px-4 py-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Designs Created' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24h', label: 'Response Time' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-black-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES SECTION - Enhanced Cards */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Graphic Design Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              From logos to complete brand identities, we create visual designs that make your business stand out and connect with your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ title, description, icon, features, bgColor, borderColor, textColor }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className={`h-full bg-black-800/50 border ${borderColor} hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group`}>
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${bgColor} flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform duration-300 ${textColor}`}>
                      {icon}
                    </div>
                    <h3 className={`text-xl font-bold ${textColor} mb-3`}>{title}</h3>
                    <p className="text-black-300 mb-6 text-sm">{description}</p>
                    <ul className="space-y-2 text-xs text-black-400">
                      {features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="text-purple-400 text-xs" />
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

        {/* PROCESS SECTION - Enhanced Timeline */}
        <motion.div
          className="container mx-auto px-4 py-20 bg-black-900/40 rounded-3xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Design Process</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              A systematic approach that ensures your design project delivers exactly what you envision and more.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
            
            {processSteps.map(({ title, description, icon, details }, index) => (
              <motion.div 
                key={index} 
                variants={slideVariants}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-black-800/50 p-8 rounded-2xl border border-black-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-purple-400">{icon}</div>
                      <span className="text-purple-400 font-bold text-lg">Step {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-black-300 mb-4">{description}</p>
                    <ul className="space-y-1 text-sm text-black-400">
                      {details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-purple-400 text-xs" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                  {index + 1}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TOOLS SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Design Tools We Use</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              We work with industry-standard design tools to create professional-quality graphics and visual designs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-black-400">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RESULTS SECTION */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Design Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Our commitment to excellence and attention to detail ensures you get designs that exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map(({ title, value, description, icon }, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-4xl font-bold text-purple-400 my-4">{value}</p>
                <p className="text-black-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-700/50 p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-600/5"></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPalette className="text-6xl text-purple-400" />
                </motion.div>
                <h2 className="text-5xl font-bold mb-6">
                  Ready to Create <span className="text-purple-400">Stunning Designs</span>?
                </h2>
                <p className="text-xl text-black-300 mb-10 max-w-3xl mx-auto">
                  Join hundreds of satisfied clients who trust us with their visual design needs. 
                  Let's create designs that capture attention and communicate your message effectively.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button 
                    onClick={() => router.push('/contact')} 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4 flex items-center gap-3"
                  >
                    Start Your Project <FaArrowRight />
                  </Button>
                  <Button 
                    onClick={() => router.push('/portfolio')} 
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
                  >
                    View Design Projects
                  </Button>
                </div>
                <div className="mt-8 text-sm text-black-400">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-purple-400" />
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