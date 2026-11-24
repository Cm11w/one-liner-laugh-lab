import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: the excuse a robot vacuum gives after
// eating a sock. The joke is deadpan vacuum logic — everything in the
// house runs from the vacuum, so the one thing that stayed still must
// be food — the vacuum identifies food by what does not flee. The twist
// lands on the last words ("I assumed it was food").
// The file holds exactly this line: no trailing newline, so the gate
// counts the line alone.
const LINE =
  "Everything else in this house runs from me. The sock didn't, so I assumed it was food.";

// No network, no randomness, no environment reads: the same bytes every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
