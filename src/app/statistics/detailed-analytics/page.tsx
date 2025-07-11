"use client";
import React from "react";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import TotalRevenueCard from "../components/TotalRevenueCard";
import WithdrawnCard from "../components/WithdrawnCard";
import CurrentBalanceCard from "../components/CurrentBalanceCard";
import RevenueBarChartCard from "../components/RevenueBarChartCard";

const pieData = [
  { label: "Invoices Made", value: 81, color: "#0ea5e9" },
  { label: "Clients Growth", value: 22, color: "#a78bfa" },
  { label: "Projects Done", value: 62, color: "#38bdf8" },
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
            <span className="material-icons text-2xl cursor-pointer">arrow_back</span>
            <span className="text-xl font-semibold text-black">Detailed Analytics</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-6">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full max-w-md px-5 py-2 rounded-full border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-black bg-white text-base transition-all duration-200"
              style={{ minWidth: '260px' }}
            />
          </div>
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className="bg-[#0ea5e9] text-white px-6 py-3 rounded-full font-semibold shadow transition-colors text-base flex items-center gap-2">
            <span className="material-icons">file_download</span> Get Report
          </motion.button>
        </header>
        {/* Breadcrumb */}
        <div className="px-10 pt-4 pb-2 text-sm text-gray-400">
          <span className="text-[#0ea5e9] font-semibold cursor-pointer">Statistics</span> / Detailed Analytics
        </div>
        {/* Main Grid Layout */}
        <div className="px-10 pb-10 flex flex-col gap-6 min-w-[1200px]">
          {/* First Row: Stat Cards */}
          <div className="grid grid-cols-12 gap-6">
            <motion.div className="col-span-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, type: 'spring', stiffness: 80 }}>
              <TotalRevenueCard />
            </motion.div>
            <motion.div className="col-span-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}>
              <WithdrawnCard />
            </motion.div>
            <motion.div className="col-span-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}>
              <CurrentBalanceCard />
            </motion.div>
          </div>
          {/* Second Row: Revenue Chart & Pie Chart */}
          <div className="grid grid-cols-12 gap-6">
            <motion.div className="col-span-8" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, type: 'spring', stiffness: 60 }}>
              <RevenueBarChartCard />
            </motion.div>
            {/* Pie Chart */}
            <motion.div className="col-span-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, type: 'spring', stiffness: 60 }}>
              <div className="font-semibold text-gray-900 mb-2">Pie Chart</div>
              <div className="flex flex-col items-center">
                <svg width="80" height="80" viewBox="0 0 36 36" className="block mb-2">
                  {(() => {
                    let acc = 0;
                    return pieData.map((slice) => {
                      const r = 16;
                      const c = 2 * Math.PI * r;
                      const val = (slice.value / 100) * c;
                      const dashArray = `${val} ${c - val}`;
                      const dashOffset = c - acc;
                      acc += val;
                      return (
                        <circle
                          key={slice.label}
                          r={r}
                          cx={18}
                          cy={18}
                          fill="none"
                          stroke={slice.color}
                          strokeWidth={3.5}
                          strokeDasharray={dashArray}
                          strokeDashoffset={dashOffset}
                          style={{ transition: 'stroke-dashoffset 0.5s' }}
                        />
                      );
                    });
                  })()}
                </svg>
                <div className="flex flex-col gap-1">
                  {pieData.map((slice) => (
                    <div key={slice.label} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: slice.color }} />
                      <span className="text-xs text-gray-500">{slice.label}</span>
                      <span className="text-xs font-semibold text-gray-900 ml-2">{slice.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <div className="font-semibold text-xs text-gray-900 mb-1">Increase your profile strength</div>
                <div className="text-xs text-gray-400 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                <motion.button whileHover={{ scale: 1.05, backgroundColor: '#0ea5e9' }} whileTap={{ scale: 0.97 }} className="bg-[#0ea5e9] text-white px-4 py-1.5 rounded-full font-semibold shadow transition-colors text-xs">Learn More</motion.button>
              </div>
            </motion.div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
