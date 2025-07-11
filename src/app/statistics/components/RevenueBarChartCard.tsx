import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Cell } from "recharts";

const data = [
  { label: "April", value1: 600000, value2: 400000 },
  { label: "May", value1: 800000, value2: 200000 },
  { label: "June", value1: 500000, value2: 300000 },
  { label: "July", value1: 700000, value2: 400000 },
  { label: "August", value1: 200000, value2: 600000 },
  { label: "September", value1: 300000, value2: 800000 },
  { label: "October", value1: 400000, value2: 200000 },
  { label: "November", value1: 900000, value2: 500000, striped: true },
];

export default function RevenueBarChartCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full flex flex-col">
      <div className="font-semibold text-gray-900 mb-2">Revenue Chart</div>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="label" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip />
            <Legend />
            <Bar dataKey="value1" fill="#0ea5e9" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell1-${index}`} fill={entry.striped ? "url(#striped1)" : "#0ea5e9"} />
              ))}
            </Bar>
            <Bar dataKey="value2" fill="#a78bfa" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell2-${index}`} fill={entry.striped ? "url(#striped2)" : "#a78bfa"} />
              ))}
            </Bar>
            <defs>
              <pattern id="striped1" patternUnits="userSpaceOnUse" width="6" height="6">
                <rect x="0" y="0" width="6" height="6" fill="#0ea5e9" />
                <path d="M0 0L6 6ZM6 0L0 6Z" stroke="#fff" strokeWidth="2" />
              </pattern>
              <pattern id="striped2" patternUnits="userSpaceOnUse" width="6" height="6">
                <rect x="0" y="0" width="6" height="6" fill="#a78bfa" />
                <path d="M0 0L6 6ZM6 0L0 6Z" stroke="#fff" strokeWidth="2" />
              </pattern>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 