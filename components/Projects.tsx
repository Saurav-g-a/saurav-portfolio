"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { filters, projects, type Category, type Project } from "@/lib/data";
import { ProjectIcon } from "./Icons";
import { Card, Tags } from "./ui";

function VisitLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent transition-[gap] duration-200 hover:gap-2.5 hover:underline hover:underline-offset-4"
    >
      Visit site <span aria-hidden="true">↗</span>
    </a>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <Card className="grid overflow-hidden sm:col-span-2 lg:grid-cols-[0.9fr_1.1fr]">
      <div aria-hidden="true" className="grid place-items-center border-b border-line bg-[linear-gradient(160deg,var(--surface-2),var(--surface))] p-7 lg:border-b-0 lg:border-r">
        <svg viewBox="0 0 320 200" className="w-full max-w-[320px]">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent-2)" />
            </linearGradient>
          </defs>
          <circle cx="160" cy="112" r="58" fill="none" stroke="url(#ringGrad)" strokeWidth="14" />
          <circle cx="160" cy="112" r="58" fill="none" stroke="var(--surface)" strokeWidth="4" opacity=".35" />
          <g transform="translate(160 42) rotate(45)">
            <rect x="-16" y="-16" width="32" height="32" rx="6" fill="url(#ringGrad)" />
            <rect x="-8" y="-8" width="16" height="16" rx="3" fill="#fff" opacity=".8" />
          </g>
          <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)">
            <text x="22" y="52">metal</text>
            <text x="252" y="52">stone</text>
            <text x="22" y="180">style</text>
            <text x="238" y="180">size</text>
          </g>
        </svg>
      </div>
      <div className="flex flex-col p-6 lg:py-7 lg:pl-1 lg:pr-7">
        <span className="mb-2.5 font-mono text-xs uppercase tracking-[0.08em] text-accent">Featured · Shopify + Standalone</span>
        <h3 className="mb-2 font-display text-2xl font-bold">{p.title}</h3>
        <p className="flex-1 text-[15px] text-ink-2">{p.description}</p>
        <Tags items={p.tags} className="mt-4" />
      </div>
    </Card>
  );
}

function ShotCard({ p }: { p: Project }) {
  return (
    <Card className="flex flex-col px-[22px] pb-[22px] pt-0 lg:px-[26px] lg:pb-[26px]">
      <a
        href={p.href}
        target="_blank"
        rel="noopener"
        tabIndex={-1}
        aria-hidden="true"
        className="group/shot -mx-[22px] mb-5 block overflow-hidden rounded-t-[18px] border-b border-line bg-surface-2 lg:-mx-[26px]"
      >
        <span className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-3.5 py-[9px]">
          <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
          <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
          <span className="ml-1.5 flex-1 truncate rounded-md bg-surface px-2.5 py-[3px] font-mono text-[11px] text-muted">
            {p.shot!.domain}
          </span>
        </span>
        <Image
          src={p.shot!.src}
          alt=""
          width={1200}
          height={750}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-back)] group-hover/shot:scale-[1.04]"
        />
      </a>
      <h3 className="mb-2 font-display text-[19px] font-bold">{p.title}</h3>
      <p className="flex-1 text-[15px] text-ink-2">{p.description}</p>
      <Tags items={p.tags} className="mt-4" />
      {p.href ? <VisitLink href={p.href} /> : null}
    </Card>
  );
}

function IconCard({ p }: { p: Project }) {
  return (
    <Card className="flex flex-col p-[22px] lg:p-[26px]">
      <div aria-hidden="true" className="mb-[18px] grid h-11 w-11 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
        <ProjectIcon name={p.icon ?? "gem"} />
      </div>
      <h3 className="mb-2 font-display text-[19px] font-bold">
        {p.title}
        {p.badge ? (
          <span className="ml-1.5 align-middle rounded-full border border-success/35 bg-success/[0.14] px-2 py-[3px] font-mono text-[11px] font-medium tracking-[0.04em] text-success">
            {p.badge}
          </span>
        ) : null}
      </h3>
      <p className="flex-1 text-[15px] text-ink-2">{p.description}</p>
      <Tags items={p.tags} className="mt-4" />
      {p.href ? <VisitLink href={p.href} /> : null}
    </Card>
  );
}

export default function Projects() {
  const [active, setActive] = useState<"all" | Category>("all");
  const gridRef = useRef<HTMLDivElement>(null);

  // Switching filters mounts fresh nodes, which the page-level observer in
  // ScrollEffects never sees. Re-observe this grid whenever the filter changes
  // so cards can't get stuck at opacity 0.
  useEffect(() => {
    const els = gridRef.current?.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])");
    if (!els?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-shown", "");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  const counts = useMemo(
    () => ({
      all: projects.length,
      shopify: projects.filter((p) => p.category === "shopify").length,
      saas: projects.filter((p) => p.category === "saas").length,
      web: projects.filter((p) => p.category === "web").length,
    }),
    [],
  );

  const shown = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="no-scrollbar -mt-2 mb-7 inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface p-1" data-reveal>
        {filters.map((f) => {
          const on = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.id)}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-[9px] text-sm font-semibold transition-colors ${
                on ? "bg-surface-2 text-ink shadow-[inset_0_0_0_1px_var(--border-strong),0_1px_2px_rgba(0,0,0,0.2)]" : "text-ink-2 hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {f.label}
              <span
                className={`inline-grid h-5 min-w-5 place-items-center rounded-full px-1.5 font-mono text-[11px] font-semibold ${
                  on ? "bg-brand text-white" : "bg-surface-2 text-muted"
                }`}
              >
                {counts[f.id]}
              </span>
            </button>
          );
        })}
      </div>

      <div ref={gridRef} className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <div key={p.title} data-reveal className={p.featured ? "sm:col-span-2" : ""}>
            {p.featured ? <FeaturedCard p={p} /> : p.shot ? <ShotCard p={p} /> : <IconCard p={p} />}
          </div>
        ))}
      </div>
    </div>
  );
}
