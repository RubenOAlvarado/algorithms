# Spiral Matrix Algorithm

## Problem Statement
Given an `m x n` matrix, return all elements of the matrix in spiral order (clockwise, starting from the top left corner).

## Algorithm
1. Initialize the boundaries:
    1. top = 0, bottom = matrix.length - 1 (last row index)
    2. left = 0, right = matrix[0].length - 1
2. Loop while `top <= bottom` and `left <= right`
    1. Traverse right (top row, left to right) → add elements to result.
    2. Move top boundary down (top++)
    3. Traverse down (right column, top to bottom) → add elements.
    4. Move right boundary left (right—)
    5. If `top <= bottom`, traverse left (bottom row, right to left) → add elements
    6. Move bottom boundary up (bottom—)
    7. if `left <= right`, traverse up (left column, bottom to top) → add elements
    8. Move left boundary right (left++)
3. Return the result array.

## Implementations
- [Typescript](./ts)
- [Go](./go) (soon)
- [Java](./java) (soon)