import { sumOfDigits } from "./sum-digits";

function main() {
    console.log("Sum Digits Algorithm");
    const input = 12345;
    console.log(`Input: ${input}`);
    const result = sumOfDigits(input);
    console.log(`Sum of digits: ${result}`);
    // Example output: Sum of digits: 15
}

main();