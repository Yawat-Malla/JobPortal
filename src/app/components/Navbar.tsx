"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  title: string;
  subtitle?: ReactNode;
  searchPlaceholder?: string;
  profile?: { name?: string; role?: string };
  right?: React.ReactNode;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  subtitle,
  searchPlaceholder = "Search something here...",
  profile,
  right,
  className = "",
}) => (
  <header className={`flex items-center justify-between px-10 py-6 bg-white shadow-sm ${className}`}>
    <div className="flex flex-col">
      <span className="text-lg font-semibold text-black">{title}</span>
      {subtitle && (
        <nav className="text-xs text-[#0ea5e9] mt-1">
          {subtitle}
        </nav>
      )}
    </div>
    <div className="flex-1 flex justify-center items-center gap-6">
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="w-full max-w-md px-5 py-2 rounded-full border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] text-black bg-white text-base transition-all duration-200"
        style={{ minWidth: '260px' }}
      />
    </div>
    <div className="flex items-center gap-6 ml-6">
      {right}
      <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden" />
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-black">{profile?.name || "-"}</span>
          <span className="text-xs text-gray-500">{profile?.role || "-"}</span>
        </div>
      </motion.div>
    </div>
  </header>
);

export default Navbar;
