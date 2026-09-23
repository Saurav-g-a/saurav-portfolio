"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page rather than a client component per section:
 * reveals [data-reveal] elements, runs the stat counters, and drives the card
 * spotlight. Keeps every section a server component.
 */
export default function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduce) {
      revealables.forEach((el) => el.setAttribute("data-shown", ""));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = Number(el.dataset.revealDelay ?? 0);
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.setAttribute("data-shown", "");
            io.unobserve(el);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
      );
      revealables.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    const run = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (reduce) {
        el.textContent = String(target);
        return;
      }
      let start: number | null = null;
      const step = (ts: number) => {
        start ??= ts;
        const p = Math.min((ts - start) / 1100, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          run(entry.target as HTMLElement);
          cio.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => cio.observe(el));
    cleanups.push(() => cio.disconnect());

    if (!reduce && window.matchMedia("(hover: hover)").matches) {
      const onMove = (e: PointerEvent) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight");
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      document.addEventListener("pointermove", onMove);
      cleanups.push(() => document.removeEventListener("pointermove", onMove));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
