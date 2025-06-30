import { mergeAlternately } from "./merge-strings";

function main(){
    console.log("Merge Strings Alternately Algorithm");
    console.log("This algorithm merges two strings by alternating characters from each string.");
    console.log("Example: mergeAlternately('abc', '12345') returns 'a1b2c345'");
    const word1 = 'abc';
    const word2 = '12345';
    const merged = mergeAlternately(word1, word2);
    console.log(`Input: word1 = "${word1}", word2 = "${word2}"`);
    console.log(`Output: "${merged}"`);
    console.log("Second test case:");
    const word3 = 'hello';
    const word4 = 'world';
    const merged2 = mergeAlternately(word3, word4);
    console.log(`Input: word1 = "${word3}", word2 = "${word4}"`);
    console.log(`Output: "${merged2}"`);
    console.log("Third test case with different lengths:");
    const word5 = 'abcde';
    const word6 = '123';
    const merged3 = mergeAlternately(word5, word6);
    console.log(`Input: word1 = "${word5}", word2 = "${word6}"`);
    console.log(`Output: "${merged3}"`);
}

main();