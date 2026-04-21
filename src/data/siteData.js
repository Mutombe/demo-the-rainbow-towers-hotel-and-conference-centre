/**
 * The Rainbow Towers Hotel & Conference Centre — site content
 * Harare landmark hotel on Pennefather Avenue, home of HICC.
 */

const U = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const business = {
  name: 'The Rainbow Towers',
  nameFull: 'The Rainbow Towers Hotel & Conference Centre',
  wordmarkLineOne: 'The Rainbow',
  wordmarkLineTwo: 'Towers',
  tagline: 'A symbol of glamour. Synonymous with success.',
  shortTagline: "Harare's Landmark 5-star Address",
  phone: '+263 24 2772633',
  phoneDisplay: '+263 24 277 2633',
  whatsapp: '+263242772633',
  email: 'reservations@rainbowtowers.co.zw',
  addressLine1: '1 Pennefather Avenue',
  addressLine2: 'Harare, Zimbabwe',
  address: '1 Pennefather Avenue, Harare, Zimbabwe',
  rating: 4.1,
  reviewCount: 5619,
  towerHeight: 104,
  totalRooms: 293,
  parkingBays: 2000,
  instagram: 'https://www.instagram.com/rainbowtowershotel',
  facebook: 'https://www.facebook.com/RainbowTowersHotelHarare',
  linkedin: 'https://www.linkedin.com/company/rainbow-tourism-group',
  hours: {
    reception: '24 hours',
    reservations: '07:00 – 22:00 daily',
  },
  parent: 'Rainbow Tourism Group (RTG)',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.431!2d31.0478!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDknNDUuMSJTIDMxwrAwMic1Mi4xIkU!5e0!3m2!1sen!2szw!4v1700000000000',
};

/* ---------- HERO ---------- */
export const hero = {
  eyebrow: 'est. 1986 · 1 Pennefather Avenue',
  headline: 'A landmark rises',
  headlineItalic: 'over Harare.',
  sub: "Twenty-eight storeys of understated grandeur on Pennefather Avenue — 293 rooms, three signature restaurants and the 4,500-seat Harare International Conference Centre. The address where the capital gathers, hosts and remembers.",
  ctaPrimary: { label: 'Reserve a Room', to: '/reservations' },
  ctaSecondary: { label: 'Tour the HICC', to: '/conferences' },
  images: {
    main: U('1621293954908-907159247fc8'),
    detail: U('1590490360182-c33d57733427', 900),
  },
};

