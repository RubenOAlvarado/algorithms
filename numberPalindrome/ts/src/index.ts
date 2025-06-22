import { isPalindrome, isPalindromeString } from "./number-palindrome";

function main(){
    console.log("Is number palindrome algorithm");
    const testNumbers = [121, -121, 10, 12321, 0, 1234321];
    testNumbers.forEach(num => {
        console.log(`Is ${num} a palindrome? ${isPalindrome(num)}`);
    });
    console.log("In Javascript/Typescript, we can use the `toString` method to convert a number to a string and then check if it is a palindrome.");
    testNumbers.forEach(num => {
        console.log(`Is ${num} a palindrome (string method)? ${isPalindromeString(num)}`);
    });
    console.log("This is a simple algorithm to check if a number is a palindrome.");
}

main();