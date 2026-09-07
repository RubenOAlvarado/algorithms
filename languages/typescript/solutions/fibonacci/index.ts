import { 
    fibonacci, 
    fibonacciArray, 
    fibonacciBigInt, 
    fibonacciBinet, 
    fibonacciClosedForm, 
    fibonacciClosure, 
    fibonacciDynamic, 
    fibonacciGenerator, 
    fibonacciIterative, 
    fibonacciMatrix, 
    fibonacciMemoized, 
    fibonacciTail 
} from "./fibonacci";

function main(){
    console.log("Fibonacci Sequence:");
    const testCases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Memoized):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciMemoized(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Iterative):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciIterative(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Matrix Exponentiation):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciMatrix(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Binet's Formula):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciBinet(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Generator):");
    const fibGen = fibonacciGenerator();
    for (let i = 0; i < testCases.length; i++) {
        console.log(`Fibonacci(${i}) = ${fibGen.next().value}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Tail Recursion):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciTail(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Dynamic Programming):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciDynamic(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Closed Form):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciClosedForm(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Using BigInt):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciBigInt(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Using Array):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciArray(n)}`);
    }
    console.log("------------------------------");
    console.log("Fibonacci Sequence (Using Closure):");
    for (const n of testCases) {
        console.log(`Fibonacci(${n}) = ${fibonacciClosure(n)}`);
    }
    console.log("End of Fibonacci Sequence Tests");
}

main();