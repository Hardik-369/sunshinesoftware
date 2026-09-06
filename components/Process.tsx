import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { processSteps } from "@/data/services";

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="05"
          eyebrow="Process"
          title="A process built for outcomes."
          description="Six phases, clearly scoped. You see progress at every step — not just at the end."
        />
        <div className="mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
      </Container>
    </section>
  );
}