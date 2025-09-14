# Sum of Digits

Given an integer, return the sum of its digits. For example, if the input is `123`, the output should be `6` (1 + 2 + 3).

## Algorithm
1. Initialize a variable `sum` to 0.
2. While the number is greater than 0:
    - Add the last digit of the number to `sum` (using `num % 10`).
    - Remove the last digit from the number (using `num //= 10`).
3. Return `sum`.

## Implementations
- [Typescript](./ts)
- [Go](./go)
