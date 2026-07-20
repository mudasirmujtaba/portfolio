import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';
import { publications, achievements } from '../data/portfolioData';

const Publications = () => {
  return (
    <section id="publications" className="py-12 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 section-heading-line"
        >
          <p className="section-kicker mb-3">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200">
            Publications
          </h2>
        </motion.div>

        {/* Publication Card */}
        {publications.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            className="glass-card p-6 md:p-10 relative overflow-hidden mb-10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center text-accent-gold">
                  <FaFileAlt size={24} />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold-light tracking-wide">
                    {pub.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{pub.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-slate-400 text-sm mb-1">
                  <span className="text-accent-light font-medium">{pub.authors}</span>
                </p>
                <p className="text-slate-500 text-sm mb-6 italic">
                  {pub.venue}
                </p>

                <ul className="space-y-2">
                  {pub.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 items-start text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="text-accent-gold mt-1.5 flex-shrink-0">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Achievements strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="glass-card p-6 flex flex-col gap-3 hover:border-accent-gold/40"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-light">
                  <Icon size={18} />
                </div>
                <h4 className="text-white font-semibold leading-snug">{ach.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{ach.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
