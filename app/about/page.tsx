import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const skills = {
  Languages: ["Python", "Java", "C", "C++", "JavaScript", "PHP", "SQL"],
  "Frameworks & Tools": [
    "Next.js",
    "FAISS",
    "NumPy",
    "Docker",
    "Git",
    "Linux",
    "MySQL",
    "MariaDB",
    "REST APIs",
  ],
};

const coursework = [
  "Data Structures",
  "Computer Architecture",
  "Open Source Development",
  "Discrete Mathematics",
  "Web Systems",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-16">
      <p className="text-sm font-medium tracking-wide text-zinc-500">ABOUT</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight">
        I like understanding how things work.
      </h1>

      <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
        <p>
          I&apos;m currently studying at Rensselaer Polytechnic Institute,
          where I&apos;m exploring software engineering, systems, and AI. I
          enjoy taking ideas from concept to working software.
        </p>
        {/* TODO: add a paragraph or two in your own voice — what got you into
            building, what you're focused on right now, what you're looking for. */}
      </div>

      {/* Education */}
      <section className="mt-20 border-t border-zinc-800 pt-12">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          EDUCATION
        </h2>
        <div className="mt-6">
          <p className="text-xl font-semibold">
            Rensselaer Polytechnic Institute
          </p>
          <p className="mt-1 text-zinc-400">
            B.S. Information Technology and Web Science, dual major in Computer
            Science · Expected May 2029
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span
                key={c}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-sm text-zinc-400"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16 border-t border-zinc-800 pt-12">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          SKILLS
        </h2>
        <div className="mt-6 space-y-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="text-zinc-300">{group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-sm text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}