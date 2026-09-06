import { cn } from "@/lib/utils";

export function Badge({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.14em]",
        dark
          ? "border-white/20 text-paper/70"
          : "border-line text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}