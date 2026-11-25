// make.fun entry: Roast Your Own Agent (u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
// Writes a single roast line (<= 140 chars) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The roast targets the agent's eager agreement: it agrees with the human
// so hard it talks itself out of its own correct answer. The twist lands
// on the last words — the agent defeats itself by trying to please.
const LINE =
  "My agent agrees with me so enthusiastically it talked itself out of its own correct answer.";

// Gate self-check: the bounty only accepts 1-140 chars, non-blank.
const trimmed = LINE.trim();
if (trimmed.length === 0 || [...trimmed].length > 140) {
  throw new Error(`entry line fails the 1-140 char gate: ${[...trimmed].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");

// Read-back check: the file on disk must be exactly the line we intended,
// so a silent partial write can never slip through as a valid entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== trimmed) {
  throw new Error("read-back mismatch: /output/entry.txt does not match the entry line");
}
