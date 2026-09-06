import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className={cn("border-t pt-6", dark ? "border-white/15" : "border-line")}>
        {(index || eyebrow) && (
          <p
            className={cn(
              "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em]",
              dark ? "text-paper/60" : "text-secondary",
            )}
          >
            {index && <span className="text-terracotta">{index}</span>}
            {index && <span className="h-px w-6 bg-current opacity-40" aria-hidden />}
            {eyebrow}
          </p>
        )}
        <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:gap-12">
          <h2
            className={cn(
              "font-display text-3xl font-bold tracking-tight sm:text-4xl lg:col-span-7 lg:text-[44px] lg:leading-[1.08]",
              dark ? "text-paper" : "text-ink",
            )}
          >
            {title}
          </h2>
          {description && (
            <div
              className={cn(
                "max-w-xl text-base leading-relaxed lg:col-span-4 lg:col-start-9 lg:pt-1.5",
                dark ? "text-paper/70" : "text-muted",
              )}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}