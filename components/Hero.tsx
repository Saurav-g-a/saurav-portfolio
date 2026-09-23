import { profile, stats } from "@/lib/data";
import { ArrowRight, LinkedIn, Mail, Phone } from "./Icons";
import { buttonGhost, buttonPrimary, Container, StatusDot } from "./ui";

const socials = [
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedIn, external: true },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone", Icon: Phone },
];

export default function Hero() {
  return (
    <section id="top" className="pb-10 pt-14 sm:pb-16 sm:pt-24 lg:pb-[72px] lg:pt-[120px]">
      <Container className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p
            data-reveal
            className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-[7px] pl-2.5 pr-3.5 font-mono text-[12.5px] text-ink-2"
          >
            <StatusDot />
            Open to senior frontend roles · Remote / Mohali / Chandigarh
          </p>

          <h1 data-reveal className="balance font-display text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl lg:text-[54px]">
            Hi, I&apos;m Saurav.
            <br />
            I build <span className="text-gradient">fast, polished</span> interfaces in React.
          </h1>

          <p data-reveal className="mt-[22px] max-w-[54ch] text-base text-ink-2 sm:text-[18.5px]">
            Senior Frontend Developer with <strong className="font-semibold text-ink">{profile.years}+ years</strong> in React and
            TypeScript. Last year I shipped <strong className="font-semibold text-ink">five Shopify apps</strong> to production on
            Polaris, after five years of client and product work in React and Next.js.
          </p>

          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <a className={buttonPrimary} href="#projects">
              See my work
              <ArrowRight />
            </a>
            <a className={buttonGhost} href="#contact">
              Get in touch
            </a>
          </div>

          <ul data-reveal aria-label="Contact links" className="mt-7 flex gap-2">
            {socials.map(({ href, label, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener" } : {})}
                  className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-line bg-surface text-ink-2 transition duration-300 ease-[var(--ease-out-back)] hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal aria-hidden="true" className="group relative">
          <div className="relative overflow-hidden rounded-[18px] border border-line-strong bg-code shadow-glow transition-transform duration-700 ease-[var(--ease-out-back)] [transform:perspective(1200px)_rotateY(-6deg)_rotateX(3deg)] group-hover:[transform:none] max-lg:[transform:none]">
            <div className="flex items-center gap-[7px] border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
              <em className="ml-auto font-mono text-xs not-italic text-[#7b869c]">developer.ts</em>
            </div>
            <pre className="max-w-full overflow-x-auto px-[22px] py-5 font-mono text-[13.5px] leading-[1.75] text-[#d5dbe7]">
              <code>
                <span className="tok-kw">const</span> <span className="tok-var">saurav</span> = {"{"}
                {"\n  "}
                <span className="tok-key">role</span>: <span className="tok-str">&quot;Senior Frontend Developer&quot;</span>,{"\n  "}
                <span className="tok-key">stack</span>: [<span className="tok-str">&quot;React&quot;</span>,{" "}
                <span className="tok-str">&quot;TypeScript&quot;</span>, <span className="tok-str">&quot;Next.js&quot;</span>],{"\n  "}
                <span className="tok-key">shopifyApps</span>: <span className="tok-num">5</span>,{" "}
                <span className="tok-cmt">// all in production</span>
                {"\n  "}
                <span className="tok-key">years</span>: <span className="tok-num">{profile.years}</span>,{"\n  "}
                <span className="tok-key">currently</span>: <span className="tok-str">&quot;360° product viewer&quot;</span>,{"\n  "}
                <span className="tok-key">openTo</span>: <span className="tok-str">&quot;senior roles&quot;</span>,{"\n"}
                {"};"}
              </code>
            </pre>
          </div>

          <div className="absolute -bottom-[18px] -left-[22px] hidden animate-floaty items-center gap-2 rounded-xl border border-line-strong bg-surface px-3.5 py-2.5 text-[13.5px] font-semibold shadow-card sm:inline-flex">
            <span className="h-[9px] w-[9px] rounded-full bg-brand" />
            React · TypeScript
          </div>
          <div
            className="absolute -right-[18px] -top-[26px] hidden animate-floaty items-center gap-2 rounded-xl border border-line-strong bg-surface px-3.5 py-2.5 text-[13.5px] font-semibold shadow-card sm:inline-flex"
            style={{ animationDelay: "-3s" }}
          >
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-brand font-display text-xs font-bold text-white">5</span>
            Shopify apps shipped
          </div>
        </div>
      </Container>

      <Container>
        <ul
          data-reveal
          aria-label="Highlights"
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:mt-16 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <li key={s.label} className="bg-surface px-6 py-[22px]">
              <span className="font-display text-[34px] font-extrabold tracking-[-0.03em]" data-count={s.value}>
                0
              </span>
              {s.suffix ? <span className="font-display text-[34px] font-extrabold tracking-[-0.03em] text-accent">{s.suffix}</span> : null}
              <span className="mt-1 block text-[13.5px] text-muted">{s.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
