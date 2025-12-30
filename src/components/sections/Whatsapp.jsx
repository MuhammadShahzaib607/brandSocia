"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Whatsapp = ({ phone = "8879xxxxxx", message = "Hello!" }) => {
  const handleClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Open WhatsApp app on mobile
      window.open(`whatsapp://send?phone=${phone}&text=${encodeURIComponent(message)}`);
    } else {
      // Open WhatsApp Web on desktop
      window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, "_blank");
    }
  };

  return (
    <div
      className="bg-green-600 w-min p-3 rounded-full fixed bottom-25 right-2 
                 cursor-pointer md:right-6 shadow-lg hover:bg-green-700 transition z-50"
      onClick={handleClick}
    >
      <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
    </div>
  );
};

export default Whatsapp;
