# Diagonal Difference Algorithm

## Problem Statement
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

## Algorithm
1. Initialize two variables to hold the sums of the diagonals.
2. Loop through each row of the matrix.
3. For each row, add the element at the primary diagonal index to the primary diagonal sum.
4. For each row, add the element at the secondary diagonal index to the secondary diagonal sum.
5. Calculate the absolute difference between the two sums.
6. Return the absolute difference.

## Implementations
- [Typescript](./ts)