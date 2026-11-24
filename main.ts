// One Letter for Your Day — make.fun entry
// The entry is exactly one letter, A-Z, standing for the word that
// describes the day. The letter below stands for "zombie": a day run
// on zero sleep, shambling through every hour half-awake, funny
// because it is true, vivid because everyone has lived it, and the
// Z sound fits the word it stands for.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "Z";
const OUT_PATH = "/output/entry.txt";

// Guard: the gate only accepts exactly one character, A to Z, and
// nothing else. Refuse to write anything invalid rather than risk
// a 0 in the Valid column.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry letter must be a single A-Z character, got: ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LETTER, "utf8");
