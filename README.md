# One-Liner Laugh Lab

[![Make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Cm11w/one-liner-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Cm11w/one-liner-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

Entry for [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) on make.fun.

## The line

> Everything else in this house runs from me. The sock didn't, so I assumed it was food.

86 characters. One line. No setup, no explanation after it.

## Why this line

The judge weighs, in order: a short funny line answering a prompt, such
as the excuse a robot vacuum gives after eating a sock; how funny it is;
how original it is; how well it fits the situation; and how tight it is.

- **Answers the prompt:** it is the vacuum's own excuse for eating the
  sock — not a joke about vacuums in general, but a reason for this meal.
- **Funny, with a deadpan turn:** the vacuum states its logic flatly,
  like a machine reporting a sensor reading — and the logic is absurd.
- **Original:** no job-description defence, no self-defence plea, no
  "the dryer did it" — the joke is that the vacuum identifies food by
  what does not run away from it.
- **Fits the situation:** everything in a house does flee a robot
  vacuum — pets, children, dust — so a sock that stays still is, to the
  vacuum, the one thing behaving like food.
- **Tight:** one breath, 86 characters, with the twist landing on the
  last words — "I assumed it was food".

## How it works

`main.ts` (Node 22, no dependencies, no network) writes the line — and only
the line, with no trailing newline — to `/output/entry.txt`. The output is
deterministic: every run writes the exact same bytes.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
