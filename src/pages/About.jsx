import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkle, Trophy, Heart, Handshake, Leaf } from '@phosphor-icons/react';
import { story, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

const MILESTONES = [
  { year: '1986', event: 'Opens as venue for the 8th Non-Aligned Movement summit, hosting 101 heads of state.' },
  { year: '1995', event: 'Miss World contest broadcasts live from the HICC auditorium.' },
  { year: '2002', event: 'Rainbow Tourism Group (RTG) takes stewardship of the property.' },
  { year: '2015', event: 'Full refurbishment of the tower — all 293 rooms reimagined.' },
  { year: '2020', event: 'Earns the SGS Disney-protocol Safe Stay certification.' },
  { year: '2026', event: 'New Prasar Spa opens; EV charging bays installed in the car park.' },
];

const VALUES = [
  { icon: Sparkle, title: 'Quiet grandeur', body: 'Scale without shout. Service that is present but never performative.' },
  { icon: Trophy, title: 'The event, flawlessly', body: 'Whether a 20-pax boardroom or a 4,500-seat plenary, the bar is the same.' },
  { icon: Handshake, title: 'Host to the capital', body: 'We hold space for Zimbabwe\'s gatherings, from state summits to suburban weddings.' },
  { icon: Heart, title: 'Warmth first', body: 'Polished service, yes. But a warm hello and a knowing smile always first.' },
  { icon: Leaf, title: 'Responsibly run', body: 'Solar roof, water reclamation, local sourcing, and a community kitchen programme.' },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us — The Rainbow Towers Hotel & HICC"
        description="Four decades at one Harare address. A landmark of 293 rooms, 12 event spaces and a 4,500-seat amphitheatre."
      />
      <PageHero
        crumb="About"
        eyebrow="the house on pennefather"
        title="Forty years,"
        titleItalic="one address."
        description="Opened in 1986 as the venue for the Non-Aligned Movement summit. Today the landmark 5-star address on 1 Pennefather Avenue — custodian of Harare's biggest gatherings and quiet weekends alike."
        image={story.image}
      />

      {/* STORY */}
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <SectionReveal className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy-800 leading-[1.05] text-balance">
              {story.headline}
            </h2>
            <div className="mt-8 gold-rule" />
            <div className="mt-8 space-y-5 text-[15px] text-ink-500 leading-relaxed">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>
                We are proud to operate under the {business.parent} — a listed Zimbabwean hospitality group whose hotels span Victoria Falls, Kadoma, Bulawayo and Beitbridge. The Rainbow Towers is the group's capital-city flagship.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={120} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={story.image}
                alt=""
                className="aspect-[3/4] w-full object-cover object-center"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <img
                src={story.accentImage}
                alt=""
                className="aspect-[3/4] w-full object-cover object-center mt-8"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ivory-100 py-20 sm:py-28 relative">
        <div className="grain" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="font-accent text-xl sm:text-2xl text-sun-500 mb-2">what we stand for</p>
            <h2 className="font-display text-3xl sm:text-5xl text-navy-800 leading-[1.05]">
              Values, quietly lived.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, body }, i) => (
              <SectionReveal
                key={title}
                delay={i * 70}
                className="bg-ivory-50 p-7 border border-ivory-300 h-full"
              >
                <Icon size={28} weight="thin" className="text-sun-500 mb-4" />
                <h3 className="font-display text-xl text-navy-800 mb-2">{title}</h3>
                <p className="text-[13px] text-ink-500 leading-relaxed">{body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-navy-900 text-ivory-50 py-20 sm:py-28 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="font-accent text-xl sm:text-2xl text-sun-300 mb-2">milestones</p>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory-50 leading-[1.05]">
              A timeline of the Tower.
            </h2>
          </SectionReveal>

          <ol className="relative border-l border-ivory-200/20 ml-2 space-y-10">
            {MILESTONES.map((m, i) => (
              <SectionReveal as="li" key={m.year} delay={i * 80} className="relative pl-10">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sun-500 border-4 border-navy-900" />
                <p className="font-display text-3xl text-sun-300">{m.year}</p>
                <p className="mt-1.5 text-ivory-200/80 text-[14px] leading-relaxed max-w-xl">
                  {m.event}
                </p>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-50 py-20 sm:py-28">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <SectionReveal>
            <p className="font-accent text-2xl text-sun-500">come and stay</p>
            <h2 className="font-display text-3xl sm:text-5xl text-navy-800 mt-2 text-balance">
              Harare's landmark address,
              <span className="italic text-sun-500"> is one click away.</span>
            </h2>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/reservations"
                className="bg-navy-800 text-ivory-50 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-sun-500 transition-colors"
              >
                Reserve now
              </Link>
              <Link
                to="/contact"
                className="border border-navy-800 text-navy-800 px-8 py-4 text-[11px] tracking-[0.18em] uppercase hover:bg-navy-800 hover:text-ivory-50 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
