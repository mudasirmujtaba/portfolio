import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
      <p className="text-sm text-subtle">
        &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind CSS.
      </p>
      <div className="flex items-center gap-1">
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
          <FaGithub size={18} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
          <FaLinkedin size={18} />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="icon-btn" aria-label="Email">
          <FiMail size={18} />
        </a>
        <a href="#hero" className="icon-btn ml-2 border border-line" aria-label="Back to top">
          <FiArrowUp size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
