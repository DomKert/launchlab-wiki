#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..');
const SOURCE = path.join(ROOT, 'content/docs/claude-project/core-files.mdx');
const OUT_PARENT = path.join(ROOT, 'public/files');
const OUT_DIR = path.join(OUT_PARENT, 'launchlab-pack');
const OUT_ZIP = path.join(OUT_PARENT, 'launchlab-project-pack.zip');

const FILES = [
  { heading: '## 1. Meta guide', filename: 'meta-guide.md' },
  { heading: '## 2. Tool matrix (abridged)', filename: 'tool-matrix.md' },
  { heading: '## 3. Program overview', filename: 'program-overview.md' },
  { heading: '## 4. Day checklist', filename: 'day-checklist.md' },
  { heading: '## 5. Voice guide', filename: 'voice-guide.md' },
];

const README = `LaunchLab Claude Project Pack
==============================

This pack contains 5 files for setting up your Claude Project on Day 1 morning.

Setup:
1. Create a new Claude Project at claude.ai (Projects, then New Project).
2. Open meta-guide.md, copy the contents, paste into the Project's Custom Instructions field.
3. Upload all 5 files (meta-guide.md, tool-matrix.md, program-overview.md, day-checklist.md, voice-guide.md) as knowledge files via Files +, Add text content (or drag and drop).
4. Open a new chat, turn on Adaptive Thinking, run Prompt 1 from the wiki.

Full walkthrough: https://launchlab-wiki.netlify.app/docs/claude-project/setup
Wiki: https://launchlab-wiki.netlify.app

This pack is auto-regenerated on every wiki build, so it stays in sync with the source.
`;

async function main() {
  const source = await fs.readFile(SOURCE, 'utf8');

  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });

  for (let i = 0; i < FILES.length; i++) {
    const { heading, filename } = FILES[i];
    const nextHeading = FILES[i + 1]?.heading;

    const startIdx = source.indexOf(heading);
    if (startIdx === -1) {
      throw new Error(`Heading not found in core-files.mdx: ${heading}`);
    }
    const endIdx = nextHeading ? source.indexOf(nextHeading) : source.length;
    const section = source.slice(startIdx, endIdx);

    const codeMatch = section.match(/```txt\n([\s\S]+?)\n```/);
    if (!codeMatch) {
      throw new Error(`No txt code block in section: ${heading}`);
    }

    const content = codeMatch[1] + '\n';
    await fs.writeFile(path.join(OUT_DIR, filename), content, 'utf8');
    console.log(`  ${filename} (${content.length} chars)`);
  }

  await fs.writeFile(path.join(OUT_DIR, 'README.txt'), README, 'utf8');

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
