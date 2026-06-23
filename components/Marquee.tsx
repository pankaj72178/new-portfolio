const items = [
  "Full-Stack Development",
  "DSA",
  "AI / ML",
  "Next.js",
  "React",
  "TypeScript",
  "Data Science",
  "Node.js",
  "Problem Solving",
  "Clean UI",
];

// Infinite, seamlessly-looping marquee strip. Two identical tracks slide
// left; when the first fully exits, the second is exactly in place.
export default function Marquee() {
  return (
    <div
      className="marquee relative flex overflow-hidden border-y border-white/10 py-5 select-none"
      aria-hidden
    >
      {[0, 1].map((track) => (
        <div key={track} className="marquee-track flex shrink-0 items-center gap-8 pr-8">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-8">
              <span className="text-xl font-semibold text-white/35 transition-colors sm:text-2xl">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
