'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaShoppingCart, FaCreditCard, FaChartLine, FaRocket, FaUsers, FaShieldAlt, FaMobileAlt, FaGlobe, FaArrowRight, FaCheckCircle, FaLightbulb, FaCog, FaStore, FaWallet, FaChartBar, FaHeadset } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function EcommerceSolutions() {
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
      title: 'Store Development',
      description: 'Custom e-commerce platforms that convert visitors into customers.',
      icon: <FaStore className="text-3xl" />,
      features: ['Custom Design', 'Mobile Optimization', 'SEO Ready'],
      bgColor: 'bg-red-900/50',
      borderColor: 'border-red-700/50',
      textColor: 'text-red-400',
    },
    {
      title: 'Payment Integration',
      description: 'Secure payment gateways for seamless transactions.',
      icon: <FaCreditCard className="text-3xl" />,
      features: ['Multiple Gateways', 'Fraud Protection', 'Mobile Payments'],
      bgColor: 'bg-rose-900/50',
      borderColor: 'border-rose-700/50',
      textColor: 'text-rose-400',
    },
    {
      title: 'Conversion Optimization',
      description: 'Data-driven strategies to maximize sales and revenue.',
      icon: <FaChartBar className="text-3xl" />,
      features: ['A/B Testing', 'Cart Recovery', 'User Experience'],
      bgColor: 'bg-pink-900/50',
      borderColor: 'border-pink-700/50',
      textColor: 'text-pink-400',
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive tracking and reporting for business growth.',
      icon: <FaChartLine className="text-3xl" />,
      features: ['Sales Analytics', 'Customer Insights', 'Performance Reports'],
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-700/50',
      textColor: 'text-purple-400',
    },
  ];

  const processSteps = [
    { 
      title: 'Discovery & Planning', 
      description: 'Unearth market opportunities and architect winning strategies.',
      icon: <FaLightbulb className="text-2xl" />,
      details: ['Market Research', 'Competitor Analysis', 'Strategy Development']
    },
    { 
      title: 'Design & Development', 
      description: 'Create stunning storefronts that captivate and convert.',
      icon: <FaCog className="text-2xl" />,
      details: ['UI/UX Design', 'Custom Development', 'Mobile Optimization']
    },
    { 
      title: 'Testing & Launch', 
      description: 'Rigorous testing ensures flawless performance at launch.',
      icon: <FaRocket className="text-2xl" />,
      details: ['Quality Assurance', 'Performance Testing', 'Go-Live Support']
    },
    { 
      title: 'Optimization & Growth', 
      description: 'Continuous improvement to scale your business success.',
      icon: <FaChartLine className="text-2xl" />,
      details: ['Performance Monitoring', 'Conversion Optimization', 'Growth Strategies']
    },
  ];

  const platforms = [
    { name: 'Shopify', icon: <FaStore className="text-4xl" />, description: 'All-in-one e-commerce platform' },
    { name: 'WooCommerce', icon: <FaShoppingCart className="text-4xl" />, description: 'WordPress e-commerce solution' },
    { name: 'Magento', icon: <FaGlobe className="text-4xl" />, description: 'Enterprise-level platform' },
    { name: 'BigCommerce', icon: <FaRocket className="text-4xl" />, description: 'Scalable commerce platform' },
  ];

  const results = [
    { title: 'Revenue Growth', value: '250%', description: 'Average increase in online sales', icon: <FaChartBar className="text-4xl" /> },
    { title: 'Conversion Rate', value: '45%', description: 'Improvement in checkout completion', icon: <FaChartLine className="text-4xl" /> },
    { title: 'Customer Satisfaction', value: '98%', description: 'Client retention and satisfaction', icon: <FaUsers className="text-4xl" /> },
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
                  className="inline-flex items-center px-4 py-2 bg-red-500/10 rounded-full border border-red-500/20"
                  variants={itemVariants}
                >
                  <FaShoppingCart className="text-red-400 mr-2" />
                  <span className="text-red-400 font-medium">E-commerce Experts</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-600 leading-tight">
                  E-commerce Solutions That Scale
                </h1>
                <p className="text-xl text-black-300 leading-relaxed">
                  Build powerful online stores that convert visitors into customers and drive sustainable business growth with our comprehensive e-commerce solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => router.push('/contact')} 
                  className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 flex items-center gap-2"
                >
                  Start Your Store <FaArrowRight />
                </Button>
                <Button 
                  onClick={() => router.push('/portfolio')} 
                  variant="outline"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                  alt="E-commerce Solutions"
                  className="rounded-3xl shadow-2xl border border-red-500/40 w-full"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold">Full Service</span>
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
              { number: '500+', label: 'Stores Built' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '48h', label: 'Response Time' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
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
            <h2 className="text-4xl font-bold mb-6">Our E-commerce Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              From store development to optimization, we provide comprehensive e-commerce solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ title, description, icon, features, bgColor, borderColor, textColor }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className={`h-full bg-black-800/50 border ${borderColor} hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group`}>
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${bgColor} flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform duration-300 ${textColor}`}>
                      {icon}
                    </div>
                    <h3 className={`text-xl font-bold ${textColor} mb-3`}>{title}</h3>
                    <p className="text-black-300 mb-6 text-sm">{description}</p>
                    <ul className="space-y-2 text-xs text-black-400">
                      {features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="text-red-400 text-xs" />
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
            <h2 className="text-4xl font-bold mb-6">Our E-commerce Development Process</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              A proven methodology that transforms your e-commerce vision into a successful online business.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-rose-600 rounded-full"></div>
            
            {processSteps.map(({ title, description, icon, details }, index) => (
              <motion.div 
                key={index} 
                variants={slideVariants}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-black-800/50 p-8 rounded-2xl border border-black-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-red-400">{icon}</div>
                      <span className="text-red-400 font-bold text-lg">Step {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-black-300 mb-4">{description}</p>
                    <ul className="space-y-1 text-sm text-black-400">
                      {details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-red-400 text-xs" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                  {index + 1}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PLATFORMS SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">E-commerce Platforms We Work With</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              We have expertise across all major e-commerce platforms to deliver the best solution for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-black-400">{platform.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Results You Can Expect</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Our e-commerce solutions deliver measurable results that drive business growth and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map(({ title, value, description, icon }, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group"
              >
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-4xl font-bold text-red-400 my-4">{value}</p>
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
            <Card className="bg-gradient-to-br from-red-900/30 to-rose-900/20 border border-red-700/50 p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-rose-600/5"></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaShoppingCart className="text-6xl text-red-400" />
                </motion.div>
                <h2 className="text-5xl font-bold mb-6">
                  Ready to Build Your <span className="text-red-400">E-commerce Empire</span>?
                </h2>
                <p className="text-xl text-black-300 mb-10 max-w-3xl mx-auto">
                  Join hundreds of successful businesses who trust us with their e-commerce development. 
                  Let's create an online store that converts visitors into loyal customers.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button 
                    onClick={() => router.push('/contact')} 
                    className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-lg px-8 py-4 flex items-center gap-3"
                  >
                    Start Your Store <FaArrowRight />
                  </Button>
                  <Button 
                    onClick={() => router.push('/portfolio')} 
                    variant="outline"
                    className="border-red-500/50 text-red-400 hover:bg-red-500/10 text-lg px-8 py-4"
                  >
                    View Our Work
                  </Button>
                </div>
                <div className="mt-8 text-sm text-black-400">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-red-400" />
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