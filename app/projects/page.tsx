import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <p className="text-sm font-medium tracking-wide text-zinc-500">
        PROJECTS
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">
        Things I&apos;ve built
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        Systems, backend, and AI projects, from early prototypes to finished
        work.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}