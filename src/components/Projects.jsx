import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const ProjectMedia = ({ project }) => {
  const Icon = project.icon;
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        style={{ objectPosition: project.imagePosition || 'center' }}
      />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-navy-base to-slate-900 relative overflow-hidden">
      <span className="absolute -right-6 -bottom-8 text-[7rem] font-black text-white/5 leading-none select-none">
        {project.title.charAt(0)}
      </span>
      <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-light relative z-10">
        {Icon ? <Icon size={26} /> : <FaCode size={26} />}
      </div>
    </div>
  );
};

const FeaturedCard = ({ project, idx }) => (
  <motion.a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
    className="glass-card flex flex-col h-full group overflow-hidden cursor-pointer border-accent-primary/30 bg-slate-800/40"
  >
    <div className="relative w-full h-48 md:h-56 overflow-hidden bg-slate-900 border-b border-slate-700/50">
      <ProjectMedia project={project} />
      <div className="absolute inset-0 bg-accent-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-slate-900/80 p-3 rounded-full text-white backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <FaGithub size={24} />
        </div>
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="text-xl md:text-2xl font-bold text-slate-200 group-hover:text-accent-light transition-colors">
          {project.title}
        </h3>
      </div>
      {(project.role || project.period) && (
        <p className="text-xs font-mono text-accent-gold-light mb-3">
          {[project.role, project.period].filter(Boolean).join(' · ')}
        </p>
      )}

      <div className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
        <p>{project.description}</p>
      </div>

      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech, i) => (
          <li key={i} className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  </motion.a>
);

const CompactCard = ({ project, idx }) => (
  <motion.a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: idx * 0.06, ease: "easeOut" }}
    className="glass-card flex flex-col h-full group overflow-hidden cursor-pointer p-6"
  >
    <div className="flex items-start justify-between mb-4">
      <h3 className="text-lg font-bold text-slate-200 group-hover:text-accent-light transition-colors pr-3">
        {project.title}
      </h3>
      <FaGithub className="text-slate-500 group-hover:text-accent-light transition-colors flex-shrink-0 mt-1" size={18} />
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
      {project.description}
    </p>
    <ul className="flex flex-wrap gap-2 mt-auto">
      {project.tech.slice(0, 4).map((tech, i) => (
        <li key={i} className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
          {tech}
        </li>
      ))}
    </ul>
  </motion.a>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 section-heading-line"
        >
          <p className="section-kicker mb-3">Selected work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {featured.map((project, idx) => (
            <FeaturedCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg font-semibold text-slate-300 mb-6"
            >
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, idx) => (
                <CompactCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
