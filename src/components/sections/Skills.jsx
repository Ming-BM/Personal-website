import SectionTitle from '../ui/SectionTitle';
import SkillCard from '../ui/SkillCard';
import { skillsData } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
