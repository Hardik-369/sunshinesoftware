import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Pillars } from "@/components/Pillars";
import { Learn } from "@/components/Learn";
import { Courses } from "@/components/Courses";
import { Build } from "@/components/Build";
import { Process } from "@/components/Process";
import { Research } from "@/components/Research";
import { FeaturedResearch } from "@/components/FeaturedResearch";
import { Projects } from "@/components/Projects";
import { Why } from "@/components/Why";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import {
  courseJsonLd,
  faqJsonLd,
  generatePageMetadata,
  serviceJsonLd,
  webpageJsonLd,
} from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { courses } from "@/data/courses";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = generatePageMetadata({
  title: `${company.name} — ${company.tagline}`,
  description: company.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <TrustStrip />
        <Pillars />
        <Learn />
        <Courses />
        <Build />
        <Process />
        <Research />
        <FeaturedResearch />
        <Projects />
        <Why />
        <Team />
        <Faq />
        <Cta />
      </main>
      <JsonLd
        data={[
          webpageJsonLd({
            title: `${company.name} — ${company.tagline}`,
            description: company.description,
            path: "/",
          }),
          faqJsonLd(faqs),
          ...courses.map(courseJsonLd),
          ...services.map(serviceJsonLd),
        ]}
      />
    </>
  );
}