import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, experience } from '../data/portfolioData';
import { IconLink } from './ui';
import profile400 from '../assets/profile-400.webp';
import profile800 from '../assets/profile-800.webp';

const EASE = [0.21, 0.47, 0.32, 0.98];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const Hero = () => {
  const current = experience[0];

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-24 pb-12 md:flex md:min-h-[100svh] md:items-center md:pt-16 md:pb-0"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(60% 55% at 72% 45%, color-mix(in oklab, var(--accent) var(--hero-wash), transparent), transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="bg-grid bg-grid-hero absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="container-page">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Photo: first on mobile, right column from md up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="md:order-last md:col-span-5 md:flex md:justify-center lg:justify-end"
          >
            <div className="relative w-36 sm:w-44 md:w-60 lg:w-72 xl:w-80">
              <div
                className="absolute -inset-[12%] -z-10 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--accent) 22%, transparent), transparent)' }}
                aria-hidden="true"
              />
              <div className="relative aspect-square overflow-hidden rounded-full bg-surface-2 ring-1 ring-accent/50 ring-offset-4 ring-offset-bg md:ring-offset-[6px]">
                {/* Scale crops out the yellow ring baked into the source image */}
                <img
                  src={profile800}
                  srcSet={`${profile400} 400w, ${profile800} 800w`}
                  sizes="(min-width: 1280px) 320px, (min-width: 1024px) 288px, (min-width: 768px) 240px, 176px"
                  width="800"
                  height="800"
                  alt={`Portrait of ${personalInfo.name}`}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full scale-[1.08] object-cover saturate-[0.9]"
                />
                {/* Soft inner vignette blends the saturated backdrop into the page surface */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle, transparent 62%, color-mix(in oklab, var(--bg) 35%, transparent) 100%)' }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:col-span-7"
          >
            <motion.h1
              variants={item}
              id="hero-title"
              className="text-[2.5rem] leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-lg font-medium text-fg/85 sm:text-xl lg:text-2xl text-balance"
            >
              {current.role}
              <span className="hidden text-subtle xl:inline" aria-hidden="true"> · </span>
              <span className="block text-accent xl:inline">Agentic AI &amp; Automation</span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted sm:text-[1.0625rem] text-pretty"
            >
              I build production web apps and LLM-powered systems, from agentic workflows, RAG
              pipelines and AI automations to the APIs and interfaces around them.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary h-11 px-5">
                  View my work <FiArrowRight size={15} aria-hidden="true" />
                </a>
                <a href="#contact" className="btn btn-secondary h-11 px-5">
                  Get in touch
                </a>
              </div>
              <div className="flex gap-2">
                <IconLink href={personalInfo.github} label="GitHub">
                  <FaGithub size={18} />
                </IconLink>
                <IconLink href={personalInfo.linkedin} label="LinkedIn">
                  <FaLinkedin size={18} />
                </IconLink>
              </div>
            </motion.div>

            <motion.p variants={item} className="mt-6 flex items-center gap-1.5 text-sm text-subtle">
              <FiMapPin size={14} aria-hidden="true" /> {personalInfo.location}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
