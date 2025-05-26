# Chunk Array Algorithm

## Problem Statement
Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunk of the specified size.

## Algorithm
1. Initialize an empty array to hold the chunks.
2. Loop through the original array in increments of the chunk size.
3. For each iteration, slice the original array from the current index to the current index plus the chunk size.
4. Push the sliced array into the chunks array.
5. Return the chunks array after the loop completes.

## Implementations
- [Typescript](./ts)
- [Go](./go) (soon)
- [Java](./java) (soon)