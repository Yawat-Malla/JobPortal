import React from "react";
import { motion } from "framer-motion";

interface JobCardProps {
  company: string;
  title: string;
  salary: string;
  description: string;
  type: "REMOTE" | "PART TIME" | "FULLTIME";
  location: string;
  icon?: string;
  color?: string;
}

const typeColors = {
  REMOTE: "#0ea5e9",
  "PART TIME": "#a78bfa",
  FULLTIME: "#f59e42",
};

const JobCard: React.FC<JobCardProps> = ({ company, title, salary, description, type, location, icon = "work", color }) => (
  <motion.div
    className="bg-white rounded-2xl shadow p-5 flex flex-col min-w-[220px]"
    whileHover={{ scale: 1.06, boxShadow: "0 8px 32px 0 rgba(14,165,233,0.18)" }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="material-icons text-lg" style={{ color: color || typeColors[type] }}>{icon}</span>
      <span className="text-xs text-gray-500 font-semibold">{company}</span>
    </div>
    <div className="font-bold text-base text-gray-900 mb-1">{title}</div>
    <div className="text-xs text-gray-400 mb-2">{salary}</div>
    <div className="text-xs text-gray-500 mb-3 line-clamp-2">{description}</div>
    <div className="flex items-center gap-2 mt-auto">
      <span className="px-2 py-1 rounded-full text-xs font-semibold" style={{ background: (color || typeColors[type]) + '22', color: color || typeColors[type] }}>{type}</span>
      <span className="text-xs text-gray-400 ml-auto">{location}</span>
    </div>
  </motion.div>
);

export default JobCard; 