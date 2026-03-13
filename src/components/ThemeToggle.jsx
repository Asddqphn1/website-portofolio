import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center
        text-slate-600 dark:text-slate-400
        hover:text-cyan-600 dark:hover:text-cyan-400
        hover:bg-slate-100 dark:hover:bg-slate-800
        border border-slate-200 dark:border-slate-700
        transition-all duration-200"
    >
      {darkMode ? (
        <Sun size={16} strokeWidth={2} />
      ) : (
        <Moon size={16} strokeWidth={2} />
      )}
    </button>
  );
}
