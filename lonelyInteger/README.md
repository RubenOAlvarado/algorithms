# Lonely Integer

## Problem Statement
Given an array of integers, where all elements except one appear twice, find the integer that appears only once.

## Algorithm
1. Initialize a variable `result` to 0.
2. Iterate through each integer in the array:
   - Update `result` by performing a [bitwise XOR operation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) with the current integer.
3. After processing all integers, `result` will hold the integer that appears only once.
4. Return `result`.

## Algorithm using hashmap
1. Create an empty hashmap to store the count of each integer.
2. Iterate through each integer in the array:
   - If the integer is not in the hashmap, add it with a count of 1.
   - If it is already in the hashmap, increment its count by 1.
3. After processing all integers, iterate through the hashmap to find the integer with a count of 1.
4. Return that integer.

## Implementations
- [Typescript](./ts)