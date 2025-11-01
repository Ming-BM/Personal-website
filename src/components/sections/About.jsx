import SectionTitle from '../ui/SectionTitle';
import { aboutData } from '../../data/contact';

const AboutIcon = ({ children, label, value }) => (
  <div className="flex items-center space-x-3">
    {children}
    <span className="text-gray-300">
      <span className="font-semibold">{label}：</span>{value}
    </span>
  </div>
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>关于我</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed text-lg">
                {paragraph.split('Sheridan College').map((part, i) =>
                  i === 0 ? part : (
                    <span key={i}>
                      <span className="text-blue-500 font-semibold">Sheridan College</span>
                      {part.split('LED-PRO TECH').map((subpart, j) =>
                        j === 0 ? subpart : (
                          <span key={j}>
                            <span className="text-blue-500 font-semibold">LED-PRO TECH</span>
                            {subpart}
                          </span>
                        )
                      )}
                    </span>
                  )
                )}
              </p>
            ))}
          </div>
          <div className="bg-slate-950 p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6 text-blue-500">快速了解</h3>
            <div className="space-y-4">
              <AboutIcon label="学校" value={aboutData.school}>
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </AboutIcon>
              <AboutIcon label="专业" value={aboutData.major}>
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </AboutIcon>
              <AboutIcon label="预计毕业" value={aboutData.graduationYear}>
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </AboutIcon>
              <AboutIcon label="GPA" value={aboutData.gpa}>
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </AboutIcon>
              <AboutIcon label="位置" value={aboutData.location}>
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </AboutIcon>
              <AboutIcon label="语言" value={aboutData.languages}>
                <svg className="w-6 h-6 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </AboutIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
