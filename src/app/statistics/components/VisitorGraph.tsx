import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const weeklyData = [
  { day: "01", view: 120, hire: 40 },
  { day: "02", view: 180, hire: 60 },
  { day: "03", view: 220, hire: 70 },
  { day: "04", view: 300, hire: 90 },
  { day: "05", view: 320, hire: 100 },
  { day: "06", view: 400, hire: 120 },
  { day: "07", view: 380, hire: 110 },
  { day: "08", view: 420, hire: 130 },
  { day: "09", view: 410, hire: 120 },
  { day: "10", view: 430, hire: 140 },
  { day: "11", view: 410, hire: 120 },
  { day: "12", view: 430, hire: 140 },
  { day: "13", view: 410, hire: 120 },
];

export default function VisitorGraph() {
  const [period] = useState("Weekly");
  const data = weeklyData;
  return (
    <div className="w-full h-56">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-gray-900">Visitor Graph</span>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">Show Details</span>
          <button className="text-xs px-2 py-1 rounded-full font-semibold bg-[#0ea5e9] text-white">{period}</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip />
          <Legend verticalAlign="top" align="left" iconType="circle" formatter={(value) => value === "view" ? <span style={{ color: '#6366f1' }}>View Profile</span> : <span style={{ color: '#0ea5e9' }}>Hire</span>} />
          <Line type="monotone" dataKey="view" stroke="#6366f1" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="hire" stroke="#0ea5e9" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 