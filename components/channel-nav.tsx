const CHANNELS = [
  { slug: 'reddit', name: 'Reddit' },
  { slug: 'facebook-groups', name: 'FB Groups' },
  { slug: 'discord', name: 'Discord' },
  { slug: 'whatsapp', name: 'WhatsApp' },
  { slug: 'telegram', name: 'Telegram' },
  { slug: 'threads-meta', name: 'Threads' },
  { slug: 'product-hunt', name: 'Product Hunt' },
  { slug: 'indie-hackers', name: 'Indie Hackers' },
  { slug: 'x', name: 'X' },
  { slug: 'linkedin', name: 'LinkedIn' },
  { slug: 'instagram-and-tiktok', name: 'IG/TikTok' },
  { slug: 'india-vernacular-short-video', name: 'India Vernacular' },
  { slug: 'warm-network', name: 'Warm Network' },
  { slug: 'cohort', name: 'Cohort' },
  { slug: 'offline', name: 'Offline' },
  { slug: 'email-follow-up', name: 'Email' },
  { slug: 'return-visit', name: 'Return Visit' },
  { slug: 'build-in-public-content', name: 'Build-in-Public' },
  { slug: 'ai-directories', name: 'AI Directories' },
];

export function ChannelNav() {
  return (
    <div className="my-6 rounded-md border border-fd-border bg-fd-card p-3">
      <div className="mb-2 font-mono text-xs uppercase tracking-wider text-fd-muted-foreground">
        Jump to channel
      </div>
      <div className="flex flex-wrap gap-1.5">
        {CHANNELS.map((c) => (
          <a
            key={c.slug}
            href={`#${c.slug}`}
            className="inline-flex items-center rounded-md border border-fd-border bg-fd-background px-2 py-1 font-mono text-[11px] text-fd-muted-foreground no-underline transition hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
}
