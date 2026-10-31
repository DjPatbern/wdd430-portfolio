interface FocusCardProps {
  heading: string;
  detail: string;
}

export default function FocusCard({ heading, detail }: FocusCardProps) {
  return (
    <aside className="rounded-3xl border border-violet-100 bg-violet-50 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
        What I’m focused on
      </p>
      <h3 className="mt-3 text-xl font-semibold text-violet-950">{heading}</h3>
      <p className="mt-3 leading-7 text-slate-600">{detail}</p>
    </aside>
  );
}
