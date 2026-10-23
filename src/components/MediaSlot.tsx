import { Headphones, Image, Newspaper, Play } from "lucide-react";

const icons = { image: Image, video: Play, audio: Headphones, press: Newspaper };

export default function MediaSlot({
  label,
  kind = "image",
  className = "aspect-video",
  metric,
}: {
  label: string;
  kind?: keyof typeof icons;
  className?: string;
  metric?: { value: string; label: string };
}) {
  const Icon = icons[kind];
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border-b-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-blue-200 p-4 text-center text-blue-900 ${className}`}
    >
      {metric ? (
        <>
          <b className="font-display text-4xl font-semibold text-navy-900">{metric.value}</b>
          <span className="max-w-[260px] text-sm font-semibold leading-snug">{metric.label}</span>
          <span className="mt-1 text-[11px] font-medium opacity-60">{label}</span>
        </>
      ) : (
        <>
          <Icon size={26} aria-hidden />
          <span className="text-[13px] font-semibold">{label}</span>
        </>
      )}
    </div>
  );
}