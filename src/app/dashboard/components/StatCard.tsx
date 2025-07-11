import React from "react";

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, color = "#0ea5e9" }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow p-6 min-w-[160px] min-h-[100px]">
    <div className="flex items-center justify-center w-10 h-10 rounded-full mb-2" style={{ background: color + '22' }}>
      <span className="material-icons" style={{ color }}>{icon}</span>
    </div>
    <span className="text-2xl font-bold text-gray-900">{value}</span>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);

export default StatCard; 