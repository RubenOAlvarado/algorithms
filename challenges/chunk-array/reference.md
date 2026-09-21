# Chunk Array Algorithm reference notes

This document belongs to the reference material. The tutor should not reveal it
before the learner has attempted the challenge.

## Algorithm
1. Initialize an empty array to hold the chunks.
2. Loop through the original array in increments of the chunk size.
3. For each iteration, slice the original array from the current index to the current index plus the chunk size.
4. Push the sliced array into the chunks array.
5. Return the chunks array after the loop completes.
