"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "10 Social Media Trends for 2025",
    excerpt:
      "Discover the latest social media trends that will shape your marketing strategy this year.",
    date: "April 15, 2025",
    id: "social-media-trends-2025",
    slug: "social-media-trends-2025",
    image: "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg",
  },
  {
    title: "How to Build a Strong Brand Identity",
    excerpt:
      "Learn the key elements of a compelling brand identity that resonates with your audience.",
    date: "March 28, 2025",
    id: "building-brand-identity-2025",
    slug: "building-brand-identity-2025",
    image: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
  },
  {
    title: "The Importance of Mobile-First Design",
    excerpt:
      "Why mobile optimization should be a priority for every business in the digital age.",
    date: "March 10, 2025",
    id: "mobile-first-design",
    slug: "mobile-first-design",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
  },
  {
    title: "Content Marketing Strategies That Convert",
    excerpt:
      "Effective content marketing approaches that drive engagement and conversions.",
    date: "February 22, 2025",
    id: "content-marketing-strategies",
    slug: "content-marketing-strategies",
    image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
  },
  {
    title: "UX Design Principles for Better Conversion",
    excerpt:
      "How thoughtful UX design can significantly improve your conversion rates.",
    date: "February 15, 2025",
    id: "ux-design-principles-2025",
    slug: "ux-design-principles",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
  },
  {
    title: "Email Marketing Best Practices",
    excerpt:
      "Tips and strategies for creating effective email marketing campaigns.",
    date: "January 30, 2025",
    slug: "email-marketing-best-practices",
    id: "email-marketing-best-practices",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
  },
];

export default function BlogGrid() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-[#ffe5d2] via-[#fde0c8] to-[#fbdac0] 
      min-h-screen relative overflow-hidden"
    >
      {/* Floating Dots Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-1/2 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight font-[Manrope]"
        >
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9966] to-[#ff5e62]">
            Latest Blogs
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-700 text-lg mb-16 max-w-2xl mx-auto"
        >
          Stay ahead in digital innovation with our expert insights, creative
          strategies, and design inspiration — crafted to empower your next big
          idea.
        </motion.p>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: 6,
                scale: 1.03,
                transition: { type: "spring", stiffness: 180 },
              }}
              className="group perspective-1000"
            >
              <div
                className="relative overflow-hidden shadow-md bg-white/90 backdrop-blur-md 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 
                border border-white/60 hover:border-[#ff5e62]/50"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-6 text-left">
                  <h2
                    className="text-xl font-bold text-gray-900 mb-3 font-[Manrope]
                    group-hover:text-[#ff5e62] transition-colors duration-300"
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Date */}
                  <p className="text-xs text-gray-500 italic mb-4">
                    {post.date}
                  </p>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block px-5 py-2 text-sm font-semibold text-white 
                    bg-gradient-to-r from-[#ff9966] to-[#ff5e62] rounded-none 
                    transition-all duration-300 hover:from-[#ff5e62] hover:to-[#ff9966] 
                    shadow-md hover:shadow-lg"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
