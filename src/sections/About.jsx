import { GraduationCap, Code2, Smartphone, Brain } from "lucide-react";
import { personalInfo } from "../data";
import SectionTitle from "../components/SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const HIGHLIGHTS = [
  {
    Icon: GraduationCap,
    title: "Informatics Engineering",
    desc: "Semester 6 — actively applying theory to real-world products.",
  },
  {
    Icon: Code2,
    title: "Fullstack Web Dev",
    desc: "Building scalable APIs and responsive frontends end-to-end.",
  },
  {
    Icon: Smartphone,
    title: "Android Development",
    desc: "Flutter apps with AR and AI integrations.",
  },
  {
    Icon: Brain,
    title: "Machine Learning",
    desc: "Audio classification and intelligent system design.",
  },
];

function HighlightCard({ Icon, title, desc, delay }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
          {title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle label="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text block */}
          <div
            ref={textRef}
            className={`transition-all duration-700 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              I'm{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-100">
                {personalInfo.name}
              </span>{" "}
              — an Informatics Engineering student in my sixth semester with a
              strong passion for building things that matter.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              My work spans across{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                fullstack web development
              </span>
              ,{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                Android development
              </span>
              , and{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                machine learning systems
              </span>
              . I enjoy the challenge of connecting these domains to create
              cohesive, intelligent solutions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              {personalInfo.goal}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Actively seeking paid internship roles
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <HighlightCard key={h.title} {...h} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
