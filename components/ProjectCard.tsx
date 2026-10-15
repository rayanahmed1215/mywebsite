import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
        <span className="text-xs text-zinc-500">{project.status}</span>
      </div>

      <p className="mt-4 leading-7 text-zinc-400">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>

      <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition group-hover:border-zinc-500 group-hover:bg-zinc-900 group-hover:text-white">
        Read more
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
      </span>
    </Link>
  );
}