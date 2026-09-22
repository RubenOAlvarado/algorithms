[English](./solution-review.md) | [Español](./solution-review.es.md)

# Reference solution review

Existing implementations begin as `legacy`. A solution becomes `verified` only
after this review and its language verification pass.

## Seven-step flow

1. Define or confirm the language-independent challenge contract.
2. Write independent tests from that contract, never from existing code.
3. Audit correctness, boundaries, representation, and language-specific edges.
4. Select and review a clear reference implementation.
5. Consider reasonable alternatives and record why the reference is preferred.
6. Write an explanation covering the key idea, invariant, and complexity.
7. Verify the reference against the contract tests and update its manifest status.

`kata-smith` can automate parts of this flow when available, but it is not
required and this repository has no required scripts or tooling of its own.

## Test design and mutation check

Tests must fail for frequent mistakes: returning an empty result, wrong loop
limits, wrong representation, incorrect divisibility, wrong combined-case order,
and wrong output count or length. Confirm this manually by making a small
intentional mutation for each relevant mistake and observing the expected test
failure. Restore the implementation after each check.

## Maintainer verification procedure

Practice tests point at starters and are intentionally red. To verify a
reference without changing the learner model:

- Go and TypeScript: temporarily change the challenge test import from the
  starter to the solution, run the challenge test, then revert that import.
- Java: temporarily copy the solution source over the matching starter source,
  run `mvn -Dtest=FizzBuzzTest test`, then restore the starter source.

Do not leave these substitutions in the working tree. The recorded status in
`languages/<language>/manifest.yml` is the source of truth.

## Statuses

- `legacy`: preserved from the original repository and not yet trusted as a reference.
- `draft`: actively being changed or reviewed.
- `reviewed`: contract and implementation reviewed, but not fully tested locally.
- `verified`: review complete and automated tests passing.

## Eight-point rubric

Record each criterion as `pass` in the manifest only when it meets this bar:

1. **Correctness**: the reference satisfies the complete contract.
2. **Clarity**: names and control flow make the approach easy to follow.
3. **Complexity**: time and space costs are appropriate and documented.
4. **Idiomatic usage**: the implementation follows the language's conventions.
5. **Testability**: behavior is returned rather than hidden behind I/O or state.
6. **Edge cases**: boundaries and common failures are covered by tests.
7. **Pedagogical value**: the reference teaches the key idea without needless
   abstraction.
8. **Consistency**: contract, tests, reference, explanation, and manifest agree.

The corresponding manifest keys are `correctness`, `clarity`, `complexity`,
`idiomatic_usage`, `testability`, `edge_cases`, `pedagogical_value`, and
`consistency`.
