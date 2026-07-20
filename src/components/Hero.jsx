import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaDownload, FaGithub, FaArrowRight, FaAward } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import profilePic from '../assets/Profile.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-gold/10 rounded-full mix-blend-screen filter blur-[90px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2 justify-center md:justify-start mb-4"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <p className="text-slate-400 font-mono text-sm tracking-wide">
              Available for freelance & full-time roles &middot; {personalInfo.location}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-gradient mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed mx-auto md:mx-0"
          >
            {personalInfo.tagline} Specializing in <span className="text-accent-light">LLMs, RAG & Agentic AI</span>, with full-stack delivery across the <span className="text-accent-light">MERN and PERN</span> stacks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold-light text-sm font-medium"
          >
            <FaAward size={14} />
            First Author &middot; IEEE ICET 2026 (Under Review)
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-accent-primary text-white rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:shadow-[0_0_26px_rgba(59,130,246,0.55)] hover:-translate-y-0.5"
            >
              My Work <FaArrowRight size={12} />
            </Link>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-slate-300 rounded-full text-sm font-semibold hover:border-accent-light hover:text-accent-light hover:bg-accent-light/5 transition-all hover:-translate-y-0.5"
            >
              <FaGithub size={15} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-slate-300 rounded-full text-sm font-semibold hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all hover:-translate-y-0.5"
            >
              <FaLinkedin size={15} /> LinkedIn
            </a>
            <a
              href="/Resume.pdf"
              download="Mudasir_Mujtaba_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-slate-300 rounded-full text-sm font-semibold hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all hover:-translate-y-0.5"
            >
              <FaDownload size={13} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Right Side: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Gradient ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-gold via-accent-primary to-accent-light opacity-60 group-hover:opacity-90 blur-[2px] transition-opacity duration-500"></div>

            <div className="absolute inset-0 rounded-2xl overflow-hidden glass-card z-10 flex items-center justify-center border border-navy-dark shadow-2xl">
              <img
                src={profilePic}
                alt="Mudasir Mujtaba"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-accent-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-8 z-20 glass-card px-4 py-3 flex items-center gap-3 shadow-xl border-accent-gold/30"
            >
              <div className="w-9 h-9 rounded-lg bg-accent-gold/15 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                <FaAward size={16} />
              </div>
              <div className="leading-tight">
                <p className="text-white text-sm font-semibold">AI &amp; Full-Stack</p>
                <p className="text-slate-400 text-xs">Engineer</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-slate-500 text-sm tracking-widest mb-2 font-mono">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
