export function isAnagram(s: string, t: string): boolean {
    // 1. If the lengths of `s` and `t` are not equal, return `false`.
    if (s.length !== t.length) {
        return false;
    }
    
    // 2. Create a frequency map for characters.
    const charCount: Record<string, number> = {};
    
    // 3. Iterat through both strings and update the frequency map.
    //    Increment the count for characters in `s` and decrement for characters in `t`.
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
        charCount[t[i]] = (charCount[t[i]] || 0) - 1;
    }
    
    // 4. Check if all counts in the frequency map are zero.
    //    If they are, `s` and `t` are anagrams; otherwise, they are not.
    return Object.values(charCount).every(count => count === 0);
}

export function isAnagramOneLiner(s: string, t: string): boolean {
    return s.split('').sort().join('') === t.split('').sort().join('');
}