"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {ArrowRight} from "lucide-react";

const MobView = () => {
  const images = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=320&h=640&fit=crop",
    "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=320&h=640&fit=crop",
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=320&h=640&fit=crop",
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Mobile Apps For Better Business Growth
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Grow and expand your business with our Mobile App Solutions. Our
              Mobile Application Services are backed by years of experience,
              creative minds, and a bond of trust with our clientele.
            </p>

            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-orange-700 transition-all"
            >
              Get a Quote <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Right Section (Animated Slider) */}
          <motion.div
            className="md:w-1/2 flex gap-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -200, 0] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              {[...images, ...images].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="w-36 h-36 md:w-40 md:h-40 bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt="App Showcase"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobView;
