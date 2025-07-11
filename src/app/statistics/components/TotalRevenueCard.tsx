import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const dataMonthly = [
  { day: "S", value1: 4345, value2: 6000 },
  { day: "M", value1: 5000, value2: 7000 },
  { day: "T", value1: 3000, value2: 4000 },
  { day: "W", value1: 6000, value2: 8000 },
  { day: "T", value1: 7000, value2: 9000 },
  { day: "F", value1: 4000, value2: 5000 },
  { day: "S", value1: 8000, value2: 10000 },
];
const dataWeekly = [
  { day: "S", value1: 2000, value2: 3000 },
  { day: "M", value1: 2500, value2: 3500 },
  { day: "T", value1: 1800, value2: 2200 },
  { day: "W", value1: 3200, value2: 4000 },
  { day: "T", value1: 4100, value2: 5000 },
  { day: "F", value1: 2900, value2: 3300 },
  { day: "S", value1: 4700, value2: 6000 },
];

export default function TotalRevenueCard() {
  const [period, setPeriod] = useState("Monthly");
  const data = period === "Monthly" ? dataMonthly : dataWeekly;
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="material-icons text-3xl text-[#0ea5e9]">trending_up</span>
          <span className="text-lg font-semibold text-gray-900">$ 563,982.74</span>
        </div>
        <span className="text-xs font-semibold text-[#22c55e]">+0.6%</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">Total Revenue</span>
        <div className="flex gap-2">
          <button onClick={() => setPeriod("Monthly")} className={`text-xs px-2 py-1 rounded-full font-semibold ${period === "Monthly" ? "bg-[#0ea5e9] text-white" : "bg-gray-100 text-gray-500"}`}>Monthly</button>
          <button onClick={() => setPeriod("Weekly")} className={`text-xs px-2 py-1 rounded-full font-semibold ${period === "Weekly" ? "bg-[#0ea5e9] text-white" : "bg-gray-100 text-gray-500"}`}>Weekly</button>
        </div>
      </div>
      <div className="w-full h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Legend verticalAlign="top" height={24} />
            <Line type="monotone" dataKey="value1" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="value2" stroke="#a78bfa" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 