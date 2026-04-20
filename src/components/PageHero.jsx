import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';

export default function PageHero({ eyebrow, title, titleItalic, description, image, crumb }) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden bg-navy-900">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/45 to-navy-900/70" />
        </>
      )}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pt-28 pb-10 sm:pb-14 lg:pb-20">
        {crumb && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-ivory-200/70 mb-6 overflow-hidden"
          >
            <Link to="/" className="hover:text-sun-300 transition-colors">
              Home
            </Link>
            <CaretRight size={10} className="text-sun-400" />
            <span className="text-ivory-50 truncate">{crumb}</span>
          </nav>
        )}
        {eyebrow && (
          <p className="font-accent text-xl sm:text-2xl text-sun-300 mb-2">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.02] text-ivory-50 text-balance max-w-4xl">
          {title}
          {titleItalic && (
            <span className="block italic text-sun-300">{titleItalic}</span>
          )}
        </h1>
        {description && (
          <p className="mt-5 sm:mt-6 text-ivory-200/80 text-[15px] sm:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
