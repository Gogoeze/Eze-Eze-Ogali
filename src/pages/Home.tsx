import { motion } from "framer-motion";
import { ArrowRight, Clapperboard, ExternalLink, Mail, Megaphone, MessageCircle, Mic, Newspaper, Users } from "lucide-react";
import { Link } from "react-router-dom";
import CountUp from "../components/CountUp";
import MediaSlot from "../components/MediaSlot";
import ProjectCard from "../components/ProjectCard";
import ClientLogo from "../components/ClientLogo";
import Reveal from "../components/Reveal";
import WorkCarousel from "../components/WorkCarousel";
import { clients, mediaSlots, person, projects, services, testimonial } from "../data/content";
import LogoMarquee from "../components/LogoMarquee";



const serviceIcons = { users: Users, megaphone: Megaphone, clapper: Clapperboard, campaign: Megaphone, news: Newspaper, mic: Mic };

const float = (delay: number) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
        <motion.div aria-hidden className="absolute -right-24 -top-40 h-[560px] w-[560px] rounded-full bg-cobalt-600/45 blur-[130px]"
          animate={{ x: [0, -90], y: [0, 110] }} transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
        <motion.div aria-hidden className="absolute -bottom-36 -left-20 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]"
          animate={{ x: [0, 80], y: [0, -60] }} transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
        <div className="wrap relative grid items-center gap-12 py-16 md:grid-cols-[1.25fr_.75fr] md:py-24">
          <div>
            <p className="eyebrow">{person.role}</p>
            <h1 className="my-5 text-[clamp(40px,6vw,68px)] leading-[1.05]">{person.headline}</h1>
            <p className="max-w-[560px] text-lg leading-relaxed text-slate-300">{person.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link to="/#work" className="btn btn-primary">View selected work <ArrowRight size={18} aria-hidden /></Link>
              <a href={`mailto:${person.email}`} className="btn btn-ghost">Email Eze</a>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { big: <CountUp to={person.years} suffix="+" />, small: "Years in development media" },
              { big: "6", small: "Flagship national programs, from TV drama to radio accountability" },
              { big: "Abuja", small: "Independent strategic media consultant" },
            ].map((s, i) => (
              <motion.div key={s.small} {...float(i * -2)} className={`rounded-[20px] border border-white/20 bg-white/10 px-7 py-6 backdrop-blur ${i === 1 ? "md:ml-9" : ""}`}>
                <b className="block font-display text-4xl font-semibold">{s.big}</b>
                <span className="text-sm text-slate-300">{s.small}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliated  with */}
      <section className="border-b border-line py-12">
  <p className="mb-8 text-center text-xs uppercase tracking-[.14em] text-slate-600">Affiliated with</p>
  <LogoMarquee />
</section>

      {/* Work */}
      <section id="work" className="overflow-hidden py-20 md:py-28">
        <div className="wrap">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3.5 text-[clamp(32px,4vw,46px)] leading-[1.1]">Programs that reached millions, built on real voices.</h2>
          </Reveal>
        </div>
        <WorkCarousel />
      </section>

      {/* About */}
      <section id="about" className="bg-mist py-20 md:py-28">
        <div className="wrap grid items-center gap-14 md:grid-cols-[.8fr_1.2fr]">
          <Reveal><MediaSlot label={person.portraitLabel} className="aspect-[4/5] rounded-3xl border-2" /></Reveal>
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mb-6 mt-3.5 text-[clamp(30px,3.6vw,42px)] leading-[1.15]">Theatre craft meets behavioral science.</h2>
            {person.about.map((t, i) => (
              <p key={i} className="mt-4 text-xl leading-[1.7] text-slate-800">{i === 0 ? "“" : ""}{t}{i === person.about.length - 1 ? "”" : ""}</p>
            ))}
            <p className="muted mt-6">{person.name} · {person.location} · Former Senior Program Officer, Johns Hopkins University CCP</p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="wrap">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3.5 text-[clamp(32px,4vw,46px)] leading-[1.1]">How Eze can help your program.</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.icon];
              return (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <motion.div whileHover={{ y: -6 }} className="card h-full gap-3 p-7">
                    <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-cobalt-700"><Icon size={22} aria-hidden /></span>
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="muted">{s.text}</p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media */}
      <section id="media" className="bg-mist py-20 md:py-28">
        <div className="wrap">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow">Media and links</p>
            <h2 className="mt-3.5 text-[clamp(32px,4vw,46px)] leading-[1.1]">Watch, listen and read.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {mediaSlots.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="card h-full">
                  <MediaSlot label={m.label} kind={m.kind} />
                  <div className="p-7"><h3 className="text-xl">{m.title}</h3><p className="muted mt-2">{m.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28">
        <Reveal className="wrap max-w-[860px] text-center">
          <p className="font-display text-[clamp(24px,3vw,34px)] leading-[1.4] text-navy-900">“{testimonial.quote}”</p>
          <p className="muted mt-6">{testimonial.attribution}</p>
        </Reveal>
      </section>

      {/* Contact */}
      <section id="contact" className="on-dark relative overflow-hidden bg-navy-900 py-20 text-center text-white md:py-28">
        <div aria-hidden className="absolute -right-24 -top-40 h-[480px] w-[480px] rounded-full bg-cobalt-600/30 blur-[130px]" />
        <Reveal className="wrap relative max-w-[820px]">
          <p className="eyebrow">Contact</p>
          <h2 className="mb-5 mt-4 text-[clamp(34px,5vw,56px)] leading-[1.1]">Let’s design the story your audience will act on.</h2>
          <p className="mb-10 text-lg text-slate-300">Available for strategic media consulting, training and campaign work.</p>
          <div className="grid gap-3.5 sm:grid-cols-3">
            {[
              { href: `mailto:${person.email}`, icon: Mail, text: person.email },
              { href: person.whatsapp, icon: MessageCircle, text: `${person.phone}` },
              { href: person.linkedin, icon: ExternalLink, text: "LinkedIn" },
            ].map(({ href, icon: Icon, text }) => (
              <motion.a key={text} href={href} whileHover={{ y: -3 }} className="flex min-h-14 items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-5 font-medium hover:bg-white/15">
                <Icon size={18} aria-hidden /> {text}
              </motion.a>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
