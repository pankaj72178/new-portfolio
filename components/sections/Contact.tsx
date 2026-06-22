"use client";

import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import Sphere3D from "@/components/Sphere3D";
import { profile } from "@/lib/data";

const socials = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "CodeChef", href: profile.socials.codechef },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-28">
      <Reveal className="glass relative overflow-hidden rounded-3xl px-8 py-14 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 20% 0%, rgba(79,107,255,0.18), transparent 60%), radial-gradient(60% 80% at 90% 100%, rgba(168,85,247,0.18), transparent 60%)",
          }}
        />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_auto]">
          {/* Left: copy + actions */}
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400/80">
              Let&apos;s connect
            </p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Have an idea or a role in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/55 md:mx-0">
              I&apos;m open to internships and collaborations. Drop me a line — I
              reply fast.
            </p>

            <div className="mt-9 flex justify-center md:justify-start">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="btn-primary rounded-full px-7 py-3 text-sm font-semibold text-white"
              >
                {profile.email}
              </MagneticButton>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: rotating 3D sphere */}
          <div className="hidden justify-center md:flex">
            <Sphere3D />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
