"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import JobCard from "../dashboard/components/JobCard";
import Sidebar from "../components/Sidebar";

const suggestionTags = [
  "Your Skill",
  "Programmer",
  "Software Engineer",
  "Photographer",
  "Digital Marketing",
];

const jobs = [
  { company: "Maximoz Team", title: "Database Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#0ea5e9" },
  { company: "Colo Colo Studios", title: "Intern Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#f59e42" },
  { company: "Kleanity Ltd.", title: "PHP Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#a78bfa" },
  { company: "Kikatka Crew Ltd.", title: "Frontend Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#22c55e" },
  { company: "Madju Djaja Studios", title: "Backend Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#0ea5e9" },
  { company: "Junadis Team", title: "Full-Stack Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#22c55e" },
  { company: "Maximoz Team", title: "Intern Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#0ea5e9" },
  { company: "Maximoz Team", title: "Database Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#a78bfa" },
  { company: "Maximoz Team", title: "Frontend Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", icon: "person", color: "#f59e42" },
];

export default function SearchJobsPage() {
  const [selectedTag, setSelectedTag] = useState("Programmer");
  const [activePage, setActivePage] = useState(3);

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <span className="material-icons text-2xl cursor-pointer">menu</span>
            <span className="text-xl font-semibold text-black">Search Jobs</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Search something here..."
              className="w-full max-w-md px-5 py-2 rounded-full border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-black bg-white text-base transition-all duration-200"
              style={{ minWidth: '260px' }}
            />
          </div>
          <div className="flex items-center gap-6 ml-6">
            <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <span className="material-icons text-black">notifications</span>
              <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">10</span>
            </motion.button>
            <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <span className="material-icons text-black">email</span>
              <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">12</span>
            </motion.button>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm text-black">Oda Dink</span>
                <span className="text-xs text-gray-500">Super Admin</span>
              </div>
            </motion.div>
          </div>
        </header>
        {/* Search/Filter Bar */}
        <section className="px-10 pt-6 pb-2 bg-[#e0f2fe] flex flex-col gap-4 sticky top-0 z-20">
          <div className="w-full bg-white rounded-2xl shadow-lg flex flex-wrap gap-4 items-center px-6 py-4" style={{ boxShadow: '0 6px 32px 0 rgba(14,165,233,0.10)' }}>
            <div className="bg-[#e0f2fe] rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
              <span className="material-icons text-[#0ea5e9]">location_on</span>
              <span className="text-sm font-medium text-black">Around You</span>
            </div>
            <input
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
              <button
                key={tag}
                className={`px-4 py-1 rounded-full text-xs font-semibold border transition-colors ${selectedTag === tag ? 'bg-[#0ea5e9] text-white border-[#0ea5e9]' : 'bg-white text-[#0ea5e9] border-[#0ea5e9]/30'}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
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
            {jobs.map((job, idx) => (
              <JobCard key={idx} {...job} />
            ))}
          </div>
        </section>
        {/* Pagination */}
        <section className="px-10 py-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">Showing 10 from 160 data</span>
          <div className="flex gap-2">
            {["Previous", 1, 2, 3, 4, "Next"].map((item, idx) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, backgroundColor: idx === activePage ? '#0ea5e9' : '#e0f2fe', color: idx === activePage ? '#fff' : '#0ea5e9' }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-lg border border-gray-200 transition-colors font-medium ${idx === activePage ? 'bg-[#0ea5e9] text-white' : 'bg-white text-[#0ea5e9]'}`}
                onClick={() => typeof item === 'number' && setActivePage(item)}
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
