import { sumNaturalNumbersWithFormula, sumNaturalNumbersWithLoop } from "./sum-natural-nums";

function main(){
    console.log("Sum of Natural Numbers Algorithm");
    const n = 10; // Example input
    console.log(`Calculating the sum of the first ${n} natural numbers using the formula...`);
    const sum = sumNaturalNumbersWithFormula(n);
    console.log(`The sum of the first ${n} natural numbers is: ${sum}`);
    // Example output: The sum of the first 10 natural numbers is: 55
    console.log(`Calculating the sum of the first ${n} natural numbers using a loop...`);
    const sumLoop = sumNaturalNumbersWithLoop(n);
    console.log(`The sum of the first ${n} natural numbers using a loop is: ${sumLoop}`);
    console.log("Both methods should yield the same result.");
    console.log(`Sum using formula: ${sum}, Sum using loop: ${sumLoop}`);
    const n2 = 20; // Example input for second calculation
    console.log(`Calculating the sum of the first ${n2} natural numbers using the formula...`);
    const sum2 = sumNaturalNumbersWithFormula(n2);
    console.log(`The sum of the first ${n2} natural numbers is: ${sum2}`);
    // Example output: The sum of the first 20 natural numbers is: 210
    console.log(`Calculating the sum of the first ${n2} natural numbers using a loop...`);
    const sumLoop2 = sumNaturalNumbersWithLoop(n2);
    console.log(`The sum of the first ${n2} natural numbers using a loop is: ${sumLoop2}`);
    console.log("Both methods should yield the same result for the second calculation.");
    console.log(`Sum using formula: ${sum2}, Sum using loop: ${sumLoop2}`);
    console.log("End of Sum of Natural Numbers Algorithm");
}

main();