# Count Digits from an Integer Algorithm

## Problem Statement
Given an integer, return the number of digits in it. For example, if the input is `123`, the output should be `3`.

## Algorithm
1. Initialize a variable `count` to 0.
2. Get the absolute value of the number to handle negative integers.
3. If the number is 0, return 1 (since 0 has one digit).
4. While the number is greater than 0:
    - Remove the last digit from the number (using `num //= 10`).
    - Increment `count` by 1.
5. Return `count`.

## Implementations
- [Typescript](./ts)