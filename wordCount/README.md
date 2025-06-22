# Word Count Algorithm

## Problem Statement
Given a string, return the count of how many times each word appears in the string. The words are separated by spaces, and the count should be case-insensitive. Punctuation should be ignored.

## Algorithm
1. Create an empty object to hold the word counts
2. Split the text into words separated by spaces
3. Iterate over each word
4. Clean the word by removing punctuation and converting to lowercase
5. If the word is not empty, increment its count in the object
6. Return the object containing word counts

## Implementations
- [Typescript](./ts)