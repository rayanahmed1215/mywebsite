import Link from "next/link";

const technologies = [
  "Python",
  "FAISS",
  "Embeddings",
  "OpenRouter",
  "Linux",
];

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
    <main className="min-h-screen bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold">
          Rayan Ahmed
        </Link>

        <Link
          href="/#projects"
          className="text-sm text-zinc-400 transition hover:text-white"
        >
          ← All projects
        </Link>
      </nav>

      <header className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
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
            href="#overview"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:bg-zinc-900"
          >
            Read the case study
          </a>
        </div>
      </header>
      </main>)}