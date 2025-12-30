'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = {
  Website: [
    {
      src: "/companies/TaxFilerz.jpg",
      link: "https://taxfilerz.com",
      name: "Tax Filerz",
    },
    {
      src: "/companies/Screenshot 2025-09-27 153211.png",
      link: "https://apnagharapnizameen.com/",
      name: "Apna Ghar Apni Zameen",
    },
        {
      src: "/companies/Brand4you.jpg",
      link: "https://www.brands4you.store/",
      name: "Brands 4 You",
    },
    {
      src: "/companies/Sastishopping.jpg",
      link: "https://sastishopping.shop/",
      name: "Sasti Shopping",
    },
  ],
  "E-commerce": [
        {
      src: "/portfolio/WhatsApp Image 2025-09-27 at 17.09.21_a532a6f0.jpg",
      link: "",
      name: "Brand Identity",
    },
    {
      src: "/portfolio/WhatsApp Image 2025-09-27 at 17.20.25_66d9b0ac.jpg",
      link: "",
      name: "Brand Packaging",
    },
        {
      src: "/portfolio/branding-1.jpg",
      link: "https://behance.net/branding1",
      name: "Corporate Branding",
    },
  ],
  "Logo Design": [
    {
      src: "/portfolio/IMG-20250929-WA0001.jpg",
      link: "#",
      name: "Creative Logo",
    },
    {
      src: "/portfolio/IMG-20250929-WA0002.jpg",
      link: "#",
      name: "Creative Logo",
    },
    {
      src: "/portfolio/IMG-20250929-WA0003.jpg",
      link: "#",
      name: "Creative Logo",
    },
    {
      src: "/portfolio/IMG-20250929-WA0004.jpg",
      link: "#",
      name: "Creative Logo",
    },
  ],
  Branding: [
    {
      src: "/portfolio/Gemini_Generated_Image_5qzybh5qzybh5qzy.png",
      link: "",
      name: "Identity Design",
    },
    {
      src: "/portfolio/Gemini_Generated_Image_jcpnntjcpnntjcpn.png",
      link: "https://behance.net/branding3",
      name: "Brand Mockup",
    },
  ],
  "Mobile App": [
    {
      src: "/portfolio/Gemini_Generated_Image_tdxxhmtdxxhmtdxx.png",
      link: "",
      name: "TaxFilerz",
    },
    {
      src: "/portfolio/Gemini_Generated_Image_fpjk9ifpjk9ifpjk.png",
      link: "",
      name: "Sastishopping",
    },
    {
      src: "/portfolio/Gemini_Generated_Image_i89jihi89jihi89j.png",
      link: "",
      name: "Medicora",
    },
  ],
};

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("E-commerce");

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://img.freepik.com/free-photo/abstract-blur-luxury-hotel-lobby-background_1339-98455.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h3
          className="text-3xl md:text-5xl font-bold mb-10 text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Catch a Glimpse of Our{" "}
          <span className="text-orange-600">Top Notch Portfolio</span>
        </motion.h3>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(categories).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveTab(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                activeTab === category
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white/80 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories[activeTab].map(({ src, link, name }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-md hover:shadow-2xl bg-white/80 backdrop-blur-md group"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={src}
                  alt={name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-white text-lg font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {name}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-orange text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"
                  >
                    View Project
                  </motion.span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
        </motion.div>
      </div>
    </section>
  );
}
