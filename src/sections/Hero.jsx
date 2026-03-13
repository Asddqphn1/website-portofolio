import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";
import { personalInfo } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

const SOCIAL_LINKS = [
  { key: "github", Icon: Github, label: "GitHub" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "email", Icon: Mail, label: "Email" },
];

export default function Hero() {
  const displayedRole = useTypewriter(personalInfo.roles, 90, 50, 2200);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background: grid pattern + gradient blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-8 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          Open to Paid Internship Opportunities
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-slate-900 dark:text-slate-100">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-cyan-300 dark:from-cyan-400 dark:to-cyan-200">
            AS SIDDIQI POHAN
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-mono text-lg sm:text-2xl text-slate-600 dark:text-slate-400">
            <span className="text-cyan-600 dark:text-cyan-400">{"> "}</span>
            <span>{displayedRole}</span>
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-cyan-500 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {SOCIAL_LINKS.map(({ key, Icon, label }) => (
            <a
              key={key}
              href={personalInfo.social[key]}
              target={key !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
