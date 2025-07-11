import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Sun", sent: 30, answered: 46, hired: 14, pending: 10 },
  { day: "Mon", sent: 40, answered: 36, hired: 10, pending: 14 },
  { day: "Tue", sent: 35, answered: 40, hired: 15, pending: 10 },
  { day: "Wed", sent: 50, answered: 30, hired: 10, pending: 10 },
  { day: "Thu", sent: 45, answered: 35, hired: 10, pending: 10 },
  { day: "Fri", sent: 60, answered: 30, hired: 5, pending: 5 },
  { day: "Sat", sent: 55, answered: 40, hired: 10, pending: 5 },
];

const COLORS = {
  sent: "#22c55e", // green
  answered: "#f59e42", // orange
  hired: "#38bdf8", // blue
  pending: "#d1d5db", // gray
};

export default function ProfileStrengthChart() {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={2} barCategoryGap={24} barSize={18} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="sent" stackId="a" fill={COLORS.sent} radius={[6, 6, 0, 0]} />
          <Bar dataKey="answered" stackId="a" fill={COLORS.answered} />
          <Bar dataKey="hired" stackId="a" fill={COLORS.hired} />
          <Bar dataKey="pending" stackId="a" fill={COLORS.pending} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
} 