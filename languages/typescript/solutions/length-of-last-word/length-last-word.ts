export function lengthOfLastWord(s: string): number {
    // 1. Check if the string is empty. If it is, return 0 as there are no words.
    if (s.length === 0) {
        return 0;
    }

    // 2. Trim the string to remove leading and trailing spaces.
    s = s.trim();

    // 3. Split the trimmed string into an array of words using spaces as the delimiter.
    const words = s.split(' ');

    // 4. Get the last word from the array of words.
    const lastWord = words[words.length - 1];

    // 5. Return the length of the last word.
    return lastWord.length;
}