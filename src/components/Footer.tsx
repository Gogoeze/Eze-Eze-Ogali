import { person } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-[#071634] py-7 text-sm text-slate-400">
      <div className="wrap flex flex-wrap justify-between gap-3">
        <span>
          © {new Date().getFullYear()} {person.name} · {person.location}
        </span>
        <span>Development communication · Media production</span>
      </div>
    </footer>
  );
}
