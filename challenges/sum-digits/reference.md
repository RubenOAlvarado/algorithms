# Sum of Digits reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm
1. Initialize a variable `sum` to 0.
2. While the number is greater than 0:
    - Add the last digit of the number to `sum` (using `num % 10`).
    - Remove the last digit from the number (using `num //= 10`).
3. Return `sum`.
