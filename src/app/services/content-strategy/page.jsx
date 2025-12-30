'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { FaPenFancy, FaChartLine, FaRocket, FaUsers, FaBullhorn, FaEdit, FaCalendarAlt, FaCrosshairs, FaArrowRight, FaCheckCircle, FaLightbulb, FaCog } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ContentStrategy() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
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
      title: 'Content Planning',
      description: 'Strategic content calendars aligned with your goals.',
      icon: <FaCalendarAlt className="text-3xl" />,
      features: ['Content Calendar', 'Editorial Planning', 'Topic Research'],
      bgColor: 'bg-amber-900/50',
      borderColor: 'border-amber-700/50',
      textColor: 'text-amber-400',
    },
    {
      title: 'Copywriting',
      description: 'Compelling copy that converts visitors.',
      icon: <FaPenFancy className="text-3xl" />,
      features: ['Sales Copy', 'Email Marketing', 'Ad Copy'],
      bgColor: 'bg-orange-900/50',
      borderColor: 'border-orange-700/50',
      textColor: 'text-orange-400',
    },
    {
      title: 'Blog Management',
      description: 'Full blog management from topic to publishing.',
      icon: <FaEdit className="text-3xl" />,
      features: ['SEO Optimization', 'Content Creation', 'Publishing'],
      bgColor: 'bg-yellow-900/50',
      borderColor: 'border-yellow-700/50',
      textColor: 'text-yellow-400',
    },
    {
      title: 'Content Promotion',
      description: 'Maximize reach and audience engagement.',
      icon: <FaBullhorn className="text-3xl" />,
      features: ['Social Media', 'Email Campaigns', 'Paid Promotion'],
      bgColor: 'bg-red-900/50',
      borderColor: 'border-red-700/50',
      textColor: 'text-red-400',
    },
  ];

  const processSteps = [
    { 
      title: 'Research & Analysis', 
      description: 'Identify content opportunities through market study.',
      icon: <FaCrosshairs className="text-2xl" />,
      details: ['Audience Research', 'Competitor Analysis', 'Content Audit']
    },
    { 
      title: 'Strategy Development', 
      description: 'Craft a tailored plan aligned with your goals.',
      icon: <FaLightbulb className="text-2xl" />,
      details: ['Content Pillars', 'Tone of Voice', 'Distribution Strategy']
    },
    { 
      title: 'Content Creation', 
      description: 'Produce engaging, high-quality content.',
      icon: <FaEdit className="text-2xl" />,
      details: ['Writing & Editing', 'Visual Assets', 'SEO Optimization']
    },
    { 
      title: 'Distribution & Measurement', 
      description: 'Share content and optimize based on results.',
      icon: <FaChartLine className="text-2xl" />,
      details: ['Multi-Channel Publishing', 'Performance Tracking', 'Continuous Optimization']
    },
  ];

  const results = [
    { title: 'Increased Engagement', value: '150%', description: 'Boost audience interaction effectively.', icon: <FaUsers className="text-4xl" /> },
    { title: 'Higher Conversion', value: '35%', description: 'Turn more visitors into customers.', icon: <FaRocket className="text-4xl" /> },
    { title: 'Brand Authority', value: '200%', description: 'Enhance industry recognition.', icon: <FaChartLine className="text-4xl" /> },
  ];

  return (
    <>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      <div className="h-30"></div>
      <main className="min-h-screen text-gray" ref={sectionRef}>
        {/* HERO SECTION - Split Layout */}
        <motion.section
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          aria-label="Hero Section"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20"
                  variants={itemVariants}
                >
                  <FaPenFancy className="text-amber-400 mr-2" />
                  <span className="text-amber-400 font-medium">Content Strategy Experts</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600 leading-tight">
                  Content That Converts & Engages
                </h1>
                <p className="text-xl text-black-300 leading-relaxed">
                  We craft compelling content strategies that drive engagement, build authority, and convert your audience into loyal customers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => router.push('/contact')}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 flex items-center gap-2"
                >
                  Start Your Strategy <FaArrowRight />
                </Button>
                <Button
                  onClick={() => router.push('/portfolio')}
                  variant="outline"
                  className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                >
                  View Our Work
                </Button>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Content Strategy"
                  className="rounded-3xl shadow-2xl border border-amber-500/40 w-full"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold">Strategic Approach</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* STATS SECTION */}
        <motion.section
          className="container mx-auto px-4 py-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Content Pieces' },
              { number: '95%', label: 'Client Retention' },
              { number: '48h', label: 'Content Delivery' },
              { number: '4.9★', label: 'Client Rating' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-black-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SERVICES SECTION - Enhanced Cards */}
        <motion.section
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          aria-label="Services Section"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Content Strategy Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              From planning to promotion, we deliver comprehensive content solutions that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(({ title, description, icon, features, bgColor, borderColor, textColor }, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className={`h-full bg-black-800/50 border ${borderColor} hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 group`}>
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${bgColor} flex items-center justify-center border ${borderColor} group-hover:scale-110 transition-transform duration-300 ${textColor}`}>
                      {icon}
                    </div>
                    <h3 className={`text-xl font-bold ${textColor} mb-3`}>{title}</h3>
                    <p className="text-black-300 mb-6 text-sm">{description}</p>
                    <ul className="space-y-2 text-xs text-black-400">
                      {features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center justify-center gap-2">
                          <FaCheckCircle className="text-amber-400 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROCESS SECTION - Enhanced Timeline */}
        <motion.section
          className="container mx-auto px-4 py-20 bg-black-900/40 rounded-3xl"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          aria-label="Content Development Process"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Content Development Process</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              A systematic approach that ensures your content strategy delivers maximum impact and ROI.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>
            
            {processSteps.map(({ title, description, icon, details }, index) => (
              <motion.div 
                key={index} 
                variants={slideVariants}
                className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-black-800/50 p-8 rounded-2xl border border-black-700/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-amber-400">{icon}</div>
                      <span className="text-amber-400 font-bold text-lg">Step {index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p className="text-black-300 mb-4">{description}</p>
                    <ul className="space-y-1 text-sm text-black-400">
                      {details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="flex items-center gap-2">
                          <FaCheckCircle className="text-amber-400 text-xs" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                  {index + 1}
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RESULTS SECTION - Enhanced */}
        <motion.section
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          aria-label="Results Section"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Results You Can Expect</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Our content strategies deliver measurable results that drive business growth and brand recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.map(({ title, value, description, icon }, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl text-center hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 group"
                role="region" 
                aria-labelledby={`result-title-${idx}`}
              >
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 id={`result-title-${idx}`} className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-4xl font-bold text-amber-400 my-4">{value}</p>
                <p className="text-black-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA SECTION - Enhanced */}
        <motion.section
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
          aria-label="Call to Action"
        >
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-700/50 p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-600/5"></div>
              <div className="relative z-10">
                <motion.div 
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPenFancy className="text-6xl text-amber-400" />
                </motion.div>
                <h2 className="text-5xl font-bold mb-6">
                  Ready to Create <span className="text-amber-400">Compelling Content</span>?
                </h2>
                <p className="text-xl text-black-300 mb-10 max-w-3xl mx-auto">
                  Join hundreds of successful businesses who trust us with their content strategy. 
                  Let's create content that engages, converts, and builds lasting relationships.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button
                    onClick={() => router.push('/contact')}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-lg px-8 py-4 flex items-center gap-3"
                  >
                    Start Your Strategy <FaArrowRight />
                  </Button>
                  <Button
                    onClick={() => router.push('/portfolio')}
                    variant="outline"
                    className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 text-lg px-8 py-4"
                  >
                    View Content Projects
                  </Button>
                </div>
                <div className="mt-8 text-sm text-black-400">
                  <span className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-amber-400" />
                    Free content audit • No commitment required
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}