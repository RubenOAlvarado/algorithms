export function findLonelyInteger(a: number[]): number{
    // 1. Initialize a variable `result` to 0.
    let lonely = 0;
    // 2. Iterate through each integer in the array:
    for(const num of a) {
        // Update `result` by performing a bitwise XOR operation with the current integer.
        lonely ^= num;
    }
    // 3. After iterating through all integers, `result` will hold the lonely integer.
    // 4. Return `result`.
    return lonely;
}

export function findLonelyIntegerWithHashMap(a: number[]): number {
    // 1. Create an empty hashmap to store the count of each integer.
    const countMap: Record<number, number> = {};
    
    // 2. Iterate through each integer in the array:
    for(const num of a) {
        // If the integer is not in the hashmap, add it with a count of 1.
        // If it is already in the hashmap, increment its count.
        countMap[num] = (countMap[num] || 0) + 1;
    }
    
    // 3. After processing all integers, 
    // iterate through the hashmap to find the integer with a count of 1.
    for(const key in countMap) {
        // Return that integer.
        if(countMap[key] === 1) {
            return parseInt(key);
        }
    }
    
    // If no lonely integer is found, return -1 (or handle as needed).
    return -1;
}