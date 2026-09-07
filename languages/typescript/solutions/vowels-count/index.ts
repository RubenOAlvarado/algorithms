import { vowels } from "./vowels-count";

function main(){
    const testString = "Hello World";
    const result = vowels(testString);
    console.log(`The number of vowels in "${testString}" is: ${result}`);
}

main();