import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  WhatsappLogo,
  EnvelopeSimple,
  CheckCircle,
  Sparkle,
  CalendarBlank,
  Users,
  Phone,
} from '@phosphor-icons/react';
import { business, rooms } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function Reservations() {
  const today = new Date();
  const fmt = (d) => d.toISOString().split('T')[0];
  const tomorrow = new Date(today.getTime() + 86400000);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: fmt(today),
    checkOut: fmt(tomorrow),
    guests: 2,
    room: 'Luxury Room',
    requests: '',
  });
  const [channel, setChannel] = useState('whatsapp');

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.checkIn || !form.checkOut) {
      toast.error('Please give us your name and dates.');
      return;
    }
    const body = [
      `Hello Rainbow Towers — reservation enquiry.`,
      ``,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      `Preferred room: ${form.room}`,
      form.requests ? `\nSpecial requests:\n${form.requests}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    if (channel === 'whatsapp') {
      const msg = encodeURIComponent(body);
      window.open(
        `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`,
        '_blank',
        'noopener'
      );
    } else {
      const subject = encodeURIComponent(
        `Reservation enquiry — ${form.name} — ${form.checkIn} to ${form.checkOut}`
      );
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${encodeURIComponent(
        body
      )}`;
    }
    toast.success('Thank you — opening ' + (channel === 'whatsapp' ? 'WhatsApp' : 'email') + '.');
  };

  const inputCls =
    'w-full bg-transparent border-b border-ink-200 py-3 text-[15px] text-navy-800 placeholder:text-ink-300 outline-none focus:border-sun-500 transition-colors';

  return (
    <PageTransition>
      <SEO
        title="Reservations — Book Your Stay at The Rainbow Towers"
        description="Enquire about a Classic Double, an Executive Suite or the Presidential Suite. Our reservations team will respond within the hour."
      />
      <PageHero
        crumb="Reservations"
        eyebrow="reserve your stay"
        title="A room on Pennefather Avenue,"
        titleItalic="ready when you are."
        description="Share your dates and preferences. Our reservations team responds within the hour, daily between 07:00 and 22:00."
        image={rooms[2].image}
      />

      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* FORM */}
            <div className="lg:col-span-7">
              <SectionReveal>
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* CHANNEL TOGGLE */}
                  <div className="flex bg-ivory-100 p-1 border border-ivory-300 w-fit">
                    <button
                      type="button"
                      onClick={() => setChannel('whatsapp')}
                      className={`px-5 py-2 text-[11px] tracking-[0.14em] uppercase flex items-center gap-1.5 transition-colors ${
                        channel === 'whatsapp'
                          ? 'bg-[#25D366] text-white'
                          : 'text-ink-500'
                      }`}
                    >
                      <WhatsappLogo size={14} weight="fill" /> WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setChannel('email')}
                      className={`px-5 py-2 text-[11px] tracking-[0.14em] uppercase flex items-center gap-1.5 transition-colors ${
                        channel === 'email' ? 'bg-sun-500 text-white' : 'text-ink-500'
                      }`}
                    >
                      <EnvelopeSimple size={14} weight="fill" /> Email
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Full name *">
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={inputCls}
                        placeholder="Your name"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className={inputCls}
                        placeholder="+263…"
                      />
                    </Field>
                    <Field label="Email" className="sm:col-span-2">
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputCls}
                        placeholder="you@example.com"
                      />
                    </Field>

                    <Field label="Check-in *" icon={<CalendarBlank size={14} />}>
                      <input
                        required
                        type="date"
                        min={fmt(today)}
                        value={form.checkIn}
                        onChange={(e) => update('checkIn', e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Check-out *" icon={<CalendarBlank size={14} />}>
                      <input
                        required
                        type="date"
                        min={form.checkIn}
                        value={form.checkOut}
                        onChange={(e) => update('checkOut', e.target.value)}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Guests" icon={<Users size={14} />}>
                      <select
                        value={form.guests}
                        onChange={(e) => update('guests', e.target.value)}
                        className={inputCls}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'guest' : 'guests'}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred room">
                      <select
                        value={form.room}
                        onChange={(e) => update('room', e.target.value)}
                        className={inputCls}
                      >
                        {rooms.map((r) => (
                          <option key={r.slug}>{r.name}</option>
                        ))}
                        <option>Not sure yet — advise me</option>
                      </select>
                    </Field>

                    <Field label="Special requests" className="sm:col-span-2">
                      <textarea
                        rows="4"
                        value={form.requests}
                        onChange={(e) => update('requests', e.target.value)}
                        className={`${inputCls} resize-none`}
                        placeholder="Arrival time, occasion, dietary requirements, accessibility…"
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-[11px] tracking-[0.18em] uppercase text-white transition-colors ${
                      channel === 'whatsapp'
                        ? 'bg-[#25D366] hover:bg-[#1da851]'
                        : 'bg-sun-500 hover:bg-sun-600'
                    }`}
                  >
                    {channel === 'whatsapp' ? (
                      <>
                        <WhatsappLogo size={16} weight="fill" /> Send via WhatsApp
                      </>
                    ) : (
                      <>
                        <EnvelopeSimple size={16} weight="fill" /> Send via Email
                      </>
                    )}
                  </button>
                </form>
              </SectionReveal>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="bg-navy-900 text-ivory-50 p-8">
                <Sparkle size={24} className="text-sun-300 mb-4" />
                <h3 className="font-display text-2xl mb-3">Rest assured</h3>
                <ul className="space-y-3 text-[13px] text-ivory-200/80">
                  {[
                    'Best rate guarantee — direct bookings only',
                    'Free cancellation up to 48 hours',
                    'Complimentary airport transfer for suite guests',
                    'Full breakfast included on all rates',
                    'Priority check-in from 12:00 for our returning guests',
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-sun-400 mt-0.5 shrink-0" weight="fill" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ivory-100 border border-ivory-300 p-8">
                <h3 className="font-display text-xl text-navy-800 mb-5">Need to talk to us?</h3>
                <div className="space-y-4 text-[14px]">
                  <a
                    href={`tel:${business.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-navy-800 hover:text-sun-500"
                  >
                    <Phone size={18} className="text-sun-500" />
                    {business.phoneDisplay}
                  </a>
                  <a
                    href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-navy-800 hover:text-sun-500"
                  >
                    <WhatsappLogo size={18} className="text-sun-500" />
                    WhatsApp reservations
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-3 text-navy-800 hover:text-sun-500 break-all"
                  >
                    <EnvelopeSimple size={18} className="text-sun-500 shrink-0" />
                    {business.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, icon, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400 flex items-center gap-1.5 mb-1">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
