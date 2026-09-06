import type { MetadataRoute } from "next";
import { company } from "@/data/company";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

/**
 * Single source of truth for the sitemap. As future routes ship —
 * /internships, /courses, /development, /research, /projects, /blog — add
 * them here, e.g.:
 *
 *   ...courses.map((course) => ({
 *     path: `/courses/${course.id}`,
 *     priority: 0.8,
 *     changeFrequency: "monthly",
 *   })),
 */
const routes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, company.url).toString(),
    lastModified,
    changeFrequency,
    priority,
  }));
}