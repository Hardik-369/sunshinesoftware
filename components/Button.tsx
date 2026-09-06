import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-[#262626]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-terracotta underline-offset-4 hover:underline",
  light: "bg-paper text-ink hover:bg-white",
  "outline-light":
    "border border-white/35 text-paper hover:border-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2",
  md: "px-5 py-3",
  lg: "px-6 py-3.5",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow = true,
  external = false,
  children,
  className,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  /** Render as an external link (opens in a new tab). */
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 transition-colors duration-200",
    variant === "ghost"
      ? cn("text-sm font-medium", sizes[size], variants[variant])
      : cn(
          "font-mono text-[11px] uppercase tracking-[0.16em]",
          sizes[size],
          variants[variant],
        ),
    className,
  );
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}