import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Radio, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/content";
import MediaSlot from "./MediaSlot";

const icons = { training: GraduationCap, tv: Tv, radio: Radio, education: BookOpen };

export default function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const Icon = icons[p.icon];
  return (
    <motion.div whileHover={{ y: -8, rotate: -0.4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="h-full">
      <Link to={`/work/${p.slug}`} className="card h-full">
         <MediaSlot label="" metric={p.metric}  />
        <div className="flex flex-1 flex-col gap-3 p-7">
          <span className="flex items-center gap-2 text-[15px] font-semibold text-cobalt-700">
            <Icon size={18} aria-hidden /> 0{index + 1} · {p.org}
          </span>
          <h3 className="text-2xl leading-tight">{p.title}</h3>
          <p className="muted">{p.summary}</p>
          <p className="muted"><b className="text-slate-900">Result:</b> {p.result}</p>
          <div className="flex flex-wrap gap-2">
            {p.tools.map((t) => (
              <span key={t} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">{t}</span>
            ))}
          </div>
          <span className="mt-auto flex items-center gap-1.5 pt-2 font-semibold text-cobalt-700">
            Read case study <ArrowRight size={16} aria-hidden />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
