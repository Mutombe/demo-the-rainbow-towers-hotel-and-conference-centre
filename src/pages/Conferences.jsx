import React from 'react';
import { Link } from 'react-router-dom';
import {
  UsersThree,
  CheckCircle,
  ArrowUpRight,
  CalendarBlank,
  Buildings,
} from '@phosphor-icons/react';
import { conferences, events, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import EventVenueCard from '../components/EventVenueCard';

export default function Conferences() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello HICC, I'd like to enquire about booking a conference venue."
  )}`;

  return (
    <PageTransition>
      <SEO
        title="HICC — Harare International Conference Centre | Rainbow Towers"
        description="4,500 seats under one roof. Africa's largest fitted-seat amphitheatre and twelve event spaces, all under the Rainbow Towers tower."
      />
      <PageHero
        crumb="Conferences · HICC"
        eyebrow="harare international conference centre"
        title="Where the capital"
        titleItalic="gathers, hosts, remembers."
        description="Conceived for the 1986 Non-Aligned Movement summit and still the continent's benchmark. Twelve spaces, 4,500 seats, 2,000 parking bays — and an events team the region has relied on for four decades."
        image={conferences.halls[0].image}
      />

      {/* STATS */}
      <section className="bg-ivory-50 py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-navy-800/10">
            {conferences.stats.map((s, i) => (
              <div
                key={i}
                className={`p-7 sm:p-9 text-center ${
                  i !== 0 ? 'border-l border-navy-800/10' : ''
                } ${i < 2 ? 'border-b lg:border-b-0 border-navy-800/10' : ''}`}
              >
                <p className="font-display text-4xl sm:text-5xl text-navy-800 leading-none">
                  {s.value}
                </p>
                <p className="text-[10px] tracking-[0.22em] uppercase text-ink-400 mt-3">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HALLS */}
      <section className="bg-ivory-100 py-20 sm:py-28 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12 lg:mb-16">
            <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">event spaces</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-800 leading-[1.05] text-balance">
              Twelve rooms,
              <span className="italic text-sun-500"> infinitely configurable.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {conferences.halls.map((h, i) => (
              <SectionReveal key={h.slug} delay={i * 70}>
                <EventVenueCard hall={h} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SPACES LIST */}
      <section className="bg-ivory-50 py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="mb-12">
            <p className="font-accent text-xl text-sun-500 mb-2">dig deeper</p>
            <h2 className="font-display text-3xl sm:text-5xl text-navy-800 leading-[1.05]">
              Capacity at a glance.
            </h2>
          </SectionReveal>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-navy-800/20">
                  <th className="py-3 pr-4 text-[11px] tracking-[0.14em] uppercase text-ink-400 font-medium">
                    Space
                  </th>
                  <th className="py-3 pr-4 text-[11px] tracking-[0.14em] uppercase text-ink-400 font-medium">
                    Capacity
                  </th>
                  <th className="py-3 pr-4 text-[11px] tracking-[0.14em] uppercase text-ink-400 font-medium">
                    Set-up
                  </th>
                  <th className="py-3 pr-4 text-[11px] tracking-[0.14em] uppercase text-ink-400 font-medium">
                    Area
                  </th>
                </tr>
              </thead>
              <tbody>
                {conferences.halls.map((h) => (
                  <tr key={h.slug} className="border-b border-ivory-300 hover:bg-ivory-100/60 transition-colors">
                    <td className="py-4 pr-4 font-display text-lg text-navy-800">{h.name}</td>
                    <td className="py-4 pr-4 text-[13px] text-ink-500">
                      <span className="inline-flex items-center gap-1.5">
                        <UsersThree size={14} className="text-sun-500" />
                        {h.capacity.toLocaleString()}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-[13px] text-ink-500">{h.setup}</td>
                    <td className="py-4 pr-4 text-[13px] text-ink-500">{h.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-navy-900 text-ivory-50 py-20 sm:py-28 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full radial-gold opacity-30 blur-3xl" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="font-accent text-xl sm:text-2xl text-sun-300 mb-2">delegate packages</p>
            <h2 className="font-display text-4xl sm:text-5xl text-ivory-50 leading-[1.05] text-balance">
              Four packages.
              <span className="italic text-sun-300"> One ambition: a flawless day.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {conferences.packages.map((p, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <div className="p-7 sm:p-9 bg-navy-800/60 border border-ivory-200/10 h-full flex flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl sm:text-3xl text-ivory-50">{p.name}</h3>
                    <p className="text-sun-300 font-display text-xl">{p.from}</p>
                  </div>
                  <p className="mt-5 text-[13px] text-ivory-200/75 leading-relaxed flex-1">
                    {p.includes}
                  </p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 self-start text-[11px] tracking-[0.18em] uppercase text-sun-300 hover:text-sun-200 flex items-center gap-1.5 transition-colors"
                  >
                    Enquire <ArrowUpRight size={14} />
                  </a>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-ivory-50 py-20 sm:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="flex items-end justify-between flex-wrap gap-5 mb-12">
            <div>
              <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">what's coming up</p>
              <h2 className="font-display text-3xl sm:text-5xl text-navy-800 leading-[1.05]">
                Diary of the Centre.
              </h2>
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy-800 text-navy-800 px-6 py-3 text-[11px] tracking-[0.16em] uppercase hover:bg-navy-800 hover:text-ivory-50 transition-colors"
            >
              Submit an event enquiry
            </a>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((ev, i) => (
              <SectionReveal key={i} delay={i * 70}>
                <article className="group relative aspect-[4/5] overflow-hidden bg-navy-900 text-ivory-50">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    loading="lazy"
                    onError={(e) => {
                      if (ev.imageFallback && e.currentTarget.src !== ev.imageFallback) {
                        e.currentTarget.src = ev.imageFallback;
                      } else {
                        e.currentTarget.style.display = 'none';
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-sun-500 text-white px-3 py-1 text-[10px] tracking-[0.2em] uppercase">
                    {ev.type}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[11px] tracking-[0.16em] uppercase text-sun-300 mb-2 flex items-center gap-1.5">
                      <CalendarBlank size={12} /> {ev.date}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl leading-tight text-ivory-50">
                      {ev.title}
                    </h3>
                    <p className="text-[11px] text-ivory-200/70 mt-2 flex items-center gap-1.5">
                      <Buildings size={12} /> {ev.venue}
                    </p>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={conferences.halls[3].image}
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative max-w-[900px] mx-auto px-5 text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 leading-[1.05] text-balance">
              Let's plan your event.
            </h2>
            <p className="mt-5 text-ivory-200/85">Our events team will respond within two hours.</p>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch justify-center gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sun-500 hover:bg-sun-600 text-white px-8 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                WhatsApp the HICC team
              </a>
              <Link
                to="/contact"
                className="border border-ivory-50/70 text-ivory-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-ivory-50 hover:text-navy-800 transition-colors"
              >
                Request a proposal
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
