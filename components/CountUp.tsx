"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animated number counter. Parses a string like "9.24", "3+", "10+", "3⭐"
// into an optional prefix, a number, and a suffix, then counts the number
// up the first time it scrolls into view.
function parse(value: string) {
  const match = value.match(/-?\d+(\.\d+)?/);
  if (!match) return { prefix: value, number: null as number | null, suffix: "", decimals: 0 };
  const numStr = match[0];
  const start = match.index ?? 0;
  return {
    prefix: value.slice(0, start),
    number: parseFloat(numStr),
    suffix: value.slice(start + numStr.length),
    decimals: numStr.includes(".") ? numStr.split(".")[1].length : 0,
  };
}

export default function CountUp({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { prefix, number, suffix, decimals } = parse(value);
  const [display, setDisplay] = useState(number === null ? value : `${prefix}0${suffix}`);

  useEffect(() => {
    if (!inView || number === null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let startTime = 0;
    function tick(t: number) {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = (number as number) * eased;
      setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, prefix, suffix, decimals, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
