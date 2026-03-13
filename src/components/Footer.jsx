import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { personalInfo } from "../data";

const SOCIAL_LINKS = [
  { key: "github", Icon: Github, label: "GitHub" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "email", Icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: brand */}
        <div>
          <span className="font-mono text-sm font-bold text-cyan-500 dark:text-cyan-400">
            &lt;ASP /&gt;
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React
            &amp; Tailwind.
          </p>
        </div>

        {/* Right: socials */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ key, Icon, label }) => (
            <a
              key={key}
              href={personalInfo.social[key]}
              target={key !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
