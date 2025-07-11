import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface ChartData {
  week: string;
  applicationSent: number;
  interviews: number;
  rejected: number;
}
interface VacancyChartProps {
  data: ChartData[];
  colorApplication?: string;
  colorInterviews?: string;
  colorRejected?: string;
}

const VacancyChart: React.FC<VacancyChartProps> = ({ data, colorApplication = "#0ea5e9", colorInterviews = "#22c55e", colorRejected = "#ef4444" }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-gray-900">Vacancy Stats</div>
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-[#0ea5e9] inline-block" /> Application Sent</span>
          <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-[#22c55e] inline-block" /> Interviews</span>
          <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-[#ef4444] inline-block" /> Rejected</span>
        </div>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, background: '#fff', border: '1px solid #e5e7eb', fontSize: 14 }} />
            <Legend iconType="circle" verticalAlign="top" height={36} wrapperStyle={{ paddingBottom: 10 }} />
            <Line type="monotone" dataKey="applicationSent" stroke={colorApplication} strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 7 }} name="Application Sent" />
            <Line type="monotone" dataKey="interviews" stroke={colorInterviews} strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 7 }} name="Interviews" />
            <Line type="monotone" dataKey="rejected" stroke={colorRejected} strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 7 }} name="Rejected" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VacancyChart; 