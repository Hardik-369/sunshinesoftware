export const internshipCategories = [
  {
    id: "web",
    name: "Web Development",
    description: "Frontend and backend work on real web applications.",
  },
  {
    id: "app",
    name: "App Development",
    description: "Mobile applications built for real users.",
  },
  {
    id: "full-stack",
    name: "Full-Stack",
    description: "End-to-end product work across the stack.",
  },
  {
    id: "ai-ml",
    name: "AI/ML",
    description: "Models, data pipelines and AI features.",
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    description: "Architecture, testing and clean code.",
  },
  {
    id: "iot",
    name: "IoT",
    description: "Connected devices and hardware–software integration.",
  },
  {
    id: "rnd",
    name: "R&D",
    description: "Exploratory work on open technical problems.",
  },
  {
    id: "emerging-tech",
    name: "Emerging Tech",
    description: "Hands-on work with technologies at the frontier.",
  },
] as const;

export const internshipJourney = [
  {
    step: "Apply",
    description: "Share your background and what you want to build.",
  },
  {
    step: "Orient",
    description: "Set up your tools, repository and first milestone.",
  },
  {
    step: "Build",
    description: "Work in a small team on a real project.",
  },
  {
    step: "Review",
    description: "Code reviews and weekly check-ins with mentors.",
  },
  {
    step: "Ship",
    description: "Deploy and present what you built.",
  },
  {
    step: "Document",
    description: "Write it up for your portfolio and GitHub.",
  },
] as const;

export const internshipFeatures = [
  "Real Projects",
  "Mentorship",
  "Team Collaboration",
  "GitHub Workflow",
  "Portfolio Building",
  "Technical Documentation",
] as const;

export const internshipQuote = "Your first real project should feel real.";