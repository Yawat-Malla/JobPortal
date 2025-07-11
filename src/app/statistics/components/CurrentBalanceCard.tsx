import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { label: "01", value: 60 },
  { label: "02", value: 40 },
  { label: "03", value: 70 },
  { label: "04", value: 50 },
  { label: "05", value: 80 },
];

export default function CurrentBalanceCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="material-icons text-3xl text-[#22c55e]">account_balance</span>
          <span className="text-lg font-semibold text-gray-900">$ 392,556.76</span>
        </div>
        <span className="text-xs font-semibold text-[#22c55e]">+2.7%</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">Current Balance</span>
        <span className="text-xs text-gray-400">Weekly</span>
      </div>
      <div className="w-full h-32">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="label" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 