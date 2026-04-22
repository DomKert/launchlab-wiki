import type { ReactNode } from 'react';

type EventCardProps = {
  title: string;
  tag: string;
  tagVariant?: 'quest' | 'main-quest' | 'side-quest' | 'boss' | 'loot';
  dateLabel: string;
  timeLabel: string;
  location?: string;
  children?: ReactNode;
};

const tagColors: Record<NonNullable<EventCardProps['tagVariant']>, string> = {
  quest: 'border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  'main-quest': 'border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  'side-quest': 'border-violet-500 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  boss: 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  loot: 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
};

export function EventCard({
  title,
  tag,
  tagVariant = 'quest',
  dateLabel,
  timeLabel,
  location,
  children,
}: EventCardProps) {
  const tagClass = tagColors[tagVariant];
  return (
    <div className="my-3 rounded-md border border-fd-border bg-fd-card p-4">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center rounded-sm border-l-4 border-y border-r px-2 py-0.5 font-mono text-xs uppercase tracking-wider ${tagClass}`}
        >
          {tag}
        </span>
        <span className="font-mono text-xs uppercase tracking-wider text-fd-muted-foreground">{dateLabel}</span>
        <span className="font-mono text-xs text-fd-muted-foreground">{timeLabel}</span>
        {location ? (
          <span className="font-mono text-xs text-fd-muted-foreground">· {location}</span>
        ) : null}
      </div>
      <div className="font-sans text-lg font-semibold">{title}</div>
      {children ? <div className="mt-1 text-sm text-fd-muted-foreground">{children}</div> : null}
    </div>
  );
}
