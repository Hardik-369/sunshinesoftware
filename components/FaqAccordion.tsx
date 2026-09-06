"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={`faq-button-${i}`}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpenIndex(open ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-bold tracking-tight sm:text-lg">
                    {item.question}
                  </span>
                </span>
                <span
                  className={cn(
                    "grid size-7 shrink-0 place-items-center border transition-all duration-300",
                    open ? "rotate-45 border-ink" : "border-line",
                  )}
                  aria-hidden
                >
                  <Plus className="size-3.5" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!open}
            >
              <p className="max-w-2xl pb-6 pl-9 pr-2 text-sm leading-relaxed text-muted sm:pl-11">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}