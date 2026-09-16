/**
 * Captures project thumbnails into public/projects/.
 *
 * - Projects with a `live` URL get an above-the-fold screenshot (1280x800 JPEG).
 * - GitHub-only projects get their repo social-preview card (opengraph.githubassets.com).
 *
 * Run whenever a project site changes:  npm run capture
 * Files that already exist are overwritten; failures are skipped with a warning
 * so one downed site doesn't block the rest.
 */
import { chromium } from "playwright";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const OUT_DIR = path.join(ROOT, "public", "projects");
const PROJECTS_SRC = path.join(ROOT, "src", "lib", "projects.ts");

/** Parse {id, live?, github?} out of projects.ts without needing a TS loader. */
async function readProjects() {
  const src = await readFile(PROJECTS_SRC, "utf8");
  const projects = [];
  const idRegex = /id:\s*"([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(src)) !== null) {
    const id = match[1];
    const start = match.index;
    const next = src.indexOf('id: "', start + 1);
    const block = src.slice(start, next === -1 ? src.length : next);
    const live = block.match(/live:\s*"([^"]+)"/)?.[1];
    const github = block.match(/github:\s*"([^"]+)"/)?.[1];
    projects.push({ id, live, github });
  }
  return projects;
}

async function capturePage(browser, url, outFile) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2, // 2x for sharp rendering on retina displays
    ignoreHTTPSErrors: true,
  });
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 25000 });
  } catch {
    // Slow sites: settle for domcontentloaded plus a fixed settle time.
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 25000 });
  }
  await page.waitForTimeout(2500); // fonts, lazy images, entry animations
  await page.screenshot({ path: outFile, type: "jpeg", quality: 85 });
  await page.close();
}

async function downloadGitHubCard(repoUrl, outFile) {
  const repoPath = new URL(repoUrl).pathname.replace(/\/+$/, "");
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(`https://opengraph.githubassets.com/1${repoPath}`);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(outFile, buf);
      return;
    }
    lastError = new Error(`GitHub card fetch failed: ${res.status}`);
    await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
  }
  throw lastError;
}

const projects = await readProjects();
// Optional id filters: npm run capture -- 7review tenglaafi
const onlyIds = process.argv.slice(2);
const selected = onlyIds.length ? projects.filter((p) => onlyIds.includes(p.id)) : projects;
await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const failures = [];

for (const project of selected) {
  try {
    if (project.live) {
      await capturePage(browser, project.live, path.join(OUT_DIR, `${project.id}.jpg`));
      console.log(`✓ ${project.id} ← screenshot of ${project.live}`);
    } else if (project.github) {
      await downloadGitHubCard(project.github, path.join(OUT_DIR, `${project.id}.png`));
      console.log(`✓ ${project.id} ← GitHub card for ${project.github}`);
    } else {
      console.log(`- ${project.id}: no live or github URL, skipped`);
    }
  } catch (err) {
    failures.push(project.id);
    console.warn(`✗ ${project.id}: ${err.message}`);
  }
}

await browser.close();
if (failures.length) {
  console.warn(`\nFailed (no thumbnail written): ${failures.join(", ")}`);
}
console.log(`\nDone — ${selected.length - failures.length}/${selected.length} thumbnails in public/projects/`);
