"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const text =
  "I turn ideas into fast, polished products — debugging until it clicks, sweating the details, and shipping things people actually enjoy using.";

const words = text.split(" ");

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  return (
    <section ref={ref} className="relative mx-auto max-w-4xl px-6 py-32">
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-purple-400/80">
        What drives me
      </p>
      <p className="flex flex-wrap justify-center text-balance text-center text-3xl font-bold leading-snug tracking-tight sm:text-5xl sm:leading-tight">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </section>
  );
}
