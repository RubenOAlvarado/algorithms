import { firstOccurrence } from "./first-occurrence";

function main(){
    console.log("First occurrence of a string algorithm in TypeScript");
    const str = "hello world, hello universe";
    const char = "o";
    const index = firstOccurrence(str, char);
    console.log(`The first occurrence of '${char}' in '${str}' is at index: ${index}`);
}

main();