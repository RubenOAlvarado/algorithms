# Merge Strings Alternately Algorithm

## Problem Statement
You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

## Algorithm
1. Initialize an empty array to store the merged characters.
2. Get the maximum length to handle both words completely.
3. Loop through both words simultaneously up to the longest length.
4. Add character from word1 if it exists at current index.
5. Add character from word2 if it exists at current index.
6. Join all characters into a single string and return.

## Implementation

- [TypeScript](./ts)