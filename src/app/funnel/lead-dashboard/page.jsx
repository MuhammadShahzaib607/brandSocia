"use client";

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { MdDelete } from "react-icons/md";
import { 
  FiUsers, FiLayers, FiSearch, FiX 
} from 'react-icons/fi';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'; // Next.js standard link
import { useRouter } from 'next/navigation'; // Next.js navigation hook

const LeadDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');  
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();
  
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (!storedToken) {
      router.push("/"); 
    } else {
      setToken(storedToken);
    }
  }, [router]);

  const API_URL = "https://brand-socia-funnel.vercel.app/";
  const FILTER_URL = "https://brand-socia-funnel.vercel.app/filter";

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(FILTER_URL, {
        params: { search: searchTerm, status: filter }
      });
      const rawData = response.data?.data || response.data || [];
      setLeads(Array.isArray(rawData) ? rawData : []);
    } catch (error) {
      console.error("Fetch error:", error);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filter]);

  useEffect(() => {
    if (token) {
      const delayDebounceFn = setTimeout(() => { fetchLeads(); }, 500);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [fetchLeads, token]);

  const toggleMessageStatus = async (id, currentStatus) => {
    const newStatus = !currentStatus;
    try {
      await axios.patch(API_URL, { id, status: newStatus });
      setLeads(prev => prev.map(lead => 
        lead._id === id ? { ...lead, sendMessages: newStatus } : lead
      ));
    } catch (error) {
      console.error("Update failed");
    }
  };

  // Delete function with optimistic UI
  const deleteLead = async (id) => {
    
    const originalLeads = [...leads];
    setLeads(leads.filter(lead => lead._id !== id)); 

    try {
      await axios.delete(API_URL, { data: { id } });
    } catch (error) {
      setLeads(originalLeads); 
      alert("Deletion failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans p-4 md:p-10 selection:bg-orange-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
              <FiUsers className="text-orange-500" /> Lead <span className="text-orange-600 italic">Management</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Control Panel v1.0</p>
          </div>
          <Link href="/funnel/ads-home" className="flex items-center justify-center gap-2 bg-[#161616] border border-white/5 px-6 py-3 rounded-xl hover:border-orange-500/50 transition-all text-xs font-black uppercase tracking-widest cursor-pointer">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
        

        {/* Filters & Search */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          <div className="lg:col-span-2 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full bg-[#161616] border border-white/5 rounded-2xl py-4 pl-12 focus:outline-none focus:border-orange-500 transition-all text-sm" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors">
                <FiX size={18} />
              </button>
            )}
          </div>
          <div className="lg:col-span-2 flex bg-[#161616] p-1.5 rounded-2xl border border-white/5">
            {['all', 'active', 'stopped'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFilter(tab)} 
                className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${filter === tab ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-[#161616] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden min-h-[400px] relative">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/5">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Client Details</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Plan</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <AnimatePresence mode='popLayout'>
                  {leads.map((lead) => (
                    <motion.tr 
                      key={lead._id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-200 tracking-tight">{lead.fullname}</span>
                          <span className="text-[10px] font-black text-orange-500 mt-1 italic">{lead.phone}</span>
                          <span className="text-[11px] text-gray-600 font-medium">{lead.email}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest leading-none">{lead.service}</span>
                          <span className="text-[11px] text-orange-500 font-bold mt-1 uppercase italic decoration-2 underline-offset-4">
                            {lead?.package.packageName || 'N/A'}
                          </span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="text-sm font-black text-white bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          {lead.package.packageAmount || '0'}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            onClick={() => toggleMessageStatus(lead._id, lead.sendMessages)}
                            className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tighter transition-all ${
                              lead.sendMessages 
                              ? 'bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white' 
                              : 'bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white'
                            }`}
                          >
                            {lead.sendMessages ? 'Stop' : 'Start'}
                          </button>
                          
                          <button
                            onClick={() => deleteLead(lead._id)}
                            className="p-2.5 rounded-lg bg-[#1a1a1a] border border-white/5 text-gray-500 hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5 transition-all group"
                          >
                            <MdDelete className="text-lg group-hover:scale-110 transition-transform" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>

            {/* Loading Overlay */}
            {loading && (
              <div className="absolute inset-0 bg-[#0f0f0f]/60 backdrop-blur-[2px] flex items-center justify-center z-20">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-2 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 animate-pulse">Synchronizing...</span>
                </div>
              </div>
            )}
            
            {/* Empty State */}
            {!loading && leads.length === 0 && (
              <div className="p-32 text-center">
                <FiLayers size={48} className="mx-auto text-white/5 mb-4" />
                <h2 className="text-gray-500 font-black uppercase tracking-widest text-lg">Database Clear</h2>
                <p className="text-gray-700 text-[10px] mt-2 uppercase font-bold tracking-tighter">No matching records found in system</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDashboard;