import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  WhatsappLogo,
  PaperPlaneTilt,
  NavigationArrow,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import { business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

const DEPTS = [
  { label: 'Room reservations', value: 'reservations' },
  { label: 'HICC / events enquiry', value: 'events' },
  { label: 'Dining reservations', value: 'dining' },
  { label: 'Weddings & private functions', value: 'weddings' },
  { label: 'Media / press', value: 'media' },
  { label: 'General enquiry', value: 'general' },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    dept: 'general',
    message: '',
  });
  const [channel, setChannel] = useState('whatsapp');

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error('A name and a line or two of context, please.');
      return;
    }
    const body = [
      `Hello Rainbow Towers,`,
      ``,
      `Department: ${DEPTS.find((d) => d.value === form.dept)?.label || form.dept}`,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      ``,
      `${form.message}`,
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
        `[${DEPTS.find((d) => d.value === form.dept)?.label}] — ${form.name}`
      );
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    }
    toast.success('Opening ' + (channel === 'whatsapp' ? 'WhatsApp' : 'email') + '…');
  };

  const inputCls =
    'w-full bg-transparent border-b border-ink-200 py-3 text-[15px] text-navy-800 placeholder:text-ink-300 outline-none focus:border-sun-500 transition-colors';

  return (
    <PageTransition>
      <SEO
        title="Contact The Rainbow Towers — 1 Pennefather Avenue, Harare"
        description="Phone, WhatsApp, email and our door. Reception is open 24 hours. Reservations 07:00 to 22:00."
      />
      <PageHero
        crumb="Contact"
        eyebrow="get in touch"
        title="One Pennefather Avenue."
        titleItalic="The door is open."
        description="Reception is open 24 hours. Reservations take calls 07:00–22:00. And WhatsApp, as ever, is always on."
      />

      {/* QUICK CONTACT STRIP */}
      <section className="bg-ivory-50 py-10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-0 border border-ivory-300">
          {[
            { icon: Phone, label: 'Call', value: business.phoneDisplay, href: `tel:${business.phone.replace(/\s/g, '')}` },
            { icon: WhatsappLogo, label: 'WhatsApp', value: business.phoneDisplay, href: `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}` },
            { icon: EnvelopeSimple, label: 'Email', value: business.email, href: `mailto:${business.email}` },
            { icon: MapPin, label: 'Visit', value: business.addressLine1, href: 'https://maps.google.com/?q=Rainbow+Towers+Hotel+Harare' },
          ].map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target={label === 'WhatsApp' || label === 'Visit' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`p-5 sm:p-7 group transition-colors hover:bg-ivory-100 ${
                i !== 0 ? 'border-l border-ivory-300' : ''
              } ${i < 2 ? 'border-b md:border-b-0 border-ivory-300' : ''}`}
            >
              <Icon size={22} className="text-sun-500 mb-3" />
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink-400">{label}</p>
              <p className="text-[13px] text-navy-800 mt-1 group-hover:text-sun-500 transition-colors break-all">
                {value}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-ivory-50 py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <SectionReveal className="lg:col-span-7">
            <form onSubmit={submit} className="space-y-6">
              <div className="flex bg-ivory-100 p-1 border border-ivory-300 w-fit">
                <button
                  type="button"
                  onClick={() => setChannel('whatsapp')}
                  className={`px-5 py-2 text-[11px] tracking-[0.14em] uppercase flex items-center gap-1.5 transition-colors ${
                    channel === 'whatsapp' ? 'bg-[#25D366] text-white' : 'text-ink-500'
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
                <Field label="Name *">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone">
                  <input
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
                <Field label="Department" className="sm:col-span-2">
                  <select
                    value={form.dept}
                    onChange={(e) => update('dept', e.target.value)}
                    className={inputCls}
                  >
                    {DEPTS.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Message *" className="sm:col-span-2">
                  <textarea
                    required
                    rows="5"
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us what you need, a ballpark date, an ideal outcome…"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-8 py-4 text-[11px] tracking-[0.18em] uppercase text-white transition-colors ${
                  channel === 'whatsapp'
                    ? 'bg-[#25D366] hover:bg-[#1da851]'
                    : 'bg-sun-500 hover:bg-sun-600'
                }`}
              >
                <PaperPlaneTilt size={14} weight="fill" /> Send message
              </button>
            </form>
          </SectionReveal>

          <SectionReveal className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900 text-ivory-50 p-8">
              <h3 className="font-display text-2xl mb-5">Hours & address</h3>
              <ul className="space-y-4 text-[14px] text-ivory-200/85">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-sun-400 mt-0.5 shrink-0" />
                  <span>
                    {business.addressLine1}
                    <br />
                    {business.addressLine2}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-sun-400 mt-0.5 shrink-0" />
                  <span>
                    Reception · {business.hours.reception}
                    <br />
                    Reservations · {business.hours.reservations}
                  </span>
                </li>
              </ul>
              <div className="mt-7 pt-6 border-t border-ivory-200/10 flex items-center gap-3">
                {[
                  { href: business.instagram, Icon: InstagramLogo },
                  { href: business.facebook, Icon: FacebookLogo },
                  { href: business.linkedin, Icon: LinkedinLogo },
                  { href: `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`, Icon: WhatsappLogo },
                ].map(({ href, Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 border border-ivory-200/15 flex items-center justify-center text-ivory-200/80 hover:bg-sun-500 hover:border-sun-500 hover:text-white transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rainbow+Towers+Hotel+Harare"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-sun-500 hover:bg-sun-600 text-white px-5 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors"
            >
              <NavigationArrow size={16} weight="fill" />
              Get directions in Google Maps
            </a>
          </SectionReveal>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-ivory-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-14">
          <SectionReveal>
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-navy-900 overflow-hidden shadow-portal">
              <iframe
                title="Map — 1 Pennefather Avenue, Harare"
                src={business.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '360px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-[10px] tracking-[0.18em] uppercase text-ink-400 mb-1 block">
        {label}
      </span>
      {children}
    </label>
  );
}
