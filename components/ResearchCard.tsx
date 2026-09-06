import { Reveal } from "@/components/Reveal";
import type { ResearchProject } from "@/data/research";

export function ResearchCard({
  project,
  delay = 0,
}: {
  project: ResearchProject;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col border border-white/15 p-7 transition-colors duration-300 hover:border-white/40">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-terracotta">
            {project.category}
          </span>
          <span className="border border-white/25 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/70">
            {project.status}
          </span>
        </div>
        <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-paper/65">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}