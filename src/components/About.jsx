import { FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const focusAreas = ['LLMs & RAG', 'Agentic AI', 'Full-Stack Web', 'Computer Vision', 'NLP', 'MLOps'];

const About = () => (
  <Section id="about">
    <SectionHeader index="01" title="About" />

    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
      <Reveal className="space-y-5 text-base md:text-lg leading-relaxed">
        <p>
          I'm a <span className="text-fg font-medium">Software Engineer at LoopVerse Digital</span> in
          Karachi, where I build full-stack applications and agentic AI systems. I care about shipping
          software that's reliable in production — clean APIs, thoughtful interfaces, and AI features
          that are grounded, measurable, and safe.
        </p>
        <p>
          My work spans <span className="text-fg font-medium">LLMs, Retrieval-Augmented Generation,
          agentic workflows, NLP and computer vision</span>, paired with end-to-end web development across
          the MERN and PERN stacks with FastAPI, Docker and PostgreSQL.
        </p>

        <ul className="flex flex-wrap gap-2 pt-2" aria-label="Focus areas">
          {focusAreas.map((f) => (
            <li key={f} className="tag">{f}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card p-6">
          <div className="flex items-center gap-2 text-sm font-medium text-fg">
            <FiBookOpen size={16} className="text-accent" />
            Education
          </div>
          <h3 className="mt-4 text-lg font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm">{education.school}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-subtle">
            <span>{education.duration}</span>
            <span>CGPA {education.cgpa}</span>
          </div>
          <div className="mt-5 border-t border-line pt-5 text-sm leading-relaxed">
            <p className="text-xs font-medium uppercase tracking-wider text-subtle mb-2">Final year project</p>
            <p>{education.project}</p>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
);

export default About;
