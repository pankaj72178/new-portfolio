"use client";

import Reveal from "@/components/Reveal";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-4xl px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400/80">
          My journey
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          How I got here
        </h2>
        <p className="mt-4 text-white/50">
          Every project taught me something new — here&apos;s the path from my
          first full-stack app to what I&apos;m building now.
        </p>
      </Reveal>

      <div className="relative mt-16">
        {/* vertical timeline line */}
        <div
          className="pointer-events-none absolute bottom-0 left-[7px] top-2 w-px sm:left-1/2 sm:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(79,107,255,0.5), rgba(168,85,247,0.5), transparent)",
          }}
        />

        <div className="space-y-10">
          {journey.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.06}>
              <div
                className={`relative pl-9 sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:pl-0 sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                {/* node dot */}
                <span
                  className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#050505] left-0 sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-[7px]" : "sm:-left-[7px]"
                  }`}
                  style={{ background: entry.accent, boxShadow: `0 0 14px ${entry.accent}` }}
                />

                <div className="glass rounded-2xl p-5">
                  <div
                    className={`flex items-center gap-2 ${
                      i % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ background: `${entry.accent}22`, color: entry.accent }}
                    >
                      {entry.period}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{entry.title}</h3>
                  <p className="text-sm font-medium" style={{ color: entry.accent }}>
                    {entry.tagline}
                  </p>
                  <ul className="mt-3 list-none space-y-1.5 text-sm leading-relaxed text-white/55">
                    {entry.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      i % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    {entry.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
