"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";
import { profile } from "@/lib/data";

const headlineWords = profile.headline.split(" ");

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex flex-wrap items-center justify-center gap-2"
      >
        {profile.badges.map((b) => (
          <span
            key={b}
            className="glass rounded-full px-3 py-1 text-xs font-medium text-white/70"
          >
            {b}
          </span>
        ))}
      </motion.div>

      <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
        {headlineWords.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mr-[0.25em] inline-block"
          >
            {word === "web." ? (
              <span className="gradient-text">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 text-center text-lg text-white/60 sm:text-xl"
      >
        I&apos;m {profile.firstName}, a{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={profile.roles[roleIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="inline-block font-semibold text-white"
          >
            {profile.roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-5 max-w-xl text-pretty text-base text-white/50 sm:text-lg"
      >
        {profile.subheadline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.6 }}
        className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
      >
        <MagneticButton
          href="#projects"
          className="btn-primary rounded-full px-7 py-3 text-sm font-semibold text-white"
        >
          View my work
        </MagneticButton>
        <MagneticButton
          href="#contact"
          className="btn-ghost rounded-full px-7 py-3 text-sm font-semibold text-white"
        >
          Get in touch
        </MagneticButton>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5.5 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.a>
    </section>
  );
}
