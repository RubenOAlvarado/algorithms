export function reverseInteger(x: number): number {
    // 1. Check if the number is negative
  const isNegative = x < 0;
    // 2. Convert the number to a string and reverse it
  const reversedString = Math.abs(x).toString().split('').reverse().join('');
    // 3. Convert the reversed string back to a number
  // 4. Check if the reversed number is within the 32-bit signed integer range
  const reversedInteger = parseInt(reversedString, 10);

    // 5. If the reversed number is greater than 2^31 - 1, return 0
  if (reversedInteger > 2 ** 31 - 1) {
    return 0;
  }

    // 6. If the reversed number is negative add the sign back
  // 7. Return the reversed number
  return isNegative ? -reversedInteger : reversedInteger;
}