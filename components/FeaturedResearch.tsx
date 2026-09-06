import { Container } from "@/components/Container";
import { ResearchCard } from "@/components/ResearchCard";
import { featuredResearch } from "@/data/research";

export function FeaturedResearch() {
  return (
    <section
      id="research-projects"
      className="scroll-mt-20 border-t border-white/10 bg-ink text-paper"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/60">
              <span className="text-terracotta">07</span>
              <span className="h-px w-6 bg-current opacity-40" aria-hidden />
              Featured research
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
              Work in progress, labelled honestly.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredResearch.map((project, i) => (
            <ResearchCard key={project.id} project={project} delay={i * 0.08} />
          ))}
        </div>

        <p className="mt-8 max-w-2xl font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-paper/45">
          Items are labelled by stage. Publication and indexing status is only
          listed when it can be verified.
        </p>
      </Container>
    </section>
  );
}