"use client";

import { useEffect, useRef } from "react";

// A large soft radial glow that trails the cursor — adds depth and a
// premium "light source" feel. Fine-pointer devices only.
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    function onMove(e: PointerEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }
    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full opacity-60 blur-[40px]"
      style={{
        background:
          "radial-gradient(circle, rgba(79,107,255,0.10), rgba(168,85,247,0.06) 40%, transparent 70%)",
      }}
    />
  );
}
