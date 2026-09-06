export type Service = {
  id: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    description:
      "Marketing sites, dashboards and web applications built to production standard — responsive, accessible and fast.",
  },
  {
    id: "app-development",
    name: "App Development",
    description:
      "Mobile applications designed around how users actually work, built for the platforms they use.",
  },
  {
    id: "saas",
    name: "SaaS",
    description:
      "Multi-tenant products with clean architecture, reliable infrastructure and room to grow.",
  },
  {
    id: "ai-ml",
    name: "AI / ML",
    description:
      "Models, data pipelines and AI features integrated into real products — evaluated, not hyped.",
  },
  {
    id: "automation",
    name: "Automation",
    description:
      "Workflows and integrations that remove repetitive work and keep operations moving.",
  },
  {
    id: "backend",
    name: "Backend / APIs / Databases",
    description:
      "APIs, services and data layers engineered for correctness, security and scale.",
  },
  {
    id: "ui-ux",
    name: "UI / UX",
    description:
      "Clear, accessible interfaces — designed from the problem, not from a template.",
  },
  {
    id: "iot",
    name: "IoT & Hardware Integration",
    description:
      "Connected devices and hardware–software integration, from prototype to deployment.",
  },
  {
    id: "data",
    name: "Data Analysis & Visualization",
    description:
      "Analysis, modelling and visualization that turn raw data into decisions.",
  },
  {
    id: "prototyping",
    name: "Technical Prototyping",
    description:
      "Fast, honest evaluation of an idea — working prototypes before committing to a build.",
  },
];

export const processSteps = [
  {
    step: "Discover",
    description: "Understand the problem, users and constraints before anything is built.",
  },
  {
    step: "Define",
    description: "Scope, requirements and success criteria agreed in writing.",
  },
  {
    step: "Design",
    description: "Architecture, interfaces and data model reviewed early.",
  },
  {
    step: "Engineer",
    description: "Built in small, reviewable increments with regular demos.",
  },
  {
    step: "Test",
    description: "Automated and manual checks before anything ships.",
  },
  {
    step: "Deploy",
    description: "Released, monitored and iterated together.",
  },
] as const;