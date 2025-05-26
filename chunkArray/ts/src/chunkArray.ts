export function chunkArray(
  array: any[],
  chunkSize: number
): any[][] {
  if (!Array.isArray(array) || chunkSize <= 0) {
    throw new Error("Invalid input: array must be an array and chunkSize must be a positive integer.");
  }

  const result: any[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  
  return result;
}