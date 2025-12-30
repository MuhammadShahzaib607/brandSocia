"use client"; // Client-side animations aur navigation ke liye zaroori hai

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowLeft, FiMail, FiPhoneCall } from 'react-icons/fi';
import Link from 'next/link';

const ThankYou = () => {
const [username, setUsername] = useState("Guest");

useEffect(() => {
    const storedName = sessionStorage.getItem("fullname");
    if (storedName) {
      setUsername(storedName); // save username
    }
  }, []);

  return (
      <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-orange-500 flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[300px] h-[300px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full bg-[#141414] rounded-[2rem] p-8 lg:p-12 border border-white/5 shadow-2xl text-center relative z-10"
      >
        {/* Check Icon Animation */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
          className="w-16 h-16 bg-gradient-to-tr from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-900/20"
        >
          <FiCheck className="text-white text-3xl stroke-[3]" />
        </motion.div>

        {/* Dynamic Heading */}
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
          Thanks, <span className="text-orange-500 italic font-black">{username}</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base mb-8 max-w-sm mx-auto leading-relaxed">
          We've received your request and our team is already on it. We'll reach out to you shortly.
        </p>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-orange-500/10 rounded-xl text-orange-500">
              <FiMail size={18} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Email</p>
              <p className="text-[11px] font-semibold text-gray-200">Confirmation Sent</p>
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-orange-500/10 rounded-xl text-orange-500">
              <FiPhoneCall size={18} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Call</p>
              <p className="text-[11px] font-semibold text-gray-200">Within 24 Hours</p>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <Link href="/adsHome"
        onClick={()=> sessionStorage.removeItem("fullname")}
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px] transition-all cursor-pointer"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Return to home
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;