// Single source of truth for project data.
// The home page shows the featured project; /projects lists all of them.

export type Project = {
  slug: string; // matches the folder name under app/projects/
  name: string;
  summary: string;
  tech: string[];
  status: "In development" | "Complete" | "Archived";
  featured?: boolean;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "scrappy",
    name: "Scrappy",
    summary:
      "A local-first AI infrastructure project exploring how existing computers can become coordinated workers for inference, automation, and self-hosted services.",
    tech: ["Python", "FAISS", "Embeddings", "OpenRouter", "Linux"],
    status: "In development",
    featured: true,
    repo: "https://github.com/rayanahmed1215/Scrappy",
  },
  // Add more projects here, e.g.:
  // {
  //   slug: "nodewatch",
  //   name: "NodeWatch",
  //   summary: "...",
  //   tech: ["Rust"],
  //   status: "In development",
  // },
];