/* ---------- ROOMS ---------- */
export const rooms = [
  {
    slug: 'double-room',
    name: 'Double Room',
    tier: 'Classic',
    count: 118,
    from: 'USD 135',
    size: '28 m²',
    view: 'City or pool courtyard',
    image: U('1631049307264-da0ec9d70304', 1200),
    imageFallback: U('1590490360182-c33d57733427', 1200),
    blurb:
      'Warm linen, a writing desk that looks out toward the Sapes koppies, and a bathroom finished in travertine. The cornerstone of a Rainbow Towers stay.',
    amenities: ['Queen bed', 'Rain shower', 'Complimentary Wi-Fi', 'Nespresso machine', 'Pennefather Ave view'],
  },
  {
    slug: 'twin-room',
    name: 'Twin Room',
    tier: 'Classic',
    count: 83,
    from: 'USD 135',
    size: '28 m²',
    view: 'Courtyard',
    image: U('1566665797739-1674de7a421a', 1200),
    blurb:
      'Two plush single beds dressed in crisp cotton — made for colleagues on a conference or families stitching a holiday together.',
    amenities: ['Two singles', 'Work desk', 'Smart TV', 'Wi-Fi', 'Tea & coffee set'],
  },
  {
    slug: 'luxury-room',
    name: 'Luxury Room',
    tier: 'Luxury',
    count: 64,
    from: 'USD 195',
    size: '34 m²',
    view: 'Pool or skyline',
    image: U('1582719478250-c89cae4dc85b', 1200),
    blurb:
      'A deeper palette of ink and ivory, a dressing area, and a bath wide enough for a long soak after the keynote. Our most requested tier.',
    amenities: ['King bed', 'Marble bath + shower', 'Robes & slippers', 'Mini bar', 'Club-floor lounge access'],
  },
  {
    slug: 'executive-suite',
    name: 'Executive Suite',
    tier: 'Suite',
    count: 18,
    from: 'USD 295',
    size: '52 m²',
    view: 'Harare city view',
    image: U('1578683010236-d716f9a3f461', 1200),
    blurb:
      'Living room and bedroom separated by a teak sliding door, a work nook with meeting table for four, and picture windows onto the capital.',
    amenities: ['Separate lounge', 'Boardroom table for 4', 'Panoramic view', 'Evening canapés', 'Priority check-in'],
  },
  {
    slug: 'diplomatic-suite',
    name: 'Diplomatic Suite',
    tier: 'Suite',
    count: 9,
    from: 'USD 465',
    size: '74 m²',
    view: 'Skyline, high floor',
    image: U('1590490360182-c33d57733427', 1200),
    blurb:
      'Reserved for heads of mission and long-stay dignitaries. A private foyer, formal sitting, and a dedicated butler by request.',
    amenities: ['Private foyer', 'Butler on request', 'Dining for 6', 'Dressing room', 'Airport transfer included'],
  },
  {
    slug: 'presidential-suite',
    name: 'Presidential Suite',
    tier: 'Signature',
    count: 1,
    from: 'On request',
    size: '210 m²',
    view: '360° Harare',
    image: U('1591088398332-8a7791972843', 1200),
    imageFallback: U('1567016376408-0226e4d0c1ea', 1200),
    blurb:
      "The hotel's crown suite — a full floor with grand salon, private dining room, two bedrooms and a study. Has hosted presidents, heads of state and touring artists.",
    amenities: ['Full floor', 'Private dining for 10', 'Two bedrooms', 'Study & library', 'Dedicated butler'],
  },
  {
    slug: 'family-room',
    name: 'Family Room',
    tier: 'Classic',
    count: 8,
    from: 'USD 175',
    size: '42 m²',
    view: 'Pool courtyard',
    image: U('1571508601891-ca5e7a713859', 1200),
    imageFallback: U('1540518614846-7eded433c457', 1200),
    blurb:
      'Interconnected rooms with a queen and two singles, a compact kitchenette and a second bathroom — built for a long school-holiday weekend.',
    amenities: ['Sleeps 4', 'Kitchenette', 'Two bathrooms', 'Pool view', 'Complimentary children breakfast'],
  },
  {
    slug: 'accessible-room',
    name: 'Accessible Room',
    tier: 'Classic',
    count: 4,
    from: 'USD 135',
    size: '32 m²',
    view: 'Ground-floor courtyard',
    image: U('1578898887932-dce23a595ad4', 1200),
    imageFallback: U('1631049307264-da0ec9d70304', 1200),
    blurb:
      'Thoughtfully designed with lowered fittings, a wheel-in shower and a wider doorway — ground-level access to the restaurants and HICC foyer.',
    amenities: ['Wheel-in shower', 'Lowered fittings', 'Widened doorway', 'Ground-floor access', 'Emergency pull cords'],
  },
];

