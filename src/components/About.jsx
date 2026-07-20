import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 section-heading-line"
        >
          <p className="section-kicker mb-3">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-slate-400 leading-relaxed space-y-6 text-lg lg:col-span-2"
          >
            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <span className="text-accent-gold mt-1">▹</span>
              <p>
                I am an <strong className="text-accent-light font-medium">AI Engineer and Full-Stack Software Developer</strong>, and a Computer Science graduate of <strong className="text-white font-medium">Sukkur IBA University (2022-2026)</strong>, experienced in building and deploying production-grade AI systems and scalable web applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <span className="text-accent-gold mt-1">▹</span>
              <p>
                My expertise spans <strong className="text-white font-medium">LLMs, Retrieval-Augmented Generation (RAG), Agentic AI, NLP, and Computer Vision</strong>, paired with full-stack development across the <strong className="text-accent-light font-medium">MERN and PERN</strong> stacks.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <span className="text-accent-gold mt-1">▹</span>
              <p>
                I'm the <strong className="text-white font-medium">first author of a research paper</strong> on Retrieval-Augmented legal AI submitted to <strong className="text-accent-light font-medium">IEEE ICET 2026</strong>, built on a hybrid RAG pipeline over nearly 30,000 Pakistani legal documents.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <span className="text-accent-gold mt-1">▹</span>
              <p>
                Currently working as a <strong className="text-accent-light font-medium">freelance AI/ML and full-stack developer</strong>, I help global clients ship production-grade AI APIs and web platforms using FastAPI, Node.js, and Docker.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 items-start">
              <span className="text-accent-gold mt-1">▹</span>
              <p>
                My focus stays on delivering <strong className="text-accent-light font-medium">secure, scalable, and thoughtfully designed solutions</strong> that drive real value and performance.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-light flex-shrink-0">
                <FaGraduationCap size={18} />
              </div>
              <h3 className="text-white font-semibold">Education</h3>
            </div>
            <p className="text-slate-200 font-medium mb-1">BS Computer Science</p>
            <p className="text-slate-400 text-sm mb-1">Sukkur IBA University, Sukkur</p>
            <p className="text-slate-500 text-sm font-mono mb-4">2022 - 2026 &middot; CGPA 3.5 / 4.0</p>
            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm leading-relaxed">
                <span className="text-accent-light font-medium">Final Year Project:</span> LexiBot, an AI-Powered Legal Assistant for the Pakistani Legal Domain.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
