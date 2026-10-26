import { FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const focusAreas = ['Agentic AI', 'LLMs & RAG', 'Full-Stack Web', 'AI Automation', 'Computer Vision', 'NLP'];

const About = () => (
  <Section id="about">
    <SectionHeader index="01" title="About" />

    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
      <Reveal className="space-y-5 text-base md:text-lg leading-relaxed">
        <p>
          I'm a <span className="text-fg font-medium">Full Stack Engineer at LoopVerse Digital</span> in
          Karachi. Day to day I build web apps with Next.js and PostgreSQL and add AI features to them
          using LangGraph.
        </p>
        <p>
          Before LoopVerse, I built React and Node.js apps at Softvisionist and worked on chatbots and
          automation workflows at Techrypt. On my own time I've built a legal research assistant that
          searches nearly 30,000 Pakistani court documents, a health app that explains lab reports in
          English and Urdu, and n8n and Make.com automations for small businesses.
        </p>
        <p>
          The part of the work I enjoy most is making AI features hold up with real users: getting
          retrieval right, testing the answers, and having a person review the cases the model isn't
          sure about.
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
