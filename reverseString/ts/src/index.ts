import { reverseString, reverseStringWithLoop } from "./reverse-string";

function main(){
    console.log(`Reverse "Hello, World!" with array methods:`);
    const str = "Hello, World!";
    const reversedStr = reverseString(str);
    console.log(reversedStr); // Output: !dlroW ,olleH

    console.log(`Reverse "Hello, World!" with loop:`);
    const reversedStrWithLoop = reverseStringWithLoop(str);
    console.log(reversedStrWithLoop); // Output: !dlroW ,olleH

    console.log("Same result? ", reversedStr === reversedStrWithLoop); // Output: true
}

main();