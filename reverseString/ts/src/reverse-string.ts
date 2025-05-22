export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

export function reverseStringWithLoop(str: string): string {
    // split the array
    const stringAsArray = str.split('');
    const reversedArray = [];
    // loop through the array in reverse order
    for (let i = stringAsArray.length - 1; i >= 0; i--) {
        reversedArray.push(stringAsArray[i]);
    }
    // join the array to form a string
    // return the reversed string
    return reversedArray.join('');
}