# Palindrome Number Checker

## Problem Statement
Given an integer, return `true` if it is a palindrome, and `false` otherwise. A palindrome is a number that reads the same backward as forward. For example, `121` is a palindrome, while `123` is not.

## Algorithm
1. Initialize a variable `original` to the input number.
2. Initialize a variable `reversed` to 0.
3. While the number is greater than 0:
   - Get the last digit of the number (using `num % 10`).
   - Add this digit to `reversed` (multiply `reversed` by 10 and add the last digit).
   - Remove the last digit from the number (using `num //= 10`).
4. After the loop, compare `original` with `reversed`.
5. If they are equal, return `true`; otherwise, return `false`.

## Implementations
- [Typescript](./ts)
- [Go](./go)
