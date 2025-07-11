"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sidebarLinks = [
  { icon: "dashboard", label: "Dashboard", href: "/dashboard" },
  { icon: "search", label: "Search Job", href: "/searchjobs" },
  { icon: "assignment", label: "Applications", href: "/applications" },
  { icon: "message", label: "Message", href: "/messages" },
  { icon: "bar_chart", label: "Statistics", href: "/statistics" },
  { icon: "settings", label: "Settings", href: "/settings" },
];

export default function Sidebar({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <aside className={`w-64 bg-[#0ea5e9] text-white flex flex-col justify-between py-8 px-4 min-h-screen rounded-tr-3xl rounded-br-3xl ${className}`}>
      <div>
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-[#0ea5e9] font-bold text-2xl">J</span>
          </div>
          <span className="font-bold text-2xl">Jobie</span>
        </div>
        <nav className="flex flex-col gap-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.05 }}
                className={`relative transition-colors font-medium rounded-lg cursor-pointer group overflow-hidden ${isActive ? 'sidebar-melt-active' : 'sidebar-melt-hover'}`}
                style={{ zIndex: 1 }}
              >
                <Link href={link.href} className={`flex items-center gap-3 py-2 px-3 w-full h-full z-10 relative ${isActive ? 'text-[#0ea5e9] font-semibold' : 'text-white'}`}>
                  <span className="material-icons">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
                <span className={`absolute left-0 top-0 h-full w-full transition-all duration-300 z-0 ${isActive ? 'bg-white sidebar-melt-shape' : 'group-hover:bg-white/90 sidebar-melt-shape'}`} aria-hidden="true" />
              </motion.div>
            );
          })}
        </nav>
      </div>
      {children}
    </aside>
  );
} 