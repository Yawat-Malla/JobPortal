"use client";
import React from "react";
import VacancyChart from "./components/VacancyChart";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

export default function Dashboard() {

  // Stat card colors from reference
  const statCards = [
    { icon: "event_note", label: "Interviews Schedule", value: 86, color: "#0ea5e9", bg: "#e0f2fe" },
    { icon: "send", label: "Application Sent", value: 75, color: "#38bdf8", bg: "#e0f2fe" },
    { icon: "person", label: "Profile Viewed", value: "45,673", color: "#22c55e", bg: "#dcfce7" },
    { icon: "mail", label: "Unread Message", value: 93, color: "#84cc16", bg: "#f7fee7" },
  ];
  const profile = {
    avatarUrl: undefined,
    name: "Oda Dink",
    role: "Programmer",
    skills: [
      { label: "PHP", percent: 66, color: "#0ea5e9" },
      { label: "Vue", percent: 31, color: "#22c55e" },
      { label: "Laravel", percent: 7, color: "#f59e42" },
    ],
    activities: [
      { icon: "assignment_turned_in", text: "Your application has accepted in 3 Vacancy", time: "12h ago" },
      { icon: "assignment_turned_in", text: "Your application has accepted in 3 Vacancy", time: "12h ago" },
      { icon: "assignment_turned_in", text: "Your application has accepted in 3 Vacancy", time: "12h ago" },
    ],
  };
  const chartData = [
    { week: "Week 01", applicationSent: 37, interviews: 2, rejected: 1 },
    { week: "Week 02", applicationSent: 45, interviews: 5, rejected: 2 },
    { week: "Week 03", applicationSent: 60, interviews: 8, rejected: 3 },
    { week: "Week 04", applicationSent: 50, interviews: 6, rejected: 2 },
    { week: "Week 05", applicationSent: 70, interviews: 10, rejected: 4 },
    { week: "Week 06", applicationSent: 65, interviews: 7, rejected: 3 },
    { week: "Week 07", applicationSent: 80, interviews: 12, rejected: 5 },
    { week: "Week 08", applicationSent: 55, interviews: 4, rejected: 2 },
    { week: "Week 09", applicationSent: 90, interviews: 15, rejected: 6 },
    { week: "Week 10", applicationSent: 75, interviews: 9, rejected: 4 },
  ];
  const jobs = [
    { company: "Maximoz Team", title: "Database Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "REMOTE" as const, location: "London, England", color: "#0ea5e9" },
    { company: "Klean n Clin Studios", title: "Senior Programmer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "PART TIME" as const, location: "Manchester, England", color: "#38bdf8" },
    { company: "Maximoz Team", title: "Intern UX Designer", salary: "$14,000 - $25,000", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", type: "FULLTIME" as const, location: "-", color: "#f59e42" },
  ];
  const companies = [
    { name: "Herman-Carter", vacancies: 21, color: "#22c55e" },
    { name: "Funk Inc.", vacancies: 21, color: "#0ea5e9" },
    { name: "Williamson Inc", vacancies: 21, color: "#38bdf8" },
    { name: "Donnelly Ltd.", vacancies: 21, color: "#f59e42" },
    { name: "Herman-Carter", vacancies: 21, color: "#0ea5e9" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      {/* Sidebar fixed */}
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
            </div>
      {/* Main content scrollable, offset by sidebar width */}
      <main className="flex-1 flex flex-col bg-[#f8fafc] ml-64">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-black">Dashboard</span>
            <nav className="text-xs text-[#0ea5e9] mt-1">
              <span className="font-semibold">Home</span> / Dashboard
            </nav>
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
              <div className="font-bold text-xl text-gray-900">Oda Dink</div>
              <div className="text-xs text-gray-500 mb-2">Programmer</div>
              <div className="flex gap-3 mb-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0ea5e9]22"><span className="text-sm font-bold text-[#0ea5e9]">66%</span></div>
                  <span className="text-xs text-gray-500 mt-1">PHP</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#22c55e]22"><span className="text-sm font-bold text-[#22c55e]">31%</span></div>
                  <span className="text-xs text-gray-500 mt-1">Vue</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f59e42]22"><span className="text-sm font-bold text-[#f59e42]">7%</span></div>
                  <span className="text-xs text-gray-500 mt-1">Laravel</span>
                </div>
              </div>
              <div className="w-full">
                <div className="font-semibold text-xs text-gray-700 mb-2">Recent Activities</div>
                <ul className="flex flex-col gap-2">
                  {profile.activities.map((activity, idx) => (
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