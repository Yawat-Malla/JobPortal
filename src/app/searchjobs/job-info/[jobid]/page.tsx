"use client";
import React from "react";
import Sidebar from "../../../components/Sidebar";
import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder job data (replace with dynamic fetch in the future)
const job = {
  id: "1",
  title: "Senior Database Programmer",
  company: {
    name: "Highspeed Studios",
    desc: "Creative Design Agency",
    location: "London, England",
    employees: "80 - 100",
    reviews: 4.5,
    following: true,
    image: "/office.jpg", // Replace with actual image
    avatar: undefined, // Replace with actual avatar
  },
  postedAgo: "5 days ago",
  workLevel: "Senior",
  minExp: "3 Years",
  type: "Part-Time",
  salary: "$1,200/month",
  overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
  checklist: [
    "Quis nostrud exercitation ullamco",
    "Velit voluptate duis aute",
    "Irure dolor in reprehenderit in voluptate",
    "Lorem Ipsum dolor sit amet",
  ],
  gallery: [
    "/office.jpg",
    "/office2.jpg",
    "/office3.jpg",
    "/office4.jpg",
    "/office5.jpg",
    "/office6.jpg",
    "/office7.jpg",
    "/office8.jpg",
  ],
};

export default function JobInfoPage() {
  // In the future, fetch job by params.jobid

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      {/* Sidebar fixed */}
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
      </div>
      {/* Main content scrollable, offset by sidebar width */}
      <main className="flex-1 ml-64 min-h-screen bg-[#f8fafc]">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-black">Job Details</span>
            <nav className="text-xs text-[#0ea5e9] mt-1">
              <span className="font-semibold hover:underline">Search Job</span> / <span className="text-gray-400">{job.title}</span>
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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-icons text-2xl text-gray-400 cursor-pointer">notifications</span>
              <span className="material-icons text-2xl text-gray-400 cursor-pointer">account_circle</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-black">Oda Dink</span>
              <span className="text-xs text-gray-400">Super Admin</span>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Card */}
          <motion.div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center md:items-stretch" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
              {/* Company image or placeholder */}
              <Image src={job.company.image} alt="Company" className="object-cover w-full h-full" width={400} height={300} />
            </div>
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="w-20 h-20 rounded-full bg-[#e0f2fe] flex items-center justify-center mb-2">
                <span className="material-icons text-5xl text-[#0ea5e9]">person</span>
              </div>
              <span className="font-bold text-lg text-gray-900">{job.company.name}</span>
              <span className="text-xs text-gray-500">{job.company.desc}</span>
              <button className="mt-2 px-8 py-2 rounded-full bg-[#e0f2fe] text-[#0ea5e9] font-semibold text-sm shadow-sm">{job.company.following ? "Following" : "Follow"}</button>
            </div>
            <div className="flex justify-between w-full text-xs text-gray-500 mb-2">
              <div className="flex items-center gap-1">
                <span className="material-icons text-base text-[#0ea5e9]">groups</span>
                <span className="font-semibold text-gray-900">{job.company.employees}</span> Employee
              </div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base text-[#f59e42]">star</span>
                <span className="font-semibold text-gray-900">{job.company.reviews}</span> Reviews
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="material-icons text-base text-[#38bdf8]">location_on</span>
              <span className="font-semibold text-gray-900">{job.company.location}</span>
            </div>
          </motion.div>

          {/* Job Details */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h2>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="text-[#0ea5e9] font-semibold cursor-pointer hover:underline">Maximoz Team</span>
                  <span className="mx-1">•</span>
                  <span>Posted {job.postedAgo}</span>
                </div>
                <div className="flex flex-wrap gap-6 text-sm mt-2">
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-[#0ea5e9]">work</span>
                    <span className="font-semibold">Work Level:</span> {job.workLevel}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-[#0ea5e9]">school</span>
                    <span className="font-semibold">Min. Experience:</span> {job.minExp}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-[#0ea5e9]">badge</span>
                    <span className="font-semibold">Employee Type:</span> {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-[#0ea5e9]">attach_money</span>
                    <span className="font-semibold">Salary:</span> {job.salary}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center mt-4 md:mt-0">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[#0ea5e9] text-white px-8 py-3 rounded-full font-semibold shadow transition-colors text-base">APPLY NOW</motion.button>
                <button className="bg-[#e0f2fe] text-[#0ea5e9] rounded-full p-3"><span className="material-icons">share</span></button>
                <button className="bg-[#e0f2fe] text-[#0ea5e9] rounded-full p-3"><span className="material-icons">favorite_border</span></button>
              </div>
            </div>
            {/* Overview */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-600 text-sm mb-4">{job.overview}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {job.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="material-icons text-[#22c55e] text-lg">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            {/* Gallery */}
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {job.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                    <Image src={img} alt="Gallery" className="object-cover w-full h-full" width={200} height={150} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 