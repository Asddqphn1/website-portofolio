import { projects } from "../data";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function AnimatedCard({ project, delay }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 flex ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <ProjectCard project={project} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="What I've Built"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills across mobile, web, and machine learning domains."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedCard key={project.id} project={project} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
