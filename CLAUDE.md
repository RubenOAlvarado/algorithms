[English](./CLAUDE.md) | [Español](./CLAUDE.es.md)

# CLAUDE.md

Guidance for contributors and coding agents working in this repository.

## What this repository is

A language-independent algorithm **learning workspace**, not an application. A
challenge is defined once in `challenges/<id>/README.md` (the contract) and may
be implemented in any subset of the languages under `languages/`. Most content
is documentation; the code exists to serve it.

## Commands

```bash
# Go (from languages/go)
go test ./tests/fizzbuzz

# TypeScript (from languages/typescript)
npm install
npm test -- tests/fizzbuzz.test.ts

# Java 21 (from languages/java)
mvn -Dtest=FizzBuzzTest test
```

Practice commands target incomplete starters and are intentionally red until a
learner implements the exercise. Do not describe that initial failure as a
known-broken repository state.

## Architecture

```
challenges/<id>/       README.md (contract) + reference.md + hints.md   ← language-independent
catalog.yml            canonical metadata: difficulty, topics, patterns, prerequisites
docs/                  learning-path, practice, review, templates, i18n-status
languages/<lang>/      starters/ · tests/ · solutions/ · manifest.yml
```

- `catalog.yml` is the single source of truth for difficulty/topic/prerequisite
  data; the `docs/` pages are human-friendly views of it and are maintained by
  hand, so they must be updated together.
- `challenges/<id>/README.md` defines learning goals, the problem, examples,
  constraints, a completion checklist, and links to each language's reference
  implementation. Language signatures for the same contract are recorded in
  `reference.md` (e.g. Java `List<String> generate(int n)`, TS
  `fizzBuzz(n: number): string[]`, Go `FizzBuzz(n int) []string`).
- Each language is an **independent build**. Adding a language never touches the
  others, and no challenge needs its own `go.mod`/`package.json`/`pom.xml`.
- Learners fork the repository and edit `starters/` in place. Contract tests
  target starters; keep starters free of solution detail and never use a copied
  practice workspace. Java uses one shared source tree under
  `starters/src/main/java/`; Go and TypeScript use one challenge directory per
  starter.
- The repository has no required scripts or tooling. An external `kata-smith`
  adapter may automate a workflow but is optional.

### Solution review lifecycle

`languages/<lang>/manifest.yml` is the source of truth for per-challenge status:
`legacy` (inherited, untrusted) → `draft` → `reviewed` → `verified` (contract
reviewed, tests passing). Only fizzbuzz is `verified` anywhere. The promotion
procedure is in `docs/solution-review.md`; write tests from the challenge
contract, not from existing code, audit edge cases, document complexity, and
confirm the starter leaks nothing. Verify references only with the temporary
substitution procedure documented there, then restore starters and test imports.
Entries marked `legacy` predate the workspace refactor. Treat them as unvetted,
and update the manifest whenever a solution's status changes.

### Per-language conventions

- **Go** — starters are edited in place and contract tests live under
  `tests/<challenge>/`. Reference solutions belong in `solutions/<challenge>/`.
- **TypeScript** — starters and contract tests are paired by challenge.
  Reference solutions belong in `solutions/<challenge>/`; use a temporary test
  import substitution only during maintainer verification.
- **Java** — all starters share `starters/src/main/java/`. Tests mirror packages
  under `tests/src/test/java/`; copy a reference over a starter only temporarily
  to verify it, then restore the starter.

### Documentation conventions

- Every doc is bilingual: `X.md` (English) and `X.es.md` (Spanish), both
  starting with the switcher line
  `[English](./X.md) | [Español](./X.es.md)`. Translation coverage is tracked
  in `docs/i18n-status.yml` — most challenge READMEs are still English-only and
  listed under `pending: es`.
- `reference.md` and `hints.md` are spoiler material for the tutor. Challenge
  READMEs link them explicitly as "consult only after an attempt"; do not fold
  their content into the challenge README.
- Adding or renaming a challenge means updating, at minimum: `catalog.yml`, the
  challenge list in `README.md` and `README.es.md`, `docs/difficulty.md`
  (including the per-section counts), `docs/learning-path.md`, the relevant
  `docs/topics/*.md` plus the coverage counts in `docs/topics/README.md`,
  `docs/i18n-status.yml`, and each language's `manifest.yml` — with the `.es.md`
  counterpart of every one of those.
- Challenge ids are kebab-case and identical across `challenges/`, `catalog.yml`,
  and every language directory. Prose is plain, imperative, and hard-wrapped at
  ~80 columns; `.editorconfig` enforces UTF-8 and LF.
