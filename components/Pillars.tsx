import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { PillarPanel } from "@/components/PillarPanel";

const pillars = [
  {
    index: "01",
    label: "Learn",
    title: "Student education",
    description:
      "Project-based internships and technical courses that give students real experience — from first commit to a shipped, documented project.",
    chain: ["Learn", "Build", "Experience", "Demonstrate"],
    href: "#learn",
    cta: "Explore Learn",
  },
  {
    index: "02",
    label: "Build",
    title: "Development services",
    description:
      "Web, mobile, AI and IoT products engineered for organizations — from idea to deployed, tested software that solves a real problem.",
    chain: ["Idea", "Design", "Engineering", "Test", "Deploy"],
    href: "#build",
    cta: "Explore Build",
  },
  {
    index: "03",
    label: "Research",
    title: "Research & innovation",
    description:
      "Support for exploring problems, designing studies, building experiments and communicating results — with integrity at every step.",
    chain: ["Explore", "Design", "Implement", "Analyse", "Communicate"],
    href: "#research",
    cta: "Explore Research",
  },
];

export function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 bg-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="01"
          eyebrow="What we do"
          title="One ecosystem. Three pillars."
          description="Students learn by building, organizations ship software, and researchers pursue questions with real support — all under one roof."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarPanel key={pillar.index} {...pillar} delay={i * 0.08} />
          ))}
        </div>
      </Container>
    </section>
  );
}