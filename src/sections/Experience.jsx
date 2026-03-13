import { Briefcase, Users } from "lucide-react";
import { experience } from "../data";
import SectionTitle from "../components/SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const TYPE_CONFIG = {
  "Technical Project": {
    Icon: Briefcase,
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
  },
  "Leadership & Organization": {
    Icon: Users,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10 dark:bg-violet-500/15",
  },
};

function ExperienceItem({ item, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const cfg = TYPE_CONFIG[item.type] || TYPE_CONFIG["Technical Project"];
  const { Icon } = cfg;
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Timeline dot (center, desktop only) */}
      <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
        <div
          className={`w-10 h-10 rounded-full ${cfg.bg} border-4 border-white dark:border-slate-950 flex items-center justify-center ${cfg.color}`}
        >
          <Icon size={16} />
        </div>
      </div>

      {/* Content — alternate sides on desktop */}
      <div className={`lg:col-span-1 ${isLeft ? "" : "lg:col-start-2"}`}>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5">
          {/* Type + Period */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.color} border-current/20`}
            >
              {item.type}
            </span>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
              {item.period}
            </span>
          </div>

          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-0.5">
            {item.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-3">
            {item.role}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty column for alternating layout (hidden on mobile) */}
      {isLeft && <div className="hidden lg:block lg:col-start-2" />}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Journey"
          title="Experience & Leadership"
          subtitle="Projects I've engineered and communities I've led."
        />

        {/* Vertical line (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-slate-200 via-slate-300 to-transparent dark:from-slate-800 dark:via-slate-700 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <ExperienceItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
