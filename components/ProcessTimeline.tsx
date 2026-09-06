"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ProcessTimeline({
  steps,
}: {
  steps: readonly { step: string; description: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <motion.div
        className="absolute left-0 top-4 hidden h-px w-full origin-left bg-line lg:block"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        aria-hidden
      />
      <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
        {steps.map((step, i) => (
          <motion.li
            key={step.step}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px 0px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <span className="relative z-10 grid size-8 place-items-center border border-ink bg-paper font-mono text-[11px] text-ink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-4 font-display text-base font-bold tracking-tight">
              {step.step}
            </h4>
            <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}