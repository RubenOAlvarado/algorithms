[English](./practice.md) | [Español](./practice.es.md)

# Practice a challenge

Fork this repository, choose a challenge, and edit its starter in place. Do not
copy files into another workspace and do not edit `solutions/` while learning.

1. Fork and clone the repository.
2. Read the challenge contract in `challenges/<challenge>/README.md`.
3. Edit the matching file under `languages/<language>/starters/`. Go and
   TypeScript use one challenge directory; Java uses the shared Maven tree shown
   below.
4. Run that challenge's contract test from the language directory.
5. Repeat until the test passes, then consult reference material only if needed.

## FizzBuzz commands

| Language | Starter | Command |
| --- | --- | --- |
| Go | `languages/go/starters/fizzbuzz/main.go` | `cd languages/go && go test ./tests/fizzbuzz` |
| TypeScript | `languages/typescript/starters/fizzbuzz/fizzbuzz.ts` | `cd languages/typescript && npm install && npm test -- tests/fizzbuzz.test.ts` |
| Java | `languages/java/starters/src/main/java/dev/ruben/algorithms/fizzbuzz/FizzBuzz.java` | `cd languages/java && mvn -Dtest=FizzBuzzTest test` |

Tests begin red because starters are deliberately incomplete. That failure is
the starting signal for practice, not a repository defect. Reference solutions
are maintained separately; see [`solution-review.md`](./solution-review.md).
