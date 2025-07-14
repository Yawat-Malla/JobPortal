"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import ProfileStrengthChart from "./components/ProfileStrengthChart";
import VisitorGraph from "./components/VisitorGraph";
import NetworkDonutChart from "./components/NetworkDonutChart";
import JobTrendsChart from "./components/JobTrendsChart";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export default function StatisticsPage() {
  const [statCards, setStatCards] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      const res = await fetch("/api/statistics");
      if (res.ok) {
        const data = await res.json();
        setStatCards(data.statCards);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      {/* Sidebar fixed */}
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
      </div>
      {/* Main content scrollable */}
      <main className="flex-1 ml-64 min-h-screen overflow-x-auto">
        {/* Top Bar */}
        <Navbar
          title="Statistics"
          profile={{ name: "Oda Dink", role: "Super Admin" }}
          right={
            <>
              <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="material-icons text-black">notifications</span>
                <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">10</span>
              </motion.button>
              <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="material-icons text-black">email</span>
                <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">12</span>
              </motion.button>
            </>
          }
        />
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
                  {statCards.slice(col * 2, col * 2 + 2).map((c, idx) => {
                    const card = c as {
                      label: string;
                      value: string | number;
                      icon: string;
                      color: string;
                      sub?: string;
                      subColor?: string;
                      subText?: string;
                      link?: string;
                      linkText?: string;
                    };
                    return (
                      <motion.div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start justify-between min-h-[120px] h-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + (col * 2 + idx) * 0.05 }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="material-icons text-2xl" style={{ color: card.color }}>{card.icon}</span>
                          <span className="text-2xl font-bold text-gray-900">{card.value}</span>
                        </div>
                        <div className="text-xs text-gray-500 font-semibold">{card.label}</div>
                        {card.sub && <div className="flex items-center gap-1 mt-1"><span className="text-xs font-semibold" style={{ color: card.subColor }}>{card.sub}</span><span className="text-xs text-gray-400">{card.subText}</span></div>}
                        {card.link && <a href={card.link} className="text-xs text-[#0ea5e9] font-semibold mt-1 underline">{card.linkText}</a>}
                      </motion.div>
                    );
                  })}
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
