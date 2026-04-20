import React, { useMemo, useState } from 'react';
import { X, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { gallery, galleryCategories } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function Gallery() {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);

  const filtered = useMemo(
    () => (cat === 'All' ? gallery : gallery.filter((g) => g.cat === cat)),
    [cat]
  );

  const close = () => setOpen(null);
  const next = () =>
    setOpen((n) => (n === null ? n : (n + 1) % filtered.length));
  const prev = () =>
    setOpen((n) => (n === null ? n : (n - 1 + filtered.length) % filtered.length));

  React.useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, filtered.length]);

  return (
    <PageTransition>
      <SEO
        title="Gallery — The Rainbow Towers Hotel & HICC"
        description="A photographic tour — the tower, the pool, the Presidential Suite, Harvest Garden and the HICC banquet floors."
      />
      <PageHero
        crumb="Gallery"
        eyebrow="a photographic tour"
        title="The house"
        titleItalic="in pictures."
        description="Twenty-eight storeys, twelve event spaces, four restaurants and 2,000 parking bays — told in photographs, floor by floor, garden to suite."
        image={gallery[0].src}
      />

      {/* FILTER */}
      <section className="bg-ivory-50 border-b border-ivory-300 sticky top-20 z-30">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-[12px] tracking-[0.14em] uppercase px-4 py-2 transition-colors whitespace-nowrap ${
                cat === c ? 'bg-navy-800 text-ivory-50' : 'text-navy-800 hover:text-sun-500'
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-[11px] text-ink-400 shrink-0 hidden sm:block">
            {filtered.length} images
          </span>
        </div>
      </section>

      {/* MASONRY */}
      <section className="bg-ivory-100 py-14 sm:py-20 relative">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-5 [column-fill:_balance]">
            {filtered.map((g, i) => (
              <button
                key={`${g.src}-${i}`}
                onClick={() => setOpen(i)}
                className="group mb-4 lg:mb-5 block w-full relative overflow-hidden"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="w-full h-auto object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-ivory-50 bg-navy-800/80 px-2.5 py-1">
                    {g.cat}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {open !== null && filtered[open] && (
        <div className="fixed inset-0 z-50 bg-navy-900/95 flex items-center justify-center p-4 sm:p-8">
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 h-11 w-11 text-ivory-50 hover:text-sun-400 transition-colors z-10"
          >
            <X size={26} />
          </button>
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 text-ivory-50 hover:text-sun-400 transition-colors"
          >
            <CaretLeft size={28} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 text-ivory-50 hover:text-sun-400 transition-colors"
          >
            <CaretRight size={28} />
          </button>

          <div className="max-w-6xl max-h-[88vh] flex flex-col items-center">
            <img
              src={filtered[open].src}
              alt={filtered[open].alt}
              onError={(e) => (e.currentTarget.style.display = 'none')}
              className="max-h-[80vh] w-auto object-contain"
            />
            <p className="mt-4 text-[11px] tracking-[0.2em] uppercase text-ivory-200/70">
              {filtered[open].cat} · {open + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
