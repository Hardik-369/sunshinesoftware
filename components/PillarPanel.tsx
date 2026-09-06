import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function PillarPanel({
  index,
  label,
  title,
  description,
  chain,
  href,
  cta,
  delay = 0,
}: {
  index: string;
  label: string;
  title: string;
  description: string;
  chain: string[];
  href: string;
  cta: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col border border-line bg-white p-7 transition-colors duration-300 hover:bg-surface sm:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.18em] text-terracotta">
            {index}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary transition-colors duration-300 group-hover:text-ink">
            {label}
          </span>
        </div>
        <h3 className="mt-8 font-display text-2xl font-bold tracking-tight sm:text-[26px]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <div className="mt-8 border-t border-line pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">
            {chain.join("  →  ")}
          </p>
        </div>
        <Link
          href={href}
          className="group/link mt-auto inline-flex items-center gap-2 pt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
        >
          {cta}
          <ArrowRight
            className="size-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden
          />
        </Link>
      </article>
    </Reveal>
  );
}