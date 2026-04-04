import React, { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  items: string[];
}

const SkillCard = ({ icon, title, items }: SkillCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;