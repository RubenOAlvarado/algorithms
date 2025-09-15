# Longest Common Prefix Algorithm

## Problem Statement
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

## Algorithm
1. If the input array is empty, return an empty string.
2. Initialize the prefix as the first string in the array.
3. Iterate through the array starting from the second string.
4. For each string, compare it with the current prefix:
   - While the string does not start with the prefix, reduce the prefix by removing the last character.
   - If the prefix becomes empty, return an empty string.
5. If the prefix is still non-empty after checking all strings, return the prefix.

## Implementation

- [Typescript](./ts)
- [Go](./go)
