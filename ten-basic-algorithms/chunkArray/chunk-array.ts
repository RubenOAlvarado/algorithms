function chunkArray<T>(arr: T[], size: number): T[][] {
  // Create an empty array to hold the chunks
  const result: T[][] = [];
  // Loop through the array and slice it into chunks of the specified size
  for (let i = 0; i < arr.length; i += size) {
    // Use the slice method to create a chunk and push it to the result array
    // The slice method takes two arguments: the start index and the end index (exclusive)
    result.push(arr.slice(i, i + size));
  }
  // Return the array of chunks
  return result;
}