"use client";

import { useEffect, useState } from "react";

type P = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

// Lightweight floating particle layer (DOM, no canvas). Generated on the
// client to avoid SSR hydration mismatches.
export default function Particles({ count = 36 }: { count?: number }) {
  const [particles, setParticles] = useState<P[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const arr = Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 14 + 10,
      delay: Math.random() * -20,
      drift: Math.random() * 40 - 20,
      opacity: Math.random() * 0.4 + 0.15,
    }));
    setParticles(arr);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            // custom prop consumed by the keyframes
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
