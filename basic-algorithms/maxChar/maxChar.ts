function maxChar(str: string): string {
  const charCount: { [key: string]: number } = {};
  let maxChar = '';
  let maxCount = 0;

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcccccccd"));