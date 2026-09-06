import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="08"
          eyebrow="Projects"
          title="Things we've built."
          description="Case studies, repositories and live demos are documented here as they ship — with code and links where available."
        />

        {projects.length === 0 ? (
          <Reveal className="mt-14">
            <div className="grid gap-8 border border-line bg-white p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
                  Project index
                </p>
                <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-[28px]">
                  Documented as we ship.
                </p>
              </div>
              <div className="flex flex-col items-start gap-6 lg:items-end lg:justify-center">
                <p className="max-w-sm text-sm leading-relaxed text-muted">
                  We publish project write-ups, repositories and live demos on
                  this page as work completes. If you are evaluating us, ask
                  directly for recent work and references.
                </p>
                <a
                  href={company.contactFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
                >
                  Ask about recent work
                  <ArrowRight
                    className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col border border-line bg-white p-6 transition-colors duration-300 hover:bg-surface sm:p-7"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-6">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="ml-auto flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink underline underline-offset-4 hover:text-terracotta"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink underline underline-offset-4 hover:text-terracotta"
                      >
                        Live demo
                      </a>
                    )}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}