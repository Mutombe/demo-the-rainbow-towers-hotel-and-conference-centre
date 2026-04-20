import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, UsersThree, Confetti, WhatsappLogo } from '@phosphor-icons/react';
import { dining, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function Dining() {
  const waHref = (r) =>
    `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
      `Hello, I'd like to book a table at ${r}.`
    )}`;

  return (
    <PageTransition>
      <SEO
        title="Dining — Restaurants at The Rainbow Towers Harare"
        description="Four unique restaurants under one roof — Harvest Garden, Kombahari, La Patisserie and Tipperary's."
      />
      <PageHero
        crumb="Dining"
        eyebrow="three restaurants, one lounge, one courtyard"
        title="A small continent"
        titleItalic="of flavours."
        description="The Rainbow Towers has been feeding Harare — its diplomats, its delegates, its wedding guests — for almost forty years. Four restaurants now call the hotel home, and each has a reason to exist."
        image={dining[0].image}
      />

      {/* RESTAURANTS — alternating rows */}
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 space-y-20 lg:space-y-28">
          {dining.map((d, i) => {
            const reverse = i % 2 === 1;
            return (
              <SectionReveal key={d.slug}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="relative">
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
                        className="w-full aspect-[16/10] object-cover object-center"
                      />
                      <div className="absolute top-5 left-5 bg-navy-800 text-ivory-50 px-4 py-2.5 text-[10px] tracking-[0.22em] uppercase">
                        #{String(i + 1).padStart(2, '0')} · {d.cuisine.split('·')[0].trim()}
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
                    <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">{d.tagline}</p>
                    <h2 className="font-display text-4xl sm:text-5xl text-navy-800 leading-[1.05] text-balance">
                      {d.name}
                    </h2>
                    <div className="mt-5 gold-rule" />
                    <p className="mt-6 text-[15px] text-ink-500 leading-relaxed">
                      {d.description}
                    </p>

                    <div className="mt-7 space-y-3 text-[13px] text-ink-500">
                      <div className="flex items-start gap-2.5">
                        <Clock size={16} className="text-sun-500 mt-0.5 shrink-0" />
                        <span>{d.hours}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <UsersThree size={16} className="text-sun-500 mt-0.5 shrink-0" />
                        <span>{d.seats} seats · {d.dressCode}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Confetti size={16} className="text-sun-500 mt-0.5 shrink-0" />
                        <span className="italic">{d.highlight}</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href={waHref(d.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-sun-500 hover:bg-sun-600 text-white px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
                      >
                        <WhatsappLogo size={14} weight="fill" /> Book a table
                      </a>
                      <a
                        href={`tel:${business.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center justify-center gap-2 border border-navy-800 text-navy-800 px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase hover:bg-navy-800 hover:text-ivory-50 transition-colors"
                      >
                        Call reservations
                      </a>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* PRIVATE DINING */}
      <section className="bg-navy-900 text-ivory-50 py-20 sm:py-28 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <SectionReveal>
            <p className="font-accent text-2xl text-sun-300 mb-2">private dining</p>
            <h2 className="font-display text-4xl sm:text-5xl text-ivory-50 leading-[1.05] text-balance">
              A longer table,
              <span className="italic text-sun-300"> behind a closed door.</span>
            </h2>
            <p className="mt-6 text-ivory-200/75 max-w-2xl mx-auto">
              Any of our restaurants can be reserved whole, or partitioned into a private room. Up to 240 guests seated, curated wine lists, custom menus — and our events team on hand from first enquiry to final toast.
            </p>
            <Link
              to="/conferences"
              className="mt-10 inline-flex items-center gap-2 bg-sun-500 hover:bg-sun-600 text-white px-7 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
            >
              See event spaces
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
