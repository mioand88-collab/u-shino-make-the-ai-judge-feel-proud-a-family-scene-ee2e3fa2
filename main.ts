// Make the AI Judge Feel Proud: A Family Scene
// Writes one fixed, deterministic family scene (1-2 lines, <=280 chars)
// to /output/entry.txt. No randomness, no time or network input.

import { mkdirSync, writeFileSync } from "node:fs";

// Revised scene: the joke lands sooner ("still pretends"), the payoff is
// a concrete action (she slides the dog the bigger half), and the whole
// moment fits in two breaths. One telling domestic detail, no greeting-card line.
const SCENE =
  "Every Sunday, Dad sets a place for the dog at dinner and Mum still " +
  "pretends not to notice — until last week, when she cut the roast in " +
  "two and slid the dog the bigger half.";

// The gate allows 1-280 characters; keep the scene well inside it.
if (SCENE.length > 280) {
  throw new Error(`scene is ${SCENE.length} characters, over the 280 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SCENE, "utf8");