/* ---------- DINING ---------- */
export const dining = [
  {
    slug: 'harvest-garden',
    name: 'Harvest Garden',
    tagline: 'An African-themed buffet beside the pool garden.',
    hours: '06:30 – 10:30 · 12:30 – 15:00 · 18:30 – 22:30',
    cuisine: 'Pan-African buffet · International carvery',
    dressCode: 'Smart casual',
    seats: 240,
    image: U('1414235077428-338989a2e8c0', 1200),
    description:
      "The Rainbow's flagship all-day dining room, opening onto the pool garden through a wall of arched doors. Harvest Garden plates the continent: oxtail stew from the Eastern Highlands, Yassa chicken from Senegal, coconut-tamarind prawns from the Swahili Coast. Breakfast is a 60-metre buffet. Sunday brunch with live jazz.",
    highlight: 'Sunday Jazz Brunch · 11:30 – 15:00',
  },
  {
    slug: 'kombahari',
    name: 'Kombahari',
    tagline: 'Live-fire Afro-Asian fusion.',
    hours: '18:30 – 23:00 (Tue – Sun)',
    cuisine: 'Afro-Asian fusion · Live cooking stations',
    dressCode: 'Smart elegant',
    seats: 90,
    image: U('1552566626-52f8b828add9', 1200),
    imageFallback: U('1517248135467-4c7edcad34c4', 1200),
    description:
      "Named for the collision of Kombe and Harare, this dim-lit room pairs a teppanyaki counter with a Mopane-wood smoker. The chef's table menu moves nightly — think biltong-dusted tuna, sadza croquettes, peri-peri duck dumplings. A bar stocked with Zimbabwean gin and single-estate sake.",
    highlight: "Chef's table — five courses, paired.",
  },
  {
    slug: 'la-patisserie',
    name: 'La Patisserie',
    tagline: 'Lobby coffee, pastry and light lunch.',
    hours: '06:00 – 21:00 daily',
    cuisine: 'Patisserie · Coffee · Light plates',
    dressCode: 'Relaxed',
    seats: 48,
    image: U('1554118811-1e0d58224f24', 1200),
    description:
      'A marble counter in the east lobby where diplomats read their papers and delegates slip between sessions. Hand-rolled croissants, a daily soup, and our own roast Nyanga espresso. A quiet second office for the whole of 1 Pennefather Avenue.',
    highlight: 'Try the Nyanga espresso flight.',
  },
  {
    slug: 'tipperarys',
    name: "Tipperary's Sports Lounge",
    tagline: 'Irish-style sports bar with a long terrace.',
    hours: '12:00 – late · daily',
    cuisine: 'Pub fare · Craft beer · Cocktails',
    dressCode: 'Smart casual',
    seats: 110,
    image: U('1572116469696-31de0f17cc34', 1200),
    imageFallback: U('1552566626-52f8b828add9', 1200),
    description:
      "The hotel's social engine room. Six big screens for the weekend Test, a wood-fired pizza oven and the city's widest draught line-up. The long terrace catches the last light over the Parliament gardens — our favourite place to finish a conference day.",
    highlight: 'Six screens · Match-day specials.',
  },
];

