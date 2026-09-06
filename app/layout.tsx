import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { company } from "@/data/company";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s — ${company.name}`,
  },
  description: company.description,
  keywords: [
    "software development company",
    "web development",
    "app development",
    "software development services",
    "student internships",
    "technology internships",
    "programming courses",
    "web development courses",
    "AI courses",
    "research paper support",
    "research implementation",
    "technology research",
    "AI research",
    "student research projects",
    "patent services",
    "patent filing services",
    "patent filing support",
    "patent publication support",
    "international patent services",
    "international patent assistance",
    "PCT filing assistance",
    company.name,
  ],
  authors: [{ name: company.name, url: company.url }],
  creator: company.name,
  publisher: company.name,
  formatDetection: { telephone: false },
  alternates: { canonical: company.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: company.url,
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    images: [
      {
        url: new URL("/og.svg", company.url).toString(),
        width: 1200,
        height: 630,
        alt: `${company.name} — ${company.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${company.tagline}`,
    description: company.description,
    images: [new URL("/og.svg", company.url).toString()],
  },
  icons: {
    icon: company.logo,
    apple: company.logo,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2.5 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.16em] focus:text-paper"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </body>
    </html>
  );
}