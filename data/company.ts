/**
 * Central, configurable company information.
 *
 * Empty strings are automatically hidden across the site (footer, contact
 * section, JSON-LD). Nothing here should ever be invented.
 */
export type CompanyConfig = {
  name: string;
  domain: string;
  url: string;
  /** Brand logo (PNG) served from /public. */
  logo: string;
  /** Natural pixel dimensions of the logo image (used for correct aspect ratio). */
  logoWidth: number;
  logoHeight: number;
  /** Wordmark text shown next to the logo. */
  wordmark: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  phoneSecondary?: string;
  /** Public Google Form used for inquiries and contact CTAs. */
  contactFormUrl: string;
  /** Same form with ?embedded=true for iframe embeds. */
  contactFormEmbedUrl: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  serviceArea: string;
  socials: { name: string; url: string }[];
  legal: { privacy: string; terms: string; disclaimer: string };
};

export const company: CompanyConfig = {
  name: "SunshineSoftware",
  domain: "sunshinesoftware.in",
  url: "https://sunshinesoftware.in/",
  logo: "/logo-v2.png",
  logoWidth: 1254,
  logoHeight: 1254,
  wordmark: "Sunshine Software",
  tagline: "Learn. Build. Research.",
  description:
    "SunshineSoftware provides practical technology education, student internships, software development services, research support and patent services.",

  // ── Contact & location ─────────────────────────────────────────────
  email: "sunshinesoftware.in@gmail.com",
  phone: "9881445045",
  phoneSecondary: "7387249271",
  contactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfBuR5FYMszjB4yBA310kiom08PJn2T6C_mDvPpq7QXlb95CQ/viewform",
  contactFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfBuR5FYMszjB4yBA310kiom08PJn2T6C_mDvPpq7QXlb95CQ/viewform?embedded=true",
  address: {
    streetAddress: "Near Chattrapati Shahu Academy, Visawa Park",
    addressLocality: "Satara",
    addressRegion: "Maharashtra",
    postalCode: "",
    addressCountry: "IN",
  },
  serviceArea: "", // e.g. "India · Remote"
  socials: [
    { name: "GitHub", url: "" },
    { name: "LinkedIn", url: "" },
    { name: "Instagram", url: "" },
    { name: "X", url: "" },
  ],

  legal: {
    privacy: "/privacy",
    terms: "/terms",
    disclaimer: "/disclaimer",
  },
};

export type NavLink = { id: string; label: string };

export const navLinks: NavLink[] = [
  { id: "learn", label: "Learn" },
  { id: "build", label: "Build" },
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export const footerGroups: {
  title: string;
  links: { label: string; href: string }[];
}[] = [
  {
    title: "Learn",
    links: [
      { label: "Internships", href: "#learn" },
      { label: "Courses", href: "#courses" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Development", href: "#build" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Research Areas", href: "#research" },
      { label: "Research Projects", href: "#research-projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Founder", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export const principles = [
  {
    title: "Build Real",
    text: "Practical technology and learning. We build what we teach, and teach what we build.",
  },
  {
    title: "Learn by Doing",
    text: "Projects are central. Skills stick when they are exercised on real work, not slides.",
  },
  {
    title: "Research with Integrity",
    text: "Create knowledge, not paperwork. Honest methods, honest claims, no shortcuts.",
  },
  {
    title: "Ship with Purpose",
    text: "Software should solve a problem, not just demonstrate technology.",
  },
] as const;