"use client";

import dynamic from "next/dynamic";

// Lazy-load the WebGL scene (no SSR) so it never blocks first paint.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
      <Scene />
    </div>
  );
}
