"use client";

import { useRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

// A button/link that's pulled toward the cursor on hover (magnetic effect).
export default function MagneticButton({
  children,
  href,
  className = "",
  strength = 0.35,
  ...rest
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
} & Omit<HTMLMotionProps<"a">, "ref">) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
  function reset() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      data-magnetic
      onMouseMove={onMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-transform will-change-transform ${className}`}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
