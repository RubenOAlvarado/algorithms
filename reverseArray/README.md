# Reverse Array in Place Algorithm

## Problem Statement
Given an array of integers, a start index, and an end index, write a function that reverses the integers in the in-place without using extra memory.

## Algorithm
1. Check if start index is less than end index. If not, return the array as it is already reversed.
2. Swap the elements at the start and end indices.
3. Increment the start index and decrement the end index.
4. Repeat steps 1-3 until the start index is greater than or equal to the end index.

## Implementations
- [Typescript](./ts)
- [Go](./go)
