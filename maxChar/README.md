# Max Char in a String Algorithm

## Problem Statement
Given a string, find the character that appears the most number of times.

## Algorithm to solve it
1. Declare 3 variables:
   - `maxChar`: to store the character with the maximum occurrences.
   - `maxCount`: to store the maximum count of occurrences.
   - `charMap`: a Map object to store the count of each character.
2. Iterate through the string:
   - For each character, update its count in `charMap`.
   - If the character is not in `charMap`, add it with a count of 1.
   - If the count of the current character exceeds `maxCount`, update `maxCount` and `maxChar`.
3. Return `maxChar`.

## Implementations
- [Typescript](./ts)