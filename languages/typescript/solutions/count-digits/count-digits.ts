export function countDigits(n: number): number {
    // 1. Initialize a variable `count` to 0.
    let count = 0;
    // 2. Convert the number to its absolute value to handle negative integers.
    let num = Math.abs(n);
    // If the number is 0, return 1 (since 0 has one digit).
    if(num === 0) {
        return 1;
    }
    // 4. While the number is greater than 0:
    while (num > 0) {
        // - Remove the last digit from the number (using `num //= 10`).
        num = Math.floor(num / 10);
        // - Increment the `count` by 1.
        count++;
    }
    // 5. Return the `count`.
    return count;
}