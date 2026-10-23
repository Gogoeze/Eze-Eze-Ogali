import { useState } from "react";

export default function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <div className="flex w-48 flex-col items-center gap-3 rounded-2xl  p-5 text-center transition-colors duration-300 hover:bg-blue-100">
      <div className="grid h-16 w-full place-items-center">
        {failed ? (
          <span className="grid size-14 place-items-center rounded-2xl bg-white font-display text-lg font-semibold text-cobalt-700">
            {initials}
          </span>
        ) : (
          <img
            src={logo}
            alt=""
            onError={() => setFailed(true)}
            className="max-h-14 max-w-full object-contain mix-blend-multiply"
          />
        )}
      </div>
      <span className="font-display text-base font-semibold text-slate-700">{name}</span>
    </div>
  );
}