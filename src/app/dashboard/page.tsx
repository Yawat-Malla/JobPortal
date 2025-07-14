"use client";
import React, { useEffect, useState } from "react";
import VacancyChart from "./components/VacancyChart";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Loading from "../components/Loading";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<unknown>(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch("/api/dashboard");
      if (res.ok) {
        setData(await res.json());
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading || !data) {
    return <Loading />;
  }

  const { statCards, profile, chartData, jobs, companies } = data as {
    statCards: { bg: string; color: string; icon: string; value: string; label: string }[];
    profile: { name: string; role: string; skills: { percent: number; label: string; color: string }[]; activities: { text: string; time: string }[] };
    chartData: { week: string; applicationSent: number; interviews: number; rejected: number }[];
    jobs: { title: string; company: string; salary: string; description: string; type: string; location: string; color: string }[];
    companies: { name: string; vacancies: number; color: string }[];
  };

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      {/* Sidebar fixed */}
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
      </div>
      {/* Main content scrollable, offset by sidebar width */}
      <main className="flex-1 flex flex-col bg-[#f8fafc] ml-64">
        {/* Top Bar */}
        <Navbar
          title="Dashboard"
          subtitle={<><span className="font-semibold">Home</span> / Dashboard</>}
          profile={profile}
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
        {/* Stat Cards */}
        <section className="px-10 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, idx) => (
            <motion.div
              key={idx}
              className="rounded-2xl shadow flex flex-col items-center justify-center py-8 cursor-pointer"
              style={{ background: card.bg, minHeight: 140 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(14,165,233,0.10)' }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="material-icons text-4xl mb-2" style={{ color: card.color }}>{card.icon}</span>
              <span className="text-3xl font-bold text-gray-900 mb-1">{card.value}</span>
              <span className="text-sm font-semibold" style={{ color: card.color }}>{card.label}</span>
            </motion.div>
          ))}
        </section>
        {/* Main Dashboard Grid */}
        <section className="px-10 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card and Activities */}
          <motion.div className="bg-white rounded-2xl shadow lg:col-span-1 flex flex-col gap-6"initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(14,165,233,0.10)' }} whileTap={{ scale: 0.98 }}>
            <div className="p-8 flex flex-col items-center" >
              <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-3 flex items-center justify-center">
                <span className="material-icons text-6xl text-gray-400">person</span>
              </div>
              <div className="font-bold text-xl text-gray-900">{profile?.name || "-"}</div>
              <div className="text-xs text-gray-500 mb-2">{profile?.role || "-"}</div>
              <div className="flex gap-3 mb-4">
                {profile?.skills?.map((skill, idx) => (
                  <div className="flex flex-col items-center" key={idx}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full" style={{ background: skill.color + '22' }}><span className="text-sm font-bold" style={{ color: skill.color }}>{skill.percent}%</span></div>
                    <span className="text-xs text-gray-500 mt-1">{skill.label}</span>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <div className="font-semibold text-xs text-gray-700 mb-2">Recent Activities</div>
                <ul className="flex flex-col gap-2">
                  {profile?.activities?.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="material-icons text-base text-[#0ea5e9]">check_circle</span>
                      <span>{activity.text}</span>
                      <span className="ml-auto text-gray-400">{activity.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Vacancy Chart and Jobs */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <motion.div className="bg-white rounded-2xl shadow p-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(14,165,233,0.10)' }} whileTap={{ scale: 0.98 }}>
              <VacancyChart data={chartData} />
            </motion.div>
            {/* Recommended Jobs */}
            <div className="rounded-2xl p-6">
              <div className="font-semibold text-gray-900 mb-4">Recommended Jobs</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm p-5 flex flex-col min-w-[240px] cursor-pointer"
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(14,165,233,0.10)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-icons text-lg" style={{ color: job.color }}>work</span>
                      <span className="text-xs text-gray-500 font-semibold">{job.company}</span>
                    </div>
                    <div className="font-bold text-base text-gray-900 mb-1">{job.title}</div>
                    <div className="text-xs text-gray-400 mb-2">{job.salary}</div>
                    <div className="text-xs text-gray-500 mb-3 line-clamp-2">{job.description}</div>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ background: job.color + '22', color: job.color }}>{job.type}</span>
                      <span className="text-xs text-gray-400 ml-auto">{job.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Featured Companies */}
        <section className="px-10 pb-10">
          <div className="font-semibold text-lg text-gray-900 mb-4">Featured Companies</div>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {companies.map((company, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow p-7 flex flex-col items-center min-w-[180px] max-w-[200px] cursor-pointer"
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(14,165,233,0.10)' }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="material-icons text-5xl mb-3" style={{ color: company.color }}>business</span>
                <div className="font-semibold text-base text-gray-900 text-center mb-1">{company.name}</div>
                <div className="text-sm text-gray-500">
                  <span style={{ color: company.color }}>{company.vacancies} Vacancy</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 