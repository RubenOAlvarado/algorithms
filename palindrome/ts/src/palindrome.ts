export function isPalindrome(str: string): boolean {
    // 1. Convert the string to lowercase
    const lowerStr = str.toLowerCase();
    // 2. Remove all non-alphanumeric characters
    const alphanumericStr = lowerStr.replace(/[^a-z0-9]/g, '');
    // 3. Reverse the string
    const reversedStr = reverseString(alphanumericStr);
    // 4. Compare the original and reversed strings
    return alphanumericStr === reversedStr;
}

function reverseString (str: string): string {
    return str.split('').reverse().join('');
}