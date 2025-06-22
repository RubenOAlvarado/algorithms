export function isPalindrome(num: number): boolean{
    // 1. Initialize a variable `original` to the input number.
    let original = Math.abs(num);
    // 2. Initialize a variable `reversed` to 0.
    let reversed = 0;
    // 3. While `original` is greater than 0:
    while( original > 0){
        // - Get the last digit of the number (using `num % 10`).
        const digit = original % 10;
        // - Add this digit to `reversed` (multiply `reversed` by 10 and add the last digit).
        reversed = reversed * 10 + digit;
        // - Remove the last digit from the number (using `num //= 10`).
        original = Math.floor(original / 10);
    }

    // 4. After the loop, compare `original` with `reversed`.
    // 5. If they are equal, return `true`; otherwise, return `false`.
    return original === reversed;
}

export function isPalindromeString(num: number): boolean {
    const str = Math.abs(num).toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}