import { FiCode, FiCpu, FiLayers, FiMonitor, FiDatabase, FiTool, FiZap } from 'react-icons/fi';
import { skills } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const categoryMeta = {
  'Languages': { icon: FiCode },
  'AI & Machine Learning': { icon: FiCpu, wide: true },
  'AI Frameworks': { icon: FiLayers },
  'Full-Stack Development': { icon: FiMonitor, wide: true },
  'Databases': { icon: FiDatabase },
  'Automation & Integrations': { icon: FiZap, wide: true },
  'DevOps & Tools': { icon: FiTool, full: true },
};

const brandColor = (color) => {
  if (color === 'accent') return 'var(--accent)';
  return color || 'var(--fg)';
};

const SkillTile = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <li className="skill-tile flex items-center gap-2.5 rounded-lg border border-line bg-surface-2/60 p-2 pr-3" style={{ '--brand': brandColor(skill.color) }}>
      <span className="skill-tile-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-md">
        {Icon && <Icon size={17} aria-hidden="true" />}
      </span>
      <span className="text-[0.8125rem] font-medium leading-tight text-fg/90">{skill.name}</span>
    </li>
  );
};

const Skills = () => (
  <Section id="skills">
    <SectionHeader
      index="04"
      title="Skills"
      description="The languages, frameworks and tools I use to take products from idea to production."
    />

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((group, idx) => {
        const meta = categoryMeta[group.category] || {};
        const Icon = meta.icon || FiCode;
        return (
          <Reveal
            key={group.category}
            delay={(idx % 2) * 0.06}
            className={`h-full ${meta.wide ? 'lg:col-span-2' : ''} ${meta.full ? 'md:col-span-2 lg:col-span-3' : ''}`}
          >
            <div className="card group relative h-full overflow-hidden p-5">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'color-mix(in oklab, var(--accent) 18%, transparent)' }}
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-accent">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h3 className="flex-1 font-semibold">{group.category}</h3>
                <span className="font-mono text-xs text-subtle" aria-label={`${group.items.length} skills`}>
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="relative mt-4 grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-2">
                {group.items.map((skill) => (
                  <SkillTile key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Skills;
