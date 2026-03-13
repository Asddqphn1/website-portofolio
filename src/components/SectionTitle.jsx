export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <span className="inline-block font-mono text-xs font-semibold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
