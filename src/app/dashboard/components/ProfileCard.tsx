import React from "react";

interface Skill {
  label: string;
  percent: number;
  color: string;
}
interface Activity {
  icon: string;
  text: string;
  time: string;
}
interface ProfileCardProps {
  avatarUrl?: string;
  name: string;
  role: string;
  skills: Skill[];
  activities: Activity[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ avatarUrl, name, role, skills, activities }) => (
  <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-full">
    <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-3 flex items-center justify-center">
      {avatarUrl ? (
        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="material-icons text-5xl text-gray-400">person</span>
      )}
    </div>
    <div className="text-center mb-4">
      <div className="font-bold text-lg text-gray-900">{name}</div>
      <div className="text-xs text-gray-500">{role}</div>
    </div>
    <div className="flex gap-2 mb-4">
      {skills.map((skill) => (
        <div key={skill.label} className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: skill.color + '22' }}>
            <span className="text-xs font-bold" style={{ color: skill.color }}>{skill.percent}%</span>
          </div>
          <span className="text-xs text-gray-500 mt-1">{skill.label}</span>
        </div>
      ))}
    </div>
    <div className="w-full">
      <div className="font-semibold text-xs text-gray-700 mb-2">Recent Activities</div>
      <ul className="flex flex-col gap-2">
        {activities.map((activity, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
            <span className="material-icons text-base text-[#0ea5e9]">{activity.icon}</span>
            <span>{activity.text}</span>
            <span className="ml-auto text-gray-400">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProfileCard; 