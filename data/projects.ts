export type Project = {
  id: string;
  name: string;
  category: string;
  technology: string[];
  description: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
};

/**
 * Verified projects only. The Projects section shows an honest empty state
 * until real projects are added here — never invent projects or metrics.
 */
export const projects: Project[] = [];