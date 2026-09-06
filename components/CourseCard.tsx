import { ArrowUpRight } from "lucide-react";
import type { Course } from "@/data/courses";
import { Reveal } from "@/components/Reveal";

export function CourseCard({ course, delay = 0 }: { course: Course; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col border border-line bg-white p-6 transition-colors duration-300 hover:border-ink sm:p-7">
        <ArrowUpRight
          className="absolute right-6 top-6 size-4 text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">
          <span>{course.level}</span>
          <span className="text-line" aria-hidden>·</span>
          <span>{course.duration}</span>
          <span className="text-line" aria-hidden>·</span>
          <span>{course.mode}</span>
        </div>
        <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
          {course.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">
          {course.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {course.technology.map((tech) => (
            <span
              key={tech}
              className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-line pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">
            You build
          </p>
          <p className="mt-1.5 text-sm font-medium">{course.build}</p>
        </div>
      </article>
    </Reveal>
  );
}