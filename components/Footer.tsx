export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="font-medium text-violet-700">Made with care and curiosity.</p>
      </div>
    </footer>
  );
}