/* ---------- CONFERENCES / HICC ---------- */
export const conferences = {
  intro:
    "The Harare International Conference Centre is more than a venue — it is where the capital gathers. 4,500 seats under one roof, the largest fitted-seat amphitheatre on the African continent, and 2,000 parking bays that make arrival easy. The HICC has welcomed SADC heads of state, the World Economic Forum on Africa, three Miss World Africa editions and the Independence Day Gala for almost four decades.",
  stats: [
    { label: 'Total capacity', value: '4,500' },
    { label: 'Fitted-seat amphitheatre', value: "Africa's largest" },
    { label: 'Dedicated parking', value: '2,000+ bays' },
    { label: 'Event rooms', value: '12 spaces' },
  ],
  halls: [
    {
      slug: 'main-auditorium',
      name: 'Main Auditorium',
      capacity: 4500,
      setup: 'Theatre · Amphitheatre',
      area: '3,200 m²',
      image: U('1519167758481-83f550bb49b3', 1200),
      imageFallback: U('1540575467063-178a50c2df87', 1200),
      description:
        "Africa's largest fitted-seat amphitheatre, famed for acoustics engineered originally for the Non-Aligned Movement summit. Ring-balcony seating, 12-metre stage depth, simultaneous interpretation in six languages.",
      features: ['4,500 fitted seats', '6-language interpretation', '12m stage depth', 'Broadcast-grade audio'],
    },
    {
      slug: 'jacaranda-hall',
      name: 'Jacaranda 1, 2 & 3',
      capacity: 1000,
      setup: 'Cinema · Combined or divided',
      area: '1,100 m²',
      image: U('1540575467063-178a50c2df87', 1200),
      imageFallback: U('1519167758481-83f550bb49b3', 1200),
      description:
        'Three contiguous halls separated by retractable soundproofed walls. Configure as one gala ballroom for 1,000 guests or three parallel plenaries of 330. A purple-and-gold ceiling inspired by the city in October bloom.',
      features: ['3 divisible rooms', 'Soundproof walls', 'Gala floor for 1,000', 'Crystal chandeliers'],
    },
    {
      slug: 'committee-room-5',
      name: 'Committee Room 5',
      capacity: 300,
      setup: 'Classroom · U-shape',
      area: '280 m²',
      image: U('1511578314322-379afb476865', 1200),
      imageFallback: U('1517502884422-41eaead166d4', 1200),
      description:
        'The largest of our eight committee rooms. Built for day-long workshops, board retreats and panel roundtables — with daylight on two sides and an adjoining coffee-break foyer.',
      features: ['Daylight windows', 'U-shape up to 120', 'Dedicated break foyer', 'Dual-screen projection'],
    },
    {
      slug: 'mezzanine-foyer',
      name: 'Mezzanine Foyer',
      capacity: 2000,
      setup: 'Cocktail · Exhibition',
      area: '1,800 m²',
      image: U('1517248135467-4c7edcad34c4', 1200),
      imageFallback: U('1414235077428-338989a2e8c0', 1200),
      description:
        'A cathedral-like space wrapping the upper ring of the auditorium. Used for exhibition launches, cocktail banquets and the HICC New Year Ball. A 14-metre central skylight pours daylight into every corner.',
      features: ['2,000 standing', '14m central skylight', 'Exhibition circuit boards', 'Grand double staircase'],
    },
    {
      slug: 'boardroom',
      name: 'Executive Boardroom',
      capacity: 20,
      setup: 'Boardroom',
      area: '48 m²',
      image: U('1431540015161-0bf868a2d407', 1200),
      imageFallback: U('1497366216548-37526070297c', 1200),
      description:
        "A single teak table for twenty, beneath a muted navy ceiling. Used regularly by the Reserve Bank, law firms of Samora Machel Avenue and visiting investor delegations.",
      features: ['Seats 20', 'Teak table', 'Video-conferencing suite', 'Private entrance'],
    },
    {
      slug: 'meeting-rooms',
      name: 'Syndicate Rooms',
      capacity: 50,
      setup: 'Classroom · Boardroom',
      area: '60 m²',
      image: U('1517502884422-41eaead166d4', 1200),
      imageFallback: U('1431540015161-0bf868a2d407', 1200),
      description:
        'Eight identical syndicate rooms, each with natural light, for conference break-outs of 20 to 50. Configure boardroom, classroom or cocktail. Coffee delivered on the hour.',
      features: ['8 identical rooms', 'Natural daylight', 'Stacking chairs', 'Hourly refreshment service'],
    },
  ],
  packages: [
    { name: 'Half-day Delegate', from: 'USD 58 / pax', includes: 'Arrival coffee · mid-morning break · plated lunch · all-day Wi-Fi' },
    { name: 'Full-day Delegate', from: 'USD 82 / pax', includes: 'Two coffee breaks · buffet lunch · afternoon tea · notepads · Wi-Fi' },
    { name: 'Residential 24-hr', from: 'USD 265 / pax', includes: 'Overnight room · three meals · two breaks · arrival canapés' },
    { name: 'Gala Banquet', from: 'USD 145 / pax', includes: 'Three-course plated dinner · house wine · stage · DJ' },
  ],
};

