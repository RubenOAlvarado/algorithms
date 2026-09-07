export function sumOfDigits(n: number): number {
    // plus: Check if the input `n` is a non-negative integer.
    if (n < 0) throw new Error("Input must be a non-negative integer.");
    
    // 1. Initialize a variable `sum` to 0.
    let sum = 0;
    // 2. While the number is greater than 0:
    while (n > 0) {
        // - Add the last digit of the number to `sum` (using `num % 10`).
        sum += n % 10;
        // - Remove the last digit from the number (using `Math.floor(num / 10)`).
        n = Math.floor(n / 10);
    }
    
    // 3. Return `sum`.
    return sum;
}