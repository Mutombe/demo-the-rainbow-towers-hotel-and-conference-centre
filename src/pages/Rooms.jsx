import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FunnelSimple, CheckCircle } from '@phosphor-icons/react';
import { rooms, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import RoomCard from '../components/RoomCard';

const TIERS = ['All', 'Classic', 'Luxury', 'Suite', 'Signature'];

export default function Rooms() {
  const [tier, setTier] = useState('All');

  const filtered = useMemo(
    () => (tier === 'All' ? rooms : rooms.filter((r) => r.tier === tier)),
    [tier]
  );

  return (
    <PageTransition>
      <SEO
        title="Rooms & Suites — The Rainbow Towers Hotel Harare"
        description="293 rooms and suites — from Classic Doubles to the Presidential Suite. Harare's landmark hotel on Pennefather Avenue."
      />
      <PageHero
        crumb="Rooms & Suites"
        eyebrow="twenty-eight floors, 293 rooms"
        title="Every stay begins"
        titleItalic="at altitude."
        description="Six room tiers, from comfortable Classic Doubles to a single Presidential Suite that occupies an entire floor. Each room finished in linen, teak and travertine; each with a view of a capital city written in jacaranda."
        image={rooms[5].image}
      />

      {/* FILTER BAR */}
      <section className="bg-ivory-50 border-b border-ivory-300 sticky top-20 z-30">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
          <span className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-400 shrink-0">
            <FunnelSimple size={14} /> Filter
          </span>
          {TIERS.map((t) => (
            <button
              key={t}
              onClick={() => setTier(t)}
              className={`text-[12px] tracking-[0.14em] uppercase px-4 py-2 transition-colors whitespace-nowrap ${
                tier === t
                  ? 'bg-navy-800 text-ivory-50'
                  : 'text-navy-800 hover:text-sun-500'
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-ink-400 shrink-0 hidden sm:block">
            {filtered.length} {filtered.length === 1 ? 'room' : 'rooms'}
          </span>
        </div>
      </section>

      <section className="bg-ivory-100 py-14 sm:py-20 lg:py-24 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filtered.map((r, i) => (
              <SectionReveal key={r.slug} delay={i * 60}>
                <RoomCard room={r} index={i} />
              </SectionReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-ink-400 py-20">No rooms in this tier right now.</p>
          )}
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-ivory-50 py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">every stay includes</p>
            <h2 className="font-display text-3xl sm:text-5xl text-navy-800 leading-[1.05] text-balance">
              The small things,
              <span className="italic text-sun-500"> quietly covered.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              'Full breakfast buffet at Harvest Garden',
              'Complimentary 200Mbps fibre Wi-Fi',
              '24-hour in-room dining',
              'Pool & fitness centre access',
              'Valet parking on arrival',
              'Daily housekeeping + turndown',
              'Priority HICC delegate rates',
              '15-min airport transfer on request',
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} weight="fill" className="text-sun-500 mt-0.5 shrink-0" />
                <p className="text-[13px] text-ink-500 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/reservations"
              className="inline-flex items-center justify-center bg-navy-800 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-sun-500 transition-colors"
            >
              Check availability
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
