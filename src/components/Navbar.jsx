import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

const getInitialTheme = () => {
  const explicit = document.documentElement.getAttribute('data-theme');
  if (explicit) return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.to))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // storage unavailable; theme still applies for this session
    }
    setTheme(next);
  };

  const [first, ...rest] = personalInfo.name.split(' ');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 border-b ${
        isScrolled || menuOpen
          ? 'bg-bg/80 backdrop-blur-md border-line shadow-[var(--shadow-xs)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2.5 text-fg" aria-label={`${personalInfo.name}, back to top`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-surface font-mono text-[11px] font-medium tracking-wide text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
            {first.charAt(0)}{rest.join(' ').charAt(0)}
          </span>
          <span className="hidden text-sm font-medium sm:inline">{personalInfo.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={`#${link.to}`}
              aria-current={active === link.to ? 'true' : undefined}
              className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                active === link.to ? 'text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {link.name}
              {active === link.to && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a
            href="/Resume.pdf"
            download="Mudasir_Mujtaba_Resume.pdf"
            className="btn btn-secondary hidden sm:inline-flex ml-1 h-9"
          >
            <FiDownload size={14} /> Resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="icon-btn lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-line bg-bg"
          >
            <div className="container-page flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-base border-b border-line last:border-0 ${
                    active === link.to ? 'text-fg font-medium' : 'text-muted'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Resume.pdf"
                download="Mudasir_Mujtaba_Resume.pdf"
                className="btn btn-secondary mt-4 sm:hidden"
              >
                <FiDownload size={14} /> Download resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
