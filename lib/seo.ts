import type { Metadata } from "next";
import { company } from "@/data/company";
import type { Course } from "@/data/courses";
import type { Service } from "@/data/services";

/**
 * Scalable SEO architecture.
 *
 * generatePageMetadata() is the shared base. Route-specific helpers
 * (generateServiceMetadata, generateCourseMetadata, generateResearchMetadata)
 * are ready for the future routes — /development, /courses, /research,
 * /internships, /projects, /blog — and produce canonical URLs against those
 * paths once the routes exist.
 */

export const defaultKeywords = [
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
  "SunshineSoftware",
];

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return new URL(path, company.url).toString();
}

export const siteTitle = `${company.name} — ${company.tagline}`;

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noindex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  path = "/",
  keywords,
  noindex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const image = {
    url: absoluteUrl("/og.svg"),
    width: 1200,
    height: 630,
    alt: `${company.name} — ${company.tagline}`,
  };
  return {
    title,
    description,
    keywords: Array.from(new Set([...(keywords ?? defaultKeywords), company.name])),
    alternates: { canonical: url },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: company.name,
      locale: "en_IN",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** Metadata for a future /development service page. */
export function generateServiceMetadata(service: Service): Metadata {
  return generatePageMetadata({
    title: `${service.name} — SunshineSoftware`,
    description: service.description,
    path: "/development",
  });
}

/** Metadata for a future /courses/[id] page. */
export function generateCourseMetadata(course: Course): Metadata {
  return generatePageMetadata({
    title: `${course.title} — SunshineSoftware Courses`,
    description: course.description,
    path: `/courses/${course.id}`,
  });
}

/** Metadata for a future /research page. */
export function generateResearchMetadata(description: string): Metadata {
  return generatePageMetadata({
    title: "Research — SunshineSoftware",
    description,
    path: "/research",
  });
}

/* ────────────────────────────────────────────────────────────────────
 * JSON-LD structured data (valid, factual, configurable)
 * ──────────────────────────────────────────────────────────────────── */

type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  const org: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    logo: absoluteUrl(company.logo),
    description: company.description,
  };
  if (company.email) org.email = company.email;
  if (company.phone) org.telephone = company.phone;
  const addr = company.address;
  if (
    addr.streetAddress ||
    addr.addressLocality ||
    addr.addressRegion ||
    addr.postalCode ||
    addr.addressCountry
  ) {
    org.address = {
      "@type": "PostalAddress",
      ...(addr.streetAddress ? { streetAddress: addr.streetAddress } : {}),
      ...(addr.addressLocality
        ? { addressLocality: addr.addressLocality }
        : {}),
      ...(addr.addressRegion ? { addressRegion: addr.addressRegion } : {}),
      ...(addr.postalCode ? { postalCode: addr.postalCode } : {}),
      ...(addr.addressCountry ? { addressCountry: addr.addressCountry } : {}),
    };
  }
  if (company.serviceArea) org.areaServed = company.serviceArea;
  const sameAs = company.socials.map((s) => s.url).filter(Boolean);
  if (sameAs.length > 0) org.sameAs = sameAs;
  return org;
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: company.url,
    description: company.description,
  };
}

export function webpageJsonLd(input: {
  title: string;
  description: string;
  path?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.title,
    description: input.description,
    url: absoluteUrl(input.path ?? "/"),
    isPartOf: { "@type": "WebSite", name: company.name, url: company.url },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  faqs: readonly { question: string; answer: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function courseJsonLd(course: Course): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: { "@type": "Organization", name: company.name, sameAs: company.url },
    educationalLevel: course.level,
    ...(course.mode
      ? {
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: course.mode,
            courseWorkload: course.duration,
          },
        }
      : {}),
  };
}

export function serviceJsonLd(service: Service): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    provider: { "@type": "Organization", name: company.name, url: company.url },
  };
}