"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Profile", "Preferences", "General", "Admin"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [name, setName] = useState("Oda Dink");
  const [middleName, setMiddleName] = useState("");
  const [roles, setRoles] = useState<string[]>(["freelancer", "client"]); // Placeholder, will fetch from backend
  const [activeRole, setActiveRole] = useState<string>("freelancer"); // Placeholder, will fetch from backend
  const [roleLoading, setRoleLoading] = useState(false);
  const [roleAlert, setRoleAlert] = useState<string | null>(null);

  // Fetch roles and activeRole from backend (mocked for now)
  useEffect(() => {
    // TODO: Replace with real API call
    setRoles(["freelancer", "client", "admin", "superadmin"]);
    setActiveRole("freelancer");
  }, []);

  const handleRoleSwitch = async () => {
    setRoleLoading(true);
    setRoleAlert(null);
    try {
      // TODO: Replace with real API call
      await new Promise(res => setTimeout(res, 800));
      setRoleAlert("Role switched successfully!");
    } catch {
      setRoleAlert("Failed to switch role.");
    } finally {
      setRoleLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar />
      </div>
      <main className="flex-1 ml-64 min-h-screen overflow-x-auto">
        <Navbar
          title="Settings"
          profile={{ name: name, role: activeRole }}
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
        <div className="px-0 py-10 flex flex-col gap-8 w-full mt-6">
          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-6 px-10">
            {tabs.map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-lg font-semibold transition-colors border-b-2 ${activeTab === tab ? 'border-[#0ea5e9] text-[#0ea5e9]' : 'border-transparent text-gray-400'}`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "Profile" && (
              <motion.section key="profile" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }}
                className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8 px-10">
                {/* Edit Profile Form */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow p-8 flex flex-col gap-8 min-w-[340px]">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <div className="text-xl font-bold text-gray-900">Edit Profile</div>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="text-sm text-gray-700">Available for hire?</span>
                      <button onClick={() => setDarkMode(v => !v)} className={`w-10 h-5 rounded-full transition-colors duration-200 ${darkMode ? 'bg-[#0ea5e9]' : 'bg-gray-300'} flex items-center px-1`}>
                        <motion.span layout className={`w-4 h-4 rounded-full bg-white shadow ${darkMode ? 'ml-5' : 'ml-0'}`} />
                      </button>
                      <button className="text-xs px-4 py-2 rounded-full bg-gray-100 text-gray-500 font-semibold hover:bg-gray-200 transition">Cancel</button>
                      <button className="text-xs px-4 py-2 rounded-full bg-[#0ea5e9] text-white font-semibold shadow hover:bg-sky-600 transition">Save Changes</button>
                    </div>
                  </div>
                  {/* General Info */}
                  <div className="flex flex-col gap-6">
                    <div className="font-semibold text-gray-700 mb-1">GENERALS</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">First Name</label>
                        <input value={name.split(' ')[0]} onChange={e => setName(e.target.value + ' ' + name.split(' ')[1])} className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-base" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Middle Name</label>
                        <input value={middleName} onChange={e => setMiddleName(e.target.value)} placeholder="Type here" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Last Name</label>
                        <input value={name.split(' ')[1] || ''} onChange={e => setName(name.split(' ')[0] + ' ' + e.target.value)} className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-base" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Username</label>
                        <input value="davidheree" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" readOnly />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Password</label>
                        <div className="flex items-center gap-2">
                          <input type="password" value="password123" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" readOnly />
                          <button className="text-xs text-[#0ea5e9] font-semibold hover:underline">SHOW</button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Re-Type Password</label>
                        <div className="flex items-center gap-2">
                          <input type="password" value="password123" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" readOnly />
                          <button className="text-xs text-[#0ea5e9] font-semibold hover:underline">SHOW</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Contact Info */}
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="font-semibold text-gray-700 mb-1">CONTACT</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2"><span className="material-icons text-[#0ea5e9]">call</span>+50 123 456 78</div>
                      <div className="flex items-center gap-2"><span className="material-icons text-[#0ea5e9]">chat</span>+50 444 5511 11</div>
                      <div className="flex items-center gap-2"><span className="material-icons text-[#0ea5e9]">email</span>davidheree@mail.com</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Address</label>
                        <input value="Franklin Avenue St. Corner" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" readOnly />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">City</label>
                        <input value="London" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" readOnly />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 font-semibold">Country</label>
                        <input value="England" className="px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" readOnly />
                      </div>
                    </div>
                  </div>
                  {/* About Me */}
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="font-semibold text-gray-700 mb-1">ABOUT ME</div>
                    <textarea className="w-full min-h-[80px] px-4 py-2 rounded-lg border border-gray-200 bg-[#f0f9ff] text-base" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum qua laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta su" />
                  </div>
                  {/* Skills */}
                  <div className="flex flex-col gap-6 mt-6">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-semibold text-gray-700">SKILLS</div>
                      <button className="text-xs text-[#0ea5e9] font-semibold hover:underline">+ Add New Skills</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-gray-700"><span>Programming</span><span>78%</span></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 rounded-full bg-[#0ea5e9]" style={{ width: '78%' }} /></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-gray-700"><span>Prototyping</span><span>65%</span></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 rounded-full bg-[#a78bfa]" style={{ width: '65%' }} /></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-gray-700"><span>UI Design</span><span>89%</span></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: '89%' }} /></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-gray-700"><span>Researching</span><span>94%</span></div>
                        <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 rounded-full bg-[#0ea5e9]" style={{ width: '94%' }} /></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Profile Summary Card */}
                <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.3 }} className="w-full max-w-xs bg-white rounded-2xl shadow p-6 flex flex-col gap-6 self-start">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center mb-2">
                      <Image src="/avatar1.png" alt="Oda Dink" className="w-full h-full object-cover" width={80} height={80} />
                    </div>
                    <div className="font-bold text-lg text-gray-900">Oda Dink</div>
                    <div className="text-xs text-gray-500 mb-2">Programmer</div>
                  </div>
                  <div className="flex justify-between text-center mb-2">
                    <div>
                      <div className="font-bold text-lg text-gray-900">228</div>
                      <div className="text-xs text-gray-500">Following</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">4,842</div>
                      <div className="text-xs text-gray-500">Followers</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-xs text-gray-700">
                    <div className="flex items-center gap-2"><span className="material-icons text-[#0ea5e9]">call</span>+50 123 456 78</div>
                    <div className="flex items-center gap-2"><span className="material-icons text-[#0ea5e9]">email</span>davidheree@mail.com</div>
                  </div>
                  <div className="flex gap-2 justify-center mt-2">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0ea5e9]22 mb-1"><span className="text-xs font-bold text-[#0ea5e9]">66%</span></div>
                      <span className="text-xs text-gray-500">PHP</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#22c55e]22 mb-1"><span className="text-xs font-bold text-[#22c55e]">31%</span></div>
                      <span className="text-xs text-gray-500">Vue</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f59e42]22 mb-1"><span className="text-xs font-bold text-[#f59e42]">7%</span></div>
                      <span className="text-xs text-gray-500">Laravel</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold text-xs text-gray-700 mb-2">Portfolios</div>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="flex items-center gap-2 text-xs text-[#0ea5e9] font-semibold"><span className="material-icons">facebook</span>/davidheree.porto</a>
                      <a href="#" className="flex items-center gap-2 text-xs text-[#0ea5e9] font-semibold"><span className="material-icons">public</span>/david.drib</a>
                      <a href="#" className="flex items-center gap-2 text-xs text-[#0ea5e9] font-semibold"><span className="material-icons">linkedin</span>/davidheree222</a>
                      <a href="#" className="flex items-center gap-2 text-xs text-[#0ea5e9] font-semibold"><span className="material-icons">link</span>/davidhereechan</a>
                    </div>
                  </div>
                </motion.div>
              </motion.section>
            )}
            {activeTab === "Preferences" && (
              <motion.section key="preferences" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
                <div className="text-lg font-bold text-gray-900 mb-2">Preferences</div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-gray-700">Email Notifications</span>
                    <button onClick={() => setEmailNotif(v => !v)} className={`w-12 h-6 rounded-full transition-colors duration-200 ${emailNotif ? 'bg-[#0ea5e9]' : 'bg-gray-300'} flex items-center px-1`}>
                      <motion.span layout className={`w-5 h-5 rounded-full bg-white shadow ${emailNotif ? 'ml-6' : 'ml-0'}`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base text-gray-700">Push Notifications</span>
                    <button onClick={() => setPushNotif(v => !v)} className={`w-12 h-6 rounded-full transition-colors duration-200 ${pushNotif ? 'bg-[#0ea5e9]' : 'bg-gray-300'} flex items-center px-1`}>
                      <motion.span layout className={`w-5 h-5 rounded-full bg-white shadow ${pushNotif ? 'ml-6' : 'ml-0'}`} />
                    </button>
                  </div>
                  <div className="flex items-center gap-6 mt-4">
                    <span className="text-base text-gray-700">Dark Mode</span>
                    <button onClick={() => setDarkMode(v => !v)} className={`w-12 h-6 rounded-full transition-colors duration-200 ${darkMode ? 'bg-[#0ea5e9]' : 'bg-gray-300'} flex items-center px-1`}>
                      <motion.span layout className={`w-5 h-5 rounded-full bg-white shadow ${darkMode ? 'ml-6' : 'ml-0'}`} />
                    </button>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === "General" && (
              <motion.section key="general" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
                <div className="text-lg font-bold text-gray-900 mb-2">Account</div>
                <div className="text-gray-500 mb-4">General settings and information will appear here.</div>
                {/* Role Switcher */}
                <div className="mb-4">
                  <div className="font-semibold text-gray-700 mb-2">Active Role</div>
                  <div className="flex gap-4 flex-wrap">
                    {roles.map(role => (
                      <motion.label key={role} whileHover={{ scale: 1.08 }} className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-colors ${activeRole === role ? 'bg-[#0ea5e9] text-white border-[#0ea5e9]' : 'bg-white text-[#0ea5e9] border-[#0ea5e9]/30'}`}>
                        <input
                          type="radio"
                          name="activeRole"
                          value={role}
                          checked={activeRole === role}
                          onChange={() => setActiveRole(role)}
                          className="accent-[#0ea5e9]"
                        />
                        <span className="capitalize">{role}</span>
                      </motion.label>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleRoleSwitch}
                    disabled={roleLoading}
                    className="mt-3 bg-[#0ea5e9] text-white px-6 py-2 rounded-full font-semibold shadow transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {roleLoading ? "Switching..." : "Switch Role"}
                  </motion.button>
                  <AnimatePresence>
                    {roleAlert && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mt-2 text-sm font-medium text-green-700 bg-green-100 rounded px-3 py-1">
                        {roleAlert}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
            )}
            {activeTab === "Admin" && (
              <motion.section key="admin" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
                <div className="text-lg font-bold text-gray-900 mb-2">Admin</div>
                <div className="text-gray-500">Admin controls and advanced settings will appear here.</div>
              </motion.section>
            )}
          </AnimatePresence>
          {/* Save Button */}
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="self-end bg-[#0ea5e9] text-white px-8 py-3 rounded-full font-semibold shadow transition-colors text-base mt-2">
            Save Changes
          </motion.button>
        </div>
      </main>
    </div>
  );
}
