"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Brand Identity",
    img: "https://img.freepik.com/free-vector/branding-concept-landing-page_52683-21189.jpg?w=740",
    link: "/services/brand-identity",
  },
  {
    name: "Graphic Designing",
    img: "https://img.freepik.com/free-vector/design-process-concept-landing-page_52683-26978.jpg?w=740",
    link: "/services/graphic-designing",
  },
  {
    name: "Website Development / Wordpress",
    img: "https://img.freepik.com/free-vector/cms-concept-flat-design-illustration_23-2148800728.jpg?w=740",
    link: "/services/web-development",
  },
  {
    name: "Search Engine Optimization (SEO)",
    img: "https://img.freepik.com/free-photo/searching-engine-optimizing-seo-browsing-concept_53876-64993.jpg?w=740",
    link: "/services/seo",
  },
  {
    name: "E-Commerce Development",
    img: "https://img.freepik.com/free-photo/young-man-using-discount-coupon-his-smartphone-some-online-shopping-laptop_662251-2177.jpg?w=740",
    link: "/services/ecommerce-solutions",
  },
  {
    name: "Social Media Marketing",
    img: "https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?w=740",
    link: "/services/social-media-marketing",
  },
  {
    name: "PPC (Pay-Per-Click) Advertising",
    img: "https://img.freepik.com/free-photo/online-marketing-commercial-connection-technology_53876-132688.jpg?w=1480",
    link: "/services/ppc-advertising",
  },
  {
    name: "Content Creation",
    img: "https://images.pexels.com/photos/7661184/pexels-photo-7661184.jpeg",
    link: "/services/content-strategy",
  },
];

export default function HardComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-transparent opacity-90 py-16 px-6 md:px-12 lg:px-20">
      <div className="h-30"></div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT SIDE - Circle */}
        <div className="relative flex justify-center items-center w-full lg:w-1/2">
          {/* Background Circle */}
          <div className="absolute w-[520px] h-[520px] rounded-full bg-orange-50 opacity-60 hidden md:block" />

          {/* Active Image */}
          <motion.div
            key={services[activeIndex].name}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg border-4 border-white"
          >
            <Image
              src={services[activeIndex].img}
              alt={services[activeIndex].name}
              fill
              className="object-cover rounded-full"
            />
          </motion.div>

          {/* DESKTOP - Service Buttons Around Circle */}
          <div className="absolute inset-0 hidden md:flex justify-center items-center">
            <div className="relative w-[520px] h-[520px]">
              {services.map((service, i) => {
                const total = services.length;
                const angle = (i / total) * 2 * Math.PI;
                const radius = 240;
                const center = 260;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm lg:text-base font-medium transition-all duration-300 text-center w-32 leading-tight ${
                      activeIndex === i
                        ? "text-orange-600 font-semibold"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                    }}
                  >
                    {service.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MOBILE - Service List + Dots */}
        <div className="flex flex-col items-center w-full md:hidden mt-6">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`px-3 py-1 rounded-full border text-xs font-medium ${
                  activeIndex === i
                    ? "bg-orange-600 text-white border-orange-600"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-2">
            {services.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  activeIndex === i ? "bg-orange-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Dynamic Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mt-10 lg:mt-0">
          <motion.h2
            key={activeIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            {services[activeIndex].name}
          </motion.h2>

          <p className="text-gray-700 leading-relaxed">
            {getDescription(services[activeIndex].name)}
          </p>

          <div>
            <a
              href={services[activeIndex].link || "#"}
              className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all"
            >
              Explore More
            </a>
          </div>

          {/* Dots for Desktop */}
          <div className="hidden md:flex justify-start gap-2 mt-6">
            {services.map((_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  activeIndex === i ? "bg-orange-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-4">
            <button
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + services.length) % services.length
                )
              }
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() =>
                setActiveIndex((activeIndex + 1) % services.length)
              }
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-30"></div>
    </section>
  );
}

/* Description handler */
function getDescription(service) {
  switch (service) {
    case "Brand Identity":
      return "We create unique brand identities that resonate with your target audience, driving brand recognition and loyalty.";
    case "Graphic Designing":
      return "We design creative visuals, logos, and marketing materials that perfectly represent your brand’s identity and vision.";
    case "Website Development / Wordpress":
      return "We build responsive, high-performing websites and WordPress platforms tailored to your business goals.";
    case "Search Engine Optimization (SEO)":
      return "Boost your visibility on search engines with our proven SEO strategies, driving organic growth and measurable results.";
    case "E-Commerce Development":
      return "We create scalable e-commerce stores with smooth shopping experiences that increase sales and customer retention.";
    case "Social Media Marketing":
      return "Grow your online presence with our social media strategies designed to engage your audience and boost conversions.";
    case "PPC (Pay-Per-Click) Advertising":
      return "We run targeted PPC campaigns that deliver instant visibility and measurable ROI for your business.";
    case "Content Creation":
      return "Create compelling content that resonates with your audience and drives engagement across all channels.";
    default:
      return "";
  }
}
