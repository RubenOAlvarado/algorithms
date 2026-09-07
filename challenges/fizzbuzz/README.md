[English](./README.md) | [Español](./README.es.md)

# FizzBuzz

## Learning goals

- Translate rules into ordered conditions.
- Use iteration to build a result.
- Recognize overlapping conditions.
- Explain linear time complexity.

## Problem

Given a non-negative integer `n`, return the representations of every integer
from `1` through `n`, in order:

- Multiples of `3` become `"Fizz"`.
- Multiples of `5` become `"Buzz"`.
- Multiples of both `3` and `5` become `"FizzBuzz"`.
- Every other value becomes its decimal representation.

Do not print from the algorithm. Return the complete collection so callers can
decide how to display or use it.

## Examples

```text
n = 5
["1", "2", "Fizz", "4", "Buzz"]

n = 15
["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz",
 "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```

## Constraints

- `0 <= n <= 10,000`
- For `n = 0`, return an empty collection.

## Before coding

1. Which rule overlaps with two other rules?
2. Does the order in which you evaluate the rules matter?
3. What should happen when a value matches neither divisor?

## Completion checklist

- [ ] The examples produce the expected output.
- [ ] Zero returns an empty collection.
- [ ] Multiples of 3, 5, and both are covered by tests.
- [ ] The input is traversed only once.
- [ ] Time and space complexity can be explained.

## Reference implementations

Consult these only after completing or explicitly abandoning an attempt:

- [Java 21](../../languages/java/solutions/src/main/java/dev/ruben/algorithms/fizzbuzz)
- [TypeScript](../../languages/typescript/solutions/fizzbuzz)
- [Go](../../languages/go/solutions/fizzbuzz)

Progressive hints are stored in [`hints.md`](./hints.md) for use by the tutor.
