import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="grid min-h-[70vh] place-items-center bg-paper px-6 pb-16 pt-32"
    >
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
          Page not found.
        </h1>
        <p className="mt-3 text-muted">
          The page you&apos;re looking for doesn&apos;t exist — but the
          homepage does.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink underline underline-offset-4 transition-colors hover:text-terracotta"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}