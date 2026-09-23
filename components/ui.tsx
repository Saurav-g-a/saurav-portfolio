import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(1120px,100%-2rem)] sm:w-[min(1120px,100%-5rem)] ${className}`}>{children}</div>;
}

export function Section({
  id,
  index,
  title,
  sub,
  children,
  tight = false,
}: {
  id: string;
  index: string;
  title: string;
  sub?: string;
  children: ReactNode;
  tight?: boolean;
}) {
  return (
    <section id={id} className={`${tight ? "pb-16 sm:pb-24 lg:pb-28" : "py-16 sm:py-24 lg:py-28"}`}>
      <Container>
        <div data-reveal className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-3 sm:mb-12">
          <span className="font-mono text-[13px] font-medium tracking-[0.08em] text-accent">{index}</span>
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-[44px]">{title}</h2>
          {sub ? <p className="basis-full text-[16.5px] text-muted">{sub}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`spotlight relative rounded-[18px] border border-line bg-surface transition duration-300 ease-[var(--ease-out-back)] hover:-translate-y-[3px] hover:border-line-strong hover:shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Tags({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line bg-surface-2 px-[11px] py-[5px] font-mono text-xs font-medium text-ink-2">
          {t}
        </li>
      ))}
    </ul>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-transparent text-[15px] font-semibold leading-none transition duration-300 ease-[var(--ease-out-back)] hover:-translate-y-0.5 active:translate-y-0";

export const buttonPrimary = `${buttonBase} bg-brand px-[22px] py-[13px] text-white shadow-[0_10px_30px_-12px_var(--accent)] hover:shadow-[0_16px_40px_-12px_var(--accent)]`;
export const buttonGhost = `${buttonBase} border-line bg-surface px-[22px] py-[13px] text-ink hover:border-line-strong hover:bg-surface-2`;

export function StatusDot() {
  return <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-success animate-ping-soft" />;
}
