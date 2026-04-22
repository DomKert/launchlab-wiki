import type { ReactNode } from 'react';

type Variant =
  | 'quest'
  | 'main-quest'
  | 'side-quest'
  | 'boss'
  | 'loot'
  | 'xp'
  | 'patch-notes'
  | 'achievement'
  | 'tier-s'
  | 'tier-a'
  | 'tier-b'
  | 'tier-c'
  | 'tbd';

const styles: Record<Variant, string> = {
  quest: 'border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  'main-quest': 'border-amber-500 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  'side-quest': 'border-violet-500 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  boss: 'border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  loot: 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  xp: 'border-cyan-500 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  'patch-notes': 'border-zinc-500 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300',
  achievement: 'border-yellow-500 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
  'tier-s': 'border-amber-500 bg-amber-500/15 text-amber-700 dark:text-amber-300',
  'tier-a': 'border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  'tier-b': 'border-sky-500 bg-sky-500/15 text-sky-700 dark:text-sky-300',
  'tier-c': 'border-zinc-500 bg-zinc-500/15 text-zinc-700 dark:text-zinc-300',
  tbd: 'border-dashed border-fd-border bg-transparent text-fd-muted-foreground',
};

export function Badge({
  variant = 'quest',
  children,
}: {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-sm border-l-4 border-y border-r px-2 py-0.5 font-mono text-xs uppercase tracking-wider ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
