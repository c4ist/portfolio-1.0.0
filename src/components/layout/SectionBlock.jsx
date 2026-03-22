import React from 'react';

const SectionBlock = ({ id, eyebrow, title, description, className = '', children }) => {
  return (
    <section id={id} className={`scroll-mt-28 py-12 md:py-16 ${className}`}>
      {(eyebrow || title || description) && (
        <header className="mb-8 md:mb-10 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-[11px] tracking-[0.18em] uppercase text-neutral-400 font-medium">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">{title}</h2>}
          {description && <p className="mt-3 text-lg leading-relaxed text-neutral-600">{description}</p>}
        </header>
      )}
      {children}
    </section>
  );
};

export default SectionBlock;
