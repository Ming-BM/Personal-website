export default function ExperienceCard({ title, company, location, period, current, responsibilities, tags }) {
  return (
    <div className="bg-slate-900 p-8 rounded-lg border border-gray-800 hover:border-blue-500 transition">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">{title}</h3>
          <p className="text-xl text-gray-300 mb-2">{company}</p>
          <p className="text-gray-400">{location}</p>
        </div>
        <div className="text-gray-400 mt-2 md:mt-0">
          <span className="inline-block bg-blue-500/20 text-blue-500 px-4 py-1 rounded">
            {period}
          </span>
        </div>
      </div>
      <ul className="space-y-3 text-gray-300">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">▹</span>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
