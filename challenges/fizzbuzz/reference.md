[English](./reference.md) | [Español](./reference.es.md)

# FizzBuzz reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Intuition

Process every integer from `1` through `n` exactly once. For each value, choose
one representation and append it to the result.

## Invariant / key idea

After processing a value, the result contains exactly one correct representation
for every integer from `1` through that value. Check the combined case before
either individual case.

The combined divisibility case must be evaluated before the individual cases.
Otherwise, `15` would match the multiple-of-3 rule first and incorrectly become
`"Fizz"`.

## Complexity

- Time: `O(n)` because every input value is examined once.
- Space: `O(n)` because the returned collection contains `n` elements.

The output itself requires linear space, so the reference implementation does
not attempt to reduce this further.

## Alternatives

The recommended approach uses ordered conditions: check the combined case, then
each individual divisor, then the decimal representation. It makes precedence
explicit and is straightforward to explain.

An alternative composes a string by appending `"Fizz"` and `"Buzz"` when their
respective divisibility checks succeed, then uses the decimal representation if
it remains empty. This avoids an explicit combined branch, but adds mutable
intermediate state and can make the fallback less immediate to read.

## Common mistakes

- Returning an empty result for a positive input.
- Starting at `0`, stopping before `n`, or otherwise using the wrong limits.
- Returning numbers instead of their required string representation.
- Applying a divisibility rule incorrectly.
- Checking an individual case before the combined case.
- Producing more or fewer than `n` results.

The indicated contract tests cover empty output, limits, representation,
divisibility, combined-case order, and result count or length.

## Follow-up interview questions

- How would the design change for an arbitrary list of divisors and labels?
- Can the result be streamed instead of stored when callers do not need a slice?
- What invariant would you use to prove the loop is correct?

## Language signatures

- Java: `List<String> generate(int n)`
- TypeScript: `fizzBuzz(n: number): string[]`
- Go: `FizzBuzz(n int) []string`

The syntax differs, but all implementations follow the same contract.
