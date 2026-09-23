import { profile } from "@/lib/data";
import { LinkedIn, Mail, Phone } from "./Icons";
import { buttonGhost, buttonPrimary, Container } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-[28px] border border-line-strong bg-surface p-9 text-center shadow-card sm:p-12 lg:p-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-[20%] -inset-y-[40%] z-0 bg-[radial-gradient(600px_circle_at_20%_20%,var(--accent-soft),transparent_50%),radial-gradient(600px_circle_at_80%_90%,color-mix(in_srgb,var(--accent-2)_16%,transparent),transparent_50%)]"
          />
          <div className="relative z-10">
            <span className="font-mono text-[13px] font-medium tracking-[0.08em] text-accent">06</span>
            <h2 className="mb-4 mt-2.5 font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Let&apos;s build something together.
            </h2>
            <p className="mx-auto max-w-[56ch] text-[17px] text-ink-2">
              I&apos;m open to senior frontend roles in React, TypeScript, Next.js or Shopify, remote or around Mohali and
              Chandigarh. If you&apos;ve got an interesting product and a team that ships, I&apos;d love to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 max-sm:[&>a]:w-full">
              <a className={buttonPrimary} href={`mailto:${profile.email}`}>
                <Mail />
                {profile.email}
              </a>
              <a className={buttonGhost} href={profile.linkedin} target="_blank" rel="noopener">
                <LinkedIn size={18} />
                LinkedIn
              </a>
              <a className={buttonGhost} href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone />
                {profile.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
