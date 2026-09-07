# FizzBuzz reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Reasoning

Process every integer from `1` through `n` exactly once. For each value, choose
one representation and append it to the result.

The combined divisibility case must be evaluated before the individual cases.
Otherwise, `15` would match the multiple-of-3 rule first and incorrectly become
`"Fizz"`.

## Complexity

- Time: `O(n)` because every input value is examined once.
- Space: `O(n)` because the returned collection contains `n` elements.

The output itself requires linear space, so the reference implementation does
not attempt to reduce this further.

## Common mistakes

- Checking divisibility by 3 before checking divisibility by both 3 and 5.
- Printing values instead of returning them, which makes testing harder.
- Producing more or fewer than `n` elements.
- Starting the loop at `0` or stopping before `n`.

## Language signatures

- Java: `List<String> generate(int n)`
- TypeScript: `string[] fizzBuzz(number n)`
- Go: `[]string FizzBuzz(int n)`

The syntax differs, but all implementations follow the same contract.
