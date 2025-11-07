import { useState } from 'react';
import { GithubIcon, iconMap } from '../icons/Icons';

export default function ProjectCard({ title, description, gradient, icon, technologies, github }) {
  const IconComponent = iconMap[icon] || iconMap.cloud;
  const [isExpanded, setIsExpanded] = useState(false);

  // Set character limit for truncation
  const charLimit = 150;
  const shouldTruncate = description.length > charLimit;
  const displayDescription = isExpanded || !shouldTruncate
    ? description
    : description.slice(0, charLimit) + '...';

  return (
    <div className="bg-slate-950 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition group">
      <div className="flex items-center justify-center p-6">
        <div className={`w-20 h-20 bg-gradient-to-br ${gradient} relative overflow-hidden rounded-lg`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <IconComponent className="w-10 h-10 text-white opacity-50" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition">
          {title}
        </h3>
        <p className="text-gray-400 mb-2">
          {displayDescription}
        </p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:text-blue-400 text-sm mb-4 transition"
          >
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        )}
        {!shouldTruncate && <div className="mb-4"></div>}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-500 text-sm rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center"
          >
            <GithubIcon className="w-4 h-4 mr-1" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
