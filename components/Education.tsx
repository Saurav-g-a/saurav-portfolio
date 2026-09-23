import { education } from "@/lib/data";
import { Card, Section } from "./ui";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education" tight>
      <div className="grid gap-[18px] lg:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} data-reveal>
            <Card className="h-full p-6 lg:p-[26px]">
              <span className="font-mono text-[12.5px] font-medium text-accent">{e.years}</span>
              <h3 className="mb-1.5 mt-2 font-display text-lg font-bold">{e.title}</h3>
              <p className="text-[15px] text-ink-2">{e.place}</p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
