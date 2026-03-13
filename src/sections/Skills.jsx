import { Code2, Layers, Database, Terminal, Cpu } from "lucide-react";
import { skills } from "../data";
import SectionTitle from "../components/SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const ICON_MAP = {
  Code2,
  Layers,
  Database,
  Terminal,
  Cpu,
};

function SkillGroup({ skill, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const Icon = ICON_MAP[skill.icon] || Code2;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
          <Icon size={18} />
        </div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {skill.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="My Arsenal"
          title="Tech Stack & Skills"
          subtitle="The languages, frameworks, and tools I work with daily."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <SkillGroup key={skill.category} skill={skill} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
