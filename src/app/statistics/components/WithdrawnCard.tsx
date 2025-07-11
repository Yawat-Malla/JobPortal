import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

const data = [
  { day: "Sunday", value: 60 },
  { day: "Monday", value: 80 },
  { day: "Tuesday", value: 45, striped: true },
];

export default function WithdrawnCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="material-icons text-3xl text-[#ef4444]">account_balance_wallet</span>
          <span className="text-lg font-semibold text-gray-900">$ 45,673</span>
        </div>
        <span className="text-xs font-semibold text-[#ef4444]">-1.0%</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">Withdrawn</span>
        <span className="text-xs text-gray-400">Weekly</span>
      </div>
      <div className="w-full h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.striped ? "url(#striped)" : "#ef4444"} />
              ))}
            </Bar>
            <defs>
              <pattern id="striped" patternUnits="userSpaceOnUse" width="6" height="6">
                <rect x="0" y="0" width="6" height="6" fill="#ef4444" />
                <path d="M0 0L6 6ZM6 0L0 6Z" stroke="#fff" strokeWidth="2" />
              </pattern>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 