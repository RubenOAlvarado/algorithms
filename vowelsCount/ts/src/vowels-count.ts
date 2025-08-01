export function vowels(str: string): number {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }
    return count;
}