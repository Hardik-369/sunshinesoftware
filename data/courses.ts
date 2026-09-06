export type Course = {
  id: string;
  title: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  mode: "Online" | "Hybrid" | "In-person";
  technology: string[];
  build: string;
  description: string;
};

export const courseCategories = [
  "Web Development",
  "App Development",
  "Python",
  "AI/ML",
  "Software Engineering",
  "Emerging Technology",
] as const;

/**
 * Course data. Never invent prices, ratings, student counts or placement
 * percentages — they are deliberately absent here.
 */
export const courses: Course[] = [
  {
    id: "web-foundations",
    title: "Web Development Foundations",
    category: "Web Development",
    level: "Beginner",
    duration: "8 weeks",
    mode: "Online",
    technology: ["HTML", "CSS", "JavaScript"],
    build: "A portfolio site and an interactive web app",
    description:
      "Core frontend fundamentals — structure, styling and behaviour — learned by building pages you can actually publish.",
  },
  {
    id: "modern-web",
    title: "Modern Web Development",
    category: "Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    mode: "Online",
    technology: ["React", "Next.js", "Tailwind CSS"],
    build: "A full-stack web application, deployed",
    description:
      "Build and ship a production-style web application with a component-based frontend, APIs and deployment.",
  },
  {
    id: "python",
    title: "Python Programming",
    category: "Python",
    level: "Beginner",
    duration: "6 weeks",
    mode: "Online",
    technology: ["Python"],
    build: "Automation scripts and a data tool",
    description:
      "A practical first course in Python — from syntax to scripts that automate real, everyday work.",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    category: "AI/ML",
    level: "Intermediate",
    duration: "12 weeks",
    mode: "Hybrid",
    technology: ["Python", "scikit-learn", "PyTorch"],
    build: "A trained model with an evaluation report",
    description:
      "Work end-to-end with data: clean it, train models, evaluate honestly and communicate what they can and cannot do.",
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    category: "Software Engineering",
    level: "Intermediate",
    duration: "10 weeks",
    mode: "Online",
    technology: ["Git", "Testing", "Architecture"],
    build: "A maintainable codebase with CI",
    description:
      "Version control, testing, code review and architecture — the habits that keep software maintainable beyond a demo.",
  },
  {
    id: "emerging-tech",
    title: "Emerging Technology",
    category: "Emerging Technology",
    level: "Advanced",
    duration: "8 weeks",
    mode: "Hybrid",
    technology: ["IoT", "Blockchain", "Autonomous Systems"],
    build: "A working prototype of an emerging-tech system",
    description:
      "Hands-on exposure to frontier technologies — build a small prototype and evaluate its real constraints.",
  },
];