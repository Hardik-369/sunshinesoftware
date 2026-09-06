export const researchAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Science",
  "Blockchain",
  "Autonomous Systems",
  "EdTech",
  "IoT",
  "Data Science",
  "Software Systems",
  "Emerging Technology",
] as const;

export const researchCapabilities = [
  "Research Exploration",
  "Research Design",
  "Literature Review",
  "Technical Implementation",
  "Data Analysis",
  "Manuscript Support",
  "Publication Planning",
  "Revision Support",
  "Collaborative Research",
] as const;

export const researchEthics =
  "SunshineSoftware supports researchers with training, technical implementation, editorial and methodological assistance. Researchers remain responsible for their work, authorship and academic integrity.";

export type PatentService = {
  id: string;
  name: string;
  description: string;
  items: string[];
};

/**
 * Patent services are assistance/support — filing help, documentation and
 * publication support. Outcomes (grant, acceptance) are never guaranteed.
 */
export const patentServices: PatentService[] = [
  {
    id: "patent-services",
    name: "Patent Services",
    description:
      "End-to-end assistance with the patent lifecycle — from documenting an invention to filing and publication support.",
    items: [
      "Patent Filing Support",
      "Patent Publication Support",
      "Invention Disclosure Assistance",
      "Technical Documentation Support",
    ],
  },
  {
    id: "international-patent-services",
    name: "International Patent Services",
    description:
      "Guidance for protecting inventions beyond India — international filing routes and foreign patent assistance.",
    items: [
      "International (PCT) Filing Assistance",
      "Foreign Filing Guidance",
      "International Publication Support",
      "Jurisdiction & Timeline Planning",
    ],
  },
];

export type ResearchProject = {
  id: string;
  title: string;
  category: string;
  /** Stage label — kept honest until verified publication data exists. */
  status: "Research Project" | "Prototype" | "Working Paper";
  description: string;
  tags: string[];
};

/**
 * Featured research items are labelled by stage (Working Paper / Prototype /
 * Research Project). Publication or indexing status is only ever listed here
 * once it can be verified — never fabricated.
 */
export const featuredResearch: ResearchProject[] = [
  {
    id: "vernacular-education",
    title: "AI-Powered Vernacular Education",
    category: "AI · EdTech",
    status: "Working Paper",
    description:
      "Exploring how language models can support learning in regional languages — a prototype learning interface with ongoing evaluation.",
    tags: ["AI", "NLP", "EdTech"],
  },
  {
    id: "multi-agent-coordination",
    title: "Decentralized Multi-Agent Coordination",
    category: "Distributed Systems",
    status: "Prototype",
    description:
      "A research prototype investigating how software agents coordinate tasks without a central controller.",
    tags: ["Agents", "Blockchain", "Systems"],
  },
  {
    id: "supply-chain-traceability",
    title: "Blockchain-Based Supply Chain Traceability",
    category: "Blockchain · IoT",
    status: "Prototype",
    description:
      "Feasibility study and prototype for tamper-evident traceability of goods across a supply chain.",
    tags: ["Blockchain", "IoT", "Traceability"],
  },
];