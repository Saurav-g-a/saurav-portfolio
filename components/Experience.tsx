import { jobs } from "@/lib/data";
import { Card, Section, Tags } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative grid gap-7">
        {/* The rail: sits on the markers at every breakpoint. */}
        <span
          aria-hidden="true"
          className="absolute bottom-3 top-3 w-px bg-[linear-gradient(to_bottom,var(--accent),var(--border)_30%,var(--border)_70%,transparent)] left-[5px] lg:left-[191px]"
        />

        {jobs.map((job) => (
          <li
            key={job.company}
            data-reveal
            className="grid items-start gap-x-5 [grid-template-columns:12px_minmax(0,1fr)] lg:[grid-template-columns:170px_44px_minmax(0,1fr)] lg:gap-x-0"
          >
            <span
              aria-hidden="true"
              className="relative mt-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_var(--accent-soft)] [grid-area:1/1] lg:mx-auto lg:mt-[26px] lg:[grid-area:1/2]"
            />

            <div className="mb-2.5 flex flex-wrap gap-x-3 gap-y-1 [grid-area:1/2] lg:mb-0 lg:grid lg:gap-1 lg:pt-[22px] lg:text-right lg:[grid-area:1/1]">
              <span className="whitespace-nowrap font-mono text-[13px] font-medium text-ink">{job.date}</span>
              <span className="text-[13px] text-muted">{job.location}</span>
            </div>

            <Card className="p-6 [grid-area:2/2] lg:p-[26px] lg:[grid-area:1/3]">
              <header className="mb-[18px] border-b border-line pb-4">
                <h3 className="font-display text-[21px] font-extrabold">{job.company}</h3>
                <p className="mt-1 text-sm text-muted">{job.summary}</p>
              </header>

              {job.roles.map((role, i) => (
                <div key={role.title} className={i > 0 ? "mt-[22px] border-t border-dashed border-line-strong pt-[22px]" : ""}>
                  <div className="mb-3 flex flex-col flex-wrap items-baseline justify-between gap-x-4 gap-y-1 sm:flex-row">
                    <h4 className="font-display text-[16.5px] font-bold text-accent">{role.title}</h4>
                    <span className="font-mono text-[12.5px] font-medium text-muted">{role.date}</span>
                  </div>
                  <ul className="grid gap-2.5">
                    {role.bullets.map((b) => (
                      <li key={b} className="relative pl-[18px] text-[15px] text-ink-2">
                        <span aria-hidden="true" className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <Tags items={job.tags} className="mt-[18px]" />
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
