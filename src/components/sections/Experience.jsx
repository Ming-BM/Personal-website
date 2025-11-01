import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';
import { experienceData } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>工作经历</SectionTitle>
        <div className="space-y-8">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
