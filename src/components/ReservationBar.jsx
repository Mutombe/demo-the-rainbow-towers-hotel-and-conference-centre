import React, { useState } from 'react';
import { CalendarBlank, Users, WhatsappLogo } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function ReservationBar({ variant = 'light' }) {
  const today = new Date();
  const fmt = (d) => d.toISOString().split('T')[0];
  const tomorrow = new Date(today.getTime() + 86400000);

  const [checkIn, setCheckIn] = useState(fmt(today));
  const [checkOut, setCheckOut] = useState(fmt(tomorrow));
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('Any room');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Rainbow Towers,\n\nI'd like to enquire about a reservation:\n• Check-in: ${checkIn}\n• Check-out: ${checkOut}\n• Guests: ${guests}\n• Preferred room: ${roomType}\n\nPlease confirm availability and rate. Thank you.`
    );
    window.open(
      `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${msg}`,
      '_blank',
      'noopener'
    );
  };

  const isDark = variant === 'dark';
  const shell = isDark
    ? 'bg-navy-800/85 backdrop-blur-xl border border-ivory-200/10 text-ivory-50'
    : 'bg-ivory-50 shadow-portal border border-ivory-300 text-navy-800';
  const label = isDark ? 'text-ivory-200/70' : 'text-ink-400';
  const input = isDark
    ? 'bg-transparent text-ivory-50 border-b border-ivory-200/15 focus:border-sun-400'
    : 'bg-transparent text-navy-800 border-b border-ink-200 focus:border-sun-500';

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 p-5 sm:p-6 ${shell}`}
    >
      <Field icon={<CalendarBlank size={16} className="text-sun-500" />} label="Check-in" labelCls={label}>
        <input
          type="date"
          value={checkIn}
          min={fmt(today)}
          onChange={(e) => setCheckIn(e.target.value)}
          className={`w-full py-2 outline-none text-[14px] ${input}`}
        />
      </Field>
      <Field icon={<CalendarBlank size={16} className="text-sun-500" />} label="Check-out" labelCls={label}>
        <input
          type="date"
          value={checkOut}
          min={checkIn}
          onChange={(e) => setCheckOut(e.target.value)}
          className={`w-full py-2 outline-none text-[14px] ${input}`}
        />
      </Field>
      <Field icon={<Users size={16} className="text-sun-500" />} label="Guests" labelCls={label}>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className={`w-full py-2 outline-none text-[14px] ${input} appearance-none`}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n} className="text-navy-800">
              {n} {n === 1 ? 'guest' : 'guests'}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Room" labelCls={label}>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className={`w-full py-2 outline-none text-[14px] ${input} appearance-none`}
        >
          {[
            'Any room',
            'Double Room',
            'Twin Room',
            'Luxury Room',
            'Executive Suite',
            'Diplomatic Suite',
            'Presidential Suite',
            'Family Room',
            'Accessible Room',
          ].map((r) => (
            <option key={r} className="text-navy-800">
              {r}
            </option>
          ))}
        </select>
      </Field>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-sun-500 hover:bg-sun-600 text-white py-3.5 px-6 text-[11px] tracking-[0.18em] uppercase font-medium transition-colors"
      >
        <WhatsappLogo size={16} weight="fill" />
        Check Availability
      </button>
    </form>
  );
}

function Field({ icon, label, labelCls, children }) {
  return (
    <label className="flex flex-col gap-1 min-w-0">
      <span className={`text-[10px] tracking-[0.18em] uppercase ${labelCls} flex items-center gap-1.5`}>
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
