import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { HeroDiagram } from "@/components/HeroDiagram";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <Container className="grid min-h-[92svh] items-center gap-14 pb-16 pt-28 lg:grid-cols-12 lg:gap-8 lg:pt-32">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="size-1.5 bg-terracotta" aria-hidden />
              SunshineSoftware · Technology · Education · Research
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-7 font-display text-[17vw] font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[92px]">
              Learn.
              <br />
              Build.
              <br />
              <span className="text-terracotta">Research.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-xl font-medium leading-snug sm:text-2xl">
              One technology ecosystem for students, businesses and researchers.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
              SunshineSoftware helps students gain practical experience,
              organizations build digital products, and researchers turn ideas
              into meaningful technical work.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button href="#pillars" variant="primary" size="lg">
                Explore SunshineSoftware
              </Button>
              <Button
                href={company.contactFormUrl}
                variant="outline"
                size="lg"
                external
              >
                Start a Project
              </Button>
              <Button href="#learn" variant="ghost" size="lg">
                Explore Internships
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
              Internships &nbsp;·&nbsp; Courses &nbsp;·&nbsp; Development
              &nbsp;·&nbsp; Research
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15} y={30}>
            <HeroDiagram />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}