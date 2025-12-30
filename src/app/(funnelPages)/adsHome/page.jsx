"use client"; 

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, FiTrendingUp, FiTarget, FiShoppingCart, FiEdit3, 
  FiLayout, FiCheck, FiChevronDown, FiArrowRight, FiStar,
  FiLock, FiGrid, FiX, FiUser, FiMail, FiPhone, FiLayers, FiSend, FiLoader, FiZap
} from 'react-icons/fi';
import { useRouter } from 'next/navigation'; // Next.js Navigation
import axios from 'axios';

const AdsHome = () => {
  const router = useRouter();
  
  // --- States ---
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  
  // Popup States
  const [showPopup, setShowPopup] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [selectedServiceData, setSelectedServiceData] = useState(null);
  const [popupFormData, setPopupFormData] = useState({
    fullname: '', email: '', phone: '', service: '', packageType: ''
  });

  const servicePackages = [
    {
      id: "web-dev", name: "Web Development",
      packages: {
        basic: { current: "PKR 29,999", features: ["3 Page Website", "Basic Logo", "Domain & Hosting (1yr)", "Mobile Friendly"] },
        professional: { current: "PKR 42,996", features: ["7 Page Website", "Custom Logo", "SSL Certificate", "On-Page SEO"] },
        elite: { current: "PKR 76,996", features: ["15 Page Website", "Branding Guide", "E-commerce Ready", "Priority Support"] }
      }
    },
    {
      id: "seo", name: "SEO",
      packages: {
        basic: { current: "PKR 20,000", features: ["Keyword Research", "On-Page Opt", "5 Backlinks", "Monthly Report"] },
        professional: { current: "PKR 45,000", features: ["Competitor Analysis", "Technical Audit", "15 Backlinks", "Content Strategy"] },
        elite: { current: "PKR 85,000", features: ["Full Authority", "Guest Posting", "Weekly Analytics", "Ranking Growth"] }
      }
    },
    {
        id: "digital-marketing", name: "Digital Marketing",
        packages: {
          basic: { current: "PKR 25,000", features: ["Google Ads Setup", "Campaign Mgmt", "Audience Targeting", "Weekly Review"] },
          professional: { current: "PKR 55,000", features: ["Multi-Channel Ads", "A/B Testing", "Retargeting", "Conversion Tracking"] },
          elite: { current: "PKR 110,000", features: ["Full Funnel Strategy", "PPC + Lead Gen", "High-ROAS", "Account Manager"] }
        }
    },
    {
        id: "smm", name: "Social Media Marketing",
        packages: {
          basic: { current: "PKR 18,000", features: ["2 Platforms", "12 Monthly Posts", "Engagement Monitor", "Bio Opt"] },
          professional: { current: "PKR 35,000", features: ["4 Platforms", "20 Monthly Posts", "Paid Ad Mgmt", "Creative Captions"] },
          elite: { current: "PKR 70,000", features: ["Full Branding", "Daily Posting", "Influencer Outreach", "Growth Strategy"] }
        }
    },
    {
        id: "graphic-design", name: "Graphic Designing",
        packages: {
          basic: { current: "PKR 10,000", features: ["Logo (2 Concepts)", "Business Card", "Letterhead", "High-Res Files"] },
          professional: { current: "PKR 25,000", features: ["Complete Identity", "Social Templates", "Brand Guidelines", "Source Files"] },
          elite: { current: "PKR 50,000", features: ["Elite Branding Kit", "Custom Illustrations", "Motion Graphics", "Unlimited Revisions"] }
        }
    },
    {
        id: "content-strategy", name: "Content Strategy",
        packages: {
          basic: { current: "PKR 15,000", features: ["4 Professional Blogs", "Content Calendar", "Keyword Research", "Proofreading"] },
          professional: { current: "PKR 30,000", features: ["8 SEO Articles", "Newsletter Copy", "Competitor Audit", "Image Sourcing"] },
          elite: { current: "PKR 65,000", features: ["Monthly Plan", "Whitepaper/E-book", "Video Scripting", "Viral Hook Strategies"] }
        }
    },
    {
        id: "ecommerce", name: "Ecommerce Solutions",
        packages: {
          basic: { current: "PKR 40,000", features: ["Shopify/Woo Setup", "20 Products", "Payment Gateway", "Inventory Mgmt"] },
          professional: { current: "PKR 90,000", features: ["Custom Design", "100 Products", "Advanced Filtering", "Abandoned Cart"] },
          elite: { current: "PKR 180,000", features: ["Enterprise Store", "Unlimited Products", "Multilingual Support", "CRM Integration"] }
        }
    }
  ];

  useEffect(() => {
    const found = servicePackages.find(s => s.name === popupFormData.service);
    setSelectedServiceData(found || null);
    setPopupFormData(prev => ({...prev, packageType: ''}));
  }, [popupFormData.service]);

  useEffect(() => {
    // Client-side initialization
    const token = sessionStorage.getItem('token');
    if (token) setIsAuthorized(true);

    const isPopupShown = sessionStorage.getItem('isPopupShown');
    if (!isPopupShown) {
      const timer = setTimeout(() => setShowPopup(true), 1500);
      return () => clearTimeout(timer);
    }

    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setShowAdminModal(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('isPopupShown', 'true');
  };

  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    if(!popupFormData.packageType) return alert("Please select a package plan!");
    setPopupLoading(true);
    try {
      const payload = { 
        ...popupFormData, 
        packageName: popupFormData.packageType.toUpperCase(),
        packageAmount: selectedServiceData.packages[popupFormData.packageType].current 
      };
      const response = await axios.post("https://brand-socia-funnel.vercel.app/", payload);
      if (response.data.success) {
        sessionStorage.setItem('isPopupShown', 'true');
        router.push(`/thank-you/${popupFormData.fullname}`);
      }
    } catch (error) {
      console.error("Submission failed");
    } finally {
      setPopupLoading(false);
    }
  };

  const handleVerify = () => {
    if (adminPass === 'brandsocia@123') {
      sessionStorage.setItem('token', 'authorized');
      setIsAuthorized(true);
      setShowAdminModal(false);
      setAdminPass('');
    }
  };

  return (
    <div className="bg-[#0f0f0f] text-white font-sans selection:bg-orange-500 overflow-x-hidden">
      
      {/* --- ENHANCED SERVICE POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
            <motion.div initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} className="bg-[#111] border border-white/10 rounded-[2.5rem] max-w-3xl w-full shadow-2xl relative my-8 overflow-hidden">
              <button onClick={closePopup} className="absolute top-6 right-6 text-gray-500 hover:text-white z-20"><FiX size={24} /></button>
              
              <div className="p-6 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <header className="mb-8 text-center">
                  <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">exclusive opportunity</span>
                  <h2 className="text-3xl md:text-4xl font-black">Claim Your <span className="text-orange-600 italic">Growth</span> Plan</h2>
                  <p className="text-gray-500 text-sm mt-2">Select a service to view our professional packages.</p>
                </header>

                <form onSubmit={handlePopupSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="relative"><FiUser className="absolute left-4 top-4 text-gray-600"/><input required className="w-full bg-[#080808] border border-white/5 rounded-xl p-4 pl-12 text-sm focus:border-orange-500 outline-none text-white" placeholder="Name" onChange={(e)=>setPopupFormData({...popupFormData, fullname: e.target.value})}/></div>
                    <div className="relative"><FiPhone className="absolute left-4 top-4 text-gray-600"/><input required className="w-full bg-[#080808] border border-white/5 rounded-xl p-4 pl-12 text-sm focus:border-orange-500 outline-none text-white" placeholder="Phone" onChange={(e)=>setPopupFormData({...popupFormData, phone: e.target.value})}/></div>
                    <div className="relative"><FiMail className="absolute left-4 top-4 text-gray-600"/><input required type="email" className="w-full bg-[#080808] border border-white/5 rounded-xl p-4 pl-12 text-sm focus:border-orange-500 outline-none text-white" placeholder="Email" onChange={(e)=>setPopupFormData({...popupFormData, email: e.target.value})}/></div>
                  </div>
                  
                  <div className="relative">
                    <FiLayers className="absolute left-4 top-4 text-gray-600 z-10"/><select required className="w-full bg-[#080808] border border-white/5 rounded-xl p-4 pl-12 text-sm appearance-none outline-none focus:border-orange-500 cursor-pointer text-white" onChange={(e)=>setPopupFormData({...popupFormData, service: e.target.value})}>
                      <option value="">Select Service to See Pricing...</option>
                      {servicePackages.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                    <FiChevronDown className="absolute right-4 top-4 text-gray-600 pointer-events-none" />
                  </div>

                  <AnimatePresence mode="wait">
                    {selectedServiceData && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid md:grid-cols-3 gap-4">
                        {Object.entries(selectedServiceData.packages).map(([key, details]) => (
                          <div 
                            key={key} 
                            onClick={()=>setPopupFormData({...popupFormData, packageType: key})} 
                            className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between relative overflow-hidden ${popupFormData.packageType === key ? 'border-orange-600 bg-orange-600/5' : 'border-white/5 bg-black hover:border-white/20'}`}
                          >
                            {popupFormData.packageType === key && <FiZap className="absolute top-2 right-2 text-orange-600 animate-pulse" />}
                            <div>
                                <p className={`text-[10px] uppercase font-black mb-1 ${popupFormData.packageType === key ? 'text-orange-500' : 'text-gray-500'}`}>{key}</p>
                                <p className="text-lg font-black text-white mb-3">{details.current.split(' ')[1]} <span className="text-[10px] text-gray-500 font-normal">PKR</span></p>
                                <ul className="space-y-2">
                                    {details.features.map((f, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-[10px] text-gray-400 leading-tight">
                                            <FiCheck className="text-orange-600 mt-0.5 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button disabled={popupLoading} className="w-full bg-orange-600 hover:bg-orange-500 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-600/20">
                    {popupLoading ? <FiLoader className="animate-spin" /> : <>Get Started with {popupFormData.packageType || 'Plan'} <FiSend /></>}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RESTORED ADMIN AUTH MODAL --- */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#161616] border border-white/10 p-10 rounded-[2.5rem] max-w-sm w-full text-center relative shadow-2xl">
              <button onClick={() => setShowAdminModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"><FiX size={20} /></button>
              <div className="w-16 h-16 bg-orange-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6"><FiLock className="text-orange-500 text-2xl" /></div>
              <h2 className="text-xl font-bold mb-2">Admin Access</h2>
              <p className="text-gray-500 text-xs mb-8 uppercase tracking-widest">Verification Required</p>
              <input type="password" placeholder="••••••••" value={adminPass} onChange={(e) => setAdminPass(e.target.value)} className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl py-4 px-5 text-center tracking-[0.5em] mb-4 outline-none focus:border-orange-500 transition-all font-bold text-white" onKeyPress={(e) => e.key === 'Enter' && handleVerify()} autoFocus />
              <button onClick={handleVerify} className="w-full bg-orange-600 hover:bg-orange-500 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-orange-600/20 transition-all">Verify Credentials</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-orange-500 font-bold tracking-[0.3em] text-sm mb-6 block uppercase">The Digital Revolution</span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 italic text-white">Elevate Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Brand Now</span></h1>
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">Top-tier web development, SEO, and creative strategies tailored for your business growth.</p>
            <div className="flex flex-wrap gap-4">
              {!isAuthorized ? (
                <button onClick={()=> router.push("/lead-form")} className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-xl font-bold flex items-center gap-2 group shadow-xl shadow-orange-600/20 transition-all">Request Proposal <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></button>
              ) : (
                <button onClick={() => router.push("/lead-dashboard")} className="bg-[#161616] border border-white/10 hover:border-orange-500/50 px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all cursor-pointer"><FiGrid className="text-orange-500" /> Lead Dashboard</button>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
             <div className="absolute -inset-4 bg-orange-600/20 blur-3xl rounded-full"></div>
             <img src="/laptopImg.avif" alt="Laptop" className="rounded-2xl w-full max-w-xl shadow-2xl border border-white/5 relative z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-16 border-y border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 flex flex-wrap justify-around gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-4xl font-bold text-orange-500 mb-1">{stat.n}</h3>
              <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FACILITIES GRID */}
      <section className="py-32 px-6 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 italic uppercase tracking-tighter">Core <span className="text-orange-600">Facilities</span></h2>
          <p className="text-gray-500 leading-relaxed text-lg">Premium digital services tailored to ensure a professional presence online.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-10 bg-[#161616] rounded-[2rem] border border-white/5 hover:border-orange-500/40 transition-all duration-500 group">
              <div className="text-orange-500 text-3xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEO SECTION */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center order-2 lg:order-1 relative">
            <div className="absolute -inset-10 bg-orange-600/10 blur-3xl rounded-full"></div>
            <img src="/seoImg.avif" alt="SEO" className="rounded-3xl w-full max-w-md shadow-2xl relative z-10" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-6 italic uppercase">Mastering Search <br /><span className="text-orange-600 underline underline-offset-8">Visibility</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">Our SEO strategies are built on data. We help your business get discovered by the right audience at the right time.</p>
            <div className="space-y-4">
              {['Market Analysis', 'On-Page Optimization', 'Quality Backlinks'].map((t, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <FiCheck className="text-orange-500" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM & TRUST */}
      <section className="py-32 px-6 container mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-black mb-8 italic uppercase">Trust & <span className="text-orange-600 underline">Excellence</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">Our team of experts is passionate about delivering results that matter.</p>
        <div className="flex justify-center relative">
          <div className="absolute -inset-20 bg-orange-600/5 blur-[120px] rounded-full"></div>
          <img src="/digitalMarketing.jpg" alt="Marketing" className="rounded-[3rem] w-full max-w-4xl shadow-2xl border border-white/5 relative z-10" />
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase italic">Client <span className="text-orange-600">Voices</span></h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-[#111] rounded-[2rem] border border-white/5 italic hover:border-orange-500/20 transition-all group">
              <div className="flex text-orange-500 mb-4 text-xs group-hover:scale-110 transition-transform">
                {[...Array(5)].map((_, idx) => <FiStar key={idx} fill="currentColor" />)}
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="text-left border-t border-white/5 pt-4">
                <p className="font-bold text-white text-sm uppercase tracking-widest">{t.name}</p>
                <p className="text-orange-500 text-[10px] mt-1 uppercase font-black">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 px-6 container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-12 text-center underline underline-offset-[12px] decoration-orange-600 uppercase italic">Common Inquiries</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#161616] rounded-2xl border border-white/5 overflow-hidden transition-all">
              <button className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <span className="font-bold text-gray-200 uppercase tracking-tighter">{faq.q}</span>
                <FiChevronDown className={`text-orange-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed border-t border-white/5">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FOOTER CTA */}
      <section className="py-32 px-6 container mx-auto text-center">
        <div className="max-w-4xl mx-auto pt-20 pb-20 px-10 rounded-[4rem] bg-gradient-to-b from-orange-600 to-orange-950 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic leading-none tracking-tighter group-hover:scale-105 transition-transform duration-700">Ready to Scale <br />Your Brand?</h2>
            <button onClick={() => router.push("/form")} className="mt-8 bg-white text-orange-700 px-14 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-50 transition-all shadow-2xl">Start Your Journey</button>
          </div>
        </div>
        <p className="mt-16 text-gray-700 text-[10px] font-black uppercase tracking-[0.6em]">© 2025 BrandSocia Agency • All Systems Nominal</p>
      </section>
    </div>
  );
};

// --- Static Data ---
const stats = [{ n: "500+", t: "Projects" }, { n: "150+", t: "Experts" }, { n: "24/7", t: "Support" }, { n: "100%", t: "Quality" }];

const services = [
  { title: "Web Development", icon: <FiCode />, desc: "High-speed, SEO-friendly custom websites tailored for growth." },
  { title: "SEO Strategy", icon: <FiTrendingUp />, desc: "Boost your search engine rankings and attract organic buyers." },
  { title: "Digital Marketing", icon: <FiTarget />, desc: "Strategic ad campaigns that convert clicks into customers." },
  { title: "Ecommerce", icon: <FiShoppingCart />, desc: "Professional online stores with secure payment integration." },
  { title: "Graphic Design", icon: <FiLayout />, desc: "Modern visual identities that define your brand’s future." },
  { title: "Content Strategy", icon: <FiEdit3 />, desc: "Persuasive copywriting and brand storytelling that sells." }
];

const testimonials = [
  { name: "John Doe", role: "CEO, TechFlow", quote: "BrandSocia transformed our online presence. Their team is professional and results were beyond expectations." },
  { name: "Sarah Malik", role: "Founder, Bloom", quote: "The best agency we've worked with. Clean designs, fast delivery, and excellent communication." },
  { name: "Ahmed Khan", role: "Manager, Global Retail", quote: "Professional, efficient, and results-driven. Our sales increased by 40% after implementing their SEO strategy." }
];

const faqs = [
  { q: "What is your project timeline?", a: "Standard projects take 2-4 weeks depending on the complexity and quality requirements." },
  { q: "How do we get started?", a: "Simply click 'Start Now' or 'Request Proposal', fill the form, and our team will contact you in 24 hours." },
  { q: "Do you offer custom packages?", a: "Yes, we analyze your specific business needs and goals to create a customized strategy." }
];

export default AdsHome;