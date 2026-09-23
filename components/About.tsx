import Image from "next/image";
import { profile } from "@/lib/data";
import { Cap, Globe, Pin } from "./Icons";
import { Section, StatusDot } from "./ui";

const facts = [
  { Icon: Pin, text: profile.location },
  { Icon: Globe, text: "On-site · Hybrid · Remote" },
  { Icon: Cap, text: "BCA, Himachal Pradesh University" },
];

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
        <div data-reveal className="space-y-[18px]">
          <p className="text-xl font-medium leading-[1.45] text-ink sm:text-[23px]">
            I&apos;m a frontend developer who cares about the details people actually notice: the click that doesn&apos;t reload the
            page, the form that never loses your input, the component that looks right on the first try.
          </p>
          <p className="text-[17px] text-ink-2">
            For the past year at <strong className="font-semibold text-ink">CollationHub</strong> I&apos;ve been building production
            Shopify apps for jewellery and e-commerce merchants. Product builders, real-time catalogues, sizers and configurators,
            where I own the React/TypeScript UI, the React Router architecture and the merchant-facing admin in Shopify Polaris. Five
            are live, a sixth is in progress.
          </p>
          <p className="text-[17px] text-ink-2">
            Before that I spent nearly five years at <strong className="font-semibold text-ink">Codenomad</strong>, moving from web
            design into engineering: turning Figma files into pixel-perfect React and Next.js products, building reusable component
            and design-system patterns that cut development time by a quarter, and keeping Core Web Vitals, WCAG and SEO in good
            shape. I started out at <strong className="font-semibold text-ink">IGeek Team</strong> redesigning client websites end to
            end.
          </p>
          <p className="text-[17px] text-ink-2">
            Six years in, what I care about is the craft: interfaces that load fast, work on every screen, and are still easy to
            maintain a year later.
          </p>
        </div>

        <aside data-reveal className="grid gap-[18px]">
          <div className="flex items-center gap-4 rounded-[18px] border border-line bg-surface px-5 py-[18px]">
            <Image
              src="/images/saurav.jpg"
              alt={profile.name}
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-full bg-brand object-cover object-[50%_30%] p-0.5 saturate-[0.85]"
            />
            <div>
              <p className="font-display text-[17px] font-bold">
                {profile.name}
                <span className="ml-1.5 font-mono text-[11.5px] font-medium text-muted">{profile.pronouns}</span>
              </p>
              <p className="mt-0.5 text-sm text-muted">{profile.role}</p>
            </div>
          </div>

          <div className="rounded-[18px] border border-line bg-surface bg-[linear-gradient(135deg,var(--accent-soft),transparent_70%)] px-[22px] py-5">
            <div className="mb-2.5 flex items-center gap-2.5 font-mono text-[12.5px] font-medium uppercase tracking-[0.1em] text-muted">
              <StatusDot />
              <span>Currently</span>
            </div>
            <p className="text-ink-2">
              Building a <strong className="font-semibold text-ink">360° product viewer</strong> for jewellery listings at
              CollationHub. A high-consideration purchase deserves a better look.
            </p>
          </div>

          <ul className="grid gap-3 px-1.5 pt-1">
            {facts.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-[15px] text-ink-2">
                <span className="shrink-0 text-accent">
                  <Icon />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
