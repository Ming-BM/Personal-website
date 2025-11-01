import { iconMap } from '../icons/Icons';

export default function SkillCard({ title, icon, skills }) {
  const IconComponent = iconMap[icon] || iconMap.code;

  return (
    <div className="bg-slate-900 p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-8 h-8 text-blue-500" />
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
      </div>
      <ul className="space-y-3 text-gray-300">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-500 mr-2">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
