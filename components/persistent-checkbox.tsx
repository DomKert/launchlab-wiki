'use client';

import { useEffect, useState } from 'react';

export function PersistentCheckbox({
  id,
  label,
}: {
  id: string;
  label: string;
}) {
  const storageKey = `launchlab:${id}`;
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw === '1') setChecked(true);
    } catch {
      // ignore storage errors (private mode, quota)
    }
  }, [storageKey]);

  function toggle(next: boolean) {
    setChecked(next);
    try {
      window.localStorage.setItem(storageKey, next ? '1' : '0');
    } catch {
      // ignore
    }
  }

  return (
    <label className="flex cursor-pointer select-none items-center gap-2 rounded-md border border-fd-border bg-fd-card px-3 py-2 font-mono text-sm transition hover:bg-fd-muted">
      <input
        type="checkbox"
        checked={mounted ? checked : false}
        onChange={(e) => toggle(e.target.checked)}
        className="h-4 w-4 accent-emerald-500"
      />
      <span className={mounted && checked ? 'line-through text-fd-muted-foreground' : ''}>
        {label}
      </span>
      {mounted && checked ? (
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          +10 XP
        </span>
      ) : null}
    </label>
  );
}
