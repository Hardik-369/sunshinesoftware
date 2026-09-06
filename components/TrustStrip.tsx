import { Container } from "@/components/Container";

const items = [
  "Project-based internships",
  "Production software delivery",
  "Research & innovation support",
  "Students · Businesses · Researchers",
];

export function TrustStrip() {
  return (
    <section aria-label="Positioning" className="border-y border-line bg-white">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 lg:justify-between">
          {items.map((item) => (
            <li
              key={item}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}