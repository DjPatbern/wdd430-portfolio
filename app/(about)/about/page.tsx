import FocusCard from "@/components/FocusCard";

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            A little introduction
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-violet-950 sm:text-5xl">
            About me
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I’m a web developer building a strong foundation in modern web
            development. I enjoy turning ideas into clear, useful interfaces
            and learning how the pieces behind a website fit together.
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            This portfolio is a place to practice that craft: creating
            accessible pages, reusable components, and small features that work
            together as a complete experience.
          </p>
        </section>
        <FocusCard
          heading="Learning by building"
          detail="Right now I’m working with React, TypeScript, Next.js, and Tailwind CSS, with a focus on thoughtful component design and reliable, accessible web experiences."
        />
      </div>
    </main>
  );
}
