import { experience } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const splitCompany = (company) => {
  const match = company.match(/^(.*?)\s*\((.*)\)$/);
  return match ? { name: match[1], location: match[2] } : { name: company, location: '' };
};

const Experience = () => (
  <Section id="experience">
    <SectionHeader
      index="02"
      title="Experience"
      description="Where I've worked and what I've built along the way."
    />

    <ol className="relative">
      {experience.map((exp, idx) => {
        const { name, location } = splitCompany(exp.company);
        const isCurrent = /present/i.test(exp.duration);
        return (
          <Reveal
            as="li"
            key={exp.id}
            delay={idx * 0.05}
            className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-10 border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="font-mono text-xs text-subtle md:pt-1.5">{exp.duration}</div>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                {isCurrent && (
                  <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm">
                <span className="font-medium text-accent">{name}</span>
                {location && <span className="text-subtle"> · {location}</span>}
              </p>
              <p className="mt-4 max-w-3xl leading-relaxed">{exp.description}</p>
            </div>
          </Reveal>
        );
      })}
    </ol>
  </Section>
);

export default Experience;
