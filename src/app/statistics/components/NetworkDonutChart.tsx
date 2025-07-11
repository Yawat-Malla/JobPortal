import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Following", value: 23 },
  { name: "Followers", value: 77 },
];

const COLORS = ["#1e40af", "#f59e42"];

export default function NetworkDonutChart() {
  return (
    <div className="w-full h-48 flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={48}
            outerRadius={64}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-900">23%</div>
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full" style={{ background: COLORS[0] }} /> Following <span className="font-semibold ml-1">567 Companies</span></div>
        <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full" style={{ background: COLORS[1] }} /> Followers <span className="font-semibold ml-1">8,334 Person</span></div>
      </div>
    </div>
  );
} 