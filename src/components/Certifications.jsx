import { FiArrowUpRight } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const Certifications = () => (
  <Section id="certifications">
    <SectionHeader
      index="05"
      title="Certifications"
      description="Continued learning across AI, cloud, and software engineering."
    />

    <ul className="grid gap-3 md:grid-cols-2">
      {certifications.map((cert, idx) => {
        const Icon = cert.platformIcon;
        return (
          <Reveal as="li" key={cert.id} delay={(idx % 2) * 0.05}>
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="card card-hover group flex items-center gap-4 p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-muted group-hover:text-fg transition-colors">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block line-clamp-2 md:line-clamp-1 font-medium text-fg group-hover:text-accent transition-colors" title={cert.title}>
                  {cert.title}
                </span>
                <span className="mt-0.5 block text-xs text-subtle">
                  {cert.platform}{cert.date && <> · <span className="font-mono">{cert.date}</span></>}
                </span>
              </span>
              <FiArrowUpRight
                size={16}
                className="shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        );
      })}
    </ul>
  </Section>
);

export default Certifications;
