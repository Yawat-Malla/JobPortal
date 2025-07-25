"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import JobCard from "../dashboard/components/JobCard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";

const suggestionTags = [
  "Your Skill",
  "Programmer",
  "Software Engineer",
  "Photographer",
  "Digital Marketing",
];

export default function SearchJobsPage() {
  const [selectedTag, setSelectedTag] = useState("Programmer");
  const [activePage, setActivePage] = useState(3);
  const [jobs, setJobs] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true);
      const res = await fetch("/api/search-jobs");
      if (res.ok) {
        const data = await res.json();
        setJobs(data.jobs);
      }
      setLoading(false);
    }
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <Navbar
          title="Search Jobs"
          profile={{ name: "Oda Dink", role: "Super Admin" }}
          right={
            <>
              <motion.button className="relative" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95, rotate: -10 }}>
                <span className="material-icons text-black">notifications</span>
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }} className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">10</motion.span>
              </motion.button>
              <motion.button className="relative" whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95, rotate: -10 }}>
                <span className="material-icons text-black">email</span>
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, delay: 0.1 }} className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">12</motion.span>
              </motion.button>
            </>
          }
        />
        {/* Search/Filter Bar */}
        <section className="px-10 pt-6 pb-2 bg-[#e0f2fe] flex flex-col gap-4 sticky top-0 z-20">
          <div className="w-full bg-white rounded-2xl shadow-lg flex flex-wrap gap-4 items-center px-6 py-4" style={{ boxShadow: '0 6px 32px 0 rgba(14,165,233,0.10)' }}>
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-[#e0f2fe] rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
              <span className="material-icons text-[#0ea5e9]">location_on</span>
              <span className="text-sm font-medium text-black">Around You</span>
            </motion.div>
            <motion.input
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #0ea5e9" }}
              type="text"
              placeholder="Search by Title, Company or any jobs keyword..."
              className="flex-1 px-5 py-2 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-black bg-white text-base min-w-[200px]"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#e0f2fe', color: '#0ea5e9' }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#e0f2fe] text-[#0ea5e9] px-6 py-2 rounded-full font-semibold shadow-sm transition-colors text-base"
              style={{ boxShadow: '0 2px 8px 0 rgba(14,165,233,0.08)' }}
            >
              FILTER
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#0ea5e9', color: '#fff' }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#0ea5e9] text-white px-6 py-2 rounded-full font-semibold shadow-sm transition-colors text-base"
              style={{ boxShadow: '0 2px 8px 0 rgba(14,165,233,0.08)' }}
            >
              FIND
            </motion.button>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400">Suggestions</span>
            {suggestionTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.1, backgroundColor: '#0ea5e9', color: '#fff' }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-1 rounded-full text-xs font-semibold border transition-colors ${selectedTag === tag ? 'bg-[#0ea5e9] text-white border-[#0ea5e9]' : 'bg-white text-[#0ea5e9] border-[#0ea5e9]/30'}`}
                onClick={() => setSelectedTag(tag)}
                animate={selectedTag === tag ? { scale: 1.15 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </section>
        {/* Job Results */}
        <section className="px-10 pt-4 flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div className="text-sm text-gray-700 font-semibold">Showing 246 Jobs Results</div>
            <div className="text-xs text-gray-400">Based your preferences</div>
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm mb-4">
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" className="accent-[#0ea5e9]" /> Fulltime
            </label>
            <label className="flex items-center gap-2 text-black">
              <input type="checkbox" className="accent-[#0ea5e9]" /> Freelance
            </label>
            <span className="text-black">Details</span>
            <span className="text-black">Salary</span>
            <span className="ml-auto text-black">Newest</span>
            <span className="material-icons cursor-pointer text-black">view_module</span>
            <span className="material-icons cursor-pointer text-black">view_list</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {jobs.map((j, idx) => {
                const job = j as {
                  company: string;
                  title: string;
                  salary: string;
                  description: string;
                  type: "REMOTE" | "PART TIME" | "FULLTIME";
                  location: string;
                  icon?: string;
                  color?: string;
                };
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <JobCard {...job} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </section>
        {/* Pagination */}
        <section className="px-10 py-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">Showing 10 from 160 data</span>
          <div className="flex gap-2">
            {['Previous', 1, 2, 3, 4, 'Next'].map((item, idx) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, backgroundColor: idx === activePage ? '#0ea5e9' : '#e0f2fe', color: idx === activePage ? '#fff' : '#0ea5e9' }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-lg border border-gray-200 transition-colors font-medium ${idx === activePage ? 'bg-[#0ea5e9] text-white' : 'bg-white text-[#0ea5e9]'}`}
                onClick={() => typeof item === 'number' && setActivePage(item)}
                animate={idx === activePage ? { scale: 1.15 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
