import React from "react";

interface CompanyCardProps {
  name: string;
  vacancies: number;
  color?: string;
  icon?: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ name, vacancies, color = "#0ea5e9", icon = "business" }) => (
  <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center min-w-[120px]">
    <span className="material-icons text-3xl mb-2" style={{ color }}>{icon}</span>
    <div className="font-semibold text-sm text-gray-900 text-center mb-1">{name}</div>
    <div className="text-xs text-gray-500">
      <span style={{ color }}>{vacancies} Vacancy</span>
    </div>
  </div>
);

export default CompanyCard; 