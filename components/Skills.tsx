import { skillGroups } from "@/lib/data";
import { Card, Section } from "./ui";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-[18px] lg:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} data-reveal>
            <Card className="h-full p-6 lg:p-[26px]">
              <h3 className="mb-4 font-display text-[15px] font-bold uppercase tracking-[0.08em] text-muted">{g.title}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-xl border border-line bg-surface-2 px-3.5 py-[9px] text-sm font-medium text-ink transition duration-200 ease-[var(--ease-out-back)] hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
