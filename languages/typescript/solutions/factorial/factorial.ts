export function factorial(n: number): number {
    // 1. If `n` is negative, throw an error.
    // Factorial is not defined for negative numbers.
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    // 2. If `n` is `0`, return `1`.
    if (n === 0 || n === 1) {
        return 1;
    }
    // 3. Otherwise, return `n` multiplied by the factorial of `n - 1`.
    // This is the recursive step.
    return n * factorial(n - 1);
}