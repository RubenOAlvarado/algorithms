# Factorial of a number algorithm

## Problem Statement
Write a function to calculate the factorial of a given non-negative integer `n`. The factorial of `n` (denoted as `n!`) is the product of all positive integers from `1` to `n`. The factorial of `0` is defined to be `1`.

## Algorithm
1. If `n` is negative, throw an error.
2. If `n` is `0`, return `1`.
3. Otherwise, return `n` multiplied by the factorial of `n - 1`.

## Implementation
- [TypeScript](./ts)