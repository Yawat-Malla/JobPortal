/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";


const filterTabs = ["All", "Pending", "On-Hold", "Candidate"];

const statusColors = {
  Pending: "bg-gray-200 text-gray-500",
  "On-Hold": "bg-orange-100 text-orange-500 border border-orange-300",
  Candidate: "bg-green-500 text-white",
};

const companyColors = ["#0ea5e9", "#a78bfa", "#f59e42", "#22c55e", "#6366f1"];

const applications = [
  {
    id: "#APL-0003",
    date: "June 1, 2020, 08:22 AM",
    company: "Mosciski Inc.",
    companyDesc: "Creative Design Agency",
    companyColor: companyColors[2],
    type: "FREELANCE",
    position: "Intern UI Designer",
    contact: ["call", "email"],
    status: "Pending",
  },
  {
    id: "#APL-0002",
    date: "June 1, 2020, 08:22 AM",
    company: "Funk Inc.",
    companyDesc: "IT Department",
    companyColor: companyColors[1],
    type: "PART TIME",
    position: "Junior UI Designer",
    contact: ["call", "email"],
    status: "On-Hold",
  },
  {
    id: "#APL-0003",
    date: "June 1, 2020, 08:22 AM",
    company: "Mosciski Inc.",
    companyDesc: "Creative Design Agency",
    companyColor: companyColors[2],
    type: "FREELANCE",
    position: "Intern UI Designer",
    contact: ["call", "email"],
    status: "Pending",
  },
  {
    id: "#APL-0001",
    date: "June 1, 2020, 08:22 AM",
    company: "Highspeed Studios",
    companyDesc: "Creative Design Agency",
    companyColor: companyColors[3],
    type: "FULLTIME",
    position: "Senior UX Designer",
    contact: ["call", "email"],
    status: "Candidate",
  },
  {
    id: "#APL-0002",
    date: "June 1, 2020, 08:22 AM",
    company: "Funk Inc.",
    companyDesc: "IT Department",
    companyColor: companyColors[1],
    type: "PART TIME",
    position: "Junior UI Designer",
    contact: ["call", "email"],
    status: "On-Hold",
  },
  {
    id: "#APL-0001",
    date: "June 1, 2020, 08:22 AM",
    company: "Highspeed Studios",
    companyDesc: "Creative Design Agency",
    companyColor: companyColors[3],
    type: "FULLTIME",
    position: "Senior UX Designer",
    contact: ["call", "email"],
    status: "Candidate",
  },
];

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [activePage, setActivePage] = useState(3);

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <span className="material-icons text-2xl cursor-pointer">menu</span>
            <span className="text-xl font-semibold text-black">Applications</span>
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
              <span className="material-icons text-black" key="notif-icon">notifications</span>
              <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" key="notif-badge">18</span>
            </motion.button>
            <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <span className="material-icons text-black" key="email-icon">email</span>
              <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center" key="email-badge">52</span>
            </motion.button>
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden" key="avatar" />
              <div className="flex flex-col" key="user-info">
                <span className="font-semibold text-sm text-black">Oda Dink</span>
                <span className="text-xs text-gray-500">Super Admin</span>
              </div>
            </motion.div>
          </div>
        </header>
        {/* Filter Tabs */}
        <section className="px-10 pt-6 pb-2 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div className="text-sm text-gray-700 font-semibold">Showing 45 Applicants</div>
            <div className="text-xs text-gray-400">Based your preferences</div>
          </div>
          <div className="flex gap-2 mb-4">
            {filterTabs.map(tab => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors border ${activeTab === tab ? 'bg-[#a7d8f7] text-[#0ea5e9] border-[#0ea5e9]' : 'bg-[#f3f4f6] text-gray-500 border-transparent'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </section>
        {/* Applications Table */}
        <section className="px-10">
          <div className="w-full bg-white rounded-2xl shadow-lg p-0 overflow-x-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-900">Applications</div>
              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: '#e0f2fe' }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-700 bg-white hover:bg-[#e0f2fe] transition-colors"
              >
                <span key="newest-label">Newest</span>
                <span className="material-icons text-base" key="expand-icon">expand_more</span>
              </motion.button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-gray-100">
                    <th className="px-6 py-3 font-medium"><input type="checkbox" /></th>
                    <th className="px-6 py-3 font-medium">ID</th>
                    <th className="px-6 py-3 font-medium">Date Applied</th>
                    <th className="px-6 py-3 font-medium">Company</th>
                    <th className="px-6 py-3 font-medium">Type</th>
                    <th className="px-6 py-3 font-medium">Position</th>
                    <th className="px-6 py-3 font-medium">Contact</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-2 py-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.01, backgroundColor: '#f0f9ff' }}
                      className="border-b border-gray-100 group transition-colors"
                    >
                      <td className="px-6 py-4"><input type="checkbox" /></td>
                      <td className="px-6 py-4 font-mono text-black">{app.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-black">{app.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: app.companyColor + '22' }}>
                            <span className="material-icons text-xl" style={{ color: app.companyColor }}>person</span>
                          </span>
                          <div>
                            <div className="font-semibold text-gray-900">{app.company}</div>
                            <div className="text-xs text-gray-400">{app.companyDesc}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{app.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-700">{app.position}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <motion.button whileHover={{ scale: 1.2, backgroundColor: '#e0f2fe' }} whileTap={{ scale: 0.95 }} className="rounded-full p-2 bg-[#f3f4f6] text-[#0ea5e9] hover:bg-[#e0f2fe] transition-colors">
                            <span className="material-icons">call</span>
                          </motion.button>
                          <motion.button whileHover={{ scale: 1.2, backgroundColor: '#e0f2fe' }} whileTap={{ scale: 0.95 }} className="rounded-full p-2 bg-[#f3f4f6] text-[#0ea5e9] hover:bg-[#e0f2fe] transition-colors">
                            <span className="material-icons">email</span>
                          </motion.button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-4 py-1 rounded-full text-xs font-semibold inline-block ${statusColors[app.status as keyof typeof statusColors]}`}>{app.status}</span>
                      </td>
                      <td className="px-2 py-4">
                        <motion.button whileHover={{ scale: 1.2, backgroundColor: '#e0f2fe' }} whileTap={{ scale: 0.95 }} className="rounded-full p-2 text-gray-400 hover:text-[#0ea5e9] transition-colors">
                          <span className="material-icons">more_vert</span>
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
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
