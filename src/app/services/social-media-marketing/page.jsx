'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaTiktok, FaYoutube, FaUsers, FaRocket, FaChartLine, FaArrowRight, FaCheckCircle, FaLightbulb, FaCog, FaBullhorn, FaHeart, FaShare, FaComment, FaHashtag, FaMobileAlt, FaGlobe, FaCamera, FaVideo, FaEdit } from 'react-icons/fa';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SocialMediaMarketing() {
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
      title: 'Strategy Development',
      description: 'Comprehensive social media strategies tailored to your business goals.',
      icon: <FaLightbulb className="text-3xl" />,
      features: ['Audience Research', 'Content Planning', 'Platform Strategy'],
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-700/50',
      textColor: 'text-purple-400',
    },
    {
      title: 'Content Creation',
      description: 'Engaging content including images, videos, and copy that resonates.',
      icon: <FaEdit className="text-3xl" />,
      features: ['Visual Content', 'Video Production', 'Copywriting'],
      bgColor: 'bg-pink-900/50',
      borderColor: 'border-pink-700/50',
      textColor: 'text-pink-400',
    },
    {
      title: 'Community Management',
      description: 'Active engagement and management to build relationships with your audience.',
      icon: <FaUsers className="text-3xl" />,
      features: ['Engagement', 'Customer Service', 'Community Building'],
      bgColor: 'bg-indigo-900/50',
      borderColor: 'border-indigo-700/50',
      textColor: 'text-indigo-400',
    },
    {
      title: 'Paid Advertising',
      description: 'Strategic paid campaigns to reach new audiences and drive conversions.',
      icon: <FaBullhorn className="text-3xl" />,
      features: ['Ad Campaigns', 'Targeting', 'Budget Optimization'],
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-700/50',
      textColor: 'text-blue-400',
    },
  ];

  const platforms = [
    {
      name: 'Instagram',
      description: 'Visual storytelling and engagement through photos, videos, and Stories.',
      icon: <FaInstagram className="text-4xl" />,
      color: 'text-pink-400',
    },
    {
      name: 'Facebook',
      description: 'Community building and targeted advertising to reach specific demographics.',
      icon: <FaFacebook className="text-4xl" />,
      color: 'text-blue-400',
    },
    {
      name: 'Twitter',
      description: 'Real-time engagement and conversation with your audience and industry.',
      icon: <FaTwitter className="text-4xl" />,
      color: 'text-sky-400',
    },
    {
      name: 'LinkedIn',
      description: 'Professional networking and B2B marketing to establish industry authority.',
      icon: <FaLinkedin className="text-4xl" />,
      color: 'text-blue-600',
    },
    {
      name: 'TikTok',
      description: 'Creative short-form video content to reach younger audiences.',
      icon: <FaTiktok className="text-4xl" />,
      color: 'text-black',
    },
    {
      name: 'YouTube',
      description: 'Long-form video content to educate and engage your audience.',
      icon: <FaYoutube className="text-4xl" />,
      color: 'text-red-500',
    },
  ];

  const processSteps = [
    { 
      title: 'Strategy Development', 
      description: 'We analyze your business goals and create a comprehensive social media strategy.',
      icon: <FaLightbulb className="text-2xl" />,
      details: ['Audience Analysis', 'Competitor Research', 'Goal Setting']
    },
    { 
      title: 'Content Planning', 
      description: 'We develop a content calendar and create engaging posts for all platforms.',
      icon: <FaEdit className="text-2xl" />,
      details: ['Content Calendar', 'Post Creation', 'Visual Design']
    },
    { 
      title: 'Community Management', 
      description: 'We actively engage with your audience and manage your social media presence.',
      icon: <FaUsers className="text-2xl" />,
      details: ['Daily Engagement', 'Response Management', 'Community Building']
    },
    { 
      title: 'Performance Analysis', 
      description: 'We track metrics and optimize your strategy based on data-driven insights.',
      icon: <FaChartLine className="text-2xl" />,
      details: ['Analytics Tracking', 'Performance Reports', 'Strategy Optimization']
    },
  ];

  const results = [
    { title: 'Engagement Growth', value: '+150%', description: 'Average increase in social engagement', icon: <FaHeart className="text-4xl" /> },
    { title: 'Follower Growth', value: '+200%', description: 'Organic follower growth across platforms', icon: <FaUsers className="text-4xl" /> },
    { title: 'Website Traffic', value: '+80%', description: 'Traffic driven from social media', icon: <FaGlobe className="text-4xl" /> },
    { title: 'Conversions', value: '+120%', description: 'Improvement in conversion rates', icon: <FaRocket className="text-4xl" /> },
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
                  <FaBullhorn className="text-purple-400 mr-2" />
                  <span className="text-purple-400 font-medium">Social Media Experts</span>
                </motion.div>
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
                  Social Media Marketing That Connects
                </h1>
                <p className="text-xl text-black-300 leading-relaxed">
                  Build meaningful connections with your audience through strategic social media marketing that drives engagement, builds brand awareness, and generates real business results.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => router.push('/contact')} 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 flex items-center gap-2"
                >
                  Start Your Campaign <FaArrowRight />
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
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Social Media Marketing" 
                  className="rounded-3xl shadow-2xl border border-purple-500/40 w-full"
                />
                <motion.div 
                  className="absolute -top-4 -right-4 bg-purple-500 text-white px-6 py-3 rounded-2xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold">Engagement Focused</span>
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
              { number: '500+', label: 'Campaigns Managed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24h', label: 'Response Time' },
              { number: '4.9★', label: 'Average Rating' },
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
            <h2 className="text-4xl font-bold mb-6">Our Social Media Marketing Services</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              Comprehensive social media solutions that build your brand, engage your audience, and drive meaningful business results.
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

        {/* PLATFORMS SECTION - Enhanced */}
        <motion.div
          className="container mx-auto px-4 py-20 bg-black-900/40 rounded-3xl"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Platforms We Specialize In</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              We create tailored strategies for all major social media platforms to maximize your reach and engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-black-800/50 to-black-900/50 border border-black-700/50 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className={`${platform.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-sm text-black-400">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROCESS SECTION - Enhanced Timeline */}
        <motion.div
          className="container mx-auto px-4 py-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Social Media Process</h2>
            <p className="text-xl text-black-300 max-w-3xl mx-auto">
              A systematic approach that ensures your social media strategy delivers consistent results and builds lasting relationships with your audience.
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
              Our data-driven social media strategies deliver measurable results that drive business growth and brand recognition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                  <FaBullhorn className="text-6xl text-purple-400" />
                </motion.div>
                <h2 className="text-5xl font-bold mb-6">
                  Ready to Boost Your <span className="text-purple-400">Social Media Presence</span>?
                </h2>
                <p className="text-xl text-black-300 mb-10 max-w-3xl mx-auto">
                  Join hundreds of successful businesses who trust us with their social media marketing. 
                  Let's create a strategy that increases engagement and drives real business results.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button 
                    onClick={() => router.push('/contact')} 
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-lg px-8 py-4 flex items-center gap-3"
                  >
                    Start Your Campaign <FaArrowRight />
                  </Button>
                  <Button 
                    onClick={() => router.push('/portfolio')} 
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-4"
                  >
                    View Our Work
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