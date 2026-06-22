"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { about, profile, education } from "@/lib/data";

function Avatar() {
  const [errored, setErrored] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="relative mx-auto h-56 w-56 shrink-0 sm:h-64 sm:w-64">
      {/* glowing gradient ring */}
      <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-transparent blur-2xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/profile.jpg"
            alt={profile.name}
            className="h-full w-full object-cover"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-white/80">
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
        <Reveal>
          <Avatar />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400/80">
              About me
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.firstName} in a nutshell
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * (i + 1)}>
                <p className="text-pretty leading-relaxed text-white/60">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-4 py-4 text-center">
                <div className="gradient-text text-2xl font-bold">{s.value}</div>
                <div className="mt-1 text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Education */}
      <Reveal className="mt-20">
        <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-purple-400/80">
          Education
        </h3>
      </Reveal>
      <div className="mx-auto mt-8 max-w-3xl space-y-3">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.06}>
            <div className="glass flex flex-col gap-1 rounded-2xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-semibold">{e.school}</div>
                <div className="text-sm text-white/55">{e.detail}</div>
              </div>
              <div className="text-sm font-medium text-white/40">{e.period}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
