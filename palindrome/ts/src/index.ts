import { isPalindrome } from "./palindrome";

function main(){
    console.log("Palindrome Checker");
    const str = "Was it a car or a cat I saw?";
    console.log(`Input: ${str}`);
    console.log(`Is Palindrome: ${isPalindrome(str)}`);
    console.log("Second test");
    const str2 = "Anita lava la tina";
    console.log(`Input: ${str2}`);
    console.log(`Is Palindrome: ${isPalindrome(str2)}`);
    console.log("Third test (not a palindrome)");
    const str3 = "Hello, World!";
    console.log(`Input: ${str3}`);
    console.log(`Is Palindrome: ${isPalindrome(str3)}`);
}

main();