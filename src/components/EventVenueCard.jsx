import React from 'react';
import { Link } from 'react-router-dom';
import { UsersThree, ArrowUpRight, Square } from '@phosphor-icons/react';

export default function EventVenueCard({ hall, index = 0 }) {
  return (
    <Link
      to="/conferences"
      className="block group relative bg-navy-800 text-ivory-50 overflow-hidden"
    >
      <div className="relative aspect-[5/3] overflow-hidden">
        <img
          src={hall.image}
          alt={hall.name}
          loading="lazy"
          onError={(e) => {
            if (hall.imageFallback && e.currentTarget.src !== hall.imageFallback) {
              e.currentTarget.src = hall.imageFallback;
            } else {
              e.currentTarget.style.display = 'none';
            }
          }}
          className="w-full h-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-navy-900/10" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-ivory-50 bg-sun-500 px-2.5 py-1">
            Hall {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="relative p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-display text-[22px] sm:text-[26px] leading-tight">{hall.name}</h3>
        </div>
        <div className="flex items-center gap-5 text-[12px] text-ivory-200/80 mb-4">
          <span className="flex items-center gap-1.5">
            <UsersThree size={14} className="text-sun-400" />
            {hall.capacity.toLocaleString()} pax
          </span>
          <span className="flex items-center gap-1.5">
            <Square size={14} className="text-sun-400" />
            {hall.area}
          </span>
        </div>
        <p className="text-[13px] leading-relaxed text-ivory-200/75 line-clamp-3">
          {hall.description}
        </p>
        <div className="mt-5 pt-5 border-t border-ivory-200/10 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] uppercase text-ivory-200/60">
            {hall.setup}
          </span>
          <span className="text-[11px] tracking-[0.16em] uppercase text-sun-400 flex items-center gap-1.5 group-hover:text-sun-300 transition-colors">
            Enquire
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
