'use client';

import { useEffect, useState } from 'react';

type Pin = { id: string; slug: string; name: string };

const STORAGE_KEY = 'launchlab:shortlist';
const MAX_PINS = 5;
const EVENT = 'launchlab:shortlist:change';

function readPins(): Pin[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writePins(pins: Pin[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(pins));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    // ignore quota and private-mode errors
  }
}

export function TacticShortlist() {
  const [pins, setPins] = useState<Pin[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPins(readPins());
    function onChange() {
      setPins(readPins());
    }
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  function remove(id: string) {
    const next = pins.filter((p) => p.id !== id);
    writePins(next);
    setPins(next);
  }

  function clearAll() {
    writePins([]);
    setPins([]);
  }

  if (!mounted) {
    return (
      <div className="my-4 rounded-md border border-fd-border bg-fd-card p-3">
        <div className="font-mono text-xs uppercase tracking-wider text-fd-muted-foreground">
          Your shortlist
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-2 z-30 my-4 rounded-md border border-fd-border bg-fd-card/95 p-3 backdrop-blur">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-fd-muted-foreground">
          Your shortlist · {pins.length} of {MAX_PINS}
        </span>
        {pins.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="font-mono text-[10px] uppercase tracking-wider text-fd-muted-foreground hover:text-rose-500"
          >
            Clear
          </button>
        )}
      </div>
      {pins.length === 0 ? (
        <p className="text-xs text-fd-muted-foreground">
          Pin up to 5 tactics from the catalog below. Click the pin button next to any tactic title.
        </p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {pins.map((p) => (
            <span
              key={p.id}
              className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 font-mono text-xs text-emerald-700 dark:text-emerald-400"
            >
              <a href={`#${p.slug}`} className="no-underline text-inherit hover:underline">
                {p.name}
              </a>
              <button
                type="button"
                onClick={() => remove(p.id)}
                className="leading-none text-fd-muted-foreground hover:text-rose-500"
                aria-label={`Remove ${p.name} from shortlist`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function TacticPin({
  id,
  slug,
  name,
}: {
  id: string;
  slug: string;
  name: string;
}) {
  const [pins, setPins] = useState<Pin[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPins(readPins());
    function onChange() {
      setPins(readPins());
    }
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  const isPinned = pins.some((p) => p.id === id);
  const atMax = pins.length >= MAX_PINS;

  function toggle() {
    if (isPinned) {
      const next = pins.filter((p) => p.id !== id);
      writePins(next);
      setPins(next);
    } else if (!atMax) {
      const next = [...pins, { id, slug, name }];
      writePins(next);
      setPins(next);
    }
  }

  if (!mounted) {
    return (
      <span className="ml-2 inline-flex items-center rounded-md border border-fd-border bg-fd-card px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fd-muted-foreground">
        + Pin
      </span>
    );
  }

  const className = isPinned
    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    : atMax
    ? 'border-fd-border bg-fd-card text-fd-muted-foreground opacity-50 cursor-not-allowed'
    : 'border-fd-border bg-fd-card text-fd-muted-foreground hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400';

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={!isPinned && atMax}
      className={`ml-2 inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider transition ${className}`}
      title={isPinned ? 'Unpin' : atMax ? 'Shortlist full (5 of 5)' : 'Pin to shortlist'}
    >
      {isPinned ? 'Pinned' : '+ Pin'}
    </button>
  );
}
