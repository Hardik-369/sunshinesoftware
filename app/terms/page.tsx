import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use",
  description: "Terms of use for the SunshineSoftware website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use">
      <p>
        These terms govern your use of the {`SunshineSoftware`} website and the
        services described on it.
      </p>
      <p>
        The terms are under final review and will be published here shortly.
        Until then, specific service agreements — scope, deliverables,
        timelines and fees — are always confirmed in writing before any
        engagement begins.
      </p>
      <p>
        Content on this website is provided in good faith for general
        information; specific commitments are only those made in a written
        agreement with you.
      </p>
    </LegalShell>
  );
}