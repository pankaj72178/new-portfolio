"use client";

import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { techStack } from "@/lib/data";

export default function TechStack() {
  const planeRef = useRef<HTMLDivElement>(null);

  // Subtle cursor "camera" parallax on the isometric plane.
  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const plane = planeRef.current;
    if (!plane) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    plane.style.transform = `rotateX(${36 - py * 10}deg) rotateZ(${-6 + px * 8}deg)`;
  }
  function handleLeave() {
    if (planeRef.current)
      planeRef.current.style.transform = "rotateX(36deg) rotateZ(-6deg)";
  }

  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400/80">
          Tech stack
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Tools I build with
        </h2>
        <p className="mt-4 text-white/50">
          An interactive isometric grid — hover any tile and it lifts off the
          board with its own glow. Every key is a technology I reach for.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="tech-stage mt-16 flex justify-center"
        >
          <div ref={planeRef} className="tech-plane">
            {techStack.map((t) => (
              <div
                key={t.name}
                className="tech-tile glass"
                style={{ ["--accent" as string]: t.color }}
              >
                <span
                  className="tech-dot"
                  style={{ background: t.color, boxShadow: `0 0 12px ${t.color}` }}
                />
                <span className="tech-label">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Accessible / flat fallback list */}
      <Reveal delay={0.15} className="mt-14 flex flex-wrap justify-center gap-2.5">
        {techStack.map((t) => (
          <span
            key={t.name}
            className="glass rounded-full px-3.5 py-1.5 text-sm font-medium text-white/70"
            style={{ borderColor: `${t.color}33` }}
          >
            {t.name}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
