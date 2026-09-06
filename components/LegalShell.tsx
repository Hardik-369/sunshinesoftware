import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main" className="bg-paper pb-24 pt-32">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-terracotta">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <div className="mt-8 space-y-5 border-t border-line pt-8 text-[15px] leading-relaxed text-muted">
            {children}
          </div>
          <Link
            href="/"
            className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:text-terracotta"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}