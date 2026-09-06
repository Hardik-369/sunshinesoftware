"use client";

import { motion, useReducedMotion } from "framer-motion";

export function JourneyTimeline({
  steps,
}: {
  steps: readonly { step: string; description: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-line pt-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
        The internship journey
      </p>
      <ol className="mt-8 grid gap-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, i) => (
          <motion.li
            key={step.step}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px 0px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-8 shrink-0 place-items-center border border-ink bg-paper font-mono text-[11px] text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="h-px flex-1 bg-line"
                aria-hidden
              />
            </div>
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