/* ---------- FEATURES / AMENITIES ---------- */
export const amenities = [
  {
    icon: 'ForkKnife',
    title: 'Three Signature Restaurants',
    blurb: 'Harvest Garden, Kombahari and Tipperary\'s — 500 covers, three cuisines, one courtyard.',
  },
  {
    icon: 'Waves',
    title: 'Outdoor Swimming Pool',
    blurb: 'A heated 25-metre pool ringed by loungers and a pool-deck bar; open 06:00 to 21:00.',
  },
  {
    icon: 'FlowerLotus',
    title: 'Prasar Spa',
    blurb: 'Eight treatment rooms from our on-site spa — Swedish, deep-tissue, hot stone and rasul.',
  },
  {
    icon: 'Car',
    title: '2,000 Parking Bays',
    blurb: 'The capital\'s largest on-site car park — covered, valet available, EV charging coming 2026.',
  },
  {
    icon: 'Barbell',
    title: 'Fitness Centre',
    blurb: 'A 24-hour gym with Technogym equipment, daily yoga at 06:30 and a dedicated stretching studio.',
  },
  {
    icon: 'AirplaneTakeoff',
    title: 'Airport Transfers',
    blurb: 'Fifteen minutes to Robert Gabriel Mugabe International — chauffeured fleet on call 24/7.',
  },
  {
    icon: 'WifiHigh',
    title: 'Fibre Wi-Fi Everywhere',
    blurb: 'Complimentary 200 Mbps across all 293 rooms, the HICC floors and public areas.',
  },
  {
    icon: 'ConciergeBell',
    title: '24-hour Concierge',
    blurb: 'A team that books dinners, arranges game drives to Mana Pools, and gets the tickets you need.',
  },
];

/* ---------- REVIEWS ---------- */
export const reviews = [
  {
    name: 'Chipo Muzenda',
    source: 'Google',
    rating: 5,
    date: '2 weeks ago',
    body: "Hosted our wedding rehearsal in Jacaranda 2 — the events team moved a 240-seat floorplan three times without a sigh. Harvest Garden did a spit-roast that my uncles are still talking about. This is still Harare's most serious hotel.",
  },
  {
    name: 'Daniel Okonkwo',
    source: 'Booking.com',
    rating: 5,
    date: 'Mar 2026',
    body: "Flew in from Lagos for the Africa Energy Summit. The HICC auditorium is genuinely world-class — interpretation booths on every language I needed, 15-minute airport transfer, and a room on the 21st floor with a view that makes you want to buy property in Zimbabwe.",
  },
  {
    name: 'Ruvimbo Chikeya',
    source: 'Google',
    rating: 4,
    date: '1 month ago',
    body: "Sunday brunch at Harvest Garden with my mother and the kids. Live band, pool-side seating, the kids chased the peacocks, the buffet kept going. A real city-in-a-building feeling. Rooms are a touch older than newer Harare hotels but service more than makes up for it.",
  },
  {
    name: 'Mercy Takawira, Corporate Events',
    source: 'Corporate',
    rating: 5,
    date: 'Feb 2026',
    body: "We've run the ZimTrade Investor Forum here for six years running. Tapiwa and the HICC team know every delegate by the second day. Parking for 600 vehicles without a murmur. This is why international delegations still choose Rainbow Towers first.",
  },
  {
    name: 'Iain MacGregor',
    source: 'TripAdvisor',
    rating: 4,
    date: 'Jan 2026',
    body: "Tipperary's is a proper, proper sports bar — watched the Currie Cup final on six screens with a plate of chakalaka wings and an ice-cold Zambezi. Swam in the pool at 6am, the staff brought me a towel and an espresso. Old-school hospitality, polished to a shine.",
  },
];

/* ---------- EVENTS ---------- */
export const events = [
  {
    title: 'ZITF Investor Forum',
    date: '18 May 2026',
    venue: 'Main Auditorium',
    image: U('1540575467063-178a50c2df87', 900),
    imageFallback: U('1519167758481-83f550bb49b3', 900),
    type: 'Conference',
  },
  {
    title: 'HICC New Year Ball',
    date: '31 Dec 2026',
    venue: 'Mezzanine Foyer',
    image: U('1519671482749-fd09be7ccebf', 900),
    type: 'Gala',
  },
  {
    title: 'Harvest Garden Wine Dinner',
    date: 'Last Friday, monthly',
    venue: 'Harvest Garden',
    image: U('1414235077428-338989a2e8c0', 900),
    type: 'Dining',
  },
  {
    title: 'Miss World Zimbabwe',
    date: '14 Aug 2026',
    venue: 'Jacaranda Grand',
    image: U('1540575467063-178a50c2df87', 900),
    imageFallback: U('1519167758481-83f550bb49b3', 900),
    type: 'Pageant',
  },
];

