import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { business, rooms, dining } from '../data/siteData';
import Logo from './Logo';

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
  return (
    <footer className="relative bg-navy-900 text-ivory-100 mt-0">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <Logo tone="light" size="lg" />
            </Link>
            <p className="text-sm text-ivory-200/70 leading-relaxed max-w-xs">
              {business.tagline} A landmark 5-star address on Pennefather Avenue, home of the Harare International Conference Centre.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: business.instagram, Icon: InstagramLogo, label: 'Instagram' },
                { href: business.facebook, Icon: FacebookLogo, label: 'Facebook' },
                { href: business.linkedin, Icon: LinkedinLogo, label: 'LinkedIn' },
                { href: waHref, Icon: WhatsappLogo, label: 'WhatsApp' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 border border-ivory-200/15 flex items-center justify-center text-ivory-200/80 hover:bg-sun-500 hover:text-white hover:border-sun-500 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Stay */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base text-ivory-50 mb-5">Stay</h4>
            <ul className="space-y-2.5 text-sm">
              {rooms.slice(0, 6).map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/rooms"
                    className="text-ivory-200/70 hover:text-sun-300 transition-colors"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dine */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base text-ivory-50 mb-5">Dine</h4>
            <ul className="space-y-2.5 text-sm">
              {dining.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/dining"
                    className="text-ivory-200/70 hover:text-sun-300 transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/conferences" className="text-ivory-200/70 hover:text-sun-300 transition-colors">
                  HICC · Conferences
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-base text-ivory-50 mb-5">Visit</h4>
            <ul className="space-y-3 text-sm text-ivory-200/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-sun-400 shrink-0" />
                <span>
                  {business.addressLine1}
                  <br />
                  {business.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-sun-400 shrink-0" />
                <span>
                  Reception · {business.hours.reception}
                  <br />
                  Reservations · {business.hours.reservations}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-sun-400 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-sun-300"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} className="mt-0.5 text-sun-400 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-sun-300 break-all"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-ivory-200/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-200/55 text-center sm:text-left">
          <p>© 2026 {business.nameFull}. A member of the {business.parent}.</p>
          <p>Harare · Zimbabwe · 1 Pennefather Avenue</p>
        </div>

        <p className="mt-4 text-center text-[11px] text-ivory-200/45 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sun-400 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
