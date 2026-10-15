import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-medium tracking-wide text-zinc-500">
          SOFTWARE ENGINEER · BUILDER
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          I&apos;m interested in pushing software further.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I&apos;m Rayan, an Information Technology and Web Science student at RPI
          interested in systems, backend engineering, and resource-efficient
          computing.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View my work
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-900"
          >
            About me
          </Link>
        </div>
      </section>

      {/* Featured projects (short preview — full list lives on /projects) */}
      <section className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <p className="text-sm font-medium tracking-wide text-zinc-500">
              FEATURED
            </p>
            <Link
              href="/projects"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              All projects →
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            CONTACT
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 text-zinc-400">
            I&apos;m currently looking for software engineering opportunities.
          </p>

          <div className="mt-8 flex gap-6 text-sm">
            <a
              href="mailto:r.ahmed.offical@gmail.com"
              className="underline underline-offset-4 transition hover:text-zinc-400"
            >
              Email
            </a>
            <a
              href="https://github.com/rayanahmed1215"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 transition hover:text-zinc-400"
            >
              GitHub
            </a>
            <a
              href="#"
              className="underline underline-offset-4 transition hover:text-zinc-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}