export function maxChar(str: string): string {
    const charMap = new Map<string, number>();
    let maxChar = '';
    let maxCount = 0;

    for (const char of str) {
        const count = (charMap.get(char) ?? 0) + 1;
        charMap.set(char, count);
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }

    return maxChar;
}