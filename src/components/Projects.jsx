import { useState } from 'react';
import { FiArrowUpRight, FiCode, FiChevronDown } from 'react-icons/fi';
import { projects, personalInfo } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const INITIAL_COUNT = 6;

const splitTitle = (title) => {
  const [name, ...subtitle] = title.split(' — ');
  return { name, subtitle: subtitle.join(' — ') };
};

const ProjectCard = ({ project, idx }) => {
  const { name, subtitle } = splitTitle(project.title);
  const Icon = project.icon || FiCode;
  return (
    <Reveal delay={(idx % 3) * 0.05} className="h-full">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${name}${subtitle ? `, ${subtitle}` : ''} — view source on GitHub`}
        className="card card-hover group flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-surface-2">
          {project.image ? (
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: project.imagePosition || 'center' }}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-accent">
              <Icon size={24} aria-hidden="true" />
            </div>
          )}
          {project.featured && (
            <span className="absolute bottom-2.5 right-2.5 rounded-full border border-line bg-bg/85 px-2 py-0.5 text-[11px] font-medium text-fg backdrop-blur">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-1 text-[0.9375rem] font-semibold leading-snug transition-colors group-hover:text-accent" title={project.title}>
              {name}
            </h3>
            <FiArrowUpRight
              size={16}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
            />
          </div>
          <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed">{project.description}</p>
          <p className="mt-3 truncate font-mono text-xs text-subtle" title={project.tech.join(', ')}>
            {project.tech.slice(0, 4).join(' · ')}
          </p>
        </div>
      </a>
    </Reveal>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  // Featured work leads the grid; the rest keep their data order
  const ordered = [...projects.filter((p) => p.featured), ...projects.filter((p) => !p.featured)];
  const visible = showAll ? ordered : ordered.slice(0, INITIAL_COUNT);

  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        title="Projects"
        description="Selected AI and full-stack work. Each card links to the source."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, idx) => (
          <ProjectCard key={project.id} project={project} idx={idx} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {ordered.length > INITIAL_COUNT && (
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="btn btn-secondary"
            aria-expanded={showAll}
          >
            {showAll ? 'Show less' : `Show ${ordered.length - INITIAL_COUNT} more`}
            <FiChevronDown size={16} className={`transition-transform ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
        )}
        <a
          href={`${personalInfo.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="btn text-muted hover:text-fg"
        >
          All repositories on GitHub <FiArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
};

export default Projects;
