'use client';

import { motion } from 'framer-motion';
import { FaBrush, FaCamera, FaImage, FaGlobe, FaPenNib, FaFileAlt } from 'react-icons/fa';

const services = [
  { title: 'Printed Designs', icon: <FaFileAlt /> , link: '/portfolio/printed-designs' },
  { title: 'Social Media Post', icon: <FaCamera /> , link: '/portfolio/social-media-post' },
  { title: 'Thumbnails', icon: <FaImage /> , link: '/portfolio/thumbnails' },
  { title: 'Social Media Banner', icon: <FaBrush /> , link: '/portfolio/social-media-banner' },
  { title: 'Website Design', icon: <FaGlobe /> , link: '/portfolio/components/web-design' },
  { title: 'Logo Design', icon: <FaPenNib />, link: '/portfolio/components/logo-design' },
];

export default function Services() {
  return (
    <section className="py-20 bg-transparent text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
      >
        Our Creative Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl shadow-sm hover:shadow-md hover:bg-orange-50 p-8 transition-all duration-300"
          >
            <div className="text-orange-600 text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            {typeof service.link === 'string' && (
              <a href={service.link} className="text-orange-600 font-medium mt-2">Learn More</a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
