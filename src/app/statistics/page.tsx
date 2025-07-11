"use client";
import React from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import ProfileStrengthChart from "./components/ProfileStrengthChart";
import VisitorGraph from "./components/VisitorGraph";
import NetworkDonutChart from "./components/NetworkDonutChart";
import JobTrendsChart from "./components/JobTrendsChart";

const statCards = [
  { label: "Profile Viewed", value: "456k", icon: "visibility", color: "#22c55e", sub: "+24%", subColor: "#22c55e", subText: "than last month" },
  { label: "Unread Messages", value: "28", icon: "mail", color: "#6366f1", link: "/messages", linkText: "Go to Message" },
  { label: "Application Sent", value: "651", icon: "work", color: "#0ea5e9" },
  { label: "App. Answered", value: "24", icon: "reply", color: "#f59e42" },
  { label: "Interviewed", value: "261", icon: "event", color: "#38bdf8" },
  { label: "Hired", value: "69", icon: "call", color: "#7c3aed" },
];

export default function StatisticsPage() {
  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      {/* Sidebar fixed */}
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
      </div>
      {/* Main content scrollable */}
      <main className="flex-1 ml-64 min-h-screen overflow-x-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-10 py-6 bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <span className="material-icons text-2xl cursor-pointer">menu</span>
            <span className="text-xl font-semibold text-black">Statistics</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Search something here..."
              className="w-full max-w-md px-5 py-2 rounded-full border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-black bg-white text-base transition-all duration-200"
              style={{ minWidth: '260px' }}
            />
          </div>
        </header>
        {/* Main Grid Layout */}
        <div className="px-10 pb-10 flex flex-col gap-6 min-w-[1200px] mt-6">
          {/* First Row: Profile Strength + Stat Cards (vertical stack) */}
          <div className="grid grid-cols-12 gap-6">
            {/* Profile Strength (col-span-5) + legend (col-span-2) */}
            <motion.div className="col-span-5 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Profile Strength</span>
                <span className="material-icons text-gray-400 cursor-pointer">more_vert</span>
              </div>
              <div className="flex flex-row items-start">
                <div className="flex-1">
                  <ProfileStrengthChart />
                </div>
                {/* Legend beside chart */}
                <div className="flex flex-col gap-2 ml-8 mt-2 min-w-[120px]">
                  <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full" style={{ background: '#22c55e', border: '1px solid #22c55e' }} /> <span className="text-[#22c55e] font-semibold">Application Sent</span></div>
                  <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full" style={{ background: '#f59e42', border: '1px solid #f59e42' }} /> <span className="text-[#f59e42] font-semibold">Application Answered</span></div>
                  <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full" style={{ background: '#38bdf8', border: '1px solid #38bdf8' }} /> <span className="text-[#38bdf8] font-semibold">Hired</span></div>
                  <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full" style={{ background: '#6b7280', border: '1px solid #6b7280' }} /> <span className="text-[#6b7280] font-semibold">Pending</span></div>
                </div>
              </div>
            </motion.div>
            {/* Stat Cards stacked vertically, 3 columns, 2 cards each */}
            <div className="col-span-7 grid grid-cols-3 gap-6 items-stretch">
              {[0, 1, 2].map((col) => (
                <div key={col} className="flex flex-col gap-6 items-stretch">
                  {statCards.slice(col * 2, col * 2 + 2).map((card, idx) => (
                    <motion.div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start justify-between min-h-[120px] h-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + (col * 2 + idx) * 0.05 }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-icons text-2xl" style={{ color: card.color }}>{card.icon}</span>
                        <span className="text-2xl font-bold text-gray-900">{card.value}</span>
                      </div>
                      <div className="text-xs text-gray-500 font-semibold">{card.label}</div>
                      {card.sub && <div className="flex items-center gap-1 mt-1"><span className="text-xs font-semibold" style={{ color: card.subColor }}>{card.sub}</span><span className="text-xs text-gray-400">{card.subText}</span></div>}
                      {card.link && <a href={card.link} className="text-xs text-[#0ea5e9] font-semibold mt-1 underline">{card.linkText}</a>}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* Second Row: Visitor Graph + Network + Job Trends */}
          <div className="grid grid-cols-12 gap-6">
            <motion.div className="col-span-6 bg-white rounded-2xl shadow-lg p-6 flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <VisitorGraph />
            </motion.div>
            <motion.div className="col-span-3 bg-white rounded-2xl shadow-lg p-6 flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <span className="font-semibold text-gray-900 mb-2">Network</span>
              <NetworkDonutChart />
            </motion.div>
            <motion.div className="col-span-3 bg-white rounded-2xl shadow-lg p-6 flex flex-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <span className="font-semibold text-gray-900 mb-2">Job Trends</span>
              <JobTrendsChart />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
