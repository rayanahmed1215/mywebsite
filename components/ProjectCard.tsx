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

      <span className="mt-6 inline-block text-sm font-medium underline underline-offset-4 group-hover:text-zinc-400">
        Read more →
      </span>
    </Link>
  );
}