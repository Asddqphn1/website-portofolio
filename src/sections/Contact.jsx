import { useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "../data";
import SectionTitle from "../components/SectionTitle";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SOCIAL_LINKS = [
  { key: "github", Icon: Github, label: "GitHub", handle: "Asddqphn1" },
  {
    key: "linkedin",
    Icon: Linkedin,
    label: "LinkedIn",
    handle: "AS SIDDIQI POHAN",
  },
  {
    key: "instagram",
    Icon: Instagram,
    label: "Instagram",
    handle: "@diqqipohan",
  },
  { key: "email", Icon: Mail, label: "Email", handle: "pdiqqi@gmail.com" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend — simulate submission
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Get In Touch"
          title="Contact Me"
          subtitle="Have an opportunity or a project in mind? I'd love to hear from you."
        />

        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Form — takes 3 cols */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-10 text-center gap-4">
                <CheckCircle size={40} className="text-emerald-500" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Message Sent!
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Thanks for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Social sidebar — takes 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Find me on
              </h3>
              <div className="space-y-3">
                {SOCIAL_LINKS.map(({ key, Icon, label, handle }) => (
                  <a
                    key={key}
                    href={personalInfo.social[key]}
                    target={key !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-700 dark:text-slate-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                        {label}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-linear-to-br from-cyan-500/5 to-transparent p-6">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm currently open to{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  paid internship
                </span>{" "}
                roles. Whether you have a question or just want to say hello —
                my inbox is always open!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
