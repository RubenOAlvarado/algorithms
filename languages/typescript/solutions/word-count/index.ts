import { wordsCount } from "./word-count";

function main(){
    console.log("Word Count Algorithm");
    const text = "Hello, world! Hello, everyone. Welcome to the world of programming.";
    const wordCounts = wordsCount(text);
    console.log("Word Counts:", wordCounts);
    // Example output: { hello: 2, world: 2, everyone: 1, welcome: 1, to: 1, the: 1, of: 1, programming: 1 }
    console.log("Total unique words:", Object.keys(wordCounts).length);
    const text2 = "This is a test. This test is only a test.";
    const wordCounts2 = wordsCount(text2);
    console.log("Word Counts for second text:", wordCounts2);
    // Example output: { this: 2, is: 2, a: 2, test: 3, only: 1 }
    console.log("Total unique words in second text:", Object.keys(wordCounts2).length);
}

main();