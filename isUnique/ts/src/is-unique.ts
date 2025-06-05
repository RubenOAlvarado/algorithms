export function isUniqueString(str: string): boolean {
    let charSet: Record<string, any> = {};
    for (const char of str) {
        if (charSet[char]) {
            return false; // Character already exists
        }
        charSet[char] = 1;
    }
    return true; // All characters are unique
}

export function isUniqueStringWithSet(str: string): boolean {
    const charSet = new Set<string>();
    for (const char of str) {
        if (charSet.has(char)) {
            return false; // Character already exists in the set
        }
        charSet.add(char);
    }
    return true; // All characters are unique
}