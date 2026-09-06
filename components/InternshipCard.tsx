import { Reveal } from "@/components/Reveal";

export function InternshipCard({
  name,
  description,
  index,
  delay = 0,
}: {
  name: string;
  description: string;
  index: number;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col border border-line bg-paper p-5 transition-colors duration-300 hover:border-ink sm:p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.16em] text-secondary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="size-1.5 rounded-full bg-sage opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <h4 className="mt-4 font-display text-[17px] font-bold tracking-tight">
          {name}
        </h4>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
          {description}
        </p>
      </article>
    </Reveal>
  );
}