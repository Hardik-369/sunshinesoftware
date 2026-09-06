import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/data/faqs";
import { company } from "@/data/company";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="11"
          eyebrow="FAQ"
          title="Questions, answered."
          description="Straight answers about internships, courses, development and research support."
        />
        <div className="mt-12 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-secondary">
          Something else on your mind? Ask us directly through the{" "}
          <a
            href={company.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 transition-colors hover:text-terracotta"
          >
            contact form
          </a>
          .
        </p>
      </Container>
    </section>
  );
}