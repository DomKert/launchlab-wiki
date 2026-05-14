#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..');
const SOURCE_DIR = path.join(ROOT, 'scripts/source');
const OUT_PARENT = path.join(ROOT, 'public/files');
const OUT_DIR = path.join(OUT_PARENT, 'launchlab-pack');
const OUT_ZIP = path.join(OUT_PARENT, 'launchlab-project-pack.zip');

// Three canonical context files. Drop into a Claude Project, ChatGPT Project,
// or Codex working directory as knowledge files. Fits ChatGPT free's 5-file
// Project cap with two slots free for files the founder builds during the weekend.
const FILES = ['context.md', 'prompts.md', 'tactics.md'];

async function main() {
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  for (const filename of FILES) {
    const src = path.join(SOURCE_DIR, filename);
    const dst = path.join(OUT_DIR, filename);
    const content = await fs.readFile(src, 'utf8');
    await fs.writeFile(dst, content, 'utf8');
    console.log(`  ${filename} (${content.length} chars)`);
  }

  await fs.rm(OUT_ZIP, { force: true });
  execSync(
    `cd "${OUT_PARENT}" && zip -rq launchlab-project-pack.zip launchlab-pack`,
    { stdio: 'inherit' }
  );

  const zipStats = await fs.stat(OUT_ZIP);
  console.log(`  launchlab-project-pack.zip (${zipStats.size} bytes)`);
  console.log('Project pack built.');
}

main().catch((err) => {
  console.error('Project pack build failed:', err.message);
  process.exit(1);
});
