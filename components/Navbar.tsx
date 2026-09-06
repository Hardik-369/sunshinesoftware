"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { company, navLinks } from "@/data/company";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    for (const link of navLinks) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu with Escape, and when resizing back to desktop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-line bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="#top"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
          aria-label={`${company.name} — home`}
        >
          <Image
            src={company.logo}
            alt=""
            width={company.logoWidth}
            height={company.logoHeight}
            className="h-9 w-auto shrink-0 object-contain sm:h-11"
            aria-hidden
          />
          <span className="truncate font-display text-lg font-bold tracking-tight sm:text-xl">
            {company.wordmark}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200",
                active === link.id
                  ? "text-ink"
                  : "text-muted hover:text-ink",
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -left-2.5 top-1/2 size-1 -translate-y-1/2 bg-terracotta"
                  aria-hidden
                />
              )}
              {link.label}
            </a>
          ))}
          <a
            href={company.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors duration-200 hover:bg-terracotta"
          >
            Start a Conversation
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid size-10 shrink-0 place-items-center border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      </header>

      {/* Mobile menu — rendered outside <header> so the header's
          backdrop-filter cannot become the containing block for this
          fixed overlay (which would clip it to a sliver). */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto overscroll-contain border-t border-line bg-paper px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-4 md:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => {
                const isActive = active === link.id;
                return (
                  <motion.li
                    key={link.id}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-line py-5 font-display text-2xl font-bold tracking-tight transition-colors duration-200",
                        isActive ? "text-terracotta" : "text-ink",
                      )}
                    >
                      {link.label}
                      <ArrowRight
                        className={cn(
                          "size-5 transition-colors duration-200",
                          isActive ? "text-terracotta" : "text-secondary",
                        )}
                        aria-hidden
                      />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <a
              href={company.contactFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center gap-2 bg-ink px-5 py-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper"
            >
              Start a Conversation
              <ArrowRight className="size-3.5" aria-hidden />
            </a>
            <p className="mt-10 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
              {company.tagline}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}