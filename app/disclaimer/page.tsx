import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = generatePageMetadata({
  title: "Disclaimer",
  description:
    "Disclaimer for SunshineSoftware services, including research support.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalShell title="Disclaimer">
      <p>
        {`SunshineSoftware`} provides technology education, development services
        and research support. Results depend on the work itself, the context
        it happens in, and — for research — the review process.
      </p>
      <p>
        We never guarantee publication, indexing, acceptance, grants or
        patents for research work. Research support is training and technical,
        methodological and editorial assistance; authorship and academic
        integrity remain with the researcher.
      </p>
      <p>
        Information on this website is provided in good faith. Specific
        commitments are only those made in a written agreement with you.
      </p>
    </LegalShell>
  );
}