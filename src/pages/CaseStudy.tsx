import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import MediaSlot from "../components/MediaSlot";
import Reveal from "../components/Reveal";
import { projects } from "../data/content";

export default function CaseStudy() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return <Navigate to="/" replace />;
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <section className="on-dark bg-navy-900 py-16 text-white md:py-24">
        <div className="wrap max-w-[900px]">
          <Link to="/#work" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft size={16} aria-hidden /> All work
          </Link>
          <p className="eyebrow">{p.org}</p>
          <h1 className="my-4 text-[clamp(36px,5vw,60px)] leading-[1.08]">{p.title}</h1>
          <p className="text-lg leading-relaxed text-slate-300">{p.summary}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap max-w-[900px]">
          <MediaSlot label="" image={p.image} className="aspect-video rounded-3xl border-2" />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal><h2 className="text-2xl">His role</h2><p className="muted mt-3 text-base">{p.role}</p></Reveal>
            <Reveal><h2 className="text-2xl">The result</h2><p className="muted mt-3 text-base">{p.result}</p></Reveal>
          </div>
          <div className="mt-12 space-y-8">
            {[
              ["The challenge", p.challenge],
              ["The approach", p.approach],
              ["The outcome", p.outcome],
            ].map(([h, t]) => (
              <Reveal key={h}>
                <h2 className="text-2xl">{h}</h2>
                <p className="muted mt-3 text-base">{t}</p>
              </Reveal>
            ))}
          </div>
          {p.metric.source && (
            <p className="mt-8 text-sm text-slate-600">
              Source:{" "}
              <a href={p.metric.source.href} className="font-semibold text-cobalt-700 hover:underline">
                {p.metric.source.label}
              </a>
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-2">
            {p.tools.map((t) => <span key={t} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">{t}</span>)}
          </div>
          <a href={p.link.href} className="mt-8 inline-flex items-center gap-2 font-semibold text-cobalt-700 hover:underline">
            {p.link.label} <ExternalLink size={16} aria-hidden />
          </a>
        </div>
      </section>

      <section className="bg-mist py-14">
        <div className="wrap max-w-[900px]">
          <Link to={`/work/${next.slug}`} className="flex items-center justify-between gap-4">
            <span><span className="eyebrow block">Next case study</span><span className="font-display text-2xl font-semibold">{next.title}</span></span>
            <ArrowRight className="text-cobalt-700" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
