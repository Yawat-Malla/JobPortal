import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const trends = [
  { label: "Engineer", percent: 66, value: 5050, color: "#6366f1" },
  { label: "Designer", percent: 31, value: 10524, color: "#38bdf8" },
  { label: "Manager", percent: 75, value: 621, color: "#a78bfa" },
  { label: "Programmer", percent: 62, value: 9662, color: "#7c3aed" },
];

function renderDonut(percent: number, color: string) {
  const data = [
    { value: percent },
    { value: 100 - percent },
  ];
  return (
    <PieChart width={70} height={70}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={24}
        outerRadius={32}
        startAngle={90}
        endAngle={-270}
        dataKey="value"
        stroke="none"
      >
        <Cell key="main" fill={color} />
        <Cell key="rest" fill="#e5e7eb" />
      </Pie>
      <text x={35} y={40} textAnchor="middle" dominantBaseline="middle" fontSize="16" fontWeight="bold" fill={color}>{percent}%</text>
    </PieChart>
  );
}

export default function JobTrendsChart() {
  return (
    <div className="flex w-full justify-between items-center gap-4">
      {trends.map((trend, i) => (
        <div key={i} className="flex flex-col items-center">
          {renderDonut(trend.percent, trend.color)}
          <div className="text-xs font-semibold text-gray-900 mt-1">{trend.label}</div>
          <div className="text-xs text-gray-400">{trend.value.toLocaleString()} Vacancy</div>
        </div>
      ))}
    </div>
  );
} 