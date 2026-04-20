import React from 'react';
import { Link } from 'react-router-dom';
import { House, ArrowRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found — The Rainbow Towers" />
      <section className="min-h-[80vh] bg-navy-900 text-ivory-50 flex items-center relative overflow-hidden">
        <div className="grain" />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full radial-gold opacity-40 blur-3xl" />
        <div className="relative max-w-[900px] mx-auto px-5 sm:px-6 lg:px-10 text-center pt-28 pb-20">
          <div className="flex justify-center mb-6">
            <Logo tone="light" size="lg" />
          </div>
          <p className="font-accent text-3xl text-sun-300">misplaced a key</p>
          <h1 className="font-display text-[80px] sm:text-[140px] leading-none text-ivory-50 mt-3">
            404
          </h1>
          <p className="mt-2 font-display text-2xl sm:text-3xl text-sun-300 italic">
            That floor isn't on our plan.
          </p>
          <p className="mt-6 text-ivory-200/70 max-w-xl mx-auto">
            The page you're looking for has either moved or is having a quiet sit-down. Let's take you back to the lobby.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-sun-500 hover:bg-sun-600 text-white px-8 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors"
            >
              <House size={14} weight="fill" /> Return home
            </Link>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 border border-ivory-50/60 text-ivory-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-ivory-50 hover:text-navy-800 transition-colors"
            >
              Reserve a room <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
