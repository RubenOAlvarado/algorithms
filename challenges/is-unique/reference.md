# Is Unique Characters reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm
1. Create an empty object or set to keep track of characters.
2. Iterate through each character in the string.
3. For each character, check if it already exists in the object or set.
   - If it does, return false (the string does not have all unique characters).
   - If it does not, add the character to the object or set.
4. If the loop completes without finding duplicates, return true (the string has all unique characters).
