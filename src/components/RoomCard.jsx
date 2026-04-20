import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bed, Ruler, Eye } from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function RoomCard({ room, index = 0 }) {
  const wa = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello Rainbow Towers, I'd like to book a ${room.name}.`
  )}`;

  return (
    <Link
      to="/reservations"
      className="block group relative bg-ivory-50 overflow-hidden shadow-portal transition-all duration-500 hover:shadow-[0_30px_70px_-25px_rgba(14,27,51,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          onError={(e) => {
            if (room.imageFallback && e.currentTarget.src !== room.imageFallback) {
              e.currentTarget.src = room.imageFallback;
            } else {
              e.currentTarget.style.display = 'none';
            }
          }}
          className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/0 to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] uppercase text-ivory-50 bg-navy-800/70 backdrop-blur-sm px-2.5 py-1">
          {room.tier}
        </span>
        <span className="absolute top-4 right-4 text-[11px] tracking-wide text-ivory-50 bg-sun-500 px-2.5 py-1 font-medium">
          from {room.from}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="font-accent text-lg text-sun-300 mb-0.5">room {String(index + 1).padStart(2, '0')}</p>
          <h3 className="font-display text-[24px] sm:text-[28px] text-ivory-50 leading-tight">
            {room.name}
          </h3>
        </div>
      </div>

      <div className="p-5 sm:p-6 border-t border-ivory-200">
        <p className="text-[13px] leading-relaxed text-ink-500 line-clamp-3 min-h-[60px]">
          {room.blurb}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-ink-500">
          <div className="flex items-center gap-1.5">
            <Bed size={14} className="text-sun-500 shrink-0" />
            <span className="truncate">{room.amenities[0]}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Ruler size={14} className="text-sun-500 shrink-0" />
            <span>{room.size}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye size={14} className="text-sun-500 shrink-0" />
            <span className="truncate">{room.view}</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.14em] uppercase text-navy-800 font-medium group-hover:text-sun-500 transition-colors flex items-center gap-1.5">
            Reserve this room
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[10px] tracking-[0.16em] uppercase text-sun-500 hover:text-navy-800 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </Link>
  );
}
