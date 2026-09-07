export function wordsCount(text: string){
    // 1. Create an empty object to hold the word counts
    const wordsMap: { [key: string]: number } = {};
    // 2. Split the text into words separated by spaces
    const words = text.trim().split(" ");
    // 3. Iterate over each word
    for (const word of words) {
        // 4. Clean the word by removing punctuation and converting to lowercase
        const cleanedWord = word.replace(/[.,!?;:()]/g, "").toLowerCase();
        // 5. If the cleaned word is not empty, update the count in the map
        wordsMap[cleanedWord] = (wordsMap[cleanedWord] || 0) + 1;
    }
    // 6. Return the map containing word counts
    return wordsMap;
}