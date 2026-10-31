import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive developer portfolio built with reusable server components and App Router pages.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/DjPatbern/wdd430-portfolio",
  },
  {
    title: "Hello API",
    description:
      "A lightweight Next.js route handler that returns a JSON greeting from the portfolio app.",
    technologies: ["Next.js Route Handlers", "TypeScript", "HTTP JSON"],
    link: "/api/hello",
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 lg:px-12">
      <section className="relative overflow-hidden rounded-[2rem] bg-violet-950 px-7 py-14 text-white shadow-xl shadow-violet-950/10 sm:px-12 sm:py-20">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-violet-100">
            <span className="h-2 w-2 rounded-full bg-fuchsia-300" />
            Developer portfolio
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Building thoughtful digital experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-violet-100/85">
            I’m a web developer exploring the Next.js and React ecosystem. Here
            are a few things I’ve built while learning to create useful,
            accessible web experiences.
          </p>
          <a
            href="#projects"
            className="mt-9 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-violet-950 transition hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore my work <span aria-hidden="true" className="ml-2">↓</span>
          </a>
        </div>
      </section>

      <section id="projects" className="pt-16 sm:pt-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-violet-950 sm:text-4xl">
              Projects in practice
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600">
            A couple of small, working pieces from this portfolio project.
          </p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
