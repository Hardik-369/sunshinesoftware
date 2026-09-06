import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "How SunshineSoftware handles personal information — our privacy policy.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy">
      <p>
        This page sets out how {`SunshineSoftware`} collects, uses and
        protects personal information submitted through this website.
      </p>
      <p>
        The full policy is under final review and will be published here
        shortly. Until then, any questions about privacy can be directed to us
        through the contact form on the homepage.
      </p>
      <p>
        Information you submit through the contact form is used only to
        respond to your inquiry and is never sold to third parties.
      </p>
    </LegalShell>
  );
}