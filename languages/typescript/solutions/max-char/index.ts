import { maxChar } from "./max-char";

function main(){
    console.log("Max Char Example");
    console.log("Input: abcccccccd");
    const result = maxChar("abcccccccd");
    console.log("Expected: c");
    console.log("Result: " + result);
}

main();