function cleanString(str: string): string {
    return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}

function isAnagram(strA: string, strB: string): boolean {
    return cleanString(strA) === cleanString(strB);
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false