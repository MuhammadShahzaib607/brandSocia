'use client';

import { motion } from 'framer-motion';
import { FaPinterest, FaLinkedin, FaTiktok, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const platforms = [
  { name: 'Pinterest', icon: <FaPinterest /> },
  { name: 'LinkedIn', icon: <FaLinkedin /> },
  { name: 'TikTok', icon: <FaTiktok /> },
  { name: 'Facebook', icon: <FaFacebook /> },
  { name: 'Instagram', icon: <FaInstagram /> },
  { name: 'WhatsApp Business', icon: <FaWhatsapp /> },
];

export default function Platforms() {
  return (
    <section className="py-20 bg-transparent text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
      >
        Working Platforms
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-6 md:px-12">
        {platforms.map((platform, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-md hover:bg-orange-50 transition-all"
          >
            <div className="text-orange-600 text-4xl mb-2">{platform.icon}</div>
            <span className="text-gray-700 font-medium">{platform.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
