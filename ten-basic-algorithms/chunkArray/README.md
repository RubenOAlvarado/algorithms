# Chunk Array

## Description
The function `chunkArray` takes an array and a chunk size as arguments and splits the array into smaller arrays (chunks) of the specified size. If the array cannot be split evenly, the last chunk will contain the remaining elements.

## Examples

chunk([1, 2, 3, 4], 2) === [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]