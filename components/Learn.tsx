import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { InternshipCard } from "@/components/InternshipCard";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";
import {
  internshipCategories,
  internshipJourney,
  internshipFeatures,
  internshipQuote,
} from "@/data/internships";

export function Learn() {
  return (
    <section id="learn" className="scroll-mt-20 bg-white">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="02"
          eyebrow="Learn"
          title="Technology is learned by building."
          description="Classrooms introduce ideas; projects make them stick. Every learner here works on real work — with mentorship, code review and documentation from day one."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Internships intro (sticky on desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
                  <span className="text-terracotta">02.1</span>
                  <span className="h-px w-6 bg-current opacity-40" aria-hidden />
                  Internships
                </p>
                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight lg:text-[34px] lg:leading-[1.1]">
                  {internshipQuote}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Project-based internships across eight domains — real
                  projects, small teams, mentors who review your code, and a
                  portfolio you can show.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {internshipFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-[13px] font-medium">
                      <Check className="size-3.5 shrink-0 text-sage" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-9">
                  <Button href={company.contactFormUrl} variant="primary" external>
                    Apply for an Internship
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Internship categories */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {internshipCategories.map((category, i) => (
                <InternshipCard
                  key={category.id}
                  name={category.name}
                  description={category.description}
                  index={i}
                  delay={(i % 2) * 0.06}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <JourneyTimeline steps={internshipJourney} />
        </div>
      </Container>
    </section>
  );
}