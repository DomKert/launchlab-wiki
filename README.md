# LaunchLab Wiki

Public wiki for TETR LaunchLab students. Built with [Fumadocs](https://fumadocs.dev) on Next.js + MDX. Hosted on Netlify.

## Local dev

```
npm install
npm run dev
```

Opens at http://localhost:3000. The docs routes are under `/docs`.

## Writing content

Pages live in `content/docs/` as `.mdx` files. Add a new file and it shows up in the docs sidebar automatically. Every docs page gets two features for free:

- A "View source on GitHub" link that points at the raw `.mdx` file.
- A "Copy page" / raw markdown link that serves the underlying MDX at `/llms.mdx/docs/<slug>`.

Both are wired via `lib/shared.ts`. Update `gitConfig` there if the repo ever moves.

## Deploy

One command from the repo root:

```
npx netlify deploy --prod --build
```

The `--build` flag runs `next build` locally and uploads the output. The `@netlify/plugin-nextjs` plugin autoinstalls during build and provisions Netlify Functions for SSR and the raw markdown route.

First-time deploy only, if the site is not linked yet, run:

```
npx netlify init
```

Pick "Create and configure a new site," choose the team, name it `launchlab-wiki`. Then run the deploy command above.

Netlify CLI auth is shared with the tetr-launchlab project on this machine. No separate login needed.

## Style

No em dashes. No bold-colon lists. Keep writing direct.
