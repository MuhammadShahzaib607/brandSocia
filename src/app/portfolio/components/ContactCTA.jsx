'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaGlobe, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function ContactCTA() {
  return (
    <section className="py-20 bg-transparent text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        We are ready to work with you!
      </motion.h2>

      <div className="space-y-3">
        <p className="text-lg">📞 Phone: <span className="font-semibold">0328-3389247</span></p>
        <p className="text-lg">
          🌐 Website: <a href="https://www.brandsocia.com" className="underline hover:text-gray-200">www.brandsocia.com</a>
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <a href="#" className="text-orange-600 text-2xl hover:text-gray-200"><FaFacebook /></a>
        <a href="#" className="text-orange-600 text-2xl hover:text-gray-200"><FaInstagram /></a>
        <a href="#" className="text-orange-600 text-2xl hover:text-gray-200"><FaLinkedin /></a>
        <a href="#" className="text-orange-600 text-2xl hover:text-gray-200"><FaGlobe /></a>
      </div>

      <p className="mt-8 text-sm opacity-80">© {new Date().getFullYear()} BrandSocia. All rights reserved.</p>
    </section>
  );
}
