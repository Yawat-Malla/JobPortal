"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const tabs = ["All", "Unread", "Important"];
const teamMessages = [
  {
    name: "Jobie UI Design Team",
    avatars: ["/avatar1.png", "/avatar2.png", "/avatar3.png"],
    message: "Hey Jenny, don't forget to prepare prototype for next week",
    time: "2m ago",
    unread: false,
  },
  {
    name: "World Designer",
    avatars: ["/avatar4.png"],
    message: "I think you should put that component more lower th..",
    time: "12m ago",
    unread: true,
  },
];
const recentMessages = [
  {
    name: "Jamet Hasibuan",
    avatar: "/avatar5.png",
    message: "I remember that project due is tomorrow.",
    time: "2m ago",
    online: true,
  },
  {
    name: "Munaroh",
    avatar: "/avatar6.png",
    message: "Hei, don’t forget to clear server cache!",
    time: "2m ago",
    online: true,
  },
  {
    name: "Louis Khan",
    avatar: "/avatar7.png",
    message: "I don’t know where that files saved dude.",
    time: "2m ago",
    online: false,
  },
  {
    name: "Samsudin",
    avatar: "/avatar8.png",
    message: "Ok sir. I will fix it as soon as possible",
    time: "2m ago",
    online: false,
  },
];
const chatMessages = [
  {
    sender: "Kevin Julios",
    avatar: "/avatar1.png",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto b",
    time: "Sunday, October 24th, 2020  at 4:30 AM",
    self: false,
    online: true,
  },
  {
    sender: "Chloe Simatupang",
    avatar: "/avatar2.png",
    text: "Hey, check my design update last night. Tell me what you think and if that is OK",
    time: "Sunday, October 24th, 2020  at 4:30 AM",
    self: false,
    online: false,
  },
  {
    sender: "self",
    avatar: "/avatar9.png",
    text: "sed quia consequuntur magni dolores",
    time: "Sunday, October 24th, 2020  at 4:30 AM",
    self: true,
    online: true,
  },
  {
    sender: "self",
    avatar: "/avatar9.png",
    text: "nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea",
    time: "Sunday, October 24th, 2020  at 4:30 AM",
    self: true,
    online: true,
  },
];

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [input, setInput] = useState("");

  return (
    <div className="flex min-h-screen bg-[#f0f9ff]">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <Navbar
          title="Messages"
          profile={{ name: "Oda Dink", role: "Super Admin" }}
          right={
            <>
              <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="material-icons text-black">notifications</span>
                <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">18</span>
              </motion.button>
              <motion.button className="relative" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <span className="material-icons text-black">email</span>
                <span className="absolute -top-1 -right-1 bg-[#0ea5e9] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">52</span>
              </motion.button>
            </>
          }
        />
        {/* Main Messaging Area */}
        <section className="flex-1 flex flex-row gap-6 px-10 py-8">
          {/* Left: Message List */}
          <div className="w-full max-w-xs flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 h-full">
              {/* Tabs */}
              <div className="flex gap-6 border-b border-gray-200 pb-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className={`text-sm font-semibold pb-2 transition-colors border-b-2 ${activeTab === tab ? 'border-[#0ea5e9] text-[#0ea5e9]' : 'border-transparent text-gray-400'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full bg-[#0ea5e9] text-white font-semibold py-3 rounded-full shadow mb-4 mt-2">+ New Message</motion.button>
              {/* Team Messages */}
              <div className="text-xs text-gray-400 font-semibold mb-2">TEAM</div>
              <div className="flex flex-col gap-2">
                {teamMessages.map((msg, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.01, backgroundColor: '#f0f9ff' }} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors">
                    <div className="flex -space-x-2">
                      {msg.avatars.map((a, i) => (
                        <Image key={i} src={a} alt="avatar" className="w-7 h-7 rounded-full border-2 border-white" width={28} height={28} />
                      ))}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900 truncate">{msg.name}</div>
                      <div className="text-xs text-gray-500 truncate">{msg.message}</div>
                    </div>
                    <div className="text-xs text-gray-400 whitespace-nowrap">{msg.time}</div>
                  </motion.div>
                ))}
              </div>
              {/* Recent Messages */}
              <div className="text-xs text-gray-400 font-semibold mt-4 mb-2">RECENT MESSAGE</div>
              <div className="flex flex-col gap-2">
                {recentMessages.map((msg, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.01, backgroundColor: '#f0f9ff' }} className="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors">
                    <Image src={msg.avatar} alt="avatar" className="w-7 h-7 rounded-full border-2 border-white" width={28} height={28} />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900 truncate">{msg.name}</div>
                      <div className="text-xs text-gray-500 truncate">{msg.message}</div>
                    </div>
                    <div className="text-xs text-gray-400 whitespace-nowrap">{msg.time}</div>
                    {msg.online && <span className="w-2 h-2 bg-green-500 rounded-full ml-1" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Chat Area */}
          <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg p-6">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <div>
                <div className="font-semibold text-lg text-gray-900">Jobie UI Design Team</div>
                <div className="text-xs text-gray-400">We share about daily life as designer in the world</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <Image src="/avatar1.png" alt="avatar" className="w-7 h-7 rounded-full border-2 border-white" width={28} height={28} />
                  <Image src="/avatar2.png" alt="avatar" className="w-7 h-7 rounded-full border-2 border-white" width={28} height={28} />
                  <Image src="/avatar3.png" alt="avatar" className="w-7 h-7 rounded-full border-2 border-white" width={28} height={28} />
                  <span className="w-7 h-7 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center font-semibold text-xs border-2 border-white">5+</span>
                </div>
                <span className="material-icons text-gray-400 cursor-pointer">star_border</span>
                <span className="material-icons text-gray-400 cursor-pointer">more_vert</span>
              </div>
            </div>
            {/* Chat Messages */}
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto pb-4">
              {chatMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex ${msg.self ? 'justify-end' : 'justify-start'} w-full`}
                >
                  <div className={`flex items-end gap-2 max-w-[70%] ${msg.self ? 'flex-row-reverse' : ''}`}>
                    <Image src={msg.avatar} alt="avatar" className="w-8 h-8 rounded-full border-2 border-white" width={32} height={32} />
                    <div>
                      <div className={`rounded-2xl px-4 py-2 mb-1 ${msg.self ? 'bg-[#0ea5e9] text-white' : 'bg-gray-100 text-gray-900'} text-sm`}>{msg.text}</div>
                      <div className="text-xs text-gray-400 mb-2">{msg.time}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Chat Input */}
            <form className="flex items-center gap-2 border-t border-gray-100 pt-4 mt-2" onSubmit={e => { e.preventDefault(); setInput(""); }}>
              <Image src="/avatar9.png" alt="avatar" className="w-9 h-9 rounded-full border-2 border-white" width={36} height={36} />
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-black bg-white text-base transition-all duration-200"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.08, backgroundColor: '#0ea5e9' }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#0ea5e9] text-white px-6 py-3 rounded-full font-semibold shadow transition-colors text-base"
              >
                SEND
              </motion.button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
