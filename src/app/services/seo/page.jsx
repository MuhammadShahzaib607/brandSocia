'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaSearch, FaChartLine, FaRocket, FaUsers, FaShieldAlt, FaMobileAlt, FaGlobe, FaArrowRight, FaCheckCircle, FaLightbulb, FaCog, FaStore, FaWallet, FaChartBar, FaHeadset, FaBullseye, FaCrosshairs, FaTrophy, FaChartPie } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function SEO() {
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
      title: 'Technical SEO',
      description: 'Optimize your website structure, speed, and mobile-friendliness.',
      icon: <FaCog className="text-3xl" />,
      features: ['Site Speed', 'Mobile Optimization', 'Crawlability'],
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-700/50',
      textColor: 'text-blue-400',
    },
    {
      title: 'On-Page SEO',
      description: 'Optimize content, meta tags, and internal linking structure.',
      icon: <FaSearch className="text-3xl" />,
      features: ['Content Optimization', 'Meta Tags', 'Internal Linking'],
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-700/50',
      textColor: 'text-purple-400',
    },
    {
      title: 'Off-Page SEO',
      description: 'Build high-quality backlinks and enhance online reputation.',
      icon: <FaGlobe className="text-3xl" />,
      features: ['Link Building', 'Brand Mentions', 'Authority Building'],
      bgColor: 'bg-indigo-900/50',
      borderColor: 'border-indigo-700/50',
      textColor: 'text-indigo-400',
    },
    {
      title: 'Local SEO',
      description: 'Dominate local search results with location-based strategies.',
      icon: <FaCrosshairs className="text-3xl" />,
      features: ['Google Business', 'Local Keywords', 'Location Optimization'],
      bgColor: 'bg-pink-900/50',
      borderColor: 'border-pink-700/50',
      textColor: 'text-pink-400',
    },
  ];

  const processSteps = [
    { 
      title: 'SEO Audit', 
      description: 'We analyze your current SEO performance, identify issues, and create a roadmap for improvement.',
      icon: <FaChartPie className="text-2xl" />,
      details: ['Site Analysis', 'Competitor Research', 'Gap Analysis']
    },
    { 
      title: 'Keyword Research', 
      description: 'We identify high-value keywords that your target audience is searching for.',
      icon: <FaSearch className="text-2xl" />,
      details: ['Keyword Discovery', 'Search Volume Analysis', 'Competition Assessment']
    },
    { 
      title: 'On-Page Optimization', 
      description: 'We optimize your website content and structure for better search engine visibility.',
      icon: <FaCog className="text-2xl" />,
      details: ['Content Optimization', 'Technical Improvements', 'User Experience']
    },
    { 
      title: 'Off-Page Strategy', 
      description: 'We implement link building and brand mention strategies to boost your authority.',
      icon: <FaGlobe className="text-2xl" />,
      details: ['Link Building', 'Content Marketing', 'Brand Authority']
    },
    { 
      title: 'Monitoring & Reporting', 
      description: 'We track your rankings, traffic, and conversions, making data-driven adjustments.',
      icon: <FaChartLine className="text-2xl" />,
      details: ['Performance Tracking', 'Ranking Monitoring', 'ROI Analysis']
    },
  ];

  const tools = [
    { name: 'Google Analytics', icon: <FaChartPie className="text-4xl" />, description: 'Traffic and user behavior analysis' },
    { name: 'Search Console', icon: <FaSearch className="text-4xl" />, description: 'Search performance monitoring' },
    { name: 'Ahrefs', icon: <FaChartLine className="text-4xl" />, description: 'Comprehensive SEO toolkit' },
    { name: 'SEMrush', icon: <FaBullseye className="text-4xl" />, description: 'Competitive analysis platform' },
  ];

  const results = [
    { title: 'Organic Traffic', value: '+150%', description: 'Average increase in search traffic', icon: <FaChartBar className="text-4xl" /> },
    { title: 'Keyword Rankings', value: 'Top 10', description: 'Rankings for target keywords', icon: <FaTrophy className="text-4xl" /> },
    { title: 'Conversions', value: '+75%', description: 'Improvement in conversion rates', icon: <FaRocket className="text-4xl" /> },
  ];

  return (
    <>
      <div className='h-30'></div>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      
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
                  className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20"
                  variants={itemVariants}
                >
                  <FaSearch className="text-blue-400 mr-2" />
                  <span className="text-blue-400 font-medium">SEO Specialists</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
                  Search Engine Optimization That Works
                </h1>
                <p className="text-xl text-black-300 leading-relaxed">
                  Boost your online visibility and drive organic traffic with our data-driven SEO strategies that deliver measurable results for your business.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => router.push('/contact')} 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex items-center gap-2"
                >
                  Get Free Audit <FaArrowRight />
                </Button>
                <Button 
                  onClick={() => router.push('/portfolio')} 
                  variant="outline"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Search Engine Optimization" 
                  className="rounded-3xl shadow-2xl border border-blue-500/40 w-full"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold">Data-Driven</span>
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
              { number: '500+', label: 'Websites Optimized' },
              { number: '95%', label: 'Client Retention' },
              { number: '48h', label: 'Response Time' },
              { number: '4.9★', label: 'Average Rating' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
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
            <h2 className="text-4xl font-bold mb-6">Our SEO Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions that improve your search rankings, increase organic traffic, and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ title, description, icon, features, bgColor, borderColor, textColor }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className={`h-full bg-black-800/50 border ${borderColor} hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group`}>
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${bgColor} flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform duration-300 ${textColor}`}>
                      {icon}
                    </div>
                    <h3 className={`text-xl font-bold ${textColor} mb-3`}>{title}</h3>
                    <p className="text-black-300 mb-6 text-sm">{description}</p>
                    <ul className="space-y-2 text-xs text-black-400">
                      {features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="text-blue-400 text-xs" />
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
            <h2 className="text-4xl font-bold mb-6">Our SEO Process</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              A proven methodology that delivers sustainable SEO results through strategic planning and continuous optimization.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            
            {processSteps.map(({ title, description, icon, details }, index) => (
              <motion.div 
                key={index} 
                variants={slideVariants}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-black-800/50 p-8 rounded-2xl border border-black-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-blue-400">{icon}</div>
                      <span className="text-blue-400 font-bold text-lg">Step {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-black-300 mb-4">{description}</p>
                    <ul className="space-y-1 text-sm text-black-400">
                      {details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-blue-400 text-xs" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
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
            <h2 className="text-4xl font-bold mb-6">SEO Tools We Use</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              We leverage industry-leading SEO tools and platforms to deliver comprehensive optimization and detailed reporting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-sm text-black-400">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RESULTS SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Results You Can Expect</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Our SEO strategies deliver measurable results that improve your search visibility and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map(({ title, value, description, icon }, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-4xl font-bold text-blue-400 my-4">{value}</p>
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
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-700/50 p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5"></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaSearch className="text-6xl text-blue-400" />
                </motion.div>
                <h2 className="text-5xl font-bold mb-6">
                  Ready to Boost Your <span className="text-blue-400">Search Rankings</span>?
                </h2>
                <p className="text-xl text-black-300 mb-10 max-w-3xl mx-auto">
                  Join hundreds of successful businesses who trust us with their SEO strategy. 
                  Let's create an SEO plan that drives real business results and organic growth.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button 
                    onClick={() => router.push('/contact')} 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4 flex items-center gap-3"
                  >
                    Get Free SEO Audit <FaArrowRight />
                  </Button>
                  <Button 
                    onClick={() => router.push('/portfolio')} 
                    variant="outline"
                    className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-4"
                  >
                    View Our Portfolio
                  </Button>
                </div>
                <div className="mt-8 text-sm text-black-400">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-blue-400" />
                    Free SEO audit • No commitment required
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