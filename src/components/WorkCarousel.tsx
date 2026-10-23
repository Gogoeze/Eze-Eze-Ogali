import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function WorkCarousel() {
  // Repeated 4x so the loop never shows a gap, even on wide screens
  const items = [...projects, ...projects, ...projects, ...projects];

  return (
    <div className="marquee overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="marquee-track flex w-max">
        {items.map((p, i) => (
          <div key={i} aria-hidden={i >= projects.length} className="mr-6 w-[320px] shrink-0 md:w-[400px]">
            <ProjectCard project={p} index={i % projects.length} />
          </div>
        ))}
      </div>
    </div>
  );
}