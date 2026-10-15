import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scrappy",
};

const technologies = ["Python", "FAISS", "Embeddings", "OpenRouter", "Linux"];

const milestones = [
  {
    label: "Current",
    title: "Semantic routing prototype",
    description:
      "Routes prompts between placeholder local and remote handlers using embedding similarity.",
  },
  {
    label: "Next",
    title: "Central-node prototype",
    description:
      "Create and manage containerized Scrappy Nodes with explicit resource limits on one host.",
  },
  {
    label: "Later",
    title: "Distributed workers",
    description:
      "Coordinate workloads across reusable computers based on model and hardware requirements.",
  },
];

export default function ScrappyProjectPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/projects"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← All projects
        </Link>
      </div>

      <header className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
          <span className="rounded-full border border-emerald-900 bg-emerald-950/50 px-3 py-1 text-emerald-400">
            In development
          </span>
          <span>Personal project</span>
          <span aria-hidden="true">·</span>
          <span>2026</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-6xl font-semibold tracking-tight sm:text-8xl">
          Scrappy
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400 sm:text-2xl">
          A local-first AI infrastructure project exploring how existing
          computers can become coordinated workers for inference, automation,
          and self-hosted services.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/rayanahmed1215/Scrappy"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View source ↗
          </a>
          <a
            href="#roadmap"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:bg-zinc-900"
          >
            See the roadmap
          </a>
        </div>
      </header>

      {/* Roadmap — renders the milestones array that was previously unused */}
      <section id="roadmap" className="border-t border-zinc-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            ROADMAP
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  {m.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 leading-7 text-zinc-400">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}