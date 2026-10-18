import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const SectionHeader = ({ index, title, description }) => (
  <Reveal className="mb-8">
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <span className="hidden sm:block h-px flex-1 bg-line" aria-hidden="true" />
    </div>
    {description && (
      <p className="mt-3 max-w-2xl text-muted leading-relaxed">{description}</p>
    )}
  </Reveal>
);

export const IconLink = ({ href, label, children, external = true }) => (
  <a
    href={href}
    aria-label={label}
    data-tooltip={label}
    className="icon-btn icon-btn-outline"
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
  >
    {children}
  </a>
);

export const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`py-12 md:py-16 ${className}`}>
    <div className="container-page">{children}</div>
  </section>
);
