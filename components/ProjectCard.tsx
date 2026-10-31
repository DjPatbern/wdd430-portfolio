import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-950/5 sm:p-7">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-xl font-semibold text-violet-800">
        {title.slice(0, 1)}
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-violet-950">{title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
          Technologies
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-800"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
      {link && (
        <p className="mt-6 border-t border-violet-100 pt-4">
          {link.startsWith("http") ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-violet-700 hover:text-violet-950"
            >
              View project <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link
              href={link}
              className="inline-flex items-center gap-2 font-semibold text-violet-700 hover:text-violet-950"
            >
              Try the endpoint <span aria-hidden="true">→</span>
            </Link>
          )}
        </p>
      )}
    </article>
  );
}
