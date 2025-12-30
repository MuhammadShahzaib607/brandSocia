'use client';

import { motion } from 'framer-motion';
import { FaSearch, FaBolt, FaLink, FaMobileAlt, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const seoPoints = [
  'Local Optimization',
  'Speed',
  'Keyword Research',
  'Link Profile',
  'Content Strategy',
  'Search Accessibility',
  'User Experience',
  'Mobile Friendliness',
  'Onsite Optimization',
];

export default function SEOSection() {
  return (
    <section className="py-20 bg-transparent text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
      >
        SEO Optimization
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
        {seoPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md hover:bg-orange-50 transition-all"
          >
            <h3 className="text-gray-800 font-semibold text-lg">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
