import { Github, ShoppingCart, Lock } from "lucide-react";

const STATUS_CONFIG = {
  completed: {
    label: "Completed",
    className: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30",
  },
  wip: {
    label: "Work in Progress",
    className: "bg-amber-500/10 text-amber-500 border-amber-500/30",
  },
};

export default function ProjectCard({ project }) {
  const { title, type, description, features, techStack, links, status } =
    project;
  const statusCfg = STATUS_CONFIG[status] || STATUS_CONFIG.completed;

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 dark:hover:shadow-cyan-500/10">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <span
            className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${statusCfg.className} mb-2`}
          >
            {statusCfg.label}
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-500 mt-0.5">
            {type}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        {description}
      </p>

      {/* Features */}
      <ul className="mb-4 space-y-1.5 flex-1">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex gap-2 text-xs text-slate-600 dark:text-slate-400"
          >
            <span className="mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
        {links.github !== undefined &&
          (links.github === null ? (
            <span className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-600 cursor-not-allowed">
              <Lock size={13} />
              Repo Private
            </span>
          ) : (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
          ))}
        {links.playStore && (
          <a
            href={links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ShoppingCart size={14} />
            Play Store
          </a>
        )}
      </div>
    </div>
  );
}
