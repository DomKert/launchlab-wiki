#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, '..');
const SOURCE = path.join(ROOT, 'content/docs/claude-project/core-files.mdx');
const PROMPTS_DIR = path.join(ROOT, 'content/docs/prompts');
const PROMPTS_META = path.join(PROMPTS_DIR, 'meta.json');
const DISTRIBUTION_SOURCE = path.join(ROOT, 'content/docs/playbook/distribution/index.mdx');
const OUT_PARENT = path.join(ROOT, 'public/files');
const OUT_DIR = path.join(OUT_PARENT, 'launchlab-pack');
const OUT_ZIP = path.join(OUT_PARENT, 'launchlab-project-pack.zip');
const WIKI_BASE = 'https://launchlab-wiki.netlify.app';

// Meta guide intentionally excluded. It's pasted as the Custom Instructions
// system prompt in Step 2, not uploaded as a knowledge file.
const FILES = [
  { heading: '## 2. Tool matrix (abridged)', filename: 'tool-matrix.md' },
  { heading: '## 3. Program overview', filename: 'program-overview.md' },
  { heading: '## 4. Day checklist', filename: 'day-checklist.md' },
  { heading: '## 5. Voice guide', filename: 'voice-guide.md' },
];

const README = `LaunchLab Claude Project Knowledge Pack
========================================

6 knowledge files for your Claude Project. Drag all 6 into Files + on your Project.

The Meta guide (system prompt) is NOT in this pack. Copy it directly from the wiki at /docs/claude-project/core-files and paste into the Project's Custom Instructions field.

Full walkthrough: https://launchlab-wiki.netlify.app/docs/claude-project/setup
`;

function parseFrontmatter(mdx) {
  const match = mdx.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return {};
  const out = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return out;
}

function stripJsx(mdx) {
  return mdx
    .replace(/^---[\s\S]+?---\n/, '')
    .replace(/{`[^`]*`}/g, '')
    .replace(/{['"][^'"]*['"]}/g, '')
    .replace(/<\/?[A-Za-z][^>]*\/?>/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

async function buildDistributionDoctrine() {
  const mdx = await fs.readFile(DISTRIBUTION_SOURCE, 'utf8');
  const fm = parseFrontmatter(mdx);
  const body = stripJsx(mdx);
  const header = [
    `# ${fm.title || 'Distribution'}`,
    '',
    fm.description || '',
    '',
    `Source: ${WIKI_BASE}/docs/playbook/distribution`,
    '',
    '---',
    '',
  ].join('\n');
  return header + body + '\n';
}

async function buildPromptIndex() {
  const meta = JSON.parse(await fs.readFile(PROMPTS_META, 'utf8'));
  const lines = [
    'LaunchLab Spellbook Index',
    '==========================',
    '',
    '14 prompts you will use across the weekend, grouped by category. The full prompt text lives at the wiki URL. This index helps Claude route you to the right prompt when you are not sure what to ask for next.',
    '',
  ];

  let currentCategory = null;
  for (const slug of meta.pages) {
    if (slug === 'index') continue;
    const categoryMatch = slug.match(/^---(.+?)---$/);
    if (categoryMatch) {
      currentCategory = categoryMatch[1].trim().toUpperCase();
      lines.push('');
      lines.push(currentCategory);
      lines.push('-'.repeat(currentCategory.length));
      continue;
    }
    const file = path.join(PROMPTS_DIR, `${slug}.mdx`);
    const mdx = await fs.readFile(file, 'utf8');
    const fm = parseFrontmatter(mdx);
    lines.push('');
    lines.push(`- ${fm.title || slug}`);
    if (fm.description) lines.push(`  ${fm.description}`);
    lines.push(`  ${WIKI_BASE}/docs/prompts/${slug}`);
  }
  lines.push('');
  return lines.join('\n');
}

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

  const promptIndex = await buildPromptIndex();
  await fs.writeFile(path.join(OUT_DIR, 'prompt-index.md'), promptIndex, 'utf8');
  console.log(`  prompt-index.md (${promptIndex.length} chars)`);

  const distribution = await buildDistributionDoctrine();
  await fs.writeFile(path.join(OUT_DIR, 'distribution.md'), distribution, 'utf8');
  console.log(`  distribution.md (${distribution.length} chars)`);

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
