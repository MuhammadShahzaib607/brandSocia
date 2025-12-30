'use client';
import React, { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "@/lib/constants"; 
import Link from "next/link";
import LoginModal from "@/components/ui/Modal";
import GetQuoteModal from "@/components/sections/GetQoute";
import { motion, AnimatePresence } from 'framer-motion';

// Fixed Logo component with proper props handling
const Logo = ({ color = "white" }) => (
  <img
    src={
      color === "white"
        ? "/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png"
        : "/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png"
    }
    alt="Company Logo"
    width="140"
    height="80"
    className="transition-all duration-300 cursor-pointer"
  />
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isGetQuoteOpen, setIsGetQuoteOpen] = useState(false);

  // Dropdown open index (null = none)
  const [openIndex, setOpenIndex] = useState(null);
  const closeTimeoutRef = useRef(null);
  const CLOSE_DELAY = 160; // ms, short delay to avoid flicker when moving pointer

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 
    rounded-b-2xl shadow-md 
    ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}
  `;

  const logoColor = isScrolled ? "black" : "white";
  const navItemColor = isScrolled ? "text-black" : "text-white";

  const handleCallClick = () => {
    window.location.href = "tel:+923283389247"; 
  };

  // open immediately (clear any close timer)
  const openMenu = (idx) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenIndex(idx);
  };

  // start short close-delay
  const closeMenuWithDelay = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
      closeTimeoutRef.current = null;
    }, CLOSE_DELAY);
  };

  // ensure closing when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // framer motion variants for dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -6, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -6, scale: 0.98 },
  };

  return (
    <div className="relative">
      <header className={headerClasses}>
        <div
          className={`relative p-2 flex justify-between items-center max-w-7xl mx-auto
          ${!isScrolled ? "shine-effect" : ""}`}
        >
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <Logo color={logoColor} />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((item, idx) => (
                <div
                  key={item.label}
                  // Use mouse handlers + focus/blur for accessibility
                  onMouseEnter={() => openMenu(idx)}
                  onMouseLeave={() => closeMenuWithDelay()}
                  onFocus={() => openMenu(idx)}
                  onBlur={() => closeMenuWithDelay()}
                  className="relative group"
                >
                  <Link
                    href={item.href ?? "#"}
                    // keep look/feel unchanged
                    className={`font-medium relative transition-all duration-300 hover:text-opacity-80 `}
                    aria-haspopup={item.children?.length > 0 ? "true" : undefined}
                    aria-expanded={item.children?.length > 0 ? (openIndex === idx) : undefined}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown (desktop only) */}
                  {item.children && item.children.length > 0 && (
                    // AnimatePresence + motion ensures smooth enter/exit
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          key={item.label + "-dropdown"}
                          initial="visible"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          transition={{ duration: 0.18, ease: "easeInOut" }}
                          // keep dropdown hovered to cancel close timer
                          onMouseEnter={() => openMenu(idx)}
                          onMouseLeave={() => closeMenuWithDelay()}
                          className={`absolute left-0 top-full mt-2 z-[9999] min-w-[180px] rounded-md shadow-xl ring-1 ring-black/5 
  transition-all duration-200 
  ${isScrolled ? "bg-orange-50 text-black" : "bg-white/95 backdrop-blur-md text-black"}
`}
                          style={{ willChange: "transform, opacity" }}
                        >
                          <div className="py-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-2 text-lg hover:bg-orange-100 transition-colors duration-150"
                                onClick={() => setOpenIndex(null)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleCallClick}
              className={`px-4 py-2 font-medium rounded-full transition-all duration-300 flex items-center gap-2
                ${
                  isScrolled
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 animate-[wiggle_1s_ease-in-out_infinite]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </button>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >Call Us: +92 328 3389247</motion.div>

            <button
              onClick={() => setIsGetQuoteOpen(true)}
              className={`px-4 py-2 font-medium rounded-full transition-all duration-300 
                ${
                  isScrolled
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
            >
              Get a Free Qoute
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out 
                ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'} ${navItemColor}`} />
              <span className={`absolute block h-0.5 w-6 bg-current transition duration-300 ease-in-out 
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${navItemColor}`} />
              <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out 
                ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'} ${navItemColor}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-500
              ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            <div className="flex flex-col h-full p-6 pt-20">
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className="flex-1 space-y-6">
                {NAV_LINKS.filter(item => item?.href).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    className="block text-xl font-semibold text-gray-800 py-3 transition-colors duration-300 hover:text-orange-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Action Buttons */}
              <div className="pt-8 pb-6 space-y-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    handleCallClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-3 text-lg font-medium rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
                >
                  Call Us
                </button>
                <button
                  onClick={() => {
                    setIsGetQuoteOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-6 py-3 text-lg font-medium text-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
                >
                  Get a Free Qoute
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <GetQuoteModal isOpen={isGetQuoteOpen} onClose={() => setIsGetQuoteOpen(false)} />

      {/* Shine effect style */}
      <style jsx>{`
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        .shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          animation: shine 2s linear infinite;
          pointer-events: none;
        }
        @keyframes shine {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;
