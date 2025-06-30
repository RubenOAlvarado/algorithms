export function mergeAlternately(word1: string, word2: string): string {
    // 1. Initialize an empty array to store the merged characters.
    const merged: string[] = [];
    
    // 2. Get the maximum length to handle both words completely.
    const maxLength = Math.max(word1.length, word2.length);
    
    // 3. Loop through both words simultaneously up to the longest length.
    for (let i = 0; i < maxLength; i++) {
        // 4. Add character from word1 if it exists at current index.
        if (i < word1.length) {
            merged.push(word1[i]);
        }
        // 5. Add character from word2 if it exists at current index.
        if (i < word2.length) {
            merged.push(word2[i]);
        }
    }
    
    // 6. Join all characters into a single string and return.
    return merged.join('');
}