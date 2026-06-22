"use client";

import { useEffect, useRef, useState } from "react";

// A two-layer cursor: a small dot that tracks instantly and a ring that
// springs behind it and grows over interactive elements.
export default function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;
    let raf = 0;

    const move = (e: PointerEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px)`;
      const t = e.target as HTMLElement;
      const interactive = !!t.closest("a, button, [data-magnetic], input, textarea");
      if (ring.current) ring.current.dataset.active = interactive ? "1" : "0";
    };

    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[200] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
      <div
        ref={ring}
        data-active="0"
        className="pointer-events-none fixed left-0 top-0 z-[200] -ml-5 -mt-5 h-10 w-10 rounded-full border border-white/60 transition-[width,height,margin,opacity] duration-200 mix-blend-difference data-[active=1]:-ml-8 data-[active=1]:-mt-8 data-[active=1]:h-16 data-[active=1]:w-16 data-[active=1]:bg-white/10"
      />
    </>
  );
}
