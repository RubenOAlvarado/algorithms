import { countDigits } from "./count-digits";

function main(){
    console.log("Count Digits in a Number Algorithm");
    const number = 1234567890;
    console.log(`The number of digits in ${number} is: ${countDigits(number)}`);
    const negativeNumber = -987654321;
    console.log(`The number of digits in ${negativeNumber} is: ${countDigits(negativeNumber)}`);
    const zero = 0;
    console.log(`The number of digits in ${zero} is: ${countDigits(zero)}`);
    const largeNumber = 12345678901234567890;
    console.log(`The number of digits in ${largeNumber} is: ${countDigits(largeNumber)}`);
    console.log("End of Count Digits in a Number Algorithm");
}

main();