import { clients } from "../data/content";
import ClientLogo from "./ClientLogo";

export default function LogoMarquee() {
  // 6 copies (an even number) so the -50% loop is seamless on wide screens
  const items = Array.from({ length: 6 }, () => clients).flat();

  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track flex w-max" style={{ animationDuration: "45s", animationDirection: "reverse" }}>
        {items.map((c, i) => (
          <div key={i} aria-hidden={i >= clients.length} className="mr-4 shrink-0">
            <ClientLogo {...c} />
          </div>
        ))}
      </div>
    </div>
  );
}