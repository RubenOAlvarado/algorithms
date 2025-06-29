# Valid Anagram

## Problem Statement
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

## Algorithm
1. If the lengths of `s` and `t` are not equal, return `false`.
2. Create a frequency map for characters.
3. Iterat through both strings and update the frequency map.
    - For each character in `s`, increment its count.
    - For each character in `t`, decrement its count.
4. After processing both strings, check if all counts in the frequency map are zero.
    - If they are, `s` and `t` are anagrams; otherwise, they are not.

## Implementation
- [TypeScript](./ts)