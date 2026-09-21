# Valid Anagram reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm
1. If the lengths of `s` and `t` are not equal, return `false`.
2. Create a frequency map for characters.
3. Iterat through both strings and update the frequency map.
    - For each character in `s`, increment its count.
    - For each character in `t`, decrement its count.
4. After processing both strings, check if all counts in the frequency map are zero.
    - If they are, `s` and `t` are anagrams; otherwise, they are not.
