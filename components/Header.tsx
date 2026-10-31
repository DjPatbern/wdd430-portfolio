import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-violet-100 bg-white/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12"
      >
        <Link href="/" className="flex items-center gap-3 text-violet-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-700 text-sm font-bold text-white">
            P
          </span>
          <span className="text-lg font-semibold tracking-tight">Portfolio</span>
        </Link>
        <ul className="flex items-center gap-2 text-sm font-medium text-slate-600 sm:gap-3">
          <li>
            <Link
              href="/"
              className="rounded-full px-4 py-2 transition hover:bg-violet-50 hover:text-violet-800 focus-visible:outline-2 focus-visible:outline-violet-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-full bg-violet-100 px-4 py-2 text-violet-800 transition hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-violet-700"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
