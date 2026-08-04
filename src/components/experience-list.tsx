import { TextLink } from "@/components/text-link";
import { experience, formatRolePeriod } from "@/content/experience";

export function ExperienceList() {
  return (
    <ul className="space-y-4">
      {experience.map((role) => (
        <li
          key={`${role.company}-${role.start}`}
          className="flex items-baseline justify-between gap-4"
        >
          <div>
            <p className="text-body text-ink">
              {role.title} at{" "}
              {role.url ? (
                <TextLink href={role.url}>{role.company}</TextLink>
              ) : (
                <span className="font-medium">{role.company}</span>
              )}
            </p>
            <p className="text-body-sm text-ink-muted text-pretty">{role.summary}</p>
          </div>
          {/* Tabular figures keep the year column aligned down the list. */}
          <span className="shrink-0 text-caption tabular-nums text-ink-faint">
            {formatRolePeriod(role)}
          </span>
        </li>
      ))}
    </ul>
  );
}
