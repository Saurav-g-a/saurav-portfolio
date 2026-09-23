"use client";

import { useCallback, useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { Download, Moon, Sun } from "./Icons";
import { Container } from "./ui";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Crossing back to the desktop breakpoint should never strand the menu open.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && close();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [close]);

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "light" ? "#f6f7fb" : "#0b0f17");
  };

  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[39] bg-[rgba(2,5,12,0.55)] backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        className={`sticky top-0 z-50 border-b bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] backdrop-blur-[14px] backdrop-saturate-150 transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <a href="#top" aria-label={`${profile.name}, home`} className="inline-flex items-center gap-2.5 font-display text-lg font-extrabold">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-brand text-white shadow-[0_6px_18px_-6px_var(--accent)]">S</span>
            <span>
              Saurav<span className="text-accent">.</span>
            </span>
          </a>

          <nav
            id="nav-menu"
            aria-label="Primary"
            className={`
              fixed right-4 top-[80px] z-[41] flex w-[min(260px,calc(100vw-2rem))] flex-col items-stretch gap-0.5 rounded-2xl border border-line-strong bg-elev p-2 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.6)] transition duration-300 ease-[var(--ease-out-back)] sm:right-10
              lg:static lg:w-auto lg:flex-row lg:gap-1 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none
              ${open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:scale-100"}
            `}
            style={{ transformOrigin: "top right" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`relative flex items-center rounded-[10px] px-3.5 py-[11px] text-[15.5px] font-medium leading-tight transition-colors lg:rounded-full lg:py-2 lg:text-[14.5px] ${
                  active === l.href ? "bg-accent-soft text-ink lg:bg-transparent" : "text-ink-2 hover:bg-accent-soft hover:text-ink"
                }`}
              >
                {l.label}
                {active === l.href ? (
                  <span aria-hidden="true" className="absolute inset-x-3.5 bottom-[3px] hidden h-0.5 rounded-sm bg-brand lg:block" />
                ) : null}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={close}
              className="mt-1.5 flex items-center justify-center gap-2 rounded-[10px] bg-brand px-3.5 py-3 font-semibold text-white lg:hidden"
            >
              <Download size={16} />
              Download resume
            </a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle colour theme"
              title="Toggle theme"
              className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-ink-2 transition hover:-translate-y-px hover:border-line-strong hover:text-ink"
            >
              <span className="hidden [:root[data-theme=light]_&]:block">
                <Sun />
              </span>
              <span className="block [:root[data-theme=light]_&]:hidden">
                <Moon />
              </span>
            </button>

            <a href={profile.resume} download className="hidden items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_var(--accent)] transition hover:-translate-y-0.5 lg:inline-flex">
              <Download size={16} />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-line bg-surface text-ink-2 transition hover:border-line-strong hover:text-ink lg:hidden"
            >
              <span className={`h-0.5 w-[18px] rounded-sm bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-0.5 w-[18px] rounded-sm bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-[18px] rounded-sm bg-current transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </Container>
      </header>
    </>
  );
}
