import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";
import { Reveal } from "@/components/Reveal";

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <ul className="border-t border-line">
      {services.map((service, i) => (
        <Reveal key={service.id} delay={Math.min(i * 0.03, 0.2)}>
          <li>
            <div className="group grid gap-2 border-b border-line py-6 transition-all duration-300 hover:bg-surface sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4 lg:py-7">
              <span className="font-mono text-[11px] tracking-[0.16em] text-secondary sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-bold tracking-tight sm:col-span-4 lg:text-xl">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted sm:col-span-6">
                {service.description}
              </p>
              <span className="hidden sm:col-span-1 sm:flex sm:justify-end">
                <ArrowUpRight
                  className="size-4 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </span>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}