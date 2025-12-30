'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-transparent py-20 text-center px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hello Everyone! <br />
          <span className="text-orange-600">Welcome</span>
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          At <span className="font-semibold text-orange-600">BrandSocia</span>, we empower businesses to thrive in the digital
          landscape by blending creativity with cutting-edge technology. Our mission is to deliver results-driven digital
          marketing strategies and bespoke web development solutions that elevate brands and drive measurable growth.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          Whether it&apos;s crafting high-converting WordPress websites, building robust full-stack applications, or executing
          data-backed marketing campaigns, we&apos;re committed to turning your vision into a powerful online reality.
        </p>
      </motion.div>
    </section>
  );
}
