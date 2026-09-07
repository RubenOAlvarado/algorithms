export function firstOccurrence(str: string, char: string): number {
    for(const character of str) {
        if(character === char) {
            return str.indexOf(character);
        }
    }
    return -1;
}