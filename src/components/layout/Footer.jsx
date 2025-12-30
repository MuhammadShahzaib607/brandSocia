'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS, SERVICES, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants";
import { motion } from 'framer-motion';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => footerRef.current && observer.unobserve(footerRef.current);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  return (
    <footer className="relative overflow-hidden" ref={footerRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-orange-800 opacity-95 z-0" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCA2MEgwdjEuNUw2MCA2MHpNNjAgNjBIMHYtMS41TDYwIDYwek02MCA2MEgwdjEuNUw2MCA2MHpNNjAgNjBIMHYtMS41TDYwIDYweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-10 z-0"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-start"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="space-y-1">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex items-center space-x-6"
              >
                <img
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.name}
                  width={130}
                  height={100}
                />
                <div className="w-px h-16 bg-orange-700/50"></div>
                <p className="text-orange-100 max-w-sm text-sm leading-relaxed">
                  We help brands grow with innovative digital strategies and stunning design that converts visitors into customers.
                </p>
              </motion.div>
            </div>

            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-4 mt-8"
            >
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-orange-200 group-hover:text-white">{COMPANY_INFO.email}</p>
              </div>

              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-orange-200 group-hover:text-white">{COMPANY_INFO.phone}</p>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0z" />
                  </svg>
                </div>
                <p className="text-orange-200 group-hover:text-white">{COMPANY_INFO.address}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation / Services / Connect */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-orange-300 relative inline-block pb-2">
                Navigation
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-orange-100 hover:text-white flex items-center group transition-all">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:w-3 group-hover:h-3 transition-all"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-orange-300 relative inline-block pb-2">
                Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {SERVICES.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className="text-orange-100 hover:text-white flex items-center group transition-all">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:w-3 group-hover:h-3 transition-all"></span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-orange-300 relative inline-block pb-2">
                Connect
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
              </h4>
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-b from-orange-800/40 to-orange-900/70 flex items-center justify-center text-orange-200 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 border border-orange-700/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
                <Link href="/funnel/ads-home" className="bg-orange-600 mt-6 text-white hover:bg-orange-500 px-0 justify-center py-3 rounded-xl font-bold flex items-center gap-2 group shadow-xl shadow-orange-600/20 transition-all cursor-not-allowed opacity-50">AdsHome</Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-orange-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-orange-300 mb-4 md:mb-0">
            {COMPANY_INFO.name} &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-orange-300 hover:text-white text-sm hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-services" className="text-orange-300 hover:text-white text-sm hover:underline">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-orange-300 hover:text-white text-sm hover:underline">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
