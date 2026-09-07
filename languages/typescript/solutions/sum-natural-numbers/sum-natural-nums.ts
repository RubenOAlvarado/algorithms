export function sumNaturalNumbersWithFormula(n: number): number {
    // 1. Check if n is a natural number
    if (n < 1 || !Number.isInteger(n)) {
        throw new Error("Input must be a natural number greater than or equal to 1");
    }
    // 2. Use the formula for the sum of the first n natural numbers: n * (n + 1) / 2
    return (n * (n + 1)) / 2;
}

export function sumNaturalNumbersWithLoop(n: number): number {
    // 1. Check if n is a natural number
    if (n < 1 || !Number.isInteger(n)) {
        throw new Error("Input must be a natural number greater than or equal to 1");
    }
    // 2. Initialize a variable to hold the sum
    let sum = 0;
    // 3. Use a loop to iterate from 1 to n and accumulate the sum
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    // 4. Return the calculated sum
    return sum;
}