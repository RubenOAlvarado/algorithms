import { chunkArray } from "./chunkArray";

function main() {
    console.log("Chunk Array Example");
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkSize = 3;
  console.log(`Chunking array: ${array} into chunks of size ${chunkSize}`);
  const chunkedArray = chunkArray(array, chunkSize);
  
  console.log(`Chunked Array: ${JSON.stringify(chunkedArray)}`);

  const array2 = ["a", "b", "c", "d", "e"];
  const chunkSize2 = 2;
    console.log(`Chunking array: ${array2} into chunks of size ${chunkSize2}`);
    const chunkedArray2 = chunkArray(array2, chunkSize2);
    console.log(`Chunked Array: ${JSON.stringify(chunkedArray2)}`);
}

main();