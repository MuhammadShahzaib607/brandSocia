"use client"; // Next.js Client Component

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Next.js Navigation
import { 
  FiUser, FiMail, FiPhone, FiLayers, FiCheck, 
  FiSend, FiLoader, FiZap, FiShield, FiStar 
} from 'react-icons/fi';

const servicePackages = [
  {
    id: "web-dev",
    name: "Web Development",
    packages: {
      basic: { current: "PKR 29,999", features: ["3 Page Website", "Basic Logo", "Domain & Hosting (1yr)", "Mobile Friendly Layout"] },
      professional: { current: "PKR 42,996", features: ["7 Page Website", "Custom Logo (3 Concepts)", "SSL Certification", "Social Media Integration", "Basic On-Page SEO"] },
      elite: { current: "PKR 76,996", features: ["15 Page Website (Full Business)", "Professional Branding Guide", "Lifetime SSL", "E-commerce Ready", "Priority Support"] }
    }
  },
  {
    id: "seo",
    name: "SEO",
    packages: {
      basic: { current: "PKR 20,000", features: ["Keyword Research", "On-Page Optimization", "5 Quality Backlinks", "Monthly Report"] },
      professional: { current: "PKR 45,000", features: ["Competitor Analysis", "Technical SEO Audit", "15 High-DA Backlinks", "Content Strategy"] },
      elite: { current: "PKR 85,000", features: ["Full Website Authority", "Guest Posting", "Weekly Analytics", "Speed Optimization", "Guaranteed Ranking Growth"] }
    }
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    packages: {
      basic: { current: "PKR 25,000", features: ["Google Ads Setup", "Basic Campaign Management", "Audience Targeting", "Weekly Performance Review"] },
      professional: { current: "PKR 55,000", features: ["Multi-Channel Ads", "A/B Testing", "Retargeting Campaigns", "Conversion Tracking"] },
      elite: { current: "PKR 110,000", features: ["Full Funnel Strategy", "PPC + Lead Generation", "High-ROAS Management", "Dedicated Account Manager"] }
    }
  },
  {
    id: "smm",
    name: "Social Media Marketing",
    packages: {
      basic: { current: "PKR 18,000", features: ["2 Platforms Management", "12 Monthly Posts", "Engagement Monitoring", "Basic Bio Optimization"] },
      professional: { current: "PKR 35,000", features: ["4 Platforms Management", "20 Monthly Posts", "Paid Ad Management", "Creative Caption Writing"] },
      elite: { current: "PKR 70,000", features: ["Full Branding & Management", "Daily Posting + Stories", "Influencer Outreach", "Monthly Growth Strategy"] }
    }
  },
  {
    id: "graphic-design",
    name: "Graphic Designing",
    packages: {
      basic: { current: "PKR 10,000", features: ["Logo Design (2 Concepts)", "Business Card Design", "Letterhead", "High-Resolution Files"] },
      professional: { current: "PKR 25,000", features: ["Complete Brand Identity", "Social Media Templates", "Brand Guidelines", "Source Files (AI/PSD)"] },
      elite: { current: "PKR 50,000", features: ["Elite Branding Kit", "Custom Illustrations", "Motion Graphics (2)", "Unlimited Revisions"] }
    }
  },
  {
    id: "content-strategy",
    name: "Content Strategy",
    packages: {
      basic: { current: "PKR 15,000", features: ["4 Professional Blogs", "Content Calendar", "Basic Keyword Research", "Proofreading"] },
      professional: { current: "PKR 30,000", features: ["8 SEO-Optimized Articles", "Email Newsletter Copy", "Competitor Content Audit", "Image Sourcing"] },
      elite: { current: "PKR 65,000", features: ["Full Monthly Content Plan", "Whitepaper/E-book", "Video Script Writing", "Viral Hook Strategies"] }
    }
  },
  {
    id: "ecommerce",
    name: "Ecommerce Solutions",
    packages: {
      basic: { current: "PKR 40,000", features: ["Shopify/Woo Setup", "Up to 20 Products", "Payment Gateway Integration", "Inventory Management"] },
      professional: { current: "PKR 90,000", features: ["Custom E-store Design", "Up to 100 Products", "Advanced Filtering", "Abandoned Cart Recovery"] },
      elite: { current: "PKR 180,000", features: ["Enterprise E-commerce", "Unlimited Products", "Multilingual Support", "Advanced CRM Integration"] }
    }
  }
];

const LeadForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedServiceData, setSelectedServiceData] = useState(null);
  
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    service: '',
    packageType: ''
  });

  useEffect(() => {
    const found = servicePackages.find(s => s.name === formData.service);
    setSelectedServiceData(found || null);
    // Reset package if service changes
    setFormData(prev => ({ ...prev, packageType: '' }));
  }, [formData.service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageSelect = (type) => {
    setFormData(prev => ({ ...prev, packageType: type }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.packageType) {
      setErrorMessage("Please select a pricing plan first!");
      return;
    }
    
    setLoading(true);
    setErrorMessage('');

    const payload = {
      ...formData,
      packageName: formData.packageType.toUpperCase(),
      packageAmount: selectedServiceData.packages[formData.packageType].current
    };

    try {
      const response = await axios.post("https://brand-socia-funnel.vercel.app/", payload);
      if (response.data.success) {
        sessionStorage.setItem("fullname", formData.fullname)
        router.push(`/funnel/thank-you`);
      }
    } catch (error) {
      setErrorMessage("Submission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans py-16 px-4 md:px-6 selection:bg-orange-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white"
          >
            Scale Your <span className="text-orange-600 italic">Business</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl mx-auto">Fill in your details and select the perfect plan for your brand's digital presence.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* Section 1: Contact Info */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3 text-orange-500">
              <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-sm italic font-black">01</span>
              Contact Information
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'fullname', icon: FiUser, label: 'Full Name', type: 'text', ph: 'e.g. Muhammad Haroon' },
                { name: 'email', icon: FiMail, label: 'Email Address', type: 'email', ph: 'ali@example.com' },
                { name: 'phone', icon: FiPhone, label: 'Phone Number', type: 'tel', ph: '+92 3XX XXXXXXX' }
              ].map((input) => (
                <div key={input.name} className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">{input.label}</label>
                  <div className="relative group">
                    <input.icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 transition-colors z-10" />
                    <input 
                      autoComplete="off"
                      required 
                      name={input.name} 
                      value={formData[input.name]} 
                      onChange={handleChange}
                      type={input.type} 
                      placeholder={input.ph}
                      className="w-full bg-[#080808] border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-orange-500/50 transition-all text-sm text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Service Selection */}
          <div className="bg-[#111] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3 text-orange-500">
              <span className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-sm italic font-black">02</span>
              Choose Service
            </h3>
            <div className="relative group max-w-md">
              <FiLayers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-orange-500 z-10 pointer-events-none" />
              <select 
                required 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
                className="w-full bg-[#080808] border border-white/5 rounded-2xl py-4 pl-12 pr-10 focus:outline-none focus:border-orange-500/50 transition-all text-sm appearance-none cursor-pointer text-white relative z-0"
              >
                <option value="" disabled>Select a service to unlock plans...</option>
                {servicePackages.map(s => <option key={s.id} value={s.name} className="bg-[#111]">{s.name}</option>)}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                <FiZap size={14} />
              </div>
            </div>
          </div>

          {/* Section 3: Card-Based Pricing Plans */}
          <AnimatePresence mode="wait">
            {selectedServiceData && (
              <motion.div 
                key={selectedServiceData.id}
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 20 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">Available <span className="text-orange-600">Packages</span></h3>
                  <p className="text-gray-500 text-sm mt-2">Select one plan to proceed with your request</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(selectedServiceData.packages).map(([key, details]) => (
                    <motion.div
                      key={key}
                      whileHover={{ y: -10 }}
                      onClick={() => handlePackageSelect(key)}
                      className={`cursor-pointer relative p-8 rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col h-full
                        ${formData.packageType === key 
                          ? 'border-orange-600 bg-orange-600/5 shadow-[0_0_40px_-10px_rgba(234,88,12,0.3)]' 
                          : 'border-white/5 bg-[#111] hover:border-white/20'}`}
                    >
                      {key === 'elite' && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg text-white">Most Popular</span>
                      )}
                      
                      <div className="mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${formData.packageType === key ? 'bg-orange-600 text-white' : 'bg-white/5 text-orange-500'}`}>
                          {key === 'basic' ? <FiZap /> : key === 'professional' ? <FiShield /> : <FiStar />}
                        </div>
                        <h4 className="text-xl font-black uppercase italic text-white">{key}</h4>
                        <p className="text-3xl font-black mt-2 text-white">{details.current}</p>
                      </div>

                      <ul className="space-y-4 mb-8 flex-grow">
                        {details.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-xs text-gray-400 font-medium leading-relaxed">
                            <FiCheck className="text-orange-600 flex-shrink-0" /> {feat}
                          </li>
                        ))}
                      </ul>

                      <div className={`w-full py-4 rounded-xl text-center text-[10px] font-black uppercase tracking-[0.2em] transition-all
                        ${formData.packageType === key ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20' : 'bg-white/5 text-gray-400'}`}>
                        {formData.packageType === key ? 'Selected' : 'Select Plan'}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Final Submit Button */}
                <div className="flex flex-col items-center pt-8">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    disabled={loading || !formData.packageType}
                    className="w-full max-w-md bg-gradient-to-r from-orange-600 to-orange-800 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl transition-all hover:shadow-orange-600/20 disabled:opacity-30 disabled:grayscale text-white"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3 italic">Processing Request <FiLoader className="animate-spin" /></span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">Confirm & Send Details <FiSend /></span>
                    )}
                  </motion.button>
                  {errorMessage && <p className="mt-4 text-red-500 text-[10px] font-bold uppercase tracking-widest animate-bounce">{errorMessage}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </form>

        <footer className="mt-20 text-center">
          <p className="text-gray-700 text-[10px] font-bold uppercase tracking-widest">© 2025 BrandSocia Agency • Modern Solutions for Modern Brands</p>
        </footer>
      </div>
    </div>
  );
};

export default LeadForm;