import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { principles } from "@/data/company";

export function Why() {
  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="09"
          eyebrow="About"
          title="Technology without the theatre."
          description="We are engineers, educators and researchers who would rather build than pitch. No inflated claims — real projects, honest guidance, work that ships."
        />
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 0.06} className="h-full">
              <div className="h-full bg-white p-8 transition-colors duration-300 hover:bg-paper sm:p-10">
                <span className="font-mono text-[11px] tracking-[0.18em] text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}