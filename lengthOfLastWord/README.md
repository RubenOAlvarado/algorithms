# Length of Last Word Algorithm

## Problem Statement
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

## Algorithm
1. Check if the string is empty. If it is, return 0 as there are no words.
2. Trim the input string to remove leading and trailing spaces.
3. Split the trimmed string into an array of words using spaces as the delimiter.
4. Get the last word from the array of words.
5. Return the length of the last word.

## Implementation
- [TypeScript](./ts)