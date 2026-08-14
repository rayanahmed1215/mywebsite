export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-lg font-semibold">Rayan Ahmed</div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-medium tracking-wide text-zinc-500">
          SOFTWARE ENGINEER · BUILDER
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          I'm interested in pushing software further.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I'm Rayan, an Information Technology and Web Science student at RPI
          interested in systems, backend engineering, and resource-efficient
          computing.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-900"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Featured Project */}
      <section
        id="projects"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            FEATURED PROJECT
          </p>

          <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950 p-8 sm:p-12">
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-semibold tracking-tight">
                  Scrappy
                </h2>

                <p className="mt-4 text-lg leading-8 text-zinc-400">
                  A resource-efficient personal AI system designed to make
                  intelligent use of the hardware already available to you.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "AI", "Embeddings", "FAISS", "Linux"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm text-zinc-400"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="/projects/scrappy"
                  className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition hover:text-zinc-400"
                >
                  Explore Scrappy →
                </a>
              </div>

              <div className="flex min-h-64 min-w-64 items-center justify-center rounded-2xl border border-zinc-800 bg-black">
                <span className="text-sm tracking-widest text-zinc-600">
                  SCRAPPY
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            ABOUT
          </p>

          <div className="mt-6 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              I like understanding how things work.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I'm currently studying at Rensselaer Polytechnic Institute,
              where I'm exploring software engineering, systems, and AI. I
              enjoy taking ideas from concept to working software.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-zinc-800 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-wide text-zinc-500">
            CONTACT
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight">
            Let's build something.
          </h2>

          <p className="mt-4 text-zinc-400">
            I'm currently looking for software engineering opportunities.
          </p>

          <div className="mt-8 flex gap-6 text-sm">
            <a
              href="mailto:r.ahmed.offical@gmail.com"
              className="underline underline-offset-4 transition hover:text-zinc-400"
            >
              Email
            </a>

            <a
              href="#"
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

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto max-w-6xl text-sm text-zinc-600">
          © {new Date().getFullYear()} Rayan Ahmed
        </div>
      </footer>
    </main>
  );
}