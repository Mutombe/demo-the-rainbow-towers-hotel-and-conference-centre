import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone } from '@phosphor-icons/react';
import { business } from '../data/siteData';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms & Suites' },
  { to: '/dining', label: 'Dining' },
  { to: '/conferences', label: 'Conferences · HICC' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    "Hello Rainbow Towers, I'd like to enquire about a reservation."
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          transparent ? 'bg-transparent' : 'glass-ivory'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-3">
          <Link to="/" className="min-w-0 shrink-0">
            <div className={transparent ? 'hidden' : 'block'}>
              <Logo tone="dark" size="sm" />
            </div>
            <div className={transparent ? 'block' : 'hidden'}>
              <Logo tone="light" size="sm" />
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? transparent
                        ? 'text-sun-300'
                        : 'text-sun-500'
                      : transparent
                      ? 'text-ivory-50/90 hover:text-sun-300'
                      : 'text-navy-800 hover:text-sun-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-sun-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              aria-label="Call"
              className={`hidden sm:flex h-10 w-10 items-center justify-center transition-colors ${
                transparent ? 'text-ivory-50 hover:text-sun-300' : 'text-navy-800 hover:text-sun-500'
              }`}
            >
              <Phone size={18} />
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`hidden sm:flex h-10 w-10 items-center justify-center transition-colors ${
                transparent ? 'text-ivory-50 hover:text-sun-300' : 'text-navy-800 hover:text-sun-500'
              }`}
            >
              <WhatsappLogo size={18} />
            </a>
            <Link
              to="/reservations"
              className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-[12px] tracking-[0.12em] uppercase font-medium transition-colors ${
                transparent
                  ? 'bg-sun-500 text-white hover:bg-sun-600'
                  : 'bg-navy-800 text-ivory-50 hover:bg-sun-500'
              }`}
            >
              Reserve
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`h-11 w-11 flex xl:hidden items-center justify-center transition-colors ${
                transparent ? 'text-ivory-50' : 'text-navy-800'
              }`}
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-navy-900/60"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-ivory-300">
            <Logo tone="dark" size="sm" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-11 w-11 flex items-center justify-center text-navy-800"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-6 gap-0.5 overflow-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3.5 font-display text-[22px] tracking-tight transition-colors border-b border-ivory-200 ${
                    isActive ? 'text-sun-500' : 'text-navy-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-ivory-300 space-y-3">
            <Link
              to="/reservations"
              className="w-full flex items-center justify-center gap-2 bg-navy-800 text-ivory-50 py-3.5 text-xs tracking-[0.14em] uppercase"
            >
              Reserve a Room
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-sun-500 text-white py-3.5 text-xs tracking-[0.14em] uppercase"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp
            </a>
            <p className="text-[11px] text-ink-400 text-center pt-2">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
