import { lengthOfLastWord } from './length-last-word';

function main(){
    console.log("Length of Last Word Algorithm");
    const input = "Hello World";
    console.log(`Input: "${input}"`);
    const lengthOfLastWordResult = lengthOfLastWord(input);
    console.log(`Length of Last Word: ${lengthOfLastWordResult}`);
    console.log("Algorithm completed successfully.");
}

main();