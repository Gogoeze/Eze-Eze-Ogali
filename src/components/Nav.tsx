import { Link } from "react-router-dom";
import { person } from "../data/content";

const links = [
  { to: "/#work", label: "Work" },
  { to: "/#about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#media", label: "Media" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold text-white">
          {person.name}
        </Link>
        <nav className="flex items-center gap-7 text-[15px] text-slate-200">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hidden hover:text-white md:block">
              {l.label}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-primary !min-h-11 !px-5">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
