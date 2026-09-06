import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

const pillarLinks = [
  {
    index: "01",
    label: "Learn",
    sub: "Internships & courses",
    href: "#learn",
  },
  {
    index: "02",
    label: "Build",
    sub: "Development services",
    href: "#build",
  },
  {
    index: "03",
    label: "Research",
    sub: "Research & patents",
    href: "#research",
  },
];

export function Cta() {
  const addressParts = [
    company.address.streetAddress,
    company.address.addressLocality,
    company.address.addressRegion,
    company.address.postalCode,
  ].filter(Boolean);
  const addressLine = [
    ...addressParts,
    company.address.addressCountry ? company.address.addressCountry : "",
  ]
    .filter(Boolean)
    .join(", ");
  const telHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line bg-white">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="12"
          eyebrow="Start a conversation"
          title="Let's build what comes next."
          description="Whether you want to learn, build a product or explore a research or patent problem — start with the idea. A clear conversation, an honest scoping, no pressure."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-8">
          {/* Pillar links + primary actions */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
                {pillarLinks.map((pillar) => (
                  <a
                    key={pillar.index}
                    href={pillar.href}
                    className="group flex flex-col justify-between gap-12 bg-white p-6 transition-colors duration-300 hover:bg-paper"
                  >
                    <span className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-secondary">
                      {pillar.index}
                      <ArrowRight
                        className="size-4 text-secondary transition-all duration-200 group-hover:translate-x-1 group-hover:text-terracotta"
                        aria-hidden
                      />
                    </span>
                    <span>
                      <span className="block font-display text-xl font-bold tracking-tight">
                        {pillar.label}
                      </span>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {pillar.sub}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-wrap gap-3.5">
                <Button href={company.contactFormUrl} variant="primary" external>
                  Start a Project
                </Button>
                <Button href="#learn" variant="outline">
                  Explore Internships
                </Button>
                <Button href="#research" variant="ghost">
                  Explore Research
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Dark contact card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1} y={24} className="h-full">
              <div className="flex h-full flex-col bg-ink p-7 text-paper sm:p-9">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
                  Direct contact
                </p>

                <ul className="mt-8 space-y-6">
                  {company.email && (
                    <li className="flex items-start gap-4">
                      <span className="grid size-9 shrink-0 place-items-center border border-white/15 text-sage">
                        <Mail className="size-4" aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                          Email
                        </p>
                        <a
                          href={`mailto:${company.email}`}
                          className="mt-1 block text-sm leading-snug text-paper transition-colors duration-200 hover:text-sage"
                        >
                          {company.email}
                        </a>
                      </div>
                    </li>
                  )}

                  {company.phone && (
                    <li className="flex items-start gap-4">
                      <span className="grid size-9 shrink-0 place-items-center border border-white/15 text-sage">
                        <Phone className="size-4" aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                          Phone
                        </p>
                        <a
                          href={telHref(company.phone)}
                          className="mt-1 block text-sm text-paper transition-colors duration-200 hover:text-sage"
                        >
                          {company.phone}
                        </a>
                        {company.phoneSecondary && (
                          <a
                            href={telHref(company.phoneSecondary)}
                            className="mt-0.5 block text-sm text-paper transition-colors duration-200 hover:text-sage"
                          >
                            {company.phoneSecondary}
                          </a>
                        )}
                      </div>
                    </li>
                  )}

                  {addressLine && (
                    <li className="flex items-start gap-4">
                      <span className="grid size-9 shrink-0 place-items-center border border-white/15 text-sage">
                        <MapPin className="size-4" aria-hidden />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
                          Address
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-paper/80">
                          {addressLine}
                        </p>
                      </div>
                    </li>
                  )}
                </ul>

                <a
                  href={company.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center justify-between gap-4 border-t border-white/15 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors duration-200 hover:text-sage"
                >
                  Open the contact form
                  <ArrowRight
                    className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}