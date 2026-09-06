import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import {
  researchAreas,
  researchCapabilities,
  researchEthics,
  patentServices,
} from "@/data/research";
import { company } from "@/data/company";

export function Research() {
  return (
    <section id="research" className="scroll-mt-20 bg-ink text-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          dark
          index="06"
          eyebrow="SunshineSoftware Research"
          title="Research what comes next."
          description="We support students, researchers and technical teams in exploring problems, building experiments and communicating meaningful results."
        />

        {/* Research areas — hairline grid */}
        <div className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
            Research areas
          </p>
          <ul className="mt-5 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {researchAreas.map((area, i) => (
              <li
                key={area}
                className="group flex flex-col gap-2 bg-ink p-5 transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                <span className="font-mono text-[10px] tracking-[0.16em] text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-paper/80 transition-colors duration-300 group-hover:text-paper">
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities + ethics */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
              Capabilities
            </p>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {researchCapabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 text-sm text-paper/80"
                >
                  <span className="grid size-4 shrink-0 place-items-center border border-sage/60">
                    <span className="size-1.5 bg-sage" aria-hidden />
                  </span>
                  {capability}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="border border-white/15 p-7 sm:p-8">
                <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
                  <ShieldCheck className="size-4" aria-hidden />
                  Research ethics
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/70">
                  {researchEthics}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Patent services */}
        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
              Patent services
            </p>
            <div className="mt-5 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
              {patentServices.map((service) => (
                <div key={service.id} className="bg-ink p-7 sm:p-8">
                  <h3 className="font-display text-xl font-bold tracking-tight text-paper">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-paper/80"
                      >
                        <span className="grid size-4 shrink-0 place-items-center border border-sage/60">
                          <span className="size-1.5 bg-sage" aria-hidden />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-paper/45">
              Patent support is assistance — outcomes such as grant or
              acceptance are never guaranteed.{" "}
              <a
                href={company.contactFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage underline underline-offset-4 transition-colors hover:text-paper"
              >
                Discuss a patent through the contact form
              </a>
              .
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}