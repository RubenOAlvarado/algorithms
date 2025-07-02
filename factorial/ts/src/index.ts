import { factorial } from "./factorial";

function main(){
    console.log("Factorial Algorithm");
    const number = 5; // Example input
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
    const negativeNumber = -1; // Example of negative input
    try {
        const negativeResult = factorial(negativeNumber);
        console.log(`The factorial of ${negativeNumber} is ${negativeResult}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error(`Error: ${String(error)}`);
        }
    }
    const zero = 0; // Example of zero input
    const zeroResult = factorial(zero);
    console.log(`The factorial of ${zero} is ${zeroResult}`);
    const one = 1; // Example of one input
    const oneResult = factorial(one);
    console.log(`The factorial of ${one} is ${oneResult}`);
}

main();