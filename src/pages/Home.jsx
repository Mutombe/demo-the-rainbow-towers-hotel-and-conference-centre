import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ForkKnife,
  Waves,
  FlowerLotus,
  Car,
  Barbell,
  AirplaneTakeoff,
  WifiHigh,
  Bell,
  Star,
  Quotes,
  ArrowUpRight,
  MapPin,
} from '@phosphor-icons/react';
import {
  hero,
  business,
  rooms,
  dining,
  amenities,
  reviews,
  story,
  homeCta,
  conferences,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import RoomCard from '../components/RoomCard';
import EventVenueCard from '../components/EventVenueCard';
import ReservationBar from '../components/ReservationBar';

const ICONS = {
  ForkKnife,
  Waves,
  FlowerLotus,
  Car,
  Barbell,
  AirplaneTakeoff,
  WifiHigh,
  ConciergeBell: Bell,
};

export default function Home() {
  const featuredRooms = rooms.filter((r) => ['luxury-room', 'executive-suite', 'presidential-suite', 'diplomatic-suite'].includes(r.slug));
  const featuredHalls = conferences.halls.slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title="The Rainbow Towers Hotel & Conference Centre (HICC) — Harare, Zimbabwe"
        description={hero.sub}
      />

      {/* ------- HERO ------- */}
      <section className="relative h-[100svh] min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero.images.main}
            alt="The Rainbow Towers at dusk"
            className="w-full h-full object-cover object-center animate-slow-drift"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/35 to-navy-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />
        </div>

        {/* Decorative numeric co-ordinates */}
        <div className="absolute top-28 right-6 sm:right-10 z-10 hidden md:flex flex-col items-end gap-1 text-ivory-200/40 text-[11px] tracking-[0.32em] uppercase">
          <span>17° 49′ S</span>
          <span>31° 03′ E</span>
          <span className="w-12 h-px bg-sun-400/60 my-1 ml-auto" />
          <span className="text-sun-300">Harare · 1 490 m</span>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pb-14 sm:pb-20 lg:pb-24">
          <SectionReveal>
            <p className="font-accent text-xl sm:text-2xl text-sun-300 mb-3">{hero.eyebrow}</p>
            <h1 className="font-display text-[44px] sm:text-7xl lg:text-[92px] leading-[0.98] text-ivory-50 text-balance max-w-5xl">
              {hero.headline}
              <span className="block italic text-sun-300 mt-1 sm:mt-2">
                {hero.headlineItalic}
              </span>
            </h1>
            <p className="mt-6 sm:mt-7 text-ivory-200/85 text-base sm:text-lg leading-relaxed max-w-2xl text-pretty">
              {hero.sub}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={hero.ctaPrimary.to}
                className="inline-flex items-center justify-center gap-2 bg-sun-500 text-white px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-sun-600 transition-colors"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={14} weight="bold" />
              </Link>
              <Link
                to={hero.ctaSecondary.to}
                className="inline-flex items-center justify-center gap-2 border border-ivory-50/50 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-ivory-50 hover:text-navy-800 transition-colors"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ------- RESERVATION BAR ------- */}
      <section className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
          <ReservationBar variant="light" />
        </div>
      </section>

      {/* ------- STORY / STATS ------- */}
      <section className="bg-ivory-50 py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <SectionReveal className="lg:col-span-7 order-2 lg:order-1">
              <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-3">{story.eyebrow}</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-800 leading-[1.04] text-balance">
                {story.headline}
              </h2>
              <p className="mt-3 text-lg text-ink-400 italic font-display">{story.subhead}</p>
              <div className="mt-8 space-y-5 text-ink-500 text-[15px] leading-relaxed">
                {story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {story.stats.map((s, i) => (
                  <div key={i} className="border-t border-navy-800/15 pt-4">
                    <p className="font-display text-3xl sm:text-4xl text-navy-800">{s.value}</p>
                    <p className="text-[11px] tracking-[0.16em] uppercase text-ink-400 mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={150} className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <img
                  src={story.image}
                  alt="The Rainbow Towers tower"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full aspect-[4/5] object-cover object-center"
                />
                <img
                  src={story.accentImage}
                  alt=""
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="hidden sm:block absolute -bottom-10 -left-10 w-48 lg:w-56 aspect-square object-cover shadow-portal"
                />
                <div className="absolute top-6 right-6 bg-navy-800 text-ivory-50 px-4 py-3">
                  <p className="font-display text-2xl">est. 1986</p>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-sun-300">
                    Pennefather Avenue
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ------- ROOMS ------- */}
      <section className="bg-ivory-100 py-20 sm:py-28 lg:py-32 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-16">
            <div className="max-w-2xl">
              <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">the rooms</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-800 leading-[1.04] text-balance">
                293 rooms.
                <span className="block italic text-sun-500">One skyline.</span>
              </h2>
            </div>
            <Link
              to="/rooms"
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-navy-800 hover:text-sun-500 transition-colors self-start sm:self-auto"
            >
              View all rooms
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredRooms.map((r, i) => (
              <SectionReveal key={r.slug} delay={i * 80}>
                <RoomCard room={r} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------- DINING ------- */}
      <section className="bg-navy-900 text-ivory-50 py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full radial-gold opacity-40 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-3xl mb-14 lg:mb-20">
            <p className="font-accent text-xl sm:text-2xl text-sun-300 mb-2">three restaurants, one courtyard</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 leading-[1.04] text-balance">
              A small continent
              <span className="block italic text-sun-300">of flavours.</span>
            </h2>
            <p className="mt-6 text-ivory-200/70 text-[15px] leading-relaxed">
              From the African-themed buffet at Harvest Garden to the live-fire Afro-Asian of Kombahari, and a marble-topped patisserie in the east lobby — the Rainbow Towers feeds its guests, its conferences, and a good portion of Pennefather Avenue.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {dining.map((d, i) => (
              <SectionReveal key={d.slug} delay={i * 80}>
                <div className="group relative aspect-[4/3] overflow-hidden bg-navy-800">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    onError={(e) => {
                      if (d.imageFallback && e.currentTarget.src !== d.imageFallback) {
                        e.currentTarget.src = d.imageFallback;
                      } else {
                        e.currentTarget.style.display = 'none';
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-navy-900/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-[10px] tracking-[0.22em] uppercase text-sun-300 mb-2">{d.cuisine.split('·')[0].trim()}</p>
                    <h3 className="font-display text-3xl sm:text-4xl text-ivory-50">{d.name}</h3>
                    <p className="mt-2 text-ivory-200/85 text-[14px] italic font-display">
                      {d.tagline}
                    </p>
                    <div className="mt-4 pt-4 border-t border-ivory-200/20 flex items-center justify-between text-[11px] text-ivory-200/70">
                      <span>{d.hours.split('·')[0].trim()}</span>
                      <span className="text-sun-300">{d.seats} seats</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/dining"
              className="inline-flex items-center gap-2 border border-ivory-50/50 text-ivory-50 px-7 py-3.5 text-[11px] tracking-[0.18em] uppercase hover:bg-sun-500 hover:border-sun-500 transition-colors"
            >
              Explore all restaurants
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------- HICC STRIP ------- */}
      <section className="bg-ivory-50 py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="grid lg:grid-cols-12 gap-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">harare international conference centre</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-800 leading-[1.04] text-balance">
                Where the capital
                <span className="block italic text-sun-500">gathers.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-ink-500 text-[15px] leading-relaxed">
                {conferences.intro}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-14 lg:mb-16">
            {conferences.stats.map((s, i) => (
              <div
                key={i}
                className={`px-6 py-8 text-center ${i !== 0 ? 'border-l border-navy-800/10' : ''}`}
              >
                <p className="font-display text-4xl sm:text-5xl text-navy-800">{s.value}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-ink-400 mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredHalls.map((h, i) => (
              <SectionReveal key={h.slug} delay={i * 80}>
                <EventVenueCard hall={h} index={i} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/conferences"
              className="inline-flex items-center gap-2 bg-navy-800 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-sun-500 transition-colors"
            >
              Full HICC brochure
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------- AMENITIES ------- */}
      <section className="bg-ivory-100 py-20 sm:py-28 lg:py-32 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14 lg:mb-16">
            <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">the amenities</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-800 leading-[1.04] text-balance">
              A city within a city.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {amenities.map((a, i) => {
              const Icon = ICONS[a.icon] || Bell;
              return (
                <SectionReveal
                  key={i}
                  delay={i * 60}
                  className={`p-6 sm:p-8 lg:p-10 bg-ivory-50 ${
                    i % 4 !== 3 ? 'lg:border-r' : ''
                  } ${i % 2 !== 1 ? 'border-r lg:border-r' : ''} ${
                    i < amenities.length - 2 ? 'border-b' : ''
                  } ${i < amenities.length - 4 ? 'lg:border-b' : ''} border-ivory-300`}
                >
                  <Icon size={28} className="text-sun-500 mb-5" weight="thin" />
                  <h3 className="font-display text-xl text-navy-800 mb-2">{a.title}</h3>
                  <p className="text-[13px] text-ink-400 leading-relaxed">{a.blurb}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------- REVIEWS ------- */}
      <section className="bg-navy-800 text-ivory-50 py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14 lg:mb-16">
            <p className="font-accent text-xl sm:text-2xl text-sun-300 mb-2">what our guests say</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 leading-[1.04] text-balance">
              {business.rating}
              <span className="text-sun-300">★</span>{' '}
              <span className="italic">from {business.reviewCount.toLocaleString()} reviews.</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.slice(0, 3).map((r, i) => (
              <SectionReveal key={i} delay={i * 90}>
                <article className="relative bg-navy-700/50 border border-ivory-200/10 p-7 h-full flex flex-col">
                  <Quotes size={28} weight="fill" className="text-sun-400 mb-4" />
                  <p className="text-[14px] leading-relaxed text-ivory-200/90 italic flex-1">
                    "{r.body}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-ivory-200/10 flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg text-ivory-50">{r.name}</p>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-ivory-200/50 mt-0.5">
                        {r.source} · {r.date}
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, s) => (
                        <Star key={s} size={12} weight="fill" className="text-sun-400" />
                      ))}
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------- CTA ------- */}
      <section className="relative h-[70vh] min-h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeCta.image}
            alt=""
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = 'none')}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-900/70" />
        </div>
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <SectionReveal>
            <p className="font-accent text-2xl sm:text-3xl text-sun-300 mb-3">{homeCta.eyebrow}</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 leading-[1.04] text-balance">
              {homeCta.headline}
            </h2>
            <p className="mt-6 text-ivory-200/85 text-base sm:text-lg max-w-2xl mx-auto">
              {homeCta.sub}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                to="/reservations"
                className="inline-flex items-center justify-center gap-2 bg-sun-500 text-white px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-sun-600 transition-colors"
              >
                Reserve Your Stay
                <ArrowRight size={14} weight="bold" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-ivory-50/70 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.18em] uppercase hover:bg-ivory-50 hover:text-navy-800 transition-colors"
              >
                <MapPin size={14} /> Visit Us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
