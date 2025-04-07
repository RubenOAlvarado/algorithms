function wordCount(str: string): Record<string, number> {
  const words = str.split(" ");
  const wordMap: Record<string, number> = {};

  for (const word of words) {
    const cleanedWord = word.toLowerCase().replace(/[^\w]/g, '');
    if (cleanedWord) {
      wordMap[cleanedWord] = (wordMap[cleanedWord] || 0) + 1;
    }
  }

  return wordMap;
}