/* ---------- GALLERY ---------- */
export const gallery = [
  { src: U('1621293954908-907159247fc8', 1200), cat: 'Exterior', alt: 'Rainbow Towers at dusk' },
  { src: U('1590490360182-c33d57733427', 1200), cat: 'Lobby', alt: 'Grand lobby' },
  { src: U('1566665797739-1674de7a421a', 1200), cat: 'Rooms', alt: 'Luxury room' },
  { src: U('1567016376408-0226e4d0c1ea', 1200), cat: 'Rooms', alt: 'Suite living area' },
  { src: U('1535827841776-24afc1e255ac', 1200), cat: 'Pool', alt: 'Pool garden' },
  { src: U('1455587734955-081b22074882', 1200), cat: 'Exterior', alt: 'Hotel exterior' },
  { src: U('1591088398332-8a7791972843', 1200), cat: 'Rooms', alt: 'Diplomatic suite' },
  { src: U('1519741497674-611481863552', 1200), cat: 'Conferences', alt: 'Wedding setup' },
  { src: U('1414235077428-338989a2e8c0', 1200), cat: 'Dining', alt: 'Harvest Garden' },
  { src: U('1554118811-1e0d58224f24', 1200), cat: 'Dining', alt: 'Patisserie' },
  { src: U('1517248135467-4c7edcad34c4', 1200), cat: 'Conferences', alt: 'Cocktail reception' },
  { src: U('1600891964092-4316c288032e', 1200), cat: 'Dining', alt: 'Fine dining plate' },
  { src: U('1540555700478-4be289fbecef', 1200), cat: 'Spa', alt: 'Spa treatment room' },
  { src: U('1467003909585-2f8a72700288', 1200), cat: 'Conferences', alt: 'Gala dinner' },
  { src: U('1464366400600-7168b8af9bc3', 1200), cat: 'Conferences', alt: 'Banquet' },
  { src: U('1610641818989-c2051b5e2cfd', 1200), cat: 'Pool', alt: 'Pool loungers' },
  { src: U('1540575467063-178a50c2df87', 1200), cat: 'Conferences', alt: 'Jacaranda hall' },
  { src: U('1510812431401-41d2bd2722f3', 1200), cat: 'Dining', alt: 'Wine dinner' },
  { src: U('1514933651103-005eec06c04b', 1200), cat: 'Dining', alt: 'Cocktail bar' },
  { src: U('1570172619644-dfd03ed5d881', 1200), cat: 'Spa', alt: 'Spa facial' },
];

export const galleryCategories = [
  'All',
  'Exterior',
  'Lobby',
  'Rooms',
  'Dining',
  'Conferences',
  'Pool',
  'Spa',
];

/* ---------- STORY ---------- */
export const story = {
  eyebrow: 'the house on pennefather',
  headline: 'Four decades, one address.',
  subhead: 'How a tower became the capital\'s meeting place.',
  paragraphs: [
    'Opened in the gold-rush optimism of 1986 as the venue for the eighth Non-Aligned Movement summit, the Rainbow Towers was conceived by government and built for the world. Its 104-metre profile remains one of the most photographed silhouettes on the Harare skyline.',
    'What was purpose-built for diplomats has since hosted heads of state, touring orchestras, the African Cup of Nations draws, Miss World Africa, and countless quiet weddings under the jacarandas in October.',
    'Today, under the stewardship of the Rainbow Tourism Group, the property has been re-imagined for the next generation — keeping the scale and the grace, adding the quiet technological fluency and warmth a modern traveller expects.',
  ],
  stats: [
    { value: '1986', label: 'Opened' },
    { value: '293', label: 'Rooms & suites' },
    { value: '104m', label: 'Tower height' },
    { value: '4,500', label: 'Auditorium seats' },
  ],
  image: U('1621293954908-907159247fc8', 1200),
  accentImage: U('1567016376408-0226e4d0c1ea', 900),
};

/* ---------- CTA ---------- */
export const homeCta = {
  eyebrow: 'plan your stay',
  headline: 'An address the capital keeps coming back to.',
  sub: 'Reserve a suite, book the ballroom, or simply join us for Sunday brunch under the jacarandas.',
  image: U('1519671482749-fd09be7ccebf', 1800),
};
