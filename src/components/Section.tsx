import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ title, children, id, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;