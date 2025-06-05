# Is Unique Characters

## Problem Statement
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

## Algorithm
1. Create a boolean array of size 256 (assuming ASCII characters).
2. Loop through each character in the string.
3. For each character, check if it has been seen before by checking the boolean array.
4. If it has been seen, return false.
5. If it has not been seen, mark it as seen in the boolean array.
6. If the loop completes without finding duplicates, return true.
7. If you cannot use additional data structures, sort the string and then check for adjacent characters.

## Implementations
- [Typescript](./ts)
- [Go](./go) (soon)
- [Java](./java) (soon)