import { FiMapPin } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const Experience = () => (
  <Section id="experience">
    <SectionHeader
      index="02"
      title="Experience"
      description="Where I've worked and what I've built along the way."
    />

    <ol className="relative">
      {experience.map((exp, idx) => {
        const isCurrent = /present/i.test(exp.duration);
        return (
          <Reveal
            as="li"
            key={exp.id}
            delay={idx * 0.05}
            className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-10 border-t border-line py-7 first:border-t-0 first:pt-0 last:pb-0"
          >
            <div className="font-mono text-xs text-subtle md:pt-1.5">
              {exp.duration}
              {exp.type && <span className="mt-1 block text-muted md:mt-1.5">{exp.type}</span>}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                {isCurrent && (
                  <span className="rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm">
                <span className="font-medium text-accent">{exp.company}</span>
                {exp.location && (
                  <span className="inline-flex items-center gap-1 text-subtle">
                    <FiMapPin size={12} aria-hidden="true" /> {exp.location}
                  </span>
                )}
              </p>

              {exp.highlights?.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="relative pl-5 leading-relaxed">
                      <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-accent/70" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {exp.tech?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {exp.tech.map((t) => (
                    <li key={t} className="tag">{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        );
      })}
    </ol>
  </Section>
);

export default Experience;
