import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { Section, SectionHeader, Reveal } from './ui';

const inputClass =
  'w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-sm text-fg placeholder:text-subtle transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });

      // Reset status after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location },
  ];

  return (
    <Section id="contact">
      <SectionHeader index="06" title="Contact" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            Let's build something together.
          </h3>
          <p className="mt-4 max-w-md leading-relaxed">
            Have a question, a project idea, or just want to say hi? Send a message and I'll get back
            to you as soon as I can.
          </p>

          <ul className="mt-8 space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-muted">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-subtle">{label}</span>
                  {href ? (
                    <a href={href} className="link-underline break-all text-sm font-medium text-fg">{value}</a>
                  ) : (
                    <span className="text-sm font-medium text-fg">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FaGithub size={16} /> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <FaLinkedin size={16} /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={formRef} onSubmit={handleSubmit} className="card space-y-5 p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="mb-1.5 block text-sm font-medium text-fg">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.user_name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="user_email" className="mb-1.5 block text-sm font-medium text-fg">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={formData.user_email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Tell me a little about what you have in mind…"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending…
                </>
              ) : (
                <>
                  Send message <FiSend size={14} />
                </>
              )}
            </button>

            <div aria-live="polite">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-4 py-3 text-sm text-success"
                  >
                    <FiCheckCircle size={16} /> Message sent — thanks! I'll be in touch soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-lg border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger"
                  >
                    <FiAlertCircle size={16} /> Something went wrong. Please email me directly instead.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
