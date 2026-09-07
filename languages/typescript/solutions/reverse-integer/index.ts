import { reverseInteger } from "./reverse-integer";

function main(){
    console.log("Reverse Integer");
    const num = 12345;
    console.log(`Input: ${num}`);
    console.log(`Reversed: ${reverseInteger(num)}`);
    console.log("Second test");
    const num2 = -67890;
    console.log(`Input: ${num2}`);
    console.log(`Reversed: ${reverseInteger(num2)}`);

    console.log("Third test (out of range)");
    const num3 = 1534236469; // This will cause overflow
    console.log(`Input: ${num3}`);
    console.log(`Reversed: ${reverseInteger(num3)}`); // Should return 0
}

main();