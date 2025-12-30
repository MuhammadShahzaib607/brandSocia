'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

// Blog posts data
const posts = [
  {
    id: 1,
    title: 'Emerging Social Media Trends for 2025',
    excerpt: 'Discover the latest social media trends that will transform your marketing strategy and drive engagement this year.',
    date: 'April 15, 2025',
    author: 'BrandSocia',
    category: 'Social Media',
    image: {
      src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      alt: 'Team collaboration meeting',
      aspectRatio: '16/9'
    },
    readTime: '5 min read',
    link: '/blog/social-media-trends-2025'
  },
  {
    id: 2,
    title: 'Building a Memorable Brand Identity',
    excerpt: 'Learn the key elements of a compelling brand identity that creates lasting connections with your target audience.',
    date: 'March 28, 2025',
    author: 'BrandSocia',
    category: 'Branding',
    image: {
      src: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg',
      alt: 'Creative branding and design elements',
      aspectRatio: '4/3'
    },
    readTime: '7 min read',
    link: '/blog/building-brand-identity'
  },
  {
    id: 3,
    title: 'The Mobile-First Approach to Design',
    excerpt: 'Why mobile optimization should be the foundation of your digital strategy in an increasingly smartphone-centric world.',
    date: 'March 10, 2025',
    author: 'BrandSocia',
    category: 'Design',
    image: {
      src: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      alt: 'Mobile phone interface design',
      aspectRatio: '16/9'
    },
    readTime: '4 min read',
    link: '/blog/mobile-first-design'
  }
];

// Fallback images
const fallbackImages = {
  1: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  2: 'https://burst.shopifycdn.com/photos/working-on-brand-design.jpg',
  3: 'https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png'
};

// Enhanced animation variants (slower)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100, 
      damping: 12,
      duration: 0.8 
    } 
  },
  hover: { 
    y: -12, 
    transition: { 
      type: 'spring', 
      stiffness: 400, 
      damping: 10,
      duration: 0.5 
    } 
  },
};

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2,
      duration: 0.6 
    } 
  },
};

const contentVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.7,
      ease: 'easeOut' 
    } 
  },
};

export default function BlogPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleImageError = (postId) => {
    setImageErrors((prev) => ({ ...prev, [postId]: true }));
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decorative elements with fade-in animation (slower) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-primary-100/20 blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          className="absolute left-[15%] bottom-[10%] h-48 w-48 rounded-full bg-secondary-100/20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header with fade-up animation (slower) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-block rounded-full bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-3 text-lg font-semibold text-primary-700 mb-4 shadow-md"
          >
            Fresh Findings
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text"
          >
            Our Thoughts
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Stay updated with the latest insights and trends in digital marketing, design, and brand strategy.
          </motion.p>
        </motion.div>

        {/* Blog posts grid with staggered fade-up animations (slower) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={post.link}>
                <Card
                  className={`overflow-hidden h-full flex flex-col bg-white border-0 shadow-md hover:shadow-xl rounded-xl transition-all duration-500 ${
                    hoveredIndex === index ? 'ring-2 ring-primary-300' : ''
                  }`}
                >
                  {/* Image with zoom and fade animation (slower) */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
                    className="relative h-56 overflow-hidden rounded-t-xl"
                  >
                    <Image
                      src={imageErrors[post.id] ? fallbackImages[post.id] : post.image.src}
                      alt={post.image.alt}
                      fill
                      className={`object-cover transition-transform duration-1000 ease-out ${
                        hoveredIndex === index ? 'scale-105' : 'scale-100'
                      }`}
                      onError={() => handleImageError(post.id)}
                      priority={index === 0}
                    />

                    {/* Category badge with scale fade animation (slower) */}
                    <motion.div
                      variants={badgeVariants}
                      initial="hidden"
                      animate={isVisible ? 'visible' : 'hidden'}
                      className="absolute top-4 left-4 z-10"
                    >
                      <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm">
                        {post.category}
                      </span>
                    </motion.div>

                    {/* Read time badge with scale fade animation (slower) */}
                    <motion.div
                      variants={badgeVariants}
                      initial="hidden"
                      animate={isVisible ? 'visible' : 'hidden'}
                      className="absolute top-4 right-4 z-10"
                    >
                      <span className="inline-block rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white shadow-sm">
                        {post.readTime}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Post content with staggered fade-up animations (slower) */}
                  <motion.div 
                    variants={contentVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    className="flex flex-col flex-grow p-6"
                  >
                    <motion.div 
                      variants={contentVariants}
                      className="flex items-center mb-3"
                    >
                      <p className="text-sm text-primary-600 font-medium">{post.date}</p>
                      <span className="mx-2 text-gray-300">•</span>
                      <p className="text-sm text-gray-600">{post.author}</p>
                    </motion.div>

                    <motion.h3 
                      variants={contentVariants}
                      className="text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-primary-600 line-clamp-2"
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p 
                      variants={contentVariants}
                      className="text-gray-600 mb-4 flex-grow line-clamp-3"
                    >
                      {post.excerpt}
                    </motion.p>

                    <motion.div
                      variants={contentVariants}
                      className="mt-auto"
                    >
                      <Button
                        variant="ghost"
                        className="px-0 text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Read more →
                      </Button>
                    </motion.div>
                  </motion.div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button with fade-up animation (slower) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              variant="primary"
              className="px-8 py-3 text-base font-medium shadow-md hover:shadow-lg transition-all duration-500 justify-center"
            >
              View All Posts
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
