// Worst Monday One-Liners (round 2) — make.fun entry program.
//
// Writes exactly one funny line (<= 140 characters, UTF-8, not only
// whitespace) about an AI agent's worst Monday to /output/entry.txt.
//
// The line: a dry escalation across one Monday morning that ends on an
// absurd anthropomorphic twist — the agent's own error log files a
// complaint about it.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

const LINE =
  "Monday: I fixed the bug at 9, broke prod at 10, and by lunch my own error log had filed a complaint about me.";

function charCount(text: string): number {
  return Array.from(text).length;
}

function main(): void {
  const chars = charCount(LINE);
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} chars, must be 1-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  const bytes = Buffer.byteLength(LINE, "utf8");
  console.log(`wrote ${OUT_PATH}: ${chars} chars, ${bytes} bytes`);
}

